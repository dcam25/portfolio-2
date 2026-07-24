---
title: "MERN in production: React, Node, Express, and when to add SQL"
description: "Shipping MongoDB + Express + React + Node apps with TypeScript, CI/CD, Docker, and clear rules for when PostgreSQL/MySQL still belong in the design."
pubDate: 2026-04-08
tags: ["MERN", "React", "Node.js", "Express", "MongoDB", "TypeScript", "Docker"]
---

**MERN** roles still show up constantly. The production bar is not “can you scaffold Create React App + Express” — it is whether the stack stays operable when analytics, governance, and cloud deploys enter the chat.

## Default shape

- **React** UI with HTML/CSS/Bootstrap-class systems (or your design tokens) and **TypeScript**
- **Node.js + Express** REST APIs with MVC/MVVM separation so UI state does not leak into persistence
- **MongoDB** for document-shaped product data
- **PostgreSQL / MySQL** beside Mongo when relational integrity, reporting, or partner schemas demand it

Polyglot data is normal. Pretending everything is a document is how lineage and joins become night-shift work.

## Delivery

GitHub Actions (and Jenkins where the org still lives there), Dockerized services, AWS/Azure deploys, and release automation that a fusion team can trust. Mentoring and documentation matter as much as the framework choice when business and AI/ML partners share the same backlog.

## AI-adjacent without losing the plot

Dashboards and APIs that consume processed data, plus guarded RAG helpers behind the API, belong in the MERN story when the product needs them — with the same quality, security, and data-governance habits as any other service.
