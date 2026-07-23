/** Personal CEO site — SpaceX video + Hormozi proof/offer + Day-1 letter structure */

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
  metaTitle: "Camden Burke — CEO & Founder",
  description:
    "Camden Burke is CEO & Founder of AppVantix — dual ASU degrees in Computer Science and Graphic Information Technology, CompTIA Security+, building FormForge for configure-to-order manufacturers.",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "Do you want software that ships?",
  subhead:
    "I build and operate product companies. Dual ASU degrees. Security+. The demo is the argument.",
  primaryCta: "I'm ready",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Ready%20to%20talk",
  secondaryCta: "Watch the reel",
  secondaryCtaHref: "#reel",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#letter", label: "Letter" },
  { href: "#credentials", label: "Credentials" },
  { href: "#constellation", label: "Companies" },
  { href: "#reel", label: "Reel" },
  { href: "#offer", label: "Contact" },
] as const;

export const proof = {
  items: [
    { value: "2", label: "ASU degrees" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "2", label: "Companies led" },
    { value: "Remote", label: "Worldwide" },
  ],
} as const;

export const letter = {
  eyebrow: "Day 1",
  title: "A short letter from the founder.",
  paragraphs: [
    "I started AppVantix to invent and operate software businesses — not to sell decks. If I cannot open the hood, I do not claim the product.",
    "FormForge is the flagship: configure-to-order software for custom manufacturers. Rules, geometry, structured quotes. It has to work on the shop floor, not only in a pitch room.",
    "I hold dual degrees from Arizona State — Computer Science (expected Dec 2027) and Graphic Information Technology, Full Stack (completed 2024) — plus CompTIA Security+. Systems rigor, interface craft, and security as quality.",
    "Every quarter I treat like Day 1. Customer who has a job to finish. Clear writing. Long-term bets. Proof before posture.",
  ],
  signoff: "— Camden Burke",
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "Proof under the title.",
  items: [
    {
      label: "Education",
      title: "B.S. Computer Science",
      meta: "Arizona State University · Expected Dec 2027",
      body: "Algorithms, systems, and software that survives contact with reality.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Completed 2024",
      body: "UX, visual systems, and interfaces people can finish a job in.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and trustworthy handling of customer data.",
    },
  ],
} as const;

export const constellation = {
  eyebrow: "Companies",
  title: "The constellation.",
  items: [
    {
      name: "AppVantix",
      role: "Parent company",
      body: "Build and operate SaaS businesses. One founder accountable for the stack.",
      href: "https://appvantix.com",
      cta: "Enter AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Configure-to-order for custom manufacturers — rules, geometry, structured quotes.",
      href: "https://appvantix.com/formforge",
      cta: "Enter FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "Product reel",
  title: "Shop floor to software.",
  body: "Fabrication, automation, and FormForge product surfaces — one continuous loop.",
} as const;

export const offer = {
  eyebrow: "Next step",
  title: "Ready to talk?",
  body: "Partners, press, operators — write me. Want the product? Take the demo. Want the founder? Start here.",
  primaryCta: "Email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "Book the demo",
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
      name: "CompTIA Security+ ce (SY0-701)",
      credentialCategory: "certification",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;
