import { ventures } from "@/lib/content";

export function Ventures() {
  return (
    <section id="ventures" className="scroll-mt-24 border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cobalt">
            {ventures.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {ventures.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            {ventures.intro}
          </p>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {ventures.items.map((item) => (
            <li
              key={item.name}
              className="grid gap-4 py-10 md:grid-cols-[0.35fr_1fr_auto] md:items-end md:gap-8"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                  {item.role}
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium text-ink">
                  {item.name}
                </h3>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-ink-soft">
                {item.blurb}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 self-start font-semibold text-cobalt transition hover:text-cobalt-deep md:self-end"
              >
                {item.cta}
                <span className="link-arrow" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
