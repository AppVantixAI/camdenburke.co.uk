"use client";

import { proof } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Proof() {
  return (
    <section
      id="proof"
      className="border-y border-line bg-panel"
      aria-label="Proof"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
        {proof.items.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.06} className="bg-panel">
            <div className="flex flex-col items-start justify-center px-5 py-8 md:px-8 md:py-10">
              <p className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
