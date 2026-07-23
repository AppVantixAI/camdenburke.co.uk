/** Personal brand site for Camden Burke — distinct from AppVantix / FormForge marketing */

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
  emailHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  linkedin: "https://www.linkedin.com/in/camdenburkedev",
  github: "https://github.com/cburke12",
  location: "Knoxville, Tennessee · working remotely worldwide",
  metaTitle: "Camden Burke",
  description:
    "Camden Burke is a technical founder — CEO of AppVantix — with dual degrees in Computer Science and Graphic Information Technology, CompTIA Security+, and a bias toward shipping real software.",
  eyebrow: "Technical founder",
  headline: "I lead with craft, not costume.",
  subhead:
    "Dual degrees from Arizona State University. Security+ certified. I design, build, and run software businesses — starting with AppVantix.",
  primaryCta: "Write to me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
} as const;

export const nav = [
  { href: "#thesis", label: "Thesis" },
  { href: "#provenance", label: "Provenance" },
  { href: "#ventures", label: "Ventures" },
  { href: "#contact", label: "Contact" },
] as const;

export const thesis = {
  eyebrow: "Thesis",
  title: "Founders should be able to open the hood.",
  body: "I do not separate “vision” from the work. Computer science gave me systems rigor. Graphic Information Technology gave me product craft. Security+ keeps trust non-negotiable. That combination is how I run AppVantix — and why I refuse vaporware.",
  beliefs: [
    {
      num: "01",
      title: "Ship over theater",
      body: "If you cannot click it, it is not ready. Decks are optional. Working software is not.",
    },
    {
      num: "02",
      title: "Design is a leadership skill",
      body: "Interfaces are decisions. Full-stack and UX training means I do not outsource judgment about how people use what we build.",
    },
    {
      num: "03",
      title: "Security is product quality",
      body: "Identity, access, and data handling are part of the craft — not a footnote after launch.",
    },
  ],
} as const;

export const provenance = {
  eyebrow: "Provenance",
  title: "Where the judgment comes from.",
  body: "Credentials are not decoration. They are the operating system behind the founder title.",
  education: [
    {
      school: "Arizona State University",
      credential: "B.S. Computer Science",
      when: "Expected Dec 2027",
      note: "Algorithms, systems, and the discipline to reason about software that has to last.",
    },
    {
      school: "Arizona State University",
      credential: "B.S. Graphic Information Technology",
      concentration: "Full Stack Web Development",
      when: "Completed 2024",
      note: "UX, visual systems, and shipping interfaces people can actually finish a task in.",
    },
  ],
  certification: {
    name: "CompTIA Security+ ce (SY0-701)",
    when: "Valid through March 2029",
    note: "Security literacy for anyone building B2B software that touches accounts, access, and customer data.",
  },
  skills: [
    { label: "Systems & CS", detail: "Architecture, automation, rigorous debugging" },
    { label: "Product craft", detail: "Full-stack delivery, UX, brand-sensitive UI" },
    { label: "Security posture", detail: "Identity hygiene, least privilege, operational caution" },
    { label: "Operator habits", detail: "DNS, vendors, escalation, documentation under pressure" },
  ],
} as const;

export const ventures = {
  eyebrow: "Ventures",
  title: "Companies I am responsible for.",
  intro:
    "These are not my personal brand. They are businesses I founded and lead. This site is about me; those sites are about the work.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      blurb:
        "An agency that builds and operates SaaS businesses. Parent company — not a product rename.",
      href: "https://appvantix.com",
      cta: "appvantix.com",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      blurb:
        "Configure-to-order software for custom manufacturers. Built under AppVantix; lives on its own brand.",
      href: "https://appvantix.com/formforge",
      cta: "See FormForge",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "If you want the person, start here.",
  body: "Press, partners, operators, and curious humans — write me. Product demos and pilots belong on AppVantix; introductions and conversations belong with me.",
  primaryCta: "Write to me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "AppVantix",
  tertiaryCtaHref: "https://appvantix.com",
} as const;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: `${site.role}, ${site.company}`,
  description: site.description,
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Knoxville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  sameAs: [site.linkedin, site.github, site.companyUrl],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Arizona State University",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "CompTIA Security+ ce (SY0-701)",
      credentialCategory: "certification",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
  knowsAbout: [
    "Technical founding",
    "Computer Science",
    "Full stack web development",
    "UX and product design",
    "CompTIA Security+",
    "SaaS leadership",
    "AppVantix",
  ],
} as const;
