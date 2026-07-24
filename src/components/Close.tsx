"use client";

import { close, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Close() {
  return (
    <section
      id="close"
      className="scroll-mt-20 border-t border-line bg-ink text-on-dark md:scroll-mt-24"
    >
      <div className="page-pad section-pad relative mx-auto max-w-6xl overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 md:opacity-40"
          style={{
            background:
              "radial-gradient(500px 260px at 85% 20%, rgba(94,184,201,0.22), transparent 60%), radial-gradient(400px 220px at 10% 90%, rgba(15,118,110,0.18), transparent 55%)",
          }}
          aria-hidden
        />

        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-bright sm:text-xs sm:tracking-[0.22em]">
            {close.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.85rem] font-bold leading-tight tracking-tight text-on-dark sm:mt-4 sm:text-4xl md:text-6xl md:leading-[1.05]">
            {close.title}
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-on-dark-muted sm:mt-6 sm:text-base md:text-lg">
            {close.body}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.primaryCtaHref}
              className="tap-target inline-flex w-full items-center justify-center bg-signal px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-signal-deep sm:w-auto sm:px-8 sm:py-4"
            >
              {close.primaryCta}
            </a>
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="tap-target inline-flex w-full items-center justify-center border border-on-dark/35 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-on-dark transition hover:border-signal-bright hover:text-signal-bright sm:w-auto sm:px-8 sm:py-4"
            >
              {close.secondaryCta}
            </a>
            <a
              href={site.formforgeUrl}
              target="_blank"
              rel="noreferrer"
              className="tap-target inline-flex w-full items-center justify-center px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-on-dark-muted transition hover:text-on-dark sm:w-auto"
            >
              {close.tertiaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
