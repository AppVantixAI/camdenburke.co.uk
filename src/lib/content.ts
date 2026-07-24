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
    "Camden Burke, CEO of AppVantix. Build useful AI and security software. Email, company, or FormForge.",
  ogImage: "/og-image.png",
  ogImageAlt: "Camden Burke — CEO & Founder of AppVantix",
  eyebrow: "CEO & Founder · AppVantix",
  /** Brand name is the hero signal; mission sentence supports underneath */
  headline: "Build useful software. Ship it. Make it hard to break.",
  subhead:
    "AppVantix builds AI and security into the stack. FormForge ships configure-to-order for manufacturers who need it to work.",
  primaryCta: "Email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "View Paths",
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
  { href: "#paths", label: "Paths" },
  { href: "#letter", label: "Background" },
  { href: "#creed", label: "Principles" },
  { href: "#constellation", label: "Work" },
  { href: "#credentials", label: "Credentials" },
] as const;

/** Hard dates and roles already present in credentials — no invented customer counts */
export const proof = {
  items: [
    { value: "2024", label: "ASU full-stack degree" },
    { value: "2029", label: "Sec+ valid through March" },
    { value: "CEO", label: "AppVantix founder" },
    { value: "12", label: "Coding since age" },
  ],
} as const;

/** Three conversion paths — equal clarity, reach-out weighted as primary */
export const paths = {
  eyebrow: "Paths",
  title: "Three ways in.",
  body: "Work. Company. Product. Choose one.",
  items: [
    {
      label: "01",
      title: "Work with me",
      detail:
        "Partnerships, builds, press, founder talks. Email me — I read every note.",
      cta: "Email Camden",
      href: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
      external: false,
      primary: true,
    },
    {
      label: "02",
      title: "AppVantix",
      detail:
        "The company. Invent and operate SaaS with AI and security in the stack.",
      cta: "Enter AppVantix",
      href: "https://appvantix.com",
      external: true,
      primary: false,
    },
    {
      label: "03",
      title: "FormForge",
      detail:
        "Configure-to-order for manufacturers. Live 3D, shop rules, export-ready files.",
      cta: "Enter FormForge",
      href: "https://appvantix.com/formforge",
      external: true,
      primary: false,
    },
  ],
} as const;

/** Company thesis first; personal trajectory shorter and later */
export const letter = {
  eyebrow: "Background",
  title: "Built for the quote that breaks.",
  paragraphs: [
    "Custom manufacturers still quote configure-to-order work by hand — email threads, spreadsheets, one-off CAD. Slow. Error-prone. Hard to scale.",
    "AppVantix invents and operates SaaS with AI and security in the stack. FormForge is the lead product: live 3D, shop rules, export-ready files, and an inbox that turns configs into quotes.",
    "I run it as CEO and Founder — vision, product, security. Hire builders. Own outcomes.",
    "Started coding at 12. Swift, then CodeDay at Lipscomb. Built what people needed. When AI became useful, I went deep. ASU full-stack, 2024. CompTIA Security+.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
} as const;

export const creed = {
  eyebrow: "Principles",
  title: "First principles.",
  lines: [
    {
      line: "The goal is useful product, not theater.",
      receipt:
        "FormForge: configure-to-order with live 3D, shop rules, and a quote inbox.",
    },
    {
      line: "Don't reinvent the wheel. Build the car.",
      receipt:
        "AppVantix invents and operates SaaS — AI and security in the stack.",
    },
    {
      line: "See a need, fill a need.",
      receipt:
        "Shops still quoting custom work by hand and email. That is the job.",
    },
    {
      line: "Ship. Iterate. Make it hard to break.",
      receipt:
        "Constraint rules and export gates before files leave the system.",
    },
    {
      line: "Physics and code don't care about excuses.",
      receipt: "Valid geometry or it does not ship.",
    },
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "Signal, not noise.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "Set direction. Make product bets. Own outcomes.",
    },
    {
      label: "Focus",
      title: "Artificial Intelligence & Cybersecurity",
      meta: "Core work",
      body: "Models, automation, tools that act. Security is part of the design, not a patch.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "Full-stack base so technical leadership is grounded, not guessed.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, customer data. Required for serious B2B software.",
    },
  ],
  /** Outward trust anchors — real profiles/sites only, no press invention */
  verify: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/camdenburkedev" },
    { label: "AppVantix", href: "https://appvantix.com" },
    { label: "GitHub", href: "https://github.com/cburke12" },
  ],
} as const;

export const constellation = {
  eyebrow: "Work",
  title: "Where the work lives.",
  items: [
    {
      name: "AppVantix",
      role: "Company",
      body: "Invent and operate SaaS. AI and security in the stack.",
      href: "https://appvantix.com",
      cta: "Enter AppVantix",
      image: assets.constellation.appvantix.src,
      imageAlt: assets.constellation.appvantix.alt,
    },
    {
      name: "FormForge",
      role: "Product",
      body: "Configure-to-order for manufacturers. Live 3D. Shop rules. Files when the config is right.",
      href: "https://appvantix.com/formforge",
      cta: "Enter FormForge",
      image: assets.constellation.formforge.src,
      imageAlt: assets.constellation.formforge.alt,
    },
  ],
} as const;

/** Secondary FormForge proof — rules engine + submissions inbox */
export const productDepth = {
  eyebrow: "FormForge",
  title: "Rules. Inbox. Loop closed.",
  body: "3D preview matters. Constraints that block bad exports and an inbox that turns configs into quotes matter more.",
  items: [
    {
      label: "01",
      title: "Rules builder",
      detail:
        "Wall thickness, bolt clearance, export gates. Constraints the shop can trust.",
      image: assets.productDepth.rules.src,
      imageAlt: assets.productDepth.rules.alt,
    },
    {
      label: "02",
      title: "Submissions inbox",
      detail:
        "Quote and configure requests ready for review. Not lost in email.",
      image: assets.productDepth.inbox.src,
      imageAlt: assets.productDepth.inbox.alt,
    },
  ],
} as const;

/** Final band — one clear ask; other doors live in Paths */
export const close = {
  eyebrow: "Next",
  title: "Build with us.",
  body: "Email for work. Paths above for AppVantix and FormForge.",
  primaryCta: "Email Camden",
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
