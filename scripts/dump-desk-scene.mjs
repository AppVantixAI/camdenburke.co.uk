/**
 * Offline dump: GLTF node transforms + post-load desk layout math.
 * Run: node scripts/dump-desk-scene.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gltfPath = path.join(__dirname, '../public/models/retro-desk/scene.gltf');
const gltf = JSON.parse(fs.readFileSync(gltfPath, 'utf8'));

const accessors = gltf.accessors;
const bufferViews = gltf.bufferViews;
const buffers = gltf.buffers;

function readAccessorMinMax(accessorIndex) {
  const acc = accessors[accessorIndex];
  if (!acc) return null;
  return { min: acc.min, max: acc.max };
}

console.log('=== GLTF file: scene.gltf ===\n');
console.log('Nodes:');
gltf.nodes.forEach((n, i) => {
  const t = n.translation || [0, 0, 0];
  const r = n.rotation || [0, 0, 0, 1];
  const s = n.scale || [1, 1, 1];
  console.log(
    `  [${i}] ${n.name || '(unnamed)'}` +
      `  mesh=${n.mesh ?? '-'}  children=${JSON.stringify(n.children || [])}`
  );
  console.log(`       translation: [${t.join(', ')}]`);
  console.log(`       rotation (xyzw): [${r.join(', ')}]`);
  console.log(`       scale: [${s.join(', ')}]`);
});

console.log('\nMeshes:');
gltf.meshes.forEach((m, i) => {
  const prim = m.primitives[0];
  const mat = gltf.materials[prim.material];
  const posAcc = accessors[prim.attributes.POSITION];
  console.log(`  [${i}] ${m.name || '(unnamed)'}  material="${mat?.name}"`);
  if (posAcc?.min && posAcc?.max) {
    console.log(`       POSITION bounds: min [${posAcc.min.join(', ')}] max [${posAcc.max.join(', ')}]`);
  }
});

console.log('\n=== Applied at runtime (loadRetroSciFiDesk.js) ===');
console.log('  targetWidth: 2.35 world units');
console.log('  scale: targetWidth / max(bbox.x, bbox.z) after load');
console.log('  position: center model on XZ (subtract bbox center)');
console.log('  floorY: 0.36 (align bbox.min.y to floor)');
console.log('  screen source: mesh material "Details" on node "Computer"');
console.log('  RETRO_SCREEN_TUNING:', JSON.stringify({
  widthFactor: 0.9,
  heightFactor: 0.9,
  facePushRatio: 0.42,
  worldForwardPush: 0.012,
  localOffset: [0, -1.68, -0.34],
  hideSourceMesh: true,
  tiltDownRad: 0.78,
}, null, 2));
