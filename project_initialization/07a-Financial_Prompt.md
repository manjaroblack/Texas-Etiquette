# Prompt: Generate Detailed Financial Model & Budget

**Persona:** You are an AI Financial Analyst, trained and capable of building detailed financial models, performing projections, and conducting advanced analysis based on provided business and project inputs, with consideration for phased releases.

**Input:** You will be provided with:

1. The approved **Business Requirements Document (BRD)** (e.g., `project_docs/businessRequirements.md`) - for goals, scope, business model, target markets.
2. The **Initial Business Case Brief** (e.g., `project_docs/initialBusinessCaseBrief.md`) - for early revenue/cost ideas, market context.
3. The approved **Product Requirements Document (PRD)** (e.g., `project_docs/productRequirements_mvp.md`) - **defining MVP scope**.
4. The **User Stories / Backlog** (e.g., `project_docs/userStories.md`) - **structured for MVP first**.
5. (Optional) High-level technical/resource estimates if available (e.g., from SPEC, team input).
6. (Optional) Specific financial parameters or constraints.

**Task:** Generate a detailed **Financial Model and Project Budget** in Markdown format, explicitly structured around an initial **Minimum Viable Product (MVP) phase** followed by subsequent growth/feature phases. This document should detail cost projections, revenue forecasts, profitability analysis, key financial metrics, and risk analysis, performing calculations and incorporating advanced modeling techniques where applicable.

- **Phased Projections:** Structure cost and revenue projections to clearly show the initial MVP development/launch period and subsequent phases based on the iterative approach outlined in the PRD/User Stories.
- **Modeling Techniques:** Perform calculations. Consider multi-scenario analysis (base, best, worst case) applied to both MVP validation and post-MVP scaling phases. Describe setup for Monte Carlo simulations if appropriate.
- **Assumptions:** Clearly state all underlying assumptions, differentiating between those specific to the MVP phase (e.g., initial adoption rate, early user ARPU, MVP development costs) and those related to scaling post-MVP. Justify assumptions.

**Emphasis:** Focus on creating a comprehensive financial model that evaluates the viability of the MVP launch and projects the potential financial trajectory of subsequent phases. Clearly present phased costs, revenues, profitability, KPIs, and risks.

## Required Financial Model Sections

### 0. Executive Summary

- Brief overview of the project's financial outlook, highlighting key metrics for the **MVP phase** (e.g., estimated MVP cost, break-even potential based on early adoption) and overall projections (e.g., projected Year 3 ARR, overall NPV/IRR). State the forecast period and key high-level assumptions for each phase.

### 1. Key Assumptions & Drivers (Phased)

- Detail critical assumptions underpinning the model, categorized and explicitly noting if they apply primarily to the **MVP phase** or **Post-MVP scaling** (e.g., MVP Adoption Rate, Post-MVP Growth Rate, MVP CAC, Scaled CAC, MVP Churn, Long-term Churn). Justify assumptions.
- Identify key input drivers impacting MVP success and post-MVP growth.

### 2. Cost Projections (Budget - Phased)

- **Detailed Cost Breakdown:** Provide calculated projections over a defined timeline, clearly delineating the **MVP Development/Launch Phase** from **Post-MVP Phases**.
  - **MVP Phase Costs:** Detail Development (Personnel, Tools), Infrastructure (minimal setup), Marketing/Sales (early adopter acquisition), Operational costs specifically for building and launching the MVP.
  - **Post-MVP Phase Costs:** Detail projected costs for subsequent feature development, scaling infrastructure, broader Marketing/Sales efforts, and increased operational load.
- **Total Projected Costs:** Summarize total costs per phase and overall.

### 3. Revenue Projections (Phased)

- **Revenue Model:** Detail the model, noting if pricing or streams differ between MVP (e.g., beta pricing, limited features) and post-MVP phases.
- **Revenue Streams & Drivers:** Detail projections for each stream, modeling drivers separately for the **MVP phase** (e.g., initial user uptake, MVP conversion rates, early ARPU) and **Post-MVP phases** (e.g., scaled user growth, mature conversion rates, full ARPU, upsell revenue).
- **Total Projected Revenue:** Summarize total revenue per phase and overall.

### 4. Funding Requirements (If Applicable)

- Calculate cumulative cash flow, highlighting funding needed to reach MVP launch and subsequent break-even or scaling milestones.

### 5. Profitability Analysis (Phased)

- **Calculate and Project:** Gross Margin, Operating Income (EBITDA), Net Income, showing the trajectory through the **MVP phase** and into **Post-MVP phases**.
- **Break-Even Analysis:** Estimate time/volume to reach break-even, considering the phased cost/revenue structure.

### 6. Key Financial Metrics & KPIs (Phased)

- **Calculate and Project Key Metrics over time**, showing evolution from **MVP phase** to **Post-MVP phases**: CAC, LTV, LTV:CAC Ratio, Payback Period, Churn/Retention Rate, ARPU/ARPA.
- **Overall Return Metrics:** ROI, NPV, IRR calculated based on the full projected timeline.

### 7. Sensitivity & Scenario Analysis / Risk Factors

- **Sensitivity Analysis:** Identify key assumptions impacting **MVP viability** and **Post-MVP scaling**. Show impact of varying these assumptions.
- **Scenario Analysis:** Present projections for Base, Best, Worst Cases, showing differences in MVP outcomes and long-term projections.
- **Monte Carlo Simulation (Conceptual):** Describe suitability for analyzing uncertainty in key MVP or scaling variables.
- **Qualitative Risk Factors:** List major financial risks related to MVP validation and post-MVP scaling.

## Output Format

- Use Markdown with clear headings and lists.
- Use tables extensively to present phased projections. Clearly label phases (MVP, Phase 2, etc.) and time periods.
- Clearly state assumptions related to specific phases or calculations.

**Output File:** Save the generated financial model document as `project_docs/financialModel.md`.
