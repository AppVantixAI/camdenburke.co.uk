export default function ViewModeSwitch({ mode, onDesk, onFlat, className = '', compact = false }) {
  const base =
    'inline-flex min-h-[44px] flex-1 items-center justify-center px-3 py-2 font-mono text-xs uppercase tracking-widest transition-all border-l border-matrix/20 first:border-l-0 active:scale-95 md:min-h-[36px] md:flex-none md:px-3 md:py-1.5 md:text-[10px] md:tracking-[0.12em]';
  const active = 'bg-matrix/20 text-matrix';
  const idle =
    'bg-transparent text-[#8aa88e] hover:bg-matrix/10 hover:text-matrix';

  const deskLabel = compact ? 'Desk' : 'Interactive Desk';
  const flatLabel = compact ? 'Resume' : 'Quick Resume';

  return (
    <div
      className={`flex overflow-hidden rounded-sm border border-matrix/40 bg-void/90 shadow-[0_0_24px_rgba(0,0,0,0.5)] backdrop-blur-md md:inline-flex ${className}`}
      role="group"
      aria-label="View mode"
    >
      <button
        type="button"
        onClick={onDesk}
        className={`${base} ${mode === 'desk' ? active : idle}`}
        aria-pressed={mode === 'desk'}
      >
        {deskLabel}
      </button>
      <button
        type="button"
        onClick={onFlat}
        className={`${base} ${mode === 'flat' ? active : idle}`}
        aria-pressed={mode === 'flat'}
      >
        {flatLabel}
      </button>
    </div>
  );
}
