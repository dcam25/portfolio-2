export const site = {
  name: "Dane C Cameron",
  title: "Senior .NET / React Web Developer",
  tagline: "C#, ASP.NET Core, TypeScript & React",
  location: "Dallas, Texas",
  phone: "(305) 710-8496",
  phoneHref: "tel:+13057108496",
  portrait: "/portrait.jpg",
  portraitAlt: "Dane C Cameron, professional headshot",
  summary:
    "Senior Web Developer with 12 years building production web applications across React frontends and .NET and Node backends. Strong in C#, ASP.NET Core Web APIs, TypeScript, and React, with end-to-end ownership of UI, APIs, data access, auth, and CI/CD on AWS.",
  about: [
    "I design and ship React and TypeScript UIs backed by ASP.NET Core and Node.js APIs — owning features from screen to service and production release.",
    "Experienced improving UI performance, designing maintainable API contracts, collaborating with Product and Design, and raising quality through code review and automated checks. Comfortable in regulated delivery (SOC2, NIST) and fast product teams. MS + BS in Computer Science.",
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
      "Lighthouse tuning",
    ],
  },
  {
    title: ".NET Backend",
    items: [
      "C#",
      "ASP.NET Core",
      "Web API",
      "Entity Framework",
      "REST services",
      "Dependency injection",
      "Middleware",
    ],
  },
  {
    title: "Other Backend",
    items: ["Node.js", "Python", "FastAPI", "Django"],
  },
  {
    title: "APIs & Auth",
    items: ["REST", "GraphQL", "OAuth2", "OIDC", "JWT", "Third-party integrations"],
  },
  {
    title: "Data",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Input validation",
      "Structured logging",
    ],
  },
  {
    title: "Delivery",
    items: [
      "GitHub Actions",
      "CI/CD",
      "Docker",
      "AWS",
      "Code review",
      "Unit tests",
      "SAST in PRs",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Cloudrise",
    dates: "Oct 2023 – Apr 2026",
    bullets: [
      "Built and maintained React and TypeScript web UIs backed by ASP.NET Core and Node.js APIs, owning features from screen to service and production release.",
      "Designed C# ASP.NET Core Web APIs with clear contracts, validation, and secure auth (OAuth2 and OIDC) for internal platform and operator workflows.",
      "Integrated React clients with .NET and REST endpoints, keeping frontend and backend models aligned for maintainable delivery.",
      "Improved release quality with GitHub Actions checks and gated promotions for web and API services.",
      "Mentored teammates through React and C# PR review; supported SOC2 Type II and NIST evidence for owned web and API paths.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "HashiCorp",
    dates: "May 2020 – Jun 2023",
    bullets: [
      "Developed React-facing product experiences and backend APIs in C# ASP.NET Core and Node.js supporting high daily traffic.",
      "Built ASP.NET Core Web APIs with SQL-backed data access, validation, and auth controls consumed by React UIs.",
      "Profiled and optimized hot paths across web and API layers, cutting inter-service latency about 35% and reducing peak timeouts.",
      "Raised delivery quality with unit tests, SAST, and OAuth2/OIDC checks in CI, reducing common OWASP Top 10 issues about 60% on those codepaths.",
      "Reviewed React/TypeScript and C#/.NET PRs with actionable feedback; owned production readiness with monitoring and runbooks.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Checkr",
    dates: "Aug 2017 – Feb 2020",
    bullets: [
      "Built customer-facing React, Next.js, and TypeScript web applications with supporting .NET and API backends for sensitive product workflows.",
      "Implemented and consumed ASP.NET Core style Web APIs alongside GraphQL and gRPC integrations with hardened validation.",
      "Improved page performance with SSR and payload reduction, raising key Lighthouse scores from about 55 to about 92.",
      "Helped migrate web and API services to AWS with CI/CD; added logging and alerts that cut MTTR about 45%.",
    ],
  },
  {
    role: "Systems Administrator",
    company: "Auth0",
    dates: "Dec 2014 – May 2017",
    bullets: [
      "Operated production infrastructure for identity products — about 99.9% uptime on owned fleets — building monitoring and recovery discipline that still informs how I ship reliable React and .NET web apps.",
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
      "React and Next.js web app with API backend, RBAC, and real-time UI — multi-tenant SaaS foundations.",
    url: "https://github.com/dcam25/multi-tenant-platform",
  },
  {
    name: "Nexus AI",
    description:
      "React and Next.js web clients with streaming APIs for generative AI chat experiences.",
    url: "https://github.com/dcam25/Nexus-AI_Nextjs_Nuxtjs_Angular",
  },
  {
    name: "PropEdge AI",
    description:
      "React web product with Stripe tiers and performance-minded UI for sports props analytics.",
    url: "https://github.com/dcam25/PropEdge_AI",
  },
];

export const freelance = {
  headline: "Available for full-time and part-time roles",
  body: "Open to full-time and part-time opportunities as a Senior .NET / React Web Developer — plus freelance and contract work via Guru or direct email.",
};
