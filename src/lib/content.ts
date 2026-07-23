/** Personal founder site — Specter composure × Hormozi clarity. Less proves more. */

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
    "Camden Burke. CEO & Founder of AppVantix. I build software companies with AI and security in the foundation. Say hello.",
  /** Optional founder portrait — leave empty to hide Presence. */
  portraitSrc: "",
  initials: "CB",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "I don't reinvent the wheel. I build the car.",
  subhead:
    "Software companies. AI in the engine. Security in the foundation. My name's on the work.",
  creedLine: "I don't reinvent the wheel. I build the car.",
  primaryCta: "Say hello",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "The companies",
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
    { value: "12", label: "Started here" },
    { value: "Sec+", label: "On paper" },
    { value: "ASU", label: "Degree, 2024" },
    { value: "CEO", label: "Title I earned" },
  ],
} as const;

export const creed = {
  eyebrow: "Principles",
  title: "How I play.",
  lines: [
    "Don't reinvent the wheel. Build the damn car.",
    "See a need. Fill it.",
    "No excuses when the other side plays the game.",
  ],
} as const;

export const constellation = {
  eyebrow: "Companies",
  title: "Where I put points on the board.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "I founded it. I run it. We build software businesses — AI and security included, not bolted on.",
      href: "https://appvantix.com",
      cta: "See AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship",
      body: "The offer: rules in, STEP and STL out. Manufacturers stop waiting on one-off CAD.",
      href: "https://appvantix.com/formforge",
      cta: "See FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

/** Off homepage — /notes only. */
export const notes = {
  eyebrow: "Notes",
  title: "Notes.",
  body: "Short. No fluff. Read what you need.",
  indexHref: "/notes",
  indexCta: "All notes",
  items: [
    {
      slug: "build-the-car",
      title: "Don't reinvent the wheel. Build the car.",
      date: "2026-07",
      excerpt: "Parts aren't the product. The machine that moves is.",
      body: [
        "Most people polish parts that already exist and call it progress.",
        "I borrow what works. I buy what I shouldn't build. I build what only I can. Then I assemble the car.",
        "The car is the point. Everything else is inventory.",
      ],
    },
    {
      slug: "security-in-the-foundation",
      title: "Security isn't a feature. It's the foundation.",
      date: "2026-07",
      excerpt: "Bolt it on later and you don't have a product. You have a liability.",
      body: [
        "You can ship fast and fix trust later. Or you can keep the customers who actually pay.",
        "I treat security as architecture. CompTIA Security+ is on paper because the work demands it — not because a badge looks good in a bio.",
        "AI without boundaries isn't leverage. It's negligence with a demo.",
      ],
    },
    {
      slug: "models-with-hands",
      title: "Models with hands.",
      date: "2026-07",
      excerpt: "Writing is cute. Doing is the business.",
      body: [
        "When AI got useful, the question stopped being “can it write?” It became “can it do the work?”",
        "MCPs gave models hands. Tools. Systems. Real output. That's the game.",
        "I don't collect demos. I ship work that still stands when something breaks.",
      ],
    },
  ],
} as const;

export const offer = {
  eyebrow: "Contact",
  title: "You know how to find me.",
  body: "Email me. I'll give you a yes, a no, or a next step. No theater.",
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
