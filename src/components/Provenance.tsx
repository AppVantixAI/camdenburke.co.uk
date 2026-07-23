import { provenance } from "@/lib/content";

export function Provenance() {
  return (
    <section
      id="provenance"
      className="scroll-mt-24 border-t border-line bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cobalt">
            {provenance.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {provenance.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            {provenance.body}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            {provenance.education.map((item) => (
              <article
                key={item.credential}
                className="border-l-2 border-gold pl-5"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                  {item.when}
                </p>
                <h3 className="mt-2 font-display text-xl font-medium text-ink md:text-2xl">
                  {item.credential}
                </h3>
                {"concentration" in item && item.concentration && (
                  <p className="mt-1 text-sm font-medium text-cobalt">
                    {item.concentration}
                  </p>
                )}
                <p className="mt-1 text-sm text-ink-soft">{item.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.note}
                </p>
              </article>
            ))}

            <article className="border-l-2 border-cobalt pl-5">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                {provenance.certification.when}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium text-ink md:text-2xl">
                {provenance.certification.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {provenance.certification.note}
              </p>
            </article>
          </div>

          <div className="bg-ink px-6 py-8 text-white md:px-8 md:py-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              Operating strengths
            </p>
            <ul className="mt-8 space-y-6">
              {provenance.skills.map((skill) => (
                <li key={skill.label} className="border-t border-white/15 pt-5">
                  <h3 className="font-display text-lg font-medium">{skill.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {skill.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
