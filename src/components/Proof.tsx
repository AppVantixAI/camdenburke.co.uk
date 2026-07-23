"use client";

import { proof } from "@/lib/content";
import { motion, useReducedMotion } from "motion/react";

export function Proof() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proof"
      className="border-y border-line bg-panel"
      aria-label="Proof"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
        {proof.items.map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-panel"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex flex-col items-start justify-center px-5 py-10 md:px-8 md:py-14">
              <motion.p
                className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl"
                initial={reduce ? false : { scale: 0.85 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 16,
                  delay: 0.12 + index * 0.1,
                }}
              >
                {item.value}
              </motion.p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
