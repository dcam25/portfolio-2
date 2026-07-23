export const site = {
  name: "Dane C Cameron",
  title: "Senior Full Stack Engineer",
  tagline: "Healthcare & Fintech · React, Python, .NET & AWS",
  location: "Dallas, Texas",
  phone: "(305) 710-8496",
  phoneHref: "tel:+13057108496",
  portrait: "/portrait.jpg",
  portraitAlt: "Dane C Cameron, professional headshot",
  summary:
    "Hands-on Senior Full Stack Engineer with 12 years building and scaling product applications for sensitive, regulated domains. Strong in React and TypeScript on the frontend and Python, Node.js, and C# /.NET APIs on the backend, with relational data, AWS delivery, and CI/CD. Experienced shipping healthcare- and fintech-adjacent workflows — PII handling, audit-ready change control (SOC2, NIST), secure auth, and reliable production operations.",
  about: [
    "I build full-stack product and internal tooling with React/TypeScript UIs and Python, Node, and ASP.NET Core APIs — owning features from API design through UI delivery, monitoring, and support.",
    "My work emphasizes trust-sensitive delivery: careful validation around sensitive data, OAuth2/OIDC, RBAC, gated releases, and mentoring through PR review. Comfortable partnering with Product and Design in healthcare, fintech, and identity-adjacent environments. MS + BS in Computer Science.",
  ],
  domains: [
    {
      title: "Healthcare",
      body: "Digital health and care-operations style UIs, SMART on FHIR / EMR-EHR integration patterns, regulated delivery, and PII-aware APIs.",
    },
    {
      title: "Fintech & identity",
      body: "Sensitive customer and workforce workflows, strong auth, audit trails, and production reliability for high-stakes product flows.",
    },
  ],
  links: {
    github: "https://github.com/dcam25",
    linkedin: "https://linkedin.com/in/dane-cameron",
    guru: "https://www.guru.com/freelancers/dane-cameron",
    email: "mailto:dcamvals25@gmail.com",
    emailLabel: "dcamvals25@gmail.com",
  },
};

export const competencies = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "HTML5",
      "CSS3",
      "SCSS",
      "MUI",
      "SSR",
      "Responsive UI",
      "Lighthouse",
      "WCAG-minded",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Node.js",
      "C#",
      "ASP.NET Core",
      "Web API",
      "REST",
      "GraphQL",
      "gRPC",
      "Celery",
    ],
  },
  {
    title: "Data & Auth",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Redis",
      "Query tuning",
      "OAuth2",
      "OIDC",
      "JWT",
      "RBAC",
      "PII handling",
    ],
  },
  {
    title: "Cloud & Delivery",
    items: [
      "AWS",
      "ECS",
      "Lambda",
      "S3",
      "IAM",
      "VPC",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Terraform",
      "Pulumi",
      "Azure",
    ],
  },
  {
    title: "Quality & Security",
    items: [
      "Unit tests",
      "Integration tests",
      "SAST",
      "Code review",
      "OWASP",
      "Monitoring",
      "Runbooks",
      "SOC2",
      "NIST",
      "Agile/Scrum",
    ],
  },
  {
    title: "Healthcare & Fintech",
    items: [
      "SMART on FHIR",
      "EMR/EHR patterns",
      "Digital health UIs",
      "Sensitive data workflows",
      "Audit-ready change control",
      "Identity & access",
      "Multi-tenant SaaS",
      "LangChain/RAG",
    ],
  },
];

export const experience = [
  {
    role: "Senior Full Stack Engineer",
    company: "Cloudrise",
    dates: "Oct 2023 – Apr 2026",
    bullets: [
      "Built and maintained full-stack product and internal tooling with React/TypeScript UIs and Node.js and Python APIs, owning features from API design through UI delivery.",
      "Designed REST APIs for operator and client workflows with clear contracts, OAuth2/OIDC auth, and careful handling of sensitive/PII data in regulated paths.",
      "Improved release reliability with containerized services and gated CI/CD on AWS, reducing failed deploys from environment drift.",
      "Packaged LangChain/LangSmith RAG tooling with data-masking guardrails; mentored teammates through PR review; supported SOC2 Type II and NIST evidence.",
    ],
  },
  {
    role: "Senior Full Stack Engineer",
    company: "HashiCorp",
    dates: "May 2020 – Jun 2023",
    bullets: [
      "Developed production Node.js and Python APIs and React experiences supporting high daily traffic in a high-growth product environment.",
      "Built scalable API backends with relational data access and Redis-backed queues, cutting hot-path latency about 35% after profiling under load.",
      "Deployed Dockerized services on AWS with CI/CD, reaching about 99.8% pipeline reliability on migrated teams; owned monitoring, alerts, and runbooks.",
      "Raised quality with unit tests, SAST, and OAuth2/OIDC checks in CI, reducing common OWASP Top 10 issues about 60% on owned codepaths; mentored engineers through pairing and review.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Checkr",
    dates: "Aug 2017 – Feb 2020",
    bullets: [
      "Built customer-facing React and Next.js interfaces with TypeScript for sensitive identity and workforce-adjacent product flows where data protection mattered.",
      "Hardened GraphQL/gRPC validation so malformed client calls failed cleanly before reaching sensitive stores; improved Lighthouse scores from about 55 to about 92.",
      "Helped migrate services to AWS with containerized CI/CD; added dashboards and alerts that cut MTTR about 45% on covered services.",
    ],
  },
  {
    role: "Systems Administrator",
    company: "Auth0",
    dates: "Dec 2014 – May 2017",
    bullets: [
      "Operated production Linux and container baselines for identity infrastructure at about 99.9% uptime — habits around monitoring and recovery that still inform how I ship healthcare- and fintech-grade full-stack software.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science — Computer Science",
    school: "Western Governors University",
    dates: "Sep 2014 – Jul 2016",
  },
  {
    degree: "Bachelor of Science — Computer Science",
    school: "Western Governors University",
    dates: "Apr 2010 – Aug 2014",
  },
];

export const projects = [
  {
    name: "Multi-Tenant Platform",
    description:
      "React/Next.js + API backend with RBAC and real-time updates — multi-tenant foundations useful for healthcare and fintech SaaS.",
    url: "https://github.com/dcam25/multi-tenant-platform",
  },
  {
    name: "Nexus AI",
    description:
      "React/Next.js generative AI clients with streaming APIs — patterns for guarded, productized AI in regulated workflows.",
    url: "https://github.com/dcam25/Nexus-AI_Nextjs_Nuxtjs_Angular",
  },
  {
    name: "PropEdge AI",
    description:
      "Full-stack React product with Stripe Free/Premium tiers and performance-minded UI — payments-adjacent product delivery.",
    url: "https://github.com/dcam25/PropEdge_AI",
  },
];

export const freelance = {
  headline: "Available for full-time and part-time roles",
  body: "Open to full-time and part-time Senior Full Stack roles in healthcare, fintech, and related regulated product teams — React, Python, .NET, and AWS — plus freelance via Guru or direct email.",
};
