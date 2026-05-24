import * as THREE from 'three';

const _x = new THREE.Vector3();
const _y = new THREE.Vector3();
const _z = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _toCam = new THREE.Vector3();

/**
 * CSS3D sync that ignores reflected world quaternions (180° anchor flips).
 * Builds a right-handed basis with +Z toward the camera, matching plane size.
 */
export function syncScreenCss3d({
  screenMesh,
  cssObject,
  camera,
  iframeWidth,
  iframeHeight,
  displayScale = 1,
}) {
  if (!screenMesh || !cssObject || !camera) {
    return { visible: false, reason: 'missing-args' };
  }

  const pw = screenMesh.userData?.planeWidth;
  const ph = screenMesh.userData?.planeHeight;
  if (!pw || !ph) {
    return { visible: false, reason: 'no-plane-size' };
  }

  screenMesh.updateWorldMatrix(true, false);
  screenMesh.getWorldPosition(cssObject.position);

  _x.setFromMatrixColumn(screenMesh.matrixWorld, 0);
  const scaleX = _x.length();
  _x.multiplyScalar(1 / scaleX);

  _y.setFromMatrixColumn(screenMesh.matrixWorld, 1);
  const scaleY = _y.length();
  _y.multiplyScalar(1 / scaleY);

  _z.crossVectors(_x, _y).normalize();
  _toCam.subVectors(camera.position, cssObject.position).normalize();
  if (_z.dot(_toCam) < 0) {
    _z.negate();
    _y.negate();
  }

  _x.crossVectors(_y, _z).normalize();
  _m.makeBasis(_x, _y, _z);
  cssObject.quaternion.setFromRotationMatrix(_m);

  let s =
    Math.min((scaleX * pw) / iframeWidth, (scaleY * ph) / iframeHeight) * displayScale;
  if (!Number.isFinite(s) || s <= 0) {
    s = (screenMesh.userData.cssScale ?? 0.001) * displayScale;
  }
  cssObject.scale.set(s, s, s);
  cssObject.visible = true;

  const facing = _z.dot(_toCam);
  return { visible: true, facing, scale: s, method: 'css3d-basis' };
}
