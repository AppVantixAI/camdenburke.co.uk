import { useState } from 'react';
import { resume } from '../data/resume';

export default function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  const job = resume.experience[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      {/* Timeline rail */}
      <div className="relative font-mono text-xs">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-matrix via-matrix/30 to-transparent" />
        <ul className="relative space-y-1">
          {resume.experience.map((entry, i) => (
            <li key={`${entry.company}-${entry.role}`}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`group flex w-full items-start gap-4 py-3 pl-0 text-left transition-all ${
                  active === i ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                }`}
              >
                <span
                  className={`relative z-10 mt-1.5 h-[22px] w-[22px] shrink-0 border-2 transition-all ${
                    active === i
                      ? 'border-matrix bg-matrix/20 shadow-[0_0_12px_rgba(57,255,20,0.5)]'
                      : 'border-matrix/30 bg-void group-hover:border-matrix/60'
                  }`}
                >
                  {active === i && (
                    <span className="absolute inset-[5px] bg-matrix animate-pulse" />
                  )}
                </span>
                <span>
                  <span
                    className={`block text-[10px] tracking-wider ${
                      active === i ? 'text-matrix' : 'text-matrix-dim'
                    }`}
                  >
                    REF-0{i + 1}
                  </span>
                  <span className="block text-white font-medium mt-0.5">{entry.company}</span>
                  <span className="block text-[#6a8070] mt-0.5">{entry.period}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Active dossier — animated swap */}
      <article
        key={active}
        className="panel-border corner-brackets dossier-enter relative bg-panel p-6 md:p-8"
      >
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-matrix">
              {'// '}{job.company}
            </p>
            <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold text-white">{job.role}</h3>
            <p className="mt-1 font-mono text-[11px] text-[#6a8070]">{job.location}</p>
          </div>
          <time className="font-mono text-xs text-amber mt-2 md:mt-0">{job.period}</time>
        </div>
        <ul className="mt-6 space-y-3 border-t border-matrix/10 pt-6">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-[#9cb8a0] md:text-base">
              <span className="font-mono text-matrix shrink-0">{String(i + 1).padStart(2, '0')}</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
