import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 bg-ink text-snow">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div>
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2.5 text-snow"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/appvantix-mark.svg"
              alt=""
              width={26}
              height={26}
              className="brightness-0 invert"
            />
            <span className="font-display text-lg font-semibold">
              {site.name}
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-snow/80">
            {site.role}, {site.company}. {site.legal} builds and operates SaaS
            businesses — FormForge is the flagship product.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 font-display text-sm font-semibold tracking-wide text-snow">
            On this site
          </h2>
          <ul className="space-y-2 text-sm text-snow/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-snow">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-display text-sm font-semibold tracking-wide text-snow">
            Connect
          </h2>
          <ul className="space-y-2 text-sm text-snow/80">
            <li>
              <a
                href={site.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-snow"
              >
                AppVantix
              </a>
            </li>
            <li>
              <a
                href={site.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-snow"
              >
                FormForge demo
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-snow">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-snow"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-snow"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-snow/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-snow/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {site.legal}. All rights reserved.
          </p>
          <p>
            {site.name} · {site.role}, {site.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
