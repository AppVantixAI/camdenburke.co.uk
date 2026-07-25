/** Personal founder hub — Camden first; company & product as proof of the story */

export const site = {
  name: "Camden Burke",
  role: "CEO & Founder",
  company: "AppVantix",
  legal: "AppVantix LLC",
  url: "https://camdenburke.co.uk",
  companyUrl: "https://appvantix.com",
  formforgeUrl: "https://appvantix.com/formforge",
  lifevaultUrl: "https://lifevault.ai/#how",
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
    "Founder of AppVantix. Coding since twelve — years of craft, and real passion. ASU full-stack. CompTIA Security+. CEO because the work needed an owner.",
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
    lifevault: {
      src: "/hero-lifevault.jpg",
      alt: "LifeVault — digital time capsules for parents, early access waitlist",
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
  { href: "#creed", label: "Quotes" },
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

/** Doors into Camden's work — reach-out weighted as primary */
export const paths = {
  eyebrow: "Paths",
  title: "Four ways in.",
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
        "Configure-to-order for manufacturers — live 3D, shop rules, export-ready files.",
      cta: "Enter FormForge",
      href: "https://appvantix.com/formforge",
      external: true,
      primary: false,
    },
    {
      label: "04",
      title: "LifeVault.ai",
      detail:
        "Digital time capsules for parents — seal photos, videos, and letters that unlock on a day that matters.",
      cta: "Enter LifeVault",
      href: "https://lifevault.ai/#how",
      external: true,
      primary: false,
    },
  ],
} as const;

/** Person first: story → qualifications → why CEO & Founder → what he's building */
export const letter = {
  eyebrow: "Background",
  title: "Years of craft. Real passion.",
  /** Famous / film epigraph — verified attribution only */
  epigraph: {
    text: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    attribution: "Rocky Balboa — Rocky Balboa (2006)",
  },
  paragraphs: [
    "I have been writing code since I was twelve. Not a late pivot — years of craft, and real passion. Swift first. CodeDay at Lipscomb. Built what people needed, then kept going.",
    "That arc never stopped. When AI became useful, I went deep the same way I go deep on anything that matters. ASU full-stack, 2024. CompTIA Security+. Qualifications I earned — so technical leadership is grounded, not guessed.",
    "This site is about me as CEO & Founder: the story, the qualifications, and why the title sticks. Useful software needs an owner who ships, hardens, and stays accountable. I founded AppVantix so that person is me.",
    "I started AppVantix because manufacturers were still quoting pipe spools by hand — that's insane in 2026. FormForge is the lead product: live 3D, shop rules, export-ready files.",
  ],
  signoff: "— Camden Burke, CEO & Founder",
} as const;

/**
 * Famous / film quotes only — verified speakers & sources.
 * Themes: smarter not harder (leverage) + never quitting (grit).
 * Receipts under each line connect the quote to Camden's work (not attributed as his words).
 */
export const creed = {
  eyebrow: "Quotes",
  title: "Lines that stick.",
  lines: [
    {
      line: "Give me a place to stand, and I shall move the earth.",
      attribution:
        "Archimedes — quoted by Pappus of Alexandria, Synagoge, Book VIII (c. AD 340)",
      receipt:
        "Leverage over brute force: FormForge turns shop rules and live 3D into configure-to-order that scales.",
    },
    {
      line: "The person doing the job knows far more than anyone else as to the best way of doing that job.",
      attribution: "Allan H. Mogensen — Father of Work Simplification (1930s)",
      receipt:
        "Build with the people who live the work — manufacturers quoting by hand told us what FormForge had to fix.",
    },
    {
      line: "Never give in, never give in, never, never, never, never—in nothing, great or small, large or petty—never give in except to convictions of honour and good sense.",
      attribution: "Winston Churchill — Harrow School speech (29 Oct 1941)",
      receipt:
        "Coding since twelve. ASU. Security+. AppVantix. Keep shipping when the hard parts show up.",
    },
    {
      line: "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
      attribution: "Rocky Balboa — Rocky Balboa (2006)",
      receipt:
        "Products break. Markets shift. You take the hit, fix it, and move the next version forward.",
    },
    {
      line: "Results! Why, man, I have gotten a lot of results! I know several thousand things that won't work.",
      attribution:
        "Thomas Edison — recounted by Walter S. Mallory in Edison: His Life and Inventions (1910)",
      receipt:
        "Persistence with receipts: each failed path narrows the ones that ship.",
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
    { label: "LifeVault", href: "https://lifevault.ai/#how" },
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
    {
      name: "LifeVault.ai",
      role: "Product I ship",
      body: "Digital time capsules for parents. Seal photos, videos, and letters now — they unlock on a birthday, graduation, or milestone you choose.",
      href: "https://lifevault.ai/#how",
      cta: "Enter LifeVault",
      image: assets.constellation.lifevault.src,
      imageAlt: assets.constellation.lifevault.alt,
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
    text: "Never give in except to convictions of honour and good sense.",
    attribution: "Winston Churchill — Harrow School (29 Oct 1941)",
  },
  body: "Email for work. Paths above for AppVantix, FormForge, and LifeVault.",
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
      sameAs: [site.linkedin, site.github, site.companyUrl, site.lifevaultUrl],
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
