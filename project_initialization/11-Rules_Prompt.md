# Prompt: Generate Cutting-Edge, Project-Specific Development Rules

**Persona:** You are a Lead Solutions Architect at the forefront of software engineering, tasked with defining and implementing advanced, project-specific development rules. Your objective is to establish a robust framework of standards that leverage the latest industry best practices, emerging technologies, and data-driven insights to ensure high-quality, scalable, and secure software delivery.

**Input:** You will be provided with the following project documents and access to dynamic knowledge sources:

- **Core Project Documentation:**
  - **SPEC Document:** Technical specifications and system architecture.
  - **BRD Document:** Business goals and stakeholder needs.
  - **PRD Document:** Product features and user requirements.
  - **UI Requirements Document:** UI/UX specifications and design systems.
  - **Security Requirements Document:** Security controls, threat models, and compliance mandates.
  - **User Stories Document:** Granular user stories and acceptance criteria.
  - **Testing Strategy Document:** Comprehensive testing methodologies, automation goals, and quality metrics.
  - **Deployment Plan Document:** CI/CD pipeline strategy, infrastructure as code (IaC) principles, and release management.
  - **Implementation Plan:** Detailed implementation steps and milestones.
- **Dynamic Knowledge & Tooling:**
  - **Context7 MCP Server:** Utilize `context7` (e.g., `resolve-library-id`, `get-library-docs`) to fetch the latest, authoritative documentation and best practices for all libraries, frameworks, and technologies employed in the project. This is your primary source for technology-specific guidelines.
  - **Web Search (e.g., via `brave_search` or `search_web` tools):** Actively search the web for the latest cutting-edge software engineering trends, advanced techniques, and emerging best practices relevant to the project's domain and technology stack. Synthesize findings to inform rule generation.

**Task:** Generate a comprehensive, actionable, and forward-looking set of project-specific rules in Markdown format. These rules must be directly derived from the provided project documentation and significantly enhanced by:

1. **Leveraging Context7:** Prioritize information from `context7` for all technology-specific standards (style, architecture, security, UI, performance).
2. **Web Research:** Actively use web search tools to identify and incorporate the latest cutting-edge trends, advanced software engineering techniques, and emerging best practices relevant to the project.
3. **Incorporating Advanced Techniques:** Infuse rules with modern software engineering practices identified through `context7`, web research, and existing knowledge. This includes, but is not limited to, DevSecOps, automation, AI-assisted development, data-driven decision-making, and proactive quality assurance strategies.

The generated rules should guide all aspects of development, ensuring consistency, maintainability, scalability, security, and adherence to the latest industry innovations.

## Required Sections

Your generated rules must cover the following areas, prioritizing information from `context7` and web research.

1. **Code Style & Formatting Rules:**

   - Define language-specific formatting rules. **Primarily source these from `context7` for the project's specific libraries and frameworks (e.g., ESLint/Prettier configurations for TypeScript/React) and supplement with current industry standards found via web research.**
   - Specify precise naming conventions for variables, functions, classes, files, modules, and components, informed by `context7` recommendations and prevailing best practices from web research.
   - Establish clear code organization principles (e.g., feature-based vs. type-based directory structures, module layering), referencing best practices from `context7` for the chosen stack and validated by broader industry trends.

2. **Architecture & Design Principles:**

   - Outline architectural patterns to be rigorously followed (e.g., microservices, event-driven, serverless, layered architecture), as defined in `projectSpecification.md`, validated with `context7` for framework-specific implementations, and aligned with modern architectural trends identified via web research.
   - Define strict component/module boundaries, API contracts (e.g., REST, GraphQL, gRPC), and interaction patterns (e.g., synchronous, asynchronous, message queues, event streams).
   - Establish robust data flow and state management principles, especially for complex applications, referencing `context7` for library-specific best practices (e.g., Redux, Zustand, NgRx, XState) and advanced patterns from web research.
   - Incorporate advanced architectural considerations like scalability (vertical/horizontal), resilience (fault tolerance, circuit breakers), observability (logging, metrics, tracing), and maintainability.

3. **Advanced Development Workflow & DevOps (CI/CD/CS):**

   - Define a precise git workflow (e.g., Gitflow, GitHub Flow, Trunk-Based Development) including branching strategy, commit message conventions (e.g., Conventional Commits), and a rigorous PR/MR review process with mandatory automated checks and peer reviews.
   - Establish comprehensive code review criteria focusing on quality, maintainability, security, performance, and adherence to established patterns.
   - Outline mandatory pre-submission/pre-merge checks: linting, static analysis (SAST), unit tests, integration tests, and vulnerability scans (CI/CD integration), aiming for fast feedback loops.
   - Incorporate principles of Continuous Integration, Continuous Delivery/Deployment (CI/CD), and Continuous Security (CS), including infrastructure as code (IaC) and configuration management best practices.
   - Reference and adapt workflow/DevOps rules from web research that align with modern, automated, and secure practices.

4. **Proactive Security Practices (DevSecOps & Shift-Left Security):**

   - Define security-first coding practices based on `securityRequirements.md`, OWASP Top 10, SANS Top 25, and specific guidance from `context7` for project technologies and common vulnerabilities (CVEs).
   - Establish strict guidelines for identity and access management (IAM), authentication (MFA, OAuth2/OIDC), authorization (RBAC/ABAC), session management, and secure secret management (e.g., using Vault, KMS, environment variables, platform-specific secret stores).
   - Outline data protection strategies: data classification, encryption (at-rest, in-transit, in-use where applicable), data masking, and privacy-enhancing techniques (PETs) in compliance with regulations (e.g., GDPR, CCPA).
   - Mandate use of security linters, SAST, DAST, IAST, and SCA tools within the CI/CD pipeline, with policies for addressing identified vulnerabilities based on severity.
   - Include relevant, up-to-date security rules from `context7` and web research (e.g., NIST guidelines, CIS benchmarks).

5. **Modern UI/UX Development Standards & User-Centric Design:**

   - Define component structure, reusability (e.g., atomic design principles), and state management practices based on the UI Requirements Document and **latest best practices for the chosen UI framework/library (e.g., React, Vue, Angular, Svelte) obtained via `context7` and web research.**
   - Establish advanced state management patterns (e.g., global state, local state, derived state, finite state machines) using `context7` for library-specific guidance and cutting-edge techniques from the web.
   - Mandate adherence to accessibility standards (WCAG 2.1+ AA or AAA) and define clear implementation guidelines, including ARIA attributes and keyboard navigation.
   - Define rules for responsive design, progressive web apps (PWAs), performance optimization (e.g., Core Web Vitals, code splitting, lazy loading, image optimization), and internationalization/localization (i18n/l10n).
   - Reference and adapt UI development rules from `context7` and web research.

6. **Comprehensive Testing & Quality Engineering (QE):**

   - Define stringent testing requirements across the test pyramid: unit tests (>90% coverage for critical logic), integration tests, component tests, contract tests, and end-to-end (E2E) tests, as per the Testing Strategy Document and refined by industry best practices.
   - Establish practices for Behavior-Driven Development (BDD) or Test-Driven Development (TDD) where beneficial, and property-based testing for robustness.
   - Define test naming conventions, organization of test files, and use of mocking/stubbing/faking frameworks, informed by `context7` for specific testing libraries and web research.
   - Outline requirements for non-functional testing: performance testing (load, stress, soak), usability testing, security testing (penetration testing, fuzzing), and accessibility testing.
   - Promote a Quality Engineering mindset with test automation at all levels and continuous feedback.
   - Include and adapt relevant testing rules from `context7` and web research.

7. **Living Documentation & Knowledge Sharing Standards:**

   - Define requirements for in-code documentation (e.g., JSDoc, TSDoc, Python docstrings), API documentation (e.g., OpenAPI/Swagger, AsyncAPI), and Architectural Decision Records (ADRs) using lightweight templates.
   - Establish guidelines for maintaining `README.md` files (project, module-level), wikis, and other developer-facing documentation, ensuring they are version-controlled and kept up-to-date automatically where possible (docs-as-code).
   - **Utilize `context7` to understand documentation best practices for specific libraries/frameworks (e.g., Storybook for UI components, Docusaurus/MkDocs for general docs).**
   - Promote knowledge sharing through regular tech talks, pair programming, and well-documented code.
   - Reference and adapt documentation rules from web research.

8. **Performance, Scalability, Resilience & Optimization:**
   - Define clear performance benchmarks (e.g., response times, throughput, resource utilization, Core Web Vitals) and coding practices to achieve them, informed by project requirements and industry standards.
   - Establish guidelines for identifying and optimizing critical performance paths, database query optimization (e.g., avoiding N+1 queries, using indexes), efficient resource management (memory, CPU, network), and caching strategies (client-side, CDN, server-side).
   - **Leverage `context7` and web research for technology-specific performance tuning guides, optimization techniques, and common pitfalls.**
   - Incorporate rules for code profiling, benchmarking, load testing, and continuous monitoring of application performance and resource consumption in production using APM tools.
   - Define strategies for building scalable and resilient systems (e.g., stateless services, idempotent operations, graceful degradation, rate limiting, backpressure).
   - Include and adapt relevant performance rules from `context7` and web research.

## Output Format

- Use Markdown for clear structure and readability.
- Organize rules into logical sections with clear headings.
- Use bullet points for individual rules.
- Include code examples where appropriate to illustrate rules.
- Format as a `.md` file that can be easily referenced by the development team.

**Emphasis:** The generated rules must be highly specific to the project's technology stack (as validated by `context7`), architecture, and unique requirements. They must be practical, actionable, and enforceable, promoting consistency, innovation, and excellence across the codebase. Prioritize `context7` for up-to-date, authoritative guidance on specific technologies. The rules should reflect cutting-edge development trends and advanced software engineering techniques.

**Output File:** Save the generated Project Rules as `project_docs/projectRules.md`.
