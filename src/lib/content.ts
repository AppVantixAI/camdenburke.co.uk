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
    "Camden Burke. CEO of AppVantix. AI and cybersecurity SaaS. Want work, the company, or FormForge? Make a move.",
  ogImage: "/og-image.png",
  ogImageAlt: "Camden Burke — CEO & Founder of AppVantix",
  eyebrow: "CEO & Founder · AppVantix",
  /** Brand name is the hero signal; catchphrase supports underneath */
  headline: "I don't have dreams. I have closing arguments.",
  subhead:
    "I run AppVantix. We build software that wins: AI, security, and FormForge for manufacturers done losing deals to slow quotes. Want in? Pick a door.",
  primaryCta: "Talk to me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "See your options",
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
  { href: "#paths", label: "Options" },
  { href: "#letter", label: "Story" },
  { href: "#creed", label: "Rules" },
  { href: "#constellation", label: "Firms" },
  { href: "#credentials", label: "Record" },
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
  eyebrow: "Your move",
  title: "Three doors. Don't knock twice.",
  body: "Work with me. Visit the company. Or go straight to the product. Choose. Execute.",
  items: [
    {
      label: "01",
      title: "Work with me",
      detail:
        "Partnerships, builds, press, founder conversations. Write me. I read every note. Winners don't wait for introductions.",
      cta: "Email Camden",
      href: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
      external: false,
      primary: true,
      secondaryCta: null,
      secondaryHref: null,
    },
    {
      label: "02",
      title: "See AppVantix",
      detail:
        "The company I built. We invent and run SaaS with AI and security in the foundation. Look around. Then decide.",
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
        "Configure-to-order for manufacturers. Live 3D. Rules that protect the floor. Files when the config is clean. Product page or demo. Your call.",
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
  eyebrow: "How I got here",
  title: "I didn't ask for permission. I built the case.",
  paragraphs: [
    "I started coding at twelve. Swift was first. A CodeDay award at Lipscomb settled the argument: this wasn't a hobby. It was the job.",
    "I built what needed building. Python bots. Sites. Apps on every platform I could reach. See a need, fill a need. That still wins.",
    "When AI became useful, I didn't watch from the balcony. I went in. Models. Automation. Then tools that act. Plain language in. Real work out.",
    "Today I'm CEO and Founder of AppVantix. I hire the people who build. I own vision, product, and security. FormForge is the lead product: configure-to-order for shops done quoting from one-off CAD.",
    "I don't make excuses when the other side plays hard. If you want to work with me, write. If you want the company or the product, the doors are open. Walk through one.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
  cta: "Email Camden",
  ctaHref: "mailto:hello@appvantix.com?subject=Work%20with%20Camden",
  secondaryCta: "Back to options",
  secondaryCtaHref: "#paths",
} as const;

export const creed = {
  eyebrow: "House rules",
  title: "What I live by in the room.",
  lines: [
    "I don't have dreams. I have goals.",
    "First impressions last. Make yours count.",
    "Winners don't make excuses when the other side plays the game.",
    "Don't reinvent the wheel. Build the damn car.",
    "When you're backed against the wall, break the goddamn thing down.",
  ],
} as const;

export const credentials = {
  eyebrow: "On the record",
  title: "Paper that holds up in court.",
  items: [
    {
      label: "Role",
      title: "CEO & Founder",
      meta: "AppVantix LLC",
      body: "I set the strategy, make the bets, and own the outcome. The title isn't for show. It's the job.",
    },
    {
      label: "Focus",
      title: "Artificial Intelligence & Cybersecurity",
      meta: "Where I put my attention",
      body: "Models, automation, tools that act. Security isn't a closing exhibit. It's how we build.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Arizona State University · Completed 2024",
      body: "I got the full-stack foundation so I can lead technical work with judgment, not theater.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, customer data. In B2B, if you can't protect it, you don't deserve the client.",
    },
  ],
} as const;

export const constellation = {
  eyebrow: "The portfolio",
  title: "Where the power sits.",
  items: [
    {
      name: "AppVantix",
      role: "The firm",
      body: "I founded it. I run it. We invent and operate SaaS with AI and security in the stack. That's the house.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: assets.constellation.appvantix.src,
      imageAlt: assets.constellation.appvantix.alt,
    },
    {
      name: "FormForge",
      role: "The closer",
      body: "Configure-to-order for manufacturers. Live 3D, shop-floor rules, files ready when the config checks out. This is how deals stop leaking.",
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
  title: "The exhibits that win.",
  body: "The 3D preview gets them in the room. The rules and the inbox close it.",
  cta: "Visit FormForge",
  href: "https://appvantix.com/formforge",
  items: [
    {
      label: "01",
      title: "Rules builder",
      detail:
        "Wall thickness, bolt clearance, export gates. Constraints that keep bad work off the floor.",
      image: assets.productDepth.rules.src,
      imageAlt: assets.productDepth.rules.alt,
    },
    {
      label: "02",
      title: "Submissions inbox",
      detail:
        "Quote and configure requests land ready for review. Not lost in email. Not left to chance.",
      image: assets.productDepth.inbox.src,
      imageAlt: assets.productDepth.inbox.alt,
    },
  ],
} as const;

/** Final conversion band — repeats the three doors without burying the ask */
export const close = {
  eyebrow: "Last word",
  title: "You know what you want. Take it.",
  body: "Email me for work. Visit AppVantix for the company. Open FormForge for the product. Hesitation is for the other guy.",
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
