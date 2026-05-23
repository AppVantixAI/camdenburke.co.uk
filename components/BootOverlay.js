import { useEffect, useState } from 'react';

const BOOT_LINES = [
  { text: 'SOC_KERNEL v2026.05 — initializing...', delay: 0 },
  { text: 'Loading threat_intel modules........ OK', delay: 400 },
  { text: 'Verifying Security+ credential...... OK', delay: 800 },
  { text: 'Mounting AD home lab partition........ OK', delay: 1200 },
  { text: 'Operator: Camden Burke', delay: 1600 },
  { text: 'ACCESS GRANTED — welcome to the perimeter.', delay: 2000 },
];

export default function BootOverlay({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('cb_boot_complete')) {
      onComplete?.();
      return;
    }
    setVisible(true);

    BOOT_LINES.forEach(({ text, delay }) => {
      setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay);
    });

    const done = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        sessionStorage.setItem('cb_boot_complete', '1');
        setVisible(false);
        onComplete?.();
      }, 600);
    }, 2800);

    return () => clearTimeout(done);
  }, [onComplete]);

  const skip = () => {
    sessionStorage.setItem('cb_boot_complete', '1');
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void font-mono transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={skip}
      role="presentation"
    >
      <div className="w-full max-w-lg px-8">
        <p className="mb-6 text-[10px] tracking-[0.5em] text-matrix-dim">SECURE BOOT SEQUENCE</p>
        <div className="space-y-2 text-sm text-matrix min-h-[180px]">
          {lines.map((line) => (
            <p key={line} className="animate-pulse">
              <span className="text-amber mr-2">&gt;</span>
              {line}
            </p>
          ))}
          {lines.length < BOOT_LINES.length && (
            <p className="text-matrix-dim terminal-cursor">_</p>
          )}
        </div>
        <p className="mt-8 text-[10px] text-matrix-dim tracking-widest">[ click anywhere to skip ]</p>
      </div>
    </div>
  );
}
