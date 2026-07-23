/** Camden Burke founder site — SoT for all marketing copy */

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
    "Camden Burke is CEO and Founder of AppVantix — a technical founder with dual degrees in Computer Science and Graphic Information Technology, CompTIA Security+ certification, and FormForge, configure-to-order SaaS for custom manufacturers.",
  eyebrow: "CEO & Founder · AppVantix",
  headline: "A technical founder who designs, secures, and ships.",
  subhead:
    "I lead AppVantix with dual Arizona State University degrees in Computer Science and Graphic Information Technology, CompTIA Security+ depth, and a product you can click — FormForge — not a deck about AI ambition.",
  primaryCta: "See the FormForge demo",
  primaryCtaHref: "https://appvantix.com/demo",
  secondaryCta: "Email AppVantix",
  secondaryCtaHref: "mailto:hello@appvantix.com",
  credibility:
    "ASU · B.S. Computer Science · B.S. Graphic IT (Full Stack) · CompTIA Security+",
} as const;

export const nav = [
  { href: "#positioning", label: "Value" },
  { href: "#credentials", label: "Credentials" },
  { href: "#work", label: "Work" },
  { href: "#method", label: "Method" },
  { href: "#offer", label: "Offer" },
  { href: "#contact", label: "Contact" },
] as const;

export const positioning = {
  eyebrow: "Value",
  title: "High-trust SaaS for shops that cannot afford vaporware.",
  body: "Manufacturers evaluating configure-to-order software are buying judgment as much as features. I founded AppVantix as a technical CEO — computer science, full-stack product craft, and security literacy — so FormForge is built, demoed, and piloted by someone who can own the stack end to end.",
  points: [
    {
      title: "Who I help",
      body: "Owners, sales leads, and engineering leads at custom / configure-to-order manufacturers who need valid quotes without email chaos.",
    },
    {
      title: "Why I am credible",
      body: "Dual ASU degrees (CS + Graphic IT / full stack), CompTIA Security+, and live product you can exercise with demo data before you buy.",
    },
    {
      title: "What you get",
      body: "An agency that ships SaaS (AppVantix) and a flagship product (FormForge) with a firm Pilot path — not an open-ended consultancy retainer.",
    },
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "The foundation behind the founder title.",
  body: "CEO is not a costume. Buyers get a founder who can speak engineering, design the buyer experience, and treat security as a product requirement — then prove it in a live demo.",
  education: [
    {
      school: "Arizona State University",
      credential: "Bachelor of Science, Computer Science",
      detail: "Expected December 2027",
      framing:
        "Systems, algorithms, and software rigor — the engineering backbone behind FormForge and AppVantix products.",
    },
    {
      school: "Arizona State University",
      credential:
        "Bachelor of Science, Graphic Information Technology · Full Stack Web Development",
      detail: "Completed 2024",
      framing:
        "UX, interface craft, and full-stack delivery — so product families feel branded, usable, and shippable.",
    },
  ],
  certifications: [
    {
      name: "CompTIA Security+ ce (SY0-701)",
      detail: "Certified · Valid through March 2029",
      framing:
        "Security literacy for B2B SaaS: least privilege, identity hygiene, and trustworthy handling of customer configuration data.",
    },
  ],
  capabilities: [
    {
      title: "Product & full stack",
      body: "From parametric rules and 3D preview to quote intake — I build and operate the surfaces manufacturers actually use.",
    },
    {
      title: "Design systems & UX",
      body: "Graphic IT training shows up as clear configure experiences, not generic SaaS chrome bolted onto CAD chaos.",
    },
    {
      title: "Security-minded operations",
      body: "Security+ plus hands-on identity and Windows environments — useful when manufacturing buyers ask how access and data are handled.",
    },
    {
      title: "Operator judgment",
      body: "Prior ownership and platform work taught DNS, vendor risk, escalation, and documentation — how real businesses stay online.",
    },
  ],
} as const;

export const work = {
  eyebrow: "Work",
  title: "Where those credentials turn into product.",
  items: [
    {
      kind: "Agency",
      name: "AppVantix",
      description:
        "I founded and lead AppVantix to build and operate SaaS businesses. Technical founder ownership — architecture, product, and go-to-market — not a figurehead title.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      mark: true,
    },
    {
      kind: "Flagship SaaS",
      name: "FormForge",
      description:
        "Configure-to-order workflow software for custom manufacturers. Rule-bound families, branded share links, STEP when valid, quote inbox — engineered and designed under my direction.",
      href: "https://appvantix.com/formforge",
      cta: "Explore FormForge",
      mark: false,
    },
  ],
} as const;

export const method = {
  eyebrow: "Method",
  title: "How a technical CEO runs the company",
  items: [
    {
      title: "Ship what you can demo",
      body: "Prospects click FormForge with demo data. Dual CS + full-stack background means the demo is the product, not a slide about the product.",
    },
    {
      title: "Separate agency from product",
      body: "AppVantix is the parent. FormForge is what manufacturers buy. That clarity protects both brand and deal quality.",
    },
    {
      title: "Price like an operator",
      body: "Public firm Pilot at $3,500. Hosted catalog scoped after Pilot — Security+-minded honesty about scope, risk, and what is not included.",
    },
  ],
} as const;

export const offer = {
  eyebrow: "Offer",
  title: "A path you can act on this week.",
  steps: [
    {
      title: "Demo",
      body: "Click through FormForge with demo data — the real product, not a pitch deck.",
    },
    {
      title: "Scope",
      body: "Pick one family; confirm rules and inputs so the Pilot is concrete.",
    },
    {
      title: "Pilot",
      body: "$3,500 firm · ~7–10 business days. One family published with share link, STEP when valid, quote inbox, ~30 days hosting.",
    },
    {
      title: "Catalog",
      body: "Expand families and keep it hosted when the Pilot proves fit. Pricing scoped after Pilot.",
    },
  ],
  primaryCta: "See the FormForge demo",
  primaryCtaHref: "https://appvantix.com/demo",
  secondaryCta: "Talk about a Pilot",
  secondaryCtaHref: "mailto:hello@appvantix.com?subject=FormForge%20Pilot",
} as const;

export const finalCta = {
  eyebrow: "Contact",
  title: "Work with a founder who can own the stack.",
  body: "See FormForge with demo data, or email AppVantix. You get CEO-level accountability backed by CS, full-stack product craft, and Security+ depth.",
  primaryCta: "See the FormForge demo",
  primaryCtaHref: "https://appvantix.com/demo",
  secondaryCta: "hello@appvantix.com",
  secondaryCtaHref: "mailto:hello@appvantix.com",
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
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Arizona State University",
    },
  ],
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
    "SaaS",
    "AppVantix",
    "FormForge",
    "Configure-to-order",
    "Computer Science",
    "Full stack web development",
    "UX and product design",
    "CompTIA Security+",
    "Product leadership",
    "Custom manufacturers",
  ],
} as const;
