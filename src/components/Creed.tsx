"use client";

import { creed } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Creed() {
  return (
    <section id="creed" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
            {creed.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            {creed.title}
          </h2>
        </Reveal>

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {creed.lines.map((line, index) => (
            <Reveal key={line} delay={index * 0.07}>
              <li className="grid gap-4 py-8 md:grid-cols-[72px_1fr] md:items-baseline md:gap-10 md:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-display text-xl font-semibold leading-snug text-ink md:text-3xl md:leading-snug">
                  {line}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
