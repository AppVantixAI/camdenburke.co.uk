"use client";

import Image from "next/image";
import { constellation } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Constellation() {
  return (
    <section id="constellation" className="scroll-mt-24 bg-void">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
            {constellation.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:text-6xl">
            {constellation.title}
          </h2>
        </Reveal>
      </div>

      <div className="space-y-0">
        {constellation.items.map((item, index) => (
          <article
            key={item.name}
            className="relative min-h-[85svh] overflow-hidden border-t border-line"
          >
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-void/55" aria-hidden />
              <div
                className="absolute inset-0 bg-gradient-to-r from-void via-void/55 to-transparent"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/35"
                aria-hidden
              />
            </div>

            <Reveal className="relative mx-auto flex min-h-[85svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 md:px-8 md:pb-28">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-amber">
                {String(index + 1).padStart(2, "0")} · {item.role}
              </p>
              <h3 className="mt-4 font-display text-5xl font-semibold uppercase tracking-tight text-ink md:text-8xl">
                {item.name}
              </h3>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-xl">
                {item.body}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex w-fit items-center border border-ink/50 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-ink transition hover:border-amber hover:text-amber"
              >
                {item.cta}
              </a>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
