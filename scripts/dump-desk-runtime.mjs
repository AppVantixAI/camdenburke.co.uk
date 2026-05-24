/**
 * Simulates corner-based screen anchor. Run: node scripts/dump-desk-runtime.mjs
 */
globalThis.self = globalThis;
globalThis.ProgressEvent =
  globalThis.ProgressEvent ||
  class ProgressEvent {
    constructor(type, init = {}) {
      this.type = type;
      this.lengthComputable = init.lengthComputable ?? false;
      this.loaded = init.loaded ?? 0;
      this.total = init.total ?? 0;
    }
  };

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { buildScreenAnchorFromMesh } from '../lib/screenAnchor.js';
import path from 'path';
import fs from 'fs';
import http from 'http';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const modelDir = path.join(__dirname, '../public/models/retro-desk');

function startStaticServer(dir) {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const rel = decodeURIComponent((req.url || '/').split('?')[0]).replace(/^\//, '') || 'scene.gltf';
      const file = path.join(dir, rel);
      if (!file.startsWith(dir) || !fs.existsSync(file)) {
        res.writeHead(404);
        res.end('not found');
        return;
      }
      res.writeHead(200);
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      resolve({ srv, url: `http://127.0.0.1:${port}/scene.gltf` });
    });
  });
}

const { srv, url } = await startStaticServer(modelDir);
const cam = new THREE.PerspectiveCamera(42, 16 / 9, 0.1, 80);
cam.position.set(0.4, 2.35, 5.8);

new GLTFLoader().load(
  url,
  (gltf) => {
    const workstation = new THREE.Group();
    const root = gltf.scene;
    const bounds = new THREE.Box3().setFromObject(root);
    const scale = 2.35 / Math.max(bounds.getSize(new THREE.Vector3()).x, bounds.getSize(new THREE.Vector3()).z);
    root.scale.setScalar(scale);
    bounds.setFromObject(root);
    root.position.sub(bounds.getCenter(new THREE.Vector3()));
    const box = new THREE.Box3().setFromObject(root);
    root.position.y -= box.min.y - 0.36;
    workstation.add(root);

    let detailsMesh = null;
    root.traverse((child) => {
      if (!child.isMesh) return;
      const mat = Array.isArray(child.material) ? child.material[0] : child.material;
      if (mat?.name === 'Details') detailsMesh = child;
    });

    const fitted = buildScreenAnchorFromMesh({
      deskRoot: workstation,
      screenMesh: detailsMesh,
      camera: cam,
    });

    console.log(JSON.stringify(fitted.debug, null, 2));
    srv.close();
  },
  undefined,
  (err) => {
    console.error(err);
    srv.close();
    process.exit(1);
  }
);
