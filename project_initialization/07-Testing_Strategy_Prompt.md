# Prompt: Generate Test Strategy / Plan

**Persona:** You are a QA Lead, Test Architect, or SDET (Software Development Engineer in Test) responsible for defining the comprehensive testing approach for a project, prioritizing validation of the Minimum Viable Product (MVP).

**Input:** You will be provided with:

1. The approved **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`) - for success criteria, business risks, high-level NFRs.
2. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements.md`) - **including defined MVP scope and release criteria**.
3. The **User Stories Document** (e.g., `project_docs/userStories.md`) - **structured with MVP stories prioritized**.
4. The approved **Security Requirements Specification** (e.g., `project_docs/securityRequirements.md`) - for specific security testing requirements.
5. The approved **UI/UX Design Specification** (e.g., `project_docs/uiSpecification.md`) - for user flows, components, accessibility guidelines.
6. The approved **Technical Specification (SPEC)** (e.g., `project_docs/technicalSpecification.md`) - for architecture, technical NFRs, APIs, dependencies.

**Task:** Generate a comprehensive **Test Strategy and High-Level Test Plan** document in Markdown format, with a clear focus on validating the **Minimum Viable Product (MVP)** first. This document defines the overall approach, scope, resources, processes, and tools for verifying the quality of the product against requirements, ensuring the MVP meets its defined goals and release criteria before planning subsequent iterative testing.

* **MVP Focus:** Explicitly detail the testing scope, activities, environments, and criteria specifically required to validate the MVP features and core user journeys defined in the PRD and User Stories.
* **Frameworks:** Incorporate concepts like the Testing Pyramid/Trophy, Risk-Based Testing (RBT), Behavior-Driven Development (BDD) / Acceptance Test-Driven Development (ATDD), Continuous Testing in CI/CD, and appropriate testing levels/types, applying them first to the MVP scope.
* **Handling Gaps:** Where specific details are pending, outline the strategy and note dependencies or areas needing further definition, particularly concerning MVP validation.

**Emphasis:** Focus on defining a comprehensive and risk-driven testing approach that ensures adequate coverage for the **MVP**, identifies critical defects early, validates that the MVP meets business/functional/non-functional requirements, and defines clear **MVP exit criteria**. Outline how testing will adapt for subsequent iterations.

## Required Test Strategy / Plan Sections

### 0. Introduction & Overview

* **Purpose:** State the purpose of the Test Strategy/Plan, emphasizing the MVP validation goal.
* **Scope:**
  * Define the overall product/features covered.
  * **MVP Testing Scope:** Clearly define features, components, user stories, and requirements (functional & non-functional) included in the **MVP testing effort**. Reference PRD/User Stories MVP definitions.
  * **Post-MVP Testing Scope:** Briefly outline the approach for testing subsequent iterations/features.
  * **Out of Scope:** Explicitly state what will *not* be tested for the MVP release.
* **Goals:** Outline testing goals, prioritizing MVP validation (e.g., verify core MVP user journey, validate MVP NFRs, confirm MVP security posture).
* **References:** Link to source BRD, PRD (MVP version), User Stories (MVP version), Security Spec, UI/UX Spec, SPEC documents.

### 1. Quality Criteria & Exit Criteria

* **Quality Attributes:** Define key quality attributes, focusing on those critical for MVP success.
* **MVP Exit Criteria:** Define the specific, measurable conditions that must be met for **MVP testing** to be considered complete and the MVP ready for release (referencing PRD MVP Release Criteria). Examples: All MVP user stories pass AC, critical MVP NFRs met, no outstanding Sev1/Sev2 defects in MVP scope, successful MVP UAT sign-off.
* **Overall Exit Criteria:** Briefly mention criteria for subsequent releases.

### 2. Test Approach & Methodology

* **Overall Strategy:** Describe the main approach (e.g., RBT, BDD/ATDD), emphasizing application to the MVP first.
* **Testing Levels & Types (MVP Focus):** Detail the approach for each level/type *as applied to the MVP scope*:
  * **Unit Testing:** Expectations for MVP-related code.
  * **Integration Testing:** Strategy for testing interactions core to the MVP functionality (APIs, components).
  * **System Testing:** End-to-end testing approach focused on MVP user stories and workflows.
  * **Acceptance Testing (MVP):**
    * **UAT:** Plan for MVP UAT (participants, process, scope).
    * **BAT:** Plan for verifying MVP meets core business goals.
  * **Exploratory Testing:** Approach for exploring the MVP scope.
* **Regression Testing:** Strategy for MVP regression (identifying the core regression suite needed for MVP stability).

### 3. Scope of Testing (Detailed - MVP Prioritized)

* **Functional Testing (MVP):** List key MVP features/user stories to be tested, referencing Gherkin AC.
* **Non-Functional Testing (MVP):** Detail the scope and approach *for the MVP* for:
  * **Performance Testing:** Key MVP scenarios, tools, target metrics.
  * **Security Testing:** MVP scope (referencing Security Spec), key controls to verify.
  * **Usability Testing:** MVP scope (key flows from UI/UX Spec).
  * **Accessibility Testing:** MVP scope (WCAG level for core MVP elements).
  * **Compatibility Testing:** Core browsers/devices for MVP.
  * **Reliability/Recovery Testing:** Basic validation for MVP.
* **Post-MVP NFR Testing:** Briefly mention plans for broader NFR testing in later phases.

### 4. Test Environments (MVP Support)

* Define environments needed *to support MVP testing* (QA/Staging, UAT).
* Specify configuration management (IaC) and data strategies focused on MVP needs.

### 5. Test Data Management (MVP Focus)

* Outline strategy for obtaining/generating/managing test data required *for MVP scenarios*. Address privacy/security.

### 6. Test Automation Strategy (MVP Prioritized)

* **Scope:** Identify MVP areas suitable for automation (e.g., core regression suite, key API tests).
* **Tools & Frameworks:** Specify planned tools.
* **Goals:** Define automation goals specifically for supporting MVP testing and regression.

### 7. Defect Management Process

* **Tool:** Specify defect tracking tool.
* **Workflow:** Define defect lifecycle, emphasizing prioritization based on impact to **MVP functionality**.

### 8. Test Deliverables

* List deliverables, highlighting those specific to MVP validation (e.g., MVP Test Summary Report).

### 9. Roles & Responsibilities

* Define roles and responsibilities for MVP testing activities.

### 10. Schedule & Milestones (MVP Focus)

* Outline key testing milestones specifically for the MVP release. Estimate duration for MVP testing phases.

### 11. Risks & Mitigation (Testing Related - MVP Focus)

* Identify potential risks specifically impacting the MVP testing effort and propose mitigations.

## Output Format

* Use Markdown with clear structure.
* Employ headings, subheadings, bullet points, and tables effectively.
* Clearly delineate MVP-specific plans vs. overall/future plans.

**Output File:** Save the generated document as `project_docs/testStrategy.md`.
