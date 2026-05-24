/**
 * CSS3D orientation fixes for Details glass.
 * Do NOT rotate the cssObject in 3D to flip content — that turns the plane away from the camera.
 * Use a 2D DOM scale on the iframe wrapper instead.
 */

/** Override via ?screenFlip=1,-1 (each value must be 1 or -1). */
export function parseScreenFlipQuery() {
  if (typeof window === 'undefined') return null;
  const raw = new URLSearchParams(window.location.search).get('screenFlip');
  if (!raw) return null;
  const [x, y] = raw.split(',').map((n) => Number(n.trim()));
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  if (Math.abs(x) !== 1 || Math.abs(y) !== 1) return null;
  return { x, y };
}

export function applyCssDomFlip(element, flip) {
  if (!element) return;
  if (!flip || (flip.x === 1 && flip.y === 1)) {
    element.style.transform = 'none';
    return;
  }
  element.style.transformOrigin = '50% 50%';
  element.style.transform = `scale(${flip.x}, ${flip.y})`;
}

export function resolveCssDomFlip(screenMesh) {
  return parseScreenFlipQuery() || screenMesh?.userData?.cssDomFlip || { x: 1, y: 1 };
}
