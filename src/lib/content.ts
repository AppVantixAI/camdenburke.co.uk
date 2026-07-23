/** Personal founder site — values, confidence, competence. Trust first. */

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
    "Camden Burke is CEO & Founder of AppVantix. Coding since twelve. Focused on artificial intelligence and cybersecurity. Get to know the founder.",
  /** Optional: drop a photo at /public/portrait.jpg and set this path. */
  portraitSrc: "",
  initials: "CB",
  eyebrow: "CEO & Founder · AppVantix",
  /** H1 answers who/what — name sits above as identity, not the headline. */
  headline: "I build software companies with AI and security in the foundation.",
  subhead:
    "Coding since twelve. Today I lead AppVantix and FormForge — and I answer for the work.",
  creedLine: "I don't reinvent the wheel. I build the car.",
  primaryCta: "Read my story",
  primaryCtaHref: "#letter",
  secondaryCta: "Say hello",
  secondaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#presence", label: "Presence" },
  { href: "#constellation", label: "Companies" },
  { href: "#creed", label: "Principles" },
  { href: "#letter", label: "Story" },
  { href: "#notes", label: "Notes" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "Started coding" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "B.S., completed 2024" },
    { value: "CEO", label: "AppVantix founder" },
  ],
} as const;

export const presence = {
  eyebrow: "Presence",
  title: "The person behind the companies.",
  body: "I set direction. I hire the people who build. I stay accountable for where AppVantix and FormForge go — especially on AI and security.",
  signoff: "If you want to know who you're dealing with, start here.",
} as const;

export const record = {
  eyebrow: "On the record",
  title: "Where you can verify me.",
  items: [
    {
      label: "AppVantix",
      meta: "Company I founded and run",
      href: "https://appvantix.com",
    },
    {
      label: "FormForge",
      meta: "Flagship product for manufacturers",
      href: "https://appvantix.com/formforge",
    },
    {
      label: "LinkedIn",
      meta: "Professional profile",
      href: "https://www.linkedin.com/in/camdenburkedev",
    },
    {
      label: "GitHub",
      meta: "Code and open work",
      href: "https://github.com/cburke12",
    },
    {
      label: "CompTIA Security+",
      meta: "SY0-701 · valid through March 2029",
      href: "https://www.comptia.org/certifications/security",
    },
  ],
} as const;

export const letter = {
  eyebrow: "My story",
  title: "I started young. I never left the work.",
  paragraphs: [
    "I've been coding since I was twelve. Swift was first. An award at a CodeDay at Lipscomb made it clear — this was the path, not a hobby.",
    "I built what needed building. Python bots. Sites. Apps across every platform I could reach. See a need, fill a need. That still governs how I move.",
    "When AI became useful — not theoretical — I went in. Models. Automation. Then MCPs: models with hands. Plain language in. Real work out.",
    "Today I'm CEO and Founder of AppVantix. I lead the companies, including FormForge. I hire the builders. I own the outcome — especially on AI and security.",
  ],
  signoff: "— Camden",
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
  title: "Where that shows up.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "The company I founded and still run. We build and operate software businesses — with AI and security baked into how we work.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship",
      body: "Configurable manufacturing software that turns rules into STEP and STL — so shops stop waiting on one-off CAD. I lead the company. The team builds.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const notes = {
  eyebrow: "Notes",
  title: "A few things I believe.",
  body: "Short pieces. No newsletter pitch. Read what you need.",
  indexHref: "/notes",
  indexCta: "All notes",
  items: [
    {
      slug: "build-the-car",
      title: "Don't reinvent the wheel. Build the car.",
      date: "2026-07",
      excerpt:
        "Reuse what works. Put your energy into the machine that moves.",
      body: [
        "Most teams waste years polishing parts that already exist. Frameworks. Protocols. Patterns that have been proven.",
        "I don't reinvent the wheel. I assemble the car — the product, the company, the system that gets someone from need to outcome.",
        "That means judgment: know what to borrow, what to buy, and what only you can build. The car is the point. Everything else is parts.",
      ],
    },
    {
      slug: "security-in-the-foundation",
      title: "Security belongs in the foundation.",
      date: "2026-07",
      excerpt:
        "In B2B, identity and customer data aren't optional. Treat them accordingly.",
      body: [
        "You can ship features fast and bolt security on later. You can also lose the trust that makes B2B possible.",
        "I treat security as architecture, not a checklist after launch. CompTIA Security+ is on paper because the work demands it — not because a badge looks good in a bio.",
        "If you're building with AI, the surface area grows. Models with hands need boundaries. That's not fear. That's competence.",
      ],
    },
    {
      slug: "models-with-hands",
      title: "Models with hands.",
      date: "2026-07",
      excerpt:
        "MCPs changed the game: plain language in, real work out.",
      body: [
        "When AI became useful — not theoretical — the interesting question stopped being “can it write?” and became “can it do?”",
        "MCPs gave models hands. Tools. Context. Real systems. That is leverage worth building companies around — if you keep judgment and security in the loop.",
        "I don't chase demos. I chase work that ships and holds up when something breaks.",
      ],
    },
  ],
} as const;

export const offer = {
  eyebrow: "Contact",
  title: "If you'd like to talk — say hello.",
  body: "No long form. No runaround. Email me when you're ready. I'll reply with a clear next step — or an honest no if I'm not the right person.",
  forWhom: {
    label: "Happy to hear from",
    items: [
      "Partners looking at AppVantix or FormForge",
      "Operators who want to know the founder",
      "People building with AI who care about security",
      "Press, talent, and thoughtful introductions",
    ],
  },
  youGet: {
    label: "What you can expect",
    items: [
      "A real reply from me",
      "A straight answer",
      "Someone who owns the companies he leads",
      "The same standard you just read about",
    ],
  },
  youDont: {
    label: "What I don't do",
    items: [
      "Perform competence I haven't earned",
      "Sit through meetings that go nowhere",
      "Waste anyone's time — including yours",
    ],
  },
  nextStep: "Subject line can simply be \"Hello.\" That will do.",
  primaryCta: "Say hello",
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

export type Note = (typeof notes.items)[number];

export function getNote(slug: string): Note | undefined {
  return notes.items.find((item) => item.slug === slug);
}
