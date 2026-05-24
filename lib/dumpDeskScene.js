import * as THREE from 'three';
import { getScreenTransformRoot, screenScaleFromMesh } from './screenAnchor';
import { getScreenAnchor, loadCalibratedAnchor } from './screenCalibration';

function fmtVec3(v) {
  return {
    x: Math.round(v.x * 10000) / 10000,
    y: Math.round(v.y * 10000) / 10000,
    z: Math.round(v.z * 10000) / 10000,
  };
}

function objectReport(obj, label) {
  if (!obj) return { label, missing: true };
  const wp = new THREE.Vector3();
  const wq = new THREE.Quaternion();
  const ws = new THREE.Vector3();
  obj.updateWorldMatrix(true, true);
  obj.matrixWorld.decompose(wp, wq, ws);
  const euler = new THREE.Euler().setFromQuaternion(wq);
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  return {
    label,
    name: obj.name || null,
    type: obj.type,
    visible: obj.visible,
    local: {
      position: fmtVec3(obj.position),
      rotationRad: fmtVec3(obj.rotation),
      rotationDeg: {
        x: THREE.MathUtils.radToDeg(obj.rotation.x),
        y: THREE.MathUtils.radToDeg(obj.rotation.y),
        z: THREE.MathUtils.radToDeg(obj.rotation.z),
      },
      scale: fmtVec3(obj.scale),
    },
    world: {
      position: fmtVec3(wp),
      rotationDeg: {
        x: THREE.MathUtils.radToDeg(euler.x),
        y: THREE.MathUtils.radToDeg(euler.y),
        z: THREE.MathUtils.radToDeg(euler.z),
      },
      scale: fmtVec3(ws),
    },
    worldBounds: {
      min: fmtVec3(box.min),
      max: fmtVec3(box.max),
      size: fmtVec3(size),
    },
  };
}

function traverseTree(obj, depth = 0, maxDepth = 6) {
  if (!obj || depth > maxDepth) return [];
  const row = {
    depth,
    name: obj.name || obj.type,
    type: obj.type,
    worldPosition: fmtVec3(
      obj.getWorldPosition(new THREE.Vector3())
    ),
  };
  const kids = [];
  if (obj.children?.length) {
    for (const c of obj.children) {
      kids.push(...traverseTree(c, depth + 1, maxDepth));
    }
  }
  return [row, ...kids];
}

/**
 * Log full desk scene state (world space). Call from browser console: __cbDumpDeskScene()
 */
export function dumpDeskScene(ctx) {
  const {
    scene,
    camera,
    controls,
    workstationGroup,
    deskModel,
    screenMesh,
    screenHit,
    screenFrame,
    lastScreenSync,
    calibState,
    iframeW = 1920,
    iframeH = 1080,
    screenDisplayScale = 1.5,
    mode,
  } = ctx;

  const anchor = screenMesh ? getScreenAnchor(screenMesh) : null;
  const transformRoot = screenMesh ? getScreenTransformRoot(screenMesh) : null;
  const cssScale = screenMesh
    ? screenScaleFromMesh(screenMesh, iframeW, iframeH) * (calibState?.displayScale ?? screenDisplayScale)
    : null;

  const report = {
    mode,
    localStorageCalibration: loadCalibratedAnchor(),
    calibState: calibState
      ? {
          displayScale: calibState.displayScale,
          panMode: calibState.panMode,
        }
      : null,
    scene: {
      background: scene?.background?.getHexString?.() ?? null,
      fog: scene?.fog
        ? {
            type: scene.fog.type,
            color: scene.fog.color?.getHexString?.(),
            density: scene.fog.density,
          }
        : null,
      childCount: scene?.children?.length,
    },
    camera: camera
      ? {
          type: camera.type,
          fov: camera.fov,
          near: camera.near,
          far: camera.far,
          position: fmtVec3(camera.position),
          worldDirection: fmtVec3(
            camera.getWorldDirection(new THREE.Vector3())
          ),
        }
      : null,
    orbitControls: controls
      ? {
          target: fmtVec3(controls.target),
          minDistance: controls.minDistance,
          maxDistance: controls.maxDistance,
          minAzimuthAngle: controls.minAzimuthAngle,
          maxAzimuthAngle: controls.maxAzimuthAngle,
          minPolarAngle: controls.minPolarAngle,
          maxPolarAngle: controls.maxPolarAngle,
          enabled: controls.enabled,
        }
      : null,
    screenFrame: screenFrame
      ? {
          opacity: screenFrame.style.opacity,
          width: screenFrame.style.width,
          height: screenFrame.style.height,
          transform: screenFrame.style.transform
            ? `${String(screenFrame.style.transform).slice(0, 120)}…`
            : null,
          sync: lastScreenSync ?? null,
          computedCssScale: cssScale,
          iframePixels: { w: iframeW, h: iframeH },
          screenDisplayScale: calibState?.displayScale ?? screenDisplayScale,
        }
      : null,
    objects: {
      workstation: objectReport(workstationGroup, 'retro-desk'),
      deskModel: objectReport(deskModel, 'gltf root'),
      screenAnchor: objectReport(anchor, 'screen-anchor'),
      monitorScreen: objectReport(screenMesh, 'monitor-screen'),
      screenHit: objectReport(screenHit, 'screen hit'),
      transformRoot: objectReport(transformRoot, 'CSS transform root'),
    },
    hierarchy: workstationGroup ? traverseTree(workstationGroup) : [],
    sceneChildren: (scene?.children || []).map((c) => ({
      name: c.name,
      type: c.type,
    })),
  };

  console.log('%c=== Camden Desk Scene Dump ===', 'color:#39ff14;font-weight:bold;font-size:14px');
  console.log(JSON.stringify(report, null, 2));
  console.log(report);
  return report;
}
