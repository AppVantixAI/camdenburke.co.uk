import { resume } from '../data/resume';

export default function CaseStudies() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {(resume.caseStudies ?? []).map((study) => (
        <article key={study.title} className="panel-border corner-brackets bg-panel/85 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-matrix md:text-[10px]">Proof Item</p>
          <h3 className="mt-3 font-display text-2xl font-bold text-white">{study.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#9cb8a0]">{study.summary}</p>

          <div className="mt-5 rounded-sm border border-matrix/15 bg-void/40 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-matrix-dim md:text-[10px]">Why It Matters</p>
            <p className="mt-2 text-sm leading-7 text-[#c7ddca]">{study.impact}</p>
          </div>

          <div className="mt-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-matrix-dim md:text-[10px]">Tools / Environment</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-matrix/20 bg-matrix/5 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-[#9ec9a5] md:text-[10px]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-matrix-dim md:text-[10px]">Evidence</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#c7ddca]">
              {study.evidence.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-matrix" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {study.links.map((link) => (
              link.external ? (
                <a
                  key={`${study.title}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center border border-matrix/35 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-matrix transition-all hover:bg-matrix/12 active:scale-95 md:min-h-0 md:text-[10px]"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={`${study.title}-${link.label}`}
                  href={link.href}
                  download={link.download || undefined}
                  className="inline-flex min-h-[44px] items-center border border-matrix/35 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-matrix transition-all hover:bg-matrix/12 active:scale-95 md:min-h-0 md:text-[10px]"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
