"use client";

import { close, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Close() {
  return (
    <section
      id="close"
      className="scroll-mt-20 border-t border-line bg-panel md:scroll-mt-24"
    >
      <div className="page-pad section-pad relative mx-auto max-w-6xl overflow-hidden">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-signal sm:text-xs sm:tracking-[0.32em]">
            {close.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[2rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-4xl md:text-6xl md:leading-[1.02]">
            {close.title}
          </h2>
          <blockquote className="mt-6 max-w-xl sm:mt-8">
            <p className="font-display text-lg font-medium leading-snug text-ink sm:text-xl md:text-2xl">
              &ldquo;{close.quote.text}&rdquo;
            </p>
            <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-[11px] sm:tracking-[0.22em]">
              <cite className="not-italic">— {close.quote.attribution}</cite>
            </footer>
          </blockquote>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
            {close.body}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 sm:mt-12">
            <a
              href={site.primaryCtaHref}
              className="btn-solid tap-target inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] sm:w-auto sm:px-8 sm:py-4"
            >
              {close.primaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
