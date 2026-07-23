import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <Link
            href="/"
            className="font-display text-xl font-medium text-ink"
            aria-label={`${site.name} home`}
          >
            {site.name}
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            Personal site. Ventures live elsewhere — AppVantix for the company,
            FormForge for the product.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-ink-soft hover:text-ink"
          >
            GitHub
          </a>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-ink-soft md:flex-row md:justify-between md:px-8">
          <p>
            © {year} {site.name}
          </p>
          <p>
            {site.role}, {site.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
