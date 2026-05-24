import * as THREE from 'three';

/** Overview FOV — wide enough to read the desk edges from a seated pull-back. */
export const DEFAULT_DESK_FOV = 52;

/** Closest dolly = this fraction of the framed seated distance (tiny range, no pull-back). */
const ZOOM_IN_RATIO = 0.94;

/**
 * Seated-at-desk orbit: drag to look around, gentle auto-rotate wobble, no pan or zoom-out.
 */
export function applyDeskCameraControls(controls, camera) {
  controls.enablePan = false;
  controls.screenSpacePanning = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.rotateSpeed = 0.32;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.32;

  controls.minDistance = 0.5;
  controls.maxDistance = 50;

  /** ~±10° horizontal — edges of the desk peek in as you look around. */
  controls.minAzimuthAngle = -0.18;
  controls.maxAzimuthAngle = 0.18;

  /** Slightly elevated seated angle — monitor plus desk surface in frame. */
  controls.minPolarAngle = 1.28;
  controls.maxPolarAngle = 1.52;

  camera.fov = DEFAULT_DESK_FOV;
  camera.updateProjectionMatrix();
}

/**
 * Pause idle wobble while the user drags; resume in overview when they release.
 */
export function wireDeskIdleWobble(controls, isOverviewActive) {
  const onStart = () => {
    controls.autoRotate = false;
  };
  const onEnd = () => {
    if (isOverviewActive()) controls.autoRotate = true;
  };

  controls.addEventListener('start', onStart);
  controls.addEventListener('end', onEnd);

  return () => {
    controls.removeEventListener('start', onStart);
    controls.removeEventListener('end', onEnd);
  };
}

/**
 * Lock zoom to the seated frame — no zoom-out past default; only a slight zoom-in if enabled later.
 */
export function lockZoomToFramedOverview(camera, controls) {
  const dist = camera.position.distanceTo(controls.target);
  controls.maxDistance = dist;
  controls.minDistance = dist * ZOOM_IN_RATIO;
}

/**
 * Frame the full desk — seated pull-back so left/right edges stay visible.
 */
export function frameDeskCamera(camera, controls, deskModel, overviewStore) {
  const box = new THREE.Box3().setFromObject(deskModel);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  controls.target.set(
    center.x,
    center.y + size.y * 0.22,
    center.z + size.z * 0.04
  );

  camera.position.set(
    center.x,
    center.y + size.y * 0.52,
    center.z + size.z * 0.82 + Math.max(size.z * 0.55, 0.9)
  );
  camera.lookAt(controls.target);
  camera.fov = DEFAULT_DESK_FOV;
  camera.updateProjectionMatrix();
  controls.update();

  if (overviewStore) {
    overviewStore.pos.copy(camera.position);
    overviewStore.target.copy(controls.target);
  }

  lockZoomToFramedOverview(camera, controls);
}
