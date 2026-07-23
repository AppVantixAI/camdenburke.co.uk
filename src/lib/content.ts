/** Personal founder site — values, confidence, competence. Trust first. Less proves more. */

export const site = {
  name: "Camden Burke",
  role: "CEO & Founder",
  company: "AppVantix",
  legal: "AppVantix LLC",
  url: "https://camdenburke.co.uk",
  companyUrl: "https://appvantix.com",
  formforgeUrl: "https://appvantix.com/formforge",
  demoUrl: "https://appvantix.com/demo",
  email: "hello@appvantix.com",
  emailHref: "mailto:hello@appvantix.com",
  linkedin: "https://www.linkedin.com/in/camdenburkedev",
  github: "https://github.com/cburke12",
  location: "Knoxville · Remote worldwide",
  metaTitle: "Camden Burke — CEO & Founder · AppVantix",
  description:
    "Camden Burke is CEO & Founder of AppVantix. Artificial intelligence and cybersecurity. Say hello.",
  /** Optional: drop a photo at /public/portrait.jpg and set this path. */
  portraitSrc: "",
  initials: "CB",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "I build software companies with AI and security in the foundation.",
  subhead: "AppVantix. FormForge. I answer for the work.",
  creedLine: "I don't reinvent the wheel. I build the car.",
  primaryCta: "Say hello",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "Companies",
  secondaryCtaHref: "#constellation",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#creed", label: "Principles" },
  { href: "#constellation", label: "Companies" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "Started coding" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "B.S., 2024" },
    { value: "CEO", label: "AppVantix" },
  ],
} as const;

export const creed = {
  eyebrow: "Principles",
  title: "What I stand on.",
  lines: [
    "Don't reinvent the wheel. Just build the damn car.",
    "See a need, fill a need.",
    "Winners don't make excuses when the other side plays the game.",
  ],
} as const;

export const constellation = {
  eyebrow: "Companies",
  title: "What I lead.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "Software businesses with AI and security built in.",
      href: "https://appvantix.com",
      cta: "AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship",
      body: "Rules to STEP and STL for manufacturers.",
      href: "https://appvantix.com/formforge",
      cta: "FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

/** Kept off the homepage — available at /notes for those who want them. */
export const notes = {
  eyebrow: "Notes",
  title: "Notes.",
  body: "A few short pieces.",
  indexHref: "/notes",
  indexCta: "All notes",
  items: [
    {
      slug: "build-the-car",
      title: "Don't reinvent the wheel. Build the car.",
      date: "2026-07",
      excerpt: "Reuse what works. Put your energy into the machine that moves.",
      body: [
        "Most teams waste years polishing parts that already exist.",
        "I don't reinvent the wheel. I assemble the car — the product, the company, the system that gets someone from need to outcome.",
        "Know what to borrow, what to buy, and what only you can build. The car is the point.",
      ],
    },
    {
      slug: "security-in-the-foundation",
      title: "Security belongs in the foundation.",
      date: "2026-07",
      excerpt: "In B2B, identity and customer data aren't optional.",
      body: [
        "You can bolt security on later. You can also lose the trust that makes B2B possible.",
        "I treat security as architecture, not a checklist after launch.",
        "If you're building with AI, the surface area grows. Models with hands need boundaries.",
      ],
    },
    {
      slug: "models-with-hands",
      title: "Models with hands.",
      date: "2026-07",
      excerpt: "Plain language in. Real work out.",
      body: [
        "When AI became useful, the question stopped being “can it write?” and became “can it do?”",
        "MCPs gave models hands. That is leverage — if you keep judgment and security in the loop.",
        "I don't chase demos. I chase work that ships and holds up when something breaks.",
      ],
    },
  ],
} as const;

export const offer = {
  eyebrow: "Contact",
  title: "Say hello.",
  body: "I'll reply with a clear next step — or an honest no.",
  primaryCta: "Email me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
} as const;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: `${site.role}, ${site.company}`,
  description: site.description,
  url: site.url,
  email: site.email,
  sameAs: [site.linkedin, site.github, site.companyUrl],
  alumniOf: [{ "@type": "CollegeOrUniversity", name: "Arizona State University" }],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "B.S. Graphic Information Technology — Full Stack Web Development",
      credentialCategory: "degree",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Arizona State University" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "CompTIA Security+ ce (SY0-701)",
      credentialCategory: "certification",
    },
  ],
  knowsAbout: [
    "Cybersecurity",
    "Artificial Intelligence",
    "Model Context Protocol",
    "SaaS",
    "Executive Leadership",
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;

export type Note = (typeof notes.items)[number];

export function getNote(slug: string): Note | undefined {
  return notes.items.find((item) => item.slug === slug);
}
