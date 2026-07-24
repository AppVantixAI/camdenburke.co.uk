"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrandMark } from "@/components/BrandMark";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.classList.add("nav-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const onMist = scrolled || open;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        onMist
          ? "border-b border-line/70 bg-mist/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
      initial={reduce ? false : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="page-pad mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-3">
        <a
          href="#top"
          onClick={close}
          className={`min-w-0 truncate font-display text-sm font-bold tracking-tight transition sm:text-base ${
            onMist ? "text-ink" : "text-on-dark"
          }`}
        >
          {site.name}
        </a>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition ${
                scrolled
                  ? "text-muted hover:text-ink"
                  : "text-on-dark/70 hover:text-on-dark"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.primaryCtaHref}
            className={`tap-target hidden items-center border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition sm:inline-flex ${
              onMist
                ? "border-ink/25 text-ink hover:border-signal hover:text-signal"
                : "border-on-dark/45 text-on-dark hover:border-on-dark hover:bg-on-dark/5"
            }`}
          >
            {site.primaryCta}
          </a>
          <button
            type="button"
            className={`tap-target inline-flex items-center justify-center border xl:hidden ${
              onMist
                ? "border-ink/25 text-ink"
                : "border-on-dark/40 text-on-dark"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative block h-3.5 w-4" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-full bg-current transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="fixed inset-x-0 bottom-0 top-[calc(var(--header-h)+env(safe-area-inset-top))] z-[55] overflow-y-auto border-t border-line bg-mist xl:hidden"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="page-pad mx-auto flex max-w-6xl flex-col pb-10 pt-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="tap-target flex items-center border-b border-line py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink"
                >
                  {item.label}
                </a>
              ))}
              <BrandMark withLabel size={22} className="mt-6 py-2 text-ink" />
              <a
                href={site.primaryCtaHref}
                onClick={close}
                className="tap-target mt-6 inline-flex w-full items-center justify-center bg-signal px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white"
              >
                {site.primaryCta}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
