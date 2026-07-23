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
    "Camden Burke is CEO & Founder of AppVantix — AI and cybersecurity SaaS. Reach out for work, explore AppVantix, or see FormForge configure-to-order for manufacturers.",
  ogImage: "/og-image.png",
  ogImageAlt: "Camden Burke — CEO & Founder of AppVantix",
  eyebrow: "CEO & Founder · AppVantix",
  /** Brand name is the hero signal; catchphrase supports underneath */
  headline: "I don't reinvent the wheel. I build the car.",
  subhead:
    "I've been coding since I was twelve. Today I lead AppVantix — AI and security in how we operate. If you want to work with me, write. Or go straight to the company and the products.",
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
    { value: "12", label: "Coding since age twelve" },
    { value: "CEO", label: "AppVantix founder" },
    { value: "Sec+", label: "CompTIA certified" },
    { value: "ASU", label: "Full-stack degree" },
  ],
} as const;

/** Three conversion paths — equal clarity, reach-out weighted as primary */
export const paths = {
  eyebrow: "What do you need?",
  title: "Three ways in.",
  body: "Reach out for work. Visit the company. Or go straight to a product. Pick the door that matches why you're here.",
  items: [
    {
      label: "01",
      title: "Reach out for work",
      detail:
        "Partnerships, builds, press, or a founder conversation. Write me — I read every note.",
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
  eyebrow: "A little of my story",
  title: "I fell in love with code young — and I never left the work.",
  paragraphs: [
    "I've been coding since I was twelve. Swift was my first language. Winning an award at a CodeDay at Lipscomb made it real — this wasn't a hobby anymore. It was the path.",
    "I built what needed building. Python bots. Sites on the side. Apps on every platform I could reach. See a need, fill a need. That still governs how I move.",
    "When artificial intelligence became useful — not theoretical — I went in. How the models work. Automation. Then MCPs arrived, and the game changed: models with hands. Plain language in. Real work out.",
    "Today I'm CEO and Founder of AppVantix. I hire the people who build. I stay accountable for vision, product direction, and security. FormForge is our flagship: configure-to-order for manufacturers who are done quoting from one-off CAD.",
    "I don't make excuses when the other side plays the game. If you want to work with me, write. If you want the company or the product, the doors are open above.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
  cta: "Email Camden",
  ctaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "Back to three ways in",
  secondaryCtaHref: "#paths",
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
  eyebrow: "Credentials",
  title: "Competence, on the record.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "I set direction, make the product bets, and answer for how we show up. Leadership isn't a title I borrowed — it's the job I do.",
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
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "I wanted the full-stack foundation so I could lead technical work with judgment — not guesswork.",
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
  eyebrow: "Companies & products",
  title: "Where to go next.",
  items: [
    {
      name: "AppVantix",
      role: "The company",
      body: "CEO & Founder seat. We invent and operate SaaS businesses — AI and security baked into how we run.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: assets.constellation.appvantix.src,
      imageAlt: assets.constellation.appvantix.alt,
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Configure-to-order for manufacturers. Live 3D, rules that protect the shop floor, files ready when the config is right.",
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
  title: "Rules that protect the floor. Inbox that closes the loop.",
  body: "Beyond the 3D preview: manufacturing constraints that block bad exports, and a submissions line that turns configs into quotes.",
  cta: "Visit FormForge",
  href: "https://appvantix.com/formforge",
  items: [
    {
      label: "01",
      title: "Rules builder",
      detail: "Wall thickness, bolt clearance, export gates — expressed as constraints the shop can trust.",
      image: assets.productDepth.rules.src,
      imageAlt: assets.productDepth.rules.alt,
    },
    {
      label: "02",
      title: "Submissions inbox",
      detail: "Quote and configure requests land ready for review — not lost in email threads.",
      image: assets.productDepth.inbox.src,
      imageAlt: assets.productDepth.inbox.alt,
    },
  ],
} as const;

/** Final conversion band — repeats the three doors without burying the ask */
export const close = {
  eyebrow: "Next step",
  title: "Ready when you are.",
  body: "Email me for work. Visit AppVantix for the company. Open FormForge for the product. No maze — just a clear move.",
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
