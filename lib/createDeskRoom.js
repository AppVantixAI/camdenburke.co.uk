import * as THREE from 'three';

const FLOOR_Y = 0.36;

function wallMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x060c0a,
    roughness: 0.92,
    metalness: 0.04,
    side: THREE.DoubleSide,
  });
}

/** Wall plane facing inward toward room center. */
function inwardWall(w, h, position, center, mat) {
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  mesh.position.copy(position);
  mesh.lookAt(center);
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * Three walls (back, left, right) + floor + ceiling — open front for camera.
 */
export function createDeskRoom() {
  const room = new THREE.Group();
  room.name = 'desk-room';

  const w = 26;
  const d = 22;
  const h = 13;
  const midY = FLOOR_Y + h / 2;
  const center = new THREE.Vector3(0, midY, 0);
  const wallMat = wallMaterial();

  room.add(
    inwardWall(w, h, new THREE.Vector3(0, midY, -d / 2), center, wallMat)
  );
  room.add(
    inwardWall(d, h, new THREE.Vector3(-w / 2, midY, 0), center, wallMat)
  );
  room.add(
    inwardWall(d, h, new THREE.Vector3(w / 2, midY, 0), center, wallMat)
  );

  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x030806,
    roughness: 0.98,
    metalness: 0.02,
    side: THREE.DoubleSide,
  });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR_Y;
  floor.receiveShadow = true;
  room.add(floor);

  const ceilingMat = new THREE.MeshStandardMaterial({
    color: 0x040a08,
    roughness: 0.95,
    metalness: 0.03,
    side: THREE.DoubleSide,
  });
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(w, d), ceilingMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = FLOOR_Y + h;
  room.add(ceiling);

  const grid = new THREE.GridHelper(w * 0.94, 52, 0x1a8f2e, 0x0c1810);
  grid.position.y = FLOOR_Y + 0.002;
  grid.material.transparent = true;
  grid.material.opacity = 0.2;
  room.add(grid);

  return room;
}

/** Desk lighting. */
export function addDeskLighting(scene) {
  const ambient = new THREE.AmbientLight(0x1a2820, 0.55);
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0x2a4030, 0x0a100c, 0.45);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xd8ead8, 0.55);
  key.position.set(2, 10, 7);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 40;
  key.shadow.camera.left = -14;
  key.shadow.camera.right = 14;
  key.shadow.camera.top = 14;
  key.shadow.camera.bottom = -14;
  key.shadow.bias = -0.0002;
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xa8c0a8, 0.35);
  fill.position.set(-4, 6, 8);
  scene.add(fill);

  const backFill = new THREE.DirectionalLight(0x6a8870, 0.2);
  backFill.position.set(0, 5, -6);
  scene.add(backFill);

  const deskGlow = new THREE.PointLight(0x39ff14, 0.35, 6);
  deskGlow.position.set(0, 2.2, 0.5);
  scene.add(deskGlow);

  return { key };
}
