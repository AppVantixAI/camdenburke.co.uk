import { useState } from 'react';
import dynamic from 'next/dynamic';
import ResumeSite from '../components/ResumeSite';
import DeskErrorBoundary from '../components/DeskErrorBoundary';
import { useIsMobile } from '../lib/useIsMobile';

const DesktopScene = dynamic(() => import('../components/DesktopScene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030806] font-mono text-sm tracking-[0.3em] text-[#39ff14]">
      LOADING WORKSTATION…
    </div>
  ),
});

export default function Home() {
  const [view, setView] = useState('flat');
  const [showDeskPrompt, setShowDeskPrompt] = useState(false);
  const isMobile = useIsMobile();

  const goFlat = () => {
    document.body.style.overflow = '';
    setView('flat');
    setShowDeskPrompt(false);
  };

  const goDesk = () => {
    setView('desk');
    setShowDeskPrompt(false);
  };

  const requestDesk = () => {
    if (isMobile) {
      setShowDeskPrompt(true);
      return;
    }
    goDesk();
  };

  if (view === 'flat') {
    return (
      <>
        <ResumeSite showViewToggle onGoDesk={requestDesk} viewMode="flat" />
        {showDeskPrompt && (
          <div className="fixed inset-0 z-[200] flex items-end justify-center bg-void/80 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:items-center">
            <div
              className="panel-border w-full max-w-md bg-panel p-6"
              role="dialog"
              aria-labelledby="desk-prompt-title"
              aria-modal="true"
            >
              <p id="desk-prompt-title" className="font-display text-xl font-bold text-white">
                Open 3D desk on mobile?
              </p>
              <p className="mt-3 text-sm leading-7 text-[#9cb8a0]">
                The interactive desk works best on desktop. It may load slowly and use more battery on
                a phone. You can always return to the quick resume view.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={goDesk}
                  className="inline-flex min-h-[44px] items-center border border-matrix bg-matrix/15 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-matrix transition-all active:scale-95"
                >
                  Continue anyway
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeskPrompt(false)}
                  className="inline-flex min-h-[44px] items-center border border-[#3a4a3c] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#9cb8a0] transition-all active:scale-95"
                >
                  Stay on resume
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <DeskErrorBoundary onRetryDesk={goDesk}>
      <DesktopScene siteSrc="/site" onGoFlat={goFlat} onGoDesk={requestDesk} viewMode="desk" />
    </DeskErrorBoundary>
  );
}
