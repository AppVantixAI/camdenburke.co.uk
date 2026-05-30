import { resume } from '../data/resume';

export default function KeyHighlights() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {(resume.keyHighlights ?? []).map((card) => (
        <article key={card.title} className="panel-border corner-brackets bg-panel/80 p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-matrix">{card.title}</p>
          <p className="mt-4 text-sm leading-7 text-[#c7ddca]">{card.summary}</p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7fa584]">
            {card.evidence}
          </p>
        </article>
      ))}
    </div>
  );
}
