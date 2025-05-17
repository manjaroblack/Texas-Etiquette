# Prompt: Initialize Project Knowledge Graph (KG)

## Goal

To establish a dedicated, isolated knowledge graph space for the current project within the MCP Memory system, ensuring all project-specific information is linked and identifiable.

## Context

- **Project Isolation:** It is crucial to keep knowledge about different projects separate. We achieve this by creating a unique "Project Root Entity" and using its name as a prefix for all related entities, relations, and observations for this project.

## Input

- **Project Name:** A unique identifier for the project (e.g., `WebAppX`, `DataPipelineY`). If not provided suggest a name and ask the user for confirmation.
- **Project Documents:** Paths to any generated project documents:
  - SPEC
  - BRD
  - PRD
  - UI
  - Security
  - Stories
  - Deployment
  - Checklist
  - Rules
  - Testing

## Procedure

1. **Determine Project Name:**
    - If a project name is provided as input, use it.
    - If not, suggest a name and ask the user for confirmation.

2. **Find or Create Project Root Entity:**
    - **Search:** Use `mcp_memory_search_nodes` to search for an entity with `entityType: Project` and `name: [ProjectName]`.
    - **If Found:** Confirm that this is the correct project root entity. Store its name as the project prefix.
    - **If Not Found:** Use `mcp_memory_create_entities` to create a single entity:
        - `entityType`: `Project`
        - `name`: The chosen `ProjectName` (this *is* the Project Root Entity and the prefix).
        - `observations`: ["Root entity for [ProjectName]. All project-related KG items should use this name as a prefix and be linked back here."]
    - **Store Prefix:** Ensure the `ProjectName` is stored for use as the prefix in subsequent steps.

3. **Create Document Entities:**
    - For each provided project document path in the input:
        - Determine the `DocumentType` (e.g., SPEC, BRD, PRD) based on the filename.
        - Use `mcp_memory_create_entities` to create a document entity:
            - `entityType`: `ProjectDocument`
            - `name`: `[ProjectName]_[DocumentType]` (e.g., `WebAppX_SPEC`)
            - `observations`: [`"[DocumentType] document for project [ProjectName]. File path: [DocumentPath]"`]
        - Use `mcp_memory_create_relations` to link the document entity to the project root:
            - `from`: `[ProjectName]_[DocumentType]`
            - `relationType`: `partOf`
            - `to`: `[ProjectName]`

4. **Confirm Prefix Establishment:**
    - State clearly that the KG context is set for project `[ProjectName]` and that `[ProjectName]` will be used as the mandatory prefix for all subsequent KG updates related to this project.
    - Remind the agent (yourself) that all future entities and relations must be linked directly or indirectly back to this `[ProjectName]` root entity.

## Output

- Confirmation message indicating the Project Root Entity (`ProjectName`) has been identified or created, and the prefixing convention is established.
- The Knowledge Graph updated with the new Project Root Entity and placeholder entities for provided project documents.
