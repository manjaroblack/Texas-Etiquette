# Prompt: Generate Project Document Review & Issues Summary - v1

**Persona:** You are an AI Project Analyst or Quality Assurance Lead responsible for reviewing a comprehensive set of project documentation to identify unresolved issues, required decisions, and potential inconsistencies before implementation begins.

**Input:** You will be provided with the following finalized project documents:

* **Initial Business Case Brief** (e.g., `project_docs/initialBusinessCaseBrief_v1.md`)
* **BRD Document** (e.g., `project_docs/businessRequirements_standard_v3.md`)
* **PRD Document** (e.g., `project_docs/productRequirements_v3.md`)
* **Security Requirements Spec** (e.g., `project_docs/security_requirements_v2.md`)
* **UI/UX Specification** (e.g., `project_docs/ui_ux_specification_v2.md`)
* **SPEC Document** (e.g., `project_docs/technicalSpecification_v6.md`)
* **User Stories / Backlog** (e.g., `project_docs/advanced_user_stories_v1.md`)
* **Test Strategy/Plan** (e.g., `project_docs/test_strategy_plan_v2.md`)
* **Deployment Plan** (e.g., `project_docs/deploymentPlan_advanced_v1.md`)
* **(Optional) Marketing Plan** (e.g., `project_docs/marketing_plan_v2.md`)
* **(Optional) Content Strategy** (e.g., `project_docs/content_strategy_v2.md`)
* **(Optional) Support Plan** (e.g., `project_docs/support_plan_v2.md`)
* **(Optional) Legal/Compliance Analysis Report** (e.g., `project_docs/legal_compliance_analysis_report_v1.md`)
* **(Optional) Financial Model Structure** (e.g., `project_docs/financial_model_v1.md`)
* **(Optional) Idea Assessment Report** (e.g., `project_docs/idea_assessment_report_v2.md`)

**Task:** Generate a **Project Document Review & Issues Summary** report in Markdown format. Analyze all provided input documents thoroughly to identify and consolidate:
1.  **Outstanding Questions:** Specific questions explicitly raised within the documents that remain unanswered.
2.  **Required Decisions:** Points where a decision between options is needed but not yet documented.
3.  **Ambiguities:** Areas where requirements or specifications are unclear, vague, or open to multiple interpretations.
4.  **Inconsistencies/Conflicts:** Discrepancies *between* different documents (e.g., a feature described differently in PRD vs. SPEC, conflicting NFRs, misalignment between user stories and UI spec).
5.  **Potential Gaps:** Areas where necessary information seems to be missing based on standard practices or dependencies between sections/documents.

* **Cross-Referencing:** Pay close attention to how documents relate to each other. Verify traceability and consistency (e.g., do SPEC details align with PRD requirements? Do User Stories cover all PRD features? Do test cases cover acceptance criteria?).
* **Deep Analysis:** Think critically about the implications of the documented information. Are there hidden assumptions? Are there potential downstream impacts of decisions made in one document on another?

**Emphasis:** The goal is to create a single, consolidated list of actionable items that need resolution before implementation proceeds. Clearly articulate each issue, state where it originates (which document/section), explain the potential impact, and suggest the type of action needed (e.g., Clarification Needed, Decision Required, Conflict Resolution).

## Required Output Sections (Issues Summary Report)

### 0. Introduction
* Purpose of this review summary.
* List of documents analyzed.
* Date of review.

### 1. Summary of Critical Issues
* Highlight the most critical or blocking issues identified that require immediate attention.

### 2. Issues by Document
* Create a subsection for each input document that contains identified issues.
* **Example Subsection:**
    ```markdown
    ## PRD Document (`project_docs/productRequirements_v3.md`) Issues

    * **Issue ID:** PRD-01
    * **Type:** Ambiguity
    * **Location:** Section 3. Functional Requirements - Requirement #FR-15
    * **Description:** Requirement states "user profile should be easily customizable" but does not define *which* specific fields are customizable or the extent of customization allowed.
    * **Impact:** Development team cannot implement without clarification, potential for rework. UI design may be blocked.
    * **Action Needed:** Clarification Required (from Product Manager).

    * **Issue ID:** PRD-02
    * **Type:** Conflict (with SPEC)
    * **Location:** Section 5. NFRs (Performance) vs. SPEC Section 7 (SLOs)
    * **Description:** PRD states "page load time under 1 second," while SPEC Section 7 defines a specific SLO for the main dashboard load time as "<= 1.5 seconds (p95)".
    * **Impact:** Conflicting performance targets for development and testing.
    * **Action Needed:** Conflict Resolution Required (between Product Manager and Tech Lead).
    ```
* For each issue identified within a document section:
    * Assign a unique **Issue ID** (e.g., DOCCODE-##).
    * Specify the **Type** (Question, Decision Needed, Ambiguity, Conflict, Gap).
    * Note the **Location** (Document Name, Section, Requirement ID, Story ID, etc.).
    * Provide a clear **Description** of the issue.
    * Explain the potential **Impact** if unresolved.
    * Suggest the **Action Needed** and potentially the role responsible.

### 3. Cross-Document Consistency Issues
* (Optional Section, or integrate into Section 2) Highlight major inconsistencies found *between* documents that weren't tied to a single source document in Section 2.

### 4. Conclusion & Next Steps
* Summarize the overall state of documentation readiness.
* Recommend next steps for addressing the identified issues (e.g., backlog refinement meeting, stakeholder decision meeting).

## Output Format

* Use Markdown for clear structure.
* Employ headings, subheadings, and bullet points effectively. Use bold text for issue metadata (ID, Type, etc.).
* Organize issues clearly under the relevant source document heading.

**Output File:** Save the generated report as `project_docs/project_review_summary_v1.md`.

