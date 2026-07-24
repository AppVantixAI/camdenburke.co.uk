"use client";

import Image from "next/image";
import { productDepth } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function ProductDepth() {
  return (
    <section
      id="product-depth"
      className="scroll-mt-20 border-t border-line md:scroll-mt-24"
    >
      <div className="page-pad section-pad mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal sm:text-xs sm:tracking-[0.22em]">
            {productDepth.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-[1.75rem] font-bold leading-tight tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-5xl md:leading-[1.05]">
            {productDepth.title}
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-5 sm:text-base md:text-lg">
            {productDepth.body}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:mt-12 md:mt-14 md:grid-cols-2 md:gap-10">
          {productDepth.items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <figure>
                <div className="relative aspect-[16/11] overflow-hidden bg-mist-deep sm:aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-4 sm:mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-signal">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink sm:text-xl md:text-2xl">
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
      </div>
    </section>
  );
}
