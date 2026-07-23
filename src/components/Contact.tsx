"use client";

import { contact, site } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-void">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {contact.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={contact.primaryCtaHref}
            className="inline-flex items-center justify-center bg-amber px-7 py-3.5 text-base font-bold text-void transition hover:bg-amber-deep"
          >
            {contact.primaryCta}
          </a>
          <a
            href={contact.secondaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-ink/20 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/45"
          >
            {contact.secondaryCta}
          </a>
          <a
            href={contact.tertiaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-ink/20 px-7 py-3.5 text-base font-semibold text-ink transition hover:border-ink/45"
          >
            {contact.tertiaryCta}
          </a>
        </Reveal>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {site.location}
        </p>
      </div>
    </section>
  );
}
