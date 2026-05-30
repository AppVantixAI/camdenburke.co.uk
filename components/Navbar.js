import { useEffect, useRef, useState } from 'react';
import { resume } from '../data/resume';
import { useActiveSection } from '../lib/useActiveSection';

export default function Navbar() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');
  const activeId = useActiveSection(resume.nav.map((item) => item.id));

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

  useEffect(() => {
    const header = headerRef.current;
    if (!header || typeof ResizeObserver === 'undefined') {
      return undefined;
    }

    const updateHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
        scrolled ? 'border-b border-matrix/20 bg-void/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex min-h-[44px] items-center gap-2 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-matrix animate-pulse-glow" />
            <span className="text-matrix">camden</span>
            <span className="hidden text-white sm:inline">/ {resume.targetRole}</span>
          </a>

          <p className="hidden text-xs tracking-widest text-matrix-dim md:text-[10px] lg:block">
            LOCAL_TIME <span className="text-matrix">{time}</span>
          </p>

          <ul className="hidden items-center gap-5 text-xs uppercase tracking-wider text-[#8aa88e] md:flex md:text-[11px]">
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
            className="inline-flex min-h-[44px] items-center border border-matrix/40 bg-matrix/5 px-4 py-2 text-xs uppercase tracking-widest text-matrix transition-colors hover:bg-matrix/15 active:scale-95 md:px-3 md:py-1.5 md:text-[10px]"
          >
            Resume PDF
          </a>
        </div>

        <div className="resume-scroll-fade relative mt-3 md:hidden">
          <div className="resume-scroll-row flex gap-2 overflow-x-auto pb-1">
            {resume.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex min-h-[44px] shrink-0 items-center border px-4 py-2 text-xs uppercase tracking-[0.22em] transition-colors active:scale-95 md:text-[10px] ${
                  activeId === item.id
                    ? 'border-matrix/50 bg-matrix/10 text-matrix'
                    : 'border-matrix/20 text-[#8aa88e] hover:text-matrix'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-2 text-xs tracking-widest text-matrix-dim md:hidden md:text-[10px]">
          LOCAL_TIME <span className="text-matrix">{time}</span>
        </p>
      </nav>
    </header>
  );
}
