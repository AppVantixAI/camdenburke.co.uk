import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const IFRAME_W = 1280;
const IFRAME_H = 800;
/** Calibrated so iframe edges sit on the screen plane mesh */
const SCREEN_SCALE = 0.00265;

function createLaptop(screenMeshRef) {
  const laptop = new THREE.Group();

  const darkMetal = new THREE.MeshStandardMaterial({
    color: 0x141a16,
    metalness: 0.85,
    roughness: 0.35,
  });
  const accent = new THREE.MeshStandardMaterial({
    color: 0x1a8f2e,
    emissive: 0x0a2a0a,
    metalness: 0.5,
    roughness: 0.5,
  });

  const base = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.14, 2.9), darkMetal);
  base.position.y = -0.55;
  base.castShadow = true;
  laptop.add(base);

  const trackpad = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.02, 0.75), accent);
  trackpad.position.set(0, -0.47, 0.55);
  laptop.add(trackpad);

  const screenGroup = new THREE.Group();
  screenGroup.position.set(0, -0.42, -1.38);
  screenGroup.rotation.x = -1.15;

  const bezel = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.06, 2.25), darkMetal);
  screenGroup.add(bezel);

  const screenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(3.35, 2.05),
    new THREE.MeshBasicMaterial({ color: 0x020806 })
  );
  screenMesh.position.z = 0.04;
  screenMesh.name = 'laptop-screen';
  screenGroup.add(screenMesh);
  screenMeshRef.current = screenMesh;

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(3.38, 2.08),
    new THREE.MeshBasicMaterial({
      color: 0x39ff14,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
    })
  );
  glow.position.z = 0.02;
  screenGroup.add(glow);

  laptop.add(screenGroup);
  laptop.position.y = 0.2;

  return laptop;
}

export default function LaptopScene({ iframeSrc = '/embed' }) {
  const mountRef = useRef(null);
  const screenMeshRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030806, 0.04);

    const cssScene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 6.5);

    const webglRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    webglRenderer.setSize(width, height);
    webglRenderer.domElement.style.position = 'absolute';
    webglRenderer.domElement.style.top = '0';
    webglRenderer.domElement.style.left = '0';
    mount.appendChild(webglRenderer.domElement);

    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(width, height);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.left = '0';
    cssRenderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(cssRenderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    const key = new THREE.DirectionalLight(0x39ff14, 0.9);
    key.position.set(4, 8, 6);
    const fill = new THREE.DirectionalLight(0x2244ff, 0.25);
    fill.position.set(-5, 2, -3);
    scene.add(ambient, key, fill);

    const laptop = createLaptop(screenMeshRef);
    scene.add(laptop);

    const grid = new THREE.GridHelper(20, 20, 0x1a8f2e, 0x0a140c);
    grid.position.y = -0.62;
    grid.material.opacity = 0.25;
    grid.material.transparent = true;
    scene.add(grid);

    const iframe = document.createElement('iframe');
    iframe.src = iframeSrc;
    iframe.title = 'Resume live preview';
    iframe.style.width = `${IFRAME_W}px`;
    iframe.style.height = `${IFRAME_H}px`;
    iframe.style.border = '0';
    iframe.style.borderRadius = '2px';
    iframe.style.background = '#030806';
    iframe.style.pointerEvents = 'auto';
    iframe.setAttribute('loading', 'lazy');

    const screenFrame = document.createElement('div');
    screenFrame.style.overflow = 'hidden';
    screenFrame.style.borderRadius = '2px';
    screenFrame.style.boxShadow = '0 0 24px rgba(57, 255, 20, 0.35)';
    screenFrame.appendChild(iframe);

    const cssObject = new CSS3DObject(screenFrame);
    cssObject.scale.set(SCREEN_SCALE, SCREEN_SCALE, SCREEN_SCALE);
    cssScene.add(cssObject);

    const controls = new OrbitControls(camera, webglRenderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 3.5;
    controls.maxDistance = 12;
    controls.maxPolarAngle = Math.PI * 0.85;
    controls.target.set(0, 0.3, 0);

    const worldPos = new THREE.Vector3();
    const worldQuat = new THREE.Quaternion();
    const worldNormal = new THREE.Vector3();
    const toCamera = new THREE.Vector3();

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      webglRenderer.setSize(w, h);
      cssRenderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();

      const screen = screenMeshRef.current;
      if (screen) {
        screen.updateWorldMatrix(true, false);
        screen.getWorldPosition(worldPos);
        screen.getWorldQuaternion(worldQuat);
        cssObject.position.copy(worldPos);
        cssObject.quaternion.copy(worldQuat);

        worldNormal.set(0, 0, 1).applyQuaternion(worldQuat);
        toCamera.subVectors(camera.position, worldPos).normalize();
        const facing = worldNormal.dot(toCamera);

        const visible = facing > 0.12;
        screenFrame.style.opacity = visible ? '1' : '0';
        screenFrame.style.pointerEvents = visible ? 'auto' : 'none';
        cssRenderer.domElement.style.pointerEvents = visible ? 'none' : 'none';
        iframe.style.pointerEvents = visible ? 'auto' : 'none';
      }

      webglRenderer.render(scene, camera);
      cssRenderer.render(cssScene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      webglRenderer.dispose();
      mount.removeChild(webglRenderer.domElement);
      mount.removeChild(cssRenderer.domElement);
    };
  }, [iframeSrc]);

  return (
    <div ref={mountRef} className="laptop-scene relative h-full w-full min-h-[420px] overflow-hidden rounded-sm" />
  );
}
