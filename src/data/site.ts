export const site = {
  name: "Dane C Cameron",
  title: "Senior Full Stack Engineer",
  tagline: "C#, React, Next.js & SQL Server · Healthcare, Fintech & Ecommerce",
  location: "Dallas, Texas (Remote, USA)",
  phone: "(305) 710-8496",
  phoneHref: "tel:+13057108496",
  portrait: "/portrait.jpg",
  portraitAlt: "Dane C Cameron, professional headshot",
  summary:
    "Hands-on Senior Full Stack Engineer with 12 years shipping production web apps end-to-end - React/TypeScript UIs, Node.js or C#/.NET APIs, and SQL - on AWS and Azure. Strongest at owning features from design through production: clear tradeoffs, measurable performance, gated CI/CD, and reliable systems in healthcare-, fintech-, and identity-adjacent products.",
  about: [
    "I build customer-facing and internal product software as an IC: React/Next.js on the front, APIs and SQL in the middle, cloud delivery and monitoring so releases stay boring. Recent work includes regulated environments (SOC2/NIST), practical RAG helpers with guardrails, and mentoring through code review.",
    "Stack I reach for most: TypeScript, React, Node.js, C# / ASP.NET Core, Python, SQL Server, AWS, Azure, Docker, Terraform/Pulumi, GitHub Actions. Open to remote Senior Software Engineer / Full-Stack roles in the U.S. MS and BS in Computer Science (WGU, Salt Lake City, UT).",
  ],
  domains: [
    {
      title: "Healthcare",
      body: "Digital health and care-operations style UIs, PII-aware APIs, regulated delivery patterns, and reliable operator workflows.",
      image: "/domains/healthcare.jpg",
      imageAlt: "Clinician reviewing digital health information on a tablet",
      imageCredit: "National Cancer Institute",
      imageCreditUrl:
        "https://unsplash.com/@nci?utm_source=dane_cameron_portfolio&utm_medium=referral",
    },
    {
      title: "Fintech & ecommerce",
      body: "Customer-facing B2C web apps, payments-adjacent flows, strong auth, audit-minded change control, and production reliability.",
      image: "/domains/fintech-ecommerce.jpg",
      imageAlt: "Customer completing a card payment at a checkout counter",
      imageCredit: "Blake Wisz",
      imageCreditUrl:
        "https://unsplash.com/@blakewisz?utm_source=dane_cameron_portfolio&utm_medium=referral",
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
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML / CSS / SCSS",
      "Tailwind",
      "Responsive UI",
      "Mobile-optimized B2C",
      "SSR",
      "Lighthouse",
      "Accessibility / WCAG",
      "Redux / Zustand",
      "Component libraries",
    ],
  },
  {
    title: "Backend",
    items: [
      "C#",
      ".NET / .NET Core",
      "ASP.NET Core",
      "Web API",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Django / DRF",
      "REST",
      "GraphQL",
      "gRPC",
      "DI / middleware",
      "async / await",
      "Clean architecture",
      "Microservices / SOA",
    ],
  },
  {
    title: "Data",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase / RLS",
      "Schema design",
      "Stored procedures",
      "Complex queries",
      "Indexing",
      "Query performance",
      "Entity Framework",
      "Redis",
      "Elastic",
      "Kafka / Service Bus",
    ],
  },
  {
    title: "Cloud & Infra",
    items: [
      "Azure",
      "AWS",
      "GCP",
      "Terraform",
      "Bicep",
      "Pulumi",
      "Docker",
      "Kubernetes / EKS",
      "ECS",
      "Lambda",
      "S3",
      "IAM / VPC",
      "Azure Service Bus",
      "Vercel",
    ],
  },
  {
    title: "Delivery & Quality",
    items: [
      "GitHub Actions",
      "Azure DevOps",
      "Jenkins",
      "CI/CD",
      "Feature flags",
      "Canary deploys",
      "Unit / integration / e2e",
      "Jest / RTL",
      "pytest",
      "SAST / DAST",
      "IaC scanning",
      "OpenTelemetry",
      "Monitoring",
      "Code review",
      "Mentoring",
      "On-call troubleshooting",
      "SOC2 / NIST",
      "Agile / Scrum",
    ],
  },
  {
    title: "Domains & AI",
    items: [
      "Ecommerce / B2C",
      "Healthcare workflows",
      "Fintech & identity",
      "Multi-tenant SaaS",
      "PII handling",
      "RBAC",
      "OAuth2 / OIDC / JWT",
      "Azure AD / Okta",
      "OWASP Top 10",
      "RAG / LangChain",
      "Agentic AI",
      "LLM guardrails",
      "Copilot / Claude Code",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Cloudrise",
    location: "Grand Junction, CO",
    dates: "Oct 2023 – Apr 2026",
    bullets: [
      "Built full-stack web features mixing C# ASP.NET Core APIs, React/Next.js UIs, and SQL Server - owning design through production support for customer and operator-facing flows.",
      "Maintained performance, scalability, and reliability: query tuning, indexing, Redis caching, and Elastic-style search/logging paths under growth.",
      "Deployed and managed software infrastructure on Azure and AWS with Terraform/Bicep-class IaC, GitHub Actions / Azure DevOps-style pipelines, monitoring, and safe promotions.",
      "Participated in architectural discussions; reviewed code, mentored engineers, and helped resolve production issues during on-call-style rotations.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HashiCorp",
    location: "San Francisco, CA",
    dates: "May 2020 – Jun 2023",
    bullets: [
      "Delivered full-stack web development (C#/React/SQL) for high-traffic product surfaces over a multi-year tenure, with strong OOP and design-pattern practice.",
      "Designed relational schemas and complex queries; optimized hot paths about 35% after profiling, improving scalability of customer-facing features.",
      "Built large responsive, mobile-optimized web experiences with React/Next.js; operated AWS/Azure with CI/CD, Terraform, Redis, and Elastic-backed observability (~99.8% pipeline reliability on migrated teams).",
      "Mentored engineers, contributed to technical standards, and drove root-cause fixes from logs and metrics during production incidents.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Checkr",
    location: "San Francisco, CA",
    dates: "Aug 2017 – Feb 2020",
    bullets: [
      "Built customer-facing React/Next.js applications and API/SQL-backed services for high-stakes B2C-style and identity-adjacent workflows.",
      "Raised Lighthouse scores from about 55 to about 92 via SSR, CSS/payload reduction, and mobile-minded UI delivery.",
      "Hardened relational data access and API validation; supported AWS CI/CD migration; cut MTTR about 45% on covered services with better logging and alerts.",
    ],
  },
  {
    role: "Systems Administrator",
    company: "Auth0",
    location: "Bellevue, WA",
    dates: "Dec 2014 – May 2017",
    bullets: [
      "Provisioned, patched, and operated Linux fleets for identity production systems (~99.9% uptime on owned hosts).",
      "Built monitoring, backup/restore drills, host hardening, and on-call runbooks - reliability habits still used in senior full-stack delivery.",
      "Automated baselines so new servers matched known-good config instead of manual snowflakes.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science - Computer Science",
    school: "Western Governors University",
    location: "Salt Lake City, UT",
    dates: "Sep 2014 – Jul 2016",
  },
  {
    degree: "Bachelor of Science - Computer Science",
    school: "Western Governors University",
    location: "Salt Lake City, UT",
    dates: "Apr 2010 – Aug 2014",
  },
];

export const projects = [
  {
    name: "PropEdge AI",
    description:
      "Full-stack B2C-style product with React UI, SQL-backed features, and Stripe Free/Premium tiers.",
    url: "https://github.com/dcam25/PropEdge_AI",
    image: "/projects/propedge-ai.jpg",
    imageAlt: "Desk workspace representing a B2C product and payments stack",
    imageCredit: "Adeolu Eletu",
    imageCreditUrl:
      "https://unsplash.com/@adeolueletu?utm_source=dane_cameron_portfolio&utm_medium=referral",
    tags: ["React", "SQL", "Stripe", "B2C"],
  },
  {
    name: "Multi-Tenant Platform",
    description:
      "React/Next.js, APIs, RBAC, and real-time UI - multi-tenant foundations for SaaS products.",
    url: "https://github.com/dcam25/multi-tenant-platform",
    image: "/projects/multi-tenant.jpg",
    imageAlt: "Team collaborating on shared product software",
    imageCredit: "Annie Spratt",
    imageCreditUrl:
      "https://unsplash.com/@anniespratt?utm_source=dane_cameron_portfolio&utm_medium=referral",
    tags: ["Next.js", "RBAC", "APIs", "SaaS"],
  },
  {
    name: "Nexus AI",
    description: "React/Next.js clients with streaming API backends for generative AI chat.",
    url: "https://github.com/dcam25/Nexus-AI_Nextjs_Nuxtjs_Angular",
    image: "/projects/nexus-ai.jpg",
    imageAlt: "Abstract AI neural network visual",
    imageCredit: "Growtika",
    imageCreditUrl:
      "https://unsplash.com/@growtika?utm_source=dane_cameron_portfolio&utm_medium=referral",
    tags: ["React", "Next.js", "Streaming", "AI"],
  },
];

export const freelance = {
  headline: "Available for full-time and part-time roles",
  body: "Open to remote Senior Full Stack roles across healthcare, fintech, and ecommerce - C#, React, Next.js, SQL Server, Azure/AWS - plus freelance via Guru or direct email.",
};
