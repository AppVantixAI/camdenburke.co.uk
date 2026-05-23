import { resume } from '../data/resume';

export default function ThreatTicker() {
  const items = [...resume.tickerItems, ...resume.tickerItems];

  return (
    <div className="fixed top-[52px] left-0 right-0 z-40 overflow-hidden border-y border-matrix/15 bg-void/90 backdrop-blur-sm">
      <div className="ticker-track flex whitespace-nowrap py-1.5 font-mono text-[10px] tracking-widest text-matrix-dim">
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
