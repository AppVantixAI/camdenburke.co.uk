import * as THREE from 'three';
import { applyDeskCameraControls } from './deskCameraControls';

export const ENABLE_SCREEN_CALIBRATION = false;
export const CALIBRATED_ANCHOR = null;

const STORAGE_KEY = 'cb_screen_anchor_calib';
/** Position + scale only — rotation comes from glass mesh. */
const ANCHOR_VERSION = 44;

const MAX_POS_DELTA = 0.025;
const MIN_DISPLAY_SCALE = 0.92;
const MAX_DISPLAY_SCALE = 1.08;

function round(n) {
  return Math.round(n * 1000) / 1000;
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export function isScreenCalibrationEnabled() {
  if (typeof window === 'undefined') return false;
  if (!ENABLE_SCREEN_CALIBRATION && !CALIBRATED_ANCHOR) {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('calibrate')) return false;
  }
  return ENABLE_SCREEN_CALIBRATION || new URLSearchParams(window.location.search).has('calibrate');
}

export function loadCalibratedAnchor() {
  if (CALIBRATED_ANCHOR) return CALIBRATED_ANCHOR;
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : null;
    if (data && data.anchorVersion !== ANCHOR_VERSION) return null;
    return data;
  } catch {
    return null;
  }
}

function getAutoPose(anchor) {
  return anchor?.userData?.autoPose ?? null;
}

export function resetAnchorToAutoPose(anchor) {
  const auto = getAutoPose(anchor);
  if (!auto || !anchor) return;
  anchor.position.copy(auto.position);
  anchor.quaternion.copy(auto.quaternion);
  if (auto.scale) anchor.scale.copy(auto.scale);
  anchor.updateWorldMatrix(true, true);
}

export function applyCalibrationDelta(anchor) {
  if (!anchor) return;
  resetAnchorToAutoPose(anchor);

  const data = CALIBRATED_ANCHOR || loadCalibratedAnchor();
  if (!data?.positionDelta) return;

  anchor.position.x += clamp(data.positionDelta.x, -MAX_POS_DELTA, MAX_POS_DELTA);
  anchor.position.y += clamp(data.positionDelta.y, -MAX_POS_DELTA, MAX_POS_DELTA);
  anchor.position.z += clamp(data.positionDelta.z, -MAX_POS_DELTA, MAX_POS_DELTA);
  anchor.updateWorldMatrix(true, true);
}

export function applyCalibratedAnchor(anchor) {
  applyCalibrationDelta(anchor);
}

export function loadCalibratedDisplayScale(fallback = 1) {
  const data = CALIBRATED_ANCHOR || loadCalibratedAnchor();
  return clamp(data?.displayScale ?? fallback, MIN_DISPLAY_SCALE, MAX_DISPLAY_SCALE);
}

export function computeCalibrationDelta(anchor) {
  const auto = getAutoPose(anchor);
  if (!auto) return null;
  const posDelta = anchor.position.clone().sub(auto.position);
  return {
    anchorVersion: ANCHOR_VERSION,
    positionDelta: {
      x: round(clamp(posDelta.x, -MAX_POS_DELTA, MAX_POS_DELTA)),
      y: round(clamp(posDelta.y, -MAX_POS_DELTA, MAX_POS_DELTA)),
      z: round(clamp(posDelta.z, -MAX_POS_DELTA, MAX_POS_DELTA)),
    },
  };
}

export function formatCalibrationForFile(data) {
  return `export const CALIBRATED_ANCHOR = ${JSON.stringify(data, null, 2)};`;
}

export function saveCalibratedAnchor(anchor, displayScale) {
  const data = {
    ...computeCalibrationDelta(anchor),
    displayScale: round(clamp(displayScale ?? 1, MIN_DISPLAY_SCALE, MAX_DISPLAY_SCALE)),
  };
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
  console.log('%cScreen calibration saved (position + scale)', 'color:#39ff14;font-weight:bold');
  console.log(formatCalibrationForFile(data));
  return data;
}

function applyPanMode(controls, panOn) {
  if (!controls) return;
  if (panOn) {
    controls.enabled = true;
    controls.enablePan = true;
    controls.enableRotate = false;
    controls.enableZoom = true;
    controls.screenSpacePanning = true;
  } else {
    controls.enabled = false;
    controls.enablePan = false;
    controls.enableRotate = false;
  }
}

/**
 * Arrow keys move · [ ] depth · , . scale · P pan · S save · R reset (no rotation keys)
 */
export function installScreenCalibrationControls(anchor, options = {}) {
  const {
    onUpdate,
    controls = null,
    camera = null,
    calibState = { displayScale: 1, panMode: false },
  } = options;

  const emit = () => {
    const delta = computeCalibrationDelta(anchor);
    onUpdate?.({
      position: {
        x: anchor.position.x,
        y: anchor.position.y,
        z: anchor.position.z,
      },
      positionDelta: delta?.positionDelta,
      displayScale: calibState.displayScale,
      panMode: calibState.panMode,
    });
  };

  applyCalibrationDelta(anchor);
  applyPanMode(controls, calibState.panMode);
  emit();

  const step = 0.002;
  const big = 0.01;
  const scaleStep = 0.01;
  const scaleBig = 0.04;

  const onKey = (e) => {
    if (!isScreenCalibrationEnabled()) return;
    if (calibState.panMode && !['p', 'P', 's', 'S', 'r', 'R'].includes(e.key)) {
      return;
    }

    const s = e.shiftKey ? big : step;
    const sc = e.shiftKey ? scaleBig : scaleStep;
    let handled = true;

    switch (e.key) {
      case 'ArrowUp':
        anchor.position.y += s;
        break;
      case 'ArrowDown':
        anchor.position.y -= s;
        break;
      case 'ArrowLeft':
        anchor.position.x -= s;
        break;
      case 'ArrowRight':
        anchor.position.x += s;
        break;
      case '[':
        anchor.position.z -= s;
        break;
      case ']':
        anchor.position.z += s;
        break;
      case '<':
      case ',':
        calibState.displayScale = Math.max(MIN_DISPLAY_SCALE, calibState.displayScale - sc);
        break;
      case '>':
      case '.':
        calibState.displayScale = Math.min(MAX_DISPLAY_SCALE, calibState.displayScale + sc);
        break;
      case 'p':
      case 'P':
        if (e.metaKey || e.ctrlKey) {
          handled = false;
          break;
        }
        calibState.panMode = !calibState.panMode;
        applyPanMode(controls, calibState.panMode);
        break;
      case 's':
      case 'S':
        if (e.metaKey || e.ctrlKey) {
          handled = false;
          break;
        }
        saveCalibratedAnchor(anchor, calibState.displayScale);
        break;
      case 'r':
      case 'R':
        if (e.metaKey || e.ctrlKey) {
          handled = false;
          break;
        }
        resetAnchorToAutoPose(anchor);
        calibState.displayScale = 1;
        emit();
        break;
      default:
        handled = false;
    }

    if (handled) {
      e.preventDefault();
      anchor.updateWorldMatrix(true, true);
      emit();
    }
  };

  window.addEventListener('keydown', onKey);

  return () => {
    window.removeEventListener('keydown', onKey);
    if (controls) {
      controls.enabled = true;
      controls.enablePan = false;
      controls.enableRotate = true;
      controls.enableZoom = true;
      if (camera) applyDeskCameraControls(controls, camera);
    }
  };
}

export function getScreenAnchor(screenMesh) {
  if (!screenMesh) return null;
  let node = screenMesh;
  while (node) {
    if (node.name === 'screen-anchor') return node;
    node = node.parent;
  }
  return null;
}

export function toggleCalibrationPan(controls, calibState) {
  if (!calibState || !controls) return calibState.panMode;
  calibState.panMode = !calibState.panMode;
  applyPanMode(controls, calibState.panMode);
  return calibState.panMode;
}
