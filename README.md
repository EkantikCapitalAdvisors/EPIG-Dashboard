# EPIG Investment Design

## Project Overview
- **Name**: EPIG Investment Design
- **Goal**: Deliver a production-ready foundation for EPIG's three-layer investment design platform with full transparency on every trade
- **Phase**: Phase 1 (Launch / MVP) — Manual Interactive Brokers Upload

## Live URLs
- **Preview**: https://3000-i7voyftqgp53si866nx8n-b32ec7bb.sandbox.novita.ai
- **Dashboard**: /dashboard
- **Calculator**: /calculator
- **API**: /api/dashboard/summary

## Completed Features

### Public Pages
| Route | Description |
|-------|-------------|
| `/` | Landing page with 9 sections: Hero, Structural Challenges, Audience Qualification, Coffee Cart Analogy, Three-Layer Design, Calculator Preview, Social Proof, Lead Capture, Pricing CTA |
| `/dashboard` | Public performance dashboard with 3 strategy tabs (A/B/C), KPI blocks, equity curves, drawdown charts, monthly returns heatmap, trade tables, rolling metrics |
| `/calculator` | Interactive 3-strategy calculator with sliders for portfolio modeling (illustrative only) |
| `/pricing` | Plans ($149/mo, $999/yr) with 60-day free trial, FAQ |
| `/how-it-works` | Methodology, data pipeline, strategy definitions, metric formulas, data verification, FAQ |
| `/updates` | Activity feed / changelog |
| `/disclosures` | Risk warnings and general disclosures |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

### Admin Pages
| Route | Description |
|-------|-------------|
| `/admin` | Operations console with IB Flex Query upload, allocation snapshot editor, audit trail |

### API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/dashboard/summary` | Full dashboard data for all 3 strategies |
| GET | `/api/dashboard/strategy/:id` | Per-strategy data with date range filter |
| POST | `/api/leads/subscribe` | Weekly digest email subscription |
| POST | `/api/admin/upload` | Trade file ingestion endpoint |

### Dashboard Features
- **Strategy A (Core Allocation)**: KPIs (Cumulative Return, CAGR, Max Drawdown, Sharpe, Sortino), allocation breakdown, equity curve with SPY benchmark toggle
- **Strategy B (Futures Alerts)**: All above plus Win Rate, Expectancy (Points), Profit Factor, Total Trades, Rolling 30D/90D metrics, trade table
- **Strategy C (Episodic Pivots)**: All above plus Expectancy (R), trade table with options-specific columns
- **Charts**: Equity curve (% with SPY overlay), Drawdown curve, Monthly returns heatmap
- **Date Range**: 30D, 90D, YTD, All selectors

### Calculator Features
- Portfolio size input
- Strategy A: SPY allocation slider (70-100%), Stock sleeve slider (0-25%), return assumption inputs
- Strategy B: Win rate slider, Avg Win/Loss (R), Trades/year, Risk per trade
- Strategy C: Same inputs as B with different defaults for asymmetric trades
- Combined output with visual breakdown bar chart
- EV per trade formula: Win% x AvgWin - (1-Win%) x AvgLoss

## Data Architecture
- **Demo Data**: Currently using generated demo data via API
- **Metrics Engine**: Deterministic computation of CAGR, Sharpe, Sortino, Max Drawdown, Win Rate, Expectancy, Profit Factor
- **Strategy Definitions**:
  - A: 70-100% SPY, 0-25% stock sleeve, remainder cash/treasuries
  - B: Defined-risk futures (20pt default stop/TP), tracked by Net Points/R
  - C: Asymmetric options, no default stops, tracked by Net R/$

## Design System
- **Theme**: Dark institutional UI matching dashboard.ekantikcapital.com
- **Colors**: bg #0a0e17, card #111827, border #1e293b, accent #3b82f6, green #10b981, red #ef4444, gold #f59e0b
- **Typography**: Inter (sans), JetBrains Mono (mono)
- **Components**: KPI cards, strategy tabs, chart containers, trade tables with win/loss badges
- **Framework**: Tailwind CSS via CDN

## Tech Stack
- **Backend**: Hono (TypeScript) on Cloudflare Pages
- **Frontend**: Tailwind CSS, Chart.js, FontAwesome (all CDN)
- **Build**: Vite + @hono/vite-build
- **Runtime**: Cloudflare Workers (edge)
- **Process Manager**: PM2

## Features Not Yet Implemented
- [ ] Cloudflare D1 database integration (schema designed, needs wrangler d1 create)
- [ ] Stripe subscription checkout (trial flow designed)
- [ ] Discord OAuth and role assignment
- [ ] Real IB Flex Query parsing (upload UI ready, parser needed)
- [ ] NextAuth authentication for admin
- [ ] Email drip sequence (Resend/SendGrid)
- [ ] Phase 2: Discord bot real-time ingestion
- [ ] Phase 2: Trade reconciliation (Discord vs IB)

## Recommended Next Steps
1. **Database**: Run `npx wrangler d1 create epig-production` and add migration files
2. **IB Parser**: Implement Flex Query XML/CSV parsing in upload endpoint
3. **Stripe**: Add Stripe checkout session creation for `/start-trial`
4. **Auth**: Add admin authentication via NextAuth or simple API key
5. **Deploy**: `npm run build && npx wrangler pages deploy dist`

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: Development (sandbox)
- **Tech Stack**: Hono + TypeScript + Tailwind CSS + Chart.js
- **Last Updated**: 2026-02-21
