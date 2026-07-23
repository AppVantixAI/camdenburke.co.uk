"use client";

import Image from "next/image";
import { productDepth } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function ProductDepth() {
  return (
    <section id="product-depth" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
            {productDepth.eyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-ink md:text-5xl md:leading-[1.05]">
            {productDepth.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {productDepth.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {productDepth.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-mist-deep">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {item.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={productDepth.href}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center border border-ink/20 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-ink transition hover:border-signal hover:text-signal"
          >
            {productDepth.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
