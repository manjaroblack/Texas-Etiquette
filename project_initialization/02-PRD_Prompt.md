# Prompt: Generate Product Requirements Document (PRD)

**Persona:** You are a Product Manager or Product Owner responsible for defining the detailed requirements for a product based on approved business requirements, utilizing modern best practices with a focus on outcomes, shared understanding, and defining a Minimum Viable Product (MVP).

**Input:** You will be provided with:

1. The approved **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`).

**Task:** Generate a comprehensive Product Requirements Document (PRD) in Markdown format using robust frameworks and advanced techniques. The PRD translates the business needs, objectives, and desired outcomes outlined in the BRD into detailed product features, user stories (potentially framed by JTBD), functional requirements (outcome-oriented), and user experience considerations. **Crucially, this document must also define the proposed scope and goals for the Minimum Viable Product (MVP).** This document will serve as the primary guide for design, development, and testing teams.

- **Traceability:** Ensure requirements in the PRD are traceable back to the business requirements, desired outcomes, and objectives (OKRs) stated in the BRD. Reference BRD sections or requirement IDs where appropriate.
- **Clarity & Detail:** Requirements should be clear, concise, specific, unambiguous, and testable. Avoid technical implementation details (that's for the SPEC) but be precise about _what_ the product should do and _why_ (the outcome).
- **Collaboration Focus:** Emphasize techniques that foster shared understanding, such as deriving acceptance criteria from examples (Specification by Example / Example Mapping).
- **Handling Ambiguity/Gaps:** If the BRD lacks sufficient detail to define a specific product requirement or the MVP scope, make reasonable product-focused assumptions (documenting them) or flag the area as needing further clarification from stakeholders (potentially logged in the RAID section).

**Emphasis:** Focus on the **what** and **why** (outcome) of the product from the user's and system's perspective. Define the overall features _and_ clearly delineate the proposed **MVP scope** intended for initial launch and validation. Define user flows and functional details thoroughly using clear frameworks that emphasize user goals (JTBD), strategic alignment (Impact Mapping concepts), and testability (Example Mapping/Gherkin). This document bridges the gap between the business "why" (BRD) and the technical "how" (SPEC).

## Required PRD Sections

### 0. Introduction & Overview

- **Purpose:** State the purpose of this PRD and the product/feature it covers.
- **Goals & Objectives:** List the specific product goals derived from the BRD's business objectives. Link these to company/team **OKRs** and desired **business outcomes**.
- **Scope:**
  - Define the overall scope of the product vision covered by this PRD, referencing the BRD scope.
  - **Define the Proposed MVP Scope:** Clearly articulate the specific features, core user journey(s), and target outcomes for the initial Minimum Viable Product release. Justify the MVP scope based on core value proposition and validation goals.
  - Clearly state what major features are out of scope for the MVP and potentially for the overall vision documented here.
- **References:** Link to the source BRD document.

### 1. User Personas & Target Audience (JTBD Focus)

- Briefly summarize or reference the key user personas defined in the BRD.
- Focus on user goals within the product and key scenarios. Consider framing user needs using **Jobs-to-be-Done (JTBD)** statements ("When [situation], user wants to [motivation], so they can [expected outcome]") to clarify the underlying goals, especially for the MVP.

### 2. User Stories / Use Cases & Story Map (JTBD Informed)

- Detail the primary user interactions and flows, focusing initially on those required for the MVP.
- **Technique Suggestion:** Consider creating or describing a **User Story Map** to visualize the user journey, ensuring the backbone aligns with key user **Jobs-to-be-Done** and clearly showing the MVP slice.
- For key features (especially MVP), write high-level user stories or describe use cases. (Detailed story breakdown happens in the next phase).

### 3. Functional Requirements (Outcome-Oriented)

- Provide a detailed breakdown of _what_ the product must functionally do, organized by feature or capability. Clearly indicate which requirements are essential for the MVP.
- **Outcome Framing:** Frame functional requirements around the **outcomes** they enable for the user or business, linking back to Goals/OKRs.
- **Strategic Alignment:** Ensure features trace back to intended **actor behavior changes** (Impact Mapping concept) that drive the desired outcomes.
- Specify rules, logic, data handling, calculations, and interactions required. Use clear, numbered requirements statements.

### 4. User Interface (UI) & User Experience (UX) Requirements

- Describe high-level requirements for the UI and overall UX, ensuring they support the defined user flows and JTBD, particularly for the MVP journey.
- Detail key screens/views, navigation, IA, and interaction paradigms needed for the MVP.
- **Visualization Suggestion:** Include/reference low-fidelity **wireframes or user flow diagrams**, especially for the core MVP flows.
- Include requirements for usability, accessibility (referencing BRD NFRs), and look-and-feel goals.

### 5. Non-Functional Requirements (Product Perspective)

- Reiterate NFRs from the BRD but frame them from a product/user impact perspective, linking them to user experience or business outcomes where possible.
- Specify any NFRs that are particularly critical or have specific targets _for the MVP release_.

### 6. Acceptance Criteria Principles / Examples

- Define the standard format to be used for Acceptance Criteria in the subsequent User Stories document (e.g., Gherkin).
- Provide illustrative examples of acceptance criteria for a key requirement or two.
- **Process Suggestion:** Recommend using collaborative techniques like **Example Mapping** during refinement sessions to derive clear examples _before_ writing the final Gherkin syntax in the User Stories document.

### 7. Release Criteria (MVP Focus)

- Define the specific criteria that must be met for the **MVP** to be considered complete and ready for its initial release (e.g., core user journey functional, key performance NFRs met, critical security requirements implemented).

### 8. RAID Log (Risks, Assumptions, Issues, Dependencies)

- Maintain a log for tracking key factors impacting product requirements and delivery, paying special attention to risks/assumptions related to the MVP validation.
- Assign owners and track status where possible.

## Output Format

- Use Markdown for clear structure and readability.
- Employ headings, subheadings, numbered lists (for requirements), and bullet points effectively.
- Use tables for summarizing information where appropriate (e.g., RAID log).

**Output File:** Save the generated Product Requirements Document as `project_docs/productRequirements.md`.
