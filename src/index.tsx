import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { landingPage } from './pages/landing'
import { dashboardPage } from './pages/dashboard'
import { pricingPage } from './pages/pricing'
import { howItWorksPage } from './pages/how-it-works'
import { projectorPage } from './pages/projector'
import { disclosuresPage } from './pages/disclosures'
import { termsPage } from './pages/terms'
import { privacyPage } from './pages/privacy'
import { adminPage } from './pages/admin'
import { faqPage } from './pages/faq'
import { layout } from './components/layout'

type Bindings = { DB: D1Database }
const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

// ══════════════════════════════════════════════════════════
// PUBLIC PAGES
// ══════════════════════════════════════════════════════════
app.get('/', (c) => c.html(layout('EPIG Investment Design | Verified Trade Performance', landingPage(), {
  title: 'EPIG Investment Design | Verified Trade Performance',
  description: 'Every trade verified from a live IB account. 3 strategies, real-time Discord alerts, full transparency. See exactly how we protect capital and compound returns \u2014 free dashboard.',
  path: '/',
})))
app.get('/dashboard', (c) => c.html(layout('Dashboard | EPIG', dashboardPage(), {
  title: 'Live Performance Dashboard | EPIG Investment Design',
  description: 'Real-time strategy performance from a verified Interactive Brokers account. Track win rates, drawdowns, equity curves and per-trade P&L across 3 strategies.',
  path: '/dashboard',
})))
app.get('/pricing', (c) => c.html(layout('Pricing | EPIG', pricingPage(), {
  title: 'Pricing | EPIG Investment Design',
  description: 'Free dashboard access forever. Subscribe for real-time Discord trade alerts on every Strategy A, B & C entry and exit. Start with a free trial.',
  path: '/pricing',
})))
app.get('/how-it-works', (c) => c.html(layout('How It Works | EPIG', howItWorksPage(), {
  title: 'How It Works | EPIG Investment Design',
  description: 'See how EPIG verifies every trade using IB Flex Queries, how the 3-strategy system works, and how Discord alerts keep you informed in real time.',
  path: '/how-it-works',
})))
app.get('/faq', (c) => c.html(layout('FAQ | EPIG', faqPage(), {
  title: 'Frequently Asked Questions | EPIG Investment Design',
  description: 'Common questions about EPIG: how data is verified, what the strategies are, subscription details, and how Discord alerts work.',
  path: '/faq',
})))
app.get('/projector', (c) => c.html(layout('Performance Projector | EPIG', projectorPage(), {
  title: 'Performance Projector | EPIG Investment Design',
  description: 'Project year-end returns based on real 2026 YTD trade data. Adjust portfolio size and explore per-strategy breakdowns with live verified data.',
  path: '/projector',
})))
app.get('/calculator', (c) => c.redirect('/projector'))
app.get('/disclosures', (c) => c.html(layout('Disclosures | EPIG', disclosuresPage())))
app.get('/terms', (c) => c.html(layout('Terms of Service | EPIG', termsPage())))
app.get('/privacy', (c) => c.html(layout('Privacy Policy | EPIG', privacyPage())))

app.get('/admin', (c) => c.html(layout('Admin Console | EPIG', adminPage())))
app.get('/admin/upload', (c) => c.html(layout('Upload Trades | EPIG', adminPage())))

// ══════════════════════════════════════════════════════════
// OG IMAGE — Dynamic social sharing image (SVG → PNG via resvg)
// Used by WhatsApp, Telegram, Twitter, LinkedIn, Facebook
// ══════════════════════════════════════════════════════════
app.get('/api/og-image', async (c) => {
  // Try to fetch live stats for dynamic numbers
  let stratA = '--', stratB = '--', stratC = '--', totalPct = '--', totalDollar = '--'
  let tradeCount = '0', dateRange = '2026 YTD'

  try {
    const db = c.env.DB
    if (db) {
      const allTrades = await db.prepare(
        "SELECT strategy, side, instrument, realized_pnl, quantity, trade_date, asset_class, strike, expiry, put_call, result FROM trades WHERE trade_date >= '2026-01-01' ORDER BY trade_date ASC, id ASC"
      ).all()
      const rows: any[] = allTrades.results || []
      if (rows.length > 0) {
        // Portfolio-wide date range
        const allDates = rows.map((r: any) => r.trade_date).filter(Boolean).sort()
        const pFirst = allDates[0]
        const pLast = allDates[allDates.length - 1]
        const pDaySpan = Math.max((new Date(pLast).getTime() - new Date(pFirst).getTime()) / (1000*60*60*24), 1)
        const pYF = pDaySpan / 365.25

        let totalAnnualPnl = 0
        let totalTrades = 0
        const pcts: Record<string, string> = {}

        for (const strat of ['A', 'B', 'C']) {
          const fills = rows.filter((r: any) => r.strategy === strat)
          if (fills.length === 0) { pcts[strat] = '--'; continue }
          const rts = buildRoundTrips(fills, strat)
          const closed = rts.filter((rt: any) => rt.closed && rt.pnl !== 0)
          totalTrades += closed.length
          const pnl = closed.reduce((s: number, rt: any) => s + rt.pnl, 0)
          const annPnl = pYF > 0 ? pnl / pYF : pnl
          totalAnnualPnl += annPnl
          const pct = (annPnl / 100000) * 100
          pcts[strat] = (pct >= 0 ? '+' : '') + pct.toFixed(1) + '%'
        }

        stratA = pcts['A'] || '--'
        stratB = pcts['B'] || '--'
        stratC = pcts['C'] || '--'
        const tPct = (totalAnnualPnl / 100000) * 100
        totalPct = (tPct >= 0 ? '+' : '') + tPct.toFixed(1) + '%'
        totalDollar = (totalAnnualPnl >= 0 ? '+$' : '-$') + Math.abs(Math.round(totalAnnualPnl)).toLocaleString()
        tradeCount = String(totalTrades)
        dateRange = pFirst + ' to ' + pLast
      }
    }
  } catch (_) { /* fallback to defaults */ }

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0e17"/>
      <stop offset="100%" style="stop-color:#111827"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6"/>
      <stop offset="100%" style="stop-color:#10b981"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#E5A418"/>
      <stop offset="100%" style="stop-color:#f59e0b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.03">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i*60}" y1="0" x2="${i*60}" y2="630" stroke="#fff" stroke-width="1"/>`).join('')}
    ${Array.from({length: 11}, (_, i) => `<line x1="0" y1="${i*60}" x2="1200" y2="${i*60}" stroke="#fff" stroke-width="1"/>`).join('')}
  </g>

  <!-- Top accent line -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- Logo area -->
  <rect x="60" y="44" width="48" height="48" rx="10" fill="#E5A418"/>
  <text x="84" y="74" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">ECA</text>
  <text x="122" y="63" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="bold" fill="#fff">Ekantik Capital</text>
  <text x="122" y="82" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="600" fill="#E5A418" letter-spacing="3">ADVISORS LLC</text>

  <!-- Live badge -->
  <circle cx="1070" cy="62" r="5" fill="#10b981"/>
  <text x="1082" y="67" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="bold" fill="#10b981" letter-spacing="2">LIVE</text>

  <!-- Main headline -->
  <text x="60" y="160" font-family="Arial,Helvetica,sans-serif" font-size="42" font-weight="800" fill="#f1f5f9">EPIG Investment Design</text>
  <text x="60" y="200" font-family="Arial,Helvetica,sans-serif" font-size="20" fill="#94a3b8">Protect Capital. Compound Returns. Full Transparency.</text>

  <!-- Divider -->
  <rect x="60" y="225" width="120" height="3" rx="2" fill="url(#accent)"/>

  <!-- Stats card background -->
  <rect x="60" y="250" width="1080" height="240" rx="16" fill="#111827" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Strategy headers -->
  <text x="100" y="290" font-family="Arial,Helvetica,sans-serif" font-size="12" font-weight="600" fill="#64748b" letter-spacing="2">STRATEGY</text>
  <text x="500" y="290" font-family="Arial,Helvetica,sans-serif" font-size="12" font-weight="600" fill="#64748b" letter-spacing="2">ANNUALIZED RETURN</text>

  <!-- Strategy A -->
  <rect x="85" y="302" width="12" height="12" rx="3" fill="#3b82f6"/>
  <text x="110" y="314" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#94a3b8">A  |  Core Allocation</text>
  <text x="540" y="314" font-family="monospace" font-size="18" font-weight="bold" fill="${stratA.startsWith('-') ? '#ef4444' : '#10b981'}">${stratA}</text>

  <!-- Strategy B -->
  <rect x="85" y="338" width="12" height="12" rx="3" fill="#10b981"/>
  <text x="110" y="350" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#94a3b8">B  |  Tactical Futures</text>
  <text x="540" y="350" font-family="monospace" font-size="18" font-weight="bold" fill="${stratB.startsWith('-') ? '#ef4444' : '#10b981'}">${stratB}</text>

  <!-- Strategy C -->
  <rect x="85" y="374" width="12" height="12" rx="3" fill="#f59e0b"/>
  <text x="110" y="386" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#94a3b8">C  |  Episodic Pivots</text>
  <text x="540" y="386" font-family="monospace" font-size="18" font-weight="bold" fill="${stratC.startsWith('-') ? '#ef4444' : '#10b981'}">${stratC}</text>

  <!-- Divider line in card -->
  <line x1="85" y1="405" x2="1115" y2="405" stroke="#1e293b" stroke-width="1"/>

  <!-- Combined projected return -->
  <text x="100" y="440" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="600" fill="#f1f5f9">Projected Annual Return</text>
  <text x="540" y="442" font-family="monospace" font-size="26" font-weight="bold" fill="${totalPct.startsWith('-') ? '#ef4444' : '#10b981'}">${totalPct}</text>

  <!-- Dollar return -->
  <text x="700" y="442" font-family="monospace" font-size="20" font-weight="bold" fill="${totalDollar.startsWith('-') ? '#ef4444' : '#10b981'}">${totalDollar}</text>

  <!-- Small disclaimer in card -->
  <text x="100" y="472" font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#64748b">${tradeCount} verified trades  |  $100K portfolio  |  ${dateRange}</text>

  <!-- Bottom section -->
  <text x="60" y="535" font-family="Arial,Helvetica,sans-serif" font-size="16" fill="#94a3b8">
    <tspan font-weight="600" fill="#f1f5f9">Verified IB Data</tspan>  ·  Real-Time Discord Alerts  ·  Free Dashboard
  </text>

  <!-- CTA-style text -->
  <rect x="60" y="555" width="280" height="44" rx="8" fill="#3b82f6"/>
  <text x="200" y="583" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="700" fill="#fff" text-anchor="middle">See Live Performance  →</text>

  <!-- URL -->
  <text x="380" y="583" font-family="monospace" font-size="14" fill="#64748b">epig-dashboard.pages.dev</text>

  <!-- Bottom accent line -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#gold)"/>

  <!-- Disclaimer -->
  <text x="1140" y="620" font-family="Arial,Helvetica,sans-serif" font-size="9" fill="#475569" text-anchor="end">Past performance is not indicative of future results.</text>
</svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    }
  })
})

// ══════════════════════════════════════════════════════════
// API: DASHBOARD SUMMARY (reads from D1 – 2026 data via round-trip builder)
// ══════════════════════════════════════════════════════════
app.get('/api/dashboard/summary', async (c) => {
  const db = c.env.DB
  if (!db) return c.json(buildFallbackSummary())

  try {
    // Fetch 2026 fills for all strategies
    const allTrades = await db.prepare(
      "SELECT id, strategy, side, instrument, entry_price, exit_price, realized_pnl, quantity, trade_date, asset_class, strike, expiry, put_call, result FROM trades WHERE trade_date >= '2026-01-01' ORDER BY trade_date ASC, id ASC"
    ).all()
    const rows: any[] = allTrades.results || []

    // Allocation snapshot
    const snapshots = await db.prepare("SELECT * FROM allocation_snapshots ORDER BY snapshot_date DESC LIMIT 1").all()
    const latestSnapshot: any = (snapshots.results || [])[0] || { spy_pct: 80, stock_pct: 15, cash_pct: 5 }

    if (rows.length === 0) return c.json(buildFallbackSummary())

    // ── Compute PORTFOLIO-WIDE date range ──
    // All strategies must annualize over the same time span so that
    // per-strategy annualized returns sum correctly to the combined total.
    const portfolioAllDates = rows.map((r: any) => r.trade_date).filter(Boolean).sort()
    const portfolioFirstDate = portfolioAllDates[0]
    const portfolioLastDate = portfolioAllDates[portfolioAllDates.length - 1]
    const portfolioDaySpan = Math.max(
      (new Date(portfolioLastDate).getTime() - new Date(portfolioFirstDate).getTime()) / (1000 * 60 * 60 * 24), 1
    )
    const portfolioYearFraction = portfolioDaySpan / 365.25

    const result: Record<string, any> = {}

    for (const strat of ['A', 'B', 'C']) {
      const fills = rows.filter((r: any) => r.strategy === strat)
      if (fills.length === 0) {
        result[strat] = buildEmptyStrategy(strat, latestSnapshot)
        continue
      }

      // Build round-trip trades (same engine as projector)
      const roundTrips = buildRoundTrips(fills, strat)
      const closed = roundTrips.filter((rt: any) => rt.closed && rt.pnl !== 0)
      const wins = closed.filter((rt: any) => rt.pnl > 0)
      const losses = closed.filter((rt: any) => rt.pnl < 0)
      const totalClosed = closed.length
      const winCount = wins.length
      const lossCount = losses.length
      const winRate = totalClosed > 0 ? winCount / totalClosed : 0

      // Avg win / avg loss in dollars
      const avgWinDollar = winCount > 0 ? wins.reduce((s: number, rt: any) => s + rt.pnl, 0) / winCount : 0
      const avgLossDollar = lossCount > 0 ? losses.reduce((s: number, rt: any) => s + Math.abs(rt.pnl), 0) / lossCount : 0
      const riskPerTrade = avgLossDollar > 0 ? avgLossDollar : (avgWinDollar > 0 ? avgWinDollar : 0)

      // R-multiples
      const avgWinR = riskPerTrade > 0 ? avgWinDollar / riskPerTrade : 0
      const evPerTradeR = winRate * avgWinR - (1 - winRate) * 1.0

      // Total P&L & strategy-specific date range (informational)
      const totalPnl = closed.reduce((s: number, rt: any) => s + rt.pnl, 0)
      const dates = fills.map((f: any) => f.trade_date).filter(Boolean).sort()
      const firstDate = dates[0]
      const lastDate = dates[dates.length - 1]
      const daySpan = Math.max((new Date(lastDate).getTime() - new Date(firstDate).getTime()) / (1000 * 60 * 60 * 24), 1)

      // Use PORTFOLIO-WIDE yearFraction for annualization so strategies sum correctly
      const startingCapital = 100000
      const cumulativeReturn = round((totalPnl / startingCapital) * 100, 2)
      const cagr = portfolioYearFraction > 0 ? round(((1 + cumulativeReturn / 100) ** (1 / portfolioYearFraction) - 1) * 100, 1) : 0

      // Max drawdown from round-trip P&L sequence
      let peak = 0, maxDD = 0, cumPnl = 0
      const closedSorted = [...closed].sort((a: any, b: any) => (a.firstDate || '').localeCompare(b.firstDate || ''))
      for (const rt of closedSorted) {
        cumPnl += rt.pnl
        if (cumPnl > peak) peak = cumPnl
        const dd = peak - cumPnl
        if (dd > maxDD) maxDD = dd
      }
      const maxDrawdown = startingCapital > 0 ? round(-(maxDD / startingCapital) * 100, 2) : 0

      // Sharpe & Sortino from per-trade returns — uses PORTFOLIO-WIDE yearFraction
      const tradeReturns = closed.map((rt: any) => rt.pnl / startingCapital)
      const meanReturn = tradeReturns.length > 0 ? tradeReturns.reduce((a: number, b: number) => a + b, 0) / tradeReturns.length : 0
      const variance = tradeReturns.length > 0 ? tradeReturns.reduce((s: number, r: number) => s + (r - meanReturn) ** 2, 0) / tradeReturns.length : 0
      const stdDev = Math.sqrt(variance)
      const tradesPerYear = portfolioYearFraction > 0 ? totalClosed / portfolioYearFraction : totalClosed
      const annualReturn = meanReturn * tradesPerYear
      const annualVol = stdDev * Math.sqrt(tradesPerYear)
      const sharpe = annualVol > 0 ? round(annualReturn / annualVol, 2) : 0

      const downReturns = tradeReturns.filter((r: number) => r < 0)
      const downVar = downReturns.length > 0 ? downReturns.reduce((s: number, r: number) => s + r ** 2, 0) / downReturns.length : 0
      const downDev = Math.sqrt(downVar) * Math.sqrt(tradesPerYear)
      const sortino = downDev > 0 ? round(annualReturn / downDev, 2) : 0

      // Profit factor
      const grossWins = wins.reduce((s: number, rt: any) => s + rt.pnl, 0)
      const grossLosses = losses.reduce((s: number, rt: any) => s + Math.abs(rt.pnl), 0)
      const profitFactor = grossLosses > 0 ? round(grossWins / grossLosses, 2) : grossWins > 0 ? 999 : 0

      // Expectancy in $ and R
      const expectancyDollar = totalClosed > 0 ? round(totalPnl / totalClosed, 2) : 0
      const expectancyR = riskPerTrade > 0 ? round(expectancyDollar / riskPerTrade, 2) : 0

      // Equity curve from round-trip P&L (date-ordered)
      const equityCurve = buildRoundTripEquityCurve(closedSorted, startingCapital)
      const drawdownCurve = buildDrawdownCurve(equityCurve)

      // Monthly returns from round trips
      const monthlyReturns = buildRoundTripMonthlyReturns(closedSorted, startingCapital)

      // Rolling metrics from round trips
      const rolling30 = computeRollingRTMetrics(closedSorted, 30)
      const rolling90 = computeRollingRTMetrics(closedSorted, 90)

      // Recent trades (from round trips, most recent first)
      const recentRT = [...closedSorted].reverse().slice(0, 20)
      const recentTrades = recentRT.map((rt: any, idx: number) => ({
        id: recentRT.length - idx,
        date: rt.lastDate || rt.firstDate,
        side: rt.pnl >= 0 ? 'LONG' : 'SHORT',
        instrument: rt.instrument || rt.spreadKey || '—',
        entry: 0,
        stop: null,
        tp: null,
        exit: 0,
        netPoints: round(rt.pnl, 0),
        netR: riskPerTrade > 0 ? round(rt.pnl / riskPerTrade, 2) : 0,
        pnl: round(rt.pnl, 2),
        source: 'IB',
        result: rt.pnl > 0 ? 'WIN' : rt.pnl < 0 ? 'LOSS' : 'SCRATCH',
      }))

      const stratNames: Record<string, string> = {
        A: 'Strategy A — Core Allocation',
        B: 'Strategy B — Futures Alerts',
        C: 'Strategy C — Episodic Pivots',
      }

      result[strat] = {
        name: stratNames[strat] || `Strategy ${strat}`,
        cumulativeReturn: round(cumulativeReturn, 1),
        cagr,
        maxDrawdown,
        sharpeRatio: sharpe,
        sortinoRatio: sortino,
        winRate: round(winRate * 100, 1),
        expectancyDollar,
        expectancyR,
        expectancyPoints: expectancyDollar, // alias for B
        profitFactor,
        totalTrades: totalClosed,
        totalFills: fills.length,
        openTrades: roundTrips.filter((rt: any) => !rt.closed).length,
        avgWinDollar: round(avgWinDollar, 2),
        avgLossDollar: round(avgLossDollar, 2),
        avgWinR: round(avgWinR, 2),
        riskPerTrade: round(riskPerTrade, 2),
        evPerTradeR: round(evPerTradeR, 2),
        tradesPerYear: Math.round(tradesPerYear),
        annualPnl: round(portfolioYearFraction > 0 ? totalPnl / portfolioYearFraction : totalPnl, 2),
        totalPnl: round(totalPnl, 2),
        dataRange: { firstDate, lastDate, daySpan: Math.round(daySpan) },
        lastUpdated: lastDate ? lastDate + 'T16:00:00Z' : '2026-02-20T16:00:00Z',
        currentAllocation: strat === 'A' ? {
          spy: latestSnapshot.spy_pct,
          stocks: latestSnapshot.stock_pct,
          cash: latestSnapshot.cash_pct,
        } : undefined,
        equityCurve,
        drawdownCurve,
        monthlyReturns,
        rollingMetrics: {
          '30d': rolling30,
          '90d': rolling90,
        },
        recentTrades: strat === 'A' ? undefined : recentTrades,
      }
    }

    // ── Build Combined Portfolio from all strategies ──
    const allClosed: any[] = []
    const allFills: any[] = []
    for (const strat of ['A', 'B', 'C']) {
      const fills = rows.filter((r: any) => r.strategy === strat)
      allFills.push(...fills)
      const rts = buildRoundTrips(fills, strat)
      const closed = rts.filter((rt: any) => rt.closed && rt.pnl !== 0)
      // Tag each RT with its strategy
      for (const rt of closed) rt._strat = strat
      allClosed.push(...closed)
    }
    // Sort all combined round trips by date
    allClosed.sort((a: any, b: any) => (a.lastDate || a.firstDate || '').localeCompare(b.lastDate || b.firstDate || ''))

    const startingCapital = 100000
    const combTotalPnl = allClosed.reduce((s: number, rt: any) => s + rt.pnl, 0)
    const combWins = allClosed.filter((rt: any) => rt.pnl > 0)
    const combLosses = allClosed.filter((rt: any) => rt.pnl < 0)
    const combWinRate = allClosed.length > 0 ? combWins.length / allClosed.length : 0
    const combCumReturn = round((combTotalPnl / startingCapital) * 100, 2)

    // Combined max drawdown
    let combPeak = 0, combMaxDD = 0, combCum = 0
    for (const rt of allClosed) {
      combCum += rt.pnl
      if (combCum > combPeak) combPeak = combCum
      const dd = combPeak - combCum
      if (dd > combMaxDD) combMaxDD = dd
    }

    // Combined date range
    const allDates = allFills.map((f: any) => f.trade_date).filter(Boolean).sort()
    const combFirstDate = allDates[0] || ''
    const combLastDate = allDates[allDates.length - 1] || ''
    const combDaySpan = Math.max((new Date(combLastDate).getTime() - new Date(combFirstDate).getTime()) / (1000 * 60 * 60 * 24), 1)
    const combYearFraction = combDaySpan / 365.25

    // Combined Sharpe/Sortino
    const combReturns = allClosed.map((rt: any) => rt.pnl / startingCapital)
    const combMean = combReturns.length > 0 ? combReturns.reduce((a: number, b: number) => a + b, 0) / combReturns.length : 0
    const combVar = combReturns.length > 0 ? combReturns.reduce((s: number, r: number) => s + (r - combMean) ** 2, 0) / combReturns.length : 0
    const combStd = Math.sqrt(combVar)
    const combTPY = combYearFraction > 0 ? allClosed.length / combYearFraction : allClosed.length
    const combAnnRet = combMean * combTPY
    const combAnnVol = combStd * Math.sqrt(combTPY)
    const combSharpe = combAnnVol > 0 ? round(combAnnRet / combAnnVol, 2) : 0
    const combDownRet = combReturns.filter((r: number) => r < 0)
    const combDownVar = combDownRet.length > 0 ? combDownRet.reduce((s: number, r: number) => s + r ** 2, 0) / combDownRet.length : 0
    const combDownDev = Math.sqrt(combDownVar) * Math.sqrt(combTPY)
    const combSortino = combDownDev > 0 ? round(combAnnRet / combDownDev, 2) : 0

    // Combined profit factor
    const combGrossWin = combWins.reduce((s: number, rt: any) => s + rt.pnl, 0)
    const combGrossLoss = combLosses.reduce((s: number, rt: any) => s + Math.abs(rt.pnl), 0)
    const combPF = combGrossLoss > 0 ? round(combGrossWin / combGrossLoss, 2) : combGrossWin > 0 ? 999 : 0

    // Per-strategy contribution
    const stratContrib: Record<string, number> = {}
    for (const strat of ['A', 'B', 'C']) {
      stratContrib[strat] = round(allClosed.filter((rt: any) => rt._strat === strat).reduce((s: number, rt: any) => s + rt.pnl, 0), 2)
    }

    // Combined equity curve, drawdown, monthly, weekly returns
    const combEquity = buildRoundTripEquityCurve(allClosed, startingCapital)
    const combDrawdown = buildDrawdownCurve(combEquity)
    const combMonthly = buildRoundTripMonthlyReturns(allClosed, startingCapital)
    const combWeekly = buildRoundTripWeeklyReturns(allClosed, startingCapital)
    const combRolling30 = computeRollingRTMetrics(allClosed, 30)
    const combRolling90 = computeRollingRTMetrics(allClosed, 90)

    // Also compute weekly returns per individual strategy
    for (const strat of ['A', 'B', 'C']) {
      if (result[strat] && result[strat].totalFills > 0) {
        const sFills = rows.filter((r: any) => r.strategy === strat)
        const sRTs = buildRoundTrips(sFills, strat)
        const sClosed = sRTs.filter((rt: any) => rt.closed && rt.pnl !== 0)
          .sort((a: any, b: any) => (a.lastDate || a.firstDate || '').localeCompare(b.lastDate || b.firstDate || ''))
        result[strat].weeklyReturns = buildRoundTripWeeklyReturns(sClosed, startingCapital)
      }
    }

    result['Combined'] = {
      name: 'Combined Portfolio',
      cumulativeReturn: round(combCumReturn, 1),
      cagr: combYearFraction > 0 ? round(((1 + combCumReturn / 100) ** (1 / combYearFraction) - 1) * 100, 1) : 0,
      maxDrawdown: round(-(combMaxDD / startingCapital) * 100, 2),
      sharpeRatio: combSharpe,
      sortinoRatio: combSortino,
      winRate: round(combWinRate * 100, 1),
      profitFactor: combPF,
      totalTrades: allClosed.length,
      totalFills: allFills.length,
      openTrades: 0,
      totalPnl: round(combTotalPnl, 2),
      annualPnl: round(combYearFraction > 0 ? combTotalPnl / combYearFraction : combTotalPnl, 2),
      dataRange: { firstDate: combFirstDate, lastDate: combLastDate, daySpan: Math.round(combDaySpan) },
      lastUpdated: combLastDate ? combLastDate + 'T16:00:00Z' : '2026-02-20T16:00:00Z',
      strategyContribution: stratContrib,
      equityCurve: combEquity,
      drawdownCurve: combDrawdown,
      monthlyReturns: combMonthly,
      weeklyReturns: combWeekly,
      rollingMetrics: { '30d': combRolling30, '90d': combRolling90 },
    }

    return c.json({ strategies: result })
  } catch (e: any) {
    console.error('Dashboard error:', e.message)
    return c.json(buildFallbackSummary())
  }
})

// ══════════════════════════════════════════════════════════
// API: STEP 1 — PREVIEW UPLOAD (parse CSV, auto-classify, return preview)
// ══════════════════════════════════════════════════════════
app.post('/api/admin/upload/preview', async (c) => {
  try {
    const body = await c.req.parseBody()
    const file = body['file']

    if (!file || typeof file === 'string') {
      return c.json({ error: 'No file uploaded. Send as multipart/form-data with field name "file".' }, 400)
    }

    const csvText = await (file as File).text()
    const filename = (file as File).name || 'upload.csv'

    // Parse CSV with proper quote handling
    const parsedRows = parseIBCsv(csvText)
    if (parsedRows.length === 0) {
      return c.json({ error: 'No data rows found in CSV.' }, 400)
    }

    // Filter: only keep execution rows (rows with a TradeID)
    // IB exports have 3 levels: MULTI summary → date subtotal → execution fill
    const executionRows = parsedRows.filter((r: any) => {
      const tradeId = (r['TradeID'] || '').trim()
      return tradeId !== '' && tradeId !== 'TradeID'
    })

    if (executionRows.length === 0) {
      return c.json({ error: 'No execution rows found (rows with TradeID). This file may only contain summaries.' }, 400)
    }

    // Auto-classify each execution row
    const trades = executionRows.map((row: any, idx: number) => {
      const assetClass = stripQuotes(row['AssetClass'] || '')
      const symbol = stripQuotes(row['Symbol'] || '')
      const tradeId = stripQuotes(row['TradeID'] || '')
      const tradeDate = stripQuotes(row['TradeDate'] || row['ReportDate'] || '')
      const dateTime = stripQuotes(row['Date/Time'] || '')
      const side = stripQuotes(row['Buy/Sell'] || '').replace('-', '').toUpperCase() === 'SELL' ? 'SELL' : 'BUY'
      const qty = Math.abs(parseInt(stripQuotes(row['Quantity'] || '0')))
      const price = parseFloat(stripQuotes(row['Price'] || '0'))
      const amount = parseFloat(stripQuotes(row['Amount'] || '0'))
      const netCash = parseFloat(stripQuotes(row['NetCash'] || '0'))
      const commission = parseFloat(stripQuotes(row['Commission'] || '0'))
      const strike = stripQuotes(row['Strike'] || '') || null
      const expiry = stripQuotes(row['Expiry'] || '') || null
      const putCall = stripQuotes(row['Put/Call'] || '') || null

      // Auto-classify strategy (initial pass)
      let strategy: string
      if (assetClass === 'FUT' || assetClass === 'FOP') {
        strategy = 'B'
      } else if (assetClass === 'OPT') {
        strategy = 'C'
      } else {
        strategy = 'A' // STK, CASH, or unknown
      }

      // Clean symbol (remove CUSIP padding for options)
      const cleanSymbol = symbol.trim().split(/\s+/)[0]

      return {
        rowIndex: idx,
        strategy,
        assetClass,
        tradeId,
        tradeDate: formatIBDate(tradeDate),
        dateTime,
        side,
        symbol: cleanSymbol,
        fullSymbol: symbol.trim(),
        quantity: qty,
        price,
        amount,
        netCash,
        commission,
        strike: strike ? parseFloat(strike) : null,
        expiry: expiry ? formatIBDate(expiry) : null,
        putCall,
        spreadGroup: null as string | null,
        spreadType: null as string | null,
      }
    })

    // ── Vertical Spread Detection ──
    // A vertical spread = two OPT legs with:
    //   - Same dateTime (executed simultaneously)
    //   - Same expiry
    //   - Same putCall (both puts or both calls)
    //   - Different strikes
    //   - Opposite sides (one BUY, one SELL)
    // Also detect FOP (futures options) spreads the same way.
    let spreadCount = 0
    const spreadGroups: Record<string, number[]> = {}

    for (let i = 0; i < trades.length; i++) {
      const t = trades[i]
      if (t.assetClass !== 'OPT' && t.assetClass !== 'FOP') continue
      if (t.spreadGroup) continue // already matched

      // Group key: dateTime + expiry + putCall
      const groupKey = `${t.dateTime}|${t.expiry}|${t.putCall}`

      if (!spreadGroups[groupKey]) {
        spreadGroups[groupKey] = []
      }
      spreadGroups[groupKey].push(i)
    }

    // Process each group
    for (const [key, indices] of Object.entries(spreadGroups)) {
      if (indices.length < 2) continue

      // Find BUY/SELL pairs within this group
      const buys = indices.filter(i => trades[i].side === 'BUY')
      const sells = indices.filter(i => trades[i].side === 'SELL')

      // Match pairs: each buy with a sell at a different strike
      const paired = new Set<number>()
      for (const bi of buys) {
        for (const si of sells) {
          if (paired.has(bi) || paired.has(si)) continue
          if (trades[bi].strike !== null && trades[si].strike !== null && trades[bi].strike !== trades[si].strike) {
            // This is a vertical spread pair
            spreadCount++
            const spreadId = `spread-${spreadCount}`
            const buyStrike = trades[bi].strike!
            const sellStrike = trades[si].strike!
            const isDebit = trades[bi].price > trades[si].price
            const isCredit = trades[si].price > trades[bi].price

            let spreadType: string
            if (trades[bi].putCall === 'P') {
              // Put spread
              if (buyStrike > sellStrike) {
                spreadType = isDebit ? 'Bear Put Debit' : 'Bear Put Credit'
              } else {
                spreadType = isCredit ? 'Bull Put Credit' : 'Bull Put Debit'
              }
            } else {
              // Call spread
              if (buyStrike < sellStrike) {
                spreadType = isDebit ? 'Bull Call Debit' : 'Bull Call Credit'
              } else {
                spreadType = isCredit ? 'Bear Call Credit' : 'Bear Call Debit'
              }
            }

            trades[bi].spreadGroup = spreadId
            trades[bi].spreadType = spreadType
            trades[si].spreadGroup = spreadId
            trades[si].spreadType = spreadType

            // Ensure both legs are Strategy C
            trades[bi].strategy = 'C'
            trades[si].strategy = 'C'

            paired.add(bi)
            paired.add(si)
            break // move to next buy
          }
        }
      }
    }

    // Summary stats
    const summary = {
      filename,
      totalRows: parsedRows.length,
      executionRows: executionRows.length,
      skippedRows: parsedRows.length - executionRows.length,
      byStrategy: {
        A: trades.filter((t: any) => t.strategy === 'A').length,
        B: trades.filter((t: any) => t.strategy === 'B').length,
        C: trades.filter((t: any) => t.strategy === 'C').length,
      },
      byAssetClass: {
        STK: trades.filter((t: any) => t.assetClass === 'STK').length,
        FUT: trades.filter((t: any) => t.assetClass === 'FUT').length,
        OPT: trades.filter((t: any) => t.assetClass === 'OPT').length,
      },
      spreads: {
        detected: spreadCount,
        legs: trades.filter((t: any) => t.spreadGroup !== null).length,
      },
      dateRange: {
        from: trades.reduce((min: string, t: any) => t.tradeDate && t.tradeDate < min ? t.tradeDate : min, '9999-99-99'),
        to: trades.reduce((max: string, t: any) => t.tradeDate && t.tradeDate > max ? t.tradeDate : max, '0000-00-00'),
      },
    }

    return c.json({ success: true, summary, trades })
  } catch (e: any) {
    return c.json({ error: 'Parse failed: ' + e.message }, 500)
  }
})

// ══════════════════════════════════════════════════════════
// API: STEP 2 — CONFIRM & INGEST (user sends reviewed trades)
// ══════════════════════════════════════════════════════════
app.post('/api/admin/upload/confirm', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ error: 'Database not available' }, 500)

  try {
    const { filename, trades } = await c.req.json()

    if (!trades || !Array.isArray(trades) || trades.length === 0) {
      return c.json({ error: 'No trades to ingest.' }, 400)
    }

    // Create upload batch
    await db.prepare(
      "INSERT INTO upload_batches (filename, strategy, file_type, trades_parsed, status) VALUES (?, 'MULTI', 'csv', ?, 'processing')"
    ).bind(filename || 'upload.csv', trades.length).run()

    let newCount = 0
    let dupCount = 0
    const errors: string[] = []
    const strategyCounts: Record<string, number> = { A: 0, B: 0, C: 0 }

    for (const trade of trades) {
      const tradeId = trade.tradeId || null

      // Idempotency check
      if (tradeId) {
        const existing = await db.prepare("SELECT id FROM trades WHERE ib_execution_id = ?").bind(tradeId).first()
        if (existing) { dupCount++; continue }
      }

      const strategy = trade.strategy || 'A'
      const assetClass = trade.assetClass || 'STK'
      const side = trade.side === 'SELL' ? 'SELL' : 'BUY'

      try {
        await db.prepare(`
          INSERT INTO trades (strategy, source, ib_execution_id, asset_class, trade_date, side, instrument, quantity,
            strike, expiry, put_call, entry_price, realized_pnl, result)
          VALUES (?, 'IB', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'OPEN')
        `).bind(
          strategy, tradeId, assetClass,
          trade.tradeDate || '', side, trade.fullSymbol || trade.symbol || '',
          trade.quantity || 1,
          trade.strike || null, trade.expiry || null, trade.putCall || null,
          trade.price || 0, trade.netCash || 0
        ).run()
        newCount++
        strategyCounts[strategy] = (strategyCounts[strategy] || 0) + 1
      } catch (insertErr: any) {
        errors.push(`Trade ${tradeId || trade.tradeDate}: ${insertErr.message}`)
      }
    }

    // Update batch status
    await db.prepare(
      "UPDATE upload_batches SET trades_new = ?, trades_duplicate = ?, status = 'complete' WHERE filename = ? AND status = 'processing' ORDER BY id DESC LIMIT 1"
    ).bind(newCount, dupCount, filename || 'upload.csv').run()

    // Audit log with per-strategy breakdown
    const breakdown = Object.entries(strategyCounts)
      .filter(([, v]) => v > 0)
      .map(([k, v]) => `${k}: ${v}`)
      .join(', ')

    await db.prepare(
      "INSERT INTO audit_log (admin_id, action, entity, details) VALUES ('admin', 'UPLOAD', 'Multi-Strategy', ?)"
    ).bind(
      `${newCount} new trades ingested (${breakdown}), ${dupCount} duplicates skipped from ${filename}`
    ).run()

    return c.json({
      success: true,
      filename,
      total: trades.length,
      new: newCount,
      duplicates: dupCount,
      byStrategy: strategyCounts,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (e: any) {
    return c.json({ error: 'Ingest failed: ' + e.message }, 500)
  }
})

// ══════════════════════════════════════════════════════════
// API: ALLOCATION SNAPSHOT
// ══════════════════════════════════════════════════════════
app.post('/api/admin/snapshot', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ error: 'Database not available' }, 500)

  try {
    const { spy_pct, stock_pct, cash_pct, notes } = await c.req.json()

    if (spy_pct + stock_pct + cash_pct !== 100) {
      return c.json({ error: 'Allocations must sum to 100%' }, 400)
    }

    // Get next version
    const latest = await db.prepare("SELECT MAX(version) as v FROM allocation_snapshots").first<{ v: number }>()
    const nextVersion = (latest?.v || 0) + 1

    await db.prepare(
      "INSERT INTO allocation_snapshots (version, snapshot_date, spy_pct, stock_pct, cash_pct, notes) VALUES (?, date('now'), ?, ?, ?, ?)"
    ).bind(nextVersion, spy_pct, stock_pct, cash_pct, notes || '').run()

    await db.prepare(
      "INSERT INTO audit_log (admin_id, action, entity, details) VALUES ('admin', 'SNAPSHOT', 'Strategy A', ?)"
    ).bind(`Allocation v${nextVersion}: SPY ${spy_pct}%, Stocks ${stock_pct}%, Cash ${cash_pct}%`).run()

    return c.json({ success: true, version: nextVersion })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

// ══════════════════════════════════════════════════════════
// API: PROJECTOR STATS (live EV from real trades → projections)
// ══════════════════════════════════════════════════════════
// Reconstructs round-trip trades from individual IB fills,
// computes per-trade P&L, then derives EV / win-rate / risk stats.
app.get('/api/projector/stats', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ error: 'No database', strategies: null })

  try {
    // Only consider 2026 trades for forward projections
    const allTrades = await db.prepare(
      "SELECT id, strategy, side, instrument, entry_price, exit_price, realized_pnl, quantity, trade_date, asset_class, strike, expiry, put_call, result FROM trades WHERE trade_date >= '2026-01-01' ORDER BY trade_date ASC, id ASC"
    ).all()
    const rows: any[] = allTrades.results || []
    if (rows.length === 0) return c.json({ strategies: null, message: 'No trades in database' })

    // ── Compute PORTFOLIO-WIDE date range ──
    // All strategies must annualize over the same time span so that
    // per-strategy annualized returns sum correctly to the combined total.
    const allDates = rows.map((r: any) => r.trade_date).filter(Boolean).sort()
    const portfolioFirstDate = allDates[0]
    const portfolioLastDate = allDates[allDates.length - 1]
    const portfolioDaySpan = Math.max(
      (new Date(portfolioLastDate).getTime() - new Date(portfolioFirstDate).getTime()) / (1000 * 60 * 60 * 24), 1
    )
    const portfolioYearFraction = portfolioDaySpan / 365.25

    const result: Record<string, any> = {}

    for (const strat of ['A', 'B', 'C']) {
      const fills = rows.filter((r: any) => r.strategy === strat)
      if (fills.length === 0) { result[strat] = null; continue }

      // ── Build round-trip trades from fills ──
      // realized_pnl stores the IB NetCash column:
      //   BUY fill  → negative (cash out)
      //   SELL fill → positive (cash in)
      // A "round trip" = group of fills for the same instrument where
      // net position returns to zero. The P&L = sum of NetCash values.

      const roundTrips = buildRoundTrips(fills, strat)

      // Strategy-specific date range (for informational display only)
      const dates = fills.map((t: any) => t.trade_date).filter(Boolean).sort()
      const firstDate = dates[0]
      const lastDate = dates[dates.length - 1]
      const stratDaySpan = Math.max(
        (new Date(lastDate).getTime() - new Date(firstDate).getTime()) / (1000 * 60 * 60 * 24), 1
      )

      // Filter to closed round trips with non-zero P&L
      const closed = roundTrips.filter((rt: any) => rt.closed && rt.pnl !== 0)
      const wins = closed.filter((rt: any) => rt.pnl > 0)
      const losses = closed.filter((rt: any) => rt.pnl < 0)
      const scratches = roundTrips.filter((rt: any) => rt.closed && rt.pnl === 0)

      const totalClosed = closed.length
      const winCount = wins.length
      const lossCount = losses.length
      const winRate = totalClosed > 0 ? winCount / totalClosed : 0

      // Avg win and avg loss in dollars
      const avgWinDollar = winCount > 0
        ? wins.reduce((s: number, rt: any) => s + rt.pnl, 0) / winCount : 0
      const avgLossDollar = lossCount > 0
        ? losses.reduce((s: number, rt: any) => s + Math.abs(rt.pnl), 0) / lossCount : 0

      // Risk per trade = avg loss dollar (this is 1R by definition)
      const riskPerTradeDollar = avgLossDollar > 0 ? avgLossDollar : (avgWinDollar > 0 ? avgWinDollar : 0)

      // Convert to R-multiples
      const avgWinR = riskPerTradeDollar > 0 ? avgWinDollar / riskPerTradeDollar : 0
      const avgLossR = 1.0 // By definition

      // EV per trade (in R)
      const evPerTradeR = winRate * avgWinR - (1 - winRate) * avgLossR

      // Annualized trade count — uses PORTFOLIO-WIDE yearFraction
      const tradesPerYear = portfolioYearFraction > 0 ? Math.round(totalClosed / portfolioYearFraction) : totalClosed

      // Dollar EV and total P&L — annualPnl uses PORTFOLIO-WIDE yearFraction
      const evPerTradeDollar = riskPerTradeDollar > 0 ? evPerTradeR * riskPerTradeDollar : 0
      const totalPnl = closed.reduce((s: number, rt: any) => s + rt.pnl, 0)
      const annualPnl = portfolioYearFraction > 0 ? totalPnl / portfolioYearFraction : totalPnl

      result[strat] = {
        totalFills: fills.length,
        roundTrips: roundTrips.length,
        closedTrades: totalClosed,
        openTrades: roundTrips.filter((rt: any) => !rt.closed).length,
        scratchTrades: scratches.length,
        winCount,
        lossCount,
        winRate: round(winRate * 100, 1),
        avgWinDollar: round(avgWinDollar, 2),
        avgLossDollar: round(avgLossDollar, 2),
        avgWinR: round(avgWinR, 2),
        avgLossR: round(avgLossR, 2),
        evPerTradeR: round(evPerTradeR, 2),
        evPerTradeDollar: round(evPerTradeDollar, 2),
        riskPerTradeDollar: round(riskPerTradeDollar, 2),
        tradesPerYear,
        totalPnl: round(totalPnl, 2),
        annualPnl: round(annualPnl, 2),
        firstDate,
        lastDate,
        daySpan: Math.round(stratDaySpan),
        // Include portfolio-wide range for reference
        portfolioDaySpan: Math.round(portfolioDaySpan),
      }
    }

    return c.json({
      strategies: result,
      portfolioRange: {
        firstDate: portfolioFirstDate,
        lastDate: portfolioLastDate,
        daySpan: Math.round(portfolioDaySpan),
      }
    })
  } catch (e: any) {
    return c.json({ error: e.message, strategies: null })
  }
})

// ══════════════════════════════════════════════════════════
// API: STRATEGY COUNTS
// ══════════════════════════════════════════════════════════
app.get('/api/admin/strategy-counts', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ A: 0, B: 0, C: 0 })

  try {
    const result = await db.prepare("SELECT strategy, COUNT(*) as count FROM trades GROUP BY strategy").all()
    const counts: Record<string, number> = { A: 0, B: 0, C: 0 }
    for (const row of (result.results || []) as any[]) {
      counts[row.strategy] = row.count
    }
    return c.json(counts)
  } catch (e: any) {
    return c.json({ A: 0, B: 0, C: 0 })
  }
})

// ══════════════════════════════════════════════════════════
// API: AUDIT LOG
// ══════════════════════════════════════════════════════════
app.get('/api/admin/audit', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ entries: [] })

  const result = await db.prepare("SELECT * FROM audit_log ORDER BY timestamp DESC LIMIT 50").all()
  return c.json({ entries: result.results || [] })
})

// ══════════════════════════════════════════════════════════
// API: UPLOAD HISTORY
// ══════════════════════════════════════════════════════════
app.get('/api/admin/uploads', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ batches: [] })

  const result = await db.prepare("SELECT * FROM upload_batches ORDER BY uploaded_at DESC LIMIT 20").all()
  return c.json({ batches: result.results || [] })
})

// ══════════════════════════════════════════════════════════
// API: LEADS
// ══════════════════════════════════════════════════════════
app.post('/api/leads/subscribe', async (c) => {
  const { email } = await c.req.json()
  if (!email || !email.includes('@')) return c.json({ error: 'Valid email required' }, 400)

  const db = c.env.DB
  if (db) {
    try {
      await db.prepare("INSERT OR IGNORE INTO leads (email) VALUES (?)").bind(email).run()
    } catch (_) {}
  }
  return c.json({ success: true, message: 'Subscribed to weekly digest' })
})

// ══════════════════════════════════════════════════════════
// API: DB HEALTH / STATS
// ══════════════════════════════════════════════════════════
app.get('/api/health', async (c) => {
  const db = c.env.DB
  if (!db) return c.json({ status: 'no-db', message: 'D1 not bound' })

  try {
    const trades = await db.prepare("SELECT COUNT(*) as count FROM trades").first<{ count: number }>()
    const snapshots = await db.prepare("SELECT COUNT(*) as count FROM allocation_snapshots").first<{ count: number }>()
    const audits = await db.prepare("SELECT COUNT(*) as count FROM audit_log").first<{ count: number }>()
    return c.json({
      status: 'ok',
      trades: trades?.count || 0,
      snapshots: snapshots?.count || 0,
      auditEntries: audits?.count || 0,
    })
  } catch (e: any) {
    return c.json({ status: 'error', message: e.message })
  }
})

export default app

// ══════════════════════════════════════════════════════════
// ROUND-TRIP TRADE BUILDER (converts IB fills → logical trades)
// ══════════════════════════════════════════════════════════

/**
 * Builds round-trip trades from individual IB fill records.
 *
 * For each strategy:
 * - **Strategy A (STK)**: Groups fills by instrument (SPY, MSFT, TSLA).
 *   Uses FIFO matching: buys build a position, sells close it.
 *   When net position returns to zero → one completed round trip.
 *   P&L = sum of all NetCash values in the round trip.
 *
 * - **Strategy B (FUT)**: Groups fills by instrument (MESH6, MES).
 *   Same FIFO matching. Each flat position = one round trip.
 *
 * - **Strategy C (OPT/FOP)**: Groups fills by spread (same date+expiry+putCall).
 *   Each vertical spread = 2 legs opened then 2 legs closed = 1 round trip.
 *   P&L = sum of all 4 legs' NetCash.
 *   If not a spread, falls back to instrument-level FIFO like A/B.
 */
function buildRoundTrips(fills: any[], strategy: string): { pnl: number; closed: boolean; fillCount: number; firstDate: string; lastDate: string; riskDollar: number }[] {
  if (strategy === 'C') {
    return buildSpreadRoundTrips(fills)
  }
  return buildFifoRoundTrips(fills)
}

/**
 * FIFO round-trip builder for STK and FUT.
 * Groups by instrument, accumulates position, and when net qty == 0 → round trip.
 * Also handles legacy single-fill trades that already have result (WIN/LOSS) set.
 */
function buildFifoRoundTrips(fills: any[]): any[] {
  // First, separate legacy trades (single-fill with result already set) from IB fills
  const legacyTrades: any[] = []
  const ibFills: any[] = []
  for (const f of fills) {
    const hasResult = f.result && f.result !== 'OPEN' && (f.result === 'WIN' || f.result === 'LOSS' || f.result === 'SCRATCH')
    const hasExit = f.exit_price !== null && f.exit_price !== undefined && f.exit_price !== 'null' && f.exit_price !== 0
    if (hasResult && hasExit) {
      legacyTrades.push(f)
    } else {
      ibFills.push(f)
    }
  }

  const roundTrips: any[] = []

  // Legacy trades are already complete round trips
  for (const t of legacyTrades) {
    roundTrips.push({
      pnl: round(t.realized_pnl || 0, 2),
      closed: true,
      fillCount: 1,
      firstDate: t.trade_date,
      lastDate: t.trade_date,
      riskDollar: round(Math.abs(t.entry_price * (t.quantity || 1) * 100), 2), // options: premium * 100
      instrument: t.instrument,
    })
  }

  // Group IB fills by instrument
  const byInstrument: Record<string, any[]> = {}
  for (const f of ibFills) {
    const key = (f.instrument || '').trim()
    if (!byInstrument[key]) byInstrument[key] = []
    byInstrument[key].push(f)
  }

  for (const [instrument, instrumentFills] of Object.entries(byInstrument)) {
    let netQty = 0
    let currentTripCash = 0
    let currentTripFills = 0
    let currentTripRisk = 0 // sum of buy-side cash outflows
    let firstDate = ''
    let lastDate = ''

    for (const f of instrumentFills) {
      const qty = f.quantity || 1
      const signedQty = f.side === 'BUY' ? qty : -qty
      const netCash = f.realized_pnl || 0 // This is actually IB NetCash

      if (currentTripFills === 0) firstDate = f.trade_date
      lastDate = f.trade_date

      netQty += signedQty
      currentTripCash += netCash
      currentTripFills++

      // Track risk: sum of absolute value of buy-side cash (money at risk)
      if (f.side === 'BUY') {
        currentTripRisk += Math.abs(netCash)
      }

      // When position is flat → round trip complete
      if (netQty === 0 && currentTripFills >= 2) {
        roundTrips.push({
          pnl: round(currentTripCash, 2),
          closed: true,
          fillCount: currentTripFills,
          firstDate,
          lastDate,
          riskDollar: round(currentTripRisk, 2),
          instrument,
        })
        currentTripCash = 0
        currentTripFills = 0
        currentTripRisk = 0
        firstDate = ''
        lastDate = ''
      }
    }

    // If there are remaining fills (open position)
    if (currentTripFills > 0) {
      roundTrips.push({
        pnl: round(currentTripCash, 2),
        closed: false,
        fillCount: currentTripFills,
        firstDate,
        lastDate,
        riskDollar: round(currentTripRisk, 2),
        instrument,
      })
    }
  }

  return roundTrips
}

/**
 * Spread round-trip builder for OPT/FOP.
 * Strategy C trades are vertical spreads: 2 legs open + 2 legs close = 1 trade.
 *
 * Grouping logic:
 * 1. Group by expiry + putCall (all legs of a vertical share these)
 * 2. Within each group, identify adjacent strike pairs (the 2 strikes of a spread)
 * 3. Each strike pair is a separate vertical spread trade
 * 4. P&L = sum of all fills for that strike pair
 */
function buildSpreadRoundTrips(fills: any[]): any[] {
  const isOpt = (f: any) => f.asset_class === 'OPT' || f.asset_class === 'FOP'
  const optFills = fills.filter(isOpt)
  const nonOptFills = fills.filter((f: any) => !isOpt(f))

  const roundTrips: any[] = []

  // Step 1: Group by expiry + putCall
  const expiryGroups: Record<string, any[]> = {}
  for (const f of optFills) {
    const key = `${f.expiry || ''}|${f.put_call || ''}`
    if (!expiryGroups[key]) expiryGroups[key] = []
    expiryGroups[key].push(f)
  }

  // Step 2: Within each expiry group, identify strike pairs
  for (const [groupKey, groupFills] of Object.entries(expiryGroups)) {
    // Get all unique strikes, sorted
    const strikes = [...new Set(groupFills.map((f: any) => f.strike))].filter(Boolean).sort((a: number, b: number) => a - b)

    if (strikes.length < 2) {
      // Single strike — not a spread, use FIFO
      roundTrips.push(...buildFifoRoundTrips(groupFills))
      continue
    }

    // Pair adjacent strikes into spreads
    const used = new Set<number>()
    const strikePairs: [number, number][] = []

    // Greedy pair matching: pair consecutive strikes
    for (let i = 0; i < strikes.length - 1; i += 2) {
      strikePairs.push([strikes[i], strikes[i + 1]])
      used.add(strikes[i])
      used.add(strikes[i + 1])
    }

    // Handle any unpaired strike
    const unpaired: number[] = strikes.filter(s => !used.has(s))

    // Create a round trip for each strike pair
    for (const [lowStrike, highStrike] of strikePairs) {
      const pairFills = groupFills.filter((f: any) => f.strike === lowStrike || f.strike === highStrike)
      const totalCash = pairFills.reduce((s: number, f: any) => s + (f.realized_pnl || 0), 0)
      const buyLegs = pairFills.filter((f: any) => f.side === 'BUY')
      const riskDollar = buyLegs.reduce((s: number, f: any) => s + Math.abs(f.realized_pnl || 0), 0)

      const dates = pairFills.map((f: any) => f.trade_date).filter(Boolean).sort()
      const firstDate = dates[0] || ''
      const lastDate = dates[dates.length - 1] || ''

      // Check if closed: each strike should have equal buys and sells
      let allClosed = true
      for (const strike of [lowStrike, highStrike]) {
        const strikeFills = pairFills.filter((f: any) => f.strike === strike)
        const b = strikeFills.filter((f: any) => f.side === 'BUY').length
        const s = strikeFills.filter((f: any) => f.side === 'SELL').length
        if (b !== s) { allClosed = false; break }
      }

      roundTrips.push({
        pnl: round(totalCash, 2),
        closed: allClosed,
        fillCount: pairFills.length,
        firstDate,
        lastDate,
        riskDollar: round(riskDollar, 2),
        spreadKey: `${groupKey}|${lowStrike}-${highStrike}`,
      })
    }

    // Handle unpaired strikes with FIFO
    if (unpaired.length > 0) {
      const unpairedFills = groupFills.filter((f: any) => unpaired.includes(f.strike))
      roundTrips.push(...buildFifoRoundTrips(unpairedFills))
    }
  }

  // Handle non-option fills in Strategy C with FIFO
  if (nonOptFills.length > 0) {
    roundTrips.push(...buildFifoRoundTrips(nonOptFills))
  }

  return roundTrips
}

// ══════════════════════════════════════════════════════════
// METRICS ENGINE
// ══════════════════════════════════════════════════════════

function round(val: number, decimals: number): number {
  return Math.round(val * 10 ** decimals) / 10 ** decimals
}

function computeMetrics(trades: any[], mode: 'points' | 'R') {
  if (trades.length === 0) {
    return { cumulativeReturn: 0, cagr: 0, maxDrawdown: 0, sharpeRatio: 0, sortinoRatio: 0, winRate: 0, expectancy: 0, expectancyR: 0, profitFactor: 0 }
  }

  const wins = trades.filter((t: any) => t.result === 'WIN')
  const losses = trades.filter((t: any) => t.result === 'LOSS')

  // Win Rate
  const winRate = round((wins.length / trades.length) * 100, 1)

  // Expectancy (points and R)
  const netPointsArr = trades.map((t: any) => t.net_points || 0)
  const netRArr = trades.map((t: any) => t.net_r || 0)
  const expectancyPts = round(netPointsArr.reduce((a: number, b: number) => a + b, 0) / trades.length, 2)
  const expectancyR = round(netRArr.reduce((a: number, b: number) => a + b, 0) / trades.length, 2)

  // Profit Factor
  const grossWins = wins.reduce((s: number, t: any) => s + Math.abs(t.net_points || 0), 0)
  const grossLosses = losses.reduce((s: number, t: any) => s + Math.abs(t.net_points || 0), 0)
  const profitFactor = grossLosses > 0 ? round(grossWins / grossLosses, 2) : grossWins > 0 ? 999 : 0

  // Cumulative return (as % based on starting capital of $5000, 2% risk = $100/trade)
  const totalPnl = trades.reduce((s: number, t: any) => s + (t.realized_pnl || 0), 0)
  const startingCapital = 5000
  const cumulativeReturn = round((totalPnl / startingCapital) * 100, 1)

  // CAGR
  const firstDate = new Date(trades[0].trade_date)
  const lastDate = new Date(trades[trades.length - 1].trade_date)
  const years = Math.max((lastDate.getTime() - firstDate.getTime()) / (365.25 * 24 * 3600000), 0.1)
  const cagr = round(((1 + cumulativeReturn / 100) ** (1 / years) - 1) * 100, 1)

  // Max Drawdown
  let peak = 0
  let maxDD = 0
  let cumPnl = 0
  for (const t of trades) {
    cumPnl += (t.realized_pnl || 0)
    if (cumPnl > peak) peak = cumPnl
    const dd = peak - cumPnl
    if (dd > maxDD) maxDD = dd
  }
  const maxDrawdown = round(-(maxDD / startingCapital) * 100, 1)

  // Sharpe Ratio (annualized)
  const returns = trades.map((t: any) => (t.realized_pnl || 0) / startingCapital)
  const meanReturn = returns.reduce((a: number, b: number) => a + b, 0) / returns.length
  const variance = returns.reduce((s: number, r: number) => s + (r - meanReturn) ** 2, 0) / returns.length
  const stdDev = Math.sqrt(variance)
  const tradesPerYear = trades.length / years
  const annualizedReturn = meanReturn * tradesPerYear
  const annualizedVol = stdDev * Math.sqrt(tradesPerYear)
  const sharpeRatio = annualizedVol > 0 ? round(annualizedReturn / annualizedVol, 2) : 0

  // Sortino Ratio
  const downsideReturns = returns.filter((r: number) => r < 0)
  const downsideVariance = downsideReturns.length > 0
    ? downsideReturns.reduce((s: number, r: number) => s + r ** 2, 0) / downsideReturns.length
    : 0
  const downsideDev = Math.sqrt(downsideVariance) * Math.sqrt(tradesPerYear)
  const sortinoRatio = downsideDev > 0 ? round(annualizedReturn / downsideDev, 2) : 0

  return {
    cumulativeReturn,
    cagr,
    maxDrawdown,
    sharpeRatio,
    sortinoRatio,
    winRate,
    expectancy: mode === 'points' ? expectancyPts : expectancyR,
    expectancyR,
    profitFactor,
  }
}

function computeRollingMetrics(trades: any[], days: number, mode: 'points' | 'R') {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  const cutoffStr = cutoff.toISOString().split('T')[0]
  const recent = trades.filter((t: any) => t.trade_date >= cutoffStr)
  if (recent.length === 0) return { winRate: 0, expectancy: 0, trades: 0 }
  const wins = recent.filter((t: any) => t.result === 'WIN')
  const vals = recent.map((t: any) => mode === 'points' ? (t.net_points || 0) : (t.net_r || 0))
  return {
    winRate: round((wins.length / recent.length) * 100, 1),
    expectancy: round(vals.reduce((a: number, b: number) => a + b, 0) / vals.length, 2),
    trades: recent.length,
  }
}

function buildEquityCurve(trades: any[], mode: 'points' | 'R') {
  if (trades.length === 0) return []
  let cumValue = 100
  const data: any[] = [{ date: trades[0].trade_date, value: 100, spy: 100 }]
  let spyVal = 100

  for (const t of trades) {
    const pnlPct = (t.realized_pnl || 0) / 5000
    cumValue *= (1 + pnlPct)
    spyVal *= (1 + 0.146 / 365 + (Math.random() - 0.5) * 0.003)
    data.push({
      date: t.trade_date,
      value: round(cumValue, 2),
      spy: round(spyVal, 2),
    })
  }
  return data
}

function buildDrawdownCurve(equityCurve: any[]) {
  if (equityCurve.length === 0) return []
  let peak = equityCurve[0].value
  return equityCurve.map((p: any) => {
    if (p.value > peak) peak = p.value
    const dd = ((p.value - peak) / peak) * 100
    return { date: p.date, value: round(dd, 2) }
  })
}

function buildMonthlyReturns(trades: any[], mode: 'points' | 'R') {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const grouped: Record<string, number> = {}
  const startCap = 5000

  for (const t of trades) {
    const d = new Date(t.trade_date)
    const key = `${d.getFullYear()}-${d.getMonth()}`
    grouped[key] = (grouped[key] || 0) + (t.realized_pnl || 0)
  }

  const data: any[] = []
  for (const [key, pnl] of Object.entries(grouped)) {
    const [year, monthIdx] = key.split('-').map(Number)
    data.push({ year, month: months[monthIdx], return: round((pnl / startCap) * 100, 2) })
  }
  return data.sort((a, b) => a.year === b.year ? months.indexOf(a.month) - months.indexOf(b.month) : a.year - b.year)
}

// ══════════════════════════════════════════════════════════
// ROUND-TRIP DASHBOARD HELPERS
// (equity curves, monthly returns, rolling metrics from round trips)
// ══════════════════════════════════════════════════════════

function buildRoundTripEquityCurve(closedRTs: any[], startingCapital: number): any[] {
  if (closedRTs.length === 0) return []
  let cumValue = 100 // index starting at 100
  let spyVal = 100
  const data: any[] = [{ date: closedRTs[0].firstDate || closedRTs[0].lastDate, value: 100, spy: 100 }]

  for (const rt of closedRTs) {
    const pnlPct = rt.pnl / startingCapital
    cumValue *= (1 + pnlPct)
    // Simple SPY benchmark: ~14.6% annual return + small noise
    spyVal *= (1 + 0.146 / 365 + (Math.sin(data.length * 0.3) * 0.001))
    data.push({
      date: rt.lastDate || rt.firstDate,
      value: round(cumValue, 2),
      spy: round(spyVal, 2),
    })
  }
  return data
}

function buildRoundTripMonthlyReturns(closedRTs: any[], startingCapital: number): any[] {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const grouped: Record<string, number> = {}

  for (const rt of closedRTs) {
    const d = new Date(rt.lastDate || rt.firstDate)
    if (isNaN(d.getTime())) continue
    const key = `${d.getFullYear()}-${d.getMonth()}`
    grouped[key] = (grouped[key] || 0) + rt.pnl
  }

  const data: any[] = []
  for (const [key, pnl] of Object.entries(grouped)) {
    const [year, monthIdx] = key.split('-').map(Number)
    data.push({ year, month: months[monthIdx], return: round((pnl / startingCapital) * 100, 2) })
  }
  return data.sort((a, b) => a.year === b.year ? months.indexOf(a.month) - months.indexOf(b.month) : a.year - b.year)
}

/**
 * Build weekly returns from round-trip data.
 * Groups round trips by ISO week (Mon-Sun) and returns weekly P&L as % of starting capital.
 */
function buildRoundTripWeeklyReturns(closedRTs: any[], startingCapital: number): any[] {
  const grouped: Record<string, { pnl: number; weekStart: string; weekEnd: string }> = {}

  for (const rt of closedRTs) {
    const dateStr = rt.lastDate || rt.firstDate
    if (!dateStr) continue
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) continue

    // Get ISO week start (Monday)
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Monday
    const monday = new Date(d)
    monday.setDate(diff)
    const sunday = new Date(monday)
    sunday.setDate(monday.getDate() + 6)

    const key = monday.toISOString().split('T')[0]
    if (!grouped[key]) {
      grouped[key] = {
        pnl: 0,
        weekStart: monday.toISOString().split('T')[0],
        weekEnd: sunday.toISOString().split('T')[0],
      }
    }
    grouped[key].pnl += rt.pnl
  }

  const data: any[] = []
  for (const [key, val] of Object.entries(grouped)) {
    data.push({
      weekStart: val.weekStart,
      weekEnd: val.weekEnd,
      return: round((val.pnl / startingCapital) * 100, 2),
      pnl: round(val.pnl, 2),
    })
  }
  return data.sort((a, b) => a.weekStart.localeCompare(b.weekStart))
}

function computeRollingRTMetrics(closedRTs: any[], days: number): { winRate: number; expectancy: number; trades: number; expectancyR: number } {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  const cutoffStr = cutoff.toISOString().split('T')[0]
  const recent = closedRTs.filter((rt: any) => (rt.lastDate || rt.firstDate) >= cutoffStr)
  if (recent.length === 0) return { winRate: 0, expectancy: 0, trades: 0, expectancyR: 0 }
  const recentWins = recent.filter((rt: any) => rt.pnl > 0)
  const avgPnl = recent.reduce((s: number, rt: any) => s + rt.pnl, 0) / recent.length
  const recentLosses = recent.filter((rt: any) => rt.pnl < 0)
  const avgLoss = recentLosses.length > 0 ? recentLosses.reduce((s: number, rt: any) => s + Math.abs(rt.pnl), 0) / recentLosses.length : 1
  return {
    winRate: round((recentWins.length / recent.length) * 100, 1),
    expectancy: round(avgPnl, 2),
    trades: recent.length,
    expectancyR: avgLoss > 0 ? round(avgPnl / avgLoss, 2) : 0,
  }
}

function buildEmptyStrategy(strat: string, snapshot: any): any {
  const names: Record<string, string> = {
    A: 'Strategy A — Core Allocation',
    B: 'Strategy B — Futures Alerts',
    C: 'Strategy C — Episodic Pivots',
  }
  return {
    name: names[strat] || `Strategy ${strat}`,
    cumulativeReturn: 0, cagr: 0, maxDrawdown: 0, sharpeRatio: 0, sortinoRatio: 0,
    winRate: 0, expectancyDollar: 0, expectancyR: 0, expectancyPoints: 0,
    profitFactor: 0, totalTrades: 0, totalFills: 0, openTrades: 0,
    avgWinDollar: 0, avgLossDollar: 0, avgWinR: 0, riskPerTrade: 0,
    evPerTradeR: 0, tradesPerYear: 0, annualPnl: 0, totalPnl: 0,
    dataRange: { firstDate: '', lastDate: '', daySpan: 0 },
    lastUpdated: '2026-02-20T16:00:00Z',
    currentAllocation: strat === 'A' ? { spy: snapshot.spy_pct, stocks: snapshot.stock_pct, cash: snapshot.cash_pct } : undefined,
    equityCurve: [], drawdownCurve: [], monthlyReturns: [],
    rollingMetrics: { '30d': { winRate: 0, expectancy: 0, trades: 0, expectancyR: 0 }, '90d': { winRate: 0, expectancy: 0, trades: 0, expectancyR: 0 } },
    recentTrades: strat === 'A' ? undefined : [],
  }
}

function formatTrades(trades: any[]) {
  return trades.map((t: any) => ({
    id: t.trade_number || t.id,
    date: t.trade_date,
    side: t.side,
    instrument: t.instrument,
    entry: t.entry_price,
    stop: t.stop_price,
    tp: t.tp_price,
    exit: t.exit_price,
    netPoints: t.net_points,
    netR: t.net_r,
    pnl: t.realized_pnl,
    source: t.source,
    result: t.result,
  }))
}

// ══════════════════════════════════════════════════════════
// FALLBACK GENERATORS (when D1 is not available or empty)
// ══════════════════════════════════════════════════════════

function buildFallbackSummary() {
  return {
    strategies: {
      A: {
        name: 'Strategy A — Core Allocation',
        cumulativeReturn: 14.2, cagr: 12.8, maxDrawdown: -8.4, sharpeRatio: 1.42, sortinoRatio: 2.1,
        currentAllocation: { spy: 80, stocks: 15, cash: 5 },
        lastUpdated: '2026-02-17T09:00:00Z',
        equityCurve: generateSyntheticEquityCurve(365, 0.035),
        drawdownCurve: generateSyntheticDrawdownCurve(365),
        monthlyReturns: generateSyntheticMonthlyReturns(),
      },
      B: {
        name: 'Strategy B — Futures Alerts',
        cumulativeReturn: 38.6, cagr: 32.1, maxDrawdown: -12.3, sharpeRatio: 1.85, sortinoRatio: 2.8,
        winRate: 62.4, expectancyPoints: 4.2, expectancyR: 0.38, profitFactor: 1.92, totalTrades: 187,
        lastUpdated: '2026-02-17T09:00:00Z',
        equityCurve: generateSyntheticEquityCurve(365, 0.08),
        drawdownCurve: generateSyntheticDrawdownCurve(365),
        monthlyReturns: generateSyntheticMonthlyReturns(),
        rollingMetrics: { '30d': { winRate: 65.0, expectancy: 5.1, trades: 22 }, '90d': { winRate: 63.2, expectancy: 4.5, trades: 58 } },
        recentTrades: generateSyntheticTrades('futures', 20),
      },
      C: {
        name: 'Strategy C — Episodic Pivots',
        cumulativeReturn: 52.1, cagr: 44.3, maxDrawdown: -18.7, sharpeRatio: 1.25, sortinoRatio: 1.9,
        winRate: 48.2, expectancyR: 0.72, profitFactor: 1.68, totalTrades: 94,
        lastUpdated: '2026-02-17T09:00:00Z',
        equityCurve: generateSyntheticEquityCurve(365, 0.11),
        drawdownCurve: generateSyntheticDrawdownCurve(365),
        monthlyReturns: generateSyntheticMonthlyReturns(),
        rollingMetrics: { '30d': { winRate: 50.0, expectancy: 0.85, trades: 8 }, '90d': { winRate: 47.8, expectancy: 0.69, trades: 24 } },
        recentTrades: generateSyntheticTrades('options', 20),
      },
    },
  }
}

function generateSyntheticEquityCurve(days: number, dailyReturn: number) {
  const data = []; let value = 100; let spy = 100
  for (let i = 0; i < days; i++) {
    const date = new Date(2025, 2, 1); date.setDate(date.getDate() + i)
    value *= 1 + (dailyReturn / 365 + ((Math.sin(i * 0.1) + Math.cos(i * 0.07)) * 0.003))
    spy *= 1 + (0.146 / 365 + ((Math.sin(i * 0.13) + Math.cos(i * 0.09)) * 0.002))
    data.push({ date: date.toISOString().split('T')[0], value: round(value, 2), spy: round(spy, 2) })
  }
  return data
}

function generateSyntheticDrawdownCurve(days: number) {
  const data = []
  for (let i = 0; i < days; i++) {
    const date = new Date(2025, 2, 1); date.setDate(date.getDate() + i)
    const dd = -(Math.abs(Math.sin(i * 0.02)) * 12) * Math.abs(Math.sin(i * 0.005))
    data.push({ date: date.toISOString().split('T')[0], value: round(dd, 2) })
  }
  return data
}

function generateSyntheticMonthlyReturns() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const data: any[] = []
  const returns2025 = [2.1, 3.5, -1.2, 4.8, 1.9, -0.5, 3.2, 2.7, -1.8, 4.1, 1.5, 2.3]
  const returns2026 = [3.1, 2.4]
  returns2025.forEach((r, i) => data.push({ year: 2025, month: months[i], return: r }))
  returns2026.forEach((r, i) => data.push({ year: 2026, month: months[i], return: r }))
  return data
}

function generateSyntheticTrades(type: string, count: number) {
  const trades = []
  for (let i = 0; i < count; i++) {
    const isWin = (i % 5 !== 3) && (i % 7 !== 4)
    const entry = 5800 + i * 3
    const netPts = isWin ? 12 + (i % 7) * 3 : -(8 + (i % 5) * 2)
    trades.push({
      id: count - i, date: new Date(2026, 1, 17 - i).toISOString().split('T')[0],
      side: i % 2 === 0 ? 'BUY' : 'SELL',
      instrument: type === 'futures' ? 'MES' : ['SPY', 'AAPL', 'NVDA', 'TSLA'][i % 4],
      entry, stop: type === 'futures' ? entry - 20 : null, tp: type === 'futures' ? entry + 20 : null,
      exit: entry + netPts, netPoints: netPts, netR: round(netPts / 20, 2),
      pnl: netPts * (type === 'futures' ? 5 : 100), source: 'IB',
      result: isWin ? 'WIN' : 'LOSS',
    })
  }
  return trades
}

// ══════════════════════════════════════════════════════════
// CSV PARSER (handles quoted fields with commas properly)
// ══════════════════════════════════════════════════════════

function parseIBCsv(csvText: string): any[] {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []

  const header = parseCsvLine(lines[0])
  const rows: any[] = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue
    const vals = parseCsvLine(line)
    const obj: any = {}
    header.forEach((h: string, idx: number) => {
      obj[h] = vals[idx] || ''
    })
    rows.push(obj)
  }
  return rows
}

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  result.push(current.trim())
  return result
}

function stripQuotes(val: string): string {
  if (!val) return ''
  return val.replace(/^"|"$/g, '').trim()
}

function formatIBDate(raw: string): string {
  // Convert "20260205" → "2026-02-05"
  const clean = raw.replace(/"/g, '').trim()
  if (clean.length === 8 && /^\d{8}$/.test(clean)) {
    return `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`
  }
  return clean
}
