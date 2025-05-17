# Prompt: Generate Comprehensive Idea Assessment Report

**Persona:** You are a Product Strategist or Business Analyst responsible for evaluating the potential of new project ideas based on preliminary research and analysis using multiple frameworks.

**Input:** You will be provided with:

1. The **Initial Business Case Brief** (e.g., `project_docs/initialBusinessCaseBrief.md`) - Contains the elaborated idea, market context, competitive analysis, potential audience/business model elements, and key questions/assumptions.

**Task:** Generate a structured **Idea Assessment Report** in Markdown format. This report should critically evaluate the project idea presented in the Initial Business Case Brief using established frameworks and best practices, including Desirability, Feasibility, Viability (DFV), SWOT analysis, Lean Canvas element review, market opportunity, competitive advantage, and problem/solution fit.

- **Frameworks:** Utilize **Desirability, Feasibility, Viability (DFV)** as the core structure. Incorporate assessments of **Market Opportunity**, **Competitive Advantage**, **Problem/Solution Fit**, **Lean Canvas Elements** (as presented in the brief), and a **SWOT analysis**. Optionally include a qualitative **RICE** score.
- **Evidence-Based:** Base your assessment explicitly on the findings, analyses, and assumptions documented within the Initial Business Case Brief.
- **Identify Gaps:** Clearly highlight areas where the brief lacks sufficient information to make a strong assessment and reference the "Key Questions & Assumptions for Validation" section of the brief.
- **Preliminary Nature:** Emphasize that this assessment is based on preliminary data (even if informed by prior web search during brief creation) and that conclusions require further validation.

**Emphasis:** Provide a balanced, multi-faceted, and structured evaluation of the idea's strengths, weaknesses, opportunities, and threats as presented in the brief. The goal is to inform a decision on whether to proceed with further investment (e.g., creating a detailed BRD), pivot the idea, or halt further exploration.

## Required Output Sections (Idea Assessment Report)

### 0. Executive Summary

- Briefly summarize the idea being assessed.
- Provide a high-level overview of the assessment findings across key frameworks (DFV, Market Opp, SWOT highlights).
- State the overall recommendation (e.g., Proceed, Pivot, Halt, Further Research Needed) with key justifications.

### 1. Idea Overview & Core Problem Recap

- Concisely restate the core idea and the problem it aims to solve, as described in the Initial Business Case Brief.

### 2. Desirability Assessment

- **User Need/Want:** Evaluate the evidence presented in the brief (target audience profile, pain points) supporting the claim that users desire this solution. Assess the significance of the problem for the target audience.
- **Problem/Solution Fit (Initial Hypothesis):** Assess how well the proposed solution (value proposition angles in the brief) appears to address the identified user needs/pains based _only_ on the brief's description.
- **Gaps & Validation Needed:** Identify key assumptions about user desire or problem/solution fit that require validation.

### 3. Feasibility Assessment (Preliminary)

- **Technical Feasibility:** Based on the idea description and potential resources mentioned in the brief, provide a preliminary assessment of technical challenges or complexities.
- **Resource Feasibility:** Assess if the required activities/resources mentioned in the brief seem plausible or present significant hurdles.
- **Gaps & Validation Needed:** Identify key technical or resource assumptions requiring further investigation.

### 4. Viability Assessment (Preliminary)

- **Market Opportunity:** Analyze the market size/trends information from the brief (TAM/SAM/SOM potential). Does the market seem large enough and accessible?
- **Business Model Potential (Lean Canvas Element Review):** Evaluate the coherence and potential risks associated with the `Problem`, `Solution`, `UVP`, `Customer Segments`, `Channels`, `Revenue Streams`, and `Cost Structure` elements brainstormed in the brief.
- **Competitive Landscape & Advantage:** Assess the strength and sustainability of the competitive advantage based on the proposed differentiators/USPs and competitor analysis in the brief.
- **Gaps & Validation Needed:** Identify key assumptions about market adoption, pricing, costs, revenue model, or competitive response requiring validation.

### 5. SWOT Analysis (Based on Brief)

- **Strengths:** Internal positive factors suggested by the brief (e.g., unique value prop idea, potential resource access mentioned).
- **Weaknesses:** Internal negative factors suggested (e.g., potential technical complexity, resource gaps identified in feasibility).
- **Opportunities:** External positive factors suggested by the brief (e.g., market trends, competitor weaknesses identified).
- **Threats:** External negative factors suggested (e.g., strong competitors, potential market shifts, significant validation needed).

### 6. RICE Score / Evaluation Score (Qualitative)

- Provide an _indicative_ RICE score or qualitative assessment:
  - **Reach:** Estimate potential reach based on target segments in brief (High/Med/Low).
  - **Impact:** Estimate potential impact on users/business based on value prop in brief (High/Med/Low).
  - **Confidence:** Assess confidence level _based on the evidence presented in the brief_ (High/Med/Low - likely Low/Med at this stage).
  - **Effort:** Estimate relative effort based on feasibility assessment (High/Med/Low).
- **Note:** Emphasize that this score is highly speculative at this stage, especially Confidence and Effort.

### 7. Key Risks & Assumptions Summary

- Consolidate the most critical risks (from DFV, Viability, SWOT) and assumptions identified during the assessment and highlighted in the brief.
- Emphasize which assumptions require immediate validation before proceeding.

### 8. Overall Assessment & Recommendation

- **Synthesis:** Provide a balanced summary weighing the findings from DFV, Market Opportunity, Competitive Advantage, P/S Fit, Lean Canvas elements, SWOT, and RICE/Score.
- **Recommendation:** Make a clear recommendation with justification:
  - **Proceed:** Sufficient positive indicators across frameworks, manageable risks; proceed to detailed BRD.
  - **Pivot:** Core need/opportunity exists, but solution/model needs significant changes based on assessment; recommend specific areas for pivoting before BRD.
  - **Further Research:** Significant gaps or critical unvalidated assumptions require specific research _before_ committing to a BRD. Outline recommended research areas.
  - **Halt:** Fundamental flaws identified across multiple frameworks; recommend halting further exploration.

## Output Format

- Use Markdown for clear structure.
- Employ headings, subheadings, and bullet points effectively.
- Clearly reference specific sections or findings from the input Initial Business Case Brief.

**Output File:** Save the generated document as `project_docs/ideaAssessment.md`.
