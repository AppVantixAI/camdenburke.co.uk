import { resume } from '../data/resume';

/** Split display name — first name white, surname matrix accent. */
export default function HeroName() {
  const parts = resume.name.trim().split(/\s+/);
  const first = parts[0] ?? resume.name;
  const last = parts.slice(1).join(' ');

  return (
    <div className="hero-name">
      <p className="hero-name__tag font-mono text-[10px] tracking-[0.28em] text-matrix-dim">
        {resume.name.toUpperCase()}
      </p>
      <h1 className="hero-name__title" aria-label={resume.name}>
        <span className="hero-name__first">{first}</span>
        {last ? <span className="hero-name__last">{last}</span> : null}
      </h1>
      <div className="hero-name__rule" aria-hidden="true" />
    </div>
  );
}
