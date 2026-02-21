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
      <button class="strategy-tab" data-strategy="Combined" onclick="switchStrategy('Combined')">
        <span class="inline-block w-3 h-3 rounded-full bg-purple-500 mr-2"></span>Combined Portfolio
      </button>
      <button class="strategy-tab active" data-strategy="A" onclick="switchStrategy('A')">
        <span class="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>Strategy A
      </button>
      <button class="strategy-tab" data-strategy="B" onclick="switchStrategy('B')">
        <span class="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>Strategy B
      </button>
      <button class="strategy-tab" data-strategy="C" onclick="switchStrategy('C')">
        <span class="inline-block w-3 h-3 rounded-full bg-amber-500 mr-2"></span>Strategy C
      </button>
    </div>

    <!-- Date Range -->
    <div class="flex flex-wrap gap-2 mb-8">
      <button class="text-xs px-3 py-1.5 rounded-md bg-epig-card border border-epig-border text-epig-textDim hover:text-white hover:border-blue-500 transition-all date-btn" data-range="30d">30D</button>
      <button class="text-xs px-3 py-1.5 rounded-md bg-epig-card border border-epig-border text-epig-textDim hover:text-white hover:border-blue-500 transition-all date-btn" data-range="90d">90D</button>
      <button class="text-xs px-3 py-1.5 rounded-md bg-blue-500/20 border border-blue-500/50 text-blue-400 font-semibold transition-all date-btn active" data-range="ytd">YTD</button>
    </div>

    <!-- ═══════════════════ KPI Grid: Combined Portfolio ═══════════════════ -->
    <div id="kpi-grid-Combined" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value" id="kpi-comb-cumreturn">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value" id="kpi-comb-maxdd">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value" id="kpi-comb-winrate">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Profit Factor</div>
          <div class="kpi-value text-white" id="kpi-comb-pf">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Trades</div>
          <div class="kpi-value text-white" id="kpi-comb-trades">—</div>
          <div class="text-xs text-epig-textDim mt-1" id="kpi-comb-fills"></div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total P&L</div>
          <div class="kpi-value" id="kpi-comb-pnl">—</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Annualized P&L</div>
          <div class="kpi-value" id="kpi-comb-annual">—</div>
        </div>
      </div>
      <!-- Sharpe/Sortino row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Sharpe / Sortino</div>
          <div class="kpi-value text-white" id="kpi-comb-sharpe">—</div>
        </div>
        <div class="kpi-card col-span-1 md:col-span-3">
          <div class="kpi-label mb-3">Strategy Contribution (P&L)</div>
          <div class="flex items-center gap-3">
            <div id="contrib-bar" class="flex h-6 rounded-md overflow-hidden flex-1 bg-epig-border"></div>
          </div>
          <div class="flex items-center gap-4 mt-2 text-xs" id="contrib-legend"></div>
        </div>
      </div>
      <!-- Rolling Metrics Combined -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="comb-r30-wr">—</div></div>
            <div><div class="kpi-label">Expectancy ($)</div><div class="font-mono text-lg font-bold" id="comb-r30-ev">—</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="comb-r30-t">—</div></div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="comb-r90-wr">—</div></div>
            <div><div class="kpi-label">Expectancy ($)</div><div class="font-mono text-lg font-bold" id="comb-r90-ev">—</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="comb-r90-t">—</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════ KPI Grid: Strategy A ═══════════════════ -->
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
          <div class="text-sm mt-2">
            <div class="flex justify-between"><span class="text-epig-textDim">SPY</span><span class="font-mono text-blue-400" id="alloc-spy">—</span></div>
            <div class="flex justify-between"><span class="text-epig-textDim">Stocks</span><span class="font-mono text-blue-400" id="alloc-stocks">—</span></div>
            <div class="flex justify-between"><span class="text-epig-textDim">Cash</span><span class="font-mono text-blue-400" id="alloc-cash">—</span></div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card"><div class="kpi-label">Total P&L</div><div class="kpi-value" id="kpi-a-pnl">—</div></div>
        <div class="kpi-card"><div class="kpi-label">EV per Trade (R)</div><div class="kpi-value" id="kpi-a-evr">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Avg Win / Avg Loss</div><div class="kpi-value text-white" id="kpi-a-wl">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Risk per Trade</div><div class="kpi-value text-white" id="kpi-a-risk">—</div></div>
      </div>
    </div>

    <!-- ═══════════════════ KPI Grid: Strategy B ═══════════════════ -->
    <div id="kpi-grid-B" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card"><div class="kpi-label">Cumulative Return</div><div class="kpi-value" id="kpi-b-cumreturn">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Max Drawdown</div><div class="kpi-value" id="kpi-b-maxdd">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Win Rate</div><div class="kpi-value" id="kpi-b-winrate">—</div></div>
        <div class="kpi-card"><div class="kpi-label">EV per Trade (R)</div><div class="kpi-value" id="kpi-b-evr">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Profit Factor</div><div class="kpi-value text-white" id="kpi-b-pf">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Total Trades</div><div class="kpi-value text-white" id="kpi-b-trades">—</div><div class="text-xs text-epig-textDim mt-1" id="kpi-b-fills"></div></div>
        <div class="kpi-card"><div class="kpi-label">Total P&L</div><div class="kpi-value" id="kpi-b-pnl">—</div></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card"><div class="kpi-label">Avg Win / Avg Loss</div><div class="kpi-value text-white" id="kpi-b-wl">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Risk per Trade</div><div class="kpi-value text-white" id="kpi-b-risk">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Sharpe / Sortino</div><div class="kpi-value text-white" id="kpi-b-sharpe">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Annualized P&L</div><div class="kpi-value" id="kpi-b-annual">—</div></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card"><div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div><div class="grid grid-cols-3 gap-4"><div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="b-r30-wr">—</div></div><div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="b-r30-ev">—</div></div><div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="b-r30-t">—</div></div></div></div>
        <div class="kpi-card"><div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div><div class="grid grid-cols-3 gap-4"><div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="b-r90-wr">—</div></div><div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="b-r90-ev">—</div></div><div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="b-r90-t">—</div></div></div></div>
      </div>
    </div>

    <!-- ═══════════════════ KPI Grid: Strategy C ═══════════════════ -->
    <div id="kpi-grid-C" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card"><div class="kpi-label">Cumulative Return</div><div class="kpi-value" id="kpi-c-cumreturn">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Max Drawdown</div><div class="kpi-value" id="kpi-c-maxdd">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Win Rate</div><div class="kpi-value" id="kpi-c-winrate">—</div></div>
        <div class="kpi-card"><div class="kpi-label">EV per Trade (R)</div><div class="kpi-value" id="kpi-c-evr">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Profit Factor</div><div class="kpi-value text-white" id="kpi-c-pf">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Total Trades</div><div class="kpi-value text-white" id="kpi-c-trades">—</div><div class="text-xs text-epig-textDim mt-1" id="kpi-c-fills"></div></div>
        <div class="kpi-card"><div class="kpi-label">Total P&L</div><div class="kpi-value" id="kpi-c-pnl">—</div></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="kpi-card"><div class="kpi-label">Avg Win / Avg Loss</div><div class="kpi-value text-white" id="kpi-c-wl">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Risk per Trade</div><div class="kpi-value text-white" id="kpi-c-risk">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Sharpe / Sortino</div><div class="kpi-value text-white" id="kpi-c-sharpe">—</div></div>
        <div class="kpi-card"><div class="kpi-label">Annualized P&L</div><div class="kpi-value" id="kpi-c-annual">—</div></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card"><div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div><div class="grid grid-cols-3 gap-4"><div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="c-r30-wr">—</div></div><div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="c-r30-ev">—</div></div><div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="c-r30-t">—</div></div></div></div>
        <div class="kpi-card"><div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div><div class="grid grid-cols-3 gap-4"><div><div class="kpi-label">Win Rate</div><div class="font-mono text-lg font-bold" id="c-r90-wr">—</div></div><div><div class="kpi-label">Expectancy (R)</div><div class="font-mono text-lg font-bold" id="c-r90-ev">—</div></div><div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold" id="c-r90-t">—</div></div></div></div>
      </div>
    </div>

    <!-- ═══════════════════ Charts Row ═══════════════════ -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
      <div class="chart-container">
        <h3 class="font-semibold text-sm mb-4">Drawdown</h3>
        <div style="height:300px;"><canvas id="drawdown-chart"></canvas></div>
      </div>
    </div>

    <!-- ═══════════════════ Returns Section with Weekly/Monthly Toggle ═══════════════════ -->
    <div class="chart-container mb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold text-sm">Returns</h3>
        <div class="flex gap-1">
          <button class="text-xs px-3 py-1 rounded-md transition-all returns-view-btn active" data-view="monthly" onclick="switchReturnsView('monthly')">Monthly</button>
          <button class="text-xs px-3 py-1 rounded-md transition-all returns-view-btn" data-view="weekly" onclick="switchReturnsView('weekly')">Weekly</button>
        </div>
      </div>

      <!-- Monthly Returns Heatmap -->
      <div id="monthly-view" class="overflow-x-auto">
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

      <!-- Weekly Returns Table -->
      <div id="weekly-view" class="overflow-x-auto hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-epig-border">
              <th class="text-left text-epig-textDim font-medium px-3 py-2">Week</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2">Return (%)</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2">P&L ($)</th>
              <th class="text-left text-epig-textDim font-medium px-3 py-2" style="width:50%">Visual</th>
            </tr>
          </thead>
          <tbody id="weekly-body"></tbody>
        </table>
      </div>
    </div>

    <!-- Trade Table (B, C, Combined) -->
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

  <style>
    .returns-view-btn { background: rgba(30,41,59,0.5); border: 1px solid rgba(51,65,85,0.5); color: #64748b; }
    .returns-view-btn.active { background: rgba(59,130,246,0.2); border-color: rgba(59,130,246,0.5); color: #60a5fa; font-weight: 600; }
    .returns-view-btn:hover:not(.active) { color: #cbd5e1; border-color: rgba(100,116,139,0.6); }
    .weekly-bar-pos { background: linear-gradient(90deg, rgba(16,185,129,0.3), rgba(16,185,129,0.15)); border-left: 3px solid #10b981; }
    .weekly-bar-neg { background: linear-gradient(90deg, rgba(239,68,68,0.3), rgba(239,68,68,0.15)); border-left: 3px solid #ef4444; }
  </style>

  <script>
    let dashData = null;
    let currentStrategy = 'A';
    let currentReturnsView = 'monthly';
    let equityChart = null;
    let drawdownChart = null;

    const strategyColors = { A: '#3b82f6', B: '#10b981', C: '#f59e0b', Combined: '#a855f7' };

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
      const grid = document.getElementById('kpi-grid-'+s);
      if (grid) grid.classList.remove('hidden');
      // Show trade table for B, C (not A, not Combined)
      if (s === 'A' || s === 'Combined') {
        document.getElementById('trade-table-section').classList.add('hidden');
      } else {
        document.getElementById('trade-table-section').classList.remove('hidden');
      }
      updateKPIs();
      updateCharts();
      updateReturnsView();
      updateTradeTable();
      updateBanner();
    }

    function switchReturnsView(view) {
      currentReturnsView = view;
      document.querySelectorAll('.returns-view-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-view="'+view+'"]').classList.add('active');
      updateReturnsView();
    }

    function updateReturnsView() {
      if (currentReturnsView === 'monthly') {
        document.getElementById('monthly-view').classList.remove('hidden');
        document.getElementById('weekly-view').classList.add('hidden');
        updateHeatmap();
      } else {
        document.getElementById('monthly-view').classList.add('hidden');
        document.getElementById('weekly-view').classList.remove('hidden');
        updateWeeklyTable();
      }
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
      updateReturnsView();
      updateTradeTable();
      updateBanner();
    }

    function updateBanner() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      const banner = document.getElementById('data-banner');
      const text = document.getElementById('data-banner-text');
      if (d && (d.totalFills > 0 || d.totalTrades > 0)) {
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

      if (d.lastUpdated) {
        document.getElementById('last-updated').textContent = new Date(d.lastUpdated).toLocaleDateString('en-US', { weekday:'short', year:'numeric', month:'short', day:'numeric' });
      }

      function setKpi(id, text, colorVal) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = text;
        if (colorVal !== undefined) el.className = 'kpi-value ' + pnlColor(colorVal);
      }

      if (s === 'Combined') {
        setKpi('kpi-comb-cumreturn', fmtPct(d.cumulativeReturn), d.cumulativeReturn);
        setKpi('kpi-comb-maxdd', fmtPct(d.maxDrawdown), d.maxDrawdown);
        setKpi('kpi-comb-winrate', (d.winRate || 0).toFixed(1) + '%', d.winRate >= 50 ? 1 : -1);
        setKpi('kpi-comb-pf', (d.profitFactor || 0).toFixed(2));
        setKpi('kpi-comb-trades', d.totalTrades || 0);
        const fillsEl = document.getElementById('kpi-comb-fills');
        if (fillsEl) fillsEl.textContent = (d.totalFills || 0) + ' fills';
        setKpi('kpi-comb-pnl', fmtPnl(d.totalPnl), d.totalPnl);
        setKpi('kpi-comb-annual', fmtPnl(d.annualPnl), d.annualPnl);
        setKpi('kpi-comb-sharpe', (d.sharpeRatio||0).toFixed(2) + ' / ' + (d.sortinoRatio||0).toFixed(2));

        // Contribution bar
        const contrib = d.strategyContribution || {};
        const bar = document.getElementById('contrib-bar');
        const legend = document.getElementById('contrib-legend');
        const total = Math.abs(contrib.A || 0) + Math.abs(contrib.B || 0) + Math.abs(contrib.C || 0);
        if (bar && legend && total > 0) {
          const pctA = Math.abs(contrib.A || 0) / total * 100;
          const pctB = Math.abs(contrib.B || 0) / total * 100;
          const pctC = Math.abs(contrib.C || 0) / total * 100;
          bar.innerHTML = '' +
            '<div style="width:'+pctA+'%;background:#3b82f6;opacity:'+(contrib.A>=0?'1':'0.4')+'" class="h-full" title="A: '+fmtPnl(contrib.A)+'"></div>' +
            '<div style="width:'+pctB+'%;background:#10b981;opacity:'+(contrib.B>=0?'1':'0.4')+'" class="h-full" title="B: '+fmtPnl(contrib.B)+'"></div>' +
            '<div style="width:'+pctC+'%;background:#f59e0b;opacity:'+(contrib.C>=0?'1':'0.4')+'" class="h-full" title="C: '+fmtPnl(contrib.C)+'"></div>';
          legend.innerHTML = '' +
            '<span><span class="inline-block w-2.5 h-2.5 rounded-sm mr-1" style="background:#3b82f6"></span>A: '+fmtPnl(contrib.A)+'</span>' +
            '<span><span class="inline-block w-2.5 h-2.5 rounded-sm mr-1" style="background:#10b981"></span>B: '+fmtPnl(contrib.B)+'</span>' +
            '<span><span class="inline-block w-2.5 h-2.5 rounded-sm mr-1" style="background:#f59e0b"></span>C: '+fmtPnl(contrib.C)+'</span>';
        }

        // Rolling for Combined
        const r30 = d.rollingMetrics && d.rollingMetrics['30d'] ? d.rollingMetrics['30d'] : {};
        const r90 = d.rollingMetrics && d.rollingMetrics['90d'] ? d.rollingMetrics['90d'] : {};
        setCombRolling(r30, r90);
      }

      if (s === 'A') {
        setKpi('kpi-a-cumreturn', fmtPct(d.cumulativeReturn), d.cumulativeReturn);
        setKpi('kpi-a-winrate', (d.winRate || 0).toFixed(1) + '%', d.winRate >= 50 ? 1 : -1);
        setKpi('kpi-a-maxdd', fmtPct(d.maxDrawdown), d.maxDrawdown);
        setKpi('kpi-a-sharpe', (d.sharpeRatio || 0).toFixed(2));
        setKpi('kpi-a-trades', d.totalTrades || 0);
        const fillsA = document.getElementById('kpi-a-fills');
        if (fillsA) fillsA.textContent = (d.totalFills || 0) + ' fills';
        setKpi('kpi-a-pnl', fmtPnl(d.totalPnl), d.totalPnl);
        setKpi('kpi-a-evr', (d.evPerTradeR >= 0 ? '+' : '') + (d.evPerTradeR || 0).toFixed(2) + 'R', d.evPerTradeR);
        setKpi('kpi-a-wl', '$' + (d.avgWinDollar||0).toFixed(0) + ' / $' + (d.avgLossDollar||0).toFixed(0));
        setKpi('kpi-a-risk', '$' + (d.riskPerTrade||0).toFixed(0));
        if (d.currentAllocation) {
          const s1 = document.getElementById('alloc-spy');
          const s2 = document.getElementById('alloc-stocks');
          const s3 = document.getElementById('alloc-cash');
          if (s1) s1.textContent = (d.currentAllocation.spy || 0) + '%';
          if (s2) s2.textContent = (d.currentAllocation.stocks || 0) + '%';
          if (s3) s3.textContent = (d.currentAllocation.cash || 0) + '%';
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
        if (colorVal !== undefined) el.className = 'font-mono text-lg font-bold ' + pnlColor(colorVal);
      }
      setEl(prefix + '-r30-wr', (r30.winRate || 0).toFixed(1) + '%', r30.winRate >= 50 ? 1 : -1);
      setEl(prefix + '-r30-ev', (r30.expectancyR >= 0 ? '+' : '') + (r30.expectancyR || 0).toFixed(2) + 'R', r30.expectancyR);
      setEl(prefix + '-r30-t', r30.trades || 0);
      setEl(prefix + '-r90-wr', (r90.winRate || 0).toFixed(1) + '%', r90.winRate >= 50 ? 1 : -1);
      setEl(prefix + '-r90-ev', (r90.expectancyR >= 0 ? '+' : '') + (r90.expectancyR || 0).toFixed(2) + 'R', r90.expectancyR);
      setEl(prefix + '-r90-t', r90.trades || 0);
    }

    function setCombRolling(r30, r90) {
      function setEl(id, text, colorVal) {
        const el = document.getElementById(id);
        if (!el) return;
        el.textContent = text;
        if (colorVal !== undefined) el.className = 'font-mono text-lg font-bold ' + pnlColor(colorVal);
      }
      setEl('comb-r30-wr', (r30.winRate || 0).toFixed(1) + '%', r30.winRate >= 50 ? 1 : -1);
      setEl('comb-r30-ev', fmtPnl(r30.expectancy), r30.expectancy);
      setEl('comb-r30-t', r30.trades || 0);
      setEl('comb-r90-wr', (r90.winRate || 0).toFixed(1) + '%', r90.winRate >= 50 ? 1 : -1);
      setEl('comb-r90-ev', fmtPnl(r90.expectancy), r90.expectancy);
      setEl('comb-r90-t', r90.trades || 0);
    }

    function updateCharts() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      if (!d) return;
      const color = strategyColors[currentStrategy] || '#a855f7';

      if (equityChart) equityChart.destroy();
      const eqCtx = document.getElementById('equity-chart').getContext('2d');
      const eqData = d.equityCurve || [];
      if (eqData.length === 0) {
        equityChart = new Chart(eqCtx, { type: 'line', data: { datasets: [] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
      } else {
        const datasets = [{
          label: currentStrategy === 'Combined' ? 'Combined' : 'Strategy ' + currentStrategy,
          data: eqData.map(p => ({ x: p.date, y: p.value })),
          borderColor: color, backgroundColor: color + '15', fill: true, tension: 0.3, pointRadius: 0, borderWidth: 2,
        }];
        if (document.getElementById('spy-toggle').checked) {
          datasets.push({
            label: 'SPY', data: eqData.map(p => ({ x: p.date, y: p.spy })),
            borderColor: '#64748b', borderDash: [5,5], fill: false, tension: 0.3, pointRadius: 0, borderWidth: 1.5,
          });
        }
        equityChart = new Chart(eqCtx, {
          type: 'line', data: { datasets },
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

      if (drawdownChart) drawdownChart.destroy();
      const ddCtx = document.getElementById('drawdown-chart').getContext('2d');
      const ddData = d.drawdownCurve || [];
      if (ddData.length === 0) {
        drawdownChart = new Chart(ddCtx, { type: 'line', data: { datasets: [] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
      } else {
        drawdownChart = new Chart(ddCtx, {
          type: 'line',
          data: { datasets: [{ label: 'Drawdown', data: ddData.map(p => ({ x: p.date, y: p.value })), borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.08)', fill: true, tension: 0.3, pointRadius: 0, borderWidth: 1.5 }] },
          options: {
            responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } },
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
            const bg = val >= 0 ? 'rgba(16,185,129,' + Math.min(Math.abs(val)/10, 0.5) + ')' : 'rgba(239,68,68,' + Math.min(Math.abs(val)/10, 0.5) + ')';
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

    function updateWeeklyTable() {
      if (!dashData || !dashData.strategies) return;
      const d = dashData.strategies[currentStrategy];
      if (!d) return;
      const body = document.getElementById('weekly-body');
      body.innerHTML = '';
      const weeks = d.weeklyReturns || [];
      if (weeks.length === 0) {
        body.innerHTML = '<tr><td colspan="4" class="px-4 py-8 text-center text-epig-textDim">No weekly return data available yet</td></tr>';
        return;
      }
      // Find max absolute return for bar scaling
      const maxAbs = Math.max(...weeks.map(w => Math.abs(w.return)), 0.01);
      // Show most recent first
      const sorted = [...weeks].reverse();
      let cumPnl = weeks.reduce((s, w) => s + w.pnl, 0);

      sorted.forEach(w => {
        const color = w.return >= 0 ? 'text-emerald-400' : 'text-red-400';
        const barClass = w.return >= 0 ? 'weekly-bar-pos' : 'weekly-bar-neg';
        const barWidth = Math.max(Math.abs(w.return) / maxAbs * 100, 2);
        const weekLabel = w.weekStart.slice(5) + ' → ' + w.weekEnd.slice(5);
        body.innerHTML += '<tr class="border-b border-epig-border/30">' +
          '<td class="px-3 py-2 font-mono text-sm text-epig-textDim">' + weekLabel + '</td>' +
          '<td class="px-3 py-2 text-right font-mono text-sm ' + color + '">' + (w.return >= 0 ? '+' : '') + w.return.toFixed(2) + '%</td>' +
          '<td class="px-3 py-2 text-right font-mono text-sm ' + color + '">' + fmtPnl(w.pnl) + '</td>' +
          '<td class="px-3 py-2"><div class="'+barClass+' rounded-sm h-4" style="width:'+barWidth+'%"></div></td>' +
          '</tr>';
      });
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
