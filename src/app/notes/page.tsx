import Link from "next/link";
import type { Metadata } from "next";
import { notes, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notes",
  description: `Short notes from ${site.name} — principles, security, and building with AI.`,
};

export default function NotesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-28 pt-28 md:px-8 md:pb-36 md:pt-36">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
        {notes.eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-6xl">
        {notes.title}
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
        {notes.body}
      </p>

      <ul className="mt-16 divide-y divide-line border-y border-line">
        {notes.items.map((note) => (
          <li key={note.slug} className="py-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {note.date}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
              <Link
                href={`/notes/${note.slug}`}
                className="transition hover:text-amber"
              >
                {note.title}
              </Link>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {note.excerpt}
            </p>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        className="mt-12 inline-flex font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition hover:text-ink"
      >
        ← Back
      </Link>
    </div>
  );
}
