/** Founder site — Harvey Specter cadence: composed, educated, decisive. Trust → email. */

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
    "Camden Burke is CEO & Founder of AppVantix. Coding since twelve. Focused on artificial intelligence and cybersecurity. If you have something worth saying — write me.",
  eyebrow: "CEO & Founder · AppVantix",
  /** Under the brand — never larger than the name. */
  headline: "I don't reinvent the wheel. I build the car.",
  subhead:
    "I've been writing software since I was twelve. Today I lead AppVantix and FormForge — with artificial intelligence and security built into how we work, not stapled on afterward.",
  primaryCta: "Get in touch",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "Read my story",
  secondaryCtaHref: "#letter",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#letter", label: "Story" },
  { href: "#creed", label: "Principles" },
  { href: "#constellation", label: "Companies" },
  { href: "#credentials", label: "Credentials" },
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

export const letter = {
  eyebrow: "My story",
  title: "I fell in love with code early — and I never looked back.",
  paragraphs: [
    "I've been coding since I was twelve. Swift was my first language. An award at a CodeDay at Lipscomb made it real — this wasn't a hobby anymore. It was the work.",
    "I built what needed building. Python bots. Sites on the side. Applications across every platform I could reach. See a need, fill a need. That still governs how I move.",
    "When artificial intelligence became useful — not theoretical — I went in. Prompt engineering. How the models work. Automation through APIs and tools like n8n, Zapier, and Make. Then MCPs arrived, and the game changed: models with hands. Plain language in. Real work out.",
    "Today I'm CEO and Founder of AppVantix. I lead the companies, including FormForge. I hire the people who build. I stay accountable for where we're going — especially on AI and security. I'm not a CAD modeler at a drafting table. I'm the person who owns the outcome.",
    "I don't make excuses when the other side plays the game. If you have something worth discussing, I'm not hard to reach.",
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

export const credentials = {
  eyebrow: "Credentials",
  title: "What's on paper.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "I set direction, make the product bets, and answer for how we show up. When you write hello@appvantix.com, you're writing to me.",
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
      body: "I wanted the full-stack foundation so I could lead technical work without guessing — and without hiding behind titles.",
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
  title: "What I lead.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "The company I founded and still run. We build and operate software businesses — with artificial intelligence and security baked into how we work.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Software for manufacturers. I lead the company. The team builds the product. When you're ready to see it, we can arrange a demo.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "In motion",
  title: "A look at the work.",
  body: "A short reel of the industries and products around the companies I lead.",
} as const;

export const offer = {
  eyebrow: "Contact",
  title: "If it's worth discussing — write me.",
  body: "No long form. No runaround. Email me and I'll reply with a clear next step — or an honest no if I'm not the right person. That's how professionals work.",
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
      "Pretend I'm a freelance CAD modeler",
      "Sit through meetings that go nowhere",
      "Waste anyone's time — including yours",
    ],
  },
  nextStep: "Subject line can simply be \"Hello.\" That will do.",
  primaryCta: "Email Camden",
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
