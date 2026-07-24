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
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
            {close.body}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.primaryCtaHref}
              className="btn-solid tap-target inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] sm:w-auto sm:px-8 sm:py-4"
            >
              {close.primaryCta}
            </a>
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost tap-target inline-flex w-full items-center justify-center px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] sm:w-auto sm:px-8 sm:py-4"
            >
              {close.secondaryCta}
            </a>
            <a
              href={site.formforgeUrl}
              target="_blank"
              rel="noreferrer"
              className="tap-target inline-flex w-full items-center justify-center px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition hover:text-ink sm:w-auto"
            >
              {close.tertiaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
