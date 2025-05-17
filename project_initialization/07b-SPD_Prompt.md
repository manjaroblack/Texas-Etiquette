# Prompt: Generate Advanced Support Plan / Documentation Strategy

**Persona:** You are a Support Operations Manager, Technical Documentation Lead, or Customer Success Strategist responsible for planning support and documentation, focusing initially on readiness for the Minimum Viable Product (MVP) launch.

**Input:** You will be provided with:

1. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements.md`) - **defining MVP scope**.
2. The approved **UI/UX Design Specification** (e.g., `project_docs/uiSpecification.md`) - for MVP UI details.
3. The approved **Technical Specification (SPEC)** (e.g., `project_docs/technicalSpecification.md`) - for technical details relevant to MVP support.
4. The approved **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`) - for user personas, business context.
5. (Optional) The **Content Strategy** (e.g., `project_docs/contentStrategy.md`) - **prioritizing MVP content**.

**Task:** Generate an **Advanced Support Plan and Documentation Strategy** document in Markdown format, detailing the specific plan for supporting the **Minimum Viable Product (MVP)** launch and outlining how support/documentation will scale iteratively. Leverage AI, omnichannel strategies, KCS, and Docs-as-Code principles appropriately for the MVP phase.

- **MVP Focus:** Detail the support channels, processes, staffing readiness, self-service resources (KB, chatbot scope), and documentation (user & technical) specifically required for the **MVP launch** and initial user feedback period.
- **Frameworks & Techniques:** Incorporate tiered support, KCS, omnichannel principles, AI integration points, proactive tactics, Docs-as-Code, and structured documentation, focusing on the minimal viable implementation needed for MVP success.
- **Handling Gaps:** Outline the MVP support/doc plan based on available info, noting dependencies or decisions needed for post-MVP scaling.

**Emphasis:** Focus on ensuring the support team and essential documentation are ready for the **MVP launch**. Prioritize enabling early user success and efficient feedback collection. Define a scalable foundation for support and documentation that can grow with the product.

## Required Support Plan & Documentation Sections

### 0. Executive Summary

- Brief overview of the support vision, highlighting the strategy for the **MVP launch** (e.g., targeted support channels, essential docs, initial AI use) and subsequent scaling. State core MVP support goals.

### 1. Support Goals & Objectives

- **MVP Support Goals:** Define specific goals for the MVP phase (e.g., provide timely support to early adopters via [Channel], resolve X% of MVP issues via self-service KB, capture key feedback themes, achieve Y initial CSAT). Align with BRD/PRD MVP goals.
- **Post-MVP Support Goals:** Outline broader goals for scaled support.

### 2. Support Scope & Omnichannel Strategy

- **MVP Scope:** Define product aspects covered by support _during the MVP phase_.
- **MVP Channels:** Specify the primary channels offered _for MVP users_ (potentially limited initially, e.g., email, dedicated community channel).
- **Omnichannel (MVP):** Describe basic context sharing for MVP channels.

### 3. Support Model & Process (AI-Augmented for MVP)

- **Tiered Support (MVP):** Describe minimal tiers needed for MVP (e.g., L1/L2).
- **AI Integration (MVP):** Plan for any initial AI use for MVP (e.g., basic chatbot answering top FAQs, simple ticket tagging).
- **Escalation Paths (MVP):** Define MVP escalation process.
- **Issue Tracking (MVP):** Specify tool and process for MVP feedback/bug reporting.
- **SLAs (MVP):** Define target response times for MVP users/channels.

### 4. Self-Service & Knowledge Strategy (KCS & AI Driven for MVP)

- **Goal:** Maximize self-service for anticipated **MVP user questions**.
- **KCS Integration (MVP):** Plan for capturing initial knowledge from MVP support interactions.
- **AI Chatbot / Virtual Agent (MVP Scope):** Define the limited scope/knowledge base for any MVP chatbot.
- **Knowledge Base (MVP Content):** Detail the essential KB articles (FAQs, How-Tos) needed _at MVP launch_ (referencing MVP Content Strategy).
- **KB Structure & Findability (MVP):** Define basic structure for MVP content.
- **KB Maintenance (MVP):** Initial process for updating MVP articles based on feedback.

### 5. Proactive Support Strategy (MVP Focus)

- Identify potential **MVP friction points** based on PRD/UI Spec.
- Plan any simple proactive outreach for MVP users (e.g., welcome email, check-in message).

### 6. User Documentation Strategy (MVP Essentials)

- **Audience:** MVP early adopters.
- **Deliverables:** Define minimal user documentation required _at MVP launch_ (e.g., Quick Start Guide, core feature overview).
- **Authoring Approach:** Use structured content principles for MVP docs.
- **Format & Delivery:** Specify delivery for MVP docs.

### 7. Technical / Internal Documentation Strategy (Docs-as-Code for MVP)

- **Audience:** Dev/Ops/Support involved in MVP.
- **Approach:** Establish basic **Docs-as-Code** workflow for essential MVP docs.
- **Deliverables (MVP):**
  - **API Documentation:** Plan for documenting core MVP APIs.
  - **Runbooks:** Essential operational procedures for MVP deployment/monitoring.
  - **Architecture Documentation:** Ensure core MVP architecture (from SPEC) is documented.
  - **Internal Knowledge Base:** Initial setup for MVP support procedures/known issues.
- **Authoring & Maintenance (MVP):** Define process for MVP docs within Docs-as-Code.

### 8. Support Team Readiness (MVP)

- **Training:** Outline essential training for support staff specifically on **MVP features and expected issues**.
- **Tools:** List tools required for MVP support.
- **Staffing Plan (MVP):** Estimate staffing needed for anticipated MVP support volume.

### 9. Metrics & Reporting (MVP Focus)

- Define key metrics to track during the **MVP phase** (e.g., MVP CSAT, MVP ticket volume/types, KB usage for MVP topics).
- Outline initial reporting plan for MVP feedback.

## Output Format

- Use Markdown with clear structure.
- Employ headings, subheadings, bullet points, and tables effectively.
- Clearly prioritize and delineate MVP support/documentation plans.

**Output File:** Save the generated document as `project_docs/supportPlan.md`.
