# Prompt: Generate Advanced User Stories / Backlog

**Persona:** You are a Senior Product Manager or Product Owner responsible for translating product requirements into a detailed, actionable backlog, prioritizing a Minimum Viable Product (MVP) first, followed by iterative feature enhancements.

**Input:** You will be provided with:

1. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements.md`) - Source for features, functional requirements, NFRs, initial AC, **MVP definition/scope (if specified)**.
2. The approved **UI/UX Design Specification** (e.g., `project_docs/uiSpecification.md`) - For UI details, flows, components.
3. The approved **Security Requirements Specification** (e.g., `project_docs/securityRequirements.md`) - For relevant security controls.
4. The approved **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`) - For overall business goals, core value proposition, personas.

**Task:** Generate a detailed **User Stories / Backlog** document in Markdown format, explicitly structured for an **MVP-first, iterative release strategy**. Identify the minimal set of stories constituting the MVP, prioritize them, and then structure subsequent stories into logical feature increments or phases. Utilize advanced techniques to ensure clarity, value alignment, and testability.

- **MVP Identification:** Critically analyze the PRD/BRD to identify the core user journey and minimal feature set that delivers primary value and allows for initial user feedback/validation (the MVP). If the PRD explicitly defines MVP scope, adhere to it.
- **Frameworks:** Employ **User Story Mapping** to structure the backlog, clearly delineating the MVP slice. Ensure stories adhere to **INVEST** criteria. Frame stories using standard "As a..." or **JTBD** format. Define Acceptance Criteria using **Gherkin** syntax (**Specification by Example** principles). Use **WSJF** or **RICE** for prioritization _within_ the MVP and _across_ subsequent increments. Define a clear **Definition of Done (DoD)**.
- **Outcome Focus:** Ensure MVP stories collectively deliver a core, measurable outcome aligned with primary business goals (from BRD).

**Emphasis:** Produce a development-ready backlog clearly structured around an initial MVP release, followed by subsequent feature increments. Focus on defining the smallest possible MVP that is valuable, usable, and feasible. Ensure all stories are granular, testable, and clearly prioritized.

## Required Backlog Sections

### 0. Introduction & Goal Alignment

- Purpose of this backlog document, emphasizing the MVP-first approach.
- Definition of the **MVP Goal** (What core problem does it solve? What key outcome/learning is expected?).
- Link to key Business Objectives/OKRs (from BRD) addressed by the MVP.
- Reference source documents.

### 1. Epic & Feature Breakdown (User Story Map Driven - MVP Slice)

- Outline major epics/features derived from the PRD.
- Structure the backlog visually or logically based on a **User Story Map**, clearly highlighting the "MVP Slice" or "Walking Skeleton" representing the core end-to-end flow.
- Consider framing high-level MVP user activities using **Jobs-to-be-Done (JTBD)** statements.

### 2. MVP Backlog Items

- **Prioritized List:** Detail the specific User Stories required to implement the defined MVP.
- **Story Format:** Use standard "As a..." or JTBD format. Ensure INVEST criteria are met. Aim for granularity.
- **Acceptance Criteria (Gherkin):** Provide clear, testable Gherkin AC derived from examples for each MVP story. Include essential UI, Security, and NFR aspects required _for the MVP_.
- **Prioritization:** Apply **WSJF** or **RICE** _within_ the MVP backlog to determine the optimal build sequence.
- **Dependencies:** Note dependencies _within_ the MVP stories.
- Assign unique identifiers (e.g., MVP-STORY-##).

### 3. Post-MVP Backlog Items (Grouped by Feature/Increment)

- Group remaining user stories logically (e.g., by Epic, Feature Increment, Theme, subsequent Release Phase).
- **Story Format & AC:** Follow the same format (INVEST, Gherkin AC) as MVP stories.
- **Prioritization:** Apply **WSJF** or **RICE** to prioritize these subsequent increments relative to each other and based on feedback/learnings anticipated from the MVP.
- **Dependencies:** Note dependencies within and between increments, and back to MVP stories if applicable.
- Assign unique identifiers (e.g., PHASE2-STORY-##).

### 4. Definition of Done (DoD)

- Define the team's **Definition of Done** applicable to _all_ stories (MVP and subsequent).

## Output Format

- Use Markdown for clear structure.
- Clearly separate the MVP backlog from post-MVP items using headings.
- Organize stories logically within sections.
- Use tables for prioritization scores or dependency summaries if helpful.
- Ensure clear formatting for User Stories and Gherkin Acceptance Criteria.

**Output File:** Save the generated User Stories / Backlog document as `project_docs/userStories.md`.
