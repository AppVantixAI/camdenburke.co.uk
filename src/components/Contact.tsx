import { contact, site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="rule-gold" aria-hidden />
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-gold">
          {contact.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight md:text-5xl md:leading-[1.1]">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          {contact.body}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={contact.primaryCtaHref}
            className="group inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-gold"
          >
            {contact.primaryCta}
            <span className="link-arrow" aria-hidden>
              →
            </span>
          </a>
          <a
            href={contact.secondaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/50"
          >
            {contact.secondaryCta}
          </a>
          <a
            href={contact.tertiaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/50"
          >
            {contact.tertiaryCta}
          </a>
        </div>

        <p className="mt-12 font-mono text-xs uppercase tracking-[0.16em] text-white/45">
          {site.location}
        </p>
      </div>
    </section>
  );
}
