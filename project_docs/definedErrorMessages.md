# User-Facing Error Messages: Booking & Payment Flow

**Objective:** Provide clear, helpful, and reassuring error messages consistent with the Texas Etiquette "modernized formal" brand voice when users encounter issues during booking or payment via Acuity Scheduling and Stripe.

**Coordination:** These messages are drafted by the Project Lead in coordination with Development (for technical accuracy) and UI Design (for presentation and tone).

## Payment Errors (via Stripe)

### 1. Payment Declined (General)

- **Technical Trigger:** Stripe returns a generic decline code (e.g., `generic_decline`, `do_not_honor`, `transaction_not_allowed`).
- **UI Display:** Displayed near the payment fields after submission attempt.
- **User Message:**
  - **Headline:** Payment Not Processed
  - **Body:** Unfortunately, your payment could not be processed by the card issuer. Please double-check your card details (number, expiration date, CVC) and billing address, or try a different payment method.
  - **Action:** `[Retry Payment Button]`, `[Try Different Card Button/Link]`

### 2. Insufficient Funds

- **Technical Trigger:** Stripe returns an `insufficient_funds` decline code.
- **UI Display:** Displayed near the payment fields.
- **User Message:**
  - **Headline:** Payment Not Processed
  - **Body:** The payment could not be completed due to insufficient funds. Please use a different payment method or ensure funds are available.
  - **Action:** `[Try Different Card Button/Link]`

### 3. Incorrect CVC/Security Code

- **Technical Trigger:** Stripe returns an `incorrect_cvc` decline code.
- **UI Display:** Highlight the CVC field, display message nearby.
- **User Message:**
  - **Headline:** Check Security Code
  - **Body:** The CVC security code entered appears incorrect. Please double-check the 3 or 4-digit code on the back (or front for Amex) of your card.
  - **Action:** `[Retry Payment Button]`

### 4. Expired Card

- **Technical Trigger:** Stripe returns an `expired_card` decline code.
- **UI Display:** Highlight the expiration date field, display message nearby.
- **User Message:**
  - **Headline:** Card Expired
  - **Body:** This card appears to be expired. Please check the expiration date or use a different payment method.
  - **Action:** `[Try Different Card Button/Link]`

### 5. Card Processing Error (Stripe/Network Issue)

- **Technical Trigger:** Stripe returns a processing error (e.g., `processing_error`, temporary network issue).
- **UI Display:** General message near payment section.
- **User Message:**
  - **Headline:** Processing Issue
  - **Body:** We encountered a temporary issue while processing your payment. Please wait a moment and try again, or contact us if the problem persists.
  - **Action:** `[Retry Payment Button]`, `[Contact Us Link]`

## Booking Errors (via Acuity Scheduling / Website Logic)

### 1. Selected Slot Unavailable (Conflict)

- **Technical Trigger:** User selects a time slot that becomes booked by someone else between page load and submission; Acuity API returns a conflict error.
- **UI Display:** Message shown near the time selection area after submission attempt.
- **User Message:**
  - **Headline:** Time Slot No Longer Available
  - **Body:** We apologize, but the selected time slot ([Date] at [Time]) was just booked. Please choose another available time from the calendar.
  - **Action:** `[Return to Calendar Button]`

### 2. Invalid Booking Parameters (Data Issue)

- **Technical Trigger:** Data sent to Acuity is malformed or missing required fields (should be rare with proper validation).
- **UI Display:** General error message.
- **User Message:**
  - **Headline:** Booking Information Error
  - **Body:** There was an issue with the booking information provided. Please review your selections and try again, or contact us for assistance.
  - **Action:** `[Review Booking Details Button]`, `[Contact Us Link]`

### 3. Acuity API Unreachable/Timeout

- **Technical Trigger:** Website backend cannot connect to the Acuity Scheduling API.
- **UI Display:** General error message.
- **User Message:**
  - **Headline:** Booking Service Unavailable
  - **Body:** We're currently unable to connect to the booking service. Please try again shortly. If the issue continues, please contact us directly to schedule.
  - **Action:** `[Retry Booking Button]`, `[Contact Us Link]`

## Next Steps:

- **Developer Review:** Confirm technical triggers and feasibility of distinguishing these error types based on API responses.
- **UI Designer Review:** Finalize wording for tone, integrate visually into the UI mockups/components (e.g., using toast notifications, inline messages).
- **Implementation:** Implement logic to catch specific errors and display the corresponding user-friendly messages.
