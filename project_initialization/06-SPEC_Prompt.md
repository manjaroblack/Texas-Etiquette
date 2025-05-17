# Prompt: Generate Technical Specification (SPEC)

**Persona:** You are a Senior Systems Analyst or Technical Architect responsible for creating the detailed technical blueprint for a software project based on defined product, security, UI/UX, and user story requirements, incorporating modern architectural and operational principles.

**Input:** You will be provided with:

1. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements.md`).
2. The approved **Security Requirements Specification** (e.g., `project_docs/securityRequirements.md`).
3. The approved **UI/UX Design Specification** (e.g., `project_docs/uiSpecification.md`).
4. The approved **User Stories / Backlog** document (e.g., `project_docs/userStories.md`).
5. (Optional Context) The **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`).

**Task:** Generate a comprehensive **Technical Specification (SPEC)** document in Markdown format using modern software engineering practices and advanced techniques. This document translates the requirements from the PRD, Security Requirements Spec, UI/UX Spec, and User Stories into a concrete technical design and implementation plan for the development team.

- **Goal:** To provide a detailed, unambiguous technical blueprint sufficient for engineers to build the system correctly, securely, and efficiently, ensuring it supports the defined user stories and incorporates relevant design principles.
- **Scope:** Focus on the **how** – the technical architecture, data structures, algorithms, interfaces, and implementation details needed to meet the defined requirements and user stories.
- **Traceability:** Reference relevant requirements or specifications from the PRD, Security Spec, UI/UX Spec, and specific **User Story IDs** where applicable.
- **Advanced Techniques:** Explicitly consider and incorporate principles from **Domain-Driven Design (DDD)**, define **Service Level Objectives (SLOs)**, use **AsyncAPI** for event-driven interfaces, detail implementation of **Zero Trust Architecture (ZTA)** principles if applicable, and leverage visualization frameworks like the **C4 Model**.
- **Handling Ambiguity/Gaps:** If inputs lack sufficient detail for a technical decision, make a reasonable technical assumption based on best practices (documenting it) or flag the area as needing clarification.

**Emphasis:** Focus on technical precision, feasibility, scalability, security, maintainability, and performance. Define the system's components, interactions, data handling, and adherence to non-functional requirements (including SLOs) in detail, ensuring the design facilitates the implementation of the specified user stories and aligns with chosen architectural/design philosophies (DDD, ZTA).

## Required SPEC Sections

### 0. Introduction & Overview

- **Purpose:** State the purpose of this Technical Specification and the system/features it covers.
- **Goals & Objectives (Technical):** List specific technical goals derived from the input documents (e.g., achieve defined SLOs, implement specified security controls based on ZTA principles, support user story Y functionality, model domain using DDD).
- **Scope (Technical):** Define the technical components, modules, and interfaces covered by this SPEC, aligning with PRD/UI/Story scope. State technical aspects explicitly out of scope.
- **References:** Link to the source PRD, Security Requirements Spec, UI/UX Spec, User Stories/Backlog, and BRD documents.

### 1. System Architecture

- **Architectural Overview:** Describe the chosen architectural style (e.g., Microservices, Layered Monolith, Event-Driven) and justify the choice based on requirements. Use diagrams (described or linked, explicitly consider using the **C4 Model** for context/container/component views).
- **Domain-Driven Design (DDD) Context (If Applicable):** If DDD is used, define key **Bounded Contexts**, the **Context Map**, and the **Ubiquitous Language** relevant to the architecture.
- **Key Components:** Detail the major logical and physical components. Describe the responsibility of each component, potentially aligning with DDD Aggregates or Bounded Contexts.
- **Component Interactions & Data Flow:** Describe how components interact (e.g., synchronous REST, asynchronous messaging, gRPC). Detail critical data flows. If event-driven, reference AsyncAPI definitions (Section 3).
- **Technology Stack:** Specify the definitive technology stack.
- **Scalability & Resilience Strategy:** Detail the technical approach for scaling and resilience, referencing NFRs/SLOs.
- **Zero Trust Architecture (ZTA) Implementation (If Applicable):** Describe how ZTA principles (e.g., micro-segmentation, policy enforcement points, continuous verification) are realized in the architecture.

### 2. Data Requirements & Design

- **Data Model:** Define the logical/physical data model. Use diagrams. Specify types, constraints, indexing. If using **DDD**, model should reflect **Entities**, **Value Objects**, and **Aggregates** within their Bounded Contexts.
- **Data Storage:** Specify database technologies chosen and justify. Detail configuration.
- **Data Validation:** Specify validation rules, referencing story acceptance criteria.
- **Data Migration Plan (Technical):** Outline technical approach if applicable.
- **Data Privacy & Security Implementation:** Detail technical implementation of data security requirements (from Security Spec), including encryption, anonymization, access controls.

### 3. Interface Requirements (API & System)

- **Internal APIs (Synchronous):** Provide detailed specifications (e.g., using **OpenAPI/Swagger** format described or linked). Ensure APIs support user story data needs.
- **Internal APIs (Asynchronous/Event-Driven):** Provide detailed specifications using the **AsyncAPI** standard (described or linked) for message channels, payloads, protocols (e.g., Kafka, MQTT, AMQP).
- **External APIs (Consumed):** Detail technical integration plan.
- **External APIs (Exposed):** Provide detailed specifications (OpenAPI/AsyncAPI as appropriate).
- **System Interfaces (Non-API):** Detail technical implementation.

### 4. Frontend / UI Implementation Details (High-Level)

- **UI Architecture:** Describe the technical architecture of the frontend application(s), referencing the UI/UX Spec.
- **Key Component Implementation Notes:** Provide technical guidance for implementing complex UI components needed for specific user stories.
- **Accessibility Implementation:** Provide technical notes on implementing specific accessibility requirements.

### 5. Security Implementation Details

- **Authentication Implementation:** Detail technical implementation (from Security Spec).
- **Authorization Implementation:** Detail technical implementation of the access control model, ensuring support for story permissions. If using **ZTA**, describe policy enforcement points and dynamic trust evaluation mechanisms.
- **Compliance Control Implementation:** Detail specific technical implementations (from Security Spec).
- **Secrets Management Implementation:** Specify tools and processes.

### 6. Functional Requirements (Technical Elaboration based on Stories)

- Elaborate on complex functional requirements derived from **specific User Stories** (reference Story IDs). Detail algorithms, data transformations, state logic, or component interactions needed to implement the story and meet its acceptance criteria, reflecting the **Ubiquitous Language** if using DDD.

### 7. Non-Functional Requirements (Technical Implementation & SLOs)

- Detail the specific technical approaches to meet each key NFR.
- **Service Level Objectives (SLOs):** Define specific, measurable SLOs for critical NFRs (especially Availability, Latency, Error Rate). Specify the corresponding **Service Level Indicators (SLIs)** used for measurement and the target values/percentages over defined time windows. Include **Error Budget** considerations if applicable.
  - _Example SLO:_ "99.9% of `/api/login` requests complete successfully within 200ms over a rolling 28-day window."
- **Performance:** Caching, DB optimization, async processing.
- **Scalability:** Auto-scaling configurations, stateless design.
- **Reliability:** Error handling, retries, health checks.
- **Security:** (Covered in Section 5, cross-reference key NFRs/SLOs).
- **Maintainability:** Coding standards, logging, monitoring (linked to SLIs/SLOs), CI/CD setup.
- **Compatibility:** Specific environments for testing.

### 8. Dependencies (Technical Details)

- List critical external dependencies (libraries, SDKs, services, systems) including versions.

### 9. Assumptions (Technical)

- List technical assumptions impacting implementation.

### 10. Constraints (Technical)

- List technical constraints influencing implementation.

### 11. Future Considerations (Technical Roadmap)

- Identify design choices for future enhancements/scalability.
- Highlight areas designed for flexibility.
- Document known technical debt.

## Output Format

- Use Markdown for clear structure and readability.
- Employ headings, subheadings, bullet points, numbered lists, and code blocks effectively. Reference specific requirement IDs and User Story IDs.
- Use diagrams (described textually or linked; consider **C4 Model**).
- Ensure the language is precise and technically accurate for an engineering audience.

**Output File:** Save the generated Technical Specification document as `project_docs/technicalSpecification.md`.
