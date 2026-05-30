import { useEffect, useRef, useState } from 'react';
import { resume } from '../data/resume';
import { useActiveSection } from '../lib/useActiveSection';
import ViewModeSwitch from './ViewModeSwitch';

const navLinkClass =
  'hover:text-matrix transition-colors whitespace-nowrap';

export default function Navbar({
  showViewToggle = false,
  viewMode = 'flat',
  onGoDesk,
  onGoFlat,
}) {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(resume.nav.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
  }, [showViewToggle, menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const brand = (
    <a
      href="#"
      onClick={closeMenu}
      className="flex min-h-[44px] min-w-0 items-center gap-2 text-sm xl:shrink-0"
    >
      <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-matrix animate-pulse-glow" />
      <span className="truncate text-matrix">camden</span>
      <span className="hidden truncate text-white xl:inline">/ {resume.targetRole}</span>
    </a>
  );

  const pdfButton = (compact = false) => (
    <a
      href="/resume.pdf"
      download
      onClick={closeMenu}
      className={`inline-flex min-h-[44px] shrink-0 items-center border border-matrix/40 bg-matrix/5 font-mono uppercase tracking-widest text-matrix transition-colors hover:bg-matrix/15 active:scale-95 ${
        compact
          ? 'px-3 py-2 text-[10px]'
          : 'px-3 py-2 text-xs md:px-3 md:py-1.5 md:text-[10px]'
      }`}
    >
      {compact ? 'PDF' : 'Resume PDF'}
    </a>
  );

  const viewSwitch = (className = '') =>
    showViewToggle &&
    onGoDesk && (
      <ViewModeSwitch
        mode={viewMode}
        onDesk={() => {
          closeMenu();
          onGoDesk();
        }}
        onFlat={() => {
          closeMenu();
          (onGoFlat || (() => {}))();
        }}
        compact
        className={className}
      />
    );

  const desktopNavLinks = (
    <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-wider text-[#8aa88e] xl:gap-x-4 xl:text-[11px]">
      {resume.nav.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={navLinkClass}>
            [{item.label}]
          </a>
        </li>
      ))}
    </ul>
  );

  const activeLabel = resume.nav.find((item) => item.id === activeId)?.label || 'Sections';

  return (
    <header
      ref={headerRef}
      className={`site-header fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
        scrolled || menuOpen ? 'border-b border-matrix/20 bg-void/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Mobile: single compact row + collapsible menu */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-2 py-2">
            {brand}
            <div className="flex shrink-0 items-center gap-2">
              {pdfButton(true)}
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-panel"
                className="inline-flex min-h-[44px] max-w-[9.5rem] items-center gap-2 border border-matrix/25 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#8aa88e] transition-colors active:scale-95"
              >
                <span className="truncate">{menuOpen ? 'Close' : activeLabel}</span>
                <span className="text-matrix" aria-hidden="true">
                  {menuOpen ? '×' : '▾'}
                </span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div
              id="mobile-nav-panel"
              className="border-t border-matrix/10 pb-3 pt-2"
            >
              <div className="grid grid-cols-2 gap-2">
                {resume.nav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`inline-flex min-h-[44px] items-center justify-center border px-3 py-2 text-center text-[11px] uppercase tracking-[0.16em] transition-colors active:scale-95 ${
                      activeId === item.id
                        ? 'border-matrix/50 bg-matrix/10 text-matrix'
                        : 'border-matrix/20 text-[#8aa88e]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              {viewSwitch('mt-3 w-full')}
            </div>
          )}
        </div>

        {/* Tablet / small desktop: two rows to avoid overlap */}
        <div className="hidden py-3 md:block xl:hidden">
          <div className="flex items-center justify-between gap-4">
            {brand}
            <div className="flex shrink-0 items-center gap-2">
              {viewSwitch('inline-flex')}
              {pdfButton(false)}
            </div>
          </div>
          <div className="mt-3 border-t border-matrix/10 pt-3">{desktopNavLinks}</div>
        </div>

        {/* Large desktop: three-column grid */}
        <div className="hidden py-3 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:items-center xl:gap-6">
          <div className="min-w-0 justify-self-start">{brand}</div>
          <div className="justify-self-center px-2">{desktopNavLinks}</div>
          <div className="flex shrink-0 items-center justify-self-end gap-2">
            {viewSwitch('inline-flex')}
            {pdfButton(false)}
          </div>
        </div>
      </nav>
    </header>
  );
}
