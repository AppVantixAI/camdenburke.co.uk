import * as THREE from 'three';
import { BLIMP_SCREEN_UV, blimpScreenUVMetrics } from './retroScreenUV.js';

/** Face-on view: 180° flip, then 15° CW, 5° CCW, 1° CCW on the CRT plane. */
const SCREEN_FLIP_Z = Math.PI;
const SCREEN_TILT_CLOCKWISE_Z = -Math.PI / 12;
const SCREEN_TILT_COUNTERCLOCKWISE_Z = Math.PI / 36;
const SCREEN_TILT_CCW_1_Z = Math.PI / 180;
/** Fine-tune CRT position: negative X = right, negative Y = down on the glass. */
export const SCREEN_OFFSET_X_DEG = -13.5;
export const SCREEN_OFFSET_Y_DEG = 10;
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _xMesh = new THREE.Vector3();
const _yMesh = new THREE.Vector3();
const _zAxis = new THREE.Vector3();
const _m = new THREE.Matrix4();

function getMeshUVAttribute(geometry) {
  return geometry.attributes.uv || geometry.attributes.TEXCOORD_0;
}

function uvInRect(u, v, rect) {
  return u >= rect.u0 && u <= rect.u1 && v >= rect.v0 && v <= rect.v1;
}

/** World-space vertex samples inside a UV rectangle. */
export function collectUVVertexSamples(mesh, rect) {
  const geom = mesh.geometry;
  const uvAttr = getMeshUVAttribute(geom);
  const posAttr = geom.attributes.position;
  if (!uvAttr || !posAttr) return [];

  const index = geom.index;
  const triCount = index ? index.count / 3 : posAttr.count / 3;
  const byIndex = new Map();

  mesh.updateWorldMatrix(true, false);

  for (let t = 0; t < triCount; t++) {
    const i0 = index ? index.getX(t * 3) : t * 3;
    const i1 = index ? index.getX(t * 3 + 1) : t * 3 + 1;
    const i2 = index ? index.getX(t * 3 + 2) : t * 3 + 2;
    const cu = (uvAttr.getX(i0) + uvAttr.getX(i1) + uvAttr.getX(i2)) / 3;
    const cv = (uvAttr.getY(i0) + uvAttr.getY(i1) + uvAttr.getY(i2)) / 3;
    if (!uvInRect(cu, cv, rect)) continue;

    for (const idx of [i0, i1, i2]) {
      if (byIndex.has(idx)) continue;
      const u = uvAttr.getX(idx);
      const v = uvAttr.getY(idx);
      if (!uvInRect(u, v, rect)) continue;
      const wp = new THREE.Vector3().fromBufferAttribute(posAttr, idx);
      wp.applyMatrix4(mesh.matrixWorld);
      byIndex.set(idx, { u, v, world: wp });
    }
  }

  return [...byIndex.values()];
}

/** Least-squares ∂world/∂u and ∂world/∂v from UV samples (avoids skewed mesh-local axes). */
function fitUVTangentBasis(samples, center) {
  let cu = 0;
  let cv = 0;
  for (const s of samples) {
    cu += s.u;
    cv += s.v;
  }
  cu /= samples.length;
  cv /= samples.length;

  let duu = 0;
  let dvv = 0;
  const uTan = new THREE.Vector3();
  const vTan = new THREE.Vector3();

  for (const s of samples) {
    const du = s.u - cu;
    const dv = s.v - cv;
    _v.subVectors(s.world, center);
    duu += du * du;
    dvv += dv * dv;
    uTan.add(_v.clone().multiplyScalar(du));
    vTan.add(_v.clone().multiplyScalar(dv));
  }

  if (duu > 1e-8) uTan.divideScalar(duu);
  if (dvv > 1e-8) vTan.divideScalar(dvv);

  return { uTan, vTan, cu, cv };
}

const _worldAtUV = new THREE.Vector3();

/** World position at (u,v) using the fitted UV→world linear model. */
function worldAtUV(center, uTan, vTan, cu, cv, u, v, target = _worldAtUV) {
  return target
    .copy(center)
    .addScaledVector(uTan, u - cu)
    .addScaledVector(vTan, v - cv);
}

/**
 * Screen basis from UV tangents (geometry tilt is in vertices, not mesh.quaternion).
 */
function quaternionFromUVTangents(uTan, vTan, zDir, toCam) {
  const xAxis = uTan.clone();
  if (xAxis.lengthSq() < 1e-10) xAxis.set(1, 0, 0);
  xAxis.normalize();

  const yAxis = vTan.clone();
  if (yAxis.dot(zDir) > 0.01) {
    yAxis.addScaledVector(zDir, -yAxis.dot(zDir));
  }
  yAxis.addScaledVector(xAxis, -yAxis.dot(xAxis));
  if (yAxis.lengthSq() < 1e-10) {
    yAxis.crossVectors(zDir, xAxis);
  }
  yAxis.normalize();

  _zAxis.crossVectors(xAxis, yAxis).normalize();
  if (_zAxis.dot(toCam) < 0) {
    yAxis.negate();
    _zAxis.crossVectors(xAxis, yAxis).normalize();
  }
  if (_zAxis.dot(zDir) < 0) {
    _zAxis.negate();
    yAxis.negate();
    _zAxis.crossVectors(xAxis, yAxis).normalize();
  }

  _m.makeBasis(xAxis, yAxis, _zAxis);
  return new THREE.Quaternion().setFromRotationMatrix(_m);
}

/**
 * Screen anchor: UV-tangent orientation + UV-sized plane on Details glass.
 */
export function buildScreenAnchorFromMesh({
  deskRoot,
  screenMesh,
  camera,
  bezelInset = 1,
  outwardPush = 0.004,
  showDebug = false,
  iframeWidth = 1920,
  iframeHeight = 1080,
  alignToBlimpTexture = true,
  uvRect = BLIMP_SCREEN_UV,
  /** When false, plane matches the UV rect exactly (recommended for blimp CRT). */
  fitIframeAspect = undefined,
}) {
  if (!deskRoot || !screenMesh?.isMesh || !camera) {
    throw new Error('buildScreenAnchorFromMesh: deskRoot, screenMesh, camera required');
  }

  deskRoot.updateMatrixWorld(true);
  screenMesh.updateWorldMatrix(true, false);

  const rect = alignToBlimpTexture ? uvRect : { u0: 0, v0: 0, u1: 1, v1: 1 };
  const samples = collectUVVertexSamples(screenMesh, rect);
  if (samples.length < 4) {
    throw new Error(`buildScreenAnchorFromMesh: only ${samples.length} UV samples`);
  }

  const center = new THREE.Vector3();
  for (const s of samples) center.add(s.world);
  center.multiplyScalar(1 / samples.length);

  const { uTan, vTan, cu, cv } = fitUVTangentBasis(samples, center);
  const { uMid, vMid, uSpan, vSpan } = blimpScreenUVMetrics(rect);
  const useExactRect = alignToBlimpTexture;
  const letterbox = fitIframeAspect ?? !useExactRect;

  _xMesh.copy(uTan).normalize();
  _yMesh.copy(vTan);
  _yMesh.addScaledVector(_xMesh, -_yMesh.dot(_xMesh));
  _yMesh.normalize();
  const zDir = new THREE.Vector3().crossVectors(_xMesh, _yMesh).normalize();

  const centerRect = worldAtUV(center, uTan, vTan, cu, cv, uMid, vMid, new THREE.Vector3());

  const toCam = _v.copy(camera.position).sub(centerRect).normalize();
  if (zDir.dot(toCam) < 0) zDir.negate();

  const worldW = uTan.length() * uSpan;
  const worldH = vTan.length() * vSpan;

  let planeWidth = worldW * bezelInset;
  let planeHeight = worldH * bezelInset;
  const iframeAspect = iframeWidth / iframeHeight;
  const regionAspect = planeWidth / Math.max(planeHeight, 1e-6);

  if (letterbox) {
    if (regionAspect > iframeAspect) {
      planeWidth = planeHeight * iframeAspect;
    } else if (regionAspect < iframeAspect) {
      planeHeight = planeWidth / iframeAspect;
    }
  }

  centerRect.add(zDir.clone().multiplyScalar(outwardPush));
  const slideX = planeWidth * Math.tan(THREE.MathUtils.degToRad(SCREEN_OFFSET_X_DEG));
  const slideY = planeHeight * Math.tan(THREE.MathUtils.degToRad(SCREEN_OFFSET_Y_DEG));
  centerRect.add(_xMesh.clone().multiplyScalar(slideX));
  centerRect.add(_yMesh.clone().multiplyScalar(slideY));

  const screenQuat = quaternionFromUVTangents(uTan, vTan, zDir, toCam);

  const anchor = new THREE.Group();
  anchor.name = 'screen-anchor';
  deskRoot.add(anchor);

  deskRoot.updateWorldMatrix(true, false);
  anchor.position.copy(deskRoot.worldToLocal(centerRect));

  deskRoot.getWorldQuaternion(_q);
  _q.invert();
  anchor.quaternion.copy(_q.multiply(screenQuat));
  anchor.rotateZ(SCREEN_FLIP_Z);
  anchor.rotateZ(SCREEN_TILT_CLOCKWISE_Z);
  anchor.rotateZ(SCREEN_TILT_COUNTERCLOCKWISE_Z);
  anchor.rotateZ(SCREEN_TILT_CCW_1_Z);
  anchor.scale.set(1, 1, 1);

  const cssDomFlip = { x: 1, y: 1 };
  const cssScale = planeWidth / iframeWidth;

  const screenBacking = new THREE.Mesh(
    new THREE.PlaneGeometry(planeWidth, planeHeight),
    new THREE.MeshBasicMaterial({
      color: 0x020806,
      side: THREE.DoubleSide,
    })
  );
  screenBacking.name = 'screen-backing';
  screenBacking.renderOrder = 11;
  anchor.add(screenBacking);

  const screenPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(planeWidth, planeHeight),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  screenPlane.name = 'monitor-screen';
  screenPlane.position.z = 0.003;
  screenPlane.renderOrder = 12;
  screenPlane.userData.isScreen = true;
  screenPlane.userData.planeWidth = planeWidth;
  screenPlane.userData.planeHeight = planeHeight;
  screenPlane.userData.cssScale = cssScale;
  screenPlane.userData.cssDomFlip = cssDomFlip;
  screenPlane.userData.uvRect = { ...rect };
  screenPlane.userData.alignToBlimpTexture = alignToBlimpTexture;
  screenPlane.visible = false;
  anchor.add(screenPlane);

  const screenHit = new THREE.Mesh(
    new THREE.PlaneGeometry(planeWidth * 1.02, planeHeight * 1.02),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  screenHit.position.z = 0.001;
  screenHit.userData.isScreen = true;
  anchor.add(screenHit);

  if (showDebug) {
    const debugPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(planeWidth, planeHeight),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      })
    );
    debugPlane.name = 'screen-debug-plane';
    debugPlane.position.z = 0.003;
    anchor.add(debugPlane);
  }

  anchor.updateWorldMatrix(true, true);
  anchor.userData.autoPose = {
    position: anchor.position.clone(),
    quaternion: anchor.quaternion.clone(),
    scale: anchor.scale.clone(),
  };
  anchor.userData.screenAnchorDebug = {
    method: 'blimp-uv-rect-matrix3d',
    uvRect: { ...rect },
    uMid,
    vMid,
    uSpan,
    vSpan,
    planeWidth,
    planeHeight,
    worldW,
    worldH,
    regionAspect,
    iframeAspect,
    letterbox,
    cssScale,
    cssDomFlip,
    planeNormal: zDir.clone(),
  };

  return {
    anchor,
    screenMesh: screenPlane,
    screenHit,
    planeWidth,
    planeHeight,
    baseCssScale: cssScale,
    debug: anchor.userData.screenAnchorDebug,
  };
}

export function getScreenTransformRoot(screenMesh) {
  if (!screenMesh) return null;
  let node = screenMesh;
  while (node) {
    if (node.name === 'screen-anchor') return node;
    node = node.parent;
  }
  return screenMesh;
}

export function screenScaleFromMesh(
  screenMesh,
  iframeWidth,
  iframeHeight = 1080,
  displayScale = 1
) {
  const pw = screenMesh?.userData?.planeWidth;
  const ph = screenMesh?.userData?.planeHeight;
  if (!pw || !ph) return 0.001;

  screenMesh.updateWorldMatrix(true, true);
  _v.setFromMatrixColumn(screenMesh.matrixWorld, 0);
  const colX = _v.length();
  _v.setFromMatrixColumn(screenMesh.matrixWorld, 1);
  const colY = _v.length();
  const scaleW = (colX * pw) / iframeWidth;
  const scaleH = (colY * ph) / iframeHeight;
  const base = Math.min(scaleW, scaleH);
  if (!Number.isFinite(base) || base <= 0) return 0.001;
  return base * displayScale;
}

export function getAnchorCornerWorldPositions(anchor, planeWidth, planeHeight) {
  const hw = planeWidth / 2;
  const hh = planeHeight / 2;
  const corners = [
    new THREE.Vector3(-hw, -hh, 0),
    new THREE.Vector3(hw, -hh, 0),
    new THREE.Vector3(hw, hh, 0),
    new THREE.Vector3(-hw, hh, 0),
  ];
  anchor.updateMatrixWorld(true);
  return corners.map((c) => anchor.localToWorld(c.clone()));
}

export function projectWorldToScreen(vec3, camera, width, height) {
  const v = vec3.clone().project(camera);
  return {
    x: (v.x * 0.5 + 0.5) * width,
    y: (-v.y * 0.5 + 0.5) * height,
    ndcZ: v.z,
  };
}

/** @deprecated */
export function createScreenAnchorFromMesh(mesh, options = {}) {
  return buildScreenAnchorFromMesh({
    deskRoot: options.attachTo,
    screenMesh: mesh,
    camera: options.camera,
    bezelInset: ((options.widthFactor ?? 1) + (options.heightFactor ?? 1)) / 2,
    outwardPush: options.worldForwardPush ?? 0.004,
    showDebug: options.debugCorners ?? false,
  });
}
