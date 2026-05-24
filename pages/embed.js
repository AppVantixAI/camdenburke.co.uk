import Head from 'next/head';
import { resume } from '../data/resume';

/**
 * Lightweight page for the laptop-screen iframe (no 3D / boot overlay).
 * Prevents infinite nesting when the main site loads itself on the laptop display.
 */
export default function Embed() {
  return (
    <>
      <Head>
        <title>{resume.name}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div
        style={{
          margin: 0,
          minHeight: '100vh',
          background: '#030806',
          color: '#b8d4bc',
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          padding: '1.5rem',
          boxSizing: 'border-box',
        }}
      >
        <p style={{ fontSize: '10px', letterSpacing: '0.35em', color: '#1a8f2e', margin: 0 }}>
          LIVE PREVIEW · SECURE SESSION
        </p>
        <h1
          style={{
            margin: '0.75rem 0 0',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
          }}
        >
          {resume.name}
        </h1>
        <p style={{ margin: '0.5rem 0 1rem', fontSize: '0.75rem', color: '#39ff14' }}>
          {resume.headline}
        </p>
        <p style={{ fontSize: '0.7rem', lineHeight: 1.7, color: '#8faa92', maxWidth: '28rem' }}>
          {resume.summary.slice(0, 220)}…
        </p>
        <div style={{ marginTop: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {resume.heroStatus.map((s) => (
            <span
              key={s.label}
              style={{
                fontSize: '9px',
                padding: '0.2rem 0.45rem',
                border: '1px solid rgba(57,255,20,0.3)',
                color: s.tone === 'secure' ? '#39ff14' : '#ffb020',
              }}
            >
              {s.label}: {s.value}
            </span>
          ))}
        </div>
        <p style={{ marginTop: '1.5rem', fontSize: '10px', color: '#4a5e4c' }}>
          camdenburke.co.uk — drag laptop to orbit
        </p>
      </div>
    </>
  );
}
