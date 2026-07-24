---
title: "Next.js SSR and Lighthouse: from mid-50s to production-grade UX"
description: "How SSR, payload reduction, and mobile-minded CSS turned a sluggish B2C React experience into something users (and Lighthouse) respect."
pubDate: 2026-02-14
tags: ["Next.js", "React", "SSR", "Lighthouse", "TypeScript", "Performance"]
heroImage: "/blog/nextjs-ssr-lighthouse-performance.jpg"
heroAlt: "Laptop with analytics charts for performance work"
heroCredit: "Carlos Muza"
heroCreditUrl: "https://unsplash.com/@kmuza?utm_source=dane_cameron_portfolio&utm_medium=referral"
---

At Checkr-era product work, one of the clearest before/after stories was **Lighthouse**: key pages moved from about **55 to about 92** after we treated performance as a full-stack problem — not a CSS polish pass.

## What actually moved the score

- **SSR** for the critical path so first paint was not blocked on a blank SPA shell
- **Payload reduction** — drop unused JS, shrink JSON contracts, stop shipping admin-only code to customers
- Mobile-minded layout and CSS so mid-tier devices were first-class
- Measuring with Lighthouse and network traces instead of guessing

## Full-stack coupling

SSR helps, but a chatty API or unindexed SQL query still burns Time to Interactive. Pair frontend work with:

- leaner REST responses from **ASP.NET Core** or Node APIs
- caching where safe (**Redis**)
- CDNs and image discipline for B2C catalogs

## Shipping culture

Performance regressions belong in CI the same way unit tests do. A failing Lighthouse budget on a PR is cheaper than a support ticket that says “the app feels broken.”

If you build ecommerce, healthcare portals, or fintech dashboards, treat **Lighthouse** as a product metric — alongside conversion and error rates.
