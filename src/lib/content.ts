/** Founder site — Harvey Specter cadence. Trust → email. Audit-led structure. */

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
    "Camden Burke is CEO & Founder of AppVantix and FormForge. Artificial intelligence and cybersecurity in how we ship. Partners and operators — write the founder.",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "I build software companies. You deal with the founder.",
  subhead:
    "AppVantix builds and operates software businesses. FormForge helps manufacturers configure and quote to order — without the agency fog. AI and security are how we ship, not a slide in the deck.",
  primaryCta: "Email me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "See the companies",
  secondaryCtaHref: "#constellation",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#constellation", label: "Companies" },
  { href: "#creed", label: "Principles" },
  { href: "#letter", label: "Story" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "Coding since" },
    { value: "Sec+", label: "CompTIA · through 2029" },
    { value: "ASU", label: "B.S. Full Stack · 2024" },
    { value: "CEO", label: "AppVantix — still running it" },
  ],
} as const;

export const letter = {
  eyebrow: "Story",
  title: "I started early. I stayed in the work.",
  paragraphs: [
    "I've been writing software since I was twelve. Swift first. Then whatever needed building — bots, sites, applications across every platform I could reach. See a need, fill a need. That still governs how I move.",
    "When artificial intelligence became useful, I went in — models, automation, then MCPs: plain language in, real work out. Today I run AppVantix and lead FormForge. I hire the people who build. I own the outcomes — especially on AI and security.",
    "I don't make excuses when the other side plays the game. If you have something worth discussing, write me.",
  ],
  signoff: "— Camden",
} as const;

export const creed = {
  eyebrow: "Principles",
  title: "A few lines I live by.",
  lines: [
    "Don't reinvent the wheel. Just build the damn car.",
    "See a need, fill a need.",
    "Winners don't make excuses when the other side plays the game.",
  ],
} as const;

/** Kept for schema / future use; homepage folds this into proof + story. */
export const credentials = {
  eyebrow: "Credentials",
  title: "What's on paper.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "Direction, product bets, and accountability. Your email reaches me.",
    },
    {
      label: "Focus",
      title: "Artificial Intelligence & Cybersecurity",
      meta: "Operating priority",
      body: "Models, automation, MCPs. Security by default — not bolted on.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · 2024",
      body: "Full-stack foundation so I lead technical work without guessing.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and customer data — non-negotiable in B2B.",
    },
  ],
} as const;

export const constellation = {
  eyebrow: "Companies",
  title: "What I lead.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "We build and operate software businesses. Artificial intelligence and security sit in the operating system — not the pitch.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship",
      body: "Configure-to-order for manufacturers: turn complex product rules into clean quotes and configs. The team builds. I own the mission.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "In motion",
  title: "A look at the work.",
  body: "Industries and products around the companies I lead.",
} as const;

export const offer = {
  eyebrow: "Contact",
  title: "If it's worth discussing — write me.",
  body: "No long form. No runaround. Email me and I'll reply with a clear next step — or an honest no if I'm not the right person.",
  forWhom: {
    label: "Happy to hear from",
    items: [
      "Partners evaluating AppVantix or FormForge",
      "Operators who prefer to speak with the founder",
      "People building with AI who take security seriously",
      "Press, talent, and thoughtful introductions",
    ],
  },
  youGet: {
    label: "What you can expect",
    items: [
      "A real reply from me",
      "A straight answer on next steps",
      "Someone accountable for the companies he leads",
      "A demo path when the product is the point",
    ],
  },
  youDont: {
    label: "What I don't do",
    items: [
      "Meetings that go nowhere",
      "Agency fog between you and the decision",
      "Waste anyone's time — including yours",
    ],
  },
  nextStep: "Subject line can simply be \"Hello.\" That will do.",
  primaryCta: "Email me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "Book a product demo",
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
