# Project Development Rules: Texas Etiquette Online Presence

## Introduction

This document outlines the comprehensive development rules and standards for the Texas Etiquette Online Presence Revitalization project. Adherence to these rules is mandatory to ensure consistency, maintainability, scalability, security, and the adoption of modern, cutting-edge software engineering practices. These rules are derived from project documentation (including `technicalSpecifications.md`, `productRequirements.md`, etc.) and enhanced by authoritative guidance from `context7` and current industry best practices identified through web research.

This is a living document and will be updated as the project evolves and new best practices emerge.

## 1. Code Style & Formatting Rules

Effective and consistent code style is paramount for readability, maintainability, and collaboration. This project will leverage a combination of ESLint for linting and Prettier for automated code formatting, specifically configured for our TypeScript, React, and Tailwind CSS stack.

### 1.1 Core Tooling & Configuration

* **ESLint (`/eslint/eslint`):**
  * ESLint will be the primary linter for identifying and reporting on patterns in JavaScript and TypeScript code.
  * Configuration will reside in `eslint.config.js` (flat config format) in the project root.
  * It will enforce coding standards, identify potential bugs, and ensure code consistency.
* **Prettier (`/prettier/prettier`):**
  * Prettier will be used for all automated code formatting. It enforces an opinionated, consistent style, minimizing debates about formatting.
  * Configuration will reside in `.prettierrc.json` and `.prettierignore` in the project root.
* **TypeScript-ESLint (`/typescript-eslint/typescript-eslint`):**
  * This suite of tools enables ESLint to lint TypeScript code effectively.
  * We will use `@typescript-eslint/parser` as the parser for ESLint.
  * Recommended rule sets like `tseslint.configs.recommendedTypeChecked` (for type-aware linting) will be extended.
* **React-Specific Linting (`/jsx-eslint/eslint-plugin-react`):**
  * `eslint-plugin-react` provides React-specific linting rules.
  * We will extend configurations like `eslint-plugin-react/configs/recommended` and `eslint-plugin-react/configs/jsx-runtime` (for the new JSX transform).
  * This includes rules for Hooks (`eslint-plugin-react-hooks`) which is often bundled or recommended alongside `eslint-plugin-react`.
* **Prettier Integration (`eslint-plugin-prettier`, `eslint-config-prettier`):**
  * `eslint-plugin-prettier` (used via `eslint-plugin-prettier/recommended` or by manually adding `eslint-plugin-prettier` to plugins and `prettier/prettier: 'error'` to rules) runs Prettier as an ESLint rule.
  * `eslint-config-prettier` (`/prettier/eslint-config-prettier`) is crucial and **must be included last** in the ESLint `extends` array (or as the last configuration object in a flat config array if it's a config object itself) to disable all ESLint core and plugin rules that are stylistic and might conflict with Prettier. This ensures Prettier is the single source of truth for formatting.
* **Tailwind CSS Class Sorting (`/tailwindlabs/prettier-plugin-tailwindcss`):**
  * This Prettier plugin automatically sorts Tailwind CSS classes according to the recommended order, enhancing consistency and readability of utility classes.
  * It will be added to the `plugins` array in `.prettierrc.json`.

### 1.2 Setup & Basic Configuration Guidance

* **Installation:** All necessary packages will be installed as development dependencies using Bun:

  ```sh
  bun add -d eslint prettier typescript typescript-eslint @typescript-eslint/parser @eslint/js eslint-plugin-react eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss
  ```

* **`eslint.config.js` (Flat Configuration - Conceptual Example):**

  ```javascript
  // eslint.config.js
  import globals from 'globals';
  import eslint from '@eslint/js';
  import tseslint from 'typescript-eslint';
  import eslintPluginReactRecommended from 'eslint-plugin-react/configs/recommended.js';
  import eslintPluginJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
  import eslintPluginPrettier from 'eslint-plugin-prettier'; // For direct plugin usage
  import eslintConfigPrettier from 'eslint-config-prettier'; // To disable conflicting rules

  export default tseslint.config(
    // Globally applied configurations
    eslint.configs.recommended, // Base ESLint recommended rules
    ...tseslint.configs.recommendedTypeChecked, // TypeScript specific, type-aware rules
    {
      // Configuration for React files (TSX/JSX)
      files: ['**/*.{ts,tsx,js,jsx}'], // Apply to all relevant files
      ...eslintPluginReactRecommended, // React recommended rules
      languageOptions: {
        ...eslintPluginReactRecommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
        parserOptions: {
          project: ['./tsconfig.json'], // Path to your tsconfig.json
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        react: {
          version: 'detect', // Automatically detect React version
        },
      },
      rules: {
        'react/prop-types': 'off', // Not needed with TypeScript
        'react/react-in-jsx-scope': 'off', // Handled by new JSX transform via jsx-runtime config
        'react/self-closing-comp': 'warn',
        'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
        // Add other custom React rules here
      },
    },
    // Apply JSX runtime separately if needed, often included in React recommended
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      ...eslintPluginJsxRuntime,
    },
    // Prettier integration: Add prettier plugin and then prettier config to disable conflicts
    // This approach is for explicit flat config setup.
    // Alternatively, `eslint-plugin-prettier/recommended` bundle can be used if it's adapted for flat config.
    {
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        'prettier/prettier': 'error', // Report Prettier differences as ESLint errors
      },
    },
    eslintConfigPrettier, // IMPORTANT: Must be last to disable any formatting rules from other configs.

    // Project-specific global overrides or additional rules
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        // Add other global custom rules or overrides here
      },
    }
  );
  ```

* **`.prettierrc.json` (Recommended Baseline):**

  ```json
  {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 100,
    "tabWidth": 2,
    "useTabs": false,
    "jsxSingleQuote": true,
    "bracketSpacing": true,
    "arrowParens": "always",
    "endOfLine": "lf",
    "plugins": ["prettier-plugin-tailwindcss"]
  }
  ```

* **`.prettierignore`:**
  * Standard ignore patterns. This file tells Prettier which files *not* to format.

  ```text
  # Comments are allowed
  node_modules/
  .bun/
  build/
  dist/
  .next/
  out/
  coverage/
  *.log
  # Add any other files or directories that should not be formatted
  ```

### 1.3 Naming Conventions

Consistent naming conventions are crucial for code readability and maintainability. The following conventions will be adopted:

* **General:**
  * **Variables & Functions:** `camelCase` (e.g., `userName`, `calculateTotalAmount`).
  * **Parameters:** `camelCase` (e.g., `function greetUser(userName)`).
  * **Constants:** `UPPER_SNAKE_CASE` for true constants whose values do not change (e.g., `const MAX_LOGIN_ATTEMPTS = 5;`). For configuration or less strict "constants", `camelCase` might be acceptable if preferred for consistency with other variables.
* **Files:**
  * **React Components:** `PascalCase.tsx` (e.g., `UserProfileCard.tsx`).
  * **React Hooks:** `useCamelCase.ts` (e.g., `useAuthStatus.ts`).
  * **Utility/Service/Helper Files:** `kebab-case.ts` (e.g., `date-formatters.ts`, `api-client.ts`).
  * **Configuration Files:** As per tool standards (e.g., `tailwind.config.ts`, `next.config.mjs`).
  * **Test Files:** `*.test.ts` or `*.spec.ts` following the name of the file being tested (e.g., `UserProfileCard.test.tsx`, `date-formatters.spec.ts`).
  * **`.gitignore`:** This file specifies intentionally untracked files that Git should ignore. Example content:

    ```gitignore
    # Dependencies
    node_modules/
    .bun/

    # Next.js build outputs
    .next/
    out/

    # Local Environment Variables
    .env*.local

    # Test & Coverage outputs
    coverage/
    junit.xml

    # Logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    bun-error.log*

    # Editor & OS specific
    .vscode/*
    !.vscode/settings.json
    !.vscode/extensions.json
    .DS_Store
    *.pem
    ```

* **TypeScript Specific:**
  * **Classes, Enums, Types, Interfaces:** `PascalCase` (e.g., `class UserService`, `enum OrderStatus`, `type UserProfile`, `interface ProductDetails`).
  * **Generic Type Parameters:** Single uppercase letters, often starting with `T`, then `U`, `K`, `V` (e.g., `function identity<T>(arg: T): T`). Descriptive names (`TValue`, `TError`) are preferred for more complex generics.
* **React Specific:**
  * **Components (Functional & Class):** `PascalCase` (e.g., `function PrimaryButton()`, `class LegacyComponent`).
  * **Props Interfaces/Types:** `ComponentNameProps` (e.g., `PrimaryButtonProps`).
  * **Event Handlers:** `handleEventName` or `onEventName` (e.g., `handleClick`, `onChangeInput`).
* **CSS & Styling:**
  * **CSS Modules:** Filenames `camelCase.module.css` (e.g., `userProfile.module.css`). Class names within modules also `camelCase` (e.g., `styles.userName`).
  * **Tailwind CSS:** Primarily utility-first. When custom components are created that encapsulate Tailwind classes, the component's name follows React conventions. If abstracting complex Tailwind patterns into global CSS or CSS Modules using `@apply`, use descriptive `kebab-case` or `camelCase` for the created class names.

### 1.4 Code Organization

A well-organized project structure facilitates navigation, scalability, and team collaboration. This project will adopt a structure aligned with Next.js (App Router) best practices.

* **Root Directory Structure (Conceptual):**

  ```text
  .vscode/          # VS Code settings (e.g., for ESLint, Prettier integration)
  app/              # Next.js App Router: Routes, layouts, pages, API handlers
    (pages)/        # Convention for grouping page routes
      about/
        page.tsx
      dashboard/
        layout.tsx
        page.tsx
        settings/
          page.tsx
    (components)/   # Route group for components not creating URL segments
      ui/           # Global UI components (e.g., Button, Card) - can also be top-level
    api/            # API route handlers
      auth/[...nextauth]/route.ts # Example NextAuth.js
      hello/route.ts
    layout.tsx      # Root layout
    page.tsx        # Root page (homepage)
    globals.css     # Global styles
  components/       # Shared UI components (can be further structured)
    ui/             # Generic, reusable UI elements (Button, Input, Card, Modal)
    layout/         # Layout-specific components (Navbar, Footer, Sidebar, Header)
    featureX/       # Components specific to a particular feature or domain
      ProfileEditor.tsx
      ProfileView.tsx
  lib/              # Utility functions, helper scripts, constants, API client configuration
    utils.ts
    constants.ts
    api.ts
  hooks/            # Custom React hooks (e.g., useAuth, useFormValidation)
  store/            # State management (e.g., Zustand, Jotai, or Context API providers)
  styles/           # Additional global styles or theme files (if not solely in app/globals.css)
  types/            # Shared TypeScript type definitions and interfaces (global or domain-specific)
    index.ts        # Barrel file for exporting types
    user.types.ts
  public/           # Static assets (images, fonts, etc.)
  .env.local        # Local environment variables (Gitignored)
  .eslintrc.js      # ESLint configuration (or eslint.config.js for flat config)
  .gitignore
  .prettierrc.json
  .prettierignore
  bun.lockb
  next.config.mjs   # Next.js configuration
  package.json
  README.md
  tailwind.config.ts
  tsconfig.json
  ```

* **Component Granularity:**
  * Strive for small, focused components (Single Responsibility Principle).
  * Organize components by feature or domain where appropriate, in addition to a general `ui` or `shared` directory for highly reusable elements.
  * **Atomic Design Principles:** Consider organizing `components/ui/` using atomic design (atoms, molecules, organisms) if the project complexity warrants it, but prioritize clarity and ease of navigation.
* **Co-location:**
  * For components, consider co-locating related files (e.g., `MyComponent.tsx`, `MyComponent.module.css`, `MyComponent.test.tsx`) within the same directory (`components/MyComponent/`).
  * Use `index.ts` or `index.tsx` barrel files within component directories for cleaner imports (e.g., `import { Button } from '@/components/ui/Button';`).
* **State Management:**
  * Global state management (e.g., Zustand, Jotai, or advanced Context API usage) logic should reside in the `store/` directory.
  * Organize stores by feature or domain (e.g., `store/authStore.ts`, `store/cartStore.ts`).
* **API Interactions:**
  * API route handlers are within `app/api/` as per Next.js App Router conventions.
  * Client-side API fetching logic (e.g., custom hooks wrapping `fetch` or a library like `axios` or `SWR`/`TanStack Query`) can be in `lib/api.ts` or feature-specific service files.

### 1.5 React & JSX Specific Rules (Examples)

Beyond the recommended set, we will enforce/consider rules like:

* `react/jsx-key`: Warn on missing `key` props in iterators or array children.
* `react/no-unescaped-entities`: Prevent common HTML entities from being inadvertently rendered as text.
* `react/jsx-pascal-case`: Enforce PascalCase for user-defined JSX components.
* `eslint-plugin-react-hooks` rules (`rules-of-hooks`, `exhaustive-deps`): Enforce rules of hooks and check hook dependencies (these are typically included in `eslint-plugin-react/configs/recommended` or enabled by default with modern setups).

### 1.6 Tailwind CSS Practices

* **Class Sorting:** `prettier-plugin-tailwindcss` will automatically sort classes, ensuring a consistent order.
* **Clarity & Maintainability:**
  * Avoid overly long and complex strings of utility classes directly in JSX, as they can harm readability.
  * For frequently repeated or complex class combinations, consider:
    * Creating dedicated React components that encapsulate the styles.
    * Using `@apply` in `globals.css` or CSS Modules for shared, complex utility patterns. However, use `@apply` judiciously to avoid losing the benefits of Tailwind's utility-first approach.
* **Conditional Classes:** Use a library like `clsx` or `classnames` for conditionally applying Tailwind classes in a clean and readable manner.
* **Customization:**
  * All project-specific customizations to Tailwind CSS (e.g., extending the theme, adding custom colors, fonts, or utility classes) **must** be defined in `tailwind.config.ts`.
  * Avoid arbitrary magic numbers or one-off styles directly in utility classes if they can be abstracted into the theme.
* **Semantic Class Names (When Necessary):** While Tailwind is utility-first, if you are creating custom CSS that works alongside Tailwind (e.g., for complex animations or third-party library styling), use semantic and descriptive class names (`kebab-case`).

---

## 2. Architectural Guidelines

This section outlines the architectural principles and patterns to be followed for the Texas Etiquette Online Presence project. A sound architecture is critical for building a robust, scalable, and maintainable application.

### 2.1 Core Architectural Principles

The following core principles will guide all architectural decisions:

* **Modularity:** Design components and modules that are independent, reusable, and have well-defined responsibilities. This promotes easier development, testing, and maintenance.
* **Scalability:** Architect the application to handle growth in users, data, and features. This includes efficient data fetching, state management, and leveraging serverless capabilities where appropriate.
* **Maintainability:** Write clean, well-documented, and organized code. Follow established design patterns and the rules outlined in this document to ensure the codebase is easy to understand, modify, and debug over time.
* **Reusability:** Identify common functionalities and patterns and encapsulate them into reusable components, hooks, or utility functions to avoid code duplication and promote consistency.
* **Separation of Concerns (SoC):** Clearly separate different aspects of the application (e.g., UI, business logic, data fetching, state management). Next.js and React inherently promote SoC, and we will strive to maintain this clarity throughout the project.

### 2.2 Next.js Specifics (App Router & Project Structure)

This project will leverage the capabilities of Next.js (v14+) with a focus on modern best practices.

* **App Router:** The Next.js **App Router** will be used for all routing, layouts, and server-side logic. This enables powerful features like Server Components, Client Components, Route Handlers, and improved data fetching patterns.
* **Directory Structure:**
  * The `src/` directory will be used to house all application code, as per the preference noted in `technicalSpecifications.md`.
  * The directory structure outlined in **Section 1.4 Code Organization** (specifically the example under "Root Directory Structure (Conceptual)") should be followed. This includes conventions for `app/`, `components/`, `lib/`, `hooks/`, `store/`, `styles/`, and `types/`.
* **Import Alias:** The `@/*` import alias (e.g., `@/components/Button`) is configured and **must** be used for cleaner and more maintainable import paths, avoiding deep relative paths (`../../../`).
* **Server Components & Client Components:**
  * Strive to use React Server Components (RSCs) by default within the `app/` directory for improved performance, as they render on the server and send minimal JavaScript to the client.
  * Use Client Components (marked with `'use client';`) only when interactivity or browser-specific APIs are required (e.g., event handlers, state, effects, browser APIs).
  * Carefully consider the boundary between Server and Client Components to optimize client-side bundle sizes.
* **Route Handlers:** API endpoints will be implemented as Route Handlers within the `app/api/` directory, following RESTful principles where applicable.

### 2.3 State Management Strategy

The state management strategy aims to balance simplicity, performance, and scalability by leveraging Next.js App Router capabilities and appropriate client-side state solutions.

* **Server-Side Data as Primary Source of Truth:**
  * With the Next.js App Router, prioritize fetching and mutating data on the server via Server Components, Route Handlers, and Server Actions.
  * Utilize Next.js's caching and revalidation mechanisms (`revalidatePath`, `revalidateTag`) to keep client-side views consistent with server data.
  * This approach minimizes client-side state and reduces the amount of JavaScript shipped to the browser.

* **Local Component State (`useState`, `useReducer`):**
  * For state that is truly local to a single component and does not need to be shared (e.g., form input values, toggle states), use React's built-in `useState` and `useReducer` hooks.

* **React Context API for Scoped UI State:**
  * For UI state that needs to be shared across a limited subtree of components (e.g., theme settings within a layout, state for a multi-step form within a specific feature), the React Context API is suitable.
  * Avoid using Context for high-frequency updates or complex global state, as it can lead to performance issues due to re-renders.

* **Client-Side Global State (Zustand/Jotai - If Necessary):**
  * For complex client-side global UI state that is not directly derived from server data and needs to be shared across many unrelated components (e.g., notification system state, complex application-wide UI preferences), a lightweight global state manager like **Zustand** or **Jotai** will be considered.
  * **Preference:** Start with Zustand due to its simplicity and minimal boilerplate. Jotai can be an alternative if a more atomic state model is beneficial.
  * The decision to introduce a global state manager will be made carefully, only when server-side data management and local/contextual state are insufficient.

* **URL as State:**
  * Utilize the URL (query parameters, path segments) to manage application state where appropriate (e.g., filters, pagination, current item selection). This makes the state shareable and bookmarkable.
  * Next.js's `useRouter`, `useSearchParams`, and `usePathname` hooks facilitate this.

* **Data Fetching Libraries (Client-Side):**
  * When client-side data fetching is unavoidable or preferred for specific interactive scenarios (e.g., optimistic updates, real-time data), libraries like **SWR** or **TanStack Query (React Query)** should be used. These libraries provide caching, revalidation, and optimistic update capabilities. This is secondary to server-side data fetching via Server Components.

### 2.4 API Design and Communication

Effective API design is crucial for a decoupled frontend and backend, even when co-located within Next.js. APIs will be developed within the `app/api/` directory using Next.js Route Handlers.

* **RESTful Principles:**
  * Strive to follow RESTful conventions for API design:
    * Use HTTP methods appropriately (GET, POST, PUT, DELETE, PATCH).
    * Use descriptive resource-based URLs (e.g., `/api/users`, `/api/products/{productId}`).
    * Utilize standard HTTP status codes to indicate the outcome of requests.

* **Request and Response Schemas:**
  * **Clarity and Consistency:** Define clear and consistent schemas for all API requests and responses.
  * **TypeScript:** Use TypeScript interfaces or types to define these schemas, ensuring type safety at development time.
  * **Validation:** Implement runtime validation for incoming request bodies and parameters. Libraries like **Zod** are highly recommended for this purpose to ensure data integrity before processing (this aligns with Section 2.5).
  * **Data Transformation:** Be explicit about any data transformations occurring between the client and server or server and database.

* **HTTP Status Codes:**
  * Use standard HTTP status codes to convey the status of API requests:
    * `200 OK`: Successful GET, PUT, PATCH requests.
    * `201 Created`: Successful POST requests resulting in a new resource.
    * `204 No Content`: Successful DELETE requests or requests with no body to return.
    * `400 Bad Request`: Client-side errors (e.g., invalid input, malformed request).
    * `401 Unauthorized`: Authentication is required and has failed or has not yet been provided.
    * `403 Forbidden`: Authenticated user does not have permission to access the resource.
    * `404 Not Found`: The requested resource does not exist.
    * `500 Internal Server Error`: A generic error message for unexpected server-side errors.

* **Error Handling:**
  * Implement a consistent error handling strategy.
  * For client errors (4xx), provide clear, actionable error messages in the response body, ideally in a standardized JSON format (e.g., `{ "error": { "message": "Invalid email format", "code": "INVALID_INPUT" } }`).
  * For server errors (5xx), avoid exposing sensitive details. Log errors comprehensively on the server-side for debugging.

* **Versioning (If Needed):**
  * While not immediately required for a new project, if significant breaking changes are anticipated in the future, consider URL-based versioning (e.g., `/api/v1/users`). For now, aim for non-breaking changes.

* **Security:**
  * **Authentication & Authorization:** Implement robust authentication (e.g., NextAuth.js) and authorization mechanisms to protect API endpoints. Ensure that users can only access resources they are permitted to.
  * **Input Sanitization:** Always sanitize and validate user inputs to prevent common web vulnerabilities (e.g., XSS, SQL injection), even with ORMs or database clients that offer some protection.
  * **Rate Limiting:** Consider rate limiting for public-facing or sensitive API endpoints to prevent abuse.
  * **HTTPS:** All API communication must be over HTTPS in production.

* **GraphQL (Future Consideration):**
  * While REST will be the primary approach, GraphQL might be considered for specific use cases in the future if client data requirements become highly complex or varied, and the benefits outweigh the added complexity. This would be a separate, well-defined initiative.

### 2.5 Data Handling and Validation

Robust data handling and validation are essential for application integrity, security, and a good user experience.

* **TypeScript for Static Type Safety:**
  * Leverage TypeScript throughout the application (frontend and backend Route Handlers) to catch type errors at build time and improve code quality and maintainability.
  * Define clear, explicit types and interfaces for all data structures, props, API payloads, and function signatures.

* **Runtime Validation (Zod):**
  * **Critical for External Data:** All data coming from external sources **must** be validated at runtime. This includes:
    * API request bodies and parameters (in Route Handlers).
    * Form submissions (client-side and server-side).
    * Data from third-party APIs or services.
  * **Recommended Library:** **Zod** is the recommended library for schema declaration and validation. Its integration with TypeScript provides excellent type inference from schemas.
  * Define Zod schemas for all expected data structures and use them to parse and validate incoming data. Reject or sanitize data that does not conform to the schema.

* **Data Fetching & Mutation Strategy:**
  * **Server-Side First (Next.js App Router):**
    * Prioritize data fetching and mutations on the server using React Server Components (RSCs) for reads and Server Actions for writes/updates/deletes.
    * This minimizes client-side JavaScript, improves performance, and enhances security by keeping sensitive data operations on the server.
    * Utilize Next.js caching (`fetch` extensions, `cache` function) and revalidation (`revalidatePath`, `revalidateTag`) to manage data freshness.
  * **Client-Side Fetching (SWR/TanStack Query - Judicious Use):**
    * For scenarios requiring highly interactive client-side data management (e.g., optimistic updates, real-time polling, complex client-side caching not easily handled by Server Components), use libraries like **SWR** or **TanStack Query (React Query)**.
    * These libraries provide robust features like caching, automatic revalidation, pagination, and optimistic updates.
    * This should be a secondary approach to server-centric data operations.

* **Input Sanitization & Escaping:**
  * While validation checks structure and type, ensure that data intended for display or storage is appropriately sanitized or escaped to prevent Cross-Site Scripting (XSS) attacks and other injection vulnerabilities. Frameworks and libraries often provide mechanisms for this (e.g., React's automatic JSX escaping), but be mindful when directly manipulating the DOM or constructing raw queries.

* **Error Handling for Data Operations:**
  * Implement clear error handling for all data fetching, mutation, and validation operations.
  * Provide informative feedback to the user in case of failures (e.g., validation errors on a form, network issues).
  * Log errors appropriately on the server for debugging (as mentioned in Section 2.4).

---

## 3. DevOps Practices

Effective DevOps practices are essential for efficient development workflows, stable releases, and reliable application performance. This section outlines the key DevOps principles and tools for the project.

### 3.1 Version Control (Git)

Git will be used for version control, hosted on GitHub. Adherence to a consistent Git workflow is mandatory.

* **Branching Strategy:**
  * A simplified branching model similar to **GitHub Flow** is recommended for agility:
    * `main`: This branch represents the production-ready code. Direct commits to `main` are prohibited. Merges to `main` happen only through Pull Requests (PRs) from feature branches, typically after a release.
    * `develop` (Optional but Recommended): This branch can serve as an integration branch where features are merged before being promoted to `main` for a release. If not used, feature branches merge directly to `main` after review and testing.
    * **Feature Branches:** All new development (features, bug fixes, improvements) **must** be done in separate feature branches. Branch names should be descriptive and prefixed (e.g., `feat/user-authentication`, `fix/login-button-bug`, `chore/update-dependencies`).
    * **Hotfix Branches:** For urgent production fixes, `hotfix/*` branches can be created from `main` and merged back into `main` and `develop` (if used) after the fix.
* **Commit Messages:**
  * Follow **Conventional Commits** specification (e.g., `feat: add user login page`, `fix: correct calculation error in cart`, `docs: update API endpoint documentation`). This aids in changelog generation and semantic versioning.
  * Commits should be atomic and represent a single logical change.
  * Write clear and concise commit messages. The subject line should be imperative (e.g., "Add X" not "Added X" or "Adding X").
* **Pull Requests (PRs):**
  * All changes to `main` (or `develop`) **must** go through a Pull Request.
  * PRs should be focused and correspond to a single feature or bug fix.
  * Provide a clear description in the PR, detailing the changes made, the reason for the changes, and any testing instructions.
  * At least one code review from another team member is required before a PR can be merged.
  * Ensure all automated checks (linting, tests, builds via CI) pass before merging a PR.
  * Delete feature branches after merging the PR.
* **Rebasing and Merging:**
  * Prefer rebasing feature branches onto the target branch (`develop` or `main`) to maintain a linear history before creating/updating a PR. `git pull --rebase` is encouraged for updating local feature branches.
  * Use squash merges or regular merges with meaningful commit messages when merging PRs, depending on team preference for history cleanliness versus granularity.

### 3.2 Continuous Integration / Continuous Deployment (CI/CD)

A robust CI/CD pipeline automates the build, test, and deployment process, ensuring rapid and reliable delivery of new features and fixes. **GitHub Actions** will be used as the primary CI/CD platform, integrating tightly with the GitHub repository and Vercel for deployments.

* **Continuous Integration (CI) with GitHub Actions:**
  * **Triggers:** CI workflows will be triggered on:
    * Pushes to `main` and `develop` (if used) branches.
    * Pushes to any feature branch (`feat/*`, `fix/*`, `chore/*`, etc.).
    * Creation or updates to Pull Requests targeting `main` or `develop`.
  * **Key CI Pipeline Steps:**
    1. **Checkout Code:** Fetch the latest code from the repository.
    2. **Setup Environment:** Install **Bun** (as specified in `MEMORY[721bdd57-d08d-42dc-a22c-f79f3dcc2a8b]`) and any other necessary dependencies.
    3. **Install Dependencies:** Run `bun install` to get project dependencies.
    4. **Linting & Formatting:** Run ESLint (`bun run lint`) and Prettier (`bun run format:check`) to enforce code style and quality.
    5. **Testing:** Execute all automated tests (unit, integration) using Bun's test runner (`bun test`).
    6. **Build Application:** Build the Next.js application (`bun run build`) to ensure it compiles correctly and to generate production-ready artifacts.
    7. **Security Scans (Optional):** Consider adding steps for vulnerability scanning of dependencies or static application security testing (SAST) if required.
  * **Status Checks:** CI pipeline results (pass/fail) will be reported as status checks on Pull Requests. PRs cannot be merged unless all required CI checks pass.

* **Continuous Deployment (CD) with Vercel:**
  * **Vercel Integration:** The project will leverage Vercel's seamless integration with GitHub for deployments.
  * **Preview Deployments:**
    * For every Pull Request opened against `main` (or `develop`), Vercel will automatically create a unique preview deployment.
    * This allows for testing and reviewing changes in a live, isolated environment before merging.
    * Preview deployment URLs will be automatically commented on the PR.
  * **Production Deployments:**
    * Merging a PR into the `main` branch will automatically trigger a production deployment on Vercel.
    * Vercel handles the build and deployment process, ensuring zero-downtime updates.
  * **Rollbacks:** Vercel provides mechanisms for instantly rolling back to previous deployments if issues are discovered in production.

* **Build Artifacts:**
  * Next.js build artifacts generated by `bun run build` are managed by Vercel during the deployment process.
  * There is generally no need to store these artifacts in the repository or manually manage them.

* **Environment-Specific Configurations:**
  * CI/CD pipelines must handle environment-specific configurations securely (see Section 3.3 Environment Management).

### 3.3 Environment Management

Proper environment management is crucial for developing, testing, and deploying the application reliably and securely. We will define distinct environments and manage their configurations, especially environment variables, systematically.

* **Defined Environments:**
  * **Development (Local):**
    * Each developer's local machine.
    * Used for active feature development and unit testing.
    * Configuration managed via `.env.local`.
  * **Staging/Preview (Vercel Preview Deployments):**
    * Automatically created by Vercel for each Pull Request (as detailed in Section 3.2).
    * Used for integration testing, QA, and stakeholder reviews before merging to `main`.
    * Mirrors the production environment as closely as possible.
    * Configuration managed via Vercel Environment Variables (Preview scope).
  * **Production (Vercel Production Deployment):**
    * The live application accessible to end-users.
    * Deployed from the `main` branch.
    * Configuration managed via Vercel Environment Variables (Production scope).

* **Environment Variable Management:**
  * **`.env` Files for Local Development:**
    * Use `.env.local` for local environment-specific variables. This file **must** be added to `.gitignore` to prevent committing sensitive credentials.
    * A template file, `.env.example`, should be committed to the repository, listing all required environment variables with placeholder or non-sensitive default values. Developers can copy this to `.env.local` and fill in their specific values.
    * Next.js automatically loads variables from `.env.*` files.
  * **Vercel Environment Variables for Deployed Environments:**
    * All environment variables for Preview and Production environments will be configured directly within the Vercel project settings.
    * Vercel provides distinct scopes (Production, Preview, Development - though Development scope in Vercel is usually for Vercel CLI local dev) for variables.
    * This keeps sensitive information out of the codebase and allows for secure management.
  * **Naming Conventions & Access:**
    * Variables intended for client-side browser access **must** be prefixed with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_API_URL`).
    * Variables without this prefix are only available server-side (e.g., in Route Handlers, Server Components, Server Actions).
  * **Security:**
    * Never commit sensitive credentials (API keys, database passwords, secret keys) directly into the codebase or `.env.example`.
    * Use Vercel's secure environment variable storage for all deployed environments.
    * Regularly review and rotate sensitive credentials as per security best practices.
  * **Consistency:** Ensure that the set of environment variables is consistent across all environments, even if their values differ. Missing variables can lead to unexpected behavior or build failures.

### 3.4 Monitoring and Logging

Comprehensive monitoring and logging are vital for understanding application behavior, diagnosing issues, and ensuring a high-quality user experience.

* **Client-Side Performance & Usage Monitoring:**
  * **Vercel Analytics:** Leverage Vercel Analytics (Speed Insights and Audiences) for real-user monitoring (RUM). This provides insights into:
    * Web Vitals (LCP, FID, CLS) to measure perceived performance.
    * Page views, visitor counts, and other usage metrics.
    * No complex setup is required as it integrates directly with Vercel deployments.

* **Error Tracking:**
  * **Sentry (Recommended):** Implement Sentry or a similar error tracking service (e.g., Bugsnag, Rollbar) for comprehensive error capturing and management across both frontend (client-side JavaScript) and backend (Next.js API Routes/Server Actions).
    * Sentry provides detailed error reports, stack traces, context, and alerting.
    * Configure source maps to ensure readable stack traces for minified production code.
  * **Vercel Error Reporting:** Vercel also provides some level of error reporting for serverless functions, which can be a good starting point or supplement.

* **Server-Side Logging (Backend & API):**
  * **Next.js & Vercel Function Logs:**
    * Utilize standard `console.log()`, `console.warn()`, `console.error()` within Next.js Route Handlers, Server Components, and Server Actions. These logs are automatically captured by Vercel and accessible through the Vercel dashboard for deployed environments.
    * For local development, these logs appear in the terminal where `bun run dev` is running.
  * **Structured Logging:**
    * Adopt structured logging (e.g., JSON format) for server-side logs where feasible. This makes logs easier to parse, query, and analyze, especially if forwarded to a dedicated logging platform.
    * Include relevant context in logs, such as request IDs, user IDs (if applicable and privacy-permitting), and specific operation details.
    * Example (conceptual):

      ```typescript
      // In an API Route or Server Action
      console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        level: 'INFO',
        message: 'User successfully updated profile',
        requestId: 'some-uuid',
        userId: 'user-123'
      }));
      ```

  * **Dedicated Logging Service (Future Consideration):**
    * If log volume becomes very high or advanced querying, alerting, and retention capabilities are needed, consider integrating a dedicated logging service like Logtail, Axiom, Datadog, or Grafana Loki. These services can ingest logs from Vercel.

* **Log Levels:**
  * Use appropriate log levels to categorize the severity and importance of log messages:
    * `DEBUG`: Detailed information for development and debugging purposes. Should typically be disabled or have minimal output in production.
    * `INFO`: General information about application operations (e.g., request received, user logged in).
    * `WARN`: Potential issues or unexpected situations that do not yet cause errors but might indicate problems.
    * `ERROR`: Actual errors or failures that prevent normal operation.
    * `FATAL`: Severe errors that cause the application to terminate (less common in serverless environments but conceptually important).

* **Log Sensitivity & Security:**
  * **Never log sensitive Personally Identifiable Information (PII)** such as passwords, API keys, full credit card numbers, or detailed personal data unless absolutely necessary, anonymized, and compliant with privacy regulations (e.g., GDPR, CCPA).
  * Be cautious about what information is included in logs, especially in production environments, to avoid exposing sensitive details that could be exploited.
  * Regularly review log contents and configurations to ensure compliance and security.

---

## 4. Security Rules

Ensuring the security of the application, its data, and its users is paramount. This section outlines the security rules and best practices to be followed throughout the development lifecycle.

### 4.1 General Security Principles

Foundational security principles that apply across all aspects of the project:

* **Principle of Least Privilege:** Grant only the minimum necessary permissions to users, services, and components. Avoid overly permissive access controls.
* **Defense in Depth:** Implement multiple layers of security controls, so if one layer is breached, others can still protect the system.
* **Secure by Design & Default:** Consider security implications at all stages of design and development. Default configurations should be secure.
* **Keep Secrets Secure:** Never hardcode secrets (API keys, passwords, tokens) in the codebase. Use environment variables managed securely (as per Section 3.3) and tools like Vercel's secret management.
* **Regularly Update Dependencies:** Keep all software dependencies (npm packages, OS, tools) up-to-date to patch known vulnerabilities (see Section 4.4).
* **Input Validation and Sanitization:** Validate all inputs (from users, APIs, files) and sanitize outputs to prevent common vulnerabilities like XSS, SQL injection (even with ORMs), and command injection (as covered in Section 2.5 and 2.4).
* **HTTPS Everywhere:** All communication between the client and server, and between server components, must use HTTPS in production.
* **Security Awareness:** All team members should be aware of common web vulnerabilities (OWASP Top 10) and secure coding practices.

### 4.2 Authentication and Authorization

Robust authentication and authorization mechanisms are critical to protect user accounts and ensure that users can only access data and perform actions they are permitted to.

* **Authentication Library: NextAuth.js**
  * **Primary Solution:** NextAuth.js (`next-auth`) will be the primary library for handling authentication.
  * **Providers:** Configure appropriate OAuth providers (e.g., Google, GitHub) and/or credential-based login (email/password) as required by the project.
  * **Database Adapters:** If using database-persisted user accounts, utilize NextAuth.js adapters (e.g., Prisma adapter) to connect to the project's database securely.

* **Session Management:**
  * NextAuth.js handles secure session management by default (e.g., using JWTs or database sessions).
  * Configure session options (e.g., max age, update age) appropriately for security and user experience.
  * Ensure cookies are configured with `HttpOnly`, `Secure` (in production), and `SameSite` attributes correctly.

* **Password Policies (for Credential-Based Auth):**
  * If implementing email/password authentication:
    * **Complexity Requirements:** Enforce strong password complexity (length, character types) on the client-side (for UX) and server-side (for security).
    * **Secure Storage:** Passwords **must** be hashed using a strong, adaptive hashing algorithm (e.g., bcrypt, Argon2) with a unique salt per user. NextAuth.js credential providers typically require you to handle this, or it's handled by the auth service if using one.
    * **Password Reset:** Implement a secure password reset mechanism (e.g., time-limited, single-use tokens sent via email).
    * **Rate Limiting:** Apply rate limiting to login attempts to prevent brute-force attacks.

* **Multi-Factor Authentication (MFA):**
  * **Highly Recommended:** Strongly encourage or enforce MFA, especially for administrative roles or access to sensitive functionalities.
  * NextAuth.js can be extended to support MFA with custom providers or by integrating with services that offer MFA.

* **Authorization (Access Control):**
  * **Role-Based Access Control (RBAC):**
    * Define clear user roles (e.g., `viewer`, `editor`, `admin`).
    * Implement mechanisms to assign roles to users.
    * Protect API endpoints and UI components based on user roles. Access control logic should primarily reside on the server-side (e.g., in API Route Handlers, Server Actions, or Server Components by checking session/user roles).
  * **Permissions:** For more granular control, consider a permission-based system on top of or alongside RBAC if needed.
  * **Server-Side Enforcement:** Authorization checks **must** be performed on the server-side. Client-side checks are for UX improvements (e.g., hiding buttons) but are not a security measure.

* **API Route & Server Action Protection:**
  * All sensitive API routes and Server Actions must verify authentication and authorization status before processing requests.
  * Use NextAuth.js helper functions (e.g., `getServerSession`, `getToken`) to access session information on the server.

### 4.3 Data Security & Privacy

Protecting user data and ensuring privacy is a top priority. The following practices must be implemented to safeguard data throughout its lifecycle.

* **Data in Transit:**
  * **HTTPS Everywhere:** All communication between the client, Next.js server, and any backend services **must** use HTTPS. Vercel handles SSL certificates automatically for deployed applications.
  * **Secure Cookies:** Ensure all session cookies and any other cookies storing sensitive information are flagged as `Secure`, `HttpOnly`, and use appropriate `SameSite` attributes (as configured via NextAuth.js or directly).

* **Data at Rest:**
  * **Database Security:** Rely on the security features of the chosen database provider (e.g., Vercel Postgres, Supabase, or self-managed). This includes access controls, encryption at rest provided by the service, and regular backups.
  * **Application-Level Encryption:** For highly sensitive specific fields (e.g., PII not covered by provider encryption, or if specific compliance requires it), consider application-level encryption before storing in the database. Use strong, standard encryption libraries.
  * **Minimize Data Storage:** Only collect and store data that is essential for the application's functionality. Avoid storing sensitive data unnecessarily.

* **Input Validation and Sanitization:**
  * **Comprehensive Validation (Zod):** As stated in Section 2.5, all external data (user inputs, API responses from third parties, query parameters, request bodies) **must** be validated on the server-side using Zod schemas before processing. This is a primary defense against many injection attacks.
  * **Preventing Cross-Site Scripting (XSS):**
    * Validate and sanitize all user-supplied input that might be rendered back to a page.
    * React inherently helps by escaping string variables rendered in JSX. However, be cautious with `dangerouslySetInnerHTML` – it should be avoided or used with extreme care and only with pre-sanitized HTML.
  * **Preventing Other Injection Attacks:** While ORMs like Prisma abstract away direct SQL, be mindful of how data is used in any raw database queries or when interacting with other systems.

* **Output Encoding:**
  * **Contextual Encoding:** Ensure that data is correctly encoded when displayed in HTML, JavaScript, CSS, or URLs. React's JSX handles much of this for HTML content.
  * When dynamically constructing HTML or injecting data into non-HTML contexts, use appropriate encoding libraries or techniques to prevent XSS.

* **API Key and Secret Management:**
  * **Environment Variables:** All API keys, database credentials, secret keys, and other sensitive configuration values **must** be stored in environment variables.
    * Use `.env.local` for local development (this file should be in `.gitignore`).
    * For deployments (Staging, Production), use Vercel's environment variable management system.
  * **Never Hardcode Secrets:** Secrets must never be hardcoded into the source code or committed to the repository.
  * **Least Privilege for API Keys:** Ensure API keys used by the application have the minimum necessary permissions for their intended tasks.

* **Principle of Least Privilege (Data Access):**
  * Application components and users should only have access to the data that is strictly necessary for them to perform their functions.
  * This applies to database access, API endpoint design, and internal application logic.

* **Privacy Considerations:**
  * **Be Mindful of PII:** Be particularly careful when handling Personally Identifiable Information (PII). Understand what constitutes PII and apply stricter controls.
  * **Data Minimization:** Only collect and retain user data that is absolutely necessary for the intended purpose and for the shortest necessary duration.
  * **Transparency:** If collecting user data, ensure privacy policies are clear and accessible (though the creation of the policy itself is outside development rules, the system must support its tenets).
  * **Compliance:** Be aware of relevant data privacy regulations (e.g., GDPR, CCPA) if the application targets users in those regions and design systems to support compliance (e.g., data access requests, right to be forgotten).

### 4.4 Dependency Management

Managing third-party dependencies securely is crucial to prevent the introduction of vulnerabilities into the application.

* **Regular Vulnerability Scanning:**
  * **Automated Tools:** Utilize automated tools to scan dependencies for known vulnerabilities.
    * **GitHub Dependabot:** Enable Dependabot alerts and security updates for the repository. Dependabot automatically checks dependencies and can create Pull Requests to update vulnerable packages.
    * **Bun Audit (or equivalent):** Use `bun pm audit` (or `npm audit` / `yarn audit` if using those package managers for specific projects, though this project uses Bun) regularly to check for vulnerabilities in the project's dependencies based on the lockfile.
  * **Frequency:** Integrate vulnerability scanning into the CI/CD pipeline and perform regular manual checks.

* **Keeping Dependencies Up-to-Date:**
  * **Patch and Minor Versions:** Prioritize timely application of security patches (typically patch versions) and minor version updates. These usually contain bug fixes and security updates without introducing breaking changes.
  * **Major Versions:** Carefully evaluate major version updates. While they can offer new features and improvements, they may also include breaking changes. Plan and test these updates thoroughly in a development or staging environment before applying to production.
  * **Review Changelogs:** Always review changelogs and release notes before updating dependencies to understand the changes and potential impacts.

* **Source Vetting and Trust:**
  * **Reputable Sources:** Only use dependencies from well-known, reputable sources and authors.
  * **Popularity & Maintenance:** Favor packages that are actively maintained, have a significant number of users/downloads, and a good track record.
  * **Inspect Code (If Necessary):** For critical dependencies or less-known packages, consider inspecting the source code or looking for security audits.

* **Minimizing Dependencies:**
  * **Necessity:** Only include dependencies that are truly necessary for the project.
  * **Remove Unused Dependencies:** Regularly audit and remove any dependencies that are no longer used to reduce the attack surface and improve build times.
  * **Bundle Size Awareness:** Be mindful of how dependencies impact the final bundle size, especially for front-end applications. Tools like `bundle-analyzer` can help.

* **Lockfiles:**
  * **Commit Lockfiles:** Always commit the package lockfile (`bun.lockb` for Bun) to the repository. This ensures reproducible builds and that all developers and CI/CD environments use the exact same versions of dependencies.

### 4.5 Secure Development Practices

Incorporating security into the entire development lifecycle is essential for building robust and resilient applications.

* **Secure Code Reviews:**
  * **Security Focus:** Code reviews **must** include a focus on potential security vulnerabilities, not just functionality and style.
  * **Checklists:** Consider using a security checklist during reviews (e.g., OWASP Top 10 related checks relevant to the changes).
  * **Train Reviewers:** Ensure developers performing reviews are aware of common security pitfalls.

* **Security Testing:**
  * **Static Application Security Testing (SAST):** Tools like ESLint (with security-focused plugins), SonarQube (if available), or GitHub's CodeQL (if configured) can help identify potential vulnerabilities in the codebase statically.
  * **Dynamic Application Security Testing (DAST):** For more mature stages, consider DAST tools or manual penetration testing, especially for critical applications. Vercel Previews can be a good target for some DAST checks.
  * **Dependency Scanning:** As covered in Section 4.4, this is a crucial part of security testing.

* **Principle of Least Privilege (Code Execution):**
  * Ensure that application processes and serverless functions run with the minimum permissions necessary to perform their tasks.
  * This applies to file system access, database access, and access to external services.

* **Secure Error Handling:**
  * **Generic Error Messages:** Client-facing error messages should be generic and not reveal sensitive system information, stack traces, or internal paths.
  * **Detailed Logging:** Log detailed error information (including stack traces) securely on the server-side (as per Section 3.4) for debugging, but do not expose this to the user.
  * **Error Codes:** Use specific error codes that can be referenced for debugging without exposing details.

* **HTTP Security Headers:**
  * Implement important HTTP security headers to protect against common web vulnerabilities. Vercel manages some of these by default, but custom headers can be added via `next.config.js` or middleware.
    * **`Content-Security-Policy` (CSP):** Helps prevent XSS by specifying approved sources of content. This requires careful configuration based on application needs.
    * **`Strict-Transport-Security` (HSTS):** Enforces HTTPS. Vercel typically handles this.
    * **`X-Content-Type-Options: nosniff`:** Prevents browsers from MIME-sniffing a response away from the declared content type.
    * **`X-Frame-Options: DENY` or `SAMEORIGIN`:** Protects against clickjacking attacks.
    * **`Permissions-Policy` (formerly `Feature-Policy`):** Controls which browser features can be used by the page.
  * Refer to [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/) for guidance.

* **Regular Security Training & Awareness:**
  * Developers should stay informed about current security threats, vulnerabilities, and best practices.
  * Encourage participation in security training, workshops, and reading security blogs/news.

* **Incident Response Plan (Basic Considerations):**
  * While a full incident response plan is broader, developers should know how to report a suspected security incident and who to contact.
  * Understand procedures for quickly addressing vulnerabilities if discovered in production (e.g., hotfix process).

---
