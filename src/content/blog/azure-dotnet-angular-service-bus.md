---
title: "Azure full-stack delivery: .NET, Angular, and Service Bus patterns"
description: "Hands-on IC notes on C# microservices, Angular UIs, Azure Service Bus, Terraform, and GitHub Actions - plus AI in the workflow with review gates."
pubDate: 2026-05-15
tags: ["Azure", "C#", ".NET", "Angular", "Service Bus", "Terraform", "GitHub Actions"]
heroImage: "/blog/azure-dotnet-angular-service-bus.jpg"
heroAlt: "Earth from orbit with a network-like glow"
heroCredit: "NASA"
heroCreditUrl: "https://unsplash.com/@nasa?utm_source=dane_cameron_portfolio&utm_medium=referral"
---

Plenty of full-stack roles are **Azure**-first: **C# /.NET** APIs, **Angular** (or React) clients, messaging, and CI that a distributed team can trust.

## Platform shape

A practical Azure layout I keep returning to:

- REST APIs on modern .NET with clear ownership boundaries
- **Angular** TypeScript UIs for operator and customer surfaces
- **Azure Service Bus** (or equivalent queues) for reliable async work - not every call needs to be synchronous HTTP
- Managed services chosen for cost and operability, not logo bingo
- **Terraform** + Azure CLI / PowerShell for repeatable environments
- **GitHub Actions** for build, test, and promotion

## Messaging that survives retries

Queues only help when handlers are idempotent and poison messages have a home. I design consumers assuming at-least-once delivery and make that assumption visible in logs and metrics.

## AI as a daily IC tool

**GitHub Copilot** and Claude-class assistants accelerate scaffolding, debugging, and docs. Merge rules stay the same: human review, tests, and no secrets in prompts or clients. When the product itself needs AI (RAG helpers, agent orchestration), the same review-and-eval discipline applies.

## Global team habits

Clear PR descriptions, shared coding standards, and honest trade-off talk travel better across time zones than clever one-off scripts. Hands-on IC ownership - requirements through deploy - is still the job.
