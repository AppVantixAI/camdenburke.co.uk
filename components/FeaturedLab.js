import { resume } from '../data/resume';
import LabTopologyDiagram from './LabTopologyDiagram';

const SOC_BLOCKS = [
  { key: 'built', title: 'Built', accent: 'border-matrix/50 bg-matrix/[0.07]' },
  { key: 'observed', title: 'Observed', accent: 'border-[#3a6a48]/60 bg-[#0a140e]/80' },
  { key: 'relevantToSoc', title: 'Relevant to SOC / IAM', accent: 'border-amber/40 bg-amber/[0.06]' },
];

export default function FeaturedLab() {
  const lab = resume.featuredLab;
  const { socRelevance } = lab;

  return (
    <article className="featured-lab panel-border relative overflow-hidden bg-panel/90">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-matrix/[0.04] blur-3xl" />

      <div className="relative grid gap-8 border-b border-matrix/15 p-6 md:grid-cols-[minmax(260px,340px)_1fr] md:gap-10 md:p-10">
        <LabTopologyDiagram />

        <div>
          <div className="lab-proof-meta">
            <p className="font-mono text-[10px] tracking-wide text-matrix-dim">Proof of work</p>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-[#9cb8a0]">
              {lab.proofLine ?? `Hands-on identity lab · ${lab.period}`}
            </p>
          </div>

          <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
            {lab.title}
          </h3>
          <p className="mt-4 max-w-2xl font-body text-base leading-7 text-[#c7ddca] md:text-[17px] md:leading-8">
            {lab.summary}
          </p>

          {lab.metrics?.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {lab.metrics.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#9cb8a0]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-matrix shadow-[0_0_6px_rgba(57,255,20,0.6)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {lab.tools.map((tool) => (
              <span key={tool} className="meta-chip shrink-0 whitespace-nowrap">
                <span className="meta-chip__value">{tool}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative grid gap-4 p-6 md:grid-cols-3 md:p-8 md:pt-6">
        {SOC_BLOCKS.map(({ key, title, accent }) => (
          <div
            key={key}
            className={`soc-card group border-t-2 ${accent} p-5 transition-transform duration-200 hover:-translate-y-0.5`}
          >
            <p className="font-mono text-xs font-medium text-matrix">{title}</p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#9cb8a0]">
              {socRelevance[key].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 h-px w-3 shrink-0 bg-matrix/50 transition-all group-hover:w-4 group-hover:bg-matrix" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {lab.links?.length > 0 && (
        <div className="border-t border-matrix/10 px-6 py-5 md:px-8">
          {lab.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center font-mono text-xs text-[#9cb8a0] transition-colors hover:text-matrix"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
