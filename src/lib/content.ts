/** Personal CEO site — Hormozi offer/proof patterns + SpaceX motion. No name-drops. */

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
  metaTitle: "Camden Burke — CEO & Founder · AI & Security",
  description:
    "Camden Burke is CEO & Founder of AppVantix — coding since 12, AI-native operator, cybersecurity focused. CompTIA Security+. Talk to the founder.",
  eyebrow: "CEO & Founder · AI & Security",
  headline: "I own the outcome.",
  subhead:
    "Coding since I was 12. Early on AI — prompt engineering to agents with real hands. Now I run product companies with a security backbone. Not a CAD modeler. Not a slide founder.",
  forLine: "For partners · operators · buyers · press · talent",
  primaryCta: "I'm ready",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=I'm%20ready",
  secondaryCta: "See the proof",
  secondaryCtaHref: "#proof",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#offer", label: "Offer" },
  { href: "#proof", label: "Proof" },
  { href: "#letter", label: "Letter" },
  { href: "#constellation", label: "Companies" },
  { href: "#credentials", label: "Credentials" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "Started coding" },
    { value: "AI", label: "Early — still compounding" },
    { value: "Sec+", label: "Certified security" },
    { value: "CEO", label: "Founder who ships" },
  ],
} as const;

export const letter = {
  eyebrow: "The truth",
  title: "Most founders sell vibes. I sell owned outcomes.",
  paragraphs: [
    "I've been coding since I was 12. First language: Swift 2. I fell in love with it after winning an award at a CodeDay event at Lipscomb University — that win locked the obsession in.",
    "From there I built everything I could get my hands on: Python \"AI\" bots, pool-cleaner websites as a side hustle, apps across platforms. Always shipping. Always looking for the edge.",
    "When real AI landed, I jumped. Prompt engineering. Models under the hood. Then APIs wired into automation — n8n, Zapier, Make.com. MCPs changed the game: plain language with actual hands — agents that finish work, not just chat about it. Higher quality output, consistently, by wiring systems differently.",
    "That edge is why I run AppVantix as CEO & Founder. Strategy, product direction, capital allocation, security posture. FormForge is a product company I lead — not a drafting table I sit at. I hire builders. I own the result.",
    "If you want theater, hire a pitch coach. If you want a founder who's been in the stack since childhood and treats AI + security as operating constraints — keep scrolling.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
} as const;

export const credentials = {
  eyebrow: "Receipts",
  title: "Proof under the title.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "One throat to choke. Strategy, portfolio, and how the companies operate.",
    },
    {
      label: "Focus",
      title: "AI & Cybersecurity",
      meta: "Operating lens · since day one of real AI",
      body: "Prompt engineering to models under the hood. APIs into n8n, Zapier, Make. MCPs that give agents real hands. Security-first — always.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "Full-stack craft so I can lead technical companies without guessing.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and trustworthy handling of customer data — non-negotiable.",
    },
  ],
} as const;

export const constellation = {
  eyebrow: "Portfolio",
  title: "What I lead. What ships.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "The holding company I run. We invent and operate SaaS businesses — AI and security in the operating model, not bolted on later.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix →",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product company",
      body: "Configure-to-order software for manufacturers. I lead the company. The team ships the product. You get a founder-owned roadmap.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge →",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "In motion",
  title: "Receipts > résumé.",
  body: "Industries we serve. Products we operate. Founder leadership — not a modeling reel.",
} as const;

export const offer = {
  eyebrow: "The offer",
  title: "Talk to the founder. Get a straight answer.",
  body: "No gatekeepers. No 12-slide intro. You write. I reply with a clear next step — or I tell you I'm the wrong person.",
  forWhom: {
    label: "This is for",
    items: [
      "Partners evaluating AppVantix or FormForge",
      "Operators who need the decision-maker, not a BD proxy",
      "Buyers who want a security-minded, AI-native product company",
      "Press, talent, and capital conversations that respect your time",
    ],
  },
  youGet: {
    label: "You get",
    items: [
      "Direct access to the CEO — one email, one owner",
      "A clear yes / no / next step in the first reply",
      "A product demo path if you want software, not politics",
      "A founder who's been shipping since 12 — AI systems, automation, agents with hands",
    ],
  },
  youDont: {
    label: "You don't get",
    items: [
      "CAD freelancer pitches",
      "Slide-deck theater",
      "Vague 'synergy' calls with no agenda",
    ],
  },
  nextStep: "Ready? Hit the button. Subject line can just be: I'm ready.",
  primaryCta: "I'm ready — email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=I'm%20ready",
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
