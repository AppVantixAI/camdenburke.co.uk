import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { createProceduralWorkstation } from '../lib/createProceduralWorkstation';
import { loadRetroSciFiDesk } from '../lib/loadRetroSciFiDesk';
import {
  applyDeskCameraControls,
  DEFAULT_DESK_FOV,
  frameDeskCamera,
  wireDeskIdleWobble,
} from '../lib/deskCameraControls';
import { getScreenTransformRoot } from '../lib/screenAnchor';
import { applyCssDomFlip, resolveCssDomFlip } from '../lib/screenCssFlip';
import { syncScreenCss3d } from '../lib/syncScreenCss3d';
import ViewModeSwitch from './ViewModeSwitch';
import ScreenCalibOverlay from './ScreenCalibOverlay';
import {
  applyCalibrationDelta,
  getScreenAnchor,
  installScreenCalibrationControls,
  isScreenCalibrationEnabled,
  loadCalibratedDisplayScale,
  resetAnchorToAutoPose,
  toggleCalibrationPan,
} from '../lib/screenCalibration';
import { createDeskRoom, addDeskLighting } from '../lib/createDeskRoom';
import { dumpDeskScene } from '../lib/dumpDeskScene';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';
import { useIsMobile } from '../lib/useIsMobile';

const IFRAME_W = 1920;
const IFRAME_H = 1080;
/** Multiplier on mesh-derived CSS scale (1 = exact fit). */
const SCREEN_DISPLAY_SCALE = 1;

function safeRemoveChild(parent, child) {
  if (parent && child?.parentNode === parent) {
    parent.removeChild(child);
  }
}

export default function DesktopScene({ siteSrc = '/site', onGoFlat, onGoDesk, viewMode = 'desk' }) {
  const mountRef = useRef(null);
  const screenMeshRef = useRef(null);
  const screenHitRef = useRef(null);
  const sceneRef = useRef(null);
  const [mode, setMode] = useState('loading');
  const modeRef = useRef('loading');
  const [calibHud, setCalibHud] = useState(null);
  const calibApiRef = useRef({ togglePan: () => {} });
  const calibrating = isScreenCalibrationEnabled();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const setModeSafe = useCallback((m) => {
    modeRef.current = m;
    setMode(m);
  }, []);

  useEffect(() => {
    const onMessage = (e) => {
      if (e.origin !== window.location.origin) return;
      if (e.data?.type === 'exit-desk') sceneRef.current?.exitDesk?.();
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020504);
    scene.fog = new THREE.FogExp2(0x020504, 0.004);

    const camera = new THREE.PerspectiveCamera(DEFAULT_DESK_FOV, width / height, 0.1, 80);
    camera.position.set(0.4, 1.55, 3.4);

    const isMobileViewport =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

    const webglRenderer = new THREE.WebGLRenderer({
      antialias: !isMobileViewport,
      powerPreference: isMobileViewport ? 'default' : 'high-performance',
    });
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobileViewport ? 1 : 2));
    webglRenderer.setSize(width, height);
    webglRenderer.outputEncoding = THREE.sRGBEncoding;
    webglRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    webglRenderer.toneMappingExposure = 1.1;
    webglRenderer.shadowMap.enabled = !isMobileViewport;
    webglRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    webglRenderer.domElement.style.position = 'absolute';
    webglRenderer.domElement.style.top = '0';
    webglRenderer.domElement.style.left = '0';
    webglRenderer.domElement.style.zIndex = '1';
    webglRenderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(webglRenderer.domElement);

    const cssScene = new THREE.Scene();
    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(width, height);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.left = '0';
    cssRenderer.domElement.style.zIndex = '4';
    cssRenderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(cssRenderer.domElement);

    addDeskLighting(scene);
    scene.add(createDeskRoom());

    const previewIframe = document.createElement('iframe');
    previewIframe.src = siteSrc;
    previewIframe.title = 'Resume site preview';
    previewIframe.style.width = `${IFRAME_W}px`;
    previewIframe.style.height = `${IFRAME_H}px`;
    previewIframe.style.border = '0';
    previewIframe.style.pointerEvents = 'none';
    previewIframe.setAttribute('loading', 'lazy');

    const screenFrame = document.createElement('div');
    screenFrame.style.overflow = 'hidden';
    screenFrame.style.opacity = '1';
    screenFrame.style.pointerEvents = 'none';
    screenFrame.style.background = '#020806';

    const flipWrap = document.createElement('div');
    flipWrap.style.width = `${IFRAME_W}px`;
    flipWrap.style.height = `${IFRAME_H}px`;
    flipWrap.appendChild(previewIframe);
    screenFrame.appendChild(flipWrap);

    const cssScreen = new CSS3DObject(screenFrame);
    cssScene.add(cssScreen);

    mount.style.pointerEvents = 'auto';
    const controls = new OrbitControls(camera, mount);
    applyDeskCameraControls(controls, camera);
    controls.autoRotate = !prefersReducedMotion;
    const removeIdleWobble = prefersReducedMotion
      ? null
      : wireDeskIdleWobble(controls, () => modeRef.current === 'overview');

    const calibState = {
      displayScale: loadCalibratedDisplayScale(SCREEN_DISPLAY_SCALE),
      panMode: false,
    };

    const worldPos = new THREE.Vector3();
    const worldQuat = new THREE.Quaternion();
    const worldNormal = new THREE.Vector3();

    let lastScreenSync = null;

    const updateScreenOverlay = (screenMesh) => {
      if (!screenMesh) return null;

      const mult = (calibrating ? calibState.displayScale : SCREEN_DISPLAY_SCALE) || 1;
      lastScreenSync = syncScreenCss3d({
        screenMesh,
        cssObject: cssScreen,
        camera,
        iframeWidth: IFRAME_W,
        iframeHeight: IFRAME_H,
        displayScale: mult,
      });

      applyCssDomFlip(flipWrap, resolveCssDomFlip(screenMesh));

      const showOnDesk = modeRef.current === 'overview' || modeRef.current === 'focusing';
      screenFrame.style.opacity = showOnDesk ? '1' : '0';
      screenFrame.style.pointerEvents = 'none';

      return lastScreenSync;
    };

    calibApiRef.current.togglePan = () => {
      toggleCalibrationPan(controls, calibState);
      setCalibHud((prev) =>
        prev
          ? { ...prev, panMode: calibState.panMode, displayScale: calibState.displayScale }
          : prev
      );
    };

    const overview = {
      pos: camera.position.clone(),
      target: controls.target.clone(),
    };
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let workstationGroup = null;
    let focusTween = null;
    let scanLine = null;
    let fanMesh = null;
    let clock = new THREE.Clock();
    let removeCalibControls = null;
    let mountedFallback = false;

    const enterDesk = () => {
      if (modeRef.current !== 'overview') return;
      setModeSafe('focusing');
      const screen = screenMeshRef.current;
      if (!screen) return;

      const transformRoot = getScreenTransformRoot(screen) || screen;
      transformRoot.updateWorldMatrix(true, false);
      transformRoot.getWorldPosition(worldPos);
      transformRoot.getWorldQuaternion(worldQuat);
      worldNormal.set(0, 0, 1).applyQuaternion(worldQuat);

      const endPos = worldPos.clone().add(worldNormal.clone().multiplyScalar(0.22));
      const startPos = camera.position.clone();
      const startTarget = controls.target.clone();
      const endTarget = worldPos.clone();

      controls.enabled = false;
      controls.autoRotate = false;
      if (focusTween) focusTween.kill();

      const prog = { t: 0 };
      focusTween = gsap.to(prog, {
        t: 1,
        duration: 1.6,
        ease: 'power3.inOut',
        onUpdate: () => {
          camera.position.lerpVectors(startPos, endPos, prog.t);
          controls.target.lerpVectors(startTarget, endTarget, prog.t);
          camera.lookAt(controls.target);
          const fov = DEFAULT_DESK_FOV - prog.t * 14;
          camera.fov = fov;
          camera.updateProjectionMatrix();
        },
        onComplete: () => {
          setModeSafe('immersed');
          webglRenderer.domElement.style.opacity = '0';
          webglRenderer.domElement.style.pointerEvents = 'none';
          screenFrame.style.opacity = '0';
        },
      });
    };

    const exitDesk = () => {
      if (modeRef.current === 'overview') return;
      setModeSafe('focusing');
      webglRenderer.domElement.style.opacity = '1';
      webglRenderer.domElement.style.pointerEvents = 'auto';

      const startPos = camera.position.clone();
      const startTarget = controls.target.clone();
      const startFov = camera.fov;
      if (focusTween) focusTween.kill();

      const prog = { t: 0 };
      focusTween = gsap.to(prog, {
        t: 1,
        duration: 1.25,
        ease: 'power2.inOut',
        onUpdate: () => {
          camera.position.lerpVectors(startPos, overview.pos, prog.t);
          controls.target.lerpVectors(startTarget, overview.target, prog.t);
          camera.lookAt(controls.target);
          camera.fov = startFov + (DEFAULT_DESK_FOV - startFov) * prog.t;
          camera.updateProjectionMatrix();
        },
        onComplete: () => {
          controls.enabled = true;
          controls.autoRotate = !prefersReducedMotion;
          camera.fov = DEFAULT_DESK_FOV;
          camera.updateProjectionMatrix();
          setModeSafe('overview');
          const screen = screenMeshRef.current;
          if (screen) updateScreenOverlay(screen);
        },
      });
    };

    sceneRef.current = { enterDesk, exitDesk };

    const onPointerDown = (e) => {
      if (modeRef.current !== 'overview' || !workstationGroup) return;
      const rect = mount.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(workstationGroup, true);
      const hitScreen = hits.some((h) => h.object.userData?.isScreen);
      if (hitScreen) enterDesk();
    };

    mount.addEventListener('pointerdown', onPointerDown);

    const onKey = (e) => {
      if (e.key === 'Escape' && modeRef.current === 'immersed') exitDesk();
    };
    window.addEventListener('keydown', onKey);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      webglRenderer.setSize(w, h);
      cssRenderer.setSize(w, h);
      const screen = screenMeshRef.current;
      if (screen) updateScreenOverlay(screen);
    };
    window.addEventListener('resize', onResize);

    let frameId;
    let animateErrorLogged = false;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (disposed) return;

      try {
        const elapsed = clock.getElapsedTime();
        if (modeRef.current === 'overview') {
          const allowOrbit = !calibrating || calibState.panMode;
          controls.enabled = allowOrbit;
          if (calibrating) controls.autoRotate = false;
          if (allowOrbit) controls.update();
        }

        if (scanLine) {
          scanLine.position.y = 0.72 + Math.sin(elapsed * 1.4) * 0.34;
        }
        if (fanMesh) fanMesh.rotation.z = elapsed * 2.2;

        const screen = screenMeshRef.current;
        if (screen && modeRef.current !== 'immersed') {
          updateScreenOverlay(screen);
        } else if (modeRef.current === 'immersed') {
          screenFrame.style.opacity = '0';
        }

        webglRenderer.render(scene, camera);
        try {
          cssRenderer.render(cssScene, camera);
        } catch (cssErr) {
          if (!animateErrorLogged) {
            animateErrorLogged = true;
            console.error('CSS3D render error:', cssErr);
          }
        }
      } catch (err) {
        if (!animateErrorLogged) {
          animateErrorLogged = true;
          console.error('DesktopScene animate error (stale bundle? hard refresh):', err);
        }
      }
    };

    const mountWorkstation = ({ workstation, deskModel, screenMesh, screenHit, scanLine: scan, fan }) => {
      if (disposed) return;
      try {
        if (!screenMesh) throw new Error('mountWorkstation: missing screenMesh');

        if (workstationGroup) {
          scene.remove(workstationGroup);
        }

        workstationGroup = workstation;
        screenMeshRef.current = screenMesh;
        screenHitRef.current = screenHit;
        scanLine = scan;
        fanMesh = fan;

        scene.add(workstation);
        frameDeskCamera(camera, controls, deskModel || workstation, overview);

        updateScreenOverlay(screenMesh);

        const anchor = getScreenAnchor(screenMesh);
        if (anchor) applyCalibrationDelta(anchor);

        if (calibrating && anchor) {
          removeCalibControls = installScreenCalibrationControls(anchor, {
            onUpdate: setCalibHud,
            controls,
            calibState,
            camera,
          });
        }

        setModeSafe('overview');

        let deskModelRef = deskModel;
        window.__cbDumpDeskScene = () =>
          dumpDeskScene({
            scene,
            camera,
            controls,
            workstationGroup,
            deskModel: deskModelRef,
            screenMesh,
            screenHit,
            screenFrame,
            lastScreenSync,
            calibState,
            webglRenderer,
            iframeW: IFRAME_W,
            iframeH: IFRAME_H,
            screenDisplayScale: SCREEN_DISPLAY_SCALE,
            mode: modeRef.current,
          });
        console.info(
          '%cDesk scene ready — run __cbDumpDeskScene() for live world coordinates',
          'color:#39ff14'
        );
      } catch (err) {
        console.error('Failed to mount workstation:', err);
        if (!disposed && !mountedFallback) {
          mountedFallback = true;
          try {
            mountWorkstation(createProceduralWorkstation());
          } catch (fallbackErr) {
            console.error('Procedural desk fallback failed:', fallbackErr);
            setModeSafe('overview');
          }
        }
      }
    };

    const showScreenDebug =
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).has('debugScreen');
    if (showScreenDebug) {
      screenFrame.style.outline = '2px solid #ff00aa';
    }

    let deskMounted = false;
    loadRetroSciFiDesk({ camera, showDebug: showScreenDebug })
      .then((data) => {
        if (disposed || deskMounted) return;
        deskMounted = true;
        mountWorkstation(data);
      })
      .catch((err) => {
        console.warn('Retro desk model failed, using procedural fallback:', err);
        if (!disposed && !deskMounted) {
          deskMounted = true;
          mountWorkstation(createProceduralWorkstation());
        }
      });

    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
      mount.removeEventListener('pointerdown', onPointerDown);
      if (focusTween) focusTween.kill();
      removeIdleWobble?.();
      removeCalibControls?.();
      delete window.__cbDumpDeskScene;
      if (workstationGroup) scene.remove(workstationGroup);
      controls.dispose();
      webglRenderer.dispose();
      safeRemoveChild(mount, webglRenderer.domElement);
      cssScene.remove(cssScreen);
      safeRemoveChild(mount, cssRenderer.domElement);
      sceneRef.current = null;
    };
  }, [calibrating, prefersReducedMotion, siteSrc, setModeSafe]);

  const handleExit = () => sceneRef.current?.exitDesk?.();

  const handleSelectDesk = () => {
    if (mode === 'immersed') handleExit();
  };

  return (
    <div className="fixed inset-0 z-0 bg-[#020504]">
      <div ref={mountRef} className="desktop-scene absolute inset-0" />

      {calibrating && (
        <ScreenCalibOverlay hud={calibHud} onTogglePan={() => calibApiRef.current.togglePan()} />
      )}

      {mode !== 'loading' && onGoFlat && !calibrating && (
        <ViewModeSwitch
          mode={viewMode}
          onDesk={handleSelectDesk}
          onFlat={onGoFlat}
          className={`fixed z-50 pointer-events-auto right-4 ${
            mode === 'immersed' || !isMobile
              ? 'top-[max(1rem,env(safe-area-inset-top))]'
              : 'bottom-[max(6.5rem,env(safe-area-inset-bottom))]'
          }`}
        />
      )}

      <div
        className={`fixed inset-0 z-30 transition-all duration-700 ease-out ${
          mode === 'immersed'
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-[0.97] pointer-events-none'
        }`}
        aria-hidden={mode !== 'immersed'}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px rgba(57,255,20,0.08), inset 0 0 40px rgba(0,0,0,0.9)',
          }}
        />
        <iframe
          src={siteSrc}
          title="Camden Burke Resume"
          className="h-full w-full border-0 bg-void"
          allow="fullscreen"
        />
      </div>

      {mode === 'loading' && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-void/90">
          <p className="font-mono text-sm tracking-[0.35em] text-matrix animate-pulse">
            LOADING INTERACTIVE DESK
          </p>
          <p className="mt-3 font-mono text-[10px] text-matrix-dim">Retro sci-fi desk · Sketchfab</p>
        </div>
      )}

      {mode === 'overview' && !calibrating && (
        <div className="pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-end pb-[max(2.5rem,env(safe-area-inset-bottom))] px-6">
          <p className="font-mono text-center text-xs tracking-[0.3em] text-matrix/90">
            {isMobile ? 'Tap monitor to open resume' : 'Click monitor to open resume'}
          </p>
          <p className="mt-2 font-mono text-[10px] text-matrix-dim/80">
            {isMobile ? 'Swipe to look around · Esc to exit fullscreen' : 'Drag to look around · Esc to exit fullscreen'}
          </p>
        </div>
      )}

      {mode === 'focusing' && (
        <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-matrix/60 to-transparent animate-pulse" />
        </div>
      )}
    </div>
  );
}
