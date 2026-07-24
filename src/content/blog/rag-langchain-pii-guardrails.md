---
title: "RAG with guardrails: LangChain helpers that do not leak PII"
description: "How I package internal RAG tooling with data masking and eval checks so builders get AI speed without turning regulated data into prompt paste."
pubDate: 2026-01-30
tags: ["RAG", "LangChain", "LangSmith", "AI", "PII", "FastAPI", "Python"]
heroImage: "/blog/rag-langchain-pii-guardrails.jpg"
heroAlt: "Robot hand suggesting AI systems"
heroCredit: "Possessed Photography"
heroCreditUrl: "https://unsplash.com/@possessedphotography?utm_source=dane_cameron_portfolio&utm_medium=referral"
---

AI-assisted delivery is now a hiring signal and a daily habit. The risk in healthcare and fintech contexts is obvious: someone pastes **PII** into a prompt. On internal platform work I have packaged **LangChain / LangSmith** RAG helpers with **data-masking guardrails** and eval checks so teams move faster without leaking source documents.

## Design goals

- Retrieve with metadata filters — do not stuff entire corpora into context
- Mask sensitive fields **before** the model sees them
- Route low-confidence answers to human review instead of confident hallucination
- Accept a small latency cost (retrieval) for safer grounding

On an internal eval set, that pattern cut leak/hallucination risk on the order of ~35% while remaining usable for builders.

## Production shape

A thin **FastAPI** (or Node) service in front of the RAG pipeline, React UI for operators, secrets never in the client, and CI that runs eval smoke tests — not only unit tests.

## What “AI productivity” should mean on a resume

Not “I used Copilot.” Instead: **you understand capabilities and limits**, you put guardrails in the path, and you measure outcomes. That matches how serious consulting and product teams talk about AI in 2026.
