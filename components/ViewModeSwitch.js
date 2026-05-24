export default function ViewModeSwitch({ mode, onDesk, onFlat, className = '' }) {
  const base =
    'px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all border-l border-matrix/20 first:border-l-0';
  const active = 'bg-matrix/20 text-matrix';
  const idle =
    'bg-transparent text-[#8aa88e] hover:bg-matrix/10 hover:text-matrix';

  return (
    <div
      className={`inline-flex overflow-hidden rounded-sm border border-matrix/40 bg-void/90 shadow-[0_0_24px_rgba(0,0,0,0.5)] backdrop-blur-md ${className}`}
      role="group"
      aria-label="View mode"
    >
      <button
        type="button"
        onClick={onDesk}
        className={`${base} ${mode === 'desk' ? active : idle}`}
        aria-pressed={mode === 'desk'}
      >
        3D Desk
      </button>
      <button
        type="button"
        onClick={onFlat}
        className={`${base} ${mode === 'flat' ? active : idle}`}
        aria-pressed={mode === 'flat'}
      >
        Resume
      </button>
    </div>
  );
}
