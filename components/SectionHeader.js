export default function SectionHeader({ module, title, subtitle }) {
  return (
    <header className="mb-12">
      <p className="font-mono text-xs tracking-[0.35em] text-matrix-dim">
        [ MODULE {module} ] // {subtitle}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-full max-w-md bg-gradient-to-r from-matrix via-matrix/40 to-transparent" />
    </header>
  );
}
