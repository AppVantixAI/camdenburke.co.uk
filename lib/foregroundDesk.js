import * as THREE from 'three';

const _pos = new THREE.Vector3();
const _normal = new THREE.Vector3();
const _quat = new THREE.Quaternion();

function applyClipMaterial(mat, clipPlane) {
  const m = mat.clone();
  m.clippingPlanes = [clipPlane];
  m.clipShadows = true;
  m.depthWrite = true;
  m.depthTest = true;
  return m;
}

/**
 * Clone monitor body mesh — only geometry in front of the screen plane (bezel/frame).
 */
export function buildMonitorOccluder(sourceObject, clipPlane) {
  const group = new THREE.Group();
  group.name = 'monitor-occluder';
  if (!sourceObject) return group;

  const clone = sourceObject.clone(true);
  clone.traverse((child) => {
    if (!child.isMesh) return;
    if (Array.isArray(child.material)) {
      child.material = child.material.map((m) => applyClipMaterial(m, clipPlane));
    } else if (child.material) {
      child.material = applyClipMaterial(child.material, clipPlane);
    }
  });

  group.add(clone);
  return group;
}

/**
 * Clip plane coplanar with the CSS screen — bezel draws in front, screen is not behind the model.
 */
export function updateScreenClipPlane(clipPlane, screenAnchor) {
  if (!screenAnchor || !clipPlane) return;
  screenAnchor.updateWorldMatrix(true, false);
  screenAnchor.getWorldPosition(_pos);
  screenAnchor.getWorldQuaternion(_quat);
  _normal.set(0, 0, 1).applyQuaternion(_quat).normalize();
  clipPlane.setFromNormalAndCoplanarPoint(_normal, _pos);
}

export function syncMonitorOccluderTransform(occluderGroup, sourceObject) {
  if (!occluderGroup || !sourceObject) return;
  sourceObject.updateWorldMatrix(true, true);
  occluderGroup.matrix.copy(sourceObject.matrixWorld);
  occluderGroup.matrixAutoUpdate = false;
}
