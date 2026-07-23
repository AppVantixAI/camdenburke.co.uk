import { offer } from "@/lib/content";

export function OfferPath() {
  return (
    <section
      id="offer"
      className="scroll-mt-24 border-t border-line/60 bg-snow"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {offer.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {offer.title}
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offer.steps.map((step, index) => (
            <li key={step.title} className="border-t border-line pt-5">
              <p className="font-mono text-xs text-signal">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={offer.primaryCtaHref}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-base font-semibold text-snow transition hover:bg-signal-deep"
          >
            {offer.primaryCta}
            <span className="arrow-nudge" aria-hidden>
              →
            </span>
          </a>
          <a
            href={offer.secondaryCtaHref}
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-snow px-6 py-3.5 text-base font-semibold text-ink transition hover:border-ink/30"
          >
            {offer.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
