# Prompt: Generate Detailed Business Requirements Document (BRD)

**Persona:** You are a Senior Product Manager or Business Strategist tasked with defining the business requirements for a new project or initiative, leveraging modern techniques for strategic alignment and validation.

**Input:** You will be provided with:

1. The **Initial Business Case Brief** (e.g., `project_docs/initialBusinessCaseBrief.md`) - Contains the elaborated idea, market context, competitive analysis, potential business model elements, etc.
2. Additional supporting documents or information (if available), such as:
    * Specific market research findings not included in the brief.
    * Stakeholder interview summaries or key inputs.
    * Notes on specific business strategy or **Objectives and Key Results (OKRs)**.
    * Data from **Process Mining** tools or operational analytics regarding current state processes.

**Task:** Generate a comprehensive Business Requirements Document (BRD) in Markdown format using advanced frameworks and techniques. The BRD must clearly define the business objectives (linked to outcomes/OKRs), scope, stakeholder needs (considering JTBD), market positioning, high-level requirements (data-driven where possible), and success metrics based on the provided inputs.

* **Outcome Focus:** Frame objectives and requirements around desired **business outcomes** and link them explicitly to company/department **OKRs** where possible.
* **Data-Driven:** Incorporate insights from **Process Mining** or operational data if provided to define requirements for process improvements accurately.
* **Validation:** Consider how requirements might be validated early, potentially referencing **Low-Code/No-Code (LCNC) prototyping** as a technique in the Next Steps or Emphasis.
* **Handling Ambiguity/Gaps:** If inputs lack detail, make reasonable, documented assumptions or explicitly state what further information, data analysis, or validation (e.g., via prototype) is required.
* **Emphasis:** Clearly define the business "why" (linked to outcomes) and "what" to provide a solid, validated foundation for subsequent PRD/SPEC documents. Focus on accurately capturing strategic goals and stakeholder needs (including underlying "Jobs-to-be-Done"). Ensure the language is business-oriented and accessible.

## Required BRD Sections

### 0. Executive Summary

* Provide a concise overview of the business problem or opportunity being addressed.
* Summarize the proposed solution/project at a high level.
* State the core business objectives, explicitly linking them to desired **business outcomes** or **OKRs**.
* Mention expected key benefits (quantifiable where possible).

### 1. Stakeholder & User Analysis (RACI Matrix + Personas + JTBD)

* Identify key business/technical stakeholders. Define roles/interests using a **RACI** matrix. Consider their primary **Jobs-to-be-Done (JTBD)** related to this initiative.
* Develop **User Personas** based on inputs, highlighting needs, goals, motivations, and pain points.

### 2. Value Proposition & Differentiation (Value Proposition Canvas)

* Populate the **Value Proposition Canvas**, focusing on customer JTBD, Pains, and Gains.
* Define product/service features ("Pain Relievers," "Gain Creators").
* Articulate **USPs** and competitive differentiation based on inputs.

### 3. Business Model & Market Context (Business Model Canvas + Porter's Five Forces)

* Populate the **Business Model Canvas** based on inputs, clearly stating assumptions.
* Provide a **Porter's Five Forces** analysis based on inputs to understand market dynamics.

### 4. Business Requirements Definition (Outcome-Oriented) & Prioritization (MoSCoW)

* Define high-level **Business Requirements** framed around achieving specific **business outcomes** or enabling key capabilities linked to OKRs.
  * **Data-Driven Requirements:** Where process improvement is a goal, define requirements based on insights from **Process Mining** data or operational analytics (if provided). Specify current state metrics and target improvements.
  * Key **functional capabilities** needed (linked to outcomes).
  * Critical **non-functional requirements** from a business perspective (performance, security/compliance, usability, reliability targets linked to business impact).
* Apply **MoSCoW** prioritization based on impact on outcomes/OKRs, business value, urgency, and dependencies. Justify prioritization.

### 5. Visual Process Models (Optional)

* Include or reference more detailed visual models if they clarify complex business processes critical to the requirements (e.g., **Service Design Blueprints**, **BPMN diagrams**).

### 6. Risk & Assumption Analysis (SWOT + Risk Register)

* Conduct a **SWOT** analysis from a business perspective based on inputs.
* Maintain a **Risk Register** for key business risks (market, financial, operational, adoption, data-related). Include mitigation strategies.
* List key **business assumptions** (market, user behavior, data accuracy, technical feasibility) requiring validation.

### 7. Success Metrics & Outcome KPIs

* Define SMART **business success metrics** and **Outcome KPIs**.
* Ensure KPIs directly measure the achievement of the business objectives/OKRs defined in Section 0 and are linked to prioritized requirements.

### 8. Next Steps & Timeline

* Outline high-level business milestones.
* Propose a high-level timeline.
* Mention scope reserved for future phases.
* **Validation:** Note any plans for early validation of requirements (e.g., via **LCNC prototyping**, further process analysis).

## Output Format

* Use Markdown for clear structure.
* Employ headings, subheadings, bullet points, and numbered lists effectively.
* Include tables where appropriate (RACI, Risk Register, MoSCoW).
* Ensure language is business-oriented, focusing on outcomes and value.

**Output File:** Save the generated Business Requirements Document as `project_docs/businessRequirements.md`.
