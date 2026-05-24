import * as THREE from 'three';

/**
 * Paint a UV rectangle on an emissive map (canvas) so the live iframe reads on top.
 * GLTF UV: u→right, v→up on texture; canvas y=0 is top.
 */
export function uvRectToPixelBounds(uvRect, texW, texH) {
  const x = uvRect.u0 * texW;
  const y = (1 - uvRect.v1) * texH;
  const w = (uvRect.u1 - uvRect.u0) * texW;
  const h = (uvRect.v1 - uvRect.v0) * texH;
  return { x, y, w, h };
}

/** Three.js texture images may be HTMLImageElement, ImageBitmap, or canvas — not always EventTarget. */
function isTextureImageReady(image) {
  return Boolean(image && image.width > 0 && image.height > 0);
}

function whenTextureImageReady(map, onReady, onFail) {
  if (isTextureImageReady(map.image)) {
    onReady();
    return;
  }

  const img = map.image;
  if (img && typeof img.addEventListener === 'function') {
    img.addEventListener('load', onReady, { once: true });
    img.addEventListener('error', onFail, { once: true });
    return;
  }
  if (img && 'onload' in img) {
    img.onload = onReady;
    img.onerror = onFail;
    return;
  }

  const prevOnUpdate = map.onUpdate;
  map.onUpdate = () => {
    if (typeof prevOnUpdate === 'function') prevOnUpdate();
    if (isTextureImageReady(map.image)) {
      map.onUpdate = prevOnUpdate;
      onReady();
    }
  };

  let attempts = 0;
  const poll = () => {
    if (isTextureImageReady(map.image)) {
      map.onUpdate = prevOnUpdate;
      onReady();
      return;
    }
    if (attempts++ > 120) {
      map.onUpdate = prevOnUpdate;
      onFail();
      return;
    }
    requestAnimationFrame(poll);
  };
  requestAnimationFrame(poll);
}

/**
 * @param {THREE.Material} material
 * @param {{ u0: number, v0: number, u1: number, v1: number }} uvRect
 * @param {{ fill?: string, keepSource?: boolean }} [options]
 * @returns {Promise<boolean>}
 */
export function maskEmissiveUVRegion(material, uvRect, options = {}) {
  const { fill = '#020806', keepSource = true } = options;
  const map = material?.emissiveMap;
  if (!map) return Promise.resolve(false);

  const run = () => {
    try {
      const img = map.image;
      if (!isTextureImageReady(img)) return false;

      const texW = img.width;
      const texH = img.height;
      const { x, y, w, h } = uvRectToPixelBounds(uvRect, texW, texH);

      const canvas = document.createElement('canvas');
      canvas.width = texW;
      canvas.height = texH;
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;

      if (keepSource) {
        ctx.drawImage(img, 0, 0, texW, texH);
      } else {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, texW, texH);
      }

      ctx.fillStyle = fill;
      ctx.fillRect(Math.floor(x), Math.floor(y), Math.ceil(w), Math.ceil(h));

      const next = new THREE.CanvasTexture(canvas);
      next.encoding = THREE.sRGBEncoding;
      next.flipY = map.flipY;
      next.wrapS = map.wrapS;
      next.wrapT = map.wrapT;
      next.needsUpdate = true;

      if (material.emissiveMap && material.emissiveMap !== map) {
        material.emissiveMap.dispose();
      }
      material.emissiveMap = next;
      material.needsUpdate = true;
      return true;
    } catch (err) {
      console.warn('maskEmissiveUVRegion failed (CORS or tainted canvas):', err);
      return false;
    }
  };

  return new Promise((resolve) => {
    whenTextureImageReady(
      map,
      () => resolve(run()),
      () => resolve(false)
    );
  });
}
