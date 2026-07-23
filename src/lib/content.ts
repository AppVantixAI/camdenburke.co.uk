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
  metaTitle: "Camden Burke — CEO & Founder · AI & Security",
  description:
    "Camden Burke is CEO & Founder of AppVantix — AI and cybersecurity focused. ASU B.S. Graphic Information Technology (Full Stack), CompTIA Security+. Leads product companies including FormForge.",
  eyebrow: "CEO & Founder · AI & Security",
  headline: "I lead companies that ship.",
  subhead:
    "Not a CAD desk. Not a slide deck. I am the founder accountable for strategy, security, and AI-native product companies — starting with AppVantix.",
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
    { value: "CEO", label: "Founder-led" },
    { value: "AI", label: "+ Security focus" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "Full-stack degree" },
  ],
} as const;

export const letter = {
  eyebrow: "Day 1",
  title: "A short letter from the CEO.",
  paragraphs: [
    "I am CEO and Founder of AppVantix. My job is leadership — vision, capital allocation, product direction, and the security posture of what we ship. I am not a CAD modeler. I hire and lead the people who build.",
    "AppVantix invents and operates software businesses. FormForge is a flagship product company under that umbrella — software for manufacturers — led from the executive seat, not from a drafting table.",
    "I hold a B.S. in Graphic Information Technology (Full Stack) from Arizona State University (2024) and CompTIA Security+. Cybersecurity and AI are how I evaluate risk, architecture, and leverage — not hobbies on a résumé.",
    "Day 1 every quarter: clear writing, long-term bets, proof before posture. Customers and operators get a founder who owns the outcome.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
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
  eyebrow: "Companies",
  title: "What I lead.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "The company I run. We build and operate SaaS businesses — AI and security in the operating model.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product company",
      body: "A product I lead as CEO — configure-to-order software for manufacturers. The team ships the CAD and rules; I own the company.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const reel = {
  eyebrow: "Reel",
  title: "Companies in motion.",
  body: "The industries we serve and the products we operate — under founder leadership, not as a modeling portfolio.",
} as const;

export const offer = {
  eyebrow: "Next step",
  title: "Talk to the founder.",
  body: "Partners, press, operators — write me. Want a product demo? Book it. Want the CEO? Start here.",
  primaryCta: "Email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "Product demo",
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
    "SaaS",
    "Executive Leadership",
    "Full Stack Web Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;
