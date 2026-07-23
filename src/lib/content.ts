/** Personal CEO site — cinematic motion brand (distinct from AppVantix marketing) */

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
  metaTitle: "Camden Burke — CEO & Founder",
  description:
    "Camden Burke is a technical CEO and founder — dual ASU degrees in Computer Science and Graphic Information Technology, CompTIA Security+, leading AppVantix and FormForge.",
  eyebrow: "Technical CEO · Founder",
  headline: "I build companies that ship real software.",
  subhead:
    "Computer science. Full-stack product craft. Security+. I lead AppVantix — and I still care how the product feels in someone's hands.",
  primaryCta: "Get in touch",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "Watch the product",
  secondaryCtaHref: "#reel",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-formforge.jpg",
} as const;

export const nav = [
  { href: "#story", label: "Story" },
  { href: "#credentials", label: "Credentials" },
  { href: "#work", label: "Work" },
  { href: "#reel", label: "Reel" },
  { href: "#contact", label: "Contact" },
] as const;

export const story = {
  eyebrow: "Story",
  title: "Founder first. Operator always.",
  beats: [
    {
      title: "Why I lead this way",
      body: "I do not separate vision from execution. If I cannot open the hood, I do not claim the product.",
    },
    {
      title: "What I bring",
      body: "Dual ASU degrees — Computer Science and Graphic Information Technology (full stack) — plus CompTIA Security+. Systems rigor, interface craft, and security as quality.",
    },
    {
      title: "What I am building",
      body: "AppVantix builds and operates SaaS. FormForge is the flagship for configure-to-order manufacturers. Different brands. One founder accountable for both.",
    },
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "The operating system behind the title.",
  items: [
    {
      label: "Education",
      title: "B.S. Computer Science",
      meta: "Arizona State University · Expected Dec 2027",
      body: "Algorithms, systems, and software that has to survive contact with reality.",
    },
    {
      label: "Education",
      title: "B.S. Graphic Information Technology",
      meta: "Full Stack Web Development · Completed 2024",
      body: "UX, visual systems, and shipping interfaces people can finish a job in.",
    },
    {
      label: "Certification",
      title: "CompTIA Security+ ce",
      meta: "SY0-701 · Valid through March 2029",
      body: "Identity, access, and trustworthy handling of customer data — non-negotiable for B2B software.",
    },
  ],
} as const;

export const work = {
  eyebrow: "Work",
  title: "Ventures under my leadership.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "Agency that builds and operates SaaS businesses. Parent company — not a product rename.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Configure-to-order software for custom manufacturers — rules, geometry, structured quotes.",
      href: "https://appvantix.com/formforge",
      cta: "Explore FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "Start a conversation.",
  body: "Press, partners, and operators — write me. Product demos live on AppVantix; introductions start here.",
  primaryCta: "Email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "FormForge demo",
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
      name: "CompTIA Security+ ce (SY0-701)",
      credentialCategory: "certification",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: site.legal,
    url: site.companyUrl,
  },
} as const;
