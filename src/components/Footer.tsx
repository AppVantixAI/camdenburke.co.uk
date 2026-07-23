import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          © {year} {site.name}
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-muted">
          <a href={site.emailHref} className="transition hover:text-ink">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-ink"
          >
            GitHub
          </a>
          <Link href="/notes" className="transition hover:text-ink">
            Notes
          </Link>
        </div>
      </div>
    </footer>
  );
}
