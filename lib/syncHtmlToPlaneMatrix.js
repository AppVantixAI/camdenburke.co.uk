import * as THREE from 'three';

const _pixelToLocal = new THREE.Matrix4();
const _mvp = new THREE.Matrix4();
const _viewport = new THREE.Matrix4();
const _center = new THREE.Vector3();
const _frustum = new THREE.Frustum();
const _viewProjection = new THREE.Matrix4();

let _cachedCssW = -1;
let _cachedCssH = -1;

function updateViewportMatrix(cssW, cssH) {
  if (cssW === _cachedCssW && cssH === _cachedCssH) return;
  _viewport.set(
    cssW / 2,
    0,
    0,
    cssW / 2,
    0,
    -cssH / 2,
    0,
    cssH / 2,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  );
  _cachedCssW = cssW;
  _cachedCssH = cssH;
}

/**
 * Perspective-correct HTML sync (ported from Three.js HTMLTexture / InteractionManager).
 * Maps element pixel coords onto a PlaneGeometry mesh via CSS matrix3d.
 */
export function syncHtmlToPlaneMatrix({
  screenMesh,
  camera,
  mountEl,
  element,
  iframeWidth,
  iframeHeight,
  domFlip = { x: 1, y: 1 },
  displayScale = 1,
}) {
  if (!screenMesh || !camera || !mountEl || !element) {
    return { visible: false, reason: 'missing-args' };
  }

  const pw = (screenMesh.userData?.planeWidth ?? 0) * displayScale;
  const ph = (screenMesh.userData?.planeHeight ?? 0) * displayScale;
  if (pw <= 0 || ph <= 0) {
    return { visible: false, reason: 'no-plane-size' };
  }

  const cssW = mountEl.clientWidth;
  const cssH = mountEl.clientHeight;
  if (cssW < 2 || cssH < 2) {
    return { visible: false, reason: 'mount-too-small' };
  }

  const elemW = iframeWidth;
  const elemH = iframeHeight;
  const flipX = domFlip?.x ?? 1;
  const flipY = domFlip?.y ?? 1;

  camera.updateMatrixWorld();
  screenMesh.updateWorldMatrix(true, false);

  _center.set(0, 0, 0);
  _center.applyMatrix4(screenMesh.matrixWorld);
  _center.project(camera);

  if (_center.z > 1) {
    element.style.opacity = '0';
    element.style.pointerEvents = 'none';
    return { visible: false, reason: 'behind-camera' };
  }

  camera.updateMatrixWorld();
  _viewProjection.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  _frustum.setFromProjectionMatrix(_viewProjection);
  if (!_frustum.containsPoint(_center)) {
    element.style.opacity = '0';
    element.style.pointerEvents = 'none';
    return { visible: false, reason: 'outside-frustum' };
  }

  updateViewportMatrix(cssW, cssH);

  const sx = (pw / elemW) * flipX;
  const sy = (-ph / elemH) * flipY;
  const tx = (-pw / 2) * flipX;
  const ty = (ph / 2) * flipY;

  _pixelToLocal.set(sx, 0, 0, tx, 0, sy, 0, ty, 0, 0, 1, 0, 0, 0, 0, 1);

  _mvp.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  _mvp.multiply(screenMesh.matrixWorld);
  _mvp.multiply(_pixelToLocal);
  _mvp.premultiply(_viewport);

  element.style.position = 'absolute';
  element.style.left = '0';
  element.style.top = '0';
  element.style.transformOrigin = '0 0';
  element.style.width = `${elemW}px`;
  element.style.height = `${elemH}px`;
  element.style.transform = `matrix3d(${_mvp.elements.join(',')})`;
  element.style.opacity = '1';
  element.style.pointerEvents = 'none';

  return {
    visible: true,
    transform: element.style.transform,
    ndcZ: _center.z,
  };
}

/** Reset cached viewport when mount is torn down. */
export function resetHtmlPlaneSyncCache() {
  _cachedCssW = -1;
  _cachedCssH = -1;
}
