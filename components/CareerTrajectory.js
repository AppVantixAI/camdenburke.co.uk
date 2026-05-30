import { resume } from '../data/resume';

export default function CareerTrajectory() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {(resume.careerTrajectory ?? []).map((step, index, arr) => (
        <article
          key={step.phase}
          className="panel-border corner-brackets relative bg-panel/80 p-6"
        >
          {index < arr.length - 1 && (
            <span
              className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 font-mono text-lg text-matrix/40 md:block"
              aria-hidden="true"
            >
              →
            </span>
          )}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.35em] text-amber">{step.step}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-matrix-dim">
              {step.phase}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#c7ddca]">{step.summary}</p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7fa584]">
            {step.proof}
          </p>
        </article>
      ))}
    </div>
  );
}
