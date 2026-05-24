export default function ScreenCalibOverlay({ hud, onTogglePan }) {
  if (!hud?.position) return null;

  const p = hud.position;
  const d = hud.positionDelta;
  const scale = hud.displayScale ?? 1;
  const panOn = !!hud.panMode;

  return (
    <div className="fixed bottom-6 left-6 z-[100] max-w-md font-mono text-[11px] leading-relaxed">
      <div className="border border-matrix/50 bg-void/95 p-4 shadow-[0_0_40px_rgba(57,255,20,0.15)] backdrop-blur-md pointer-events-none">
        <p className="text-matrix text-xs uppercase tracking-[0.35em] mb-3">Screen calibration</p>
        <p className="text-[#9cb8a0]">
          <span className="text-matrix">↑↓←→</span> Move screen &nbsp;
          <span className="text-matrix">Shift</span> = big step
        </p>
        <p className="text-[#9cb8a0] mt-1">
          <span className="text-matrix">[ ]</span> Depth &nbsp;
          <span className="text-matrix">, .</span> Scale smaller / larger
        </p>
        <p className="text-[#9cb8a0] mt-1">
          <span className="text-matrix">P</span> Pan view &nbsp;
          <span className="text-matrix">S</span> Save &nbsp;
          <span className="text-matrix">R</span> Reset
        </p>
        <p className="text-[10px] text-amber/90 mt-2">
          Rotation is locked to the monitor glass — only position and scale adjust here.
        </p>
        <div className="mt-4 space-y-1 text-matrix-dim border-t border-matrix/20 pt-3">
          <p>
            pos x:{p.x.toFixed(3)} y:{p.y.toFixed(3)} z:{p.z.toFixed(3)}
          </p>
          {d && (
            <p>
              delta x:{d.x.toFixed(3)} y:{d.y.toFixed(3)} z:{d.z.toFixed(3)}
            </p>
          )}
          <p>scale: {scale.toFixed(3)}</p>
        </div>
        <p className="mt-3 text-[10px] text-amber">
          {panOn
            ? 'Pan ON — drag to move camera. Press P or button to exit.'
            : 'Pan OFF — arrow keys nudge the iframe. Press R to clear old saved offsets.'}
        </p>
      </div>
      <button
        type="button"
        onClick={onTogglePan}
        className={`pointer-events-auto mt-2 w-full border px-4 py-2.5 text-[10px] uppercase tracking-widest transition-all ${
          panOn
            ? 'border-amber bg-amber/20 text-amber'
            : 'border-matrix/40 bg-void/90 text-matrix hover:border-matrix'
        }`}
      >
        {panOn ? 'Exit pan mode' : 'Pan camera (P)'}
      </button>
    </div>
  );
}
