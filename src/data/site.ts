export const site = {
  name: "Dane C Cameron",
  title: "DevSecOps Software Engineer",
  tagline: "Developer Platform, AWS & Secure CI/CD",
  location: "Dallas, Texas",
  phone: "(305) 710-8496",
  phoneHref: "tel:+13057108496",
  portrait: "/portrait.jpg",
  portraitAlt: "Dane C Cameron, professional headshot",
  summary:
    "Hands-on DevSecOps engineer with 12 years of experience building developer platform capabilities, CI/CD pipelines, and production infrastructure that help engineering teams ship faster and more securely.",
  links: {
    github: "https://github.com/dcam25",
    guru: "https://www.guru.com/freelancers/dane-cameron",
    email: "mailto:dcamvals25@gmail.com",
    emailLabel: "dcamvals25@gmail.com",
  },
};

export const competencies = [
  {
    title: "Developer Platform & Tooling",
    items: [
      "Repository onboarding",
      "Workflow templates",
      "Container base images",
      "Paved-road docs",
      "DX improvements",
      "Internal automation APIs",
    ],
  },
  {
    title: "Languages",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "Bash",
    ],
  },
  {
    title: "Infrastructure as Code",
    items: [
      "Pulumi",
      "Terraform",
      "CloudFormation",
      "Modules",
      "State management",
      "Policy-as-code",
    ],
  },
  {
    title: "CI/CD & Artifacts",
    items: [
      "GitHub Actions",
      "JFrog Artifactory",
      "Jenkins",
      "Ephemeral Docker runners",
      "Image promotion",
      "Vulnerability scanning",
    ],
  },
  {
    title: "Cloud & Containers",
    items: ["AWS", "VPC", "IAM", "EC2", "S3", "EKS", "ECS", "KMS", "Docker", "Kubernetes"],
  },
  {
    title: "Security & Compliance",
    items: [
      "SAST/DAST",
      "Checkov",
      "tfsec",
      "OWASP Top 10",
      "OAuth2/OIDC",
      "Vault",
      "IAM/RBAC",
      "SOC2",
      "NIST",
    ],
  },
];

export const experience = [
  {
    role: "Senior DevSecOps Software Engineer",
    company: "Cloudrise",
    dates: "Oct 2023 – Apr 2026",
    bullets: [
      "Built platform automation in Python and TypeScript — GitHub Actions, Pulumi modules, and JFrog Artifactory pipelines with gated promotion to production.",
      "Partnered with application teams to onboard repositories onto standardized platform capabilities and paved-road guides.",
      "Deployed multi-region AWS (VPC, IAM, EKS, KMS); passed SOC2 Type II and NIST audits with zero exceptions.",
      "Embedded Checkov and tfsec into GitHub Actions with severity-tiered gates, catching 98% of high-severity misconfigurations before merge.",
      "Packaged internal RAG tooling (LangChain, LangSmith) with data-masking guardrails, reducing data-leak risk by 35%.",
    ],
  },
  {
    role: "Senior DevSecOps & Full-Stack Engineer",
    company: "HashiCorp",
    dates: "May 2020 – Jun 2023",
    bullets: [
      "Migrated teams onto standardized CI/CD with Terraform/Pulumi AWS, ephemeral Docker runners, and Artifactory — 99.8% pipeline reliability.",
      "Built Python and TypeScript microservices (FastAPI, Django) scaling to 5M+ daily requests; cut inter-service latency by 35%.",
      "Embedded unit tests, SAST, and OAuth2/OIDC into GitHub Actions, reducing OWASP Top 10 exposure by 60%.",
      "Contributed shared templates and ADRs that improved shipping velocity by 25%.",
    ],
  },
  {
    role: "Lead Full-Stack Developer & Infrastructure Specialist",
    company: "Checkr",
    dates: "Aug 2017 – Feb 2020",
    bullets: [
      "Migrated on-prem services to AWS with Jenkins CI/CD and Artifactory, tripling release velocity.",
      "Built production apps (React, Next.js, TypeScript); improved Lighthouse performance from 55 to 92.",
      "Deployed log aggregation, monitoring, and alerting across containers, reducing MTTR by 45%.",
    ],
  },
  {
    role: "Systems Administrator & Secure Infrastructure Engineer",
    company: "Auth0",
    dates: "Dec 2014 – May 2017",
    bullets: [
      "Automated Linux infrastructure with Bash and Docker Compose baselines, maintaining 99.9% uptime.",
      "Built centralized log monitoring and backup automation, reducing recovery time from hours to minutes.",
    ],
  },
];

export const education = [
  {
    degree: "Master’s Degree — Computer Science",
    school: "Western Governors University",
    dates: "Sep 2014 – Jul 2016",
  },
  {
    degree: "Bachelor’s Degree — Computer Science",
    school: "Western Governors University",
    dates: "Apr 2010 – Aug 2014",
  },
];

export const projects = [
  {
    name: "Multi-Tenant Platform",
    description:
      "SaaS app with multi-tenant support, RBAC, and real-time notifications — Next.js 15, FastAPI, Logto, Supabase, Socket.io.",
    url: "https://github.com/dcam25/multi-tenant-platform",
  },
  {
    name: "Nexus AI",
    description:
      "Generative AI chat across Next.js, Nuxt.js, and Angular — streaming tokens, local history, and a shared UI system.",
    url: "https://github.com/dcam25/Nexus-AI_Nextjs_Nuxtjs_Angular",
  },
  {
    name: "PropEdge AI",
    description:
      "Sports props analytics with custom models, backtesting, AI insights, and Stripe Free/Premium tiers.",
    url: "https://github.com/dcam25/PropEdge_AI",
  },
  {
    name: "OpenClaw Setup Guide",
    description:
      "Step-by-step Ubuntu VPS install and Discord bot integration guide for OpenClaw.",
    url: "https://github.com/dcam25/openclaw-setup-guide",
  },
];

export const freelance = {
  headline: "Available for full-time and part-time roles",
  body: "Open to full-time and part-time opportunities in DevSecOps, developer platforms, and full-stack engineering — plus freelance and contract work via Guru or direct email.",
};
