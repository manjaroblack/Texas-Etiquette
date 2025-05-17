# Project Initialization Process

## Purpose

The Project Initialization process provides a structured approach to defining and documenting a software project from concept to implementation plan. This process ensures:

1. **Comprehensive Documentation**: Creates a complete set of project documents that serve as a single source of truth.

2. **Consistent Structure**: Establishes a standardized format for project documentation.

3. **Sequential Development**: Builds each document upon previous ones, ensuring alignment and consistency.

4. **Context Preservation**: Maintains project context across sessions through the MCP memory system, allowing AI agents to retain and access project knowledge consistently.

5. **Clear Implementation Path**: Transforms high-level concepts into actionable, granular tasks.

## Document Flow

The project initialization process follows a logical sequence where each document builds upon the information in previous documents:

```plaintext
Project Idea → SPEC → BRD → PRD → UI Requirements → Security Requirements → User Stories → Testing Strategy → Deployment Plan → Implementation Checklist → Project Rules → **KG Init**
```

## Files and Their Purpose

| File | Purpose | Input Documents | Output Document |
|------|---------|----------------|-----------------|
| `01-SPEC_Prompt.md` | Generate detailed technical specifications | Project idea | `project_docs/projectSpecification.md` |
| `02-BRD_Prompt.md` | Create business requirements document | SPEC | `project_docs/businessRequirements.md` |
| `03-PRD_Prompt.md` | Define product requirements | SPEC, BRD | `project_docs/productRequirements.md` |
| `03a-UI_Requirements_and_Style_Prompt.md` | Specify UI/UX requirements | SPEC, BRD, PRD | `project_docs/uiRequirementsStyleGuide.md` |
| `03b-Security_Requirements_Prompt.md` | Define security controls | SPEC, BRD, PRD, UI | `project_docs/securityRequirements.md` |
| `04-Stories_Prompt.md` | Create granular user stories | SPEC, BRD, PRD, UI, Security | `project_docs/userStories.md` |
| `04a-Testing_Strategy_Prompt.md` | Establish testing approach | SPEC, BRD, PRD, UI, Security, Stories | `project_docs/testingStrategy.md` |
| `04b-Deployment_Plan_Prompt.md` | Define deployment process | SPEC, BRD, PRD, UI, Security, Stories, Testing | `project_docs/deploymentPlan.md` |
| `05-Checklist_Prompt.md` | Create implementation checklist | All previous documents | `project_docs/implementationChecklist.md` |
| `06-Rules_Prompt.md` | Generate project-specific rules | All previous documents + awesome-cursorrules | `project_docs/projectRules.md` |
| `07-Init_Memory_Prompt.md` | Initialize project-specific KG | Project Name, (Optional) SPEC | Knowledge Graph |

## Procedure

Follow these steps in sequence to initialize your project:

1. **Start with an Idea**: Define the high-level concept or goal for your project.

2. **Generate SPEC**:

   ```plaintext
   @project_initialization/01-SPEC_Prompt.md [Your project idea]
   ```

   This creates a detailed technical specification document.

3. **Generate BRD**:

   ```plaintext
   @project_initialization/02-BRD_Prompt.md @project_docs/projectSpecification.md
   ```

   This creates a business requirements document based on the SPEC.

4. **Generate PRD**:

   ```plaintext
   @project_initialization/03-PRD_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md
   ```

   This creates a product requirements document based on the SPEC and BRD.

5. **Generate UI Requirements**:

   ```plaintext
   @project_initialization/03a-UI_Requirements_and_Style_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md
   ```

   This creates UI/UX specifications and style guide.

6. **Generate Security Requirements**:

   ```plaintext
   @project_initialization/03b-Security_Requirements_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md @project_docs/uiRequirementsStyleGuide.md
   ```

   This creates security requirements and controls.

7. **Generate User Stories**:

   ```plaintext
   @project_initialization/04-Stories_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md @project_docs/uiRequirementsStyleGuide.md @project_docs/securityRequirements.md
   ```

   This creates granular user stories.

8. **Generate Testing Strategy**:

   ```plaintext
   @project_initialization/04a-Testing_Strategy_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md @project_docs/uiRequirementsStyleGuide.md @project_docs/securityRequirements.md @project_docs/userStories.md
   ```

   This creates a comprehensive testing approach.

9. **Generate Deployment Plan**:

   ```plaintext
   @project_initialization/04b-Deployment_Plan_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md @project_docs/uiRequirementsStyleGuide.md @project_docs/securityRequirements.md @project_docs/userStories.md @project_docs/testingStrategy.md
   ```

   This creates a detailed deployment process.

10. **Generate Implementation Checklist**:

    ```plaintext
    @project_initialization/05-Checklist_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md @project_docs/uiRequirementsStyleGuide.md @project_docs/securityRequirements.md @project_docs/userStories.md @project_docs/testingStrategy.md @project_docs/deploymentPlan.md
    ```

    This creates a detailed implementation checklist.

11. **Generate Project Rules**:

    ```plaintext
    @project_initialization/06-Rules_Prompt.md @project_docs/projectSpecification.md @project_docs/businessRequirements.md @project_docs/productRequirements.md @project_docs/uiRequirementsStyleGuide.md @project_docs/securityRequirements.md @project_docs/userStories.md @project_docs/testingStrategy.md @project_docs/deploymentPlan.md @project_docs/implementationChecklist.md
    ```

    This creates project-specific rules based on the project documentation and relevant rules from the awesome-cursorrules repository.

12. **Initialize Project Knowledge Graph**:

    ```plaintext
    @project_initialization/07-Init_Memory_Prompt.md [Your Project Name] @project_docs/projectSpecification.md
    ```

    This finds or creates the Project Root Entity in the Knowledge Graph, establishing the necessary context and prefix for the AI agent to manage project-specific information.

## Best Practices

1. **Review Each Document**: After generating each document, review it carefully before proceeding to the next step.

2. **Iterative Refinement**: If you find issues or need to make changes, update the document and regenerate subsequent documents as needed.

3. **Maintain Consistency**: Ensure that terminology, concepts, and requirements remain consistent across all documents.

4. **Version Control**: Commit your documents to version control after each step to track changes and maintain history.

5. **Collaborative Review**: Have stakeholders review key documents (especially SPEC, BRD, and PRD) before proceeding.

## Next Steps After Initialization

Once you've completed the project initialization process:

1. **Follow Workflow Checklist**: Initiate the AI Agent to use the `project_docs/workflowChecklist.md` to guide the implementation process using the command `next task`. This checklist provides a structured approach to task execution, assuming the KG context is set.

2. **Use AI Agent Commands**: Use the AI Agent commands to manage the project.

- `implement task [name/ID]` / `next task`: Start or continue the next task from the `implementationChecklist.md` following the AI Agent Workflow.
- `continue`: Resume the current task execution, following the steps in `workflowChecklist.md`.
- `summarize current state`: Request a summary of the project's current status based on the Knowledge Graph and documentation.
- `initialize documentation`: Trigger the creation or update of the `project_docs` directory based on the initialization prompts.
- `validate documentation`: Check the completeness and consistency of the project documentation.
- `update [doc name]`: Request an update to a specific document (requires permission for most docs, see Workflow).
- `git workflow`: Execute the standard Git add, commit, and push sequence.
- `query memory [topic]`: Search the project's Knowledge Graph for information related to a specific topic.
- `think through [problem]`: Instruct the agent to use the Sequential Thinking framework to analyze a specific problem or decision.
- `help`: Display this list of available commands.
