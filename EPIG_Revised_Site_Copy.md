**EPIG WEBSITE**

**REVISED SITE COPY**

*Managed Portfolio · Founding Member Framing · Due Diligence Destination*

Prepared for: Hiren Patel, Founder & CIO

Date: March 11, 2026

Status: Production-Ready Draft --- Copy, Paste, Implement

*This document contains the complete section-by-section copy for epig.ekantikcapital.com,*

*reframed as a due diligence destination for managed-portfolio founding members.*

**STRATEGIC CONTEXT**

**How This Site Fits the Ecosystem**

**The Role of epig.ekantikcapital.com:** This site is NOT the sales page. Freedom.ekantikcapital.com is the sales page. The EPIG site is the evidence room --- the place a warm prospect goes after a consultation or a referral conversation to answer one question: ***"Does this strategy actually work?"***

Every section on this site should earn conviction. Every CTA should route to either the Freedom site or the Calendly link. The site proves. The Freedom site closes.

**Site Navigation (Revised)**

-   Home (this page)

-   Live Dashboard

-   Performance Projector

-   FAQ

-   Disclosures

-   Become a Founding Member → (links to freedom.ekantikcapital.com) \[Primary CTA button\]

+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                |
| Remove "Admin" from all public navigation. Access via direct URL with auth only. Remove the separate FAQ page link from primary nav --- FAQ is now inline on the homepage. Keep the /faq route alive for SEO but redirect scrolls to the homepage FAQ section. |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 1**

**Hero Section**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                               |
| This is the first thing a prospect sees. It must accomplish three things in under 5 seconds: (1) establish what EPIG is, (2) prove it's real, (3) tell the visitor what to do next. Background: dark navy gradient or subtle grid pattern. All text centered. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Top Banner (Thin Bar)**

+----------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **BANNER COPY**                                                                                                                                                |
|                                                                                                                                                                |
| EPIG is a managed strategy within the Ekantik Capital Financial Freedom program. Founding memberships are limited to 25. \[Learn about Founding Membership →\] |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                      |
|                                                                                                                                                                         |
| Link routes to freedom.ekantikcapital.com#membership. Gold background, navy text. Small font. This immediately contextualizes the site for anyone who arrives directly. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Headline**

+-----------------------------------------------------------------------+
| **HEADLINE**                                                          |
|                                                                       |
| Your Capital, Managed with Structural Discipline.                     |
|                                                                       |
| Every Trade Verified. Every Loss Disclosed.                           |
+-----------------------------------------------------------------------+

Design notes: Line 1 in large serif (Georgia/Playfair Display), white on navy. Line 2 in smaller sans-serif (Calibri/Source Sans Pro), gold.

**Subheadline**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **SUBHEAD**                                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                             |
| EPIG is a three-layer managed investment strategy that keeps 85--99% of your capital structurally protected while compounding tactical futures income and asymmetric options returns. Built on the S&P 500. Executed in Interactive Brokers. Shared with full transparency. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Proof Badge Strip**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                           |
|                                                                                                                                                              |
| Pull these LIVE from the dashboard data. If JS hasn't loaded, show last-known static values as fallback. Format: large number + small label, horizontal row. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------------------+
| **PROOF BADGES**                                                                                      |
|                                                                                                       |
| \[X\]% Cumulative Return \| \[Y\] Verified Trades \| \[Z\]% Max Drawdown \| Live Since \[Month Year\] |
|                                                                                                       |
| All data sourced from Interactive Brokers execution reports. Updated weekly.                          |
+-------------------------------------------------------------------------------------------------------+

**Dual CTA**

+-----------------------------------------------------------------------------+
| **CTA BUTTONS**                                                             |
|                                                                             |
| \[Primary --- Gold button\] View Live Performance Dashboard                 |
|                                                                             |
| \[Secondary --- Outline button\] Schedule Your Founding Member Consultation |
+-----------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                         |
|                                                                                                                                                                            |
| Primary routes to /dashboard. Secondary routes to Calendly link (https://calendly.com/hd-ekantikcapital/30min). Both buttons visible above the fold on desktop and mobile. |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 2**

**The 30-Second Explanation**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                |
|                                                                                                                                                                                                   |
| This section exists for one reason: so a founding member can explain EPIG to their spouse, their CPA, or their attorney in under 30 seconds. Clean white background. Centered. No visual clutter. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+-----------------------------------------------------------------------+
| **HEADER**                                                            |
|                                                                       |
| What Is EPIG?                                                         |
+-----------------------------------------------------------------------+

**Body Copy**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **BODY**                                                                                                                                                                                    |
|                                                                                                                                                                                             |
| EPIG stands for Enduring Principal-Protected Income & Growth.                                                                                                                               |
|                                                                                                                                                                                             |
| It is a rules-based, managed investment strategy with three layers:                                                                                                                         |
|                                                                                                                                                                                             |
| Layer A holds 70--85% of your capital in SPY, high-quality equities, and cash equivalents. This is your structural floor --- designed so the vast majority of your wealth is never at risk. |
|                                                                                                                                                                                             |
| Layer B overlays a small tactical position (3--5% of capital) in S&P 500 futures with defined 20-point stops. This generates systematic income through high-frequency, low-risk trades.     |
|                                                                                                                                                                                             |
| Layer C deploys 3--5% into asymmetric options positions during market dislocations --- limited downside, outsized upside potential.                                                         |
|                                                                                                                                                                                             |
| The result: a strategy engineered to compound at a targeted \~16--20% CAGR across full market cycles while keeping original capital at risk below 5%.                                       |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                       |
| IMPORTANT: The CAGR range is stated as \~16--20% to reconcile the freedom site's 16.1% backtest with the EPIG site's \~20% live target. If you want a single number, use 16%+ (conservative, backtest-grounded). Avoid stating 20% without qualifying it as a target. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Differentiator Strip**

+-------------------------------------------------------------------------------------------------------------+
| **THREE DIFFERENTIATORS**                                                                                   |
|                                                                                                             |
| Managed for You --- We execute every trade. You review performance.                                         |
|                                                                                                             |
| Verified via IB --- Every fill carries a unique Interactive Brokers TradeID. No backtests. No paper trades. |
|                                                                                                             |
| Fully Transparent --- Both wins and losses are published. The dashboard hides nothing.                      |
+-------------------------------------------------------------------------------------------------------------+

**SECTION 3**

**The Three-Layer Design**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                   |
| This is the product section. Use three side-by-side cards on desktop, stacked on mobile. Each card has: layer letter, name, description, capital allocated, target return, and a "View Performance →" link to the dashboard filtered by strategy. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **HEADER + SUBHEAD**                                                                                                                                                                       |
|                                                                                                                                                                                            |
| Three Layers. One Integrated System.                                                                                                                                                       |
|                                                                                                                                                                                            |
| Each layer serves a distinct structural purpose. Together they create a managed portfolio that protects, generates income, and compounds --- without requiring you to make a single trade. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Layer A: Core Allocation**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **LAYER A CARD**                                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                            |
| The Structural Floor                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                            |
| 70--85% of your capital is held in a diversified core of SPY (S&P 500 ETF), select blue-chip equities, and cash equivalents. This layer provides market participation during bull markets and shifts toward cash during corrections exceeding 10%. Your principal's first line of defense. |
|                                                                                                                                                                                                                                                                                            |
| Capital Deployed: 70--85%                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                            |
| Target Contribution: 4--6% annually                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                            |
| Risk Profile: Market-aligned with dynamic downside rules                                                                                                                                                                                                                                   |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Layer B: Tactical Futures**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **LAYER B CARD**                                                                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                                                               |
| The Income Engine                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                               |
| A 3--5% overlay of defined-risk S&P 500 futures trades (MES and ES contracts), each with a hard 20-point stop. Systematic entries target high-probability setups. Over 150--200 trades per year, the positive expected value compounds into meaningful income regardless of market direction. |
|                                                                                                                                                                                                                                                                                               |
| Capital at Risk: 3--5%                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                               |
| Target Contribution: 8--12% annually                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                               |
| Risk Profile: Defined risk per trade, uncorrelated to market direction                                                                                                                                                                                                                        |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Layer C: Asymmetric Pivots**

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **LAYER C CARD**                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                         |
| The Convexity Sleeve                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                         |
| A 3--5% allocation to options positions (primarily vertical spreads on SPY, QQQ, and select equities) designed to capture outsized moves during market dislocations and episodic pivots. Limited downside. Substantial upside. Deployed selectively --- not constantly. |
|                                                                                                                                                                                                                                                                         |
| Capital at Risk: 3--5%                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                         |
| Target Contribution: 4--8% annually                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                         |
| Risk Profile: Asymmetric --- small risk, large potential reward                                                                                                                                                                                                         |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Combined Target**

+-----------------------------------------------------------------------+
| **SUMMARY STRIP**                                                     |
|                                                                       |
| Target CAGR: 16%+ across full market cycles                           |
|                                                                       |
| Original Principal at Risk: \<5% at any time                          |
|                                                                       |
| Trades per Year: 150--200                                             |
|                                                                       |
| Your Role: Review performance. We handle execution.                   |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                           |
| The capital allocation percentages now align with the freedom site's EPIG 500 section (70/10/20 maps to \~70--85% core / 3--5% futures / 3--5% options + remainder in cash). Verify these numbers match your actual current allocation before publishing. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 4**

**Live Performance Proof**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                            |
| This section pulls LIVE data from the dashboard API and embeds it directly on the homepage. If JavaScript fails, show static fallback values from the last weekly update. Never show dashes ("---") or "Loading\..." as a permanent state. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+---------------------------------------------------------------------------------------------+
| **HEADER**                                                                                  |
|                                                                                             |
| See It Working.                                                                             |
|                                                                                             |
| Real capital. Real trades. Updated every Monday from Interactive Brokers execution reports. |
+---------------------------------------------------------------------------------------------+

**Metric Cards (4 cards, horizontal)**

+-----------------------------------------------------------------------+
| **METRIC 1**                                                          |
|                                                                       |
| Cumulative Return                                                     |
|                                                                       |
| \[X.X\]%                                                              |
|                                                                       |
| Since \[Month Year\]                                                  |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **METRIC 2**                                                          |
|                                                                       |
| Max Drawdown                                                          |
|                                                                       |
| \[X.X\]%                                                              |
|                                                                       |
| Peak-to-trough                                                        |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **METRIC 3**                                                          |
|                                                                       |
| Total Verified Trades                                                 |
|                                                                       |
| \[XXX\]                                                               |
|                                                                       |
| All with IB TradeID                                                   |
+-----------------------------------------------------------------------+

+-----------------------------------------------------------------------+
| **METRIC 4**                                                          |
|                                                                       |
| EV per Trade                                                          |
|                                                                       |
| +\[X.XX\]R                                                            |
|                                                                       |
| Positive = the strategy makes money over time                         |
+-----------------------------------------------------------------------+

**Embedded Equity Curve**

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Render the SPY benchmark vs. EPIG equity curve (both indexed to 100) directly on the homepage. This is the single most powerful visual for any performance-marketing page. Do NOT use the coffee shop / Amazon network metaphor. Pure data. Two lines. Time on x-axis, indexed return on y-axis. Below the chart: "This chart shows actual, after-commission performance of the EPIG managed portfolio vs. SPY (S&P 500 ETF), both starting at \$100. Updated weekly." |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**CTA Below Proof**

+-----------------------------------------------------------------------+
| **CTA**                                                               |
|                                                                       |
| \[Gold button\] Explore the Full Dashboard →                          |
|                                                                       |
| Every trade. Every fill. Every loss. Nothing hidden.                  |
+-----------------------------------------------------------------------+

**SECTION 5**

**Why Not Just Buy the S&P 500?**

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                             |
|                                                                                                                                                                                                |
| Condense the old four-limitation cards AND the SPY vs. EPIG section into a single clean comparison table. The sophisticated prospect already knows these problems. Don't lecture --- contrast. |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+----------------------------------------------------------------------------------------------------------------------------------+
| **HEADER**                                                                                                                       |
|                                                                                                                                  |
| The Conventional Approach vs. the EPIG Architecture                                                                              |
|                                                                                                                                  |
| Buy-and-hold S&P 500 investing is simple. It is also structurally constrained. EPIG is designed to neutralize those constraints. |
+----------------------------------------------------------------------------------------------------------------------------------+

**Comparison Table**

  ---------------------- -------------------------------- ---------------------------------------
                         **S&P 500 Buy & Hold**           **EPIG Managed**

  **Market Exposure**    100% constant                    \<5% tactical, rest protected

  **Drawdown Risk**      30--50%+ in major corrections    \<10% engineered target

  **Lost Decade Risk**   Real (2000--2010: \~0% return)   Market-neutral income sleeve

  **Entry Timing**       Returns depend on P/E at entry   P/E independent by design

  **Liquidity**          Fully invested at all times      50--90% accessible at any time

  **Transparency**       Quarterly brokerage statements   Every trade published weekly

  **Who Manages It**     You (or a passive index fund)    Ekantik Capital (active, rules-based)
  ---------------------- -------------------------------- ---------------------------------------

**Key Insight (Below Table)**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **KEY INSIGHT**                                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                                   |
| EPIG does not attempt to predict markets. It harvests returns from high-expected-value windows and sits in protected positions the rest of the time. The edge is not in any single trade --- it's in the system-level compounding across hundreds of disciplined trades per year. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 6**

**How Your Capital Is Protected**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                    |
| This replaces the old "Antifragile by Design" and "The Power to Consolidate" sections. Reframed for a managed-money audience that wants to know: what stops me from losing my money? No Taleb references. No academic charts. Plain language, specific mechanisms. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+---------------------------------------------------------------------------------------------------+
| **HEADER**                                                                                        |
|                                                                                                   |
| Asymmetric by Design.                                                                             |
|                                                                                                   |
| EPIG's architecture is built around a single principle: protect first, then compound. Here's how. |
+---------------------------------------------------------------------------------------------------+

**Protection Mechanism 1**

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **STRUCTURAL FLOOR**                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                 |
| 85--99% of Capital Is Always Protected                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                 |
| At any given moment, the vast majority of your portfolio sits in SPY, cash, or Treasury bills. Only 1--5% is deployed in active tactical positions. This means a total wipeout of every active trade would impact less than 5% of your capital. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Protection Mechanism 2**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEFINED RISK PER TRADE**                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                 |
| Every Trade Has a Hard Stop                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                 |
| Layer B futures trades use a 20-point hard stop. Layer C options trades risk only the debit paid. No trade is ever entered without a predefined maximum loss. There is no scenario where a single trade causes outsized damage. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Protection Mechanism 3**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **CIRCUIT BREAKERS**                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                       |
| Automatic Shutdown Protocols                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                       |
| If drawdown exceeds predefined thresholds, the portfolio shifts to a defensive posture automatically. This is not discretionary --- it's rules-based and broker-enforced. The system protects you even if the manager is unavailable. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Protection Mechanism 4**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DAILY LIQUIDITY**                                                                                                                                                                                                         |
|                                                                                                                                                                                                                             |
| Access Your Capital Whenever You Need It                                                                                                                                                                                    |
|                                                                                                                                                                                                                             |
| No lockup periods. No redemption windows. No penalties. Because the majority of your capital sits in SPY and cash, you can access it on any business day. EPIG is designed for people who want both growth and flexibility. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Honest Caveat (Required)**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **CAVEAT BOX**                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                    |
| What This Is Not                                                                                                                                                                                                                                                   |
|                                                                                                                                                                                                                                                                    |
| EPIG is not risk-free. All investing involves the possibility of loss. Drawdowns may exceed targets during extreme market dislocations. Past performance is not indicative of future results. The protections described above are design features, not guarantees. |
|                                                                                                                                                                                                                                                                    |
| We believe the best way to earn trust is to be honest about risk --- which is why we publish every loss alongside every win.                                                                                                                                       |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 7**

**Who Manages Your Capital**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                      |
|                                                                                                                                                                                         |
| This is the single most important trust-building section on the site. Professional headshot required. 2-column layout: photo left, bio right. Background: soft ivory or light gradient. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+-----------------------------------------------------------------------+
| **HEADER**                                                            |
|                                                                       |
| The Person Behind the Portfolio                                       |
+-----------------------------------------------------------------------+

**Founder Bio**

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **BIO COPY**                                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                    |
| \[PROFESSIONAL HEADSHOT --- High-quality, confident, approachable\]                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                    |
| Hiren Patel                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                    |
| Founder & Chief Investment Officer                                                                                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                                                    |
| Ekantik Capital Advisors LLC                                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                    |
| I built EPIG because the investment industry offers a false choice: accept full market risk for average returns, or pay hedge fund fees for black-box strategies you can't verify.                                                                                                 |
|                                                                                                                                                                                                                                                                                    |
| EPIG is the third option. A managed strategy where every trade is executed in Interactive Brokers, every fill is verifiable, and every loss is published alongside every win. I manage my own capital through this same system --- my interests and yours are fully aligned.       |
|                                                                                                                                                                                                                                                                                    |
| My background spans enterprise technology, cybersecurity, and over \[X\] years of active market participation. I've spent the last \[X\] years engineering a rules-based investment approach grounded in structural protection, positive expected value, and radical transparency. |
|                                                                                                                                                                                                                                                                                    |
| EPIG is the core investment engine inside Ekantik Capital's Financial Freedom program, which is designed to help founding members achieve financial independence within 10 years.                                                                                                  |
|                                                                                                                                                                                                                                                                                    |
| \[LinkedIn icon + link\] \[X/Twitter icon + link\]                                                                                                                                                                                                                                 |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Credibility Markers (Below Bio)**

+---------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                          |
|                                                                                             |
| Horizontal strip of 3--4 credibility indicators below the bio. Format: icon + stat + label. |
+---------------------------------------------------------------------------------------------+

+------------------------------------------------------------------------------------------+
| **CREDIBILITY STRIP**                                                                    |
|                                                                                          |
| \[X\]+ Years in Markets \| \[XXX\] Trades Executed \| 100% Fiduciary \| Skin in the Game |
+------------------------------------------------------------------------------------------+

**SECTION 8**

**Performance Projector (Embedded)**

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                                                                                                       |
| Keep the existing projector but adjust defaults. The projector should use ACTUAL YTD data as defaults, not aspirational numbers. If YTD data isn't loaded, use conservative illustrative defaults that are at or below backtest averages. The projector is a powerful engagement tool --- people who interact with it spend 3--5x longer on the page. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Section Header**

+-----------------------------------------------------------------------------------------------------------------------------------+
| **HEADER**                                                                                                                        |
|                                                                                                                                   |
| What Could This Mean for Your Portfolio?                                                                                          |
|                                                                                                                                   |
| Model your own scenario using real 2026 trade data from verified IB fills. Adjust portfolio size and see per-strategy breakdowns. |
+-----------------------------------------------------------------------------------------------------------------------------------+

**Default Values (Revised for Conservatism)**

When live data is not yet loaded, display these illustrative defaults:

  ----------------------------- ------------------------ ----------------------------------
  **Parameter**                 **Old Default**          **Revised Default**

  **Portfolio Size**            \$100,000                \$500,000

  **Strategy A Win Rate**       55%                      Use actual YTD

  **Strategy B Win Rate**       60%                      Use actual YTD

  **Strategy C Win Rate**       45%                      Use actual YTD

  **Strategy C Avg Win (R)**    3.00                     Use actual YTD

  **Fallback if no YTD data**   Aspirational estimates   Backtest averages (conservative)
  ----------------------------- ------------------------ ----------------------------------

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                  |
|                                                                                                                                                                                                                     |
| Change the default portfolio size to \$500,000 to match the founding member profile (\$500K+ liquid net worth). A prospect modeling with \$100K on a site targeting \$500K+ investors creates cognitive dissonance. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**CTA Below Projector**

+------------------------------------------------------------------------------------------------+
| **CTA**                                                                                        |
|                                                                                                |
| These projections use actual trade data. Past performance is not indicative of future results. |
|                                                                                                |
| \[Gold button\] Schedule Your Founding Member Consultation                                     |
|                                                                                                |
| \[Text link\] See how EPIG fits your Financial Freedom plan →                                  |
+------------------------------------------------------------------------------------------------+

**SECTION 9**

**Frequently Asked Questions (Inline)**

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                          |
| Implement as an accordion (collapsed by default, click to expand). Only the 7 most conversion-critical questions for a managed-money founding member. Strip all self-directed trader language (R-multiples, MES margin, "follow along"). |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q1: Is this real money?**

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                                               |
| Yes. Every number on this site comes from IB Flex Query exports --- standardized reports generated directly by Interactive Brokers. Each fill carries a unique TradeID. These are real executions in a real brokerage account, not backtests, paper trades, or hypotheticals. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q2: How can I verify the data?**

+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                      |
| We can provide the raw IB Flex Query CSV directly to you, or configure Interactive Brokers' third-party reporting to deliver brokerage statements straight to your email. No middleman, no edits, no possibility of manipulation. Just ask during your consultation. |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q3: How is my capital protected?**

+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                          |
| 85--99% of your capital is held in SPY, cash, or Treasury bills at all times. Active positions (futures and options) deploy only 1--5% of capital, each with predefined maximum loss. Circuit breaker protocols automatically shift the portfolio to a defensive posture if drawdown exceeds thresholds. There are no lockup periods --- your capital is accessible on any business day. |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q4: What happens in a 2008-style crash?**

+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| EPIG's design is specifically built for this scenario. When corrections exceed 10%, the core allocation shifts toward cash, avoiding the deep drawdowns that devastate buy-and-hold portfolios. In a backtested simulation of the 2008 financial crisis, EPIG's design avoided the -37% S&P drawdown entirely by moving to 0% market exposure. In the "Lost Decade" of 2000--2010, the design hypothetically compounded at 9.3% CAGR vs. the S&P's 0.4%. |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Important: These are backtested results, not live performance. Past performance does not guarantee future results.                                                                                                                                                                                                                                                                                                                                       |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q5: Who manages the portfolio?**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                       |
| Hiren Patel, Founder and Chief Investment Officer of Ekantik Capital Advisors. Hiren manages his own capital through this same strategy and executes all trades in Interactive Brokers. As a founding member, you have direct access to the person making every decision --- not a call center or a junior associate. |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q6: What does it cost?**

+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                       |
| EPIG is the core managed strategy within the Ekantik Capital Financial Freedom program. Founding members pay a flat annual fee that is locked forever --- it never increases regardless of how large your portfolio grows. Founding members also have a pathway to \$0 annual fees upon achieving their wealth goals. |
|                                                                                                                                                                                                                                                                                                                       |
| This is fundamentally different from the AUM-based fee model used by most advisors, where a 1% fee on a \$1M portfolio costs \$10,000/year and grows as your wealth grows.                                                                                                                                            |
|                                                                                                                                                                                                                                                                                                                       |
| Full pricing details are discussed during your founding member consultation.                                                                                                                                                                                                                                          |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Q7: How do I get started?**

+---------------------------------------------------------------------------------------------------------------------+
| **ANSWER**                                                                                                          |
|                                                                                                                     |
| 1\. Schedule your founding member consultation (30 minutes, no obligation).                                         |
|                                                                                                                     |
| 2\. We assess your current financial position, 10-year goals, and risk profile.                                     |
|                                                                                                                     |
| 3\. You receive a custom strategy presentation showing how EPIG and ECFS work together for your specific situation. |
|                                                                                                                     |
| 4\. Take 1--2 months to validate the approach. Ask any question. Review the live dashboard.                         |
|                                                                                                                     |
| 5\. When ready, we formalize the engagement and begin implementation.                                               |
|                                                                                                                     |
| Founding memberships are limited to 25. Once capacity is reached, this opportunity closes permanently.              |
+---------------------------------------------------------------------------------------------------------------------+

**SECTION 10**

**Final CTA Section**

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                |
|                                                                                                                                                                   |
| Full-width navy background. Centered text. This is the last thing a prospect sees before the footer. It must close with urgency, exclusivity, and a clear action. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **FINAL CTA BLOCK**                                                                                                                                                                                                                              |
|                                                                                                                                                                                                                                                  |
| SECTION HEADER:                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                  |
| This Opportunity Has a Capacity Limit.                                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                  |
| BODY:                                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                                  |
| EPIG is a managed strategy, not a product. Each founding member receives direct access to the portfolio manager, custom strategy integration, and lifetime benefits that cannot be replicated at scale. That is why membership is limited to 25. |
|                                                                                                                                                                                                                                                  |
| \[X\] of 25 founding memberships remaining.                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                                  |
| PRIMARY CTA:                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                  |
| \[Large gold button\] Schedule Your Founding Member Consultation                                                                                                                                                                                 |
|                                                                                                                                                                                                                                                  |
| https://calendly.com/hd-ekantikcapital/30min                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                  |
| SECONDARY:                                                                                                                                                                                                                                       |
|                                                                                                                                                                                                                                                  |
| \[Text link\] See the full Financial Freedom program → freedom.ekantikcapital.com                                                                                                                                                                |
|                                                                                                                                                                                                                                                  |
| TRUST BADGES:                                                                                                                                                                                                                                    |
|                                                                                                                                                                                                                                                  |
| 100% Fiduciary \| Flat Fee Locked Forever \| IB-Verified Performance \| No Lockup Periods                                                                                                                                                        |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 11**

**Footer (Revised)**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **FOOTER COPY**                                                                                                                                                                                                                      |
|                                                                                                                                                                                                                                      |
| Ekantik Capital Advisors LLC                                                                                                                                                                                                         |
|                                                                                                                                                                                                                                      |
| EPIG is a managed investment strategy within the Ekantik Capital Financial Freedom program. Designed for capital preservation, systematic income, and disciplined compounding with full transparency.                                |
|                                                                                                                                                                                                                                      |
| PLATFORM:                                                                                                                                                                                                                            |
|                                                                                                                                                                                                                                      |
| Live Dashboard \| Performance Projector                                                                                                                                                                                              |
|                                                                                                                                                                                                                                      |
| PROGRAM:                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                      |
| Financial Freedom Program (freedom.ekantikcapital.com) \| ECFS Cash Flow Strategy (cashflow.ekantikcapital.com)                                                                                                                      |
|                                                                                                                                                                                                                                      |
| LEGAL:                                                                                                                                                                                                                               |
|                                                                                                                                                                                                                                      |
| Disclosures \| Terms of Service \| Privacy Policy                                                                                                                                                                                    |
|                                                                                                                                                                                                                                      |
| CONNECT:                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                      |
| X (Twitter) \| Email: info@ekantikcapital.com                                                                                                                                                                                        |
|                                                                                                                                                                                                                                      |
| © 2026 Ekantik Capital Advisors LLC. All rights reserved.                                                                                                                                                                            |
|                                                                                                                                                                                                                                      |
| Past performance is not indicative of future results. All investing involves risk, including the potential loss of principal. EPIG is for informational and educational purposes only. Nothing herein constitutes investment advice. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **DEVELOPER NOTE**                                                                                                                                                            |
|                                                                                                                                                                               |
| Add cross-links to freedom.ekantikcapital.com and cashflow.ekantikcapital.com in the footer. This creates the connected ecosystem. Remove the Admin Console link permanently. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**SECTION 12**

**Disclosures Page (Revised)**

The existing disclosures page is adequate but should be expanded to include the managed-portfolio context. Add the following sections:

**Addition 1: Managed Strategy Disclosure**

+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **NEW DISCLOSURE**                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Managed Strategy                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                                                                                                                                                                                                                                                                                                                                           |
| EPIG is a managed investment strategy operated by Ekantik Capital Advisors LLC. When you become a founding member, your capital is deployed according to the EPIG methodology described on this site. All investment decisions are made by the portfolio manager. You retain full ownership of your assets, held in your own Interactive Brokers account. Ekantik Capital Advisors does not take custody of client funds. |
+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Addition 2: Founding Member Terms**

+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **NEW DISCLOSURE**                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                     |
| Founding Member Program                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                                                                                                                                                                                                                                                                                     |
| Founding member pricing, benefits, and capacity limitations described on this site and on freedom.ekantikcapital.com are subject to the terms of the founding member agreement executed at onboarding. Founding membership availability is limited and may be closed at the firm's discretion. Fee structures are locked at the rate in effect at the time of membership execution. |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Addition 3: Backtest vs. Live Performance**

+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| **NEW DISCLOSURE**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Backtested vs. Live Performance                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| This site presents both backtested (hypothetical) and live performance data. Backtested data (2000--2025) is identified as such and was developed with the benefit of hindsight. Live performance data (from \[start date\] onward) represents actual trades executed in a real Interactive Brokers account, verified via IB Flex Query execution reports. Backtested and live performance should not be conflated. Past performance, whether backtested or live, is not indicative of future results. |
+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**IMPLEMENTATION**

**Domain & Cross-Site Integration Notes**

**1. Domain Consolidation**

**Current issue:** The freedom site links to EPIG500.ekantikcapital.com, but the actual EPIG site is at epig.ekantikcapital.com. These may or may not be the same site.

**Action:** Decide on a single canonical domain for the EPIG strategy. Redirect the other. Recommendation: use epig.ekantikcapital.com as the canonical URL and redirect EPIG500.ekantikcapital.com to it.

**2. Freedom Site Cross-Link Update**

On freedom.ekantikcapital.com, the EPIG 500 section should be shortened to a concise overview (the concept, the backtest headline numbers, and 2--3 key differentiators) with a prominent link:

+-------------------------------------------------------------------------+
| **SUGGESTED LINK**                                                      |
|                                                                         |
| \[Gold button\] See Live Verified Performance → epig.ekantikcapital.com |
|                                                                         |
| Every trade. Every loss. Full transparency.                             |
+-------------------------------------------------------------------------+

This prevents the freedom site from duplicating the entire EPIG site in miniature and creates a natural traffic flow: Freedom (sales) → EPIG (proof) → Calendly (conversion).

**3. Consistent Strategy Description**

Both sites must use the same allocation percentages and CAGR targets. Recommended unified description:

  --------------------------------- ------------------------------------------
  **Element**                       **Unified Standard**

  **Core Allocation (Layer A)**     70--85% in SPY, blue chips, and cash

  **Tactical Overlay (Layer B)**    3--5% in S&P futures with defined stops

  **Asymmetric Sleeve (Layer C)**   3--5% in options during dislocations

  **Target CAGR**                   16%+ across full market cycles

  **Max Drawdown Target**           \<10% by design

  **Principal at Risk**             \<5% at any given time
  --------------------------------- ------------------------------------------

**4. Scarcity Integration**

Add a founding member seat counter to the EPIG site. This can be a simple static counter updated manually, or a shared value pulled from a common data source with the freedom site.

+-------------------------------------------------------------------------------------------------------------------+
| **FORMAT**                                                                                                        |
|                                                                                                                   |
| \[X\] of 25 founding memberships remaining                                                                        |
|                                                                                                                   |
| Display: top banner + final CTA section. Small, tasteful, not screaming. Gold text on navy or navy text on ivory. |
+-------------------------------------------------------------------------------------------------------------------+

**END OF SITE COPY DRAFT**

12 sections · Complete homepage + FAQ + disclosures + footer

Reframed for managed-portfolio founding members with \$500K+ liquid net worth

*All copy blocks are production-ready. Developer notes are implementation guidance.*

**Next step: Review, approve, and implement section by section.**

*Ready to begin coding any section on request.*
