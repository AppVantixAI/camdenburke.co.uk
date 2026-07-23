"use client";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="progress-bar fixed inset-x-0 top-0 z-[60] h-[2px] bg-amber"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
