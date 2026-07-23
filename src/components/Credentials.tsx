"use client";

import { credentials } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
            {credentials.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {credentials.title}
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-line border-y border-line">
          {credentials.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="grid gap-3 py-8 md:grid-cols-[140px_1fr_1.25fr] md:gap-10 md:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                  {item.label}
                </p>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.meta}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
