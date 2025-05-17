# Prompt: Generate Advanced Deployment Plan

**Persona:** You are a DevOps Engineer or Release Manager responsible for planning the deployment and release process for a new software application using modern, advanced techniques, with an initial focus on the Minimum Viable Product (MVP).

**Input:** You will be provided with the following project documents:

* **SPEC Document (`project_docs/technicalSpecification.md`):** Contains NFRs, system architecture overview.
* **BRD Document (`project_docs/businessRequirements.md`):** Contains business goals, timeline constraints.
* **PRD Document (`project_docs/productRequirements_mvp.md`):** Contains release strategy ideas, NFRs, **defined MVP scope**.
* **UI Requirements Document (`project_docs/uiSpecification.md`):** Contains UI specifications.
* **Security Requirements Document (`project_docs/securityRequirements.md`):** Contains infrastructure security and secure configuration requirements.
* **User Stories Document (`project_docs/userStories.md`):** Contains **MVP-prioritized stories**.
* **Testing Strategy Document (`project_docs/testStrategy.md`):** Contains test environments and **MVP exit criteria**.

**Task:** Generate a detailed **Advanced Deployment Plan** document in Markdown format, explicitly outlining the strategy for deploying the **Minimum Viable Product (MVP)** first, followed by subsequent iterative releases. This document should detail the strategy, environments, processes, and tools required to deploy the application reliably, securely, and efficiently, incorporating modern workflows and techniques.

* **MVP Focus:** Detail the specific procedures, configurations, rollout strategy, and verification steps for the initial MVP deployment. Contrast this with potential strategies for later, incremental feature releases if different.
* **Advanced Techniques:** Incorporate GitOps, Feature Flags, Policy-as-Code (PaC), Infrastructure as Code (IaC), CI/CD, containerization, and DevSecOps principles as applicable, considering their application to both MVP and later releases.

**Emphasis:** Create a practical, actionable plan focused on successfully deploying the **MVP** to gather initial feedback. Ensure the MVP deployment is reliable and secure. Outline how the deployment process might evolve for subsequent feature increments.

## Required Sections

### 0. Introduction & Goals

* State the purpose of the deployment plan, highlighting the MVP-first approach.
* Outline key deployment goals for the **MVP release** (e.g., successful initial rollout, gather user feedback, validate core infra) and potentially broader goals for subsequent releases.

### 1. Overall Deployment Strategy & Workflow

* **Overall Workflow:** Describe the high-level workflow (e.g., GitOps approach).
* **Deployment Patterns:**
  * **MVP Deployment Pattern:** Specify the pattern chosen for the *initial MVP release* (e.g., potentially simpler Rolling Update, or Blue/Green if zero downtime is critical even for MVP). Justify the choice for MVP.
  * **Post-MVP Deployment Pattern:** Describe the intended pattern for subsequent feature releases (e.g., Canary, Blue/Green with feature flags).
* **Feature Flags:** Detail the strategy for using feature flags, especially for enabling/disabling post-MVP features deployed incrementally.
* **Release Cadence:** Outline the cadence, starting with the MVP release and potential frequency thereafter.

### 2. Deployment Environments

* Detail environments (Dev, Test/QA, Staging, Prod). Specify IaC approach.
* **MVP Environment Considerations:** Note any specific configurations or scaling differences for the MVP phase vs. full scale.

### 3. Build & Packaging Process (CI)

* Outline the CI process (build, test, scan, package).
* Specify artifact versioning (how will MVP artifacts be tagged/identified?).
* Detail containerization strategy.

### 4. Deployment Pipeline (CD)

* Detail the automated CD workflow using specified CI/CD tools.
* **MVP Pipeline Stages:** Clearly outline the pipeline stages specifically required for deploying and verifying the MVP.
* **Post-MVP Pipeline Stages:** Mention any additional stages needed for more complex rollouts later (e.g., canary analysis stage).
* Describe Configuration and Secrets Management.

### 5. Infrastructure Requirements

* List required infrastructure components based on SPEC.
* **MVP Infrastructure:** Specify the minimal infrastructure needed to support the MVP load and functionality. Compare with potential full-scale requirements.
* Detail observability infrastructure (monitoring, logging, tracing).

### 6. Rollback Strategy

* Define the rollback process for both **MVP deployment** and subsequent releases. Specify triggers and testing.

### 7. Pre-Deployment & Post-Deployment Procedures

* **MVP Pre-Deployment:** List checks specifically needed before the initial MVP deployment.
* **MVP Post-Deployment:** List verification steps critical for validating the MVP deployment (referencing MVP exit criteria from Test Plan).
* **General Procedures:** Outline standard checks for subsequent releases.

### 8. Database Migration Strategy

* Describe schema change management.
* **MVP Schema/Data:** Detail specific steps for deploying the initial MVP database schema and any required seed data.
* Specify backup/rollback for database changes.

### 9. UI Deployment Considerations

* Describe strategy for deploying UI assets.
* Outline versioning/caching for MVP and subsequent updates.

### 10. Security & Compliance Integration (DevSecOps)

* **Pipeline Security:** Detail security checks within CI/CD.
* **Infrastructure Security:** Describe secure configuration (IaC) and verification (PaC).
* **MVP Security Checks:** Highlight any specific security validations critical before/after the MVP deployment.
* Detail Secrets Management implementation.

### 11. Roles & Responsibilities

* Define roles and responsibilities for MVP deployment and subsequent releases.

## Output Format

* Clear Markdown structure.
* Use diagrams (e.g., Mermaid syntax for workflow) or tables where helpful.
* Clearly differentiate between MVP-specific plans and general/post-MVP plans.

**Emphasis:** Create a practical plan focused on the successful initial deployment of the MVP. Ensure reliability and security for the MVP launch, while outlining a scalable process for future iterations.

---

**Output File:** Save the generated Deployment Plan document as `project_docs/deploymentPlan.md`.
