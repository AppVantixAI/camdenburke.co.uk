import { useState } from 'react';
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

export default function Home() {
  const [view, setView] = useState('flat');

  const goFlat = () => {
    document.body.style.overflow = '';
    setView('flat');
  };

  const goDesk = () => {
    setView('desk');
  };

  if (view === 'flat') {
    return <ResumeSite showViewToggle onGoDesk={goDesk} viewMode="flat" />;
  }

  return (
    <DeskErrorBoundary onRetryDesk={goDesk}>
      <DesktopScene siteSrc="/site" onGoFlat={goFlat} onGoDesk={goDesk} viewMode="desk" />
    </DeskErrorBoundary>
  );
}
