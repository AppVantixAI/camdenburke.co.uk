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
    "Camden Burke is CEO & Founder of AppVantix — ASU B.S. Graphic Information Technology (Full Stack), CompTIA Security+, cybersecurity and AI-focused technical founder building FormForge.",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "Do you want software that ships?",
  subhead:
    "I build and operate product companies. Full-stack degree. Security+. Cybersecurity and AI as the operating lens. The demo is the argument.",
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
    { value: "ASU", label: "Full-stack degree" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "Cyber", label: "+ AI focused" },
    { value: "2", label: "Companies led" },
  ],
} as const;

export const letter = {
  eyebrow: "Day 1",
  title: "A short letter from the founder.",
  paragraphs: [
    "I started AppVantix to invent and operate software businesses — not to sell decks. If I cannot open the hood, I do not claim the product.",
    "FormForge is the flagship: configure-to-order software for custom manufacturers. Rules, geometry, structured quotes. It has to work on the shop floor, not only in a pitch room.",
    "I hold a B.S. in Graphic Information Technology (Full Stack Web Development) from Arizona State University, completed 2024, plus CompTIA Security+. My work is cybersecurity and AI focused — secure systems, trustworthy data, and products that use intelligence without theater.",
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
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "UX, visual systems, and shipping interfaces people can finish a job in.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and trustworthy handling of customer data — non-negotiable for B2B software.",
    },
    {
      label: "Focus",
      title: "Cybersecurity & AI",
      meta: "How I build and operate",
      body: "Secure-by-default product work and AI applied where it creates real leverage — not slideware.",
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
  knowsAbout: ["Cybersecurity", "Artificial Intelligence", "SaaS", "Full Stack Web Development"],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;
