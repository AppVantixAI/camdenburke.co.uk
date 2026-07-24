/** Personal founder hub — Camden first; company & product as proof of the story */

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
    "Camden Burke — CEO & Founder of AppVantix. Coding since twelve: years of craft, AI and security software, FormForge for manufacturers.",
  ogImage: "/og-image.png",
  ogImageAlt: "Camden Burke — CEO & Founder of AppVantix",
  eyebrow: "CEO & Founder · AppVantix",
  /** Brand name is the hero signal; mission sentence supports underneath */
  headline: "Build useful software. Ship it. Make it hard to break.",
  subhead:
    "Founder of AppVantix. Coding since twelve — years of shipping, not a pivot. ASU full-stack, CompTIA Security+. I start companies when the work needs an owner.",
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

/** Trajectory strip — hard dates/roles only; no invented customer counts */
export const proof = {
  items: [
    { value: "12", label: "Coding since age" },
    { value: "2024", label: "ASU full-stack degree" },
    { value: "2029", label: "Sec+ valid through March" },
    { value: "CEO", label: "AppVantix founder" },
  ],
} as const;

/** Three doors into Camden's work — reach-out weighted as primary */
export const paths = {
  eyebrow: "Paths",
  title: "Three ways in.",
  body: "Work with me. See my company. See what I'm shipping.",
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
        "My company. Invent and operate SaaS with AI and security in the stack.",
      cta: "Enter AppVantix",
      href: "https://appvantix.com",
      external: true,
      primary: false,
    },
    {
      label: "03",
      title: "FormForge",
      detail:
        "My lead product. Configure-to-order for manufacturers — live 3D, shop rules, export-ready files.",
      cta: "Enter FormForge",
      href: "https://appvantix.com/formforge",
      external: true,
      primary: false,
    },
  ],
} as const;

/** Person first: story → qualifications → why CEO & Founder → what he's building */
export const letter = {
  eyebrow: "Background",
  title: "Years of craft. Then ownership.",
  /** Pull quote under the title — always attributed in the UI */
  epigraph: {
    text: "I start companies when the work needs an owner.",
    attribution: "Camden Burke",
  },
  paragraphs: [
    "I have been writing code since I was twelve. Not a late pivot — years of craft. Swift first. CodeDay at Lipscomb. Built what people needed, then kept going.",
    "That arc never stopped. When AI became useful, I went deep the same way I go deep on anything that matters. ASU full-stack, 2024. CompTIA Security+. I lead product and security from a base I earned — not borrowed.",
    "Useful software needs an owner who ships, hardens, and stays accountable. I founded AppVantix as CEO so that person is me — the same builder, with a company to match the work.",
    "AppVantix invents and operates SaaS with AI and security in the stack. FormForge is the lead product: live 3D, shop rules, export-ready files for manufacturers still quoting custom work by hand.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
} as const;

/**
 * Operating lines — Camden's own voice only.
 * Each line must carry a visible attribution in the UI (no orphan quotes).
 */
export const creed = {
  eyebrow: "Principles",
  title: "How I operate.",
  lines: [
    {
      line: "The goal is useful product, not theater.",
      attribution: "Camden Burke",
      receipt:
        "I ship FormForge: configure-to-order with live 3D, shop rules, and a quote inbox.",
    },
    {
      line: "Don't reinvent the wheel. Build the car.",
      attribution: "AppVantix operating principle",
      receipt:
        "AppVantix invents and operates SaaS — AI and security in the stack.",
    },
    {
      line: "Find the gap. Own the fix.",
      attribution: "Camden Burke",
      receipt:
        "Shops still quoting custom work by hand and email. That is why I started.",
    },
    {
      line: "Ship. Iterate. Make it hard to break.",
      attribution: "Camden Burke",
      receipt:
        "Constraint rules and export gates before files leave the system.",
    },
    {
      line: "Physics and code don't care about excuses.",
      attribution: "AppVantix operating principle",
      receipt: "Valid geometry or it does not ship.",
    },
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "Why the title sticks.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "Years of shipping made the call: set direction, make product bets, own outcomes. The title matches the work.",
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
  title: "Where my work lives.",
  items: [
    {
      name: "AppVantix",
      role: "Company I founded",
      body: "Invent and operate SaaS. AI and security in the stack.",
      href: "https://appvantix.com",
      cta: "Enter AppVantix",
      image: assets.constellation.appvantix.src,
      imageAlt: assets.constellation.appvantix.alt,
    },
    {
      name: "FormForge",
      role: "Product I ship",
      body: "Configure-to-order for manufacturers. Live 3D. Shop rules. Files when the config is right.",
      href: "https://appvantix.com/formforge",
      cta: "Enter FormForge",
      image: assets.constellation.formforge.src,
      imageAlt: assets.constellation.formforge.alt,
    },
  ],
} as const;

/** Secondary FormForge depth — product evidence of how Camden builds */
export const productDepth = {
  eyebrow: "FormForge",
  title: "Rules. Inbox. Loop closed.",
  body: "Proof of how I build: constraints that block bad exports, and an inbox that turns configs into quotes.",
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
  title: "Build with me.",
  quote: {
    text: "Useful product. Hardened systems. An owner who stays.",
    attribution: "Camden Burke",
  },
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
