export function projectorPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold mb-2">Performance Projector</h1>
      <p class="text-epig-textMuted max-w-xl mx-auto">
        Year-end projections based on <strong class="text-white">actual 2026 YTD trade data</strong> from uploaded IB Flex Queries.
        Extrapolates current performance across all three strategies to estimate annualized returns.
      </p>
      <div id="data-banner" class="hidden inline-flex items-center gap-2 mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2">
        <i class="fas fa-database text-emerald-400"></i>
        <span class="text-xs text-emerald-400" id="data-banner-text">Loading live data...</span>
      </div>
      <div id="no-data-banner" class="hidden inline-flex items-center gap-2 mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2">
        <i class="fas fa-info-circle text-amber-400"></i>
        <span class="text-xs text-amber-400">No trade data yet. Values below are illustrative defaults.</span>
      </div>
    </div>

    <!-- Portfolio Size -->
    <div class="kpi-card max-w-sm mx-auto mb-8">
      <label class="block text-sm font-semibold mb-2">Portfolio Size</label>
      <div class="relative">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-epig-textDim font-mono">$</span>
        <input type="number" id="portfolio-size" value="100000" min="10000" step="10000"
          class="w-full bg-epig-bg border border-epig-border rounded-lg pl-8 pr-4 py-3 font-mono text-lg text-white focus:outline-none focus:border-blue-500"
          oninput="recalculate()">
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      <!-- Strategy A: SPY Core -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 font-bold text-sm">A</span>
          SPY Core
        </h3>
        <div id="a-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-blue-400" id="a-winrate-val">55%</span>
            </div>
            <input type="range" id="a-winrate" min="10" max="95" value="55" class="w-full accent-blue-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-blue-400" id="a-avgwin-val">1.20</span>
            </div>
            <input type="range" id="a-avgwin" min="0.1" max="10" value="1.2" step="0.01" class="w-full accent-blue-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="a-avgloss-val">1.00</span>
            </div>
            <input type="range" id="a-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full accent-red-500" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="a-trades" value="24" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk / Trade (1R)</span>
            <div class="flex items-center gap-1">
              <span class="text-epig-textDim text-sm">$</span>
              <input type="number" id="a-risk" value="500" min="1" max="100000" step="1"
                class="w-24 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade</span>
              <span class="font-mono text-blue-400" id="a-ev">+0.21R &nbsp;($105)</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-blue-400" id="a-annual-r">+5.0R</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual</span>
              <span class="font-mono font-bold text-lg text-blue-400" id="a-dollar">$2,520</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Return on Portfolio</span>
              <span class="font-mono text-sm text-blue-400" id="a-return">+2.5%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategy B: Futures & Options -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-bold text-sm">B</span>
          Futures &amp; Options
        </h3>
        <div id="b-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-emerald-400" id="b-winrate-val">60%</span>
            </div>
            <input type="range" id="b-winrate" min="10" max="95" value="60" class="w-full accent-emerald-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-emerald-400" id="b-avgwin-val">1.50</span>
            </div>
            <input type="range" id="b-avgwin" min="0.1" max="10" value="1.5" step="0.01" class="w-full accent-emerald-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="b-avgloss-val">1.00</span>
            </div>
            <input type="range" id="b-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full accent-red-500" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="b-trades" value="200" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk / Trade (1R)</span>
            <div class="flex items-center gap-1">
              <span class="text-epig-textDim text-sm">$</span>
              <input type="number" id="b-risk" value="114" min="1" max="100000" step="1"
                class="w-24 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade</span>
              <span class="font-mono text-emerald-400" id="b-ev">+0.50R &nbsp;($57)</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-emerald-400" id="b-annual-r">+100.0R</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual</span>
              <span class="font-mono font-bold text-lg text-emerald-400" id="b-dollar">$11,400</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Return on Portfolio</span>
              <span class="font-mono text-sm text-emerald-400" id="b-return">+11.4%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategy C: Episodic Pivot -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1" style="background:linear-gradient(to right,#f59e0b,#fbbf24);"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style="background:rgba(245,158,11,0.15);color:#f59e0b;">C</span>
          Episodic Pivot
        </h3>
        <div id="c-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono" style="color:#f59e0b;" id="c-winrate-val">55%</span>
            </div>
            <input type="range" id="c-winrate" min="10" max="95" value="55" class="w-full accent-amber-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono" style="color:#f59e0b;" id="c-avgwin-val">2.00</span>
            </div>
            <input type="range" id="c-avgwin" min="0.1" max="10" value="2.0" step="0.01" class="w-full accent-amber-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="c-avgloss-val">1.00</span>
            </div>
            <input type="range" id="c-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full accent-red-500" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="c-trades" value="36" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk / Trade (1R)</span>
            <div class="flex items-center gap-1">
              <span class="text-epig-textDim text-sm">$</span>
              <input type="number" id="c-risk" value="200" min="1" max="100000" step="1"
                class="w-24 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade</span>
              <span class="font-mono" style="color:#f59e0b;" id="c-ev">+0.65R &nbsp;($130)</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono" style="color:#f59e0b;" id="c-annual-r">+23.4R</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual</span>
              <span class="font-mono font-bold text-lg" style="color:#f59e0b;" id="c-dollar">$4,680</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Return on Portfolio</span>
              <span class="font-mono text-sm" style="color:#f59e0b;" id="c-return">+4.7%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Combined Output -->
    <div class="kpi-card max-w-2xl mx-auto mb-10">
      <h3 class="font-bold text-lg mb-6 text-center">Combined Annual Projection</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>Strategy A &mdash; SPY Core</span>
          </div>
          <div class="text-right">
            <span class="font-mono font-bold text-blue-400" id="combined-a-dollar">$2,520</span>
            <span class="font-mono text-xs text-epig-textDim ml-2" id="combined-a-pct">(2.5%)</span>
          </div>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>Strategy B &mdash; Futures &amp; Options</span>
          </div>
          <div class="text-right">
            <span class="font-mono font-bold text-emerald-400" id="combined-b-dollar">$11,400</span>
            <span class="font-mono text-xs text-epig-textDim ml-2" id="combined-b-pct">(11.4%)</span>
          </div>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full" style="background:#f59e0b;"></span>
            <span>Strategy C &mdash; Episodic Pivot</span>
          </div>
          <div class="text-right">
            <span class="font-mono font-bold" style="color:#f59e0b;" id="combined-c-dollar">$4,680</span>
            <span class="font-mono text-xs text-epig-textDim ml-2" id="combined-c-pct">(4.7%)</span>
          </div>
        </div>
        <div class="border-t border-epig-border pt-4 flex justify-between items-center">
          <span class="font-bold text-lg">Total Projected Annual</span>
          <span class="font-mono font-extrabold text-2xl text-emerald-400" id="combined-total-dollar">$18,600</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-epig-textDim">Return on Portfolio</span>
          <span class="font-mono font-extrabold text-2xl gradient-text" id="combined-total-pct">+18.6%</span>
        </div>
      </div>

      <!-- Visual breakdown -->
      <div class="mt-6">
        <div class="flex h-4 rounded-full overflow-hidden">
          <div class="bg-blue-500 transition-all duration-300" id="bar-a" style="width:14%"></div>
          <div class="bg-emerald-500 transition-all duration-300" id="bar-b" style="width:61%"></div>
          <div class="transition-all duration-300" id="bar-c" style="width:25%;background:#f59e0b;"></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-epig-textDim">
          <span>A: <span id="bar-a-label">14%</span></span>
          <span>B: <span id="bar-b-label">61%</span></span>
          <span>C: <span id="bar-c-label">25%</span></span>
        </div>
      </div>

      <p class="text-[10px] text-epig-textDim mt-6 text-center italic">
        *Projections extrapolate observed trade frequency to a full year, holding win rate, R:R, and risk per trade constant.
        Based on actual uploaded IB trade data. Past performance is not indicative of future results.
        <a href="/disclosures" class="text-blue-400 no-underline">Full disclosure &rarr;</a>
      </p>
    </div>
  </div>

  <script>
    // ══════════════════════════════════════════════════
    // Fetch live stats and populate inputs
    // ══════════════════════════════════════════════════
    async function loadLiveStats() {
      try {
        const res = await fetch('/api/projector/stats');
        const data = await res.json();

        if (!data.strategies) {
          document.getElementById('no-data-banner').classList.remove('hidden');
          recalculate();
          return;
        }

        let totalTrades = 0;
        let earliestDate = '9999-99-99';
        let latestDate = '0000-00-00';
        let hasData = false;

        const stratMap = { A: 'a', B: 'b', C: 'c' };

        for (const [strat, stats] of Object.entries(data.strategies)) {
          if (!stats || !stratMap[strat]) continue;
          hasData = true;
          const s = stats;
          totalTrades += s.closedTrades;
          if (s.firstDate < earliestDate) earliestDate = s.firstDate;
          if (s.lastDate > latestDate) latestDate = s.lastDate;

          const prefix = stratMap[strat];

          // Set slider/input values from live data
          setInput(prefix + '-winrate', Math.round(s.winRate));
          setInput(prefix + '-avgwin', s.avgWinR);
          setInput(prefix + '-avgloss', s.avgLossR);
          setInput(prefix + '-trades', s.tradesPerYear);

          // Risk per trade in dollars (avg loss = 1R)
          setInput(prefix + '-risk', Math.round(s.riskPerTradeDollar));

          // Data source label
          const srcEl = document.getElementById(prefix + '-data-source');
          if (srcEl) {
            const open = s.openTrades ? ' | ' + s.openTrades + ' open' : '';
            srcEl.innerHTML = '<i class="fas fa-circle text-emerald-400 mr-1" style="font-size:5px;vertical-align:middle;"></i>' +
              s.closedTrades + ' round-trips (' + s.totalFills + ' fills) | ' +
              s.firstDate + ' to ' + s.lastDate + open +
              '<br><span class="text-epig-textDim">Avg W: $' + Math.round(s.avgWinDollar).toLocaleString() +
              ' (' + s.avgWinR + 'R) | Avg L: $' + Math.round(s.avgLossDollar).toLocaleString() +
              ' (1R) | EV: ' + (s.evPerTradeR >= 0 ? '+' : '') + s.evPerTradeR + 'R ($' +
              Math.round(s.evPerTradeDollar).toLocaleString() + ')</span>';
          }
        }

        if (hasData) {
          document.getElementById('data-banner').classList.remove('hidden');
          document.getElementById('data-banner-text').textContent =
            'Based on ' + totalTrades + ' closed round-trip trades from ' + earliestDate + ' to ' + latestDate + '. Auto-refreshes on each upload.';
        } else {
          document.getElementById('no-data-banner').classList.remove('hidden');
        }

        recalculate();
      } catch(e) {
        document.getElementById('no-data-banner').classList.remove('hidden');
        recalculate();
      }
    }

    function setInput(id, value) {
      const el = document.getElementById(id);
      if (el) el.value = value;
    }

    function fmt(n) {
      return (n >= 0 ? '+' : '') + '$' + Math.abs(Math.round(n)).toLocaleString();
    }

    // ══════════════════════════════════════════════════
    // EV Calculation
    // Annual $ = EV(R) x Trades/Year x Risk$/Trade
    // Annual % = Annual $ / Portfolio x 100
    // ══════════════════════════════════════════════════
    function recalculate() {
      const portfolio = parseFloat(document.getElementById('portfolio-size').value) || 1;

      let totalDollar = 0;
      const dollars = {};

      for (const prefix of ['a', 'b', 'c']) {
        const winRate = parseInt(document.getElementById(prefix + '-winrate').value) / 100;
        const avgWin = parseFloat(document.getElementById(prefix + '-avgwin').value);
        const avgLoss = parseFloat(document.getElementById(prefix + '-avgloss').value);
        const trades = parseInt(document.getElementById(prefix + '-trades').value);
        const riskDollar = parseFloat(document.getElementById(prefix + '-risk').value);

        // EV in R-multiples
        const evR = winRate * avgWin - (1 - winRate) * avgLoss;
        // EV in dollars
        const evDollar = evR * riskDollar;
        // Annual totals
        const annualR = evR * trades;
        const annualDollar = evDollar * trades;
        const annualPct = (annualDollar / portfolio) * 100;

        // Update displays
        document.getElementById(prefix + '-winrate-val').textContent = Math.round(winRate * 100) + '%';
        document.getElementById(prefix + '-avgwin-val').textContent = avgWin.toFixed(2);
        document.getElementById(prefix + '-avgloss-val').textContent = avgLoss.toFixed(2);

        const evSign = evR >= 0 ? '+' : '';
        document.getElementById(prefix + '-ev').textContent =
          evSign + evR.toFixed(2) + 'R  ($' + Math.round(evDollar).toLocaleString() + ')';
        document.getElementById(prefix + '-annual-r').textContent =
          (annualR >= 0 ? '+' : '') + annualR.toFixed(1) + 'R';

        document.getElementById(prefix + '-dollar').textContent = fmt(annualDollar);
        document.getElementById(prefix + '-return').textContent =
          (annualPct >= 0 ? '+' : '') + annualPct.toFixed(1) + '%';

        dollars[prefix] = annualDollar;
        totalDollar += annualDollar;
      }

      const totalPct = (totalDollar / portfolio) * 100;

      // Combined section
      for (const p of ['a', 'b', 'c']) {
        const pct = (dollars[p] / portfolio) * 100;
        document.getElementById('combined-' + p + '-dollar').textContent = fmt(dollars[p]);
        document.getElementById('combined-' + p + '-pct').textContent =
          '(' + (pct >= 0 ? '+' : '') + pct.toFixed(1) + '%)';
      }
      document.getElementById('combined-total-dollar').textContent = fmt(totalDollar);
      document.getElementById('combined-total-pct').textContent =
        (totalPct >= 0 ? '+' : '') + totalPct.toFixed(1) + '%';

      // Contribution bar
      const absTotal = Math.abs(dollars['a']) + Math.abs(dollars['b']) + Math.abs(dollars['c']);
      if (absTotal > 0) {
        const aPct = Math.round((Math.abs(dollars['a']) / absTotal) * 100);
        const bPct = Math.round((Math.abs(dollars['b']) / absTotal) * 100);
        const cPct = 100 - aPct - bPct;
        document.getElementById('bar-a').style.width = aPct + '%';
        document.getElementById('bar-b').style.width = bPct + '%';
        document.getElementById('bar-c').style.width = cPct + '%';
        document.getElementById('bar-a-label').textContent = aPct + '%';
        document.getElementById('bar-b-label').textContent = bPct + '%';
        document.getElementById('bar-c-label').textContent = cPct + '%';
      }
    }

    // Load live data on page load
    loadLiveStats();
  </script>
  `
}
