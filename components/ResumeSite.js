import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Navbar from './Navbar';
import GlitchText from './GlitchText';
import SectionHeader from './SectionHeader';
import SkillMatrix from './SkillMatrix';
import ScrollReveal from './ScrollReveal';
import SecurityBadge from './SecurityBadge';
import ThreatTicker from './ThreatTicker';
import ExperienceTimeline from './ExperienceTimeline';
import ProofStrip from './ProofStrip';
import CaseStudies from './CaseStudies';
import LazyThreatRadar from './LazyThreatRadar';
import { resume } from '../data/resume';
import { useIsMobile } from '../lib/useIsMobile';

const HeroCanvas = dynamic(() => import('../components/HeroCanvas'), { ssr: false });
const CodeRain = dynamic(() => import('../components/CodeRain'), { ssr: false });
const TypingTerminal = dynamic(() => import('../components/TypingTerminal'), { ssr: false });
const ExitDeskButton = dynamic(() => import('./ExitDeskButton'), { ssr: false });
const ViewModeSwitch = dynamic(() => import('./ViewModeSwitch'), { ssr: false });

function isPrimaryCta(link) {
  return link.label === 'Resume PDF';
}

export default function ResumeSite({ showViewToggle = false, onGoDesk, viewMode = 'flat' }) {
  const isMobile = useIsMobile();

  useEffect(() => {
    document.body.classList.remove('custom-cursor-active');
  }, []);

  return (
    <>
      <Head>
        <title>{resume.name} — {resume.targetRole}</title>
        <meta name="description" content={resume.summary} />
        <meta property="og:title" content={`${resume.name} — ${resume.targetRole}`} />
        <meta property="og:description" content={resume.summary} />
        <meta property="og:url" content="https://camdenburke.co.uk" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://camdenburke.co.uk" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030806" />
      </Head>

      <ExitDeskButton />

      {showViewToggle && onGoDesk && (
        <ViewModeSwitch
          mode={viewMode}
          onDesk={onGoDesk}
          onFlat={() => {}}
          compact={isMobile}
          className="fixed right-4 z-[60] pointer-events-auto top-[calc(var(--header-height,52px)+0.5rem)] md:top-4"
        />
      )}

      <div className="crt min-h-screen bg-void text-[#b8d4bc]">
        <div className="noise-overlay" />
        <div className="scan-beam" />
        {!isMobile && <CodeRain />}
        <div className="pointer-events-none fixed inset-0 z-[1] bg-hex bg-[length:28px_49px] animate-drift opacity-60" />
        <Navbar />
        <ThreatTicker />

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-[calc(var(--header-height,52px)+2rem)] md:px-8 md:pt-[calc(var(--header-height,52px)+var(--ticker-height,0px)+2rem)]">
          {!isMobile && <HeroCanvas />}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-void/20 via-void/80 to-void" />

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] lg:items-center">
            <div className="panel-border corner-brackets bg-panel/90 p-6 md:p-10 backdrop-blur-sm">
              <div className="hidden md:block">
                <TypingTerminal />
              </div>

              <p className="mt-0 font-mono text-xs uppercase tracking-[0.4em] text-amber md:mt-8">
                {resume.tagline}
              </p>

              <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] text-white md:text-7xl lg:text-8xl">
                <GlitchText as="span">{resume.name}</GlitchText>
              </h1>

              <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-[#8faa92] md:text-base">
                <span className="text-matrix">&gt;</span> {resume.headline}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#c7ddca]">
                {resume.summary}
              </p>

              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-matrix-dim">
                {resume.availability}
              </p>

              <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
                {resume.recruiterLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex min-h-[44px] items-center px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all active:scale-95 ${
                        isPrimaryCta(link)
                          ? 'border border-matrix bg-matrix/15 text-matrix hover:bg-matrix/25 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
                          : 'border border-[#3a4a3c] text-[#9cb8a0] hover:border-matrix/50 hover:text-matrix'
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      download={link.download || undefined}
                      className={`inline-flex min-h-[44px] items-center px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all active:scale-95 ${
                        isPrimaryCta(link)
                          ? 'border border-matrix bg-matrix/15 text-matrix hover:bg-matrix/25 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]'
                          : 'border border-[#3a4a3c] text-[#9cb8a0] hover:border-matrix/50 hover:text-matrix'
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                ))}
                {showViewToggle && onGoDesk && (
                  <button
                    type="button"
                    onClick={onGoDesk}
                    className="inline-flex min-h-[44px] items-center border border-[#3a4a3c] px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-[#9cb8a0] transition-all hover:border-matrix/50 hover:text-matrix active:scale-95"
                  >
                    Open 3D desk
                  </button>
                )}
              </div>
            </div>

            <SecurityBadge />
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
            <div className="h-12 w-px bg-gradient-to-b from-matrix/60 to-transparent animate-pulse" />
            <p className="font-mono text-xs tracking-[0.3em] text-matrix-dim md:text-[10px]">SCROLL TO REVIEW</p>
          </div>
        </section>

        <section id="start-here" className="section-anchor relative z-10 border-t border-matrix/10 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="01" subtitle="SUMMARY" title="Why this maps to support and security" />
              <p className="mb-10 max-w-3xl text-base leading-[1.95] text-[#9cb8a0] md:text-lg">
                My strongest overlap today is the combination of Active Directory support, endpoint
                troubleshooting, documentation, and escalation in Windows environments. The goal of
                this site is to show the technical work I can defend now while making room for
                deeper lab artifacts as I keep building across support and security-focused roles.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <ProofStrip />
            </ScrollReveal>
          </div>
        </section>

        <section
          id="experience"
          className="section-anchor relative z-10 border-t border-matrix/10 bg-[#050c08]/80 px-4 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="02" subtitle="EXPERIENCE" title="Professional experience" />
              <p className="mb-10 max-w-xl font-mono text-xs text-matrix-dim">
                Desktop keeps the interactive timeline. Mobile shows every role for faster recruiter scanning.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceTimeline />
            </ScrollReveal>
          </div>
        </section>

        <section id="projects" className="section-anchor relative z-10 border-t border-matrix/10 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="03" subtitle="LABS" title="Projects & lab work" />
              <p className="mb-10 max-w-3xl text-base leading-8 text-[#9cb8a0]">
                These proof items connect current support work, home lab practice, and
                documentation habits to the kinds of responsibilities hiring teams look for first.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <CaseStudies />
            </ScrollReveal>
          </div>
        </section>

        <section id="education" className="section-anchor relative z-10 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="04" subtitle="EDUCATION" title="Education & credentials" />
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
              {resume.featuredCertifications.map((cert) => {
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
                          className={`font-mono text-xs uppercase tracking-widest px-2 py-0.5 border md:text-[10px] ${
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

            <ScrollReveal className="mt-8 panel-border bg-panel/70 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-matrix-dim md:text-[10px]">
                Additional credentials
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {resume.additionalCredentials.map((cert) => (
                  <span
                    key={cert.name}
                    className="border border-matrix/20 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-[#8fb494] md:text-[10px]"
                  >
                    {cert.name}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          id="skills"
          className="section-anchor relative z-10 border-t border-matrix/10 bg-[#050c08]/80 px-4 py-24 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="05" subtitle="SKILLS" title="Skills I can defend today" />
            </ScrollReveal>

            <ScrollReveal className="mb-14 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 w-full">
                <p className="mb-8 max-w-2xl font-mono text-sm text-matrix-dim">
                  These are grouped to match how cybersecurity and IT hiring teams usually scan
                  experience: workflow, infrastructure, scripting, and support platforms.
                </p>
                <SkillMatrix />
              </div>
              <LazyThreatRadar />
            </ScrollReveal>

            <ScrollReveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resume.skillGroups.map((group) => (
                <div key={group.title} className="border-l-2 border-matrix/40 pl-4">
                  <p className="font-mono text-xs uppercase tracking-widest text-matrix md:text-[10px]">
                    {group.title}
                  </p>
                  <p className="mt-1 text-sm text-[#7a9a7e]">{group.skills.join(' · ')}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section id="contact" className="section-anchor relative z-10 px-4 py-24 md:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader module="06" subtitle="CONTACT" title="Contact" />
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
                    <p className="font-mono text-xs tracking-widest text-matrix-dim group-hover:text-matrix md:text-[10px]">
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

        <footer className="relative z-10 border-t border-matrix/10 px-4 py-10 text-center font-mono text-xs tracking-widest text-matrix-dim md:text-[10px]">
          <pre className="mx-auto mb-4 max-w-md text-[8px] leading-tight text-matrix/30 hidden sm:block" aria-hidden="true">
{`   ██████╗██████╗ 
  ██╔════╝██╔══██╗
  ██║     ██████╔╝
  ██║     ██╔══██╗
  ╚██████╗██████╔╝
   ╚═════╝╚═════╝`}
          </pre>
          <p>
            {resume.name.toUpperCase()} · {resume.targetRole.toUpperCase()} · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}
