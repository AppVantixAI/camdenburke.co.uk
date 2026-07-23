/** Corporate personal site — Industrial Clarity family with AppVantix / FormForge */

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
  location: "Knoxville Metropolitan Area · Remote sessions worldwide",
  metaTitle: "Camden Burke — CEO & Founder, AppVantix",
  description:
    "Camden Burke is CEO and Founder of AppVantix — a technical leader with dual ASU degrees in Computer Science and Graphic Information Technology, CompTIA Security+, and FormForge, configure-to-order software for manufacturers.",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "Building software businesses operators can trust.",
  subhead:
    "I lead AppVantix with computer science rigor, full-stack product craft, and Security+ depth — shipping FormForge for custom manufacturers who need configure-to-order without email chaos.",
  primaryCta: "Visit AppVantix",
  primaryCtaHref: "https://appvantix.com",
  secondaryCta: "See FormForge demo",
  secondaryCtaHref: "https://appvantix.com/demo",
  chips: [
    "B.S. Computer Science · ASU",
    "B.S. Graphic IT · Full Stack",
    "CompTIA Security+",
    "Knoxville, TN",
  ],
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#credentials", label: "Credentials" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  eyebrow: "About",
  title: "A technical CEO who still opens the product.",
  body: "I founded AppVantix to build and operate SaaS — not to sell slide decks. Dual degrees from Arizona State University (Computer Science and Graphic Information Technology / full stack) plus CompTIA Security+ shape how I lead: systems rigor, buyer-facing craft, and security as a product requirement.",
  points: [
    {
      title: "Leadership",
      body: "CEO accountability for AppVantix — strategy, product direction, and the integrity of what we ship.",
    },
    {
      title: "Engineering judgment",
      body: "Computer science training means architecture and tradeoffs stay founder-owned, not outsourced by default.",
    },
    {
      title: "Product craft",
      body: "Full-stack and UX background shows up in FormForge: branded configure experiences manufacturers can actually use.",
    },
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "Education and certification behind the title.",
  education: [
    {
      school: "Arizona State University",
      credential: "Bachelor of Science, Computer Science",
      when: "Expected December 2027",
      note: "Systems, algorithms, and software that has to hold up in production.",
    },
    {
      school: "Arizona State University",
      credential: "Bachelor of Science, Graphic Information Technology",
      concentration: "Full Stack Web Development",
      when: "Completed 2024",
      note: "UX, interface systems, and shipping end-to-end web products.",
    },
  ],
  certification: {
    name: "CompTIA Security+ ce (SY0-701)",
    when: "Valid March 2026 — March 2029",
    note: "Security literacy for B2B SaaS: identity, access, and trustworthy handling of customer data.",
  },
} as const;

export const portfolio = {
  eyebrow: "Portfolio",
  title: "Companies and products I lead.",
  items: [
    {
      name: "AppVantix",
      kind: "Agency",
      description:
        "Parent company that builds and operates SaaS businesses. FormForge is the spearhead — not a rename of AppVantix.",
      href: "https://appvantix.com",
      cta: "appvantix.com",
      image: "/hero-formforge.jpg",
      imageAlt: "FormForge product interface — an AppVantix SaaS product",
      mark: true,
    },
    {
      name: "FormForge",
      kind: "Flagship SaaS",
      description:
        "Configure-to-order for custom manufacturers: rule-bound families, branded share links, STEP when valid, structured quote intake.",
      href: "https://appvantix.com/formforge",
      cta: "Explore FormForge",
      image: "/product-rules.jpg",
      imageAlt: "FormForge rules and family configuration",
      mark: false,
    },
  ],
  gallery: {
    title: "Product in the wild",
    caption: "Live FormForge UI — sample family, not a mockup reel.",
    images: [
      {
        src: "/product-rules.jpg",
        alt: "FormForge rules and configuration",
      },
      {
        src: "/product-inbox.jpg",
        alt: "FormForge quote submissions inbox",
      },
    ],
  },
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Let’s talk about the work.",
  body: "Business and product inquiries through AppVantix. For FormForge, start with the live demo. For introductions, email or LinkedIn.",
  primaryCta: "See FormForge demo",
  primaryCtaHref: "https://appvantix.com/demo",
  secondaryCta: "hello@appvantix.com",
  secondaryCtaHref: "mailto:hello@appvantix.com",
  tertiaryCta: "LinkedIn",
  tertiaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
} as const;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: `${site.role}, ${site.company}`,
  description: site.description,
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Knoxville",
    addressRegion: "TN",
    addressCountry: "US",
  },
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
  knowsAbout: [
    "AppVantix",
    "FormForge",
    "Technical founding",
    "Computer Science",
    "Full stack web development",
    "CompTIA Security+",
    "Configure-to-order",
  ],
} as const;
