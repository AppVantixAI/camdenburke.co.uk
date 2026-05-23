import { useEffect, useRef } from 'react';
import { resume } from '../data/resume';

export default function ThreatRadar() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let angle = 0;

    const blips = resume.skillGroups.map((g, i) => {
      const a = (i / resume.skillGroups.length) * Math.PI * 2;
      const r = 0.35 + (i % 3) * 0.18;
      return { label: g.title.split(' ')[0], x: Math.cos(a) * r, y: Math.sin(a) * r };
    });

    const draw = () => {
      const size = canvas.width;
      const cx = size / 2;
      const cy = size / 2;
      const radius = size * 0.42;

      ctx.fillStyle = 'rgba(3, 8, 6, 0.25)';
      ctx.fillRect(0, 0, size, size);

      for (let r = 0.25; r <= 1; r += 0.25) {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * r, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(57, 255, 20, 0.15)';
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.1)';
      ctx.stroke();

      const sweep = angle;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, sweep - 0.4, sweep);
      ctx.closePath();
      ctx.fillStyle = 'rgba(57, 255, 20, 0.12)';
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(sweep) * radius, cy + Math.sin(sweep) * radius);
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.7)';
      ctx.lineWidth = 2;
      ctx.stroke();

      blips.forEach((b) => {
        const bx = cx + b.x * radius;
        const by = cy + b.y * radius;
        const sweepDist = Math.abs(Math.atan2(by - cy, bx - cx) - sweep);
        const lit = sweepDist < 0.5 || sweepDist > Math.PI * 2 - 0.5;

        ctx.beginPath();
        ctx.arc(bx, by, lit ? 5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = lit ? '#39ff14' : 'rgba(57, 255, 20, 0.35)';
        ctx.fill();
        if (lit) {
          ctx.shadowColor = '#39ff14';
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      angle += 0.02;
      frameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      const size = Math.min(parent.clientWidth, 320);
      canvas.width = size;
      canvas.height = size;
    };
    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="max-w-[320px] w-full aspect-square" aria-hidden="true" />
      <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-matrix-dim">THREAT_SURFACE_MAP</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {resume.skillGroups.map((g) => (
          <span key={g.title} className="text-[9px] text-[#6a8070] border border-matrix/15 px-2 py-0.5">
            {g.title}
          </span>
        ))}
      </div>
    </div>
  );
}
