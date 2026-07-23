/** Personal CEO site — human voice, Camden's phrases, SpaceX motion. */

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
    "Camden Burke is CEO & Founder of AppVantix. Coding since twelve. Focused on AI and cybersecurity. Say hello.",
  eyebrow: "CEO & Founder · AI & Security",
  headline: "Don't reinvent the wheel.",
  subhead:
    "Just build the damn car. I've been coding since I was twelve — and I still believe the simplest way to win is to see a need and fill it.",
  forLine: "Partners, operators, buyers, press, talent — if you're serious, write me.",
  primaryCta: "Say hello",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "Read my story",
  secondaryCtaHref: "#letter",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#letter", label: "Story" },
  { href: "#creed", label: "Creed" },
  { href: "#constellation", label: "Companies" },
  { href: "#credentials", label: "Background" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "When I started coding" },
    { value: "AI", label: "Where I put my time" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "CEO", label: "AppVantix founder" },
  ],
} as const;

export const letter = {
  eyebrow: "A little of my story",
  title: "I fell in love with code young — and never really left.",
  paragraphs: [
    "I've been coding since I was twelve. My first language was Swift 2. I got hooked after winning an award at a CodeDay event at Lipscomb University. That day made it feel real — like this wasn't just a hobby anymore.",
    "After that I built whatever I could. Python bots. Pool-cleaner websites on the side. Apps on every platform I could reach. If someone needed something, I tried to make it. See a need, fill a need — that's still how I move.",
    "When true AI showed up, I didn't wait around. I got into prompt engineering, then how the models actually work under the hood. I started wiring AI into APIs and automation tools like n8n, Zapier, and Make.com. Then MCPs came along — and that changed everything for me. Suddenly AI had real hands. You could talk in plain language and get real work done, not just another chat reply.",
    "I'm always looking for a better way to wire things together so the output stays high quality, day after day. Don't reinvent the wheel — just build the damn car.",
    "Today I'm CEO and Founder of AppVantix. I lead the companies, including FormForge. I'm not a CAD modeler sitting at a drafting table. I hire the people who build, and I stay accountable for where we're going — especially on AI and security.",
    "Winners don't make excuses when the other side plays the game. If you want to talk, I'm easy to reach.",
  ],
  signoff: "— Camden",
} as const;

export const creed = {
  eyebrow: "How I think",
  title: "A few lines I actually live by.",
  lines: [
    "Don't reinvent the wheel. Just build the damn car.",
    "See a need, fill a need.",
    "Winners don't make excuses when the other side plays the game.",
  ],
} as const;

export const credentials = {
  eyebrow: "Background",
  title: "What's on paper.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "I run the company — direction, product bets, and how we show up for customers.",
    },
    {
      label: "Focus",
      title: "AI & Cybersecurity",
      meta: "Where I spend my attention",
      body: "From prompts and models to automation and MCPs. Security isn't an afterthought — it's part of how we build.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "I wanted the full-stack foundation so I could lead technical work without guessing.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "I take identity, access, and customer data seriously. That shouldn't be optional in B2B software.",
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
      body: "The company I started and still run. We build and operate software businesses, with AI and security baked into how we work.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Software for manufacturers. I lead the company — the team builds the product. If you want a demo, we can set that up.",
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
  title: "If you want to talk, just say hello.",
  body: "No long form. No runaround. Email me and I'll get back to you with a clear next step — or an honest no if I'm not the right person.",
  forWhom: {
    label: "Happy to hear from",
    items: [
      "Partners looking at AppVantix or FormForge",
      "Operators who want to talk to the founder directly",
      "People building with AI and care about security",
      "Press, talent, and thoughtful introductions",
    ],
  },
  youGet: {
    label: "What you can expect",
    items: [
      "A real reply from me",
      "A straight answer on next steps",
      "A demo path if you're here for the product",
      "Someone who's been shipping software since childhood",
    ],
  },
  youDont: {
    label: "What I skip",
    items: [
      "Pretending I'm a CAD freelancer",
      "Death-by-deck meetings",
      "Calls with no point",
    ],
  },
  nextStep: "Subject line can just be \"Hello\" — that's enough.",
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
