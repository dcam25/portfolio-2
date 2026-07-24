---
title: "Gated CI/CD on AWS ECS with Terraform and GitHub Actions"
description: "How I keep React and API releases boring: Terraform for the platform, GitHub Actions for promotion, OIDC instead of long-lived keys, and rollback when deploys fail."
pubDate: 2026-06-12
tags: ["CI/CD", "GitHub Actions", "AWS", "ECS", "Terraform", "Docker"]
heroImage: "/blog/gated-cicd-aws-ecs-terraform.jpg"
heroAlt: "Data center corridor lined with server racks"
heroCredit: "Taylor Vick"
heroCreditUrl: "https://unsplash.com/@tvick?utm_source=dane_cameron_portfolio&utm_medium=referral"
---

Shipping a React frontend and a C# or FastAPI backend is the easy part. Keeping **staging and production identical**, with safe promotions and fast feedback, is where most teams lose time.

## The handshake that works

A pattern I use on product teams:

1. **Terraform** owns the durable platform — VPC pieces, ECS/Fargate service shell, IAM, load balancer, logs.
2. **GitHub Actions** owns what runs — build the image, push to **ECR**, update the task definition, wait for health.
3. Terraform uses `lifecycle { ignore_changes }` on container image fields so `terraform apply` does not clobber the image CI just shipped.

That split shows up in modern ECS + Fargate writeups: IaC creates the stage, CI/CD manages the actors.

## Pipeline shape

On pull requests: lint, unit tests, and a quick **SAST** pass — no deploy.

On `main` (or a release tag):

- Authenticate to AWS with **OIDC** (no long-lived access keys in secrets)
- Build a multi-stage **Docker** image
- Push a digest-pinned image to ECR (`@sha256:…`, not `:latest`)
- Update ECS and wait until the service is stable
- On failure, roll back to the previous task definition

Pinning Actions and dependencies (and preferring OIDC) matches current CI/CD hardening guidance for 2025–2026.

## What “gated promotion” buys you

On platform work at Cloudrise-style environments, **gated artifact promotion** cut failed releases caused by environment drift. The same idea applies to ecommerce, healthcare, and fintech UIs: the binary that passed checks is the binary that reaches production.

## Practical checklist

- Keep PR feedback under ~10 minutes (parallel lint/test/scan)
- Inject secrets at runtime (Secrets Manager / Key Vault), not bake them into images
- Prefer canary or blue/green when the blast radius includes PII or payments flows
- Treat rollback as a first-class step, not a wiki page

If you are hiring for Senior Full Stack work, ask candidates how they separate **infra ownership** from **release ownership**. That answer predicts fewer 2 a.m. surprises than any framework preference.
