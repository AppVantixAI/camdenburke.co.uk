"use client";

import { creed } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Creed() {
  return (
    <section id="creed" className="scroll-mt-20 border-t border-line md:scroll-mt-24">
      <div className="page-pad section-pad mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
            {creed.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-5xl">
            {creed.title}
          </h2>
        </Reveal>

        <ol className="mt-10 divide-y divide-line border-y border-line sm:mt-12 md:mt-14">
          {creed.lines.map((line, index) => (
            <Reveal key={line} delay={index * 0.06}>
              <li className="grid gap-2 py-6 sm:gap-4 sm:py-8 md:grid-cols-[72px_1fr] md:items-baseline md:gap-10 md:py-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl md:text-3xl md:leading-snug">
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
