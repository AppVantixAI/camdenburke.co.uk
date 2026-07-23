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
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="progress-bar fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-signal"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
