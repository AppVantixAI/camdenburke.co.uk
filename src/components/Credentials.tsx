import { credentials } from "@/lib/content";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="scroll-mt-24 border-t border-line/60 bg-mist"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {credentials.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {credentials.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            {credentials.body}
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
              Education
            </p>
            <ul className="mt-6 space-y-8">
              {credentials.education.map((item) => (
                <li key={item.credential} className="border-t border-line pt-5">
                  <p className="font-mono text-xs text-ink-soft">{item.detail}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                    {item.credential}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-signal">
                    {item.school}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.framing}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-signal">
              Certification
            </p>
            <ul className="mt-6 space-y-8">
              {credentials.certifications.map((item) => (
                <li key={item.name} className="border-t border-line pt-5">
                  <p className="font-mono text-xs text-ink-soft">{item.detail}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.framing}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
              Founder capabilities
            </p>
            <ul className="mt-6 grid gap-6 sm:grid-cols-1">
              {credentials.capabilities.map((item, index) => (
                <li key={item.title} className="border-t border-signal/35 pt-5">
                  <p className="font-mono text-xs text-signal">
                    {String(index + 1).padStart(2, "0")} · {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                    {item.body}
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
