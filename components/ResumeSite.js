import Head from 'next/head';
import { useEffect } from 'react';
import Navbar from './Navbar';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import SecurityBadge from './SecurityBadge';
import ExperienceTimeline from './ExperienceTimeline';
import FeaturedLab from './FeaturedLab';
import MetaChip from './MetaChip';
import { resume } from '../data/resume';

const SITE_URL = 'https://camdenburke.co.uk';
const OG_IMAGE = `${SITE_URL}/og-image.svg`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: resume.name,
  jobTitle: 'Help Desk Analyst',
  description: resume.valueProposition,
  url: SITE_URL,
  email: resume.email,
  telephone: resume.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Knoxville',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  sameAs: [resume.linkedin, resume.github],
  knowsAbout: resume.scanSkills,
};

export default function ResumeSite({ showViewToggle = false, onGoDesk, viewMode = 'flat' }) {
  useEffect(() => {
    document.body.classList.remove('custom-cursor-active');
  }, []);

  const pdfLink = resume.recruiterLinks.find((l) => l.label === 'Resume PDF');
  const secondaryLinks = resume.recruiterLinks.filter((l) => l.label !== 'Resume PDF');

  return (
    <>
      <Head>
        <title>{resume.name} — Help Desk & Security</title>
        <meta name="description" content={resume.valueProposition} />
        <meta property="og:title" content={`${resume.name} — Help Desk & Security`} />
        <meta property="og:description" content={resume.valueProposition} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${resume.name} — Help Desk & Security`} />
        <meta name="twitter:description" content={resume.valueProposition} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030806" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <div className="crt min-h-screen bg-void text-[#b8d4bc]">
        <div className="noise-overlay" />
        <div className="scan-beam" />
        <div className="pointer-events-none fixed inset-0 z-[1] bg-hex bg-[length:28px_49px] animate-drift opacity-60" />
        <Navbar
          showViewToggle={showViewToggle}
          viewMode={viewMode}
          onGoDesk={onGoDesk}
          onGoFlat={() => {}}
        />

        <section className="relative overflow-hidden px-4 py-10 pt-[calc(var(--header-height,52px)+1.25rem)] md:px-8 md:py-16 md:pt-[calc(var(--header-height,52px)+2rem)]">
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-void/20 via-void/80 to-void" />

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_320px] lg:gap-12 xl:grid-cols-[1fr_340px] lg:items-start">
            <div className="hero-panel panel-border corner-brackets bg-panel/90 p-6 pl-7 backdrop-blur-sm md:p-10 md:pl-11">
              <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-matrix/[0.05] blur-3xl" />

              <div className="relative flex flex-wrap gap-2.5">
                {resume.heroChips.map((chip) => (
                  <MetaChip key={chip.label} label={chip.label} value={chip.value} tone={chip.tone} />
                ))}
              </div>

              <h1 className="relative mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-[2.35rem] md:leading-tight">
                {resume.name}
              </h1>

              <p className="relative mt-5 max-w-2xl font-body text-base font-medium leading-8 text-white md:text-lg md:leading-9">
                {resume.valueProposition}
              </p>

              <p className="relative mt-4 max-w-2xl font-body text-sm leading-7 text-[#9cb8a0] md:text-[15px]">
                {resume.subheadline}
              </p>

              <div className="pointer-events-auto relative mt-8 flex flex-wrap items-center gap-4">
                {pdfLink && (
                  <a
                    href={pdfLink.href}
                    download={pdfLink.download || undefined}
                    className="inline-flex min-h-[48px] items-center border border-matrix bg-matrix/15 px-6 py-3 font-mono text-sm text-matrix transition-all hover:bg-matrix/25 hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] active:scale-95"
                  >
                    Resume PDF
                  </a>
                )}
                <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
                  {secondaryLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#8aa88e] transition-colors hover:text-matrix hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <SecurityBadge />
          </div>
        </section>

        <section
          id="experience"
          className="section-anchor relative z-10 border-t border-matrix/10 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader title="Experience" />
            </ScrollReveal>
            <ScrollReveal>
              <ExperienceTimeline />
            </ScrollReveal>
          </div>
        </section>

        <section
          id="lab"
          className="section-anchor section-featured relative z-10 border-t border-matrix/15 px-4 py-24 md:px-8 md:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader
                featured
                subtitle="Hands-on proof"
                title="Active Directory home lab"
              />
            </ScrollReveal>
            <ScrollReveal>
              <FeaturedLab />
            </ScrollReveal>
          </div>
        </section>

        <section
          id="certifications"
          className="section-anchor relative z-10 border-t border-matrix/10 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader title="Certifications" />
            </ScrollReveal>
            <ScrollReveal className="grid gap-4 md:grid-cols-2">
              {resume.featuredCertifications.map((cert) => {
                const isSecure = cert.tone === 'secure';
                return (
                  <div
                    key={cert.name}
                    className={`cert-card panel-border flex items-start gap-4 p-5 md:p-6 ${
                      isSecure ? 'border-l-[3px] border-l-matrix border-matrix/25 bg-matrix/5' : 'border-l-[3px] border-l-amber border-amber/25 bg-amber/5'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-display text-base font-bold text-white md:text-lg">
                          {cert.name}
                        </p>
                        <span
                          className={`rounded-sm border px-2 py-0.5 font-mono text-xs ${
                            isSecure
                              ? 'border-matrix/40 text-matrix'
                              : 'border-amber/40 text-amber'
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                      <p className="mt-2 font-mono text-sm text-[#8faa92]">{cert.detail}</p>
                      <div className="mt-4 flex flex-wrap gap-4">
                        {cert.credlyUrl && (
                          <a
                            href={cert.credlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-matrix hover:underline"
                          >
                            Credly badge →
                          </a>
                        )}
                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-[#8aa88e] hover:underline"
                          >
                            Verify on CompTIA →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        <section
          id="education"
          className="section-anchor relative z-10 border-t border-matrix/10 bg-[#050c08]/80 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader title="Education" />
            </ScrollReveal>
            <ScrollReveal className="grid gap-6 md:grid-cols-2">
              {resume.education.map((edu) => (
                <div
                  key={edu.degree}
                  className={`panel-border corner-brackets p-6 ${
                    edu.primary ? 'bg-panel' : 'bg-panel/60'
                  }`}
                >
                  <p className="font-mono text-xs text-amber">{edu.period}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white md:text-xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-matrix-dim">{edu.school}</p>
                  {edu.summary && (
                    <p className="mt-3 text-sm leading-7 text-[#9cb8a0]">{edu.summary}</p>
                  )}
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section
          id="skills"
          className="section-anchor relative z-10 border-t border-matrix/10 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader title="Skills" />
            </ScrollReveal>

            <ScrollReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {resume.skillGroups.map((group) => (
                <div key={group.title} className="border-l-2 border-matrix/40 pl-4">
                  <p className="font-mono text-xs text-matrix">{group.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#9cb8a0]">
                    {group.skills.join(' · ')}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        <section
          id="contact"
          className="section-anchor relative z-10 border-t border-matrix/10 bg-[#050c08]/80 px-4 py-20 md:px-8 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <SectionHeader title="Contact" />
            </ScrollReveal>
            <p className="mb-8 text-sm text-[#9cb8a0]">{resume.availability}</p>
            <ScrollReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Phone', value: resume.phone, href: resume.phoneHref },
                { label: 'Email', value: resume.email, href: `mailto:${resume.email}` },
                {
                  label: 'LinkedIn',
                  value: 'camdenburkedev',
                  href: resume.linkedin,
                  external: true,
                },
                { label: 'GitHub', value: 'cburke12', href: resume.github, external: true },
              ].map((item) => {
                const card = (
                  <>
                    <p className="font-mono text-xs text-matrix-dim group-hover:text-matrix">
                      {item.label}
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

        <footer className="relative z-10 border-t border-matrix/10 px-4 py-10 text-center text-sm text-matrix-dim">
          <p>
            {resume.name} · Help desk & security · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}
