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
  eyebrow: "CEO & Founder · AppVantix",
  headline: "I don't reinvent the wheel. I build the car.",
  subhead:
    "I've been writing software since I was twelve. Today I lead AppVantix — with artificial intelligence and security built into how we work. This is who I am.",
  primaryCta: "Read my story",
  primaryCtaHref: "#letter",
  secondaryCta: "Say hello",
  secondaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#letter", label: "Story" },
  { href: "#creed", label: "Principles" },
  { href: "#credentials", label: "Background" },
  { href: "#constellation", label: "Companies" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "When I started coding" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "B.S., completed 2024" },
    { value: "CEO", label: "AppVantix founder" },
  ],
} as const;

export const letter = {
  eyebrow: "My story",
  title: "I fell in love with code young — and I never left the work.",
  paragraphs: [
    "I've been coding since I was twelve. Swift was my first language. Winning an award at a CodeDay at Lipscomb made it real — this wasn't a hobby anymore. It was the path.",
    "I built what needed building. Python bots. Sites on the side. Apps on every platform I could reach. See a need, fill a need. That still governs how I move.",
    "When artificial intelligence became useful — not theoretical — I went in. How the models work. Automation. Then MCPs arrived, and the game changed: models with hands. Plain language in. Real work out.",
    "Today I'm CEO and Founder of AppVantix. I lead the companies, including FormForge. I hire the people who build. I stay accountable for where we're going — especially on AI and security.",
    "I don't make excuses when the other side plays the game. If you want to know who you're dealing with, you're in the right place.",
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

export const credentials = {
  eyebrow: "Background",
  title: "Competence, on the record.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "I set direction, make the product bets, and answer for how we show up. Leadership isn't a title I borrowed — it's the job I do.",
    },
    {
      label: "Focus",
      title: "Artificial Intelligence & Cybersecurity",
      meta: "Where I put my attention",
      body: "From models and automation to MCPs with real leverage. Security isn't an afterthought — it's how responsible software gets built.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · 2024",
      body: "I wanted the full-stack foundation so I could lead technical work with judgment — not guesswork.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and customer data aren't optional in B2B. I treat them accordingly.",
    },
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
      body: "Our product for manufacturers. I lead the company. The team builds. The standard is the same: ship with integrity.",
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
