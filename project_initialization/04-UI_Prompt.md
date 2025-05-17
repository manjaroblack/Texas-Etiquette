# Prompt: Generate UI/UX Design Specification

**Persona:** You are a UI/UX Designer or Product Designer tasked with translating product requirements into a detailed design specification, establishing the foundation for a consistent design system.

**Input:** You will be provided with:

1. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements.md`).
2. The approved **Security Requirements Specification** (e.g., `project_docs/securityRequirements.md`).

**Task:** Generate a comprehensive **UI/UX Design Specification** document in Markdown format using modern best practices. This document translates the features, user stories, functional requirements, UI/UX guidelines (from PRD), and relevant security requirements into detailed descriptions of visual layout, interaction design, style guidelines, accessibility considerations, and core component definitions, forming the basis of the project's design system.

* **Goal:** To provide a clear blueprint for visual designers creating mockups/prototypes and for front-end developers implementing the interface consistently and securely.
* **Scope:** Focus on describing the *intended* design based on the PRD and Security Requirements. This prompt generates a specification document, **not** final visual assets (mockups, prototypes).
* **Traceability:** Reference relevant PRD or Security Requirement sections/IDs where applicable.
* **Handling Ambiguity/Gaps:** If inputs lack sufficient detail for a specific design decision, make a reasonable design assumption (documenting it) or flag the area as needing clarification (potentially in the Open Issues section).

**Emphasis:** Focus on clearly describing the structure, behavior, and appearance of the user interface elements and flows. Detail the intended user experience, ensuring consistency, usability, security, and accessibility based on the requirements. Clearly articulate the principles and components that underpin the design system.

## Required UI/UX Specification Sections

### 0. Introduction & Overview

* **Purpose:** State the purpose of this UI/UX Specification and the product areas/features it covers.
* **Design Goals:** Briefly reiterate key usability, aesthetic, security, or user experience goals derived from the PRD and Security Requirements.
* **References:** Link to the source PRD and Security Requirements Specification documents.

### 1. Overarching Design Principles & Heuristics

* Outline key principles guiding the design (e.g., Simplicity, Consistency, Efficiency, Feedback, Accessibility, Security by Design).
* Reference foundational usability heuristics where applicable (e.g., Nielsen's Heuristics).
* Mention any specific design philosophies or methodologies being followed.

### 2. Design System Foundation & Style Guide

* **Introduction:** State that this section defines the core visual and stylistic foundation of the design system.
* **Color Palette:** Define primary, secondary, accent, neutral, and status colors (success, error, warning, info). Provide hex codes and usage guidelines, ensuring WCAG contrast compliance.
* **Typography:** Specify font families, sizes, weights, line heights, and usage hierarchy for all text elements (headings, body, captions, etc.).
* **Iconography:** Describe the style (e.g., line art, filled), source (e.g., Material Icons, custom set), size, and usage guidelines for icons, including accessibility considerations (e.g., text alternatives).
* **Spacing & Grid:** Define the base spacing unit (e.g., 8px grid), margins, padding guidelines, and the primary layout grid system (e.g., 12-column responsive grid).
* **Imagery & Branding:** Provide guidelines for using logos, illustrations, photography, or other visual brand assets within the UI.

### 3. Component Library (Core Element Descriptions)

* **Introduction:** Explain that this section describes the core reusable UI components, considering principles like Atomic Design (Atoms, Molecules, Organisms) for structure.
* **Component Descriptions:** For each key component identified (based on PRD needs and common patterns):
  * **Name:** (e.g., Primary Button, Text Input, Data Table, Card)
  * **Description:** Purpose and typical usage.
  * **States:** Describe visual appearance and behavior for all relevant states (e.g., default, hover, focus, active, disabled, loading, error, selected).
  * **Variations:** Describe any necessary variations (e.g., button sizes, input types).
  * **Accessibility Notes:** Specific ARIA roles or attributes needed, keyboard interaction patterns.
  * **Security Notes:** Relevant security considerations (e.g., input validation patterns, preventing sensitive data display).
  * **(List key components like Buttons, Forms, Tables, Modals, Cards, Navigation elements, etc.)**

### 4. Information Architecture & Navigation

* Describe the high-level site/application structure (Sitemap if applicable).
* Detail the primary navigation model (e.g., top navigation bar, sidebar menu, tabs) and its behavior, including responsive variations and accessibility considerations.
* Describe secondary navigation elements (e.g., breadcrumbs, sub-navigation, filters).

### 5. Wireframes / Key Screen Descriptions

* Provide detailed **textual descriptions** for key screens or views identified in the PRD's user stories or UI/UX section. For each key screen:
  * **Screen Name/Purpose:** What is this screen for? Which user stories/flows does it support?
  * **Key UI Elements/Components:** List the major components used (referencing Section 3) and specific widgets visible.
  * **Layout Description:** Describe the arrangement of elements on the screen using the defined grid and spacing principles.
  * **Content Hierarchy:** Describe the visual importance and order of information.
  * **Key Interactions:** Briefly mention the primary actions users can take on this screen, referencing interaction patterns (Section 6).
  * **Security Considerations:** Note any specific security aspects relevant to this screen (e.g., display of sensitive data, input fields requiring validation).
  * *(Optional: Use Markdown tables or simple ASCII representations to suggest layout if helpful, but detailed visual wireframes are outside this scope).*

### 6. Interaction Design & User Flows

* Describe key global interaction patterns (e.g., form submission/validation flows, error handling display, loading state indicators, common animations/transitions), ensuring they align with security requirements (e.g., secure feedback).
* Detail specific complex interactions or micro-interactions for key components or features.
* Elaborate on the step-by-step user flow for critical tasks derived from PRD user stories/use cases, describing the UI changes and system feedback at each step, referencing specific screens and components.

### 7. Accessibility Implementation Guidelines

* Provide specific, actionable guidance on implementing accessibility requirements from the PRD (emphasizing **WCAG conformance** level, e.g., AA):
  * Required color contrast ratios and tools for checking.
  * Detailed keyboard navigation order and visible focus indicator requirements.
  * Specific guidance on ARIA roles, states, and properties for custom components (referencing Section 3).
  * Requirements for alternative text for images and non-text content.
  * Guidelines for using semantic HTML structure (headings, landmarks, lists).

### 8. Responsive Design Strategy

* Describe the overall approach (e.g., mobile-first, desktop-first).
* Define specific breakpoints and describe how layout, navigation, and components adapt across key screen size ranges (e.g., mobile, tablet, desktop, large desktop).

### 9. Open Issues / Design Questions

* Maintain a list of unresolved design questions or decisions needing further input or validation.
* Track dependencies on content, APIs, or other components impacting the UI/UX design.

## Output Format

* Use Markdown for clear structure and readability.
* Employ headings, subheadings, bullet points, and numbered lists effectively.
* Use tables for summarizing information where appropriate (e.g., color palettes, component states, responsive breakpoints).

**Output File:** Save the generated document as `project_docs/uiSpecification.md`.
