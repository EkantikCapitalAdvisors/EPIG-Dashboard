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

const app = new Hono()

app.use('/api/*', cors())

// ──── Public pages ────
app.get('/', (c) => c.html(layout('EPIG Investment Design', landingPage())))
app.get('/dashboard', (c) => c.html(layout('Dashboard | EPIG', dashboardPage())))
app.get('/pricing', (c) => c.html(layout('Pricing | EPIG', pricingPage())))
app.get('/how-it-works', (c) => c.html(layout('How It Works | EPIG', howItWorksPage())))
app.get('/calculator', (c) => c.html(layout('Strategy Calculator | EPIG', calculatorPage())))
app.get('/updates', (c) => c.html(layout('Updates | EPIG', updatesPage())))
app.get('/disclosures', (c) => c.html(layout('Disclosures | EPIG', disclosuresPage())))
app.get('/terms', (c) => c.html(layout('Terms of Service | EPIG', termsPage())))
app.get('/privacy', (c) => c.html(layout('Privacy Policy | EPIG', privacyPage())))

// ──── Admin pages ────
app.get('/admin', (c) => c.html(layout('Admin Console | EPIG', adminPage())))
app.get('/admin/upload', (c) => c.html(layout('Upload Trades | EPIG', adminPage())))

// ──── API routes ────
app.get('/api/dashboard/summary', async (c) => {
  return c.json({
    strategies: {
      A: {
        name: 'Strategy A — Core Allocation',
        cumulativeReturn: 14.2,
        cagr: 12.8,
        maxDrawdown: -8.4,
        sharpeRatio: 1.42,
        sortinoRatio: 2.1,
        currentAllocation: { spy: 80, stocks: 15, cash: 5 },
        lastUpdated: '2026-02-17T09:00:00Z',
        equityCurve: generateEquityCurve(365, 0.035),
        drawdownCurve: generateDrawdownCurve(365),
        monthlyReturns: generateMonthlyReturns(),
      },
      B: {
        name: 'Strategy B — Futures Alerts',
        cumulativeReturn: 38.6,
        cagr: 32.1,
        maxDrawdown: -12.3,
        sharpeRatio: 1.85,
        sortinoRatio: 2.8,
        winRate: 62.4,
        expectancyPoints: 4.2,
        expectancyR: 0.38,
        profitFactor: 1.92,
        totalTrades: 187,
        lastUpdated: '2026-02-17T09:00:00Z',
        equityCurve: generateEquityCurve(365, 0.08),
        drawdownCurve: generateDrawdownCurve(365),
        monthlyReturns: generateMonthlyReturns(),
        rollingMetrics: {
          '30d': { winRate: 65.0, expectancy: 5.1, trades: 22 },
          '90d': { winRate: 63.2, expectancy: 4.5, trades: 58 },
        },
        recentTrades: generateRecentTrades('futures', 20),
      },
      C: {
        name: 'Strategy C — Episodic Pivots',
        cumulativeReturn: 52.1,
        cagr: 44.3,
        maxDrawdown: -18.7,
        sharpeRatio: 1.25,
        sortinoRatio: 1.9,
        winRate: 48.2,
        expectancyR: 0.72,
        profitFactor: 1.68,
        totalTrades: 94,
        lastUpdated: '2026-02-17T09:00:00Z',
        equityCurve: generateEquityCurve(365, 0.11),
        drawdownCurve: generateDrawdownCurve(365),
        monthlyReturns: generateMonthlyReturns(),
        rollingMetrics: {
          '30d': { winRate: 50.0, expectancy: 0.85, trades: 8 },
          '90d': { winRate: 47.8, expectancy: 0.69, trades: 24 },
        },
        recentTrades: generateRecentTrades('options', 20),
      },
    },
  })
})

app.get('/api/dashboard/strategy/:id', async (c) => {
  const id = c.req.param('id')
  const range = c.req.query('range') || 'all'
  return c.json({ strategy: id, range, message: 'Full strategy data endpoint' })
})

app.post('/api/leads/subscribe', async (c) => {
  const { email } = await c.req.json()
  if (!email || !email.includes('@')) {
    return c.json({ error: 'Valid email required' }, 400)
  }
  return c.json({ success: true, message: 'Subscribed to weekly digest' })
})

app.post('/api/admin/upload', async (c) => {
  return c.json({ success: true, message: 'Upload endpoint ready (Phase 1)' })
})

export default app

// ──── Data generators for demo ────
function generateEquityCurve(days: number, dailyReturn: number) {
  const data = []
  let value = 100
  const spyValue = [100]
  for (let i = 0; i < days; i++) {
    const date = new Date(2025, 2, 1)
    date.setDate(date.getDate() + i)
    const noise = (Math.random() - 0.48) * 2
    value *= 1 + (dailyReturn / 365 + noise / 100)
    const spyNoise = (Math.random() - 0.48) * 1.5
    const prevSpy = spyValue[spyValue.length - 1]
    spyValue.push(prevSpy * (1 + (0.146 / 365 + spyNoise / 100)))
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(value * 100) / 100,
      spy: Math.round(spyValue[spyValue.length - 1] * 100) / 100,
    })
  }
  return data
}

function generateDrawdownCurve(days: number) {
  const data = []
  for (let i = 0; i < days; i++) {
    const date = new Date(2025, 2, 1)
    date.setDate(date.getDate() + i)
    const dd = -(Math.random() * 15) * Math.sin((i / days) * Math.PI * 4) ** 2
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(dd * 100) / 100,
    })
  }
  return data
}

function generateMonthlyReturns() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const years = [2025, 2026]
  const data: any[] = []
  for (const year of years) {
    for (const month of months) {
      if (year === 2026 && months.indexOf(month) > 1) break
      data.push({
        year,
        month,
        return: Math.round((Math.random() * 12 - 3) * 100) / 100,
      })
    }
  }
  return data
}

function generateRecentTrades(type: string, count: number) {
  const trades = []
  for (let i = 0; i < count; i++) {
    const isWin = Math.random() > 0.4
    const entry = 5800 + Math.round(Math.random() * 200)
    const stopPts = type === 'futures' ? 20 : 0
    const netPts = isWin ? Math.round(Math.random() * 40 + 5) : -Math.round(Math.random() * 25 + 5)
    trades.push({
      id: count - i,
      date: new Date(2026, 1, 17 - i).toISOString().split('T')[0],
      side: Math.random() > 0.5 ? 'BUY' : 'SELL',
      instrument: type === 'futures' ? 'MES' : ['SPY', 'AAPL', 'NVDA', 'TSLA'][Math.floor(Math.random() * 4)],
      entry,
      stop: type === 'futures' ? entry - stopPts : null,
      tp: type === 'futures' ? entry + stopPts : null,
      exit: entry + netPts,
      netPoints: netPts,
      netR: Math.round((netPts / (stopPts || 10)) * 100) / 100,
      pnl: netPts * (type === 'futures' ? 5 : 100),
      source: 'IB',
      result: isWin ? 'WIN' : 'LOSS',
    })
  }
  return trades
}
