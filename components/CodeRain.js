import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../lib/usePrefersReducedMotion';

const CHARS = '01アイウエオｱｲｳｴｵSECURE<>{}[]/\\|#@$';

export default function CodeRain() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let columns = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      const fontSize = 14;
      const count = Math.floor(w / fontSize);
      columns = Array.from({ length: count }, () => Math.random() * h);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 8, 6, 0.08)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(57, 255, 20, 0.35)';
      ctx.font = '12px JetBrains Mono, monospace';

      columns.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * 14, y);
        if (y > h && Math.random() > 0.975) columns[i] = 0;
        columns[i] += 14;
      });
      frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-30"
      aria-hidden="true"
    />
  );
}
