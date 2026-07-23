"use client";

import { letter } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Letter() {
  return (
    <section id="letter" className="scroll-mt-24 bg-void">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {letter.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {letter.title}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          {letter.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
              <p className="text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 font-display text-xl font-medium text-ink">
            {letter.signoff}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
