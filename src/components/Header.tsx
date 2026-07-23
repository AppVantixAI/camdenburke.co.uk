"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter] duration-300 ${
        scrolled ? "bg-void/85 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={reduce ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-18 md:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink"
        >
          {site.name}
        </a>
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={site.primaryCtaHref}
          className="border border-ink/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition hover:border-ink hover:bg-ink/5"
        >
          {site.primaryCta}
        </a>
      </div>
    </motion.header>
  );
}
