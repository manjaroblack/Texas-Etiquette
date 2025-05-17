# Prompt: Generate Security Requirements Specification

**Persona:** You are a Security Architect or DevSecOps Engineer responsible for defining the comprehensive security requirements and posture for a project.

**Input:** You will be provided with:

1. The approved **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`).
2. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements.md`).

**Task:** Generate a comprehensive **Security Requirements Specification** document in Markdown format, incorporating modern security principles and practices. This document details the specific security controls, policies, standards, threat considerations, and features required to protect the system and its data, based on the business context (BRD) and product features (PRD). This specification will guide secure design (UI/UX and technical), development, testing, and operations, informing the SPEC document.

* **Goal:** To define clear, actionable, testable, and context-specific security requirements integrated throughout the development lifecycle.
* **Scope:** Focus on *what* security controls and practices are needed. Avoid deep technical implementation details (reserved for the SPEC) unless a specific technology or standard is mandated by compliance or essential for clarity.
* **Traceability:** Reference relevant BRD or PRD sections/requirements where applicable.
* **Handling Ambiguity/Gaps:** If inputs lack sufficient detail, make reasonable assumptions based on security best practices (documenting them) or flag areas needing clarification or further risk assessment.

**Emphasis:** Focus on defining specific requirements across relevant security domains, driven by threat modeling, compliance needs, and secure design principles. Ensure requirements support a "security by design" approach.

## Required Security Requirements Specification Sections

### 0. Introduction & Overview

* **Purpose:** State the purpose of this Security Requirements Specification and the system/features it covers.
* **Security Goals & Objectives:** Briefly reiterate key security goals derived from the BRD (e.g., protect confidentiality, ensure integrity, maintain availability, achieve compliance - CIA Triad). Link to overall business objectives.
* **References:** Link to the source BRD and PRD documents.

### 1. Secure Design Principles

* Outline core security principles guiding the design (e.g., Least Privilege, Defense in Depth, Secure Defaults, Fail Securely, Zero Trust concepts where applicable).
* State the commitment to addressing security throughout the lifecycle.

### 2. Threat Modeling (High-Level)

* **Threat Actors:** Identify potential threat actors (external, internal, partners, etc.) based on application context and user profiles (from BRD/PRD).
* **Key Assets:** Identify critical assets to protect (sensitive data types, core functionality, infrastructure) based on BRD/PRD.
* **Attack Vectors/Threat Scenarios:** Outline potential high-level attack vectors or threat scenarios relevant to the application type and features. Use **STRIDE** (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) or a similar framework conceptually to guide identification. (e.g., "Risk of unauthorized data access via API," "Risk of XSS through user-generated content").

### 3. Compliance & Regulatory Requirements

* List specific regulations (e.g., GDPR, HIPAA, PCI-DSS, SOX, CCPA) identified in the BRD.
* Detail the specific security controls or requirements derived directly from these regulations. Map controls to requirements where possible.

### 4. Data Security Requirements

* **Data Classification:** Define sensitivity levels (e.g., Public, Internal, Confidential, Restricted) for key data types handled by the system (identified from PRD/BRD).
* **Encryption:**
  * Specify requirements for encryption of sensitive data **at rest** (e.g., algorithm standards like AES-256).
  * Specify requirements for encryption of data **in transit** (e.g., TLS 1.2+ enforced for all communication).
  * Define high-level key management requirements (e.g., use of managed KMS).
* **Data Masking/Anonymization:** Define requirements for protecting sensitive data in non-production environments, logs, or specific views.
* **Data Handling & Disposal:** Specify requirements for secure handling (data minimization) and deletion/retention based on classification and compliance.
* **Data Loss Prevention (DLP):** High-level requirements if applicable.

### 5. Authentication Requirements

* Specify required authentication factors and strengths (e.g., MFA required for specific roles/actions). Reference standards like NIST SP 800-63B if applicable.
* Define password policies (complexity, history, expiration).
* Detail secure session management requirements (timeouts, cookie flags, rotation).
* Specify requirements for handling failed login attempts (lockout mechanisms).
* Define requirements for SSO integration and identity provider interactions if applicable.

### 6. Authorization & Access Control Requirements

* Specify the required access control model (e.g., RBAC, ABAC) and mandate the principle of least privilege.
* Define requirements for permission granularity and enforcement points (API, data layer).
* Specify requirements for secure management of roles/permissions, including administrative access controls and auditing.
* Define requirements for user lifecycle management integration (provisioning/de-provisioning).

### 7. Application Security Requirements

* **Input Validation:** Require robust validation of all inputs (user, API, system) to prevent injection flaws. Reference OWASP ASVS V4.0 section V5.
* **Output Encoding:** Require context-aware output encoding to prevent XSS. Reference OWASP ASVS V4.0 section V5.
* **API Security:** Define specific security requirements for all APIs (authentication, authorization, input validation, output encoding, rate limiting, secure headers). Reference OWASP API Security Top 10.
* **Error Handling:** Require secure error handling that avoids revealing sensitive information.
* **Security Headers:** Require implementation of appropriate HTTP security headers (e.g., CSP, HSTS, X-Frame-Options).

### 8. Secure Development & Dependency Management

* **Secure Coding Practices:** Mandate adherence to recognized secure coding guidelines (e.g., OWASP Secure Coding Practices).
* **Secrets Management:** Require secure storage, handling, and rotation of all secrets (API keys, credentials, certificates). Prohibit hardcoding secrets.
* **Dependency Management (SCA):** Require processes and tools (Software Composition Analysis - SCA) for identifying, managing, and updating third-party components with known vulnerabilities (CVEs). Define remediation timelines based on severity.
* **CI/CD Integration (DevSecOps):** Require integration of security testing tools (e.g., SAST, dependency scanning) into the CI/CD pipeline.

### 9. Infrastructure & Operational Security Requirements (High-Level)

* **Secure Configuration:** Require hardening of operating systems, servers, databases, and cloud resources based on recognized standards (e.g., CIS Benchmarks).
* **Logging & Monitoring:** Define requirements for comprehensive security event logging, centralized storage, protection, retention, and integration with security monitoring/alerting systems (SIEM).
* **Vulnerability Management:** Require regular vulnerability scanning (infrastructure and application) and define patching strategy/timelines.
* **Network Security:** Specify high-level requirements for network segmentation, firewalls, WAF, and DDoS protection (details often finalized in SPEC).

### 10. UI Security Requirements (Conceptual)

* Define security requirements related to the user interface based on PRD features/interactions:
  * Secure handling of forms and user input (client-side validation as first defense).
  * Prevention of sensitive data exposure in the UI or client-side code.
  * Secure implementation of authentication/authorization UI elements (login, MFA prompts, password reset).
  * Requirements for security-related user feedback (e.g., password strength).

### 11. Security Testing Requirements

* Define the scope, methodology, and types of security testing required (e.g., SAST, DAST, IAST, SCA, Penetration Testing).
* Specify requirements for test coverage and remediation of findings based on risk/severity.

### 12. Incident Response Enablement Requirements

* Define requirements to facilitate incident detection and response (e.g., specific logs, contact points, ability to isolate components or disable accounts).

### 13. Security Assumptions & Dependencies

* List any assumptions made about the security of the operating environment, external services, or user behavior.
* List dependencies on external security services, infrastructure, or libraries.

## Output Format

* Use Markdown for clear structure and readability.
* Employ headings, subheadings, bullet points, and numbered lists (for requirements) effectively.
* Use tables for summarizing information where appropriate (e.g., data classification, threat actors/assets).

**Output File:** Save the generated document as `project_docs/securityRequirements.md`.
