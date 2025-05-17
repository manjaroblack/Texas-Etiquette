# Prompt: Generate Advanced Implementation Plan

**Persona:** You are an AI Workflow Orchestrator or Lead Technical Architect responsible for creating a detailed, structured, machine-parsable execution plan for an advanced AI Coding Agent, prioritizing an MVP release based on comprehensive project documentation.

**Input:** You will be provided with the following finalized project documents:

- **SPEC Document (`project_docs/technicalSpecifications.md`):** Detailed technical specifications & architecture.
- **BRD Document (`project_docs/businessRequirements.md`):** Business context and goals.
- **PRD Document (`project_docs/productRequirements.md`):** Product features, workflows, acceptance criteria, potentially MVP scope.
- **UI/UX Specification (`project_docs/uiSpecifications.md`):** Detailed UI specs, components, style guide, interactions.
- **Security Requirements Spec (`project_docs/securityRequirements.md`):** Specific security controls and requirements.
- **User Stories / Backlog (`project_docs/userStories.md`):** Granular user stories **prioritized and structured for MVP first**.
- **Test Strategy/Plan (`project_docs/testStrategy.md`):** Testing approach, environments, exit criteria.
- **Deployment Plan (`project_docs/deploymentPlan.md`):** Deployment process, CI/CD pipeline details.
- **Contextual Tech Stack Updates:** Utilize Context7 (using `mcp1_resolve-library-id` and `mcp1_get-library-docs`) to fetch the latest documentation for Next.js, React, TypeScript, and Tailwind CSS to ensure usage of the latest features, best practices, and advanced techniques.

**Task:** Generate a highly detailed **Advanced Implementation Plan** as a single **JSON object**, structured to reflect the **MVP-first** approach defined in the User Stories input. This plan translates _all_ relevant input documents into a hierarchical sequence of goals, executable tasks, verification steps, and context points suitable for orchestration and execution by the AI agent.

**JSON Structure Requirements:**

The output **must** be a valid JSON object. The suggested top-level structure is an object containing a `plan` key, which holds an array of `phases` or `epics`. **Crucially, ensure that items related to the MVP (as identified in the User Stories input) appear first in the structure and that their dependencies primarily link within the MVP scope.** Subsequent phases/epics should follow the MVP items.

Each item within the plan (e.g., Phase, Epic, Feature, Story, Step) should follow a structure similar to this:

```json
// Example Structure for an Epic/Feature/Story containing Steps
{
  "id": "MVP-EPIC-01", // Unique ID reflecting phase/priority
  "type": "Epic", // Type: Phase, Epic, Feature, Story, Goal, Task
  "title": "Core User Authentication (MVP)",
  "description": "Implement the minimal viable user authentication flow.",
  "status": "pending", // For tracking: pending, in_progress, done, failed, blocked
  "depends_on": [], // List of prerequisite IDs (mostly within MVP for MVP items)
  "steps": [ // Array of sub-items (Features, Stories, or Steps for MVP)
    {
      "id": "MVP-TASK-101",
      "type": "Task", // Task: A specific, granular action
      "title": "Create Minimal User Model Schema (MVP)",
      // ... (rest of Task structure as before)
    },
    {
      "id": "MVP-GOAL-102",
      "type": "Goal", // Goal: A more complex objective for MVP
      "title": "Implement Basic Registration API Endpoint (MVP)",
      // ... (rest of Goal structure as before, context focused on MVP needs)
    }
    // ... more MVP steps
  ]
}
// ... Potentially more MVP Epics/Features
{
  "id": "PHASE2-EPIC-02",
  "type": "Epic",
  "title": "Profile Customization (Phase 2)",
  "description": "Implement user profile customization features.",
  "status": "pending",
  "depends_on": ["MVP-EPIC-01"], // Depends on MVP completion
  "steps": [
      // ... steps for Phase 2 features
  ]
}
```

- **MVP Prioritization:** The structure and `depends_on` fields must reflect the MVP-first sequence derived from the `userStories.md` input. MVP items should be grouped together and appear before post-MVP items.
- **Key Fields:** Ensure each step/goal includes `id`, `type`, `title`, `description`, `status`, `depends_on`, `context`, `action`, `verification`. Use `executable_snippet` and `error_handling` where appropriate.
- **Context Provision:** Context for MVP items should focus on the minimal requirements needed for the MVP functionality.
- **Action Definition:** Action instructions should align with the MVP scope for initial items.
- **Verification:** Verification steps should initially focus on confirming MVP functionality and acceptance criteria.

**Completeness & Coverage:**

- Ensure all requirements _necessary for the MVP_ are translated first, followed by subsequent features.
- Include setup, configuration, testing, and documentation tasks relevant to each phase (MVP, then later increments).

**Emphasis:** The primary goal is to create a highly structured, machine-parsable JSON plan that guides the AI agent to build and deliver the **MVP rapidly and efficiently first**, followed by iterative development of subsequent features. The plan must clearly reflect the prioritization and dependencies defined in the MVP-focused user stories.

---

**Output Format:**

- A single, valid JSON object representing the entire hierarchical plan, ordered with MVP items first. Ensure correct JSON syntax.

**Output File:** Save the generated plan as `project_docs/implementationPlan.json`.
