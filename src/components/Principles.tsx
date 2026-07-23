"use client";

import { principles } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Principles() {
  return (
    <section
      id="principles"
      className="scroll-mt-24 border-t border-line bg-void"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {principles.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl md:leading-[1.1]">
            {principles.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {principles.lead}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {principles.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <article className="flex h-full flex-col border border-line bg-panel p-6 transition duration-500 hover:-translate-y-1 hover:border-amber/40 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                  {String(index + 1).padStart(2, "0")} · {item.lens}
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink md:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink/90">
                  “{item.quote}”
                </p>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    How I apply it
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.apply}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
