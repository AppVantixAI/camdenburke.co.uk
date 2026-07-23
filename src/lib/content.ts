/** Personal CEO hub — three paths: reach out · AppVantix · FormForge */

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
  emailHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  linkedin: "https://www.linkedin.com/in/camdenburkedev",
  github: "https://github.com/cburke12",
  location: "Knoxville · Remote worldwide",
  metaTitle: "Camden Burke — CEO & Founder, AppVantix",
  description:
    "Camden Burke is CEO & Founder of AppVantix. Reach out for work, explore AppVantix, or see FormForge — configure-to-order software for manufacturers.",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "I build and lead product companies.",
  subhead:
    "AppVantix is the company. FormForge is a flagship product. If you want to work with me, start a conversation — or go straight to the business and the products.",
  primaryCta: "Reach out",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "Three ways in",
  secondaryCtaHref: "#paths",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

export const nav = [
  { href: "#paths", label: "Work with me" },
  { href: "#letter", label: "Letter" },
  { href: "#constellation", label: "Companies" },
  { href: "#credentials", label: "Credentials" },
  { href: "#reel", label: "Reel" },
] as const;

export const proof = {
  items: [
    { value: "CEO", label: "Founder-led companies" },
    { value: "AI", label: "+ Security operating lens" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "Full-stack degree" },
  ],
} as const;

/** Three conversion paths — equal clarity, reach-out weighted as primary */
export const paths = {
  eyebrow: "What do you need?",
  title: "Three ways in.",
  body: "Reach out for work. Visit the company. Or go straight to a product. Pick the door that matches why you’re here.",
  items: [
    {
      label: "01",
      title: "Reach out for work",
      detail:
        "Partnerships, builds, press, or a founder conversation. Write me — I read it.",
      cta: "Email Camden",
      href: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
      external: false,
      primary: true,
      secondaryCta: null,
      secondaryHref: null,
    },
    {
      label: "02",
      title: "Explore AppVantix",
      detail:
        "The company I run. We invent and operate SaaS businesses — AI and security in the operating model.",
      cta: "Visit AppVantix",
      href: "https://appvantix.com",
      external: true,
      primary: false,
      secondaryCta: null,
      secondaryHref: null,
    },
    {
      label: "03",
      title: "See FormForge",
      detail:
        "Flagship product: configure-to-order software for manufacturers. Product page or book a demo.",
      cta: "Visit FormForge",
      href: "https://appvantix.com/formforge",
      external: true,
      primary: false,
      secondaryCta: "Book a demo",
      secondaryHref: "https://appvantix.com/demo",
    },
  ],
} as const;

export const letter = {
  eyebrow: "From the CEO",
  title: "A short note.",
  paragraphs: [
    "I am CEO and Founder of AppVantix. My job is leadership — vision, product direction, and the security posture of what we ship. I hire and lead the people who build.",
    "AppVantix invents and operates software businesses. FormForge is a flagship under that umbrella: configure-to-order for manufacturers. If quoting still runs through one-off CAD, that product is for you.",
    "If you want to work with me, email. If you want the company or a product, the doors are open above. Either way — clear next step, no theater.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
  cta: "Email Camden",
  ctaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "Back to three ways in",
  secondaryCtaHref: "#paths",
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "Proof under the title.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "Accountable for strategy, product portfolio, and how the companies under AppVantix operate.",
    },
    {
      label: "Focus",
      title: "AI & Cybersecurity",
      meta: "Operating lens",
      body: "Security-first systems and AI applied where it creates real leverage — not theater.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "Full-stack product craft as a foundation for leading technical companies.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and trustworthy handling of customer data — non-negotiable for B2B software.",
    },
  ],
} as const;

export const constellation = {
  eyebrow: "Companies & products",
  title: "Where to go next.",
  items: [
    {
      name: "AppVantix",
      role: "The company",
      body: "CEO & Founder seat. We build and operate SaaS businesses — AI and security in how we run.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Configure-to-order software for manufacturers. Explore the product or book a demo.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "Reel",
  title: "Companies in motion.",
  body: "A look at the industries and products under founder leadership — then pick a path: email, AppVantix, or FormForge.",
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
    "SaaS",
    "Configure-to-order",
    "Executive Leadership",
    "Full Stack Web Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;
