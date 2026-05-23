import { useEffect, useState } from 'react';
import { resume } from '../data/resume';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    onScroll();
    tick();
    const interval = setInterval(tick, 1000);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
        scrolled ? 'border-b border-matrix/20 bg-void/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-matrix animate-pulse-glow" />
          <span className="text-matrix">root@</span>
          <span className="text-white">camden</span>
        </a>

        <p className="hidden text-[10px] tracking-widest text-matrix-dim sm:block">
          UTC_LOCAL <span className="text-matrix">{time}</span>
        </p>

        <ul className="hidden items-center gap-5 text-[11px] uppercase tracking-wider text-[#8aa88e] md:flex">
          {resume.nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-matrix transition-colors">
                [{item.label}]
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="border border-matrix/40 bg-matrix/5 px-3 py-1.5 text-[10px] uppercase tracking-widest text-matrix hover:bg-matrix/15 transition-colors"
        >
          ↓ PDF
        </a>
      </nav>
    </header>
  );
}
