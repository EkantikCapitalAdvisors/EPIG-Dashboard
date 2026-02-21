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
      <button class="text-xs px-3 py-1.5 rounded-md bg-epig-card border border-epig-border text-epig-textDim hover:text-white hover:border-blue-500 transition-all date-btn" data-range="ytd">YTD</button>
      <button class="text-xs px-3 py-1.5 rounded-md bg-blue-500/20 border border-blue-500/50 text-blue-400 font-semibold transition-all date-btn active" data-range="all">All</button>
    </div>

    <!-- KPI Grid: Strategy A -->
    <div id="kpi-grid-A" class="kpi-grid-panel">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value text-emerald-400" id="kpi-a-cumreturn">+14.2%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">CAGR</div>
          <div class="kpi-value text-white" id="kpi-a-cagr">12.8%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value text-red-400" id="kpi-a-maxdd">-8.4%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Sharpe Ratio</div>
          <div class="kpi-value text-white" id="kpi-a-sharpe">1.42</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Sortino Ratio</div>
          <div class="kpi-value text-white" id="kpi-a-sortino">2.10</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Current Allocation</div>
          <div class="text-sm mt-2">
            <div class="flex justify-between"><span class="text-epig-textDim">SPY</span><span class="font-mono text-blue-400">80%</span></div>
            <div class="flex justify-between"><span class="text-epig-textDim">Stocks</span><span class="font-mono text-blue-400">15%</span></div>
            <div class="flex justify-between"><span class="text-epig-textDim">Cash</span><span class="font-mono text-blue-400">5%</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- KPI Grid: Strategy B -->
    <div id="kpi-grid-B" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value text-emerald-400" id="kpi-b-cumreturn">+38.6%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">CAGR</div>
          <div class="kpi-value text-white" id="kpi-b-cagr">32.1%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value text-red-400" id="kpi-b-maxdd">-12.3%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value text-emerald-400" id="kpi-b-winrate">62.4%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Expectancy (Pts)</div>
          <div class="kpi-value text-emerald-400" id="kpi-b-evpts">+4.2</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Profit Factor</div>
          <div class="kpi-value text-white" id="kpi-b-pf">1.92</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Trades</div>
          <div class="kpi-value text-white" id="kpi-b-trades">187</div>
        </div>
      </div>
      <!-- Rolling Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-emerald-400 text-lg font-bold">65.0%</div></div>
            <div><div class="kpi-label">Expectancy</div><div class="font-mono text-emerald-400 text-lg font-bold">+5.1</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold">22</div></div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-emerald-400 text-lg font-bold">63.2%</div></div>
            <div><div class="kpi-label">Expectancy</div><div class="font-mono text-emerald-400 text-lg font-bold">+4.5</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold">58</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- KPI Grid: Strategy C -->
    <div id="kpi-grid-C" class="kpi-grid-panel hidden">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
        <div class="kpi-card">
          <div class="kpi-label">Cumulative Return</div>
          <div class="kpi-value text-emerald-400" id="kpi-c-cumreturn">+52.1%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">CAGR</div>
          <div class="kpi-value text-white" id="kpi-c-cagr">44.3%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Max Drawdown</div>
          <div class="kpi-value text-red-400" id="kpi-c-maxdd">-18.7%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Win Rate</div>
          <div class="kpi-value text-amber-400" id="kpi-c-winrate">48.2%</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Expectancy (R)</div>
          <div class="kpi-value text-emerald-400" id="kpi-c-evr">+0.72</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Profit Factor</div>
          <div class="kpi-value text-white" id="kpi-c-pf">1.68</div>
        </div>
        <div class="kpi-card">
          <div class="kpi-label">Total Trades</div>
          <div class="kpi-value text-white" id="kpi-c-trades">94</div>
        </div>
      </div>
      <!-- Rolling Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 30-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-amber-400 text-lg font-bold">50.0%</div></div>
            <div><div class="kpi-label">Expectancy</div><div class="font-mono text-emerald-400 text-lg font-bold">+0.85</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold">8</div></div>
          </div>
        </div>
        <div class="kpi-card">
          <div class="text-xs text-epig-textDim uppercase tracking-wider mb-3 font-semibold">Rolling 90-Day</div>
          <div class="grid grid-cols-3 gap-4">
            <div><div class="kpi-label">Win Rate</div><div class="font-mono text-amber-400 text-lg font-bold">47.8%</div></div>
            <div><div class="kpi-label">Expectancy</div><div class="font-mono text-emerald-400 text-lg font-bold">+0.69</div></div>
            <div><div class="kpi-label">Trades</div><div class="font-mono text-white text-lg font-bold">24</div></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <!-- Equity Curve -->
      <div class="chart-container">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-semibold text-sm">Equity Curve (%)</h3>
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
        <h3 class="font-semibold text-sm">Recent Trades</h3>
        <span class="text-xs text-epig-textDim">Showing last 20 trades</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-epig-border">
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">#</th>
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">Date</th>
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">Side</th>
              <th class="text-left text-epig-textDim font-medium px-3 py-2.5">Instrument</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">Entry</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">Stop</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">Exit</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">Net Pts</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">R</th>
              <th class="text-right text-epig-textDim font-medium px-3 py-2.5">P&L</th>
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
      updateCharts();
      updateTradeTable();
    }

    function updateDashboard() {
      if (!dashData) return;
      const d = dashData.strategies[currentStrategy];
      document.getElementById('last-updated').textContent = new Date(d.lastUpdated).toLocaleDateString('en-US', { weekday:'short', year:'numeric', month:'short', day:'numeric' });
      updateCharts();
      updateHeatmap();
      updateTradeTable();
    }

    function updateCharts() {
      if (!dashData) return;
      const d = dashData.strategies[currentStrategy];
      const color = strategyColors[currentStrategy];

      // Equity chart
      if (equityChart) equityChart.destroy();
      const eqCtx = document.getElementById('equity-chart').getContext('2d');
      const datasets = [{
        label: 'Strategy ' + currentStrategy,
        data: d.equityCurve.map(p => ({ x: p.date, y: p.value })),
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
          data: d.equityCurve.map(p => ({ x: p.date, y: p.spy })),
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

      // Drawdown chart
      if (drawdownChart) drawdownChart.destroy();
      const ddCtx = document.getElementById('drawdown-chart').getContext('2d');
      drawdownChart = new Chart(ddCtx, {
        type: 'line',
        data: {
          datasets: [{
            label: 'Drawdown',
            data: d.drawdownCurve.map(p => ({ x: p.date, y: p.value })),
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

    function updateHeatmap() {
      if (!dashData) return;
      const d = dashData.strategies[currentStrategy];
      const body = document.getElementById('heatmap-body');
      body.innerHTML = '';
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const yearData = {};
      d.monthlyReturns.forEach(m => {
        if (!yearData[m.year]) yearData[m.year] = {};
        yearData[m.year][m.month] = m.return;
      });
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
        const ytdBg = ytd >= 0
          ? 'rgba(16,185,129,0.2)'
          : 'rgba(239,68,68,0.2)';
        const ytdColor = ytd >= 0 ? '#10b981' : '#ef4444';
        row += '<td class="px-2 py-1"><div class="heatmap-cell font-bold" style="background:'+ytdBg+';color:'+ytdColor+'">'+(ytd>=0?'+':'')+ytd.toFixed(1)+'%</div></td>';
        row += '</tr>';
        body.innerHTML += row;
      }
    }

    function updateTradeTable() {
      if (!dashData) return;
      const d = dashData.strategies[currentStrategy];
      if (!d.recentTrades) return;
      const body = document.getElementById('trade-body');
      body.innerHTML = '';
      d.recentTrades.forEach(t => {
        const pnlColor = t.pnl >= 0 ? 'text-emerald-400' : 'text-red-400';
        const badge = t.result === 'WIN' ? 'win-badge' : 'loss-badge';
        body.innerHTML += '<tr class="border-b border-epig-border/50 trade-row transition-colors">' +
          '<td class="px-3 py-2.5 font-mono text-epig-textDim">' + t.id + '</td>' +
          '<td class="px-3 py-2.5 font-mono text-sm">' + t.date + '</td>' +
          '<td class="px-3 py-2.5"><span class="text-xs font-semibold ' + (t.side==='BUY'?'text-emerald-400':'text-red-400') + '">' + t.side + '</span></td>' +
          '<td class="px-3 py-2.5 font-mono text-sm">' + t.instrument + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm">' + t.entry.toLocaleString() + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm text-epig-textDim">' + (t.stop || '&mdash;') + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm">' + (t.exit ? t.exit.toLocaleString() : '&mdash;') + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm ' + pnlColor + '">' + (t.netPoints>=0?'+':'') + t.netPoints + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm ' + pnlColor + '">' + (t.netR>=0?'+':'') + t.netR.toFixed(2) + '</td>' +
          '<td class="px-3 py-2.5 text-right font-mono text-sm ' + pnlColor + '">$' + (t.pnl>=0?'+':'') + t.pnl.toLocaleString() + '</td>' +
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
