"use client";

import { method } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Method() {
  return (
    <section
      id="method"
      className="scroll-mt-20 border-t border-line md:scroll-mt-24"
    >
      <div className="page-pad section-pad mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
            {method.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-5xl md:leading-[1.05]">
            {method.title}
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            {method.body}
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-y border-line sm:mt-12 md:mt-14 md:grid md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0 md:border-0 md:divide-line">
          {method.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <article
                className={`flex flex-col py-8 md:px-8 md:py-0 ${
                  index === 0 ? "md:pl-0" : ""
                } ${
                  index === method.items.length - 1 ? "md:pr-0" : ""
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:mt-4 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 md:text-base">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-8 sm:mt-12 sm:pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Verify
            </p>
            {method.verify.map((item) => (
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
