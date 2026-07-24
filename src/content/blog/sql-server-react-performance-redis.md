---
title: "SQL Server performance for React apps: indexes, contracts, and Redis"
description: "How I keep customer-facing UIs snappy when the source of truth is SQL Server - schema design, query tuning, and when Redis belongs in front of hot paths."
pubDate: 2026-04-18
tags: ["SQL Server", "React", "C#", "ASP.NET Core", "Redis", "Performance"]
heroImage: "/blog/sql-server-react-performance-redis.jpg"
heroAlt: "Network cables in a server rack"
heroCredit: "Jordan Harrison"
heroCreditUrl: "https://unsplash.com/@jordanharrison?utm_source=dane_cameron_portfolio&utm_medium=referral"
---

A polished **React** screen still feels slow if the **SQL Server** path behind it is wrong. On full-stack work with **C# / ASP.NET Core** APIs, most “frontend performance” tickets I inherit end up as data-shape or indexing problems.

## Start from the contract

Before adding indexes:

1. What columns does this React view actually need?
2. Is the API over-fetching for convenience?
3. Are we doing N+1 patterns behind a GraphQL or REST batch?

Aligning the **API contract** with the UI cuts payload size the same way **SSR** and Lighthouse work do on the client - both matter.

## Schema and query habits

Patterns that keep B2C and operator UIs scalable:

- Index for the **predicates you filter and join on**, not every column
- Watch for implicit conversions that kill index seeks
- Keep multi-step updates that touch **PII** inside clear **transaction** boundaries
- Measure before rewriting - profiling hot paths has repeatedly paid off (~35% latency cuts when non-critical work moves off the request thread)

## Where Redis fits

**Redis** is not a substitute for a bad query. It is a shield for:

- Session / short-lived tokens patterns
- Cacheable read models for dashboards
- Queue-backed work that should not block the interactive request (**Celery**-style or background jobs)

Same idea as moving non-critical work off HTTP threads in Node/Python services.

## Tie-in to delivery

When CI only tests the happy path against an empty database, production still surprises you. Prefer tests that exercise realistic SQL (or a service container) and gate merges when query plans regress on critical endpoints.

Customer-facing ecommerce, healthcare ops, and fintech screens all share this rule: **the database is part of the UX**.
