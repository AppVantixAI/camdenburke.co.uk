import * as THREE from 'three';
import { SCREEN_OFFSET_X_DEG, SCREEN_OFFSET_Y_DEG } from './screenAnchor.js';

/** Screen plane width in world units — must match CSS3D scale math */
export const SCREEN_WORLD_W = 1.34;
export const SCREEN_WORLD_H = 0.755;

/**
 * Procedural SOC workstation — aligned monitor plane for CSS3D iframe.
 */
export function createProceduralWorkstation() {
  const workstation = new THREE.Group();
  workstation.name = 'workstation';

  const deskMat = new THREE.MeshStandardMaterial({
    color: 0x0a120e,
    metalness: 0.75,
    roughness: 0.38,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x1a8f2e,
    emissive: 0x0d2a10,
    emissiveIntensity: 0.55,
    metalness: 0.4,
    roughness: 0.5,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x050a08,
    metalness: 0.6,
    roughness: 0.55,
  });

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({ color: 0x030806, roughness: 1, metalness: 0 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0.36;
  floor.receiveShadow = true;
  workstation.add(floor);

  const grid = new THREE.GridHelper(8, 24, 0x1a8f2e, 0x0c1810);
  grid.position.y = 0.361;
  grid.material.transparent = true;
  grid.material.opacity = 0.35;
  workstation.add(grid);

  const desk = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.07, 1.25), deskMat);
  desk.position.set(0, 0.745, 0.05);
  desk.castShadow = true;
  desk.receiveShadow = true;
  workstation.add(desk);

  const deskEdge = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.012, 1.27), accentMat);
  deskEdge.position.set(0, 0.785, 0.05);
  workstation.add(deskEdge);

  const monitor = new THREE.Group();
  monitor.position.set(0, 0.78, -0.42);

  const neck = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.28, 0.1), deskMat);
  neck.position.set(0, 0.36, 0);
  neck.castShadow = true;
  monitor.add(neck);

  const bezel = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.84, 0.07), deskMat);
  bezel.position.set(0, 0.72, 0);
  bezel.castShadow = true;
  monitor.add(bezel);

  const screenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(SCREEN_WORLD_W, SCREEN_WORLD_H),
    new THREE.MeshBasicMaterial({ color: 0x010403 })
  );
  screenMesh.position.set(0, 0, 0);
  screenMesh.rotation.x = 0.62;
  screenMesh.name = 'monitor-screen';
  screenMesh.userData.planeWidth = SCREEN_WORLD_W;
  screenMesh.userData.planeHeight = SCREEN_WORLD_H;
  screenMesh.userData.cssDomFlip = { x: 1, y: 1 };

  const screenAnchor = new THREE.Group();
  screenAnchor.name = 'screen-anchor';
  const slideX = SCREEN_WORLD_W * Math.tan((SCREEN_OFFSET_X_DEG * Math.PI) / 180);
  const slideY = SCREEN_WORLD_H * Math.tan((SCREEN_OFFSET_Y_DEG * Math.PI) / 180);
  screenAnchor.position.set(slideX, 0.66 + slideY, 0.02);
  screenAnchor.rotation.z = Math.PI - Math.PI / 12 + Math.PI / 36 + Math.PI / 180;
  screenAnchor.add(screenMesh);
  monitor.add(screenAnchor);

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(SCREEN_WORLD_W + 0.05, SCREEN_WORLD_H + 0.05),
    new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide,
    })
  );
  glow.position.set(0, 0.72, 0.038);
  monitor.add(glow);

  const scan = new THREE.Mesh(
    new THREE.PlaneGeometry(SCREEN_WORLD_W, 0.02),
    new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      transparent: true,
      opacity: 0.25,
    })
  );
  scan.position.set(0, 0.72, 0.045);
  scan.userData.scanLine = true;
  monitor.add(scan);

  const hitPad = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 0.9),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  hitPad.position.set(0, 0, 0.01);
  hitPad.rotation.x = 0.62;
  hitPad.userData.isScreen = true;
  screenAnchor.add(hitPad);

  screenMesh.userData.isScreen = true;
  workstation.add(monitor);

  const keyboard = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.025, 0.32), darkMat);
  keyboard.position.set(0, 0.795, 0.38);
  keyboard.rotation.x = -0.1;
  keyboard.castShadow = true;
  workstation.add(keyboard);

  const keyGlow = new THREE.Mesh(
    new THREE.BoxGeometry(0.92, 0.008, 0.28),
    new THREE.MeshBasicMaterial({ color: 0x39ff14, transparent: true, opacity: 0.12 })
  );
  keyGlow.position.set(0, 0.808, 0.38);
  keyGlow.rotation.x = -0.1;
  workstation.add(keyGlow);

  const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.18), darkMat);
  mouse.position.set(0.62, 0.79, 0.42);
  mouse.castShadow = true;
  workstation.add(mouse);

  const tower = new THREE.Group();
  tower.position.set(1.05, 0.78, 0.02);

  const towerBody = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.62, 0.5), deskMat);
  towerBody.position.y = 0.31;
  towerBody.castShadow = true;
  tower.add(towerBody);

  const towerLed = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.4, 0.02),
    new THREE.MeshStandardMaterial({
      color: 0x39ff14,
      emissive: 0x39ff14,
      emissiveIntensity: 1.2,
    })
  );
  towerLed.position.set(-0.1, 0.35, 0.26);
  tower.add(towerLed);

  const fan = new THREE.Mesh(
    new THREE.RingGeometry(0.06, 0.09, 16),
    new THREE.MeshBasicMaterial({ color: 0x1a8f2e, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
  );
  fan.position.set(0, 0.52, 0.26);
  fan.userData.spin = true;
  tower.add(fan);

  workstation.add(tower);

  const shelf = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.35), darkMat);
  shelf.position.set(-1.05, 0.9, -0.15);
  workstation.add(shelf);

  const router = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.14), accentMat);
  router.position.set(-1.05, 0.94, -0.15);
  workstation.add(router);

  return {
    workstation,
    deskModel: workstation,
    screenMesh,
    screenHit: hitPad,
    scanLine: scan,
    fan,
  };
}
