# AI Agent Workflow Checklist

## Current Task: None (Ready for next task)

## Phase 1: Task Initialization & Context Gathering

- [ ] **1. Identify Task:** Determine task from `implementationChecklist.md` or user directive.
- [ ] **2. Load Context & Identify Project:**
  - [ ] Identify/Create Project Root Entity: Find (using `mcp_memory_search_nodes` for `entityType: Project`) or create the main 'Project' entity in the KG (`mcp_memory_create_entities`). **Store its name (this will be the prefix).** Example: `ProjectAlpha`. *All subsequent KG updates must be linked to this entity and use this name as a prefix.*
  - [ ] Query Knowledge Graph using task-specific keywords and the project prefix (`mcp_memory_search_nodes` with query like `[ProjectPrefix]_*`).
  - [ ] Retrieve detailed entity information (`mcp_memory_open_nodes`).
  - [ ] Get comprehensive view if needed (`mcp_memory_read_graph`).
- [ ] **3. Initialize Task Memory:**
  - [ ] Create new entity for current task execution using the prefix (e.g., `[ProjectPrefix]_Task_XYZ`) (`mcp_memory_create_entities`).
  - [ ] Record initial understanding in the task entity (`mcp_memory_add_observations`).
  - [ ] Link task entity to the Project Root Entity (`mcp_memory_create_relations`: `from: [ProjectPrefix]_Task_XYZ, relationType: partOf, to: [ProjectPrefix]`).
  - [ ] Link task to other related entities, ensuring they *also* use the prefix and are linked (directly or indirectly) to the Project Root Entity (`mcp_memory_create_relations`).
- [ ] **4. Update Workflow Checklist:** Mark Phase 1 steps as complete.

## Phase 2: Planning & Research

### Seek User Clarification

(If requirements are ambiguous or multiple solutions exist)

- [ ] **1. Research Existing Solutions:**
  - [ ] Search web/GitHub/Fetch URLs (`mcp_brave_search_brave_web_search`, `mcp_github_search_repositories`, `mcp_fetch_fetch`).
  - [ ] Evaluate options.
  - [ ] Record findings in Knowledge Graph: Use prefix for new entity names, link observations/new entities to the Project Root Entity (`mcp_memory_add_observations`, `mcp_memory_create_entities`, `mcp_memory_create_relations`).
- [ ] **2. Explore Codebase (If Necessary):**
  - [ ] Understand structure (`list_dir`).
  - [ ] Find files (`file_search`).
  - [ ] Search code (`grep_search`, `codebase_search`).
  - [ ] Read contents (`read_file`).
  - [ ] Create entities for newly discovered components using the prefix, linking them to the Project Root Entity (`mcp_memory_create_entities`, `mcp_memory_create_relations`).
  - [ ] Document component relationships using prefixed names, ensuring linkage to the Project Root Entity (`mcp_memory_create_relations`).
- [ ] **3. Gather Detailed Requirements:**
  - [ ] Read relevant docs (`read_file`).
  - [ ] Capture requirements in Knowledge Graph: Use prefix for new/updated entities, link entities/observations to the Project Root Entity (`mcp_memory_create_entities`, `mcp_memory_add_observations`, `mcp_memory_create_relations`).
- [ ] **4. Define Plan Using Sequential Thinking:**
  - [ ] Use structured sequential thinking (`mcp_sequential_thinking_sequentialthinking`).
  - [ ] Follow sequential thinking framework:
    - [ ] Define problem scope and constraints.
    - [ ] Analyze existing solutions and applicability.
    - [ ] Evaluate integration points with existing codebase.
    - [ ] Outline implementation approach.
    - [ ] Identify potential challenges and mitigations.
    - [ ] Estimate complexity and resources needed.
    - [ ] Finalize implementation plan.
  - [ ] Document reasoning process in Knowledge Graph, linking observations to the relevant prefixed entity and ensuring it's linked to the Project Root Entity (`mcp_memory_add_observations`).
- [ ] **5. Update Workflow Checklist:** Mark Phase 2 steps as complete.

## Phase 3: Implementation

### Expect Potential Iteration Within This Phase

- [ ] **1. Environment Setup (If Necessary):**
  - [ ] Configure environment (`run_terminal_cmd`).
  - [ ] Record changes in Knowledge Graph, linking observations to the appropriate prefixed entity (and thus the Project Root) (`mcp_memory_add_observations`).
- [ ] **2. Code Implementation / Solution Integration:**
  - [ ] For complex decisions, use sequential thinking (`mcp_sequential_thinking_sequentialthinking`).
  - [ ] **Existing Solution:** Install/configure (`run_terminal_cmd`, `edit_file`).
  - [ ] **Custom Code:** Write/modify code (`edit_file`).
  - [ ] **Edit Failure:** Use `reapply` if needed.
  - [ ] **File Management:** Create/delete (`edit_file`, `delete_file`).
  - [ ] Record implementation details in Knowledge Graph: Use prefix for new entity names, link observations/new entities to the Project Root Entity (`mcp_memory_add_observations`, `mcp_memory_create_entities`, `mcp_memory_create_relations`).
- [ ] **3. Testing & Linting:**
  - [ ] Run linters/formatters/tests (`run_terminal_cmd`).
  - [ ] **Analyze Results:** Check output for errors.
  - [ ] For complex debugging, use sequential thinking (`mcp_sequential_thinking_sequentialthinking`).
  - [ ] **Fix Issues:** Attempt fixes (`edit_file`).
  - [ ] **Iterate/Replan:** If fixes complex, revisit earlier steps/phases or seek user input.
  - [ ] Document test results and fixes in Knowledge Graph, linking observations to the appropriate prefixed entity (and thus the Project Root) (`mcp_memory_add_observations`).
- [ ] **4. GitHub Operations (If Applicable):**
  - [ ] Branching (`mcp_github_create_branch`).
  - [ ] Pushing (`mcp_github_push_files`).
  - [ ] PRs (`mcp_github_create_pull_request`, etc.).
  - [ ] Issues (`mcp_github_create_issue`, etc.).
  - [ ] Record GitHub operations in Knowledge Graph, linking observations to the appropriate prefixed entity (and thus the Project Root) (`mcp_memory_add_observations`).
- [ ] **5. Update Workflow Checklist:** Mark Phase 3 steps as complete.

## Phase 4: Finalization & Memory Preservation

- [ ] **1. Review Implementation:**
  - [ ] Use sequential thinking for systematic verification (`mcp_sequential_thinking_sequentialthinking`).
  - [ ] Verify docs/standards (`read_file`).
  - [ ] Record review findings in Knowledge Graph, linking observations to the appropriate prefixed entity (and thus the Project Root) (`mcp_memory_add_observations`).
- [ ] **2. Git Workflow:**
  - [ ] Check status, add, commit (`run_terminal_cmd`).
  - [ ] Push changes (`run_terminal_cmd`).
  - [ ] Document Git operations in Knowledge Graph, linking observations to the appropriate prefixed entity (and thus the Project Root) (`mcp_memory_add_observations`).
- [ ] **3. Comprehensive Memory Preservation:**
  - [ ] Update task entity (prefixed name) with completion status, ensuring it's linked to the Project Root Entity (`mcp_memory_add_observations`).
  - [ ] Create relations between task and affected components (using prefixed names), ensuring all are linked to the Project Root Entity (`mcp_memory_create_relations`).
  - [ ] Create entities for new concepts/components using the prefix, linking them to the Project Root Entity (`mcp_memory_create_entities`, `mcp_memory_create_relations`).
  - [ ] Update existing entities (prefixed names) with new knowledge, ensuring they are linked to the Project Root Entity (`mcp_memory_add_observations`).
  - [ ] Ensure all technical decisions are preserved, linked to prefixed entities and the Project Root Entity (`mcp_memory_add_observations`, `mcp_memory_create_relations`).
  - [ ] Update `implementationChecklist.md` to mark task complete (`edit_file`).
  - [ ] For other documentation updates, request explicit permission from user.
- [ ] **4. Knowledge Graph Integrity Check:**
  - [ ] Verify task information is properly stored using prefixed names and linked to the Project Root Entity (`mcp_memory_search_nodes` with prefix, `mcp_memory_open_nodes`).
  - [ ] Clean up outdated information if necessary (`mcp_memory_delete_observations`, `mcp_memory_delete_relations`).
- [ ] **5. Reset Workflow Checklist:** Replace the entire content of `workflowChecklist.md` with the content from `workflowChecklistTemplate.md`.

## Continuous Activities (Reminders)

- **Error Handling:**
  - Analyze errors and use sequential thinking for complex issues (`mcp_sequential_thinking_sequentialthinking`).
  - Consult docs, retry, adjust, revisit phases, seek user input.
  - Document errors and resolution strategies in Knowledge Graph, linking to the appropriate prefixed entity (and thus the Project Root) (`mcp_memory_add_observations`).
- **Knowledge Management:** Continuously update Knowledge Graph: Use project prefix for entity names AND link back to the Project Root Entity.
- **Project Context:** Ensure all KG updates use the correct project prefix and are associated with the correct Project Root Entity.
- **Complex Reasoning:** Use `mcp_sequential_thinking_sequentialthinking` for all complex decision-making.
- **Communication:** State intent, report progress/issues, reference Knowledge Graph entities (using prefixed names), seek clarification proactively.
