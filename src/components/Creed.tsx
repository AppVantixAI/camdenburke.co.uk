"use client";

import { creed } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Creed() {
  return (
    <section id="creed" className="scroll-mt-24 border-y border-line bg-panel">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {creed.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-5xl">
            {creed.title}
          </h2>
        </Reveal>

        <ul className="mt-14 space-y-10">
          {creed.lines.map((line, index) => (
            <Reveal key={line} delay={index * 0.06}>
              <li className="border-l-2 border-amber pl-6 md:pl-8">
                <p className="font-display text-2xl font-medium leading-snug text-ink md:text-4xl md:leading-snug">
                  {line}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
