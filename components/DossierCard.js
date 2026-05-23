export default function DossierCard({ refId, role, company, location, period, bullets, accent = 'matrix' }) {
  const labelColor = accent === 'amber' ? 'text-amber' : 'text-matrix';

  return (
    <article className="panel-border corner-brackets relative bg-panel p-6 md:p-8 transition-all duration-300">
      <div className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-matrix-dim/60 rotate-12">
        REF-{refId}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className={`font-mono text-xs uppercase tracking-widest ${labelColor}`}>
            {'// '}{company}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-white">{role}</h3>
          {location && (
            <p className="mt-1 font-mono text-[11px] text-[#6a8070]">{location}</p>
          )}
        </div>
        <time className="font-mono text-xs text-matrix-dim whitespace-nowrap">{period}</time>
      </div>
      <ul className="mt-6 space-y-3 border-t border-matrix/10 pt-6">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#9cb8a0] md:text-base">
            <span className="font-mono text-matrix shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
