"use client";

import { credentials } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="scroll-mt-20 border-t border-line md:scroll-mt-24"
    >
      <div className="page-pad section-pad mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
            {credentials.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-4xl">
            {credentials.title}
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line sm:mt-12 md:mt-14">
          {credentials.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="grid gap-2 py-6 sm:gap-3 sm:py-8 md:grid-cols-[140px_1fr_1.25fr] md:gap-10 md:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                  {item.label}
                </p>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted sm:mt-2">{item.meta}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Verify
            </p>
            {credentials.verify.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="tap-target font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition hover:text-signal"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
