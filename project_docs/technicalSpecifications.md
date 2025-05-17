# Technical Specification (SPEC): Texas Etiquette Online Presence Revitalization (MVP)

## Introduction & Overview

### Purpose:
This document provides the detailed technical specifications for the design, development, and implementation of the Minimum Viable Product (MVP) for the new Texas Etiquette website. It translates requirements from the PRD, Security Requirements Specification, UI/UX Design Specification, and User Stories into a concrete technical blueprint for the engineering team.

### Goals & Objectives (Technical):
* Implement a performant, secure, and maintainable website platform using Next.js.
* Achieve 'Good' scores for Google Core Web Vitals (LCP, FID/INP, CLS).
* Successfully integrate third-party systems for online booking and payment securely and reliably.
* Implement all specified MVP security controls (HTTPS, secure data handling, secure integrations, input validation/output encoding).
* Ensure technical implementation supports MVP user stories for service discovery, evaluation, booking, and payment.
* Establish foundational technical SEO elements (Schema markup, optimized page structure).
* Deliver a fully responsive UI (desktop, tablet, mobile).
* Meet defined Service Level Objectives (SLOs) for availability, latency, and error rates.

### Scope (Technical):

* **In Scope (MVP):**
    * Next.js application setup, structure, configuration.
    * Core static pages (Homepage, About, Contact, Service Category Overview) and dynamic service detail pages.
    * "Modernized Formal" base layout and responsive design.
    * Integration with TBD third-party booking system (API/SDK/Widget).
    * Integration with TBD third-party payment gateway (secure elements/hosted fields).
    * Next.js API routes for contact form and booking/payment orchestration.
    * Foundational security measures (HTTPS, basic headers, input validation, secure secrets).
    * Basic technical SEO (on-page tags, Schema.org).
    * Hosting environment setup (PaaS recommended) and basic CI/CD pipeline.
    * Foundational accessibility guidelines implementation.
* **Out of Scope (Technical - MVP):**
    * Full CMS backend for blog (engine structure may be built, population deferred).
    * Dedicated Testimonials management.
    * Advanced Accessibility (Full WCAG 2.1 AA Compliance).
    * E-commerce backend.
    * CRM integration backend.
    * Complex administrative dashboard.
    * Advanced SEO features.
    * Detailed server-side analytics beyond basic platform metrics.

## System Architecture

### Architectural Overview:
* **Style:** Layered Monolith utilizing Next.js capabilities (SSR/SSG, API Routes). Jamstack principles applied where appropriate.
* **Justification:** Meets requirements for a fast, SEO-friendly website. Next.js provides a robust structure for MVP needs and future scaling.

### Key Components & C4 Model Description (Conceptual):
* **(C1) System Context:**
    * **Actors:** Potential Client, Business Owner (future admin).
    * **Systems:** Texas Etiquette Website (Next.js App), Booking System (External, TBD), Payment Gateway (External, TBD), Search Engines, Email Service.
* **(C2) Containers:**
    * Web Browser (Client)
    * Web Application (Next.js App on PaaS)
    * Booking System API (External)
    * Payment Gateway API (External)
* **(C3) Components (within Next.js Web Application):**
    * Page Components (React)
    * UI Components (Reusable React components)
    * API Routes (Serverless functions for contact, booking/payment orchestration)
    * Service Integration Modules (Wrappers for external Booking/Payment APIs)

### Component Interactions & Data Flow (Examples):
* **Contact Form:** Browser -> Next.js /api/contact -> Email Service API.
* **Booking/Payment:** Browser (Widget/Elements) -> Next.js /api/confirm-booking -> Payment Gateway API -> Booking System API -> Browser.

### Technology Stack:
* **Frontend Framework:** Next.js (v14+)
* **UI Library:** React (v18+)
* **Language:** TypeScript (Recommended)
* **Styling:** Tailwind CSS (Recommended) or CSS Modules.
* **Backend Runtime:** Bun (via Next.js API Routes)
* **Hosting Platform:** PaaS - Vercel (Strongly Recommended), Netlify, AWS Amplify.
* **Booking System:** TBD (Needs API/SDK/Embeddable Widget).
* **Payment Gateway:** TBD (Needs Secure Client-Side Elements + Server-Side API, PCI DSS Compliant).
* **Transactional Email:** TBD (e.g., SendGrid, Mailgun).
* **Version Control:** Git.

### Scalability & Resilience Strategy:
* **Scalability:** PaaS auto-scaling, stateless API routes, CDN.
* **Resilience:** PaaS infrastructure, health checks, error handling in API routes, frontend error boundaries.

## Data Requirements & Design

### Data Model:
* **Core Application State:** Managed in React component state or simple client-side stores.
* **Contact Form Submission Data (Transient):** name, email, phone, message, timestamp. (Not stored persistently on server for MVP).
* **Booking Data:** Resides within the Third-Party Booking System.
* **Payment Data:** Resides within the Third-Party Payment Gateway. (Website NEVER stores raw credit card details).
* **(Potential) CMS Data (Blog):** Markdown files if file-based.

### Data Storage:
* **Primary Storage:** External (Booking System, Payment Gateway). No primary database for MVP app logic.
* **Contact Form Submissions:** Emailed directly, not stored persistently by the application for MVP.

### Data Validation:
* **Client-Side:** Basic validation for UX (required fields, email format).
* **Server-Side (Mandatory):** Strict validation for all inputs to API routes (contact, booking) for presence, type, length, format. Sanitize inputs.

### Data Privacy & Security Implementation:
* **Encryption in Transit:** TLS 1.2+ (HTTPS) for all traffic.
* **Encryption at Rest:** N/A for core MVP data. Secrets managed via secure environment variables.
* **Data Minimization:** Collect only necessary PII.
* **PII Handling:** Avoid logging PII. Securely transmit contact form data.
* **Payment Data:** Handled exclusively by PCI DSS compliant payment gateway using secure elements.
* **Privacy Policy:** Dedicated page required.

## Interface Requirements (API & System)

### Internal APIs (Synchronous - Next.js API Routes):
* **Contact Form Submission (`POST /api/contact`):**
    * Public. Validates & sanitizes input. Sends email. Rate limiting.
    * Responses: 200 OK, 400 Bad Request, 429 Too Many Requests, 500 Internal Server Error.
* **Booking & Payment Orchestration (`POST /api/confirm-booking` - Example):**
    * Public. Validates input. Interacts server-side with Payment Gateway & Booking System.
    * Responses: 200 OK (Success), 400 Bad Request (Invalid input/payment declined), 500 Internal Server Error.

### External APIs (Consumed - TBD Providers):
* **Booking System API:** (API Key Auth, HTTPS REST/GraphQL). Functions for availability, create/confirm booking. Potential webhook for changes.
* **Payment Gateway API:** (API Key Auth, HTTPS REST). Client-Side SDK for secure elements. Server-Side SDK for payment confirmation. Webhook for status updates.
* **Transactional Email Service API:** (API Key Auth, HTTPS REST). Function to send email.

### System Interfaces (Non-API):
* **Booking Widget:** JS SDK or `<iframe>` embed.
* **Payment Fields:** Secure JS library (e.g., Stripe Elements) rendering `<iframe>`s.

## Frontend / UI Implementation Details (High-Level)

### UI Architecture:
* **Framework:** Next.js (React) - App Router preferred.
* **Structure:** Component-based.
* **Styling:** Tailwind CSS (preferred) or CSS Modules. Theme settings for "Modernized Formal" aesthetic.
* **State Management:** React state (useState, useReducer), Context API. Consider Zustand/Jotai if needed.

### Key Component Implementation Notes:
* **Booking Widget Wrapper:** Loads 3rd-party SDK/widget, passes config, handles events. Loading/error states.
* **Payment Element Wrapper:** Integrates gateway's secure elements. Handles secure input and tokenization. Loading/error states.
* **Responsive Layout Components:** CSS Grid/Flexbox for 12-column grid.
* **Navigation (Header/Footer):** Responsive header with mobile hamburger menu. Accessible.

### Accessibility Implementation:
* Semantic HTML, keyboard navigability, visible focus indicators, Alt text, ARIA for custom widgets (foundational for MVP).

## Security Implementation Details

### Authentication Implementation:
* **Client:** None for MVP.
* **Administrative:** N/A for MVP (deferred CMS admin). Post-MVP: Strong password policies, MFA.
* **API Keys (External Services):** Securely stored via hosting provider's secrets management. Not in Git.

### Authorization Implementation:
* Minimal for MVP. Public API routes with input validation. Post-MVP: RBAC for admin functions.

### Compliance Control Implementation (PCI DSS):
* Use gateway's secure client-side elements. Sensitive card data never transits/stored on application servers. Target SAQ A / SAQ A-EP.

### Secrets Management Implementation:
* Hosting platform's environment variables/secrets management. Inject securely. `dotenv` locally (`.env` in `.gitignore`). CI/CD secrets scanning.

## Functional Requirements (Technical Elaboration based on Stories - Examples)

* **MVP-STORY-09 (Contact Form Backend - `api/contact`):**
    * Validate & sanitize input. Rate limit. Send email. Log errors server-side.
* **MVP-STORY-12 & 13 (Booking Widget Integration - Client-Side):**
    * Load Booking Provider SDK. Fetch availability. Render widget/UI. Handle slot selection & info input.
* **MVP-STORY-15 & 16 (Payment Integration & Confirmation - Client & Server):**
    * **Client:** Load Payment Gateway SDK. Mount secure CardElement. Create PaymentMethod/confirm PaymentIntent (client-side). Send token/ID to backend.
    * **Server (`api/confirm-booking`):** Validate input. Interact with Payment Gateway (server-side confirm). If payment success, interact with Booking System API. Return success/failure. Trigger confirmation email.
* **MVP-STORY-17 (Automated Confirmation Email):**
    * Triggered from successful `api/confirm-booking`. Use Transactional Email Service API.

## Non-Functional Requirements (Technical Implementation & SLOs)

### Service Level Objectives (SLOs):
* **Availability (Website Homepage):** 99.9% (HTTP GET success rate).
* **Availability (Core Booking API `/api/confirm-booking`):** 99.5% (HTTP 200 success rate).
* **Latency (Homepage LCP):** 90th percentile $\le$ 2.5 seconds.
* **Latency (Booking API Server Time `/api/confirm-booking`):** 95th percentile $\le$ 800ms.
* **Correctness (Payment Processing):** 99.8% (processed without unexpected server errors).

### Performance:
* Next.js SSG/SSR. `next/image` optimization. Code splitting. Minimize JS bundle. CDN. Efficient 3rd-party script loading.

### Scalability:
* Serverless functions (API routes) on PaaS. Stateless API routes.

### Reliability:
* Server-side & frontend error logging/tracking (e.g., Sentry). Graceful handling of 3rd-party API errors. Health checks. Automated backups.

### Security:
* HTTPS & HSTS. Input validation. Output encoding. Secure secrets. SCA & SAST in CI/CD. HTTP Security Headers. WAF.

### Maintainability:
* Consistent code style (ESLint, Prettier). TypeScript. Modular components. Environment variables. Logging. CI/CD. Comments.

### Compatibility:
* Latest two major versions of Chrome, Firefox, Safari, Edge. Responsive design breakpoints as per UI Spec.

## Dependencies (Technical Details)

* **External Services:** Booking System (TBD), Payment Gateway (TBD), Hosting (Vercel recommended), Domain Registrar, Transactional Email Service.
* **Software Libraries/SDKs:** Next.js, React, TypeScript, Tailwind CSS, Payment Gateway SDKs (JS & Bun), Email Service SDK.
* **Data/Content:** Finalized Website Copy, Branding Assets, Service Details.

## Assumptions (Technical)

* Suitable/reliable third-party Booking & Payment systems will be selected.
* Chosen PaaS hosting provider meets MVP requirements.
* Next.js features are sufficient for MVP.
* Basic server-side rate limiting is adequate for MVP.
* Team has necessary skills.
* Emailing contact form data is acceptable for MVP (no persistent storage).

## Constraints (Technical)

* **Framework:** Must use Next.js.
* **MVP Scope:** Adhere to PRD MVP scope and prioritized User Stories.
* **Third-Party Dependency:** Core functionality relies on external providers.
* **Statelessness:** API routes should be stateless.
* **Security:** No sensitive payment card data processed/stored by application servers.

## Future Considerations (Technical Roadmap)

* Blog/CMS Enhancement (Headless CMS).
* Testimonials Feature (Backend/CMS).
* E-commerce (Product models, cart, order management).
* CRM Integration.
* Advanced Monitoring/Analytics (APM).
* Authentication/User Accounts (NextAuth.js).
* Accessibility Remediation (Full WCAG 2.1 AA).
* Technical Debt Refactoring.
