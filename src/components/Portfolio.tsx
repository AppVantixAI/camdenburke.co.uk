import Image from "next/image";
import { portfolio } from "@/lib/content";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-line/60 bg-snow"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            {portfolio.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {portfolio.title}
          </h2>
        </div>

        <div className="mt-12 space-y-16">
          {portfolio.items.map((item, index) => (
            <article
              key={item.name}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden border border-line bg-mist shadow-[0_28px_60px_-36px_rgba(12,26,34,0.45)]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
                  {item.kind}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {item.mark && (
                    <Image
                      src="/appvantix-mark.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  )}
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">
                    {item.name}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal transition hover:text-signal-deep"
                >
                  {item.cta}
                  <span className="arrow-nudge" aria-hidden>
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal">
            {portfolio.gallery.title}
          </p>
          <p className="mt-2 text-sm text-ink-soft">{portfolio.gallery.caption}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {portfolio.gallery.images.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden border border-line bg-mist"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
