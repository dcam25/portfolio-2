---
title: "Modernizing .NET Framework estates without a big-bang rewrite"
description: "Practical Framework-to-modern .NET migration: versioned APIs, SQL Server correctness, feature flags, canaries, and AI-assisted refactors with real guardrails."
pubDate: 2026-07-10
tags: [".NET", "C#", "Modernization", "SQL Server", "Azure", "CI/CD", "AI"]
---

Greenfield demos are easy. The resumes that stick for **.NET modernization** roles talk about large codebases: legacy **ASP.NET / .NET Framework** services, tangled boundaries, and SQL that still has to be correct on Monday morning.

## Strangle, do not detonate

A pattern that has worked for me:

1. Extract a **versioned REST API** surface first — auth, reliability, and tests on the new edge
2. Move callers gradually (feature flags, dual-run where risk is high)
3. Upgrade hosting to modern **.NET** (LTS where the org will support it)
4. Keep **SQL Server** transactional correctness while you tune indexes and hot queries
5. Introduce Kafka-style / event pipelines only when a batch boundary already exists

You ship milestones stakeholders can see, not a two-year “perfect architecture” promise.

## AI agents as accelerators, not authors of record

Daily **Cursor / Claude Code / Codex**-class tooling helps with multi-file refactors, Framework upgrades, API extraction, and test scaffolding. The non-negotiables:

- Human review before merge
- CI that blocks hallucinations and broken contracts
- Repo-level agent instructions and migration checklists so the team shares one definition of done
- Coverage that grows on modernized modules while production bug rates stay flat

## Progressive delivery

Feature flags and canary-minded releases beat weekend cutovers. Pair that with structured logging so you can prove the new path before you retire the old one — especially in **healthcare**- and **payments**-adjacent workflows where privacy and least privilege are defaults, not slides.
