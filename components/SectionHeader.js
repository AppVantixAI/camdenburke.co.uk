export default function SectionHeader({ title, subtitle, featured = false }) {
  return (
    <header className={featured ? 'mb-12' : 'mb-10'}>
      {subtitle && (
        <p className="font-mono text-[10px] uppercase tracking-widest text-matrix-dim">{subtitle}</p>
      )}
      <h2
        className={`font-display font-bold tracking-tight text-white ${
          featured ? 'mt-2 text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-px bg-gradient-to-r from-matrix/50 to-transparent ${
          featured ? 'w-full max-w-md' : 'w-full max-w-xs'
        }`}
      />
    </header>
  );
}
