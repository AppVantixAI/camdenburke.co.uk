import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line/60 bg-snow">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {about.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            {about.body}
          </p>
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {about.points.map((point) => (
            <li key={point.title} className="border-t border-signal/35 pt-5">
              <h3 className="font-display text-lg font-semibold text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {point.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
