"use client";

import { proof } from "@/lib/content";
import { motion, useReducedMotion } from "motion/react";

export function Proof() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proof"
      className="relative border-y border-line bg-panel"
      aria-label="Proof"
    >
      <div
        className="mist-grid pointer-events-none absolute inset-0 opacity-50 md:opacity-70"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {proof.items.map((item, index) => (
          <motion.div
            key={item.label}
            className={`border-line ${
              index % 2 === 1 ? "border-l" : ""
            } ${index > 1 ? "border-t md:border-t-0" : ""} md:border-l md:first:border-l-0`}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.55,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex flex-col items-start justify-center px-3.5 py-5 sm:px-5 sm:py-8 md:px-8 md:py-12">
              <p className="font-display text-lg font-bold tracking-tight text-ink sm:text-2xl md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1.5 max-w-[10.5rem] font-mono text-[9px] uppercase leading-snug tracking-[0.14em] text-muted sm:mt-2 sm:max-w-none sm:text-[10px] sm:tracking-[0.22em]">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
