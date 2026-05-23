import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import GlitchText from '../components/GlitchText';
import SectionHeader from '../components/SectionHeader';
import SkillMatrix from '../components/SkillMatrix';
import ScrollReveal from '../components/ScrollReveal';
import SecurityBadge from '../components/SecurityBadge';
import ThreatTicker from '../components/ThreatTicker';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { resume } from '../data/resume';

const HeroCanvas = dynamic(() => import('../components/HeroCanvas'), { ssr: false });
const CodeRain = dynamic(() => import('../components/CodeRain'), { ssr: false });
const BootOverlay = dynamic(() => import('../components/BootOverlay'), { ssr: false });
const TypingTerminal = dynamic(() => import('../components/TypingTerminal'), { ssr: false });
const ThreatRadar = dynamic(() => import('../components/ThreatRadar'), { ssr: false });
const CustomCursor = dynamic(() => import('../components/CustomCursor'), { ssr: false });

export default function Home() {
  useEffect(() => {
    document.body.classList.add('custom-cursor-active');
    return () => document.body.classList.remove('custom-cursor-active');
  }, []);

  return (
    <>
      <Head>
        <title>{resume.name} — Security Resume</title>
        <meta name="description" content={resume.summary} />
        <meta property="og:title" content={`${resume.name} — Security Resume`} />
        <meta property="og:description" content={resume.summary} />
        <meta property="og:url" content="https://camdenburke.co.uk" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://camdenburke.co.uk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BootOverlay />
      <CustomCursor />

      <div className="crt min-h-screen bg-void text-[#b8d4bc]">
        <div className="noise-overlay" />
        <div className="scan-beam" />
        <CodeRain />
        <div className="pointer-events-none fixed inset-0 z-[1] bg-hex bg-[length:28px_49px] animate-drift opacity-60" />
        <Navbar />
        <ThreatTicker />

        {/* ——— HERO ——— */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-16 md:px-8 md:pt-36">
          <HeroCanvas />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-void/20 via-void/80 to-void" />

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] lg:items-center">
            <div className="panel-border corner-brackets bg-panel/90 p-6 md:p-10 backdrop-blur-sm">
              <TypingTerminal />

              <p className="mt-8 font-mono text-xs uppercase tracking-[0.4em] text-amber">
                {resume.tagline}
              </p>

              <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] text-white md:text-7xl lg:text-8xl">
                <GlitchText as="span">{resume.name}</GlitchText>
              </h1>

              <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-[#8faa92] md:text-base">
                <span className="text-matrix">&gt;</span> {resume.headline}
              </p>

              <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="border border-matrix bg-matrix/15 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-matrix hover:bg-matrix/25 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                >
                  View dossier
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="border border-[#3a4a3c] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#9cb8a0] hover:border-matrix/50 hover:text-matrix transition-all"
                >
                  Export PDF
                </a>
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#3a4a3c] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#9cb8a0] hover:border-matrix/50 hover:text-matrix transition-all"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={resume.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#3a4a3c] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#9cb8a0] hover:border-matrix/50 hover:text-matrix transition-all"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <SecurityBadge />
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
            <div className="h-12 w-px bg-gradient-to-b from-matrix/60 to-transparent animate-pulse" />
            <p className="font-mono text-[10px] tracking-[0.3em] text-matrix-dim">SCROLL TO DECRYPT</p>
          </div>
        </section>

        {/* ——— ABOUT ——— */}
        <section id="about" className="relative z-10 scroll-mt-28 border-t border-matrix/10 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="01" subtitle="PROFILE" title="Help desk · Security path" />
            </ScrollReveal>
            <ScrollReveal className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <p className="text-base leading-[1.9] text-[#9cb8a0] md:text-lg">{resume.summary}</p>
              <div className="space-y-6">
                <div className="panel-border bg-panel p-6 font-mono text-xs">
                  <p className="text-matrix mb-4">{'// top_skills'}</p>
                  <ul className="space-y-2 text-[#7a9a7e]">
                    {resume.topSkills.map((skill, i) => (
                      <li key={skill}>
                        <span className="text-matrix">
                          {i < resume.topSkills.length - 1 ? '├─' : '└─'}
                        </span>{' '}
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="panel-border bg-panel p-6 font-mono text-xs">
                  <p className="text-matrix mb-4">{'// homelab_stack'}</p>
                  <ul className="space-y-2 text-[#7a9a7e]">
                    {resume.homelabStack.map((item, i) => (
                      <li key={item}>
                        <span className="text-matrix">
                          {i < resume.homelabStack.length - 1 ? '├─' : '└─'}
                        </span>{' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ——— EXPERIENCE ——— */}
        <section
          id="experience"
          className="relative z-10 scroll-mt-28 border-t border-matrix/10 bg-[#050c08]/80 px-4 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="02" subtitle="FIELD_OPS" title="Operational history" />
              <p className="mb-10 max-w-xl font-mono text-xs text-matrix-dim">
                Select a node on the timeline to decrypt the full dossier.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceTimeline />
            </ScrollReveal>
          </div>
        </section>

        {/* ——— EDUCATION ——— */}
        <section id="education" className="relative z-10 scroll-mt-28 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="03" subtitle="ACADEMICS" title="Education & certs" />
            </ScrollReveal>
            <ScrollReveal className="grid gap-6 md:grid-cols-2">
              {resume.education.map((edu) => (
                <div key={edu.degree} className="panel-border corner-brackets bg-panel p-6">
                  <p className="font-mono text-xs text-amber">{edu.period}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="mt-1 font-mono text-sm text-matrix-dim">{edu.school}</p>
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resume.certificates.map((cert) => {
                const isSecure = cert.tone === 'secure';
                return (
                  <div
                    key={cert.name}
                    className={`panel-border flex items-start gap-4 p-5 ${
                      isSecure ? 'border-matrix/25 bg-matrix/5' : 'border-amber/25 bg-amber/5'
                    }`}
                  >
                    <span className="text-2xl" aria-hidden="true">
                      {isSecure ? '🔐' : '⏳'}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-display text-base font-bold text-white">{cert.name}</p>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${
                            isSecure
                              ? 'text-matrix border-matrix/40'
                              : 'text-amber border-amber/40'
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="mt-1 font-mono text-xs text-[#8faa92]">{cert.detail}</p>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* ——— SKILLS ——— */}
        <section
          id="skills"
          className="relative z-10 scroll-mt-28 border-t border-matrix/10 bg-[#050c08]/80 px-4 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="04" subtitle="ARSENAL" title="Security skill matrix" />
            </ScrollReveal>

            <ScrollReveal className="mb-14 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 w-full">
                <p className="mb-8 max-w-2xl font-mono text-sm text-matrix-dim">
                  Hover cells to illuminate capabilities. Radar sweep maps your threat surface by
                  domain.
                </p>
                <SkillMatrix />
              </div>
              <ThreatRadar />
            </ScrollReveal>

            <ScrollReveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resume.skillGroups.map((group) => (
                <div key={group.title} className="border-l-2 border-matrix/40 pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-matrix">
                    {group.title}
                  </p>
                  <p className="mt-1 text-sm text-[#7a9a7e]">{group.skills.join(' · ')}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* ——— CONTACT ——— */}
        <section id="contact" className="relative z-10 scroll-mt-28 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="05" subtitle="COMMS" title="Establish connection" />
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'PHONE', value: resume.phone, href: resume.phoneHref },
                { label: 'EMAIL', value: resume.email, href: `mailto:${resume.email}` },
                { label: 'LINKEDIN', value: 'camdenburkedev', href: resume.linkedin, external: true },
                { label: 'GITHUB', value: 'cburke12', href: resume.github, external: true },
              ].map((item) => {
                const card = (
                  <>
                    <p className="font-mono text-[10px] tracking-widest text-matrix-dim group-hover:text-matrix">
                      {'// '}{item.label}
                    </p>
                    <p className="mt-3 font-display text-lg font-semibold text-white break-all">
                      {item.value}
                    </p>
                  </>
                );
                const className =
                  'group panel-border corner-brackets bg-panel p-6 transition-all hover:border-matrix/60 hover:-translate-y-1';

                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={className}
                  >
                    {card}
                  </a>
                ) : (
                  <a key={item.label} href={item.href} className={className}>
                    {card}
                  </a>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        <footer className="relative z-10 border-t border-matrix/10 px-4 py-10 text-center font-mono text-[10px] tracking-widest text-matrix-dim">
          <pre className="mx-auto mb-4 max-w-md text-[8px] leading-tight text-matrix/30 hidden sm:block" aria-hidden="true">
{`   ██████╗██████╗ 
  ██╔════╝██╔══██╗
  ██║     ██████╔╝
  ██║     ██╔══██╗
  ╚██████╗██████╔╝
   ╚═════╝╚═════╝`}
          </pre>
          <p>
            SESSION END · {resume.name.toUpperCase()} · {resume.clearanceId} ·{' '}
            {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}
