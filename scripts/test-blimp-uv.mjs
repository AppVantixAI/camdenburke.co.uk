globalThis.self = globalThis;
globalThis.ProgressEvent = class ProgressEvent {
  constructor(type, init = {}) {
    Object.assign(this, init);
    this.type = type;
  }
};

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { buildScreenAnchorFromMesh } from '../lib/screenAnchor.js';
import fs from 'fs';
import http from 'http';
import path from 'path';
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
        res.end();
        return;
      }
      res.writeHead(200);
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => {
      resolve({ srv, url: `http://127.0.0.1:${srv.address().port}/scene.gltf` });
    });
  });
}

const VIEW_W = 1280;
const VIEW_H = 720;

const { srv, url } = await startStaticServer(modelDir);
const loader = new GLTFLoader();
const cam = new THREE.PerspectiveCamera(42, VIEW_W / VIEW_H, 0.1, 80);
cam.position.set(0.4, 2.35, 5.8);
cam.updateProjectionMatrix();

loader.load(url, (gltf) => {
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

  let details = null;
  root.traverse((c) => {
    if (!c.isMesh) return;
    const m = Array.isArray(c.material) ? c.material[0] : c.material;
    if (m?.name === 'Details') details = c;
  });

  const fitted = buildScreenAnchorFromMesh({
    deskRoot: workstation,
    screenMesh: details,
    camera: cam,
  });

  const screen = fitted.screenMesh;
  screen.updateWorldMatrix(true, true);
  const pw = screen.userData.planeWidth;
  const ph = screen.userData.planeHeight;
  const hw = pw / 2;
  const hh = ph / 2;
  const corner = new THREE.Vector3();
  const projected = [
    [-hw, -hh, 0],
    [hw, -hh, 0],
    [hw, hh, 0],
    [-hw, hh, 0],
  ].map(([x, y, z], i) => {
    corner.set(x, y, z).applyMatrix4(screen.matrixWorld).project(cam);
    return {
      corner: ['TL', 'TR', 'BR', 'BL'][i],
      x: Math.round((corner.x * 0.5 + 0.5) * VIEW_W),
      y: Math.round((-corner.y * 0.5 + 0.5) * VIEW_H),
      z: corner.z.toFixed(3),
    };
  });

  const xs = projected.map((p) => p.x);
  const ys = projected.map((p) => p.y);
  const aabbW = Math.max(...xs) - Math.min(...xs);
  const aabbH = Math.max(...ys) - Math.min(...ys);

  console.log('method:', fitted.debug.method);
  console.log('plane:', pw.toFixed(4), 'x', ph.toFixed(4), 'aspect', (pw / ph).toFixed(3));
  console.log('cssDomFlip:', fitted.debug.cssDomFlip);
  console.log('projected corners:', projected);
  console.log('AABB of corners (old overlay would use):', aabbW, 'x', aabbH);
  console.log('center ndc z:', corner.set(0, 0, 0).applyMatrix4(screen.matrixWorld).project(cam).z.toFixed(3));
  srv.close();
});
