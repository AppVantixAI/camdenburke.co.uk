/**
 * UV region for the "AIRSHIP DIGITAL INSPECTOR" panel on Details_emissive.jpeg (4096²).
 * Full mesh UVs span ~0–1; only this rect is the visible CRT / blimp screen.
 */
export const BLIMP_SCREEN_UV = {
  u0: 0.06,
  v0: 0.295,
  u1: 0.94,
  v1: 0.655,
};

/** Center and span of the CRT / blimp panel in texture space. */
export function blimpScreenUVMetrics(rect = BLIMP_SCREEN_UV) {
  return {
    uMid: (rect.u0 + rect.u1) / 2,
    vMid: (rect.v0 + rect.v1) / 2,
    uSpan: rect.u1 - rect.u0,
    vSpan: rect.v1 - rect.v0,
  };
}

/** UV corners: TL, TR, BR, BL (Three.js v=0 is bottom of texture). */
export function blimpScreenUVCorners(rect = BLIMP_SCREEN_UV) {
  const { u0, v0, u1, v1 } = rect;
  return [
    { u: u0, v: v1, label: 'TL' },
    { u: u1, v: v1, label: 'TR' },
    { u: u1, v: v0, label: 'BR' },
    { u: u0, v: v0, label: 'BL' },
  ];
}
