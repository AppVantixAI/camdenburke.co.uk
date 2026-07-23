/** Founder site — Hormozi-direct × SpaceX-edge. Trust → email. */

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
  location: "Knoxville · Remote",
  metaTitle: "Camden Burke — CEO & Founder · AppVantix",
  description:
    "Camden Burke builds companies that ship. CEO of AppVantix. FormForge for manufacturers. AI + security in the stack. Write the founder.",
  eyebrow: "CEO · AppVantix",
  /** Under the brand — never larger than the name. */
  headline: "Don't reinvent the wheel. Build the damn car.",
  subhead:
    "Coding since twelve. AI in the stack. Security in the foundation. FormForge for manufacturers. AppVantix for everything else.",
  primaryCta: "Say hello",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "The story",
  secondaryCtaHref: "#letter",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#letter", label: "Origin" },
  { href: "#creed", label: "OS" },
  { href: "#constellation", label: "Fleet" },
  { href: "#credentials", label: "Specs" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "Age at first ship" },
    { value: "Sec+", label: "CompTIA · valid to 2029" },
    { value: "CEO", label: "AppVantix — still running it" },
    { value: "Live", label: "FormForge in market" },
  ],
} as const;

export const letter = {
  eyebrow: "Origin",
  title: "I started early. I never slowed down.",
  paragraphs: [
    "Coding since twelve. First language: Swift. I didn't wait for permission — I built. Bots. Sites. Apps. See a need, fill a need.",
    "When real AI arrived, I went in. Models. Prompts. Automation. Then MCPs — models with hands. Plain language in. Real work out.",
    "Now I run AppVantix. FormForge is the flagship. I hire the builders. I own the outcomes. AI and security aren't slides. They're how we ship.",
    "Winners don't make excuses when the other side plays the game. Serious? Write me.",
  ],
  signoff: "— Camden",
} as const;

export const creed = {
  eyebrow: "Operating system",
  title: "How I run.",
  lines: [
    "Don't reinvent the wheel. Just build the damn car.",
    "See a need, fill a need.",
    "Winners don't make excuses when the other side plays the game.",
  ],
} as const;

export const credentials = {
  eyebrow: "Specs",
  title: "On the record.",
  items: [
    {
      label: "Command",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "Direction. Product bets. Accountability. Your email hits me.",
    },
    {
      label: "Stack",
      title: "AI & Security",
      meta: "Operating layer",
      body: "Models. Automation. MCPs. Security by default — not bolted on.",
    },
    {
      label: "Degree",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack · Arizona State · 2024",
      body: "Full-stack foundation so I lead without guessing.",
    },
    {
      label: "Cleared",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · through March 2029",
      body: "Identity. Access. Customer data. Non-negotiable in B2B.",
    },
  ],
} as const;

export const constellation = {
  eyebrow: "Fleet",
  title: "What I lead.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "We build and operate software companies. AI and security in the operating system — not the pitch deck.",
      href: "https://appvantix.com",
      cta: "Enter AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship",
      body: "Configure-to-order for manufacturers. The team builds. I own the mission.",
      href: "https://appvantix.com/formforge",
      cta: "Enter FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "Telemetry",
  title: "Work in motion.",
  body: "Industries. Products. The companies I run.",
} as const;

export const offer = {
  eyebrow: "Contact",
  title: "Serious? Write me.",
  body: "No form. No queue. No agency fog. Email lands with me — clear next step, or an honest no.",
  forWhom: {
    label: "For",
    items: [
      "Partners sizing AppVantix or FormForge",
      "Operators who want the founder — not a middleman",
      "Builders who care about AI and security",
      "Press, talent, clean introductions",
    ],
  },
  youGet: {
    label: "You get",
    items: [
      "A reply from me",
      "A straight next step",
      "Someone who owns the companies he leads",
      "A demo path when the product is the point",
    ],
  },
  youDont: {
    label: "I skip",
    items: [
      "CAD freelancer cosplay",
      "Death-by-deck",
      "Calls with no point",
    ],
  },
  nextStep: "Subject: Hello. That's enough.",
  primaryCta: "Email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "Book a demo",
  tertiaryCtaHref: "https://appvantix.com/demo",
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
    "Prompt Engineering",
    "Model Context Protocol",
    "Workflow Automation",
    "SaaS",
    "Executive Leadership",
    "Full Stack Web Development",
    "Swift",
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;
