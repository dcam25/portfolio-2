---
title: "Notes from shipping full-stack software"
description: "Practical write-ups on CI/CD, AWS, React/Next.js, SQL Server, auth, and AI guardrails — the same keywords that show up across my resumes for healthcare, fintech, and ecommerce work."
pubDate: 2026-07-01
tags: ["Full Stack", "React", "C#", "AWS", "CI/CD", "Healthcare", "Fintech"]
---

This blog is where I unpack the work behind Senior Full Stack delivery — not framework hype, but the habits that keep **React / Next.js** UIs, **C# / ASP.NET Core** and **FastAPI** APIs, and **SQL Server** data paths reliable in production.

## What you will find here

Short, practical notes on:

- **CI/CD** with GitHub Actions, gated promotions, and rollback
- **AWS** patterns (ECS, Lambda, ECR, Terraform) that survive real traffic
- **React / Next.js** performance (SSR, Lighthouse, payload discipline)
- **SQL Server** indexing and Redis where interactive latency matters
- **OAuth2 / OIDC**, RBAC, and **PII** handling for regulated products
- **RAG** helpers with LangChain-style guardrails so AI does not become a leak vector

## Why these topics

They are the same keywords that show up across my resumes for **healthcare**, **fintech**, and **ecommerce** roles. If you are scanning this portfolio for fit, the posts are meant to show how I think about shipping — tradeoffs, gates, and production ownership — not just which logos I have used.

## How I write them

Each post is grounded in patterns I have used as an IC: clear API contracts, measurable performance, audit-ready change control (**SOC2 / NIST**-friendly habits), and mentoring through code review. When I cite industry practice (OIDC in CI, digest-pinned images, Mangum on Lambda), it is because those details show up in real pipelines — and because vague “best practices” posts waste everyone’s time.

If you want the shorter version of who I am: Dallas-based remote Senior Full Stack Engineer — C#, React, Next.js, SQL Server, Azure/AWS — open to full-time and part-time roles. The rest of the archive goes deeper on the “how.”
