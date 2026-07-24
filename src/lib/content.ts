/** Personal CEO hub — trust first, three doors: reach out · AppVantix · FormForge */

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
    "Camden Burke builds AppVantix: AI and cybersecurity SaaS. Email for work, visit the company, or open FormForge for manufacturers.",
  ogImage: "/og-image.png",
  ogImageAlt: "Camden Burke — CEO & Founder of AppVantix",
  eyebrow: "CEO & Founder · AppVantix",
  /** Brand name is the hero signal; catchphrase supports underneath */
  headline: "I don't reinvent the wheel. I build the car.",
  subhead:
    "I started writing code at twelve. Now I run AppVantix, shipping AI and security into the products we build. Email me to work together, or go straight to the company and FormForge.",
  primaryCta: "Reach out",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "Three ways in",
  secondaryCtaHref: "#paths",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-poster.jpg",
} as const;

/**
 * Locked media board — every public still has a job.
 */
export const assets = {
  hero: {
    video: "/hero-reel.mp4",
    poster: "/hero-poster.jpg",
    note: "Industrial fabrication reel + FormForge UI stills (Mixkit + AppVantix).",
  },
  constellation: {
    appvantix: {
      src: "/hero-poster.jpg",
      alt: "Metal fabrication floor — the industries AppVantix builds software for",
    },
    formforge: {
      src: "/hero-formforge.jpg",
      alt: "FormForge configure-to-order UI with live 3D pipe spool preview",
    },
  },
  productDepth: {
    rules: {
      src: "/product-rules.jpg",
      alt: "FormForge rules builder with manufacturing constraint expressions",
    },
    inbox: {
      src: "/product-inbox.jpg",
      alt: "FormForge submissions inbox with quote and configuration requests",
    },
  },
  mark: "/appvantix-mark.svg",
  og: "/og-image.png",
} as const;

export const nav = [
  { href: "#paths", label: "Work with me" },
  { href: "#letter", label: "Story" },
  { href: "#creed", label: "Principles" },
  { href: "#constellation", label: "Companies" },
  { href: "#credentials", label: "Credentials" },
] as const;

export const proof = {
  items: [
    { value: "12", label: "Coding since twelve" },
    { value: "CEO", label: "AppVantix founder" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "Full-stack degree" },
  ],
} as const;

/** Three conversion paths — equal clarity, reach-out weighted as primary */
export const paths = {
  eyebrow: "Start here",
  title: "Three ways in.",
  body: "Email me for work. Visit AppVantix for the company. Open FormForge for the product.",
  items: [
    {
      label: "01",
      title: "Reach out for work",
      detail:
        "Partnerships, builds, press, or a founder chat. I read every note.",
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
        "The company I run. We invent and operate SaaS products with AI and security built in from day one.",
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
        "Configure-to-order software for manufacturers. Open the product page or book a demo.",
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
  eyebrow: "My story",
  title: "Code found me early. I stayed with it.",
  paragraphs: [
    "Swift was my first language. A CodeDay award at Lipscomb settled it: this was the work, not a side hobby.",
    "I built what people needed. Python bots. Sites on the side. Apps on every platform I could reach. See a need, fill a need. That still guides how I move.",
    "When AI became useful for real work, I went deep on how the models work and where automation pays off. Then MCPs showed up: models that can act. Plain language in. Real work out.",
    "Today I am CEO and Founder of AppVantix. I hire the people who build. I answer for vision, product direction, and security. FormForge is our lead product: configure-to-order for shops tired of quoting from one-off CAD.",
    "I don't make excuses when the other side plays the game. To work with me, write. For the company or the product, use the doors above.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
  cta: "Email Camden",
  ctaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "Back to three ways in",
  secondaryCtaHref: "#paths",
} as const;

export const creed = {
  eyebrow: "Principles",
  title: "Lines I live by.",
  lines: [
    "Don't reinvent the wheel. Just build the damn car.",
    "See a need, fill a need.",
    "Winners don't make excuses when the other side plays the game.",
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "On the record.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "I set direction, make the product bets, and own how we show up. The CEO seat is the job I do every day.",
    },
    {
      label: "Focus",
      title: "Artificial Intelligence & Cybersecurity",
      meta: "Where I put my attention",
      body: "Models, automation, and MCPs that put tools in the model's hands. Security is part of how we design software, not a patch at the end.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "I wanted a full-stack base so I could lead technical work with a clear eye, not guesses.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and customer data matter in B2B. I hold that bar.",
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
      body: "I founded and run AppVantix. We invent and operate SaaS products with AI and security in the stack.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: assets.constellation.appvantix.src,
      imageAlt: assets.constellation.appvantix.alt,
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Configure-to-order for manufacturers. Live 3D, shop-floor rules, and files ready when the config checks out.",
      href: "https://appvantix.com/formforge",
      cta: "Visit FormForge",
      image: assets.constellation.formforge.src,
      imageAlt: assets.constellation.formforge.alt,
    },
  ],
} as const;

/** Secondary FormForge proof — rules engine + submissions inbox */
export const productDepth = {
  eyebrow: "Inside FormForge",
  title: "Shop rules. Quote inbox.",
  body: "Past the 3D preview: constraints that stop bad exports, and a submissions line that turns configs into quotes.",
  cta: "Visit FormForge",
  href: "https://appvantix.com/formforge",
  items: [
    {
      label: "01",
      title: "Rules builder",
      detail:
        "Wall thickness, bolt clearance, export gates as rules the shop can trust.",
      image: assets.productDepth.rules.src,
      imageAlt: assets.productDepth.rules.alt,
    },
    {
      label: "02",
      title: "Submissions inbox",
      detail:
        "Quote and configure requests land ready for review, not lost in email.",
      image: assets.productDepth.inbox.src,
      imageAlt: assets.productDepth.inbox.alt,
    },
  ],
} as const;

/** Final conversion band — repeats the three doors without burying the ask */
export const close = {
  eyebrow: "Next step",
  title: "Pick a door.",
  body: "Email me for work. Visit AppVantix for the company. Open FormForge for the product.",
  primaryCta: "Email Camden",
  secondaryCta: "Visit AppVantix",
  tertiaryCta: "See FormForge",
} as const;

/** JSON-LD graph: WebSite + Person for richer SERP / Knowledge Panel signals */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      givenName: "Camden",
      familyName: "Burke",
      jobTitle: `${site.role}, ${site.company}`,
      description: site.description,
      url: site.url,
      email: site.email,
      image: `${site.url}${site.ogImage}`,
      sameAs: [site.linkedin, site.github, site.companyUrl],
      homeLocation: {
        "@type": "Place",
        name: "Knoxville, Tennessee",
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Arizona State University" },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "B.S. Graphic Information Technology — Full Stack Web Development",
          credentialCategory: "degree",
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: "Arizona State University",
          },
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
        "Manufacturing software",
        "Executive Leadership",
        "Full Stack Web Development",
      ],
      worksFor: {
        "@type": "Organization",
        "@id": `${site.companyUrl}/#organization`,
        name: site.legal,
        url: site.companyUrl,
        founder: { "@id": `${site.url}/#person` },
      },
      mainEntityOfPage: { "@id": `${site.url}/#website` },
    },
  ],
} as const;

/** Alias for older imports */
export const personSchema = jsonLd;
