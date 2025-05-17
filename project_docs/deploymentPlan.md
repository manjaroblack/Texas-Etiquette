# Deployment Plan: Texas Etiquette Online Presence Revitalization

## Introduction & Goals

### Purpose:
This document outlines the strategy, processes, environments, and tools for deploying the Texas Etiquette Online Presence Revitalization application. The primary focus is the initial deployment of the Minimum Viable Product (MVP) to establish the core online presence, enable online booking/payment, and gather initial user feedback, followed by a strategy for subsequent iterative releases.

### MVP Deployment Goals:
* Successfully deploy the MVP scope (User Stories MVP-STORY-01 to MVP-STORY-23) to production (approx. Week 10-11).
* Validate the core user journey: Service discovery -> Evaluation -> Booking -> Payment -> Confirmation.
* Ensure the MVP meets all PRD Release Criteria and Test Strategy MVP Exit Criteria (functionality, performance, security, responsiveness).
* Validate core infrastructure (PaaS, Booking/Payment integrations) under initial production load.
* Gather early user feedback and operational data.
* Achieve zero downtime during the final MVP deployment cutover.

### Post-MVP Goals:
* Establish a reliable, repeatable, and automated process for deploying incremental features.
* Improve deployment frequency and reduce lead time.
* Maintain high standards of security, performance, and availability.

## Overall Deployment Strategy & Workflow

### Overall Workflow:
A GitOps approach will be utilized. Changes to application code or infrastructure configuration in Git repositories will automatically trigger CI/CD pipelines.

### Deployment Patterns:
* **MVP Deployment Pattern:** Blue/Green Deployment.
    * *Justification:* Minimizes risk and allows zero-downtime deployment for the critical MVP launch. PaaS platforms like Vercel natively support this.
* **Post-MVP Deployment Pattern:** Continue with Blue/Green, potentially augmented with Canary Releases (via feature flags) for high-risk features.

### Feature Flags:
* **MVP Usage:** Minimal; core booking/payment must be functional.
* **Post-MVP Usage:** Extensively used (LaunchDarkly, Flagsmith, or config-based) to decouple deployment from release, facilitating Canary releases and A/B testing.

### Release Cadence:
* **MVP Release:** Single release event (Week 10/11).
* **Post-MVP Cadence:** Iterative releases (e.g., every 2-4 weeks) based on sprints, priorities, and feedback.

## Deployment Environments

* **Development (Dev):** Local developer machines; mocked/sandboxed external services.
* **QA / Staging:** Mirrors production; deployed via CI/CD. For QA, NFR, Regression, UAT. Requires sandbox access to Booking & Payment Gateways.
* **Production (Prod):** Live environment; deployed via CI/CD (manual approval for MVP) using GitOps.

### Infrastructure as Code (IaC):
* **Approach:** Terraform for cloud infrastructure (PaaS config, DNS, etc.).
* **Repository:** Dedicated Git repo for IaC definitions.
* **Policy-as-Code (PaC):** Checkov or Open Policy Agent (OPA) in CI for IaC security scanning.

### MVP Environment Considerations:
* **Scaling:** Scaled-down resource configurations for QA/Staging and initial Prod to balance cost and MVP performance NFRs.
* **Third-Party Accounts:** Dedicated sandbox/test accounts for Booking/Payment systems in QA/Staging; production accounts for Prod.

## Build & Packaging Process (CI)

### CI Tool:
GitHub Actions.

### CI Workflow Trigger:
Push/merge to main, push to feature branches, pull requests.

### CI Pipeline Steps:
1.  Checkout Code
2.  Setup Bun Environment
3.  Install Dependencies (bun install --frozen-lockfile)
4.  Lint Code (eslint)
5.  Run Unit Tests
6.  Software Composition Analysis (SCA) Scan (Bun's integrated security features / Snyk / Dependabot)
7.  Static Application Security Testing (SAST) Scan (CodeQL / SonarCloud)
8.  Secrets Scan (GitGuardian / GitHub Secret Scanning)
9.  Build Next.js Application
10. Build Docker Image (multi-stage, optimized for Next.js)
11. Tag Docker Image (e.g., `<git-sha>`, `<version>-mvp`)
12. Push Docker Image to Container Registry
13. (On Release Trigger) Create GitHub Release.

### Artifact Versioning:
Semantic Versioning (Major.Minor.Patch). MVP: `1.0.0-mvp`. Docker Image Tags: include Git SHA and SemVer.

### Containerization:
Next.js application packaged into a Docker container for consistent deployment. Multi-stage Dockerfile with secure Bun base image.

## Deployment Pipeline (CD)

### CD Tool:
Argo CD (or equivalent GitOps agent) or native PaaS deployment mechanisms (e.g., Vercel Git Integration).

### CD Workflow (GitOps Driven):
1.  Successful CI build creates a release candidate container image.
2.  Configuration Update (Manual PR for MVP Prod): Update deployment config in environment config Git repo with new image tag.
3.  Approval (MVP Prod): Manual approval to merge config change PR.
4.  GitOps Sync: Agent detects change in config repo.
5.  Deployment Execution (Blue/Green):
    * Provision "Green" environment with updated image.
    * Run health checks/smoke tests on Green.
    * Traffic Switch: Instant switch from "Blue" (old) to "Green" (new).
6.  Verification: Automated smoke tests and manual verification.
7.  Old Environment: "Blue" kept briefly for rollback, then decommissioned.

### MVP Pipeline Stages:
CI -> Manual Staging Deploy Approval -> Staging Deploy (GitOps) -> Automated Staging Smoke Tests -> QA & UAT Sign-off -> Manual Prod Deploy Approval -> Prod Deploy (GitOps Blue/Green, Tag: `1.0.0-mvp`) -> Automated Prod Smoke Tests -> Manual Post-Deployment Verification.

### Configuration and Secrets Management:
* **Configuration:** Environment-specific settings via environment variables in GitOps config repo.
* **Secrets:** API Keys, credentials managed via hosting provider's secrets management. Referenced securely by IaC/GitOps config. **NOT stored in Git.**

## Infrastructure Requirements

### Required Components:
PaaS Hosting (Vercel recommended), Container Registry, Booking System (Prod & Sandbox), Payment Gateway (Prod & Sandbox), DNS, CDN, Logging Service, Monitoring Service, CI/CD Platform (GitHub Actions), Git Repos. Optional: GitOps Agent, PaC Tool, Feature Flag Service.

### MVP Infrastructure:
Minimal viable PaaS plan. Essential Logging/Monitoring. Production and Sandbox accounts for selected Booking/Payment providers.

### Observability Infrastructure:
* **Logging:** Centralized application/infrastructure logs (PaaS native, Sentry). PII scrubbed.
* **Monitoring:** PaaS metrics, external uptime checks, SLO tracking, Core Web Vitals monitoring.
* **Tracing:** (Post-MVP) Distributed tracing if complexity increases.

## Rollback Strategy

### MVP Deployment Rollback:
* **Mechanism:** Via GitOps. Revert config repo commit or change image tag back to last known good version. Agent reconciles state.
* **Triggers:** Failed automated smoke tests, critical failures in manual verification, critical monitoring alerts, manual decision.
* **Testing:** Rollback process MUST be tested in QA/Staging before MVP production deployment.

## Pre-Deployment & Post-Deployment Procedures

### MVP Pre-Deployment Checklist (Production):
* [ ] All MVP User Stories meet DoD.
* [ ] All MVP Exit Criteria met in QA/Staging.
* [ ] No outstanding Severity 1/2 defects.
* [ ] UAT signed off.
* [ ] Production secrets/config securely loaded.
* [ ] IaC changes validated/applied.
* [ ] Production environment health checks passing.
* [ ] Rollback plan tested.
* [ ] Communication plan shared.
* [ ] Final Go/No-Go approval.

### MVP Post-Deployment Verification Checklist (Production):
* [ ] Automated Smoke Tests passed.
* [ ] Manually execute core user journey (Browse -> Select -> Book -> Test Payment -> Verify Confirmation UI & Email).
* [ ] Verify HTTPS site-wide.
* [ ] Verify core pages load correctly.
* [ ] Verify basic responsiveness.
* [ ] Basic security checks (headers, no sensitive data in source).
* [ ] Check Core Web Vitals.
* [ ] Monitor logs/metrics for 1+ hour.
* [ ] Verify GBP live/accurate.
* [ ] Verify core NAP citations.
* [ ] Communicate successful deployment.

## Database Migration Strategy

### MVP Schema/Data:
No Application Database required for MVP. Contact form data emailed, not stored. Booking/Payment data in third-party systems. No database migration steps for MVP.

### Post-MVP Schema/Data:
If future features require a database, a formal migration strategy (e.g., Prisma Migrate, Flyway) will be implemented with versioned scripts, automated application in CD, and backup/rollback plans.

## UI Deployment Considerations

Frontend UI assets (JS, CSS, images) built during CI and deployed with the application. Next.js handles cache-busting (hashed filenames). PaaS CDN handles caching/delivery. No special UI asset deployment steps beyond standard CI/CD.

## Security & Compliance Integration (DevSecOps)

### Pipeline Security:
* **SCA:** Integrated into CI (fail on High/Critical).
* **SAST:** Integrated into CI (scan code, flag PRs/fail builds).
* **Secrets Scanning:** Integrated into CI (prevent accidental commits).
* **DAST:** Scans against QA/Staging post-deployment.

### Infrastructure Security:
* **IaC Scanning (PaC):** Terraform code scanned in CI before apply.
* **Secure Configuration:** IaC defines secure defaults.
* **WAF:** Configured via PaaS/IaC.

### MVP Security Checks:
* **Pre-Deployment:** Verify CI scans passed, PaC scans passed, prod secrets secure.
* **Post-Deployment:** Verify HTTPS, secure payment flow, security headers, WAF logs.

### Secrets Management Implementation:
Hosting provider's secrets management. Inject as environment variables. Access controlled via IAM. Managed via secure GitOps config (referencing secret store).

## Roles & Responsibilities

* **DevOps Engineer / Release Manager:** Owns Deployment Plan, CI/CD, IaC, GitOps, rollbacks. Triggers/monitors deployments. MVP Prod deploy approval.
* **Development Team:** Develops code, unit tests, Dockerfile. Fixes bugs. Ensures app builds.
* **QA Team / SDET:** Test plans, manual/automated tests, verifies builds, regression tests, post-deploy checks. Build quality sign-off.
* **Product Owner / Business Owner:** Prioritizes, UAT & sign-off, Go/No-Go decision, accepts features. Final MVP deployment acceptance.
* **Security Team (or Champion):** Reviews scans, advises on secure config, security best practices. Security oversight.
