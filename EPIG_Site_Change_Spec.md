**EPIG WEBSITE**

**CHANGE SPECIFICATION**

*epig.ekantikcapital.com · Developer Brief · Section-by-Section*

Site Role: Architecture deep-dive & due diligence for analytical founding member prospects

Primary Proof: dashboard.ekantikcapital.com (ECFS live data)

Sales Page: freedom.ekantikcapital.com (founding membership)

Target Audience: Founding members, \$500K+ liquid net worth

Date: March 11, 2026 \| Status: Ready for Implementation

**GLOBAL**

**Global Changes (Apply Everywhere)**

These changes apply across every page of epig.ekantikcapital.com. Implement these first before any section-specific work.

**SPEC-01: Navigation Overhaul**

+--------------------------------------------------------+---------------------------------------------------------+
| **CURRENT STATE**                                      | **TARGET STATE**                                        |
|                                                        |                                                         |
| Nav items: Home, Projector, FAQ, Live Dashboard, Admin | Nav items: Home, Live Dashboard, Projector, Disclosures |
|                                                        |                                                         |
| Admin link visible to all visitors                     | Admin removed entirely from public nav                  |
|                                                        |                                                         |
| FAQ is a separate page route                           | FAQ moved inline on homepage (keep /faq as redirect)    |
|                                                        |                                                         |
| No link to Freedom site or Calendly                    | Primary CTA button in nav: "Become a Founding Member"   |
|                                                        |                                                         |
| No founding member context anywhere                    | Button links to freedom.ekantikcapital.com              |
+--------------------------------------------------------+---------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------------------+
| **NAV SPEC**                                                                                                              |
|                                                                                                                           |
| Desktop: Logo (left) \| Home \| Live Dashboard \| Projector \| Disclosures \| \[Gold Button: Become a Founding Member\]   |
|                                                                                                                           |
| Mobile: Hamburger menu with same items. Gold CTA button visible outside hamburger (always visible).                       |
|                                                                                                                           |
| The gold CTA button is styled as: background #C8A951, text #1B2A4A, font-weight 600, border-radius 6px, padding 8px 20px. |
|                                                                                                                           |
| Route: https://freedom.ekantikcapital.com                                                                                 |
+---------------------------------------------------------------------------------------------------------------------------+

**SPEC-02: Site-Wide Top Banner**

+-----------------------------------------------------+--------------------------------------------------+
| **CURRENT STATE**                                   | **TARGET STATE**                                 |
|                                                     |                                                  |
| No banner exists                                    | Thin persistent banner at very top of every page |
|                                                     |                                                  |
| No context linking EPIG to the broader ECA offering | Contextualizes EPIG within the Freedom program   |
|                                                     |                                                  |
| Visitors don't know EPIG is a managed strategy      | Creates a bridge to the sales page               |
+-----------------------------------------------------+--------------------------------------------------+

+-----------------------------------------------------------------------------------------------------------------------------------+
| **BANNER COPY**                                                                                                                   |
|                                                                                                                                   |
| EPIG is a managed strategy within the Ekantik Capital Financial Freedom program. Founding memberships limited to 25. Learn more → |
|                                                                                                                                   |
| Style: Background #C8A951 (gold), text #1B2A4A (navy), font-size 13px, text-align center, padding 8px.                            |
|                                                                                                                                   |
| "Learn more →" is a link to freedom.ekantikcapital.com#membership.                                                                |
|                                                                                                                                   |
| Dismissible with X button. Once dismissed, stays hidden for the session (sessionStorage, not localStorage).                       |
+-----------------------------------------------------------------------------------------------------------------------------------+

**SPEC-03: Footer Overhaul**

+-----------------------------------------------------+---------------------------------------------------------------------+
| **CURRENT STATE**                                   | **TARGET STATE**                                                    |
|                                                     |                                                                     |
| Platform links: Dashboard, Projector, Admin Console | Platform links: Dashboard, Projector (remove Admin Console)         |
|                                                     |                                                                     |
| No cross-links to freedom or dashboard sites        | Add Program section: Financial Freedom Program, ECFS Live Dashboard |
|                                                     |                                                                     |
| No founding member CTA                              | Links: freedom.ekantikcapital.com and dashboard.ekantikcapital.com  |
|                                                     |                                                                     |
|                                                     | Replace Admin Console with founding member CTA                      |
+-----------------------------------------------------+---------------------------------------------------------------------+

+------------------------------------------------------------------------------------------------------------------------------------+
| **FOOTER STRUCTURE**                                                                                                               |
|                                                                                                                                    |
| Column 1 (Brand): ECA logo + "EPIG is a managed investment strategy within the Ekantik Capital Financial Freedom program."         |
|                                                                                                                                    |
| Column 2 (Platform): Dashboard \| Performance Projector                                                                            |
|                                                                                                                                    |
| Column 3 (Program): Financial Freedom Program → freedom.ekantikcapital.com \| ECFS Live Performance → dashboard.ekantikcapital.com |
|                                                                                                                                    |
| Column 4 (Legal): Disclosures \| Terms of Service \| Privacy Policy                                                                |
|                                                                                                                                    |
| Column 5 (Connect): X (Twitter) \| Email                                                                                           |
|                                                                                                                                    |
| Below columns: © 2026 disclaimer + "Past performance is not indicative of future results."                                         |
+------------------------------------------------------------------------------------------------------------------------------------+

**HOMEPAGE**

**Homepage: Section-by-Section Specification**

The homepage is the primary page. It must be completely restructured. Below is every section in order, with exact content and implementation notes.

+-----------------------------------------------------------------------+
| **NEW SECTION ORDER (10 SECTIONS)**                                   |
|                                                                       |
| 1\. Hero (headline + proof badges + dual CTA)                         |
|                                                                       |
| 2\. The 30-Second Explanation                                         |
|                                                                       |
| 3\. Three-Layer Design (the product)                                  |
|                                                                       |
| 4\. Live Proof Strip (metrics pulled from dashboard data)             |
|                                                                       |
| 5\. SPY vs EPIG (single comparison table)                             |
|                                                                       |
| 6\. How Your Capital Is Protected (4 mechanisms)                      |
|                                                                       |
| 7\. Who Manages Your Capital (founder section)                        |
|                                                                       |
| 8\. Performance Projector (embedded, revised defaults)                |
|                                                                       |
| 9\. FAQ (inline accordion, 7 questions)                               |
|                                                                       |
| 10\. Final CTA (founding member close)                                |
+-----------------------------------------------------------------------+

+------------------------------------------------------------------------------------------------------------+
| **SECTIONS TO REMOVE ENTIRELY**                                                                            |
|                                                                                                            |
| ✘ "Limitations of Current Paradigm" (4 cards) --- replaced by comparison table in Section 5                |
|                                                                                                            |
| ✘ "The EPIG Advantage: Power to Consolidate 50--90% of Net Worth" --- compliance risk, removed             |
|                                                                                                            |
| ✘ "Antifragile by Design (Taleb)" section + chart --- replaced by "Asymmetric by Design" in Section 6      |
|                                                                                                            |
| ✘ SPY vs EPIG infographic (coffee shop vs Amazon) --- replaced by data table                               |
|                                                                                                            |
| ✘ "Introducing the EPIG Investment Strategy" (redundant with Section 2+3)                                  |
|                                                                                                            |
| ✘ "How EPIG Neutralizes These Challenges" (4 cards, redundant)                                             |
|                                                                                                            |
| ✘ Separate stat badges at top ("Strategies: 3, Full Transparency: 100%") --- replaced by live proof badges |
+------------------------------------------------------------------------------------------------------------+

**Section 1: Hero**

+------------------------------------------------------------------------+
| **IMPLEMENTATION**                                                     |
|                                                                        |
| Background: Navy gradient (#1B2A4A to #243656) or subtle grid pattern. |
|                                                                        |
| All text centered. Full viewport height on desktop, auto on mobile.    |
|                                                                        |
| Banner (SPEC-02) sits above this section.                              |
+------------------------------------------------------------------------+

**Headline**

+-------------------------------------------------------------------------+
| **COPY**                                                                |
|                                                                         |
| Line 1: Your Capital, Managed with Structural Discipline.               |
|                                                                         |
| Line 2: Every Trade Verified. Every Loss Disclosed.                     |
|                                                                         |
| Line 1: Georgia/Playfair Display, 42px, white, font-weight 400.         |
|                                                                         |
| Line 2: Source Sans Pro/Calibri, 22px, #C8A951 (gold), font-weight 400. |
+-------------------------------------------------------------------------+

**Subheadline**

+---------------------------------------------------------------------------------------------------+
| **COPY**                                                                                          |
|                                                                                                   |
| EPIG is a three-layer managed investment strategy that keeps 70--85% of your capital structurally |
|                                                                                                   |
| protected while compounding tactical futures income and asymmetric options returns.               |
|                                                                                                   |
| Built on the S&P 500. Executed in Interactive Brokers. Shared with full transparency.             |
|                                                                                                   |
| Font: Source Sans Pro, 17px, rgba(255,255,255,0.8), max-width 680px, centered.                    |
+---------------------------------------------------------------------------------------------------+

**Proof Badges**

+--------------------------------------------------------------------------------------------------------+
| **SPEC**                                                                                               |
|                                                                                                        |
| 4 badges in a horizontal row. Pull LIVE from dashboard API. Fallback: static last-known values.        |
|                                                                                                        |
| Badge 1: \[X\]% Cumulative Return                                                                      |
|                                                                                                        |
| Badge 2: \[Y\] Verified Trades                                                                         |
|                                                                                                        |
| Badge 3: \[Z\]% Max Drawdown                                                                           |
|                                                                                                        |
| Badge 4: Live Since \[Month Year\]                                                                     |
|                                                                                                        |
| Below badges: "All data from Interactive Brokers execution reports. Updated weekly."                   |
|                                                                                                        |
| Style: Semi-transparent white cards, large number (28px bold), small label (12px), on navy background. |
|                                                                                                        |
| CRITICAL: Never show "---" or "Loading\..." as permanent state. If API fails, show last-known values   |
|                                                                                                        |
| from a static JSON fallback updated with each weekly deploy.                                           |
+--------------------------------------------------------------------------------------------------------+

**Dual CTA**

+------------------------------------------------------------------------------------------------------------------------+
| **COPY + SPEC**                                                                                                        |
|                                                                                                                        |
| Primary button (gold, filled): View Live Performance Dashboard → /dashboard                                            |
|                                                                                                                        |
| Secondary button (white outline): Schedule Founding Member Consultation → https://calendly.com/hd-ekantikcapital/30min |
|                                                                                                                        |
| Both buttons visible above fold on desktop AND mobile. Stack vertically on mobile.                                     |
+------------------------------------------------------------------------------------------------------------------------+

**Section 2: The 30-Second Explanation**

**Purpose:** So a founding member can explain EPIG to their spouse, CPA, or attorney in under 30 seconds. This section does NOT exist on the current site.

+--------------------------------------------------------------------------------------------------+
| **COPY**                                                                                         |
|                                                                                                  |
| Header: What Is EPIG?                                                                            |
|                                                                                                  |
| EPIG stands for Enduring Principal-Protected Income & Growth.                                    |
|                                                                                                  |
| It is a rules-based, managed investment strategy with three layers:                              |
|                                                                                                  |
| Layer A holds 70--85% of your capital in SPY, high-quality equities, and cash equivalents.       |
|                                                                                                  |
| This is your structural floor --- designed so the vast majority of your wealth is never at risk. |
|                                                                                                  |
| Layer B overlays a small tactical position (3--5% of capital) in S&P 500 futures with defined    |
|                                                                                                  |
| 20-point stops. This generates systematic income through high-frequency, low-risk trades.        |
|                                                                                                  |
| Layer C deploys 3--5% into asymmetric options positions during market dislocations ---           |
|                                                                                                  |
| limited downside, outsized upside potential. Deployed selectively, not constantly.               |
|                                                                                                  |
| The result: a strategy engineered to target 16%+ CAGR across full market cycles while            |
|                                                                                                  |
| keeping original capital at risk below 5%.                                                       |
+--------------------------------------------------------------------------------------------------+

+--------------------------------------------------------------------------------------------------+
| **THREE DIFFERENTIATOR BADGES (below body)**                                                     |
|                                                                                                  |
| Badge 1: Managed for You --- We execute every trade. You review performance.                     |
|                                                                                                  |
| Badge 2: Verified via IB --- Every fill has a unique Interactive Brokers TradeID.                |
|                                                                                                  |
| Badge 3: Fully Transparent --- Both wins and losses published. The dashboard hides nothing.      |
|                                                                                                  |
| Style: Three horizontal cards, icon + bold title + one-line description. Light ivory background. |
+--------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------+
| **IMPLEMENTATION**                                                        |
|                                                                           |
| Clean white background. Centered text. No visual clutter.                 |
|                                                                           |
| Body text: max-width 640px. Font: Source Sans Pro, 16px, line-height 1.7. |
|                                                                           |
| Badges: 3-column grid on desktop, stacked on mobile.                      |
+---------------------------------------------------------------------------+

**Section 3: Three-Layer Design**

**This section exists on the current site but is buried at \~60% scroll depth.** Move it to position 3 (from \~position 7). It is the product. It must appear early.

+--------------------------------------------------------------------------------------------------+
| **HEADER COPY**                                                                                  |
|                                                                                                  |
| Three Layers. One Integrated System.                                                             |
|                                                                                                  |
| Each layer serves a distinct structural purpose. Together they create a managed portfolio        |
|                                                                                                  |
| that protects, generates income, and compounds --- without requiring you to make a single trade. |
+--------------------------------------------------------------------------------------------------+

**Changes from Current Version**

-   **Remove:** Target Return labels showing specific percentages on the cards (4--6%, 8--12%, 4--8%). These conflict with the freedom site ranges. Replace with qualitative descriptions.

-   **Change:** Layer A capital deployed from "85--99%" to "70--85%" to align with freedom site's EPIG 500 allocation (70% SPY/Cash + 20% blue chips = 90% core-ish).

-   **Change:** Layer B VaR from "1--5%" to "3--5%" for consistency.

-   **Change:** Layer C position size from "5--25%" to "3--5%". The current 25% is inconsistent with everything else.

-   **Add:** "View Live Performance →" link on the Layer B card, routing to dashboard.ekantikcapital.com (since that's where live ECFS data lives).

-   **Change:** Target CAGR from "\~20%" to "16%+" in the summary strip. 16.1% is the backtest number. \~20% is aspirational and unsupported.

-   **Add:** "Your Role: Review performance. We handle execution." to the summary strip.

  ----------------------- --------------------------- ---------------------------------------------
  **Element**             **Current**                 **New**

  Layer A capital         85--99%                     70--85%

  Layer B VaR             1--5%                       3--5%

  Layer C position        5--25%                      3--5%

  Target CAGR             \~20%                       16%+ across full market cycles

  Layer B proof link      Links to /dashboard         Links to dashboard.ekantikcapital.com

  "\~20% CAGR" mentions   6 occurrences               1 occurrence (here only)

  Key Insight paragraph   Mentions \~20% CAGR again   Remove or rephrase without repeating target
  ----------------------- --------------------------- ---------------------------------------------

**Section 4: Live Proof Strip**

**NEW SECTION.** Does not exist on current site. Pull live metrics from the dashboard API and display them inline on the homepage so prospects don't have to navigate away to see evidence.

+---------------------------------------------------------------------------------------------+
| **HEADER COPY**                                                                             |
|                                                                                             |
| See It Working.                                                                             |
|                                                                                             |
| Real capital. Real trades. Updated every Monday from Interactive Brokers execution reports. |
+---------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
| **FOUR METRIC CARDS (horizontal row)**                                                       |
|                                                                                              |
| Card 1: Cumulative Return --- \[X.X\]% --- Since \[Month Year\]                              |
|                                                                                              |
| Card 2: Max Drawdown --- \[X.X\]% --- Peak-to-trough                                         |
|                                                                                              |
| Card 3: Total Verified Trades --- \[XXX\] --- All with IB TradeID                            |
|                                                                                              |
| Card 4: EV per Trade --- +\[X.XX\]R --- Positive = strategy makes money over time            |
|                                                                                              |
| Style: 4-column grid, white cards with subtle border, large number (32px Georgia bold navy), |
|                                                                                              |
| small label (12px Calibri slate). Ivory background section.                                  |
+----------------------------------------------------------------------------------------------+

**Embedded Equity Curve**

+---------------------------------------------------------------------------------------------------+
| **SPEC**                                                                                          |
|                                                                                                   |
| Render the ECFS equity curve vs S&P 500 benchmark (both indexed to 100) directly on the homepage. |
|                                                                                                   |
| This is the single most powerful visual on any performance marketing page.                        |
|                                                                                                   |
| Data source: Same API that powers dashboard.ekantikcapital.com equity curve.                      |
|                                                                                                   |
| Chart: Line chart, two series. EPIG line in gold #C8A951, SPY line in slate #64748B.              |
|                                                                                                   |
| X-axis: dates. Y-axis: indexed return. Responsive width.                                          |
|                                                                                                   |
| Caption below chart: "Actual after-commission performance of EPIG managed portfolio vs. SPY       |
|                                                                                                   |
| (S&P 500 ETF), both indexed to \$100. Updated weekly."                                            |
|                                                                                                   |
| DO NOT use the coffee shop / Amazon network infographic. Replace entirely with this chart.        |
|                                                                                                   |
| CTA below: \[Gold button\] Explore the Full Dashboard → dashboard.ekantikcapital.com              |
|                                                                                                   |
| Subtext: "Every trade. Every fill. Every loss. Nothing hidden."                                   |
+---------------------------------------------------------------------------------------------------+

**Section 5: SPY vs EPIG Comparison**

**REPLACES:** Both the "Limitations of Current Paradigm" (4 cards) AND the "SPY vs EPIG" section (coffee shop infographic). Single table. Saves \~40% scroll depth.

+--------------------------------------------------------------------------------+
| **HEADER COPY**                                                                |
|                                                                                |
| The Conventional Approach vs. the EPIG Architecture                            |
|                                                                                |
| Buy-and-hold S&P 500 investing is simple. It is also structurally constrained. |
|                                                                                |
| EPIG is designed to neutralize those constraints.                              |
+--------------------------------------------------------------------------------+

  ------------------ -------------------------------- ---------------------------------------
  **Dimension**      **S&P 500 Buy & Hold**           **EPIG Managed**

  Market Exposure    100% constant                    \<5% tactical, rest protected

  Drawdown Risk      30--50%+ in major corrections    \<10% engineered target

  Lost Decade Risk   Real (2000--2010: \~0%)          Market-neutral income sleeve

  Entry Timing       Returns depend on P/E at entry   P/E independent by design

  Liquidity          Fully invested at all times      50--90% accessible anytime

  Transparency       Quarterly brokerage statements   Every trade published weekly

  Management         You (or passive index)           Ekantik Capital (active, rules-based)
  ------------------ -------------------------------- ---------------------------------------

+-------------------------------------------------------------------------------------------------------+
| **KEY INSIGHT (below table)**                                                                         |
|                                                                                                       |
| EPIG does not attempt to predict markets. It harvests returns from high-expected-value                |
|                                                                                                       |
| windows and sits in protected positions the rest of the time. The edge is not in any                  |
|                                                                                                       |
| single trade --- it's in the system-level compounding across hundreds of disciplined trades per year. |
+-------------------------------------------------------------------------------------------------------+

**Section 6: How Your Capital Is Protected**

**REPLACES:** "Antifragile by Design (Taleb)" section AND "The Power to Consolidate 50--90% of Net Worth" section. Reframed for managed-money audience. Plain language. Specific mechanisms. No Taleb references.

+---------------------------------------------------------------------------------------+
| **HEADER COPY**                                                                       |
|                                                                                       |
| Asymmetric by Design.                                                                 |
|                                                                                       |
| EPIG's architecture is built around a single principle: protect first, then compound. |
+---------------------------------------------------------------------------------------+

Four protection mechanism cards (vertical stack or 2x2 grid):

  --------------- ------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Mechanism**   **Title**                **Copy**

  1               Structural Floor         70--85% of capital is always in SPY, cash, or Treasury bills. Only 3--5% is deployed tactically. A total wipeout of every active trade impacts less than 5% of your capital.

  2               Defined Risk per Trade   Every Layer B trade has a 20-point hard stop. Every Layer C trade risks only the debit paid. No trade enters without a predefined maximum loss.

  3               Circuit Breakers         If drawdown exceeds thresholds, the portfolio shifts to defensive posture automatically. Rules-based, broker-enforced. Protects you even if the manager is unavailable.

  4               Daily Liquidity          No lockup periods. No redemption windows. No penalties. Because the majority of capital sits in SPY and cash, access it on any business day.
  --------------- ------------------------ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

+---------------------------------------------------------------------------------------------------+
| **REQUIRED CAVEAT BOX (below mechanisms)**                                                        |
|                                                                                                   |
| What This Is Not                                                                                  |
|                                                                                                   |
| EPIG is not risk-free. All investing involves the possibility of loss. Drawdowns may exceed       |
|                                                                                                   |
| targets during extreme market dislocations. Past performance is not indicative of future results. |
|                                                                                                   |
| The protections described above are design features, not guarantees.                              |
|                                                                                                   |
| We believe the best way to earn trust is to be honest about risk --- which is why we publish      |
|                                                                                                   |
| every loss alongside every win.                                                                   |
|                                                                                                   |
| Style: Light gray background, border-left 3px solid #64748B. Honest, not buried.                  |
+---------------------------------------------------------------------------------------------------+

**Section 7: Who Manages Your Capital**

**NEW SECTION.** Does not exist anywhere on the current EPIG site. This is the single most important trust-building addition. People invest in people.

+-----------------------------------------------------------------------+
| **HEADER COPY**                                                       |
|                                                                       |
| The Person Behind the Portfolio                                       |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------+
| **LAYOUT**                                                                              |
|                                                                                         |
| 2-column on desktop: photo left (40%), bio right (60%). Stacked on mobile (photo top).  |
|                                                                                         |
| Background: soft ivory #FAF8F5 or subtle gradient.                                      |
|                                                                                         |
| Photo: Professional headshot. High-quality. Confident, approachable. Not a stock photo. |
|                                                                                         |
| Min dimensions: 400x500px. Rounded corners or subtle border.                            |
+-----------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------------+
| **BIO COPY**                                                                                       |
|                                                                                                    |
| Hiren Patel                                                                                        |
|                                                                                                    |
| Founder & Chief Investment Officer                                                                 |
|                                                                                                    |
| Ekantik Capital Advisors LLC                                                                       |
|                                                                                                    |
| I built EPIG because the investment industry offers a false choice: accept full market risk        |
|                                                                                                    |
| for average returns, or pay hedge fund fees for black-box strategies you can't verify.             |
|                                                                                                    |
| EPIG is the third option. A managed strategy where every trade is executed in Interactive          |
|                                                                                                    |
| Brokers, every fill is verifiable, and every loss is published alongside every win. I manage       |
|                                                                                                    |
| my own capital through this same system --- my interests and yours are fully aligned.              |
|                                                                                                    |
| My background spans enterprise technology, cybersecurity, and over \[X\] years of active           |
|                                                                                                    |
| market participation. EPIG is the core investment engine inside Ekantik Capital's Financial        |
|                                                                                                    |
| Freedom program, designed to help founding members achieve financial independence within 10 years. |
|                                                                                                    |
| \[LinkedIn icon + link\] \[X/Twitter icon + link\]                                                 |
+----------------------------------------------------------------------------------------------------+

+---------------------------------------------------------------------------------------------------------------+
| **CREDIBILITY STRIP (below bio)**                                                                             |
|                                                                                                               |
| 4 horizontal badges: \[X\]+ Years in Markets \| \[XXX\] Trades Executed \| 100% Fiduciary \| Skin in the Game |
|                                                                                                               |
| Style: Icon + stat + label. Navy background strip or bordered cards.                                          |
+---------------------------------------------------------------------------------------------------------------+

**Section 8: Performance Projector (Revised)**

EXISTS on current site. Keep the projector but change defaults and framing.

+------------------------------------------------------------------------+
| **HEADER COPY (revised)**                                              |
|                                                                        |
| What Could This Mean for Your Portfolio?                               |
|                                                                        |
| Model your scenario using real 2026 trade data from verified IB fills. |
+------------------------------------------------------------------------+

**Changes Required**

-   **Default portfolio size:** Change from \$100,000 to \$500,000. Founding members have \$500K+ liquid. \$100K creates cognitive dissonance.

-   **Default values:** When live data is not loaded, use actual YTD averages or backtest averages (conservative). Never use aspirational estimates.

-   **Strategy C avg win:** Current default 3.0R is aspirational. Use actual YTD data or reduce to 2.0R as conservative fallback.

-   **Add CTA below projector:** \[Gold button\] Schedule Your Founding Member Consultation → Calendly

-   **Add text link:** "See how EPIG fits your Financial Freedom plan →" linking to freedom.ekantikcapital.com

**Section 9: FAQ (Inline Accordion)**

**REPLACES:** The separate /faq page as the primary FAQ experience. Implement as a collapsed accordion on the homepage. Keep /faq route alive but redirect to the homepage FAQ anchor.

7 questions, rewritten for managed-money founding member audience. All self-directed trader language removed (no R-multiples, no MES margin, no "follow along").

  -------- ------------------------------------- -------------------------------------------------------------------------------------
  **Q#**   **Question**                          **Key Change from Current**

  1        Is this real money?                   Keep --- strengthen with mention of Tradovate + IB fills

  2        How can I verify the data?            Keep --- add mention that founding members can request raw data during consultation

  3        How is my capital protected?          NEW --- replaces "What instruments are traded"

  4        What happens in a 2008-style crash?   NEW --- replaces "How much capital to follow along"

  5        Who manages the portfolio?            NEW --- replaces "What does R-multiple mean"

  6        What does it cost?                    NEW --- replaces "What is EV per trade"

  7        How do I get started?                 NEW --- 5-step process ending with founding member scarcity
  -------- ------------------------------------- -------------------------------------------------------------------------------------

Full answer copy for each question was provided in the EPIG Revised Site Copy document (delivered earlier). Use that copy verbatim.

**Section 10: Final CTA**

**NEW SECTION.** The current site has no CTA involving human contact. This is the last thing a prospect sees before the footer.

+-------------------------------------------------------------------------------------------------------------+
| **SPEC**                                                                                                    |
|                                                                                                             |
| Full-width navy #1B2A4A background. All text centered.                                                      |
|                                                                                                             |
| Header: This Opportunity Has a Capacity Limit.                                                              |
|                                                                                                             |
| Font: Georgia, 28px, white.                                                                                 |
|                                                                                                             |
| Body: EPIG is a managed strategy, not a product. Each founding member receives direct                       |
|                                                                                                             |
| access to the portfolio manager, custom strategy integration, and lifetime benefits that                    |
|                                                                                                             |
| cannot be replicated at scale. That is why membership is limited to 25.                                     |
|                                                                                                             |
| Font: Source Sans Pro, 16px, rgba(255,255,255,0.8), max-width 580px.                                        |
|                                                                                                             |
| Seat counter: \[X\] of 25 founding memberships remaining.                                                   |
|                                                                                                             |
| Font: Calibri, 18px, #C8A951 (gold), bold.                                                                  |
|                                                                                                             |
| Primary CTA: \[Large gold button\] Schedule Your Founding Member Consultation                               |
|                                                                                                             |
| Route: https://calendly.com/hd-ekantikcapital/30min                                                         |
|                                                                                                             |
| Secondary: \[Text link, white\] See the full Financial Freedom program →                                    |
|                                                                                                             |
| Route: freedom.ekantikcapital.com                                                                           |
|                                                                                                             |
| Trust badges row: 100% Fiduciary \| Flat Fee Locked Forever \| IB-Verified Performance \| No Lockup Periods |
|                                                                                                             |
| Font: Calibri, 12px, rgba(255,255,255,0.6), separated by "\|".                                              |
+-------------------------------------------------------------------------------------------------------------+

**DASHBOARD PAGE**

**/dashboard Page Changes**

The dashboard page retains its current structure but needs targeted fixes.

  ------------------------- --------------------------------------- -------------------------------------------------------------------------------------- --------------
  **Change**                **Current**                             **Target**                                                                             **Priority**

  Empty state fallback      All metrics show "---" if JS fails      Static JSON fallback with last-known values. Never show dashes.                        P0

  Track record start date   Not shown anywhere                      "Live Since \[Month Year\]" badge in header area                                       P0

  "Last updated"            Shows "Loading\..."                     Static text with actual date, even before JS loads                                     P0

  Founding member CTA       None                                    Add "Become a Founding Member →" below the dashboard, linking to Freedom site          P1

  Equity curve link         Links to internal /dashboard sections   Also link to dashboard.ekantikcapital.com as "See full ECFS live performance"          P1

  Educational disclaimer    Exists but buried                       Keep prominent. Add: "EPIG is a managed strategy. Learn about founding membership →"   P2
  ------------------------- --------------------------------------- -------------------------------------------------------------------------------------- --------------

**PROJECTOR PAGE**

**/projector Page Changes**

  ------------------------ ---------------------------------------------- ------------------------------------------------------------------------------------------------- --------------
  **Change**               **Current**                                    **Target**                                                                                        **Priority**

  Default portfolio size   \$100,000                                      \$500,000                                                                                         P0

  Fallback defaults        Aspirational (55/60/45% win rates, 3.0R avg)   Actual YTD data or conservative backtest averages                                                 P0

  CTA below projector      None                                           \[Gold button\] Schedule Founding Member Consultation → Calendly                                  P0

  Context link             None                                           "See how EPIG fits your Financial Freedom plan →" linking to Freedom site                         P1

  Disclaimer               Exists                                         Add: "Projection uses actual trade data. Past performance is not indicative of future results."   P1
  ------------------------ ---------------------------------------------- ------------------------------------------------------------------------------------------------- --------------

**DISCLOSURES PAGE**

**/disclosures Page Changes**

Add three new disclosure sections to the existing page:

1.  **Managed Strategy Disclosure:** Explain that EPIG is a managed strategy, capital is deployed by the portfolio manager, assets are held in the client's own IB account, Ekantik does not take custody.

2.  **Founding Member Terms Disclosure:** Founding member pricing, benefits, and capacity limits are subject to the founding member agreement. Availability is limited. Fee structures lock at execution.

3.  **Backtest vs. Live Performance Disclosure:** Explicitly separate backtested (2000--2025) from live performance (from \[start date\]). State that backtested data was developed with benefit of hindsight. The two must not be conflated.

Full copy for these three disclosures was provided in the EPIG Revised Site Copy document (delivered earlier).

**INTEGRATION**

**Cross-Site Integration Requirements**

  -------------------------- --------------------------------------------------------------------------- -------------------------------------------------------- --------------
  **Item**                   **Action**                                                                  **Route**                                                **Priority**

  EPIG500 redirect           301 redirect EPIG500.ekantikcapital.com to epig.ekantikcapital.com          Server-level redirect                                    P0

  Freedom site EPIG link     Update all EPIG links on freedom site to point to epig.ekantikcapital.com   Replace EPIG500 URLs                                     P0

  Dashboard CTA              Add "Become a Founding Member" CTA on dashboard.ekantikcapital.com          Links to freedom.ekantikcapital.com                      P0

  Dashboard seat counter     Add "\[X\] of 25 founding memberships remaining"                            Static counter, update manually                          P1

  Freedom → Dashboard link   Add "See live verified performance →" in ECFS and EPIG sections             dashboard.ekantikcapital.com                             P1

  Strategy unification       Ensure identical allocation % and CAGR targets across all 3 sites           Manual audit and update                                  P0

  Seat counter sync          Same number shown on dashboard, EPIG, and Freedom sites                     Single source of truth (env variable or shared config)   P2
  -------------------------- --------------------------------------------------------------------------- -------------------------------------------------------- --------------

**REFERENCE**

**Unified Strategy Numbers (All Sites Must Match)**

  --------------------- -------------------------------- -------------------------------------------------------------------------
  **Parameter**         **Canonical Value**              **Notes**

  Layer A allocation    70--85%                          SPY, blue chips, cash/T-bills

  Layer B allocation    3--5%                            S&P futures with defined stops

  Layer C allocation    3--5%                            Options during dislocations

  Target CAGR           16%+ across full market cycles   Backtest-grounded. Do NOT use \~20% without qualifying as aspirational.

  Max drawdown target   \<10% by design                  Qualify: "engineered target" not "guaranteed"

  Principal at risk     \<5% at any given time           Refers to active tactical positions only

  Trades per year       150--200                         Combined Layer B + Layer C

  Track record start    \[Month Year\]                   Must appear on EPIG site, dashboard, and freedom site

  Backtest period       2000--2025 (hypothetical)        Always labeled as backtested/hypothetical

  Backtest CAGR         16.1%                            From freedom site EPIG 500 section

  Lost Decade CAGR      9.3% vs S&P 0.4%                 2000--2010 simulation
  --------------------- -------------------------------- -------------------------------------------------------------------------

**EXECUTION**

**Recommended Implementation Order**

Sequenced by dependency and impact. Complete each group before starting the next.

  ----------- ---------------------------------------------------------- ---------------- ------------------------------------
  **Order**   **Task**                                                   **Est. Hours**   **Dependency**

  1           Remove Admin from nav (all pages)                          0.5              None

  2           Add founding member top banner (all pages)                 1                None

  3           Fix dashboard empty-state fallback (static JSON)           2--3             None

  4           Add track record start date (homepage + dashboard)         0.5              None

  5           301 redirect EPIG500 → epig domain                         0.5              Server access

  6           Update footer (all pages)                                  1                None

  7           Restructure homepage section order                         2--3             Copy ready (this doc)

  8           Write hero section (new)                                   1--2             Proof badge API or static fallback

  9           Write 30-second explanation (new section)                  1                Copy ready

  10          Revise three-layer section (move up, update numbers)       1--2             Unified numbers reference

  11          Build live proof strip (new section, API integration)      3--4             Dashboard API access

  12          Build equity curve embed (new, chart component)            2--3             Dashboard API access

  13          Build SPY vs EPIG comparison table (replace 2 sections)    1                Copy ready

  14          Build protection mechanisms section (replace 2 sections)   1--2             Copy ready

  15          Build founder section (new, requires photo)                1--2             Professional headshot

  16          Revise projector defaults                                  1                YTD data available

  17          Build inline FAQ accordion (7 questions)                   1--2             Copy ready

  18          Build final CTA section (new)                              1                Copy ready

  19          Update disclosures page (3 new sections)                   1                Copy ready

  20          Add founding member CTA to dashboard page                  0.5              #2 complete

  21          Cross-site link audit (all 3 sites consistent)             1--2             All above complete

  22          QA: mobile responsiveness, all links work, no dead ends    2--3             All above complete
  ----------- ---------------------------------------------------------- ---------------- ------------------------------------

+-----------------------------------------------------------------------+
| **TOTAL ESTIMATED EFFORT**                                            |
|                                                                       |
| 22 tasks \| \~25--35 developer hours \| Target: 5--7 working days     |
|                                                                       |
| Tasks 1--6 (global changes) can ship immediately as a first deploy.   |
|                                                                       |
| Tasks 7--18 (homepage rebuild) are the core sprint.                   |
|                                                                       |
| Tasks 19--22 (cleanup + QA) finalize the site.                        |
|                                                                       |
| Do NOT start warm outreach until task 22 (QA) is complete.            |
|                                                                       |
| The dashboard → freedom → EPIG flow must work without dead ends.      |
+-----------------------------------------------------------------------+

**END OF SPECIFICATION**

22 tasks · 10 homepage sections · 4 page updates · 7 cross-site integrations

All copy blocks available in the EPIG Revised Site Copy document (delivered separately)

**Ready to begin coding any section.**
