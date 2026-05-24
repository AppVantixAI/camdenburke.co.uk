import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ResumeSite from '../components/ResumeSite';
import DeskErrorBoundary from '../components/DeskErrorBoundary';

const DesktopScene = dynamic(() => import('../components/DesktopScene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#030806] font-mono text-sm tracking-[0.3em] text-[#39ff14]">
      LOADING WORKSTATION…
    </div>
  ),
});

const VIEW_MODE_KEY = 'cb_view_mode';

export default function Home() {
  const [view, setView] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(VIEW_MODE_KEY);
    setView(saved === 'flat' ? 'flat' : 'desk');
  }, []);

  const goFlat = () => {
    sessionStorage.setItem(VIEW_MODE_KEY, 'flat');
    document.body.style.overflow = '';
    setView('flat');
  };

  const goDesk = () => {
    sessionStorage.setItem(VIEW_MODE_KEY, 'desk');
    setView('desk');
  };

  if (view === null) {
    return <div className="fixed inset-0 bg-[#030806]" aria-hidden="true" />;
  }

  if (view === 'flat') {
    return <ResumeSite showViewToggle onGoDesk={goDesk} viewMode="flat" />;
  }

  return (
    <DeskErrorBoundary onRetryDesk={goDesk}>
      <DesktopScene siteSrc="/site" onGoFlat={goFlat} onGoDesk={goDesk} viewMode="desk" />
    </DeskErrorBoundary>
  );
}
