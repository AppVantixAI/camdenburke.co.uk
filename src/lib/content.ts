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
    "Camden Burke is a technical CEO and founder — dual ASU degrees in Computer Science and Graphic Information Technology, CompTIA Security+, leading AppVantix and FormForge. Operates by principles studied from Elon Musk, Jeff Bezos, and Alex Hormozi.",
  eyebrow: "Technical CEO · Founder",
  headline: "Build. Ship. Compound.",
  subhead:
    "I lead like an engineer and sell like an operator. First principles. Day 1. Offers so clear people say yes. The product is the proof.",
  primaryCta: "Talk to me",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "See the product",
  secondaryCtaHref: "#reel",
  videoSrc: "/hero-reel.mp4",
  videoPoster: "/hero-formforge.jpg",
} as const;

export const nav = [
  { href: "#story", label: "Story" },
  { href: "#principles", label: "Principles" },
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
      title: "First principles over theater",
      body: "Titles are cheap. If I cannot open the hood, I do not claim the product. Engineering truth beats slide decks.",
    },
    {
      title: "Day 1 is a discipline",
      body: "Customer obsession. Long-term bets. Clear writing. I treat every quarter like the company is still being invented.",
    },
    {
      title: "Value before vanity",
      body: "Make the offer undeniable. Stack proof. Reduce friction. Results over reputation — then reputation follows.",
    },
  ],
} as const;

/** Explicit references to operators Camden studies — not peer claims */
export const principles = {
  eyebrow: "Principles",
  title: "I study the greats. Then I execute.",
  lead: "Not fan fiction. Operating systems. Three builders I return to when the work gets hard.",
  items: [
    {
      name: "Elon Musk",
      lens: "First principles · Ship the machine",
      quote:
        "Question every requirement. Build the product. Demo reality, not narrative.",
      apply:
        "I stay technical as CEO. FormForge has to work in a shop — not just in a pitch. If it is not shippable, it is not strategy.",
    },
    {
      name: "Jeff Bezos",
      lens: "Day 1 · Customer obsession",
      quote:
        "Protect the long-term. Write clearly. Stay a Day 1 company even as you scale.",
      apply:
        "AppVantix exists to invent and operate software businesses. I optimize for the customer who has to finish a job — not for looking busy.",
    },
    {
      name: "Alex Hormozi",
      lens: "Value equation · Offer clarity",
      quote:
        "Increase dream outcome and perceived likelihood. Decrease time delay and effort. Make yes the easy answer.",
      apply:
        "I sell outcomes, not vibes. Clear offer. Hard proof. Fast path to a demo. No theater that does not convert.",
    },
  ],
} as const;

export const credentials = {
  eyebrow: "Credentials",
  title: "Proof under the title.",
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
  title: "Companies. Not content.",
  items: [
    {
      name: "AppVantix",
      role: "CEO & Founder",
      body: "I build and operate SaaS businesses. Parent company. One founder accountable for the stack.",
      href: "https://appvantix.com",
      cta: "Visit AppVantix",
      image: "/hero-formforge.jpg",
    },
    {
      name: "FormForge",
      role: "Flagship product",
      body: "Configure-to-order software for custom manufacturers — rules, geometry, structured quotes. The demo is the argument.",
      href: "https://appvantix.com/formforge",
      cta: "Explore FormForge",
      image: "/product-rules.jpg",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  title: "If the offer is clear, say yes.",
  body: "Partners, press, operators — write me. Want the product? Take the demo. Want the founder? Start here.",
  primaryCta: "Email Camden",
  primaryCtaHref: "mailto:hello@appvantix.com?subject=Hello%20Camden",
  secondaryCta: "LinkedIn",
  secondaryCtaHref: "https://www.linkedin.com/in/camdenburkedev",
  tertiaryCta: "Book the demo",
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
