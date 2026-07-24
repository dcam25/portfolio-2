---
title: "FastAPI on AWS Lambda: Docker, ECR, and a CI path that survives cold starts"
description: "Notes on shipping Python FastAPI services serverless with Mangum or container images — what breaks in CI, and how to keep RAG or API workloads production-shaped."
pubDate: 2026-05-28
tags: ["FastAPI", "Python", "AWS Lambda", "Docker", "ECR", "GitHub Actions"]
---

Python APIs show up everywhere in my stack notes: **FastAPI**, Django, Flask. For bursty internal tools and AI helpers, **AWS Lambda** is often cheaper than a always-on ECS service — if you respect Lambda’s constraints.

## Two viable shapes

**ASGI adapter (Mangum):** wrap FastAPI and deploy a zip or thin image. Great for CRUD APIs.

**Container image on Lambda:** package FastAPI + heavier deps (embeddings, RAG helpers) into Docker, push to **ECR**, point Lambda at the image. Recent production writeups pair this with **GitHub Actions** for build → push → `update-function-code`.

## Failure modes I plan for

- **Race after update:** sleeping `N` seconds after `update-function-code` is flaky for large images. Prefer `aws lambda wait function-updated` (or equivalent) before the next config change.
- **Read-only filesystem:** anything writable goes under `/tmp`.
- **Cold start + ML:** pre-download models in the image build; pin package versions; give the function enough memory/timeout for the workload.
- **Permissions:** ECR access for Lambda is easy to misconfigure separately from the execution role.

## Where this fits a full-stack resume

I still ship **React / Next.js** clients against REST contracts. The backend might be FastAPI on Lambda for an operator tool, or **ASP.NET Core** on ECS for a customer-facing surface. The constant is the same: **CI gates**, clear auth (**OAuth2/OIDC**), and boring deploys.

## Minimal mental model

```text
Push → GitHub Actions → Docker build → ECR → Lambda update → health check
```

Keep the public URL stable (Function URL or API Gateway). Version images by digest so rollback is a pointer change, not archaeology.
