"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: isMobile ? 20 : 48,
        filter: isMobile ? "blur(0px)" : "blur(6px)",
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
      transition={{
        duration: isMobile ? 0.55 : 0.9,
        ease,
        delay: isMobile ? delay * 0.5 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
