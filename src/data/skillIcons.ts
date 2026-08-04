/** Online figure icons for competency tags (Iconify CDN). */
const C = "%23E7EEF8"; // light icon color for dark UI
const icon = (name: string, color = C) =>
  `https://api.iconify.design/${name}.svg?color=${color}&height=16`;

const MAP: Record<string, string> = {
  // Frontend
  React: icon("simple-icons:react", "%2361DAFB"),
  "Next.js": icon("simple-icons:nextdotjs"),
  TypeScript: icon("simple-icons:typescript", "%233178C6"),
  JavaScript: icon("simple-icons:javascript", "%23F7DF1E"),
  "HTML5 / CSS3": icon("simple-icons:html5", "%23E34F26"),
  "Tailwind CSS": icon("simple-icons:tailwindcss", "%2306B6D4"),
  "SSR / SSG": icon("mdi:server-network"),
  "Core Web Vitals": icon("mdi:speedometer", "%233AA89A"),
  Lighthouse: icon("simple-icons:lighthouse", "%23F44B21"),
  "Accessibility / WCAG": icon("mdi:accessibility", "%233AA89A"),
  "Responsive design": icon("mdi:responsive"),
  "Component libraries": icon("mdi:view-grid-plus-outline"),
  "State management": icon("mdi:state-machine"),

  // Backend
  "Node.js": icon("simple-icons:nodedotjs", "%235FA04E"),
  Python: icon("simple-icons:python", "%233776AB"),
  "C# / .NET": icon("simple-icons:dotnet", "%23512BD4"),
  "ASP.NET Core": icon("simple-icons:dotnet", "%23512BD4"),
  "Go / Golang (ramp)": icon("simple-icons:go", "%2300ADD8"),
  "Rust (ramp)": icon("simple-icons:rust", "%23DEA584"),
  "REST APIs": icon("mdi:api"),
  GraphQL: icon("simple-icons:graphql", "%23E10098"),
  "gRPC awareness": icon("simple-icons:grpc", "%23244C5A"),
  Microservices: icon("mdi:hexagon-multiple-outline"),
  "Event-driven architecture": icon("mdi:transit-connection-variant"),
  "System design": icon("mdi:sitemap-outline"),
  "OAuth 2.0 / OIDC": icon("simple-icons:openid", "%23F78C40"),
  "JWT / SSO / RBAC": icon("mdi:shield-key-outline"),
  "API design / BFF": icon("mdi:application-brackets-outline"),

  // Data
  SQL: icon("mdi:database"),
  PostgreSQL: icon("simple-icons:postgresql", "%234169E1"),
  "SQL Server": icon("simple-icons:microsoftsqlserver", "%23CC2927"),
  MySQL: icon("simple-icons:mysql", "%234479A1"),
  MongoDB: icon("simple-icons:mongodb", "%2347A248"),
  "Schema design": icon("mdi:table-network"),
  Migrations: icon("mdi:database-arrow-right"),
  Indexing: icon("mdi:file-tree"),
  "Query optimization": icon("mdi:tune"),
  "Redis caching": icon("simple-icons:redis", "%23DC382D"),
  "Message queues": icon("mdi:tray-full"),

  // Cloud & DevSecOps
  AWS: icon("simple-icons:amazonaws", "%23FF9900"),
  Azure: icon("simple-icons:microsoftazure", "%230078D4"),
  Docker: icon("simple-icons:docker", "%232496ED"),
  Kubernetes: icon("simple-icons:kubernetes", "%23326CE5"),
  "CI/CD": icon("mdi:rocket-launch-outline"),
  "GitHub Actions": icon("simple-icons:githubactions", "%232088FF"),
  Jenkins: icon("simple-icons:jenkins", "%23D24939"),
  "Azure DevOps": icon("simple-icons:azuredevops", "%230078D7"),
  Terraform: icon("simple-icons:terraform", "%237B42BC"),
  Pulumi: icon("simple-icons:pulumi", "%238A3391"),
  IaC: icon("mdi:code-braces"),
  "SAST / SCA": icon("mdi:shield-search"),
  "Secrets hygiene": icon("mdi:key-chain-variant"),
  "Artifact promotion": icon("mdi:package-up"),

  // Quality
  Jest: icon("simple-icons:jest", "%23C21325"),
  "React Testing Library": icon("simple-icons:testinglibrary", "%23E33332"),
  "Cypress / Playwright": icon("simple-icons:playwright", "%232EAD33"),
  "pytest / xUnit": icon("simple-icons:pytest", "%230A9EDC"),
  "Unit / integration / e2e": icon("mdi:test-tube"),
  Observability: icon("mdi:eye-outline"),
  OpenTelemetry: icon("simple-icons:opentelemetry", "%23F5A800"),
  "Monitoring / alerting": icon("mdi:bell-ring-outline"),
  "MTTR / RCA": icon("mdi:timer-sand"),
  Runbooks: icon("mdi:book-open-page-variant-outline"),
  "Code review": icon("mdi:source-pull"),
  Mentoring: icon("mdi:account-school-outline"),
  "Agile / Scrum": icon("simple-icons:jira", "%230052CC"),

  // Domains & AI
  "Healthcare / digital health": icon("mdi:hospital-box", "%232d8278"),
  "Fintech & payments": icon("mdi:credit-card-outline", "%23c45c26"),
  "Identity verification": icon("mdi:card-account-details-outline"),
  "Workforce / HR tech": icon("mdi:account-tie-outline"),
  "Regulated SaaS": icon("mdi:office-building-cog-outline"),
  "SOC 2 / NIST": icon("mdi:certificate-outline"),
  "PHI / PII handling": icon("mdi:lock-outline"),
  "OWASP Top 10": icon("simple-icons:owasp", "%23E7EEF8"),
  "RAG / embeddings": icon("mdi:database-search", "%23412991"),
  "Agents & guardrails": icon("mdi:robot-outline", "%232f9e44"),
  "Cursor / Copilot / Claude": icon("mdi:creation-outline", "%23D97757"),
};

/** Fallback figure icon when a skill has no brand mapping. */
const FALLBACK = icon("mdi:checkbox-marked-circle-outline", "%233AA89A");

export function skillIconUrl(label: string): string {
  return MAP[label] ?? FALLBACK;
}
