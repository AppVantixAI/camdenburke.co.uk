import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {contact.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            {contact.body}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={contact.primaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-base font-semibold text-snow shadow-[0_18px_40px_-18px_rgba(15,118,110,0.85)] transition hover:bg-signal-deep"
          >
            {contact.primaryCta}
            <span className="arrow-nudge" aria-hidden>
              →
            </span>
          </a>
          <a
            href={contact.secondaryCtaHref}
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-snow px-6 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30"
          >
            {contact.secondaryCta}
          </a>
          <a
            href={contact.tertiaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-snow px-6 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30"
          >
            {contact.tertiaryCta}
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-ink-soft">{site.location}</p>
      </div>
    </section>
  );
}
