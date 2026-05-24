import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { buildScreenAnchorFromMesh } from './screenAnchor';
import { applyCalibrationDelta, ENABLE_SCREEN_CALIBRATION } from './screenCalibration';
import { maskEmissiveUVRegion } from './maskEmissiveUVRegion';
import { BLIMP_SCREEN_UV } from './retroScreenUV';

const MODEL_URL = '/models/retro-desk/scene.gltf';

/** Glass mesh only — no manual tilt/offset. */
export const RETRO_SCREEN_OPTIONS = {
  /** Slightly larger than fitted CRT so iframe covers the emissive bezel. */
  bezelInset: 1,
  outwardPush: 0.003,
  /** Keep glass visible; iframe sits on the masked CRT UV rect. */
  hideSourceMesh: false,
  emissiveIntensity: 0.35,
  /** Darken blimp art in Details_emissive.jpeg where the iframe maps. */
  maskBlimpOnEmissive: true,
  alignToBlimpTexture: true,
};

function prepareMaterials(object) {
  object.traverse((child) => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    mats.forEach((mat) => {
      if (!mat) return;
      mat.transparent = false;
      mat.opacity = 1;
      mat.depthWrite = true;
      mat.depthTest = true;
      mat.side = THREE.FrontSide;
      if (mat.map) mat.map.encoding = THREE.sRGBEncoding;
      if (mat.emissiveMap) mat.emissiveMap.encoding = THREE.sRGBEncoding;
    });
  });
}

function alignToFloor(object, floorY = 0.36) {
  const box = new THREE.Box3().setFromObject(object);
  object.position.y -= box.min.y - floorY;
}

export function findDetailsMesh(root) {
  let detailsMesh = null;
  root.traverse((child) => {
    if (!child.isMesh) return;
    const mat = Array.isArray(child.material) ? child.material[0] : child.material;
    if (mat?.name === 'Details') detailsMesh = child;
  });
  return detailsMesh;
}

/**
 * @param {{ camera: THREE.Camera, showDebug?: boolean }} options
 */
export function loadRetroSciFiDesk(options = {}) {
  const { camera, showDebug = false } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.crossOrigin = 'anonymous';
    loader.load(
      MODEL_URL,
      (gltf) => {
        const workstation = new THREE.Group();
        workstation.name = 'retro-desk';

        const root = gltf.scene;
        prepareMaterials(root);
        root.updateMatrixWorld(true);

        const bounds = new THREE.Box3().setFromObject(root);
        const size = bounds.getSize(new THREE.Vector3());
        const targetWidth = 2.35;
        const scale = targetWidth / Math.max(size.x, size.z);
        root.scale.setScalar(scale);

        bounds.setFromObject(root);
        root.position.sub(bounds.getCenter(new THREE.Vector3()));
        alignToFloor(root);
        workstation.add(root);
        root.updateMatrixWorld(true);

        const detailsMesh = findDetailsMesh(root);
        let screenMesh = null;
        let screenHit = null;

        if (detailsMesh && camera) {
          try {
            detailsMesh.updateWorldMatrix(true, false);
            console.info('[retro-desk] Details mesh', {
              name: detailsMesh.name,
              parent: detailsMesh.parent?.name,
            });

            const fitted = buildScreenAnchorFromMesh({
              deskRoot: workstation,
              screenMesh: detailsMesh,
              camera,
              bezelInset: RETRO_SCREEN_OPTIONS.bezelInset,
              outwardPush: RETRO_SCREEN_OPTIONS.outwardPush,
              alignToBlimpTexture: RETRO_SCREEN_OPTIONS.alignToBlimpTexture,
              showDebug,
            });

            if (RETRO_SCREEN_OPTIONS.hideSourceMesh) {
              detailsMesh.visible = false;
            } else {
              const mats = Array.isArray(detailsMesh.material)
                ? detailsMesh.material
                : [detailsMesh.material];
              mats.forEach((mat) => {
                if (!mat) return;
                mat.emissiveIntensity = RETRO_SCREEN_OPTIONS.emissiveIntensity;
              });
              if (RETRO_SCREEN_OPTIONS.maskBlimpOnEmissive) {
                const mat = Array.isArray(detailsMesh.material)
                  ? detailsMesh.material[0]
                  : detailsMesh.material;
                void maskEmissiveUVRegion(mat, BLIMP_SCREEN_UV, {
                  fill: '#020806',
                }).then((masked) => {
                  if (masked) {
                    console.info('[retro-desk] Masked blimp UV on Details emissive');
                  }
                });
              }
            }

            if (ENABLE_SCREEN_CALIBRATION) {
              applyCalibrationDelta(fitted.anchor);
            }

            screenMesh = fitted.screenMesh;
            screenHit = fitted.screenHit;
          } catch (anchorErr) {
            console.warn('Screen anchor failed, using bbox fallback:', anchorErr);
          }
        } else if (!camera) {
          console.warn('loadRetroSciFiDesk: camera required for screen anchor');
        }

        if (!screenMesh) {
          const box = new THREE.Box3().setFromObject(root);
          const s = box.getSize(new THREE.Vector3());
          const c = box.getCenter(new THREE.Vector3());
          screenMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(s.x * 0.32, s.y * 0.22),
            new THREE.MeshBasicMaterial({ color: 0x010403 })
          );
          screenMesh.position.set(c.x, c.y + s.y * 0.12, box.max.z + 0.02);
          screenMesh.userData.planeWidth = s.x * 0.32;
          screenMesh.userData.planeHeight = s.y * 0.22;
          workstation.add(screenMesh);
          screenHit = screenMesh;
        }

        screenMesh.userData.isScreen = true;

        resolve({
          workstation,
          deskModel: root,
          screenMesh,
          screenHit,
          scanLine: null,
          fan: null,
        });
      },
      undefined,
      reject
    );
  });
}
