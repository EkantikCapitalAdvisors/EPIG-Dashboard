export function dashboardPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-1">Performance Dashboard</h1>
        <p class="text-epig-textMuted">Real results. Full transparency. Both wins and losses.</p>
      </div>
      <div class="flex items-center gap-3 mt-4 md:mt-0">
        <div class="pulse-dot"></div>
        <span class="text-sm text-epig-textDim">Last updated: <span id="last-updated" class="text-epig-text font-mono">Loading...</span></span>
      </div>
    </div>

    <!-- Data Source Banner -->
    <div id="data-banner" class="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-3 mb-6 hidden">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span id="data-banner-text" class="text-sm text-blue-300"></span>
      </div>
    </div>

    <!-- Strategy Tabs -->
    <div class="flex flex-wrap gap-2 mb-6">
      <button class="strategy-tab active" data-strategy="A" onclick="switchStrategy('A')">
        <span class="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>Strategy A &mdash; Allocation
      </button>
      <button class="strategy-tab" data-strategy="B" onclick="switchStrategy('B')">
        <span class="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>Strategy B &mdash; Futures
      </button>
      <button class="strategy-tab" data-strategy="C" onclick="switchStrategy('C')">
        <span class="inline-block w-3 h-3 rounded-full bg-amber-500 mr-2"></span>Strategy C &mdash; Pivots
      </button>
    </div>

    <!-- Date Range -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button class="text-xs px-3 py-1.5 rounded-md bg-epig-card border border-epig-border text-epig-textDim hover:text-white hover:border-blue-500 transition-all date-btn" data-range="30d">30D</button>
      <button class="text-xs px-3 py-1.5 rounded-md bg-epig-card border border-epig-border text-epig-textDim hover:text-white hover:border-blue-500 transition-all date-btn" data-range="90d">90D</button>
      <button class="text-xs px-3 py-1.5 rounded-md bg-blue-500/20 border border-blue-500/50 text-blue-400 font-semibold transition-all date-btn active" data-range="ytd">YTD</button>
    </div>

    <!-- KPI Grid: Strategy A -->
    <div id="kpi-grid-A" class="kpi-grid-panel">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value" id="kpi-a-cumreturn">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value" id="kpi-a-winrate">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value" id="kpi-a-maxdd">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Sharpe Ratio</div>
          <div class="kpi-value" id="kpi-a-sharpe">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Trades</div>
          <div class="kpi-value text-white" id="kpi-a-trades">—</div>
          <div class="text-xs text-epig-textDim mt-1" id="kpi-a-fills"></div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Current Allocation</div>
          <div class="text-sm mt-2" id="kpi-a-alloc">
            <div class="flex justify-between"><span class="text-epig-textDim">SPY</span><span class="font-mono text-blue-400" id="alloc-spy">—</span></div>
            <div class="flex justify-between"><span class="text-epig-textDim">Stocks</span><span class="font-mono text-blue-400" id="alloc-stocks">—</span></div>
            <div class="flex justify-between"><span class="text-epig-textDim">Cash</span><span class="font-mono text-blue-400" id="alloc-cash">—</span></div>
          </div>
        </div>
      </div>
      <!-- Strategy A extra stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Total P&L</div>
          <div class="kpi-value" id="kpi-a-pnl">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">EV per Trade (R)</div>
          <div class="kpi-value" id="kpi-a-evr">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Avg Win / Avg Loss</div>
          <div class="kpi-value text-white" id="kpi-a-wl">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Risk per Trade</div>
          <div class="kpi-value text-white" id="kpi-a-risk">—</div>
        </div>
      </div>
    </div>

    <!-- KPI Grid: Strategy B -->
    <div id="kpi-grid-B" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value" id="kpi-b-cumreturn">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value" id="kpi-b-maxdd">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value" id="kpi-b-winrate">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">EV per Trade (R)</div>
          <div class="kpi-value" id="kpi-b-evr">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Profit Factor</div>
          <div class="kpi-value text-white" id="kpi-b-pf">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Trades</div>
          <div class="kpi-value text-white" id="kpi-b-trades">—</div>
          <div class="text-xs text-epig-textDim mt-1" id="kpi-b-fills"></div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total P&L</div>
          <div class="kpi-value" id="kpi-b-pnl">—</div>
        </div>
      </div>
      <!-- B extra row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Avg Win / Avg Loss</div>
          <div class="kpi-value text-white" id="kpi-b-wl">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Risk per Trade</div>
          <div class="kpi-value text-white" id="kpi-b-risk">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Sharpe / Sortino</div>
          <div class="kpi-value text-white" id="kpi-b-sharpe">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Annualized P&L</div>
          <div class="kpi-value" id="kpi-b-annual">—</div>
        </div>
      </div>
      <!-- Rolling Metrics B -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="b-r30-wr">—</div></div>
            <div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="b-r30-ev">—</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="b-r30-t">—</div></div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="b-r90-wr">—</div></div>
            <div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="b-r90-ev">—</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="b-r90-t">—</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- KPI Grid: Strategy C -->
    <div id="kpi-grid-C" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value" id="kpi-c-cumreturn">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value" id="kpi-c-maxdd">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value" id="kpi-c-winrate">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">EV per Trade (R)</div>
          <div class="kpi-value" id="kpi-c-evr">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Profit Factor</div>
          <div class="kpi-value text-white" id="kpi-c-pf">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Trades</div>
          <div class="kpi-value text-white" id="kpi-c-trades">—</div>
          <div class="text-xs text-epig-textDim mt-1" id="kpi-c-fills"></div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total P&L</div>
          <div class="kpi-value" id="kpi-c-pnl">—</div>
        </div>
      </div>
      <!-- C extra row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Avg Win / Avg Loss</div>
          <div class="kpi-value text-white" id="kpi-c-wl">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Risk per Trade</div>
          <div class="kpi-value text-white" id="kpi-c-risk">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Sharpe / Sortino</div>
          <div class="kpi-value text-white" id="kpi-c-sharpe">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Annualized P&L</div>
          <div class="kpi-value" id="kpi-c-annual">—</div>
        </div>
      </div>
      <!-- Rolling Metrics C -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="c-r30-wr">—</div></div>
            <div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="c-r30-ev">—</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="c-r30-t">—</div></div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="c-r90-wr">—</div></div>
            <div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="c-r90-ev">—</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="c-r90-t">—</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Equity Curve -->
      <div class="chart-container">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-sm">Equity Curve (indexed to 100)</h3>
          <label class="flex items-center gap-2 text-xs text-epig-textDim cursor-pointer">
            <input type="checkbox" id="spy-toggle" checked class="rounded" onchange="toggleSPY()">
            SPY Benchmark
          </label>
        </div>
        <div style="height:300px;"><canvas id="equity-chart"></canvas></div>
      </div>
      <!-- Drawdown Curve -->
      <div class="chart-container">
        <h3 class="font-semibold text-sm mb-4">Drawdown</h3>
        <div style="height:300px;"><canvas id="drawdown-chart"></canvas></div>
      </div>
    </div>

    <!-- Monthly Returns Heatmap -->
    <div class="chart-container mb-8">
      <h3 class="font-semibold text-sm mb-4">Monthly Returns</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm" id="monthly-returns-table">
          <thead>
            <tr>
              <th class="text-left text-epig-textDim font-medium px-2 py-2">Year</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Jan</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Feb</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Mar</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Apr</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">May</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Jun</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Jul</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Aug</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Sep</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Oct</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Nov</th>
              <th class="text-center text-epig-textDim font-medium px-1 py-2">Dec</th>
              <th class="text-center text-epig-textDim font-medium px-2 py-2">YTD</th>
            </tr>
          </thead>
          <tbody id="heatmap-body"></tbody>
        </table>
      </div>
    </div>

    <!-- Trade Table (B & C only) -->
    <div id="trade-table-section" class="chart-container mb-8 hidden">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold text-sm">Recent Trades (Round Trips)</h3>
        <span class="text-xs text-epig-textDim">Showing last 20 closed round-trips</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-epig-border">
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">#</th>
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">Date</th>
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">Instrument</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">P&L ($)</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">R-Multiple</th>
              <th class="text-center text-epig-textDim font-medium px-3 py-2.5">Source</th>
              <th class="text-center text-epig-textDim font-medium px-3 py-2.5">Result</th>
            </tr>
          </thead>
          <tbody id="trade-body"></tbody>
        </table>
      </div>
    </div>

    <!-- Compliance -->
    <div class="text-center py-6">
      <p class="text-xs text-epig-textDim max-w-3xl mx-auto leading-relaxed">
        <strong>Educational Use Only</strong> &mdash; This dashboard is for informational and educational purposes only.
        Nothing herein constitutes investment advice. Past performance is not indicative of future results.
        All data is verified via Interactive Brokers execution reports.
        <a href="/disclosures" class="text-blue-400 hover:text-blue-300 no-underline">Full disclosure &rarr;</a>
      </p>
    </div>
  </div>

  <script>
    let dashData = null;
    let currentStrategy = 'A';
    let equityChart = null;
    let drawdownChart = null;

    const strategyColors = { A: '#3b82f6', B: '#10b981', C: '#f59e0b' };

    async function loadDashboard() {
      try {
        const res = await fetch('/api/dashboard/summary');
        dashData = await res.json();
        updateDashboard();
      } catch(e) {
        console.error('Failed to load dashboard data:', e);
      }
    }

    function switchStrategy(s) {
      currentStrategy = s;
      document.querySelectorAll('.strategy-tab').forEach(t => t.classList.remove('active'));
      document.querySelector('[data-strategy="'+s+'"]').classList.add('active');
      document.querySelectorAll('.kpi-grid-panel').forEach(p => p.classList.add('hidden'));
      document.getElementById('kpi-grid-'+s).classList.remove('hidden');
      if (s === 'A') {
        document.getElementById('trade-table-section').classList.add('hidden');
      } else {
        document.getElementById('trade-table-section').classList.remove('hidden');
      }
      updateKPIs();
      updateCharts();
      updateHeatmap();
      updateTradeTable();
      updateBanner();
    }

    function fmtPnl(v) {
      if (v === undefined || v === null) return '—';
      const sign = v >= 0 ? '+' : '';
      return sign + '$' + Math.abs(v).toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0});
    }
    function fmtPct(v) {
      if (v === undefined || v === null) return '—';
      const sign = v >= 0 ? '+' : '';
      return sign + v.toFixed(1) + '%';
    }
    function pnlColor(v) {
      if (v > 0) return 'text-emerald-400';
      if (v < 0) return 'text-red-400';
      return 'text-white';
    }

    function updateDashboard() {
      if (!dashData || !dashData.strategies) return;
      updateKPIs();
      updateCharts();
      updateHeatmap();
      updateTradeTable();
      updateBanner();
    }

    function updateBanner() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      const banner = document.getElementById('data-banner');
      const text = document.getElementById('data-banner-text');
      if (d && d.totalFills > 0) {
        banner.classList.remove('hidden');
        const range = d.dataRange || {};
        text.textContent = '2026 YTD data: ' + (d.totalFills || 0) + ' IB fills → ' + (d.totalTrades || 0) + ' closed round-trips' +
          (d.openTrades ? ' (' + d.openTrades + ' open)' : '') +
          (range.firstDate ? ' | ' + range.firstDate + ' to ' + range.lastDate + ' (' + range.daySpan + ' days)' : '');
      } else {
        banner.classList.add('hidden');
      }
    }

    function updateKPIs() {
      if (!dashData || !dashData.strategies) return;
      const s = currentStrategy;
      const d = dashData.strategies[s];
      if (!d) return;

      // Update last-updated
      if (d.lastUpdated) {
        document.getElementById('last-updated').textContent = new Date(d.lastUpdated).toLocaleDateString('en-US', { weekday:'short', year:'numeric', month:'short', day:'numeric' });
      }

      // Helper to set element text and color
      function setKpi(id, text, colorVal) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = text;
        if (colorVal !== undefined) {
          el.className = 'kpi-value ' + pnlColor(colorVal);
        }
      }

      if (s === 'A') {
        setKpi('kpi-a-cumreturn', fmtPct(d.cumulativeReturn), d.cumulativeReturn);
        setKpi('kpi-a-winrate', (d.winRate || 0).toFixed(1) + '%', d.winRate >= 50 ? 1 : -1);
        setKpi('kpi-a-maxdd', fmtPct(d.maxDrawdown), d.maxDrawdown);
        setKpi('kpi-a-sharpe', (d.sharpeRatio || 0).toFixed(2));
        setKpi('kpi-a-trades', d.totalTrades || 0);
        const fillsEl = document.getElementById('kpi-a-fills');
        if (fillsEl) fillsEl.textContent = (d.totalFills || 0) + ' fills';
        setKpi('kpi-a-pnl', fmtPnl(d.totalPnl), d.totalPnl);
        setKpi('kpi-a-evr', (d.evPerTradeR >= 0 ? '+' : '') + (d.evPerTradeR || 0).toFixed(2) + 'R', d.evPerTradeR);
        setKpi('kpi-a-wl', '$' + (d.avgWinDollar||0).toFixed(0) + ' / $' + (d.avgLossDollar||0).toFixed(0));
        setKpi('kpi-a-risk', '$' + (d.riskPerTrade||0).toFixed(0));
        if (d.currentAllocation) {
          const as = document.getElementById('alloc-spy');
          const ast = document.getElementById('alloc-stocks');
          const ac = document.getElementById('alloc-cash');
          if (as) as.textContent = (d.currentAllocation.spy || 0) + '%';
          if (ast) ast.textContent = (d.currentAllocation.stocks || 0) + '%';
          if (ac) ac.textContent = (d.currentAllocation.cash || 0) + '%';
        }
      }

      if (s === 'B') {
        setKpi('kpi-b-cumreturn', fmtPct(d.cumulativeReturn), d.cumulativeReturn);
        setKpi('kpi-b-maxdd', fmtPct(d.maxDrawdown), d.maxDrawdown);
        setKpi('kpi-b-winrate', (d.winRate || 0).toFixed(1) + '%', d.winRate >= 50 ? 1 : -1);
        setKpi('kpi-b-evr', (d.evPerTradeR >= 0 ? '+' : '') + (d.evPerTradeR || 0).toFixed(2) + 'R', d.evPerTradeR);
        setKpi('kpi-b-pf', (d.profitFactor || 0).toFixed(2));
        setKpi('kpi-b-trades', d.totalTrades || 0);
        const fillsB = document.getElementById('kpi-b-fills');
        if (fillsB) fillsB.textContent = (d.totalFills || 0) + ' fills';
        setKpi('kpi-b-pnl', fmtPnl(d.totalPnl), d.totalPnl);
        setKpi('kpi-b-wl', '$' + (d.avgWinDollar||0).toFixed(0) + ' / $' + (d.avgLossDollar||0).toFixed(0));
        setKpi('kpi-b-risk', '$' + (d.riskPerTrade||0).toFixed(0));
        setKpi('kpi-b-sharpe', (d.sharpeRatio||0).toFixed(2) + ' / ' + (d.sortinoRatio||0).toFixed(2));
        setKpi('kpi-b-annual', fmtPnl(d.annualPnl), d.annualPnl);

        // Rolling
        const r30 = d.rollingMetrics && d.rollingMetrics['30d'] ? d.rollingMetrics['30d'] : {};
        const r90 = d.rollingMetrics && d.rollingMetrics['90d'] ? d.rollingMetrics['90d'] : {};
        setRolling('b', r30, r90);
      }

      if (s === 'C') {
        setKpi('kpi-c-cumreturn', fmtPct(d.cumulativeReturn), d.cumulativeReturn);
        setKpi('kpi-c-maxdd', fmtPct(d.maxDrawdown), d.maxDrawdown);
        setKpi('kpi-c-winrate', (d.winRate || 0).toFixed(1) + '%', d.winRate >= 50 ? 1 : -1);
        setKpi('kpi-c-evr', (d.evPerTradeR >= 0 ? '+' : '') + (d.evPerTradeR || 0).toFixed(2) + 'R', d.evPerTradeR);
        setKpi('kpi-c-pf', (d.profitFactor || 0).toFixed(2));
        setKpi('kpi-c-trades', d.totalTrades || 0);
        const fillsC = document.getElementById('kpi-c-fills');
        if (fillsC) fillsC.textContent = (d.totalFills || 0) + ' fills';
        setKpi('kpi-c-pnl', fmtPnl(d.totalPnl), d.totalPnl);
        setKpi('kpi-c-wl', '$' + (d.avgWinDollar||0).toFixed(0) + ' / $' + (d.avgLossDollar||0).toFixed(0));
        setKpi('kpi-c-risk', '$' + (d.riskPerTrade||0).toFixed(0));
        setKpi('kpi-c-sharpe', (d.sharpeRatio||0).toFixed(2) + ' / ' + (d.sortinoRatio||0).toFixed(2));
        setKpi('kpi-c-annual', fmtPnl(d.annualPnl), d.annualPnl);

        const r30 = d.rollingMetrics && d.rollingMetrics['30d'] ? d.rollingMetrics['30d'] : {};
        const r90 = d.rollingMetrics && d.rollingMetrics['90d'] ? d.rollingMetrics['90d'] : {};
        setRolling('c', r30, r90);
      }
    }

    function setRolling(prefix, r30, r90) {
      function setEl(id, text, colorVal) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = text;
        if (colorVal !== undefined) {
          el.className = 'font-mono text-lg font-bold ' + pnlColor(colorVal);
        }
      }
      setEl(prefix + '-r30-wr', (r30.winRate || 0).toFixed(1) + '%', r30.winRate >= 50 ? 1 : -1);
      setEl(prefix + '-r30-ev', (r30.expectancyR >= 0 ? '+' : '') + (r30.expectancyR || 0).toFixed(2) + 'R', r30.expectancyR);
      setEl(prefix + '-r30-t', r30.trades || 0);
      setEl(prefix + '-r90-wr', (r90.winRate || 0).toFixed(1) + '%', r90.winRate >= 50 ? 1 : -1);
      setEl(prefix + '-r90-ev', (r90.expectancyR >= 0 ? '+' : '') + (r90.expectancyR || 0).toFixed(2) + 'R', r90.expectancyR);
      setEl(prefix + '-r90-t', r90.trades || 0);
    }

    function updateCharts() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      if (!d) return;
      const color = strategyColors[currentStrategy];

      // Equity chart
      if (equityChart) equityChart.destroy();
      const eqCtx = document.getElementById('equity-chart').getContext('2d');
      const eqData = d.equityCurve || [];
      if (eqData.length === 0) {
        equityChart = new Chart(eqCtx, { type: 'line', data: { datasets: [] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
      } else {
        const datasets = [{
          label: 'Strategy ' + currentStrategy,
          data: eqData.map(p => ({ x: p.date, y: p.value })),
          borderColor: color,
          backgroundColor: color + '15',
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          borderWidth: 2,
        }];
        if (document.getElementById('spy-toggle').checked) {
          datasets.push({
            label: 'SPY',
            data: eqData.map(p => ({ x: p.date, y: p.spy })),
            borderColor: '#64748b',
            borderDash: [5,5],
            fill: false,
            tension: 0.3,
            pointRadius: 0,
            borderWidth: 1.5,
          });
        }
        equityChart = new Chart(eqCtx, {
          type: 'line',
          data: { datasets },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#94a3b8', font: { size: 11 } } } },
            scales: {
              x: { type: 'category', ticks: { color: '#64748b', maxTicksLimit: 8, font: { size: 10 } }, grid: { color: '#1e293b' } },
              y: { ticks: { color: '#64748b', font: { size: 10 }, callback: v => v.toFixed(0) }, grid: { color: '#1e293b' } }
            }
          }
        });
      }

      // Drawdown chart
      if (drawdownChart) drawdownChart.destroy();
      const ddCtx = document.getElementById('drawdown-chart').getContext('2d');
      const ddData = d.drawdownCurve || [];
      if (ddData.length === 0) {
        drawdownChart = new Chart(ddCtx, { type: 'line', data: { datasets: [] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
      } else {
        drawdownChart = new Chart(ddCtx, {
          type: 'line',
          data: {
            datasets: [{
              label: 'Drawdown',
              data: ddData.map(p => ({ x: p.date, y: p.value })),
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239,68,68,0.08)',
              fill: true,
              tension: 0.3,
              pointRadius: 0,
              borderWidth: 1.5,
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { type: 'category', ticks: { color: '#64748b', maxTicksLimit: 8, font: { size: 10 } }, grid: { color: '#1e293b' } },
              y: { ticks: { color: '#64748b', font: { size: 10 }, callback: v => v.toFixed(1) + '%' }, grid: { color: '#1e293b' } }
            }
          }
        });
      }
    }

    function updateHeatmap() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      if (!d) return;
      const body = document.getElementById('heatmap-body');
      body.innerHTML = '';
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const yearData = {};
      (d.monthlyReturns || []).forEach(m => {
        if (!yearData[m.year]) yearData[m.year] = {};
        yearData[m.year][m.month] = m.return;
      });
      if (Object.keys(yearData).length === 0) {
        body.innerHTML = '<tr><td colspan="14" class="px-4 py-8 text-center text-epig-textDim">No monthly return data available yet</td></tr>';
        return;
      }
      for (const [year, mData] of Object.entries(yearData)) {
        let ytd = 0;
        let row = '<tr><td class="px-2 py-2 font-mono text-epig-textDim font-semibold">' + year + '</td>';
        months.forEach(m => {
          const val = mData[m];
          if (val !== undefined) {
            ytd += val;
            const bg = val >= 0
              ? 'rgba(16,185,129,' + Math.min(Math.abs(val)/10, 0.5) + ')'
              : 'rgba(239,68,68,' + Math.min(Math.abs(val)/10, 0.5) + ')';
            const color = val >= 0 ? '#10b981' : '#ef4444';
            row += '<td class="px-1 py-1"><div class="heatmap-cell" style="background:'+bg+';color:'+color+'">'+(val>=0?'+':'')+val.toFixed(1)+'%</div></td>';
          } else {
            row += '<td class="px-1 py-1"><div class="heatmap-cell" style="background:#111827;color:#334155">&mdash;</div></td>';
          }
        });
        const ytdBg = ytd >= 0 ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)';
        const ytdColor = ytd >= 0 ? '#10b981' : '#ef4444';
        row += '<td class="px-2 py-1"><div class="heatmap-cell font-bold" style="background:'+ytdBg+';color:'+ytdColor+'">'+(ytd>=0?'+':'')+ytd.toFixed(1)+'%</div></td>';
        row += '</tr>';
        body.innerHTML += row;
      }
    }

    function updateTradeTable() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      if (!d || !d.recentTrades || d.recentTrades.length === 0) return;
      const body = document.getElementById('trade-body');
      body.innerHTML = '';
      d.recentTrades.forEach(t => {
        const color = pnlColor(t.pnl);
        const badge = t.result === 'WIN' ? 'win-badge' : t.result === 'LOSS' ? 'loss-badge' : 'text-epig-textDim';
        body.innerHTML += '<tr class="border-b border-epig-border/50 trade-row transition-colors">' +
          '<td class="px-3 py-2.5 font-mono text-epig-textDim">' + t.id + '</td>' +
          '<td class="px-3 py-2.5 font-mono text-sm">' + t.date + '</td>' +
          '<td class="px-3 py-2.5 font-mono text-sm">' + (t.instrument || '—') + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm ' + color + '">' + fmtPnl(t.pnl) + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm ' + color + '">' + (t.netR >= 0 ? '+' : '') + t.netR.toFixed(2) + 'R</td>' +
          '<td class="px-3 py-2.5 text-center"><span class="text-xs text-epig-textDim">' + t.source + '</span></td>' +
          '<td class="px-3 py-2.5 text-center"><span class="' + badge + '">' + t.result + '</span></td>' +
          '</tr>';
      });
    }

    function toggleSPY() { updateCharts(); }

    loadDashboard();
  </script>
  `
}
