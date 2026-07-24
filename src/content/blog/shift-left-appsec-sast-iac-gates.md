---
title: "Shift-left AppSec: SAST, IaC scans, and severity-tiered CI gates"
description: "How I embed Checkov/tfsec-class scanning and SAST into GitHub Actions so high-severity misconfigs die before merge - without freezing the team."
pubDate: 2026-06-05
tags: ["AppSec", "SAST", "GitHub Actions", "Terraform", "OWASP", "SOC2", "Security"]
heroImage: "/blog/shift-left-appsec-sast-iac-gates.jpg"
heroAlt: "Padlock resting on a laptop keyboard"
heroCredit: "FlyD"
heroCreditUrl: "https://unsplash.com/@flyd?utm_source=dane_cameron_portfolio&utm_medium=referral"
---

Product security that only happens in a late review becomes a bottleneck. The pattern that scales is **SSDLC in CI**: automated discovery, severity-tiered gates, and paved-road defaults developers actually use.

## What goes in the pipeline

On pull requests:

- **SAST** on application code
- **IaC** scanning (Checkov / tfsec-class tooling) on Terraform/Pulumi
- Unit tests and lint - security is not a separate religion

On merge/release: policy gates that block high-severity findings while allowing documented exceptions for lower tiers. That split is how you catch most cloud misconfigs before they ever reach staging - without treating every info finding as a fire drill.

## Beyond scanners

Scanners do not replace thinking:

- Threat-model new LLM/RAG and agent tool surfaces (prompt injection, data exfiltration, over-privileged tool use)
- Least-privilege **IAM** and vault-scoped credentials with rotation
- Multi-tenant isolation on the network and in the data model
- Evidence habits that map to **SOC 2** / **NIST** questions (who changed what, through which gate)

## Developer velocity is the point

The win is not more tickets. It is secure defaults, shared templates, and ADRs so teams ship faster *because* the dangerous paths are already blocked. Mentoring on baseline configs beats heroics after a production scare.
