/**
 * Analyze Details / Computer mesh UVs and front-face vertices.
 */
globalThis.self = globalThis;
globalThis.ProgressEvent = class ProgressEvent {
  constructor(type, init = {}) {
    Object.assign(this, init);
    this.type = type;
  }
};

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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

function analyzeMesh(mesh, label) {
  const pos = mesh.geometry.attributes.position;
  const uv = mesh.geometry.attributes.TEXCOORD_0 || mesh.geometry.attributes.uv;
  if (!uv) {
    console.log(`\n=== ${label} === no UVs`);
    return;
  }
  mesh.geometry.computeBoundingBox();
  const bb = mesh.geometry.boundingBox;

  let uMin = Infinity, uMax = -Infinity, vMin = Infinity, vMax = -Infinity;
  for (let i = 0; i < uv.count; i++) {
    uMin = Math.min(uMin, uv.getX(i));
    uMax = Math.max(uMax, uv.getX(i));
    vMin = Math.min(vMin, uv.getY(i));
    vMax = Math.max(vMax, uv.getY(i));
  }

  console.log(`\n=== ${label} ===`);
  console.log('bbox size', bb.max.clone().sub(bb.min).toArray());
  console.log('UV range u', uMin, uMax, 'v', vMin, vMax);
  console.log('vertex count', pos.count);
}

const { srv, url } = await startStaticServer(modelDir);
const loader = new GLTFLoader();
loader.load(url, (gltf) => {
  gltf.scene.traverse((child) => {
    if (!child.isMesh) return;
    const mat = Array.isArray(child.material) ? child.material[0] : child.material;
    analyzeMesh(child, `${child.name || 'mesh'} mat=${mat?.name}`);
  });
  srv.close();
});
