export default function ExitDeskButton() {
  const exit = () => {
    if (typeof window !== 'undefined' && window.parent !== window) {
      window.parent.postMessage({ type: 'exit-desk' }, window.location.origin);
    }
  };

  if (typeof window === 'undefined' || window.parent === window) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={exit}
      className="fixed top-[max(1rem,env(safe-area-inset-top))] right-4 z-[60] inline-flex min-h-[44px] items-center border border-matrix/50 bg-void/90 px-4 py-2 font-mono text-xs uppercase tracking-widest text-matrix backdrop-blur-sm transition-colors hover:bg-matrix/15 active:scale-95 md:text-[10px]"
    >
      ← Back to interactive desk
    </button>
  );
}
