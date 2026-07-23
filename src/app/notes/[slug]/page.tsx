import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNote, notes, site } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return notes.items.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Note" };
  return {
    title: note.title,
    description: note.excerpt,
    openGraph: {
      title: `${note.title} · ${site.name}`,
      description: note.excerpt,
      type: "article",
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 pb-28 pt-28 md:px-8 md:pb-36 md:pt-36">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">
        Note · {note.date}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold uppercase tracking-tight text-ink md:text-6xl md:leading-[1.05]">
        {note.title}
      </h1>

      <div className="mt-14 space-y-8">
        {note.body.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="text-lg leading-relaxed text-ink/90 md:text-2xl md:leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-16 font-display text-xl font-medium text-ink md:text-2xl">
        — {site.name.split(" ")[0]}
      </p>

      <div className="mt-16 flex flex-wrap gap-6 border-t border-line pt-10">
        <Link
          href="/notes"
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition hover:text-ink"
        >
          ← Notes
        </Link>
        <a
          href={site.emailHref + "?subject=Hello%20Camden"}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber transition hover:text-ink"
        >
          Say hello →
        </a>
      </div>
    </article>
  );
}
