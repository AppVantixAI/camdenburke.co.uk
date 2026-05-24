import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const MODEL_BASE = '/models/desktop';

function loadGLTF(loader, path) {
  return new Promise((resolve, reject) => {
    loader.load(`${MODEL_BASE}/${path}`, resolve, undefined, reject);
  });
}

function normalizeToHeight(object, targetHeight) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  if (maxDim > 0) {
    const s = targetHeight / maxDim;
    object.scale.setScalar(s);
  }
  const box2 = new THREE.Box3().setFromObject(object);
  object.position.sub(box2.getCenter(new THREE.Vector3()));
}

function prepareMaterials(object) {
  object.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    mats.forEach((mat) => {
      if (!mat) return;
      if (mat.map) mat.map.encoding = THREE.sRGBEncoding;
      if (mat.emissiveMap) mat.emissiveMap.encoding = THREE.sRGBEncoding;
    });
  });
}

/**
 * Loads CC0 retro workstation GLBs and returns anchor refs for the CSS3D screen.
 */
export async function loadWorkstation() {
  const loader = new GLTFLoader();
  const [tableGltf, monitorGltf, towerGltf, keyboardGltf, mouseGltf, floorGltf] = await Promise.all([
    loadGLTF(loader, 'Table_Futuristic.glb'),
    loadGLTF(loader, 'ComputerScreen_Retro.glb'),
    loadGLTF(loader, 'Computer_Retro.glb'),
    loadGLTF(loader, 'Keyboard_Retro.glb'),
    loadGLTF(loader, 'Mouse_Retro.glb'),
    loadGLTF(loader, 'Floor_Vapor_01.glb'),
  ]);

  const workstation = new THREE.Group();
  workstation.name = 'workstation';

  const table = tableGltf.scene;
  normalizeToHeight(table, 0.75);
  table.position.set(0, 0.38, 0);
  prepareMaterials(table);

  const monitor = monitorGltf.scene;
  normalizeToHeight(monitor, 0.55);
  monitor.position.set(0, 1.02, -0.22);
  monitor.rotation.x = -0.08;
  prepareMaterials(monitor);

  const tower = towerGltf.scene;
  normalizeToHeight(tower, 0.48);
  tower.position.set(1.05, 0.92, -0.05);
  tower.rotation.y = -0.35;
  prepareMaterials(tower);

  const keyboard = keyboardGltf.scene;
  normalizeToHeight(keyboard, 0.06);
  keyboard.position.set(0, 0.72, 0.38);
  keyboard.rotation.x = -0.12;
  prepareMaterials(keyboard);

  const mouse = mouseGltf.scene;
  normalizeToHeight(mouse, 0.05);
  mouse.position.set(0.55, 0.72, 0.42);
  prepareMaterials(mouse);

  const floor = floorGltf.scene;
  normalizeToHeight(floor, 0.05);
  floor.position.set(0, 0.35, 0);
  floor.rotation.x = -Math.PI / 2;
  prepareMaterials(floor);

  workstation.add(floor, table, tower, monitor, keyboard, mouse);

  let screenMesh = null;
  let screenHit = null;

  monitor.traverse((child) => {
    if (child.name === 'ComputerScreen_Glitch_Retro' && child.isMesh) {
      screenMesh = child;
      screenHit = child;
      if (child.material) {
        const m = child.material.clone();
        m.color = new THREE.Color(0x020806);
        m.emissive = new THREE.Color(0x39ff14);
        m.emissiveIntensity = 0.2;
        child.material = m;
      }
    }
  });

  if (!screenMesh) {
    const box = new THREE.Box3().setFromObject(monitor);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(size.x * 0.72, size.y * 0.62),
      new THREE.MeshBasicMaterial({ color: 0x010403 })
    );
    screenMesh.position.copy(center);
    screenMesh.position.z += size.z * 0.45;
    monitor.add(screenMesh);
    screenHit = screenMesh;
  }

  const hitPad = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 0.85),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  hitPad.position.copy(screenMesh.position);
  hitPad.position.z += 0.02;
  monitor.add(hitPad);
  screenHit = hitPad;

  return {
    workstation,
    screenMesh,
    screenHit,
    monitor,
    screenLightTarget: screenMesh,
  };
}
