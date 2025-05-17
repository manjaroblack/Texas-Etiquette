# Project Review Suggestions - Texas Etiquette Online Presence Revitalization

## Addressing Critical Issues:

### ISSUE-01 / DEPEND-03 / ASSUMP-03: Third-Party Booking System & Payment Gateway Selection
* **Suggestion:** Proceed with **Acuity Scheduling** for the booking system and **Stripe** as the payment gateway for the MVP.
* **Rationale:** Acuity offers robust scheduling features suitable for our service types, and Stripe provides a seamless, secure, and widely trusted payment integration with reasonable fees. Their APIs are well-documented, which should aid implementation.
* **Action:** Proceed with integration planning, UI finalization, security assessment, test environment setup, and financial model updates based on Acuity and Stripe. Review their terms/DPAs.

### DEPEND-02: Branding Guidelines
* **Suggestion:** Review the drafted branding guidelines and modify as needed.
* **Action:** I have uploaded the draft to the shared drive. Review and implement accordingly.

### DEPEND-01: Website Copy
* **Suggestion:** Review the core website copy and approve.
* **Action:** I have provided the draft document. Integrate this into the components and layouts. We will refine UI microcopy further during implementation as needed.

### Gap/Action Needed: Legal Documents (Privacy Policy & Terms of Service)
* **Suggestion:** Review the drafted Privacy Policy and Terms of Service documents and approve.
* **Action:** I drafted a comprehensive Privacy Policy and Terms of Service, incorporating our specific service details, cancellation policy, and refund policy. Prepare for implementing footer links and any necessary consent mechanisms (see LEGAL-03 below).

### Question/Gap: COPPA Applicability Clarification
* **Clarification:** While we offer services *for* children and teens, our website and booking process are targeted at *parents or guardians*. We will *not* knowingly collect Personal Identifiable Information (PII) *directly* from children under 13 through the website's booking or contact forms. The booking process should require confirmation that the user is over 18 or a parent/guardian booking on behalf of a minor.
* **Action:** Confirm this approach mitigates direct COPPA applicability for online collection. Ensure the booking flow incorporates appropriate age/guardian confirmation steps.

## Addressing Other Key Issues & Recommendations:

### IA-01 (Validation Decision):
* Given the need to establish an online presence quickly, we will proceed directly with the MVP build. We accept the assumption risk (PRD ASSUMP-01 / BRD-03) and will monitor user adoption and feedback closely post-launch to iterate rapidly.

### SRS-02 (Admin MFA/CMS):
* **Admin MFA:** **Yes**, implement Multi-Factor Authentication for all administrative access. Security is paramount.
* **CMS vs. Markdown:** For the MVP, we will use a **Markdown-based approach** managed via Git for core pages to keep complexity low. We will **not** implement a full Headless CMS for the MVP. This defers the need for complex RBAC for now.

### PRD-04 (Blog Scope):
* For MVP, we will build the underlying structure/layout for blog posts and potentially a simple listing page, but no blog content will be populated, and no advanced category/tagging features will be built. The focus is on core service delivery.

### UIUX-04 / CON-03 (Error Messages):
* **Action:** Review the drafted Defined Error Messages.

### TEST-03 (Defect Tracking Tool):
* **Suggestion:** Use **Jira** for defect tracking.
* **Action:** Set up the project board in Jira.

### TEST-04 (Mobile Compatibility Testing):
* **Suggestion:** Focus testing on the latest versions of **iOS (Safari)** and **Android (Chrome)** on representative phone and tablet emulators/devices.

### FIN-01 (ASP/Adoption Validation):
* **Confirmation:** Confirm the Average Service Price (ASP) for initial modeling.
* **Action:** Closely monitor the actual booking adoption rate and average transaction value post-launch and adjust financial projections accordingly.

### SUP-04 (AI Chatbot):
* **Decision:** The AI Chatbot is **out of scope for the MVP**. We will rely on the contact form and direct email/phone support initially.

### SUP-05 (L2 After-Hours Support):
* **Action:** Finalize a clear process and SLA for after-hours critical issue support.

### LEGAL-03 (Clickwrap Consent):
* **Suggestion:** Implement explicit "clickwrap" acceptance (unchecked checkboxes) for both the Terms of Service and Privacy Policy before a user can complete the booking/payment process.
* **Action:** Implement this requirement.

### LEGAL-05 (Trademark Search):
* **Action:** Conduct a trademark clearance search for "Texas Etiquette LLC".

### LEGAL-06 (DSR Process):
* **Action:** Review the process outlined in the drafted Privacy Policy.

### LEGAL-07 (Email Security):
* **Action:** Verify and confirm that the chosen email sending mechanism uses TLS encryption for transmitting contact form submissions.

### LEGAL-08 (Sales Tax):
* **Action:** Clarify sales tax applicability for our online services in Texas.

### LEGAL-09 (Marketing Claims):
* **Action:** Review all marketing copy to ensure claims like "expert" are substantiated by credentials and experience, and claims like "seamless" are validated through UAT.

### DEP-02 (CD Tool):
* **Suggestion:** Proceed with the native deployment mechanisms offered by our chosen hosting platform, triggered via GitOps.
