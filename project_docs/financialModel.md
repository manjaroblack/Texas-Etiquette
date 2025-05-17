# Financial Model and Project Budget - Texas Etiquette Online Presence Revitalization

## Executive Summary

This financial model outlines the projected costs, revenues, and profitability for the Texas Etiquette website revitalization project, focusing on a phased rollout starting with a Minimum Viable Product (MVP).

* **MVP Phase (Months 1-3 Development, Months 4-12 Operations):** Estimated MVP development and launch cost is **$16,815**. Initial operational months aim to validate the online booking model and establish local visibility. Modest revenue is expected, likely operating at a loss. Break-even is projected for **Year 2**.
* **Post-MVP Growth (Years 2-3):** Focus on implementing features like blog, testimonials, enhanced branding, and potential e-commerce. Costs include ongoing maintenance, feature development, and increased marketing. Significant revenue growth is projected.
* **Overall Projections (3 Years):** The model projects achieving approximately **$61,000** in cumulative net revenue by the end of Year 3. Key metrics like LTV:CAC are expected to improve significantly. The Net Present Value (NPV) over 3 years (12% discount rate) is estimated to be positive.

## Key Assumptions & Drivers (Phased)

### Cost Assumptions:

* **MVP Phase (Months 1-3 Dev):**
    * Development Personnel: 1 Senior Developer @ $100/hr for ~160 hours. Total: **$16,000**.
    * Domain Name: $15/year.
    * Initial Hosting (PaaS): ~$20/month ($60 for dev phase).
    * Booking System (Paid Plan): ~$20/month ($60 for dev phase).
    * Email Service: Free tier initially.
    * Local SEO Setup: Included in Development time/cost.
* **Post-MVP Phase (Months 4+):**
    * Ongoing Hosting: ~$20-30/month.
    * Ongoing Booking System: ~$20/month.
    * Payment Gateway (Stripe): Transactional fees only.
    * Ongoing Email Service: $10/month starting Year 2.
    * Post-MVP Feature Development: ~20 hours/year @ $100/hr = $2,000/year (Years 2 & 3).
    * Marketing/SEO Budget: $100/month (M4-12) -> $250/month (Yr 2) -> $400/month (Yr 3).
    * Contingency: 10% added to annual Post-MVP costs.

### Revenue Assumptions:

* **MVP Phase (Months 4-12):**
    * Revenue Model: Fee-for-service.
    * Average Service Price (ASP): **$250** per booking (needs validation).
    * MVP Adoption Rate (Bookings/Month): Month 4-6: 2; Month 7-9: 4; Month 10-12: 6.
    * Payment Gateway Fees: 2.9% + $0.30 per transaction.
* **Post-MVP Phase (Years 2-3):**
    * Growth Rate (Bookings): Year 2: Starts 8/month, grows ~10% monthly avg. Year 3: Starts ~20/month, grows ~8% monthly avg.
    * ASP: Remains $250.
    * Other Revenue Streams: E-commerce deferred beyond 3 years.

### Financial & KPI Assumptions:

* **MVP Phase (Months 4-12):**
    * CAC (Initial): Very high (MVP Dev Cost / Customers).
    * LTV (Initial): 1x ASP ($250).
* **Post-MVP Phase (Years 2-3):**
    * CAC (Ongoing): Decreases relative to LTV.
    * LTV (Mature): Increases to 1.5x ASP ($375) in Year 3.
    * Churn/Retention: Assume ~10% annual churn (Years 2/3).
    * Discount Rate (NPV): 12%.
    * Tax Rate: 0% (for model simplicity).

### Key Input Drivers:
* MVP: Developer Hours/Rate, Initial Booking Adoption Rate.
* Post-MVP: Booking Growth Rate, Marketing Spend Effectiveness (CAC), ASP, Client Retention (LTV).

## Cost Projections (Budget - Phased)

| Cost Category             | MVP Dev (M 1-3) | MVP Ops (M 4-12) | Year 2 Total | Year 3 Total |
| :------------------------ | :-------------- | :--------------- | :----------- | :----------- |
| **Development Costs** |                 |                  |              |              |
| Personnel (160hrs@$100)   | $16,000         | $0               | $2,000       | $2,000       |
| **Subtotal Development** | **$16,000** | **$0** | **$2,000** | **$2,000** |
| **Infrastructure & Svcs** |                 |                  |              |              |
| Domain Name               | $15             | $0               | $15          | $15          |
| Hosting (PaaS)            | $60             | $180             | $240         | $360         |
| Booking System            | $60             | $180             | $240         | $240         |
| Email Service             | $0              | $0               | $120         | $120         |
| **Subtotal Infrastructure**| **$135** | **$360** | **$615** | **$735** |
| **Operational Costs** |                 |                  |              |              |
| Marketing & SEO           | $0              | $900             | $3,000       | $4,800       |
| **Subtotal Operational** | **$0** | **$900** | **$3,000** | **$4,800** |
| Total Non-Gateway Costs   | $16,135         | $1,260           | $5,615       | $7,535       |
| Contingency (Post-MVP)    | $0              | $126             | $562         | $754         |
| **TOTAL PROJECTED COSTS** | **$16,135** | **$1,386** | **$6,177** | **$8,289** |
| *Total MVP Cost (Dev+Ops M1-12)* | **$17,521** |                  |              |              |

*(Excludes Gateway Fees, which are calculated under Revenue)*

## Revenue Projections (Phased)

| Revenue Metric             | MVP Ops (M 4-12) | Year 2 Total | Year 3 Total |
| :------------------------- | :--------------- | :----------- | :----------- |
| Bookings/Month (Avg Est.)  | ~4               | ~12.5        | ~28          |
| Total Bookings (Period)    | 36               | 150          | 336          |
| Avg. Service Price (ASP)   | $250             | $250         | $250         |
| **Gross Revenue** | **$9,000** | **$37,500** | **$84,000** |
| Payment Gateway Fees:      |                  |              |              |
| Variable Fee (2.9%)        | $261             | $1,088       | $2,436       |
| Fixed Fee ($0.30/booking)  | $11              | $45          | $101         |
| **Total Gateway Fees** | **$272** | **$1,133** | **$2,537** |
| **Net Revenue** | **$8,728** | **$36,367** | **$81,463** |
| Cumulative Net Revenue     | $8,728           | $45,095      | $126,558     |

## Funding Requirements

| Period             | Total Costs (Excl. Gateway) | Net Revenue | Cash Flow (Period) | Cumulative Cash Flow |
| :----------------- | :-------------------------- | :---------- | :----------------- | :------------------- |
| MVP Dev (M 1-3)    | $16,135                     | $0          | -$16,135           | -$16,135             |
| MVP Ops (M 4-12)   | $1,386                      | $8,728      | $7,342             | -$8,793              |
| Year 2 Total       | $6,177                      | $36,367     | $30,190            | $21,397              |
| Year 3 Total       | $8,289                      | $81,463     | $73,174            | $94,571              |

**Peak Funding Requirement:** Approx. **$16,135** to cover initial MVP development.

## Profitability Analysis (Phased)

| Profitability Metric     | MVP Ops (M 4-12) | Year 2 Total | Year 3 Total |
| :----------------------- | :--------------- | :----------- | :----------- |
| Net Revenue              | $8,728           | $36,367      | $81,463      |
| Total COGS (Est.)        | $452             | $1,373       | $2,777       |
| *(Incl. Gateway, Booking Sys)*|                  |              |              |
| **Gross Profit** | **$8,276** | **$34,994** | **$78,686** |
| Gross Margin %           | 94.8%            | 96.2%        | 96.6%        |
| Total OPEX               | $1,206           | $5,922       | $8,034       |
| *(Incl. Hosting, Email, Mktg, Post-MVP Dev, Contingency)*| | | |
| **Operating Income (EBITDA)**| **$7,070** | **$29,072** | **$70,652** |
| EBITDA Margin %          | 81.0%            | 79.9%        | 86.7%        |
| Net Income (Pre-Tax)     | $7,070           | $29,072      | $70,652      |

**Break-Even Analysis:** Projected to occur sometime during Year 2.

## Key Financial Metrics & KPIs (Phased)

| Metric                   | MVP Ops (M 4-12) | Year 2    | Year 3     |
| :----------------------- | :--------------- | :-------- | :--------- |
| Customer Acq. Cost (CAC) | $475.42          | $30.89    | $35.19     |
| Lifetime Value (LTV)     | $250             | $250      | $375       |
| LTV:CAC Ratio            | 0.53 : 1         | 8.09 : 1  | 10.65 : 1  |
| Payback Period (Months)  | N/A              | ~1.5 Mths | ~1.4 Mths  |
| ARPU (Avg per Booking)   | $242.44          | $242.45   | $242.45    |
| **Overall Return Metrics (End of Year 3)** |                  |           |            |
| Return on Investment (ROI) |                  |           | **~289%** |
| Net Present Value (NPV @12%)|                 |           | **~$65,800**|
| Internal Rate of Return (IRR)|               |           | **> 50%** |

*Note: ROI, NPV, IRR are highly sensitive to assumptions.*

## Sensitivity & Scenario Analysis / Risk Factors

### Sensitivity Analysis:

* **MVP Adoption Rate:** A 20% decrease significantly extends break-even.
* **Post-MVP Growth Rate:** Slower growth drastically impacts profitability.
* **Average Service Price (ASP):** Directly impacts revenue linearly.
* **MVP Development Cost:** Overruns increase funding needs and delay break-even.

### Scenario Analysis:

* **Base Case:** As projected. Break-even in Year 2. Positive NPV/IRR.
* **Worst Case:** Lower adoption, slower growth, lower ASP, higher dev/marketing costs. --> Likely negative NPV/IRR over 3 years.
* **Best Case:** Higher adoption, faster growth, higher ASP, lower dev/marketing costs. --> Break-even early Year 2. Significantly higher NPV/IRR.

### Qualitative Risk Factors:

* **MVP Validation Risk:** Low initial adoption of online booking.
* **Technical Risk:** Issues with third-party integrations.
* **Competitive Risk:** Established DFW competitors improving online presence.
* **Content Bottleneck:** Delays in creating high-quality content.
* **Scope Creep:** Adding non-essential features early.
* **Reputation Risk:** Negative online reviews.

## Conclusion

The financial model indicates the Texas Etiquette website revitalization project, with a well-defined MVP, has the potential for financial viability and positive returns within 3 years. Success depends heavily on achieving client acquisition and revenue growth targets post-MVP, particularly through effective local SEO and online booking model validation. The initial MVP development is a significant upfront investment. Careful cost management, ongoing KPI monitoring, and agile adjustments will be crucial.
