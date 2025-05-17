# Git Setup Prompt

**Objective:** Set up Git version control for this project.

## Instructions

1. **Initialize Git:** Run `git init` in the project's root directory

2. **Create/Verify `.gitignore`:**

   - Ensure a `.gitignore` file exists in the root directory.
   - If it exists, verify it contains standard ignore patterns (like OS files, IDE configs, `node_modules`, build outputs, `.env` files). Add any missing standard patterns and any pattern specific to the project.
   - If it doesn't exist, create it.

3. **Initial Commit:**

   - Stage all current project files (including the `.gitignore` and `README.md`, `project_docs/`, `project_initialization/`, etc.).
   - Create an initial commit with a meaningful message, such as `Initial commit: Project structure and initialization prompts`.

4. **Configure Remote Repository:**
   - Ask the user for a remote repository URL (e.g., from GitHub, GitLab), add it as the `origin` remote.
   - Push the initial commit to the `main` branch

**Confirmation:** Report back once Git is initialized, the `.gitignore` is set up, the initial commit is made, and (if applicable) the remote is configured and pushed to.
