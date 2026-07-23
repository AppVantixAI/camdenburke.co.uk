"use client";

import { close, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Close() {
  return (
    <section
      id="close"
      className="scroll-mt-24 border-t border-line bg-ink text-on-dark"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden px-5 py-24 md:px-8 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(700px 320px at 85% 20%, rgba(94,184,201,0.22), transparent 60%), radial-gradient(500px 280px at 10% 90%, rgba(15,118,110,0.18), transparent 55%)",
          }}
          aria-hidden
        />

        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-bright">
            {close.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-on-dark md:text-6xl md:leading-[1.05]">
            {close.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted md:text-lg">
            {close.body}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.primaryCtaHref}
              className="inline-flex items-center justify-center bg-signal px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-signal-deep"
            >
              {close.primaryCta}
            </a>
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-on-dark/35 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-on-dark transition hover:border-signal-bright hover:text-signal-bright"
            >
              {close.secondaryCta}
            </a>
            <a
              href={site.formforgeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-on-dark-muted transition hover:text-on-dark"
            >
              {close.tertiaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
