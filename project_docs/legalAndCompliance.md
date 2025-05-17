# Legal and Compliance - Texas Etiquette Online Presence Revitalization

## Introduction & Scope

### Purpose:
This report provides a legal and compliance analysis of the planned Minimum Viable Product (MVP) for the Texas Etiquette website revitalization project. It assesses potential legal risks and compliance gaps based on the provided documentation and applicable regulations.

### Project/Features Covered:
This review covers the MVP scope as defined in the PRD, including the Next.js website platform, core informational pages (Homepage, About, Services, Contact), online booking integration, online payment integration, foundational local SEO, and the "modernized formal" design.

## Applicable Regulations & Standards Analysis

### Identified Applicable Regulations/Standards:
Based on project scope, DFW market, data processed (PII, Payment Card Info), and features (online booking/payment), the following are likely applicable:

* **Payment Card Industry Data Security Standard (PCI DSS):** Acknowledged; reliance on a third-party gateway aims to minimize scope (targeting SAQ A or SAQ A-EP).
* **US Federal & State Privacy Laws:** Texas state law (consumer protection, data breach notification) applies. Prudent to adopt practices aligned with broader US privacy principles (notice, consent, access, security) due to potential access from other states.
* **Children's Online Privacy Protection Act (COPPA):** Potentially applicable if services directly target children under 13 *and* collect PII from them online. *Needs critical clarification.*
* **CAN-SPAM Act (US):** Applicable for future email marketing.
* **Web Content Accessibility Guidelines (WCAG):** MVP aims for "foundational" accessibility, full WCAG 2.1 AA compliance deferred.
* **FTC Act (Section 5 - Unfair or Deceptive Acts or Practices):** Requires truthfulness in advertising and data security representations.
* **Texas Business & Commerce Code:** General state laws for business practices.

### Project Awareness & Alignment:
Project acknowledges PCI DSS and WCAG. General privacy principles are mentioned. Specifics under COPPA, CAN-SPAM, state privacy laws (beyond general principles), and FTC guidelines need more explicit detailing as compliance requirements.

## Data Privacy Analysis

### Data Inventory & Mapping:
* **PII Collected:** Name, Email, Phone (Contact & Booking Forms). Payment details via third-party gateway.
* **Processing:** Contact form data emailed. Booking data via backend API to third-party booking/payment systems.
* **Storage:** Contact form data not stored by website. Booking/payment data in third-party systems. Secrets via hosting provider's management.
* **Sharing:** With TBD Booking, Payment, and potentially Email providers.
* *Clarity/Gaps: Specific third parties need identification (ISSUE-01).*

### Legal Basis Assessment:
Implied legal basis: user's **consent** (form submission) or **performance of a contract** (booking). Should be made explicit.

### Consent Mechanisms:
* Current: Implied consent.
* **Recommendation:** Add checkbox (unchecked by default) for ToS and Privacy Policy agreement before form submissions. If COPPA applies, verifiable parental consent is mandatory *before* PII collection from children <13.

### Privacy Notices/Policy Review:
* Dedicated Privacy Policy page required.
* **Required Action:** Draft comprehensive Privacy Policy detailing: PII collected, collection methods, purpose, legal basis, data sharing (identify third-party types), retention approach, user rights (access, correction, deletion process), security measures, cookie usage, COPPA disclosures (if applicable), contact info.

### Data Subject Rights (DSR):
* No specific features for DSR documented.
* **Recommendation (MVP):** Establish process via contact form/email for DSR requests. Explain in Privacy Policy.

### Data Minimization & Purpose Limitation:
Collection appears limited to necessary PII for MVP.

### Data Security Alignment:
Planned measures (HTTPS, PCI-compliant gateway, secrets management, input validation) seem appropriate. Secure email transmission for contact forms needs TLS confirmation.

### Data Retention/Deletion:
Contact form data not stored by website. Third-party providers govern booking/payment data retention.
* **Recommendation:** Understand third-party retention policies; reference in Privacy Policy.

### Third-Party Data Sharing & Transfers:
* Data shared with TBD Booking, Payment, Email providers.
* **Required Action:** Select reputable providers. Review terms, ensure DPAs if required.

### Children's Privacy (COPPA):
* Services for children/teens mentioned.
* **CRITICAL CLARIFICATION NEEDED:** Specific age range? Does website *knowingly* collect PII *directly* from children <13 online? If yes to both, COPPA compliance (verifiable parental consent, specific notices) is mandatory.

### Overall Privacy Risk Assessment:
* **High Risk:** Potential COPPA non-compliance.
* **Medium Risk:** Lack of explicit Privacy Policy/ToS, implied consent, undefined DSR process, unclear third-party DPA/retention.
* **Low Risk:** Data minimization appropriate; core security measures planned correctly.

## Terms of Service / EULA Analysis

### Necessity & Planned Content:
* ToS highly recommended for online booking/payment. No planned content documented.
* **Required Action:** Draft ToS covering: service description, user obligations, payment terms, booking confirmation, **cancellation/refund policy (CRITICAL)**, disclaimers, liability limits, IP rights, acceptable use, governing law (Texas), dispute resolution, Privacy Policy link.

### Acceptance Mechanism:
* Not described.
* **Recommendation:** Implement clickwrap acceptance (checkbox) for ToS and Privacy Policy before booking/payment.

## Intellectual Property (IP) Analysis

### Third-Party IP/OSS Licenses:
* Core stack (Next.js, React, Tailwind CSS) uses permissive MIT licenses.
* Licenses for TBD Booking/Payment SDKs need review.
* **Recommendation:** Maintain list of third-party libraries/licenses.

### Trademark/Branding:
* Business name "Texas Etiquette LLC" used.
* **Recommendation:** Conduct trademark clearance search (USPTO, state). Consider registration.

### Patent Risk/Opportunity:
Low risk for MVP functionality.

### Content Ownership:
* Website content should be owned by Texas Etiquette LLC. Clarify image sourcing/licensing.
* **Recommendation:** ToS state business ownership of content. Secure licenses for stock assets.

### Overall IP Risk Assessment:
* **Medium Risk:** Trademark infringement if no search. License compliance for TBD SDKs.
* **Low Risk:** OSS license compliance for core stack; patent issues.

## Marketing & Advertising Compliance Analysis

### Review of Claims:
* Terms like "expert," "modernized," "premier," "seamless" used. Substantiate expertise with credentials. Ensure claims of ease/convenience are demonstrable. Local focus claims must be accurate.
* **Recommendation:** Ensure factual claims are accurate. Avoid guarantees. Align with FTC truthfulness guidelines.

### Email Marketing:
* Post-MVP plans.
* **Recommendation:** For list building, ensure CAN-SPAM compliance (clear ID, opt-out, physical address). Obtain explicit consent for marketing emails.

### Endorsements/Testimonials:
* Planned post-MVP.
* **Recommendation:** Follow FTC Endorsement Guides. Disclose material connections. Ensure genuineness.

## Accessibility Compliance Analysis (e.g., WCAG)

### Stated Goals & Requirements:
MVP aims for "foundational," "basic best practices" of WCAG 2.1 AA; full compliance deferred. UI/UX Spec outlines implementation guidelines.

### Adequacy of Planned Testing:
No specific accessibility testing plan mentioned beyond guidelines.
* **Recommendation:** Incorporate automated accessibility checks (e.g., axe-core) in CI. Conduct basic manual keyboard/screen reader testing on key MVP flows. Plan for full audit post-MVP.

## Jurisdictional Considerations Analysis

### Primary Jurisdiction:
Texas, USA (DFW market focus).

### Texas-Specific Requirements:
* Comply with Texas Business & Commerce Code (online transactions, consumer protection, data breach).
* **Sales Tax:** Determine applicability for services (consult tax professional).
* **Business Registration:** Ensure "Texas Etiquette LLC" is properly registered.

### Other US Jurisdictions:
Website accessible nationwide. Compliance with stricter state laws (e.g., California's CCPA/CPRA) advisable.

## Overall Summary, Risk Assessment & Recommendations

### Consolidated Critical Risks:

* **High Risk:** Potential COPPA non-compliance.
* **High Risk:** Lack of formal ToS (incl. cancellation/refund) and Privacy Policy.
* **Medium Risk:** Unclear trademark status.
* **Medium Risk:** Ambiguity around third-party provider selection & compliance.
* **Medium Risk:** Deferral of full WCAG 2.1 AA compliance.
* **Medium Risk:** Lack of explicit consent mechanisms and DSR processes.

### Prioritized Recommendations & Required Actions:

#### Required Actions (Urgent - Before MVP Launch):

1.  **Clarify COPPA Applicability:** Determine target age for children's services and who provides PII online. Implement compliant consent if needed. (Owner)
2.  **Draft & Implement Privacy Policy:** Comprehensive policy, linked prominently. (Owner/Legal Counsel)
3.  **Draft & Implement Terms of Service:** Include payment, cancellation, liability. Define business policies. (Owner/Legal Counsel)
4.  **Implement Explicit Consent:** Mandatory "clickwrap" checkbox for ToS & Privacy Policy before booking/payment. (Developer/UI)
5.  **Finalize Third-Party Providers:** Select Booking and Payment Gateway providers. (Owner/Developer)
6.  **Review Third-Party Terms/DPAs:** Assess terms, privacy, obtain DPAs. (Owner/Legal Counsel)
7.  **Perform Trademark Search:** For "Texas Etiquette LLC". (Owner/Legal Counsel)
8.  **Confirm Secure Email Transmission:** Verify TLS for contact form submissions. (Developer/Owner)

#### Recommendations (Incorporate during/soon after MVP):

1.  **Establish DSR Process:** Define/document procedure. Update Privacy Policy. (Owner)
2.  **Review Third-Party SDK Licenses:** Once providers chosen. (Developer/Legal Counsel)
3.  **Substantiate Marketing Claims:** Verify "expert" and other claims. (Owner)
4.  **Basic Accessibility Testing:** Automated scans, manual keyboard/screen reader checks on MVP flows. (Developer/QA)
5.  **Texas Sales Tax Assessment:** Consult tax professional. (Owner)
6.  **Consider Trademark Registration:** If clearance successful. (Owner/Legal Counsel)
7.  **CAN-SPAM Planning:** For future email marketing. (Owner/Marketing)
8.  **Plan for WCAG AA Audit:** Schedule post-MVP. (Owner)
