import { credentials } from "@/lib/content";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {credentials.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {credentials.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {credentials.education.map((item) => (
            <article
              key={item.credential}
              className="border border-line bg-snow p-6 md:p-7"
            >
              <p className="font-mono text-xs text-signal">{item.when}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
                {item.credential}
              </h3>
              {"concentration" in item && item.concentration && (
                <p className="mt-2 text-sm font-medium text-signal">
                  {item.concentration}
                </p>
              )}
              <p className="mt-1 text-sm text-ink-soft">{item.school}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.note}
              </p>
            </article>
          ))}

          <article className="border border-signal/30 bg-signal/5 p-6 md:p-7">
            <p className="font-mono text-xs text-signal">
              {credentials.certification.when}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink">
              {credentials.certification.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {credentials.certification.note}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
