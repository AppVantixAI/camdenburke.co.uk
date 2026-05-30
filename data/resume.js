export const resume = {
  name: 'Camden Burke',
  location: 'Knoxville Metropolitan Area',
  phone: '(615) 557-8189',
  phoneHref: 'tel:+16155578189',
  email: 'camdenburke20@gmail.com',
  linkedin: 'https://www.linkedin.com/in/camdenburkedev',
  github: 'https://github.com/cburke12',
  siteRepo: 'https://github.com/AppVantixAI/camdenburke.co.uk',
  /** Shared date strings — keep formatting consistent sitewide */
  dates: {
    securityPlusValid: 'Valid March 2026 — March 2029',
    networkPlusStatus: 'Studying for exam',
    labPeriod: 'February 2026 — Ongoing',
  },
  targetRoles:
    'Target roles: SOC Analyst I, IAM Analyst, Junior Security Analyst, Security-focused IT Support',
  valueProposition:
    'Help Desk Analyst with Active Directory, account lifecycle, and Windows support experience, building security depth through Security+, PowerShell, and a Windows Server home lab.',
  subheadline:
    'Active Directory operations · Security+ certified · hands-on identity lab · targeting SOC, IAM, and security-focused IT roles',
  availability:
    'Open to SOC, IAM, and security-focused IT roles; also available for strong help desk roles with a security growth path.',
  workAuthorization: 'Authorized to work in the U.S. · On-site or hybrid in East Tennessee',
  scanSkills: [
    'Active Directory',
    'User provisioning',
    'Security+',
    'PowerShell',
    'Event Viewer',
    'DNS',
    'DHCP',
  ],
  heroChips: [
    { label: 'Security+', value: 'SY0-701', tone: 'secure' },
    { label: 'Network+', value: 'Studying for exam', tone: 'warn' },
    { label: 'Location', value: 'Knoxville, TN area', tone: 'neutral' },
  ],
  heroStatus: [
    {
      label: 'Security+',
      value: 'SY0-701 · Valid March 2026 — March 2029',
      tone: 'secure',
    },
    {
      label: 'Current role:',
      value: "Help Desk Analyst, Altar'd State",
      tone: 'secure',
    },
    { label: 'Network+', value: 'Studying for exam', tone: 'warn' },
    { label: 'Location', value: 'Knoxville, TN area', tone: 'secure' },
  ],
  recruiterLinks: [
    { label: 'Resume PDF', href: '/resume.pdf', download: true, primary: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/camdenburkedev', external: true },
    { label: 'GitHub', href: 'https://github.com/cburke12', external: true },
  ],
  experience: [
    {
      company: "Altar'd State",
      role: 'Help Desk Analyst',
      location: 'Knoxville, TN',
      period: 'May 2026 — Present',
      bullets: [
        'Triaged and resolved 25–40 Tier 1/2 support tickets weekly for internal users in a Windows Active Directory environment while meeting SLA targets.',
        'Provisioned and deprovisioned user accounts, group memberships, and permissions to support onboarding, role changes, and offboarding with accurate access control.',
        'Performed AD account maintenance, GPO-related tasks, endpoint troubleshooting, and escalations using established SOPs.',
        'Documented recurring fixes and escalation paths in the ticketing system to reduce repeat escalations on common access-related issues.',
      ],
    },
    {
      company: 'Kaiyin Warriors Foundation',
      role: 'Web Developer | Website Manager',
      location: 'Nashville, TN',
      period: 'March 2024 — February 2026',
      bullets: [
        'Primary technical contact for login failures, browser issues, and form errors; reproduced issues, applied fixes, and coordinated with stakeholders.',
        'Managed domain and DNS configuration; migrated and maintained the site on Shopify with staging-to-production workflows.',
        'Reviewed web forms and plugins for input-handling risks; resolved SQL injection exposure and integration conflicts.',
      ],
    },
    {
      company: 'Lavender Hill Springs LLC',
      role: 'Co-Owner & UX/UI Designer',
      context: 'Side business · closed February 2026',
      location: 'Lawrenceburg, TN',
      period: 'June 2024 — February 2026',
      bullets: [
        'Managed Shopify e-commerce operations—DNS, email routing, payment integrations, and security review of third-party apps before rollout.',
        'Diagnosed platform issues, coordinated vendor escalation, and documented fixes for repeat troubleshooting.',
      ],
    },
    {
      company: 'Starbucks',
      role: 'Barista',
      location: 'Tennessee, United States',
      period: 'August 2019 — August 2025',
      bullets: [
        'Partner of the Quarter; go-to teammate for POS, Wi-Fi, and device issues across high-volume locations.',
        'Built reliability and troubleshooting habits under pressure that transfer to user support work.',
      ],
    },
  ],
  featuredLab: {
    title: 'Active Directory Home Lab — Windows Server 2025',
    period: 'February 2026 — Ongoing',
    proofLine: 'Hands-on identity lab · February 2026 — Ongoing',
    summary:
      'Enterprise-style identity lab simulating domain services, access control, and log-based troubleshooting relevant to IAM and SOC feeder roles.',
    metrics: [
      '1,000 AD user accounts provisioned via PowerShell automation',
      'Dual-NIC NAT topology (172.16.0.0/24) with DNS, DHCP, and a domain-joined Windows 11 client',
    ],
    socRelevance: {
      built: [
        'Domain Controller with AD DS, DNS, DHCP, NAT/RAS',
        'Domain join, RBAC security groups, dedicated admin accounts',
        'PowerShell bulk user provisioning (New-ADUser)',
      ],
      observed: [
        'User creation and access-control workflows',
        'Authentication flow and profile service errors',
        'Event Viewer review and systematic troubleshooting',
      ],
      relevantToSoc: [
        'Identity hygiene and account lifecycle practice',
        'Access management and escalation context',
        'Log analysis familiarity for incident triage foundations',
      ],
    },
    tools: [
      'Windows Server 2025',
      'Windows 11 Pro',
      'VirtualBox',
      'PowerShell',
      'AD DS',
      'DNS',
      'DHCP',
      'NAT/RAS',
    ],
    links: [
      {
        label: 'Lab write-up on LinkedIn',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7433873753651965952/',
        external: true,
      },
    ],
  },
  education: [
    {
      school: 'Arizona State University',
      degree: 'Bachelor of Science, Computer Science',
      period: 'Expected December 2027',
      summary: 'Data structures, algorithms, operating systems, security, and information assurance.',
      primary: true,
    },
    {
      school: 'Arizona State University',
      degree: 'Bachelor of Science, Graphic Information Technology (Full Stack Web Development)',
      period: 'Completed 2024',
      summary: 'UX/UI, full-stack web development, and security-informed design.',
      primary: false,
    },
  ],
  featuredCertifications: [
    {
      name: 'CompTIA Security+ ce (SY0-701)',
      status: 'Certified',
      detail: 'Valid March 2026 — March 2029',
      tone: 'secure',
      verifyUrl: 'https://www.comptia.org/certifications/verify',
      credlyUrl: 'https://www.credly.com/badges/f8f41ac4-3185-423c-8f38-7e62343525dd',
    },
    {
      name: 'CompTIA Network+',
      status: 'In progress',
      detail: 'Studying for exam',
      tone: 'warn',
    },
  ],
  skillGroups: [
    {
      title: 'Identity & access',
      skills: [
        'Active Directory',
        'User provisioning',
        'Deprovisioning',
        'RBAC',
        'Group membership',
        'Account lifecycle',
      ],
    },
    {
      title: 'Windows support',
      skills: [
        'Endpoint troubleshooting',
        'Ticketing',
        'SOP documentation',
        'Event Viewer',
        'Escalation handling',
      ],
    },
    {
      title: 'Network & services',
      skills: ['DNS', 'DHCP', 'NAT', 'Domain join', 'Basic networking'],
    },
    {
      title: 'Security foundations',
      skills: [
        'Security+',
        'Incident escalation',
        'Least-privilege access',
        'Access control',
        'Logging basics',
      ],
    },
    {
      title: 'Tools',
      skills: ['PowerShell', 'VirtualBox', 'Git', 'Shopify', 'HTML/CSS/JS'],
    },
  ],
  nav: [
    { id: 'experience', label: 'Experience' },
    { id: 'lab', label: 'Lab' },
    { id: 'certifications', label: 'Certs' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
};
