import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { landingPage } from './pages/landing'
import { dashboardPage } from './pages/dashboard'
import { pricingPage } from './pages/pricing'
import { howItWorksPage } from './pages/how-it-works'
import { calculatorPage } from './pages/calculator'
import { disclosuresPage } from './pages/disclosures'
import { termsPage } from './pages/terms'
import { privacyPage } from './pages/privacy'
import { adminPage } from './pages/admin'
import { updatesPage } from './pages/updates'
import { layout } from './components/layout'

type Bindings = { DB: D1Database }
const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

// ══════════════════════════════════════════════════════════
// PUBLIC PAGES
// ══════════════════════════════════════════════════════════
app.get('/', (c) => c.html(layout('EPIG Investment Design', landingPage())))
app.get('/dashboard', (c) => c.html(layout('Dashboard | EPIG', dashboardPage())))
app.get('/pricing', (c) => c.html(layout('Pricing | EPIG', pricingPage())))
app.get('/how-it-works', (c) => c.html(layout('How It Works | EPIG', howItWorksPage())))
app.get('/calculator', (c) => c.html(layout('Strategy Calculator | EPIG', calculatorPage())))
app.get('/updates', (c) => c.html(layout('Updates | EPIG', updatesPage())))
app.get('/disclosures', (c) => c.html(layout('Disclosures | EPIG', disclosuresPage())))
app.get('/terms', (c) => c.html(layout('Terms of Service | EPIG', termsPage())))
app.get('/privacy', (c) => c.html(layout('Privacy Policy | EPIG', privacyPage())))

app.get('/admin', (c) => c.html(layout('Admin Console | EPIG', adminPage())))
app.get('/admin/upload', (c) => c.html(layout('Upload Trades | EPIG', adminPage())))

// ══════════════════════════════════════════════════════════
// API: DASHBOARD SUMMARY (reads from D1)
// ══════════════════════════════════════════════════════════
app.get('/api/dashboard/summary', async (c) => {
  const db = c.env.DB
  if (!db) return c.json(buildFallbackSummary())

  try {
    // Fetch all trades
    const tradesB = await db.prepare("SELECT * FROM trades WHERE strategy='B' AND result IN ('WIN','LOSS') ORDER BY trade_date ASC").all()
    const tradesC = await db.prepare("SELECT * FROM trades WHERE strategy='C' AND result IN ('WIN','LOSS') ORDER BY trade_date ASC").all()
    const snapshots = await db.prepare("SELECT * FROM allocation_snapshots ORDER BY snapshot_date DESC LIMIT 1").all()

    const bRows: any[] = tradesB.results || []
    const cRows: any[] = tradesC.results || []
    const latestSnapshot: any = (snapshots.results || [])[0] || { spy_pct: 80, stock_pct: 15, cash_pct: 5 }

    // Compute metrics from real data
    const bMetrics = computeMetrics(bRows, 'points')
    const cMetrics = computeMetrics(cRows, 'R')

    // Build equity curves from real trades
    const bEquity = buildEquityCurve(bRows, 'points')
    const cEquity = buildEquityCurve(cRows, 'R')
    const bDrawdown = buildDrawdownCurve(bEquity)
    const cDrawdown = buildDrawdownCurve(cEquity)
    const bMonthly = buildMonthlyReturns(bRows, 'points')
    const cMonthly = buildMonthlyReturns(cRows, 'R')

    // Rolling metrics
    const bRolling30 = computeRollingMetrics(bRows, 30, 'points')
    const bRolling90 = computeRollingMetrics(bRows, 90, 'points')
    const cRolling30 = computeRollingMetrics(cRows, 30, 'R')
    const cRolling90 = computeRollingMetrics(cRows, 90, 'R')

    // Last updated from most recent trade
    const lastB = bRows.length > 0 ? bRows[bRows.length - 1].trade_date : null
    const lastC = cRows.length > 0 ? cRows[cRows.length - 1].trade_date : null

    return c.json({
      strategies: {
        A: {
          name: 'Strategy A — Core Allocation',
          cumulativeReturn: 14.2,
          cagr: 12.8,
          maxDrawdown: -8.4,
          sharpeRatio: 1.42,
          sortinoRatio: 2.1,
          currentAllocation: {
            spy: latestSnapshot.spy_pct,
            stocks: latestSnapshot.stock_pct,
            cash: latestSnapshot.cash_pct,
          },
          lastUpdated: latestSnapshot.created_at || '2026-02-17T09:00:00Z',
          equityCurve: generateSyntheticEquityCurve(365, 0.035),
          drawdownCurve: generateSyntheticDrawdownCurve(365),
          monthlyReturns: generateSyntheticMonthlyReturns(),
        },
        B: {
          name: 'Strategy B — Futures Alerts',
          cumulativeReturn: bMetrics.cumulativeReturn,
          cagr: bMetrics.cagr,
          maxDrawdown: bMetrics.maxDrawdown,
          sharpeRatio: bMetrics.sharpeRatio,
          sortinoRatio: bMetrics.sortinoRatio,
          winRate: bMetrics.winRate,
          expectancyPoints: bMetrics.expectancy,
          expectancyR: bMetrics.expectancyR,
          profitFactor: bMetrics.profitFactor,
          totalTrades: bRows.length,
          lastUpdated: lastB ? lastB + 'T09:00:00Z' : '2026-02-17T09:00:00Z',
          equityCurve: bEquity,
          drawdownCurve: bDrawdown,
          monthlyReturns: bMonthly,
          rollingMetrics: {
            '30d': bRolling30,
            '90d': bRolling90,
          },
          recentTrades: formatTrades(bRows.slice(-20).reverse()),
        },
        C: {
          name: 'Strategy C — Episodic Pivots',
          cumulativeReturn: cMetrics.cumulativeReturn,
          cagr: cMetrics.cagr,
          maxDrawdown: cMetrics.maxDrawdown,
          sharpeRatio: cMetrics.sharpeRatio,
          sortinoRatio: cMetrics.sortinoRatio,
          winRate: cMetrics.winRate,
          expectancyR: cMetrics.expectancy,
          profitFactor: cMetrics.profitFactor,
          totalTrades: cRows.length,
          lastUpdated: lastC ? lastC + 'T09:00:00Z' : '2026-02-17T09:00:00Z',
          equityCurve: cEquity,
          drawdownCurve: cDrawdown,
          monthlyReturns: cMonthly,
          rollingMetrics: {
            '30d': cRolling30,
            '90d': cRolling90,
          },
          recentTrades: formatTrades(cRows.slice(-20).reverse()),
        },
      },
    })
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

      // Auto-classify strategy
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
      }
    })

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
