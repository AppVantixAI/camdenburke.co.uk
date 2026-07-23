"use client";

import { credentials } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24 bg-void">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {credentials.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {credentials.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {credentials.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="h-full border border-line bg-panel p-6 transition duration-500 hover:-translate-y-1 hover:border-amber/40 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                  {item.label}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
