import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createNetwork() {
  const group = new THREE.Group();
  const nodeCount = 48;
  const radius = 5;
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = 2 * Math.PI * Math.random();
    const pos = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
    nodes.push(pos);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0x39ff14 })
    );
    core.position.copy(pos);
    group.add(core);
  }

  const lineGeo = new THREE.BufferGeometry();
  const positions = [];
  const maxDist = 2.8;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
        positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
  }

  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const lines = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({ color: 0x1a8f2e, transparent: true, opacity: 0.55 })
  );
  group.add(lines);

  const shield = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2.4, 0.35, 120, 16),
    new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    })
  );
  group.add(shield);

  return { group, shield };
}

export default function HeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030806, 0.045);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const { group, shield } = createNetwork();
    scene.add(group);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(6.5, 6.55, 64),
      new THREE.MeshBasicMaterial({ color: 0xffb020, transparent: true, opacity: 0.15, side: THREE.DoubleSide })
    );
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(8.2, 8.28, 48),
      new THREE.MeshBasicMaterial({ color: 0x39ff14, transparent: true, opacity: 0.08, side: THREE.DoubleSide })
    );
    ring2.rotation.x = Math.PI / 2;
    scene.add(ring2);

    const cursor = { x: 0, y: 0 };
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      cursor.x = (e.clientX - rect.left) / rect.width - 0.5;
      cursor.y = -((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener('mousemove', onMove);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    resize();
    window.addEventListener('resize', resize);

    let frameId;
    const tick = () => {
      frameId = requestAnimationFrame(tick);
      group.rotation.y += 0.002;
      group.rotation.x += 0.001;
      shield.rotation.z += 0.004;
      ring.rotation.z += 0.003;
      ring2.rotation.z -= 0.002;
      camera.position.x += (cursor.x * 2.5 - camera.position.x) * 0.04;
      camera.position.y += (cursor.y * 1.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
