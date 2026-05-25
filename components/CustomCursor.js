import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.body.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeEventListener('mouseleave', leave);
    };
  }, [prefersReducedMotion]);

  if (!visible || prefersReducedMotion) return null;

  return (
    <>
      <div
        className="custom-cursor-dot pointer-events-none fixed z-[150] hidden md:block"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
      <div
        className="custom-cursor-ring pointer-events-none fixed z-[149] hidden md:block"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
    </>
  );
}
