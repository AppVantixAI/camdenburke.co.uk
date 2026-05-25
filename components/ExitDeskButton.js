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
      className="fixed top-4 right-4 z-[60] border border-matrix/50 bg-void/90 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-matrix backdrop-blur-sm hover:bg-matrix/15 transition-colors"
    >
      ← Back to interactive desk
    </button>
  );
}
