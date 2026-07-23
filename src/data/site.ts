export const site = {
  name: "Dane C Cameron",
  title: "Senior Full Stack Engineer",
  tagline: "Python, React, .NET & AWS",
  location: "Dallas, Texas",
  phone: "(305) 710-8496",
  phoneHref: "tel:+13057108496",
  portrait: "/portrait.jpg",
  portraitAlt: "Dane C Cameron, professional headshot",
  summary:
    "Senior Full Stack Engineer with 12 years building production applications across Python backends and React frontends, with strong .NET and Node experience as well. Strong in Python (FastAPI, Django), C# ASP.NET Core, TypeScript, and React, with end-to-end ownership of UI, APIs, AWS delivery (Lambda, S3, ECS), and CI/CD. Experienced mentoring via code review, Agile consulting-style delivery, root-cause debugging, and productive AI tooling with guardrails.",
  about: [
    "I design and ship React and TypeScript UIs backed by Python, ASP.NET Core, and Node.js APIs — owning features from requirements through production release.",
    "Comfortable with distributed teams and regulated environments (SOC2, NIST). MS and BS in Computer Science from Western Governors University.",
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
      "HTML5",
      "CSS3",
      "Responsive UI",
      "SSR",
      "Lighthouse performance",
    ],
  },
  {
    title: "Python Backend",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "REST APIs",
      "Celery",
      "Input validation",
      "Structured logging",
    ],
  },
  {
    title: ".NET & Node",
    items: ["C#", "ASP.NET Core", "Web API", "Entity Framework", "Node.js", "Middleware", "DI"],
  },
  {
    title: "APIs & Auth",
    items: ["REST", "GraphQL", "gRPC", "OAuth2", "OIDC", "JWT", "Third-party integrations"],
  },
  {
    title: "Cloud & Data",
    items: [
      "AWS Lambda",
      "S3",
      "ECS",
      "EC2",
      "IAM",
      "VPC",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Redis",
    ],
  },
  {
    title: "Delivery & AI",
    items: [
      "GitHub Actions",
      "CI/CD",
      "Jenkins",
      "Pulumi",
      "Terraform",
      "Unit tests",
      "SAST",
      "Agile/Scrum",
      "Code review",
      "LangChain",
      "LangSmith",
      "RAG",
      "SOC2",
      "NIST",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Cloudrise",
    dates: "Oct 2023 – Apr 2026",
    bullets: [
      "Built React/TypeScript UIs backed by Python and Node APIs, owning features from requirements through production release.",
      "Designed Python FastAPI services with clear contracts, validation, and OAuth2/OIDC auth for platform and operator workflows.",
      "Delivered AWS paths using Lambda and S3 with GitHub Actions gated promotions, reducing failed deploys from environment drift.",
      "Mentored through Python/React code review; packaged LangChain/LangSmith RAG tooling with data-masking guardrails; supported SOC2/NIST evidence.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HashiCorp",
    dates: "May 2020 – Jun 2023",
    bullets: [
      "Developed Python services (FastAPI, Django) and React experiences supporting high daily traffic over a multi-year tenure.",
      "Built REST APIs with SQL-backed data access and auth for React clients; cut inter-service latency about 35% on profiled paths.",
      "Added unit tests, SAST, and OAuth2/OIDC CI checks, reducing common OWASP Top 10 issues about 60% on changed codepaths.",
      "Migrated delivery onto AWS with Docker and CI/CD to about 99.8% pipeline reliability; mentored juniors and drove root-cause fixes from logs and metrics.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Checkr",
    dates: "Aug 2017 – Feb 2020",
    bullets: [
      "Built React, Next.js, and TypeScript apps with API backends for sensitive workflows; hardened REST/GraphQL/gRPC validation.",
      "Raised Lighthouse scores from about 55 to about 92 via SSR and payload reduction; migrated services to AWS with CI/CD.",
      "Added logging and alerts that cut MTTR about 45% on covered services.",
    ],
  },
  {
    role: "Systems Administrator",
    company: "Auth0",
    dates: "Dec 2014 – May 2017",
    bullets: [
      "Operated identity production infrastructure at about 99.9% uptime, building monitoring and recovery habits used in shipping reliable Python/React apps.",
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
      "React/Next.js + API backend with RBAC and real-time UI — multi-tenant SaaS foundations.",
    url: "https://github.com/dcam25/multi-tenant-platform",
  },
  {
    name: "Nexus AI",
    description: "React/Next.js streaming API clients for generative AI chat experiences.",
    url: "https://github.com/dcam25/Nexus-AI_Nextjs_Nuxtjs_Angular",
  },
  {
    name: "PropEdge AI",
    description: "React product with Stripe tiers and performance-minded UI.",
    url: "https://github.com/dcam25/PropEdge_AI",
  },
];

export const freelance = {
  headline: "Available for full-time and part-time roles",
  body: "Open to full-time and part-time opportunities as a Senior Full Stack Engineer (Python, React, .NET, AWS) — plus freelance and contract work via Guru or direct email.",
};
