import { resume } from '../data/resume';

export default function ThreatTicker() {
  const items = [...resume.tickerItems, ...resume.tickerItems];

  return (
    <div
      className="site-ticker fixed left-0 right-0 z-40 hidden overflow-hidden border-y border-matrix/15 bg-void/90 backdrop-blur-sm md:block"
      style={{ top: 'var(--header-height, 52px)' }}
    >
      <div className="ticker-track flex whitespace-nowrap py-1.5 font-mono text-xs tracking-widest text-matrix-dim md:text-[10px]">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="mx-8 flex items-center gap-2">
            <span className="text-alert">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
