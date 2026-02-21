export function calculatorPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold mb-2">Annualized Return Projection</h1>
      <p class="text-epig-textMuted max-w-xl mx-auto">
        Forward projections based on <strong class="text-white">actual trade data</strong> from uploaded IB Flex Queries.
        If current EV, risk, and trade frequency remain constant &mdash; here is what the year looks like.
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
        <input type="number" id="portfolio-size" value="1000000" min="10000" step="10000"
          class="w-full bg-epig-bg border border-epig-border rounded-lg pl-8 pr-4 py-3 font-mono text-lg text-white focus:outline-none focus:border-blue-500"
          oninput="recalculate()">
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
      <!-- Strategy A -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 font-bold text-sm">A</span>
          Core Allocation
        </h3>
        <div id="a-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-blue-400" id="a-winrate-val">55%</span>
            </div>
            <input type="range" id="a-winrate" min="10" max="95" value="55" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-blue-400" id="a-avgwin-val">1.2</span>
            </div>
            <input type="range" id="a-avgwin" min="0.1" max="10" value="1.2" step="0.01" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="a-avgloss-val">1.0</span>
            </div>
            <input type="range" id="a-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="a-trades" value="120" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk per Trade</span>
            <div class="flex items-center gap-1">
              <input type="number" id="a-risk" value="1" min="0.01" max="10" step="0.01"
                class="w-16 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
              <span class="text-epig-textDim text-sm">%</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade (R)</span>
              <span class="font-mono text-blue-400" id="a-ev">+0.21</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-blue-400" id="a-annual-r">+25.2</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual Return</span>
              <span class="font-mono font-bold text-lg text-blue-400" id="a-return">+2.5%</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Dollar Return</span>
              <span class="font-mono font-bold text-blue-400" id="a-dollar">$25,200</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategy B -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-bold text-sm">B</span>
          Futures Alerts
        </h3>
        <div id="b-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-emerald-400" id="b-winrate-val">60%</span>
            </div>
            <input type="range" id="b-winrate" min="10" max="95" value="60" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-emerald-400" id="b-avgwin-val">1.5</span>
            </div>
            <input type="range" id="b-avgwin" min="0.1" max="10" value="1.5" step="0.01" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="b-avgloss-val">1.0</span>
            </div>
            <input type="range" id="b-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="b-trades" value="200" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk per Trade</span>
            <div class="flex items-center gap-1">
              <input type="number" id="b-risk" value="2" min="0.01" max="10" step="0.01"
                class="w-16 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
              <span class="text-epig-textDim text-sm">%</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade (R)</span>
              <span class="font-mono text-emerald-400" id="b-ev">+0.50</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-emerald-400" id="b-annual-r">+100.0</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual Return</span>
              <span class="font-mono font-bold text-lg text-emerald-400" id="b-return">+20.0%</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Dollar Return</span>
              <span class="font-mono font-bold text-emerald-400" id="b-dollar">$200,000</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategy C -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold text-sm">C</span>
          Episodic Pivots
        </h3>
        <div id="c-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-amber-400" id="c-winrate-val">45%</span>
            </div>
            <input type="range" id="c-winrate" min="10" max="95" value="45" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-amber-400" id="c-avgwin-val">3.0</span>
            </div>
            <input type="range" id="c-avgwin" min="0.1" max="10" value="3" step="0.01" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="c-avgloss-val">1.0</span>
            </div>
            <input type="range" id="c-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="c-trades" value="60" min="1" max="1000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk per Trade</span>
            <div class="flex items-center gap-1">
              <input type="number" id="c-risk" value="1" min="0.01" max="10" step="0.01"
                class="w-16 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
              <span class="text-epig-textDim text-sm">%</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade (R)</span>
              <span class="font-mono text-amber-400" id="c-ev">+0.80</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-amber-400" id="c-annual-r">+48.0</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual Return</span>
              <span class="font-mono font-bold text-lg text-amber-400" id="c-return">+9.6%</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Dollar Return</span>
              <span class="font-mono font-bold text-amber-400" id="c-dollar">$96,000</span>
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
            <span>Strategy A &mdash; Core Allocation</span>
          </div>
          <span class="font-mono font-bold text-blue-400" id="combined-a">+2.5%</span>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>Strategy B &mdash; Futures</span>
          </div>
          <span class="font-mono font-bold text-emerald-400" id="combined-b">+20.0%</span>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-amber-500"></span>
            <span>Strategy C &mdash; Pivots</span>
          </div>
          <span class="font-mono font-bold text-amber-400" id="combined-c">+9.6%</span>
        </div>
        <div class="border-t border-epig-border pt-4 flex justify-between items-center">
          <span class="font-bold text-lg">Total Projected Annual Return</span>
          <span class="font-mono font-extrabold text-2xl gradient-text" id="combined-total">+32.1%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-bold text-lg">Projected Dollar Return</span>
          <span class="font-mono font-extrabold text-2xl text-emerald-400" id="combined-dollar">$321,000</span>
        </div>
      </div>

      <!-- Visual breakdown -->
      <div class="mt-6">
        <div class="flex h-4 rounded-full overflow-hidden">
          <div class="bg-blue-500 transition-all duration-300" id="bar-a" style="width:8%"></div>
          <div class="bg-emerald-500 transition-all duration-300" id="bar-b" style="width:62%"></div>
          <div class="bg-amber-500 transition-all duration-300" id="bar-c" style="width:30%"></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-epig-textDim">
          <span>A: <span id="bar-a-label">8%</span></span>
          <span>B: <span id="bar-b-label">62%</span></span>
          <span>C: <span id="bar-c-label">30%</span></span>
        </div>
      </div>

      <p class="text-[10px] text-epig-textDim mt-6 text-center italic">
        *Projections assume current EV, win rate, risk, and trade frequency remain constant.
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
        const res = await fetch('/api/calculator/stats');
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

        for (const [strat, stats] of Object.entries(data.strategies)) {
          if (!stats) continue;
          hasData = true;
          const s = stats;
          totalTrades += s.closedTrades;
          if (s.firstDate < earliestDate) earliestDate = s.firstDate;
          if (s.lastDate > latestDate) latestDate = s.lastDate;

          const prefix = strat.toLowerCase();
          const portfolio = parseFloat(document.getElementById('portfolio-size').value) || 1000000;

          // Set slider/input values from live data
          setInput(prefix + '-winrate', Math.round(s.winRate));
          setInput(prefix + '-avgwin', s.avgWinR);
          setInput(prefix + '-avgloss', s.avgLossR);
          setInput(prefix + '-trades', s.tradesPerYear);

          // Risk per trade: riskDollar / portfolio * 100
          const riskPct = (s.riskPerTradeDollar / portfolio) * 100;
          setInput(prefix + '-risk', Math.max(0.01, parseFloat(riskPct.toFixed(2))));

          // Data source label (with round-trip details)
          const srcEl = document.getElementById(prefix + '-data-source');
          if (srcEl) {
            const open = s.openTrades ? ' | ' + s.openTrades + ' open' : '';
            srcEl.innerHTML = '<i class="fas fa-circle text-emerald-400 mr-1" style="font-size:5px;vertical-align:middle;"></i>' +
              s.closedTrades + ' closed round-trips (' + s.totalFills + ' fills)' + open +
              '<br><span class="text-epig-textDim">' + s.firstDate + ' to ' + s.lastDate +
              ' | EV/trade: ' + (s.evPerTradeR >= 0 ? '+' : '') + s.evPerTradeR + 'R' +
              ' | Avg W: $' + Math.round(s.avgWinDollar).toLocaleString() +
              ' | Avg L: $' + Math.round(s.avgLossDollar).toLocaleString() + '</span>';
          }
        }

        if (hasData) {
          document.getElementById('data-banner').classList.remove('hidden');
          document.getElementById('data-banner-text').textContent =
            'Based on ' + totalTrades + ' actual trades from ' + earliestDate + ' to ' + latestDate + '. Auto-refreshes on each upload.';
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

    // ══════════════════════════════════════════════════
    // EV Calculation (same formula for all 3 strategies)
    // ══════════════════════════════════════════════════
    function recalculate() {
      const portfolio = parseFloat(document.getElementById('portfolio-size').value) || 0;

      let totalReturn = 0;
      const returns = {};

      for (const [prefix, color] of [['a', 'blue'], ['b', 'emerald'], ['c', 'amber']]) {
        const winRate = parseInt(document.getElementById(prefix + '-winrate').value) / 100;
        const avgWin = parseFloat(document.getElementById(prefix + '-avgwin').value);
        const avgLoss = parseFloat(document.getElementById(prefix + '-avgloss').value);
        const trades = parseInt(document.getElementById(prefix + '-trades').value);
        const risk = parseFloat(document.getElementById(prefix + '-risk').value) / 100;

        const ev = winRate * avgWin - (1 - winRate) * avgLoss;
        const annualR = ev * trades;
        const annualReturn = ev * trades * risk;
        const dollarReturn = portfolio * annualReturn;

        document.getElementById(prefix + '-winrate-val').textContent = Math.round(winRate * 100) + '%';
        document.getElementById(prefix + '-avgwin-val').textContent = avgWin.toFixed(2);
        document.getElementById(prefix + '-avgloss-val').textContent = avgLoss.toFixed(2);
        document.getElementById(prefix + '-ev').textContent = (ev >= 0 ? '+' : '') + ev.toFixed(2);
        document.getElementById(prefix + '-annual-r').textContent = (annualR >= 0 ? '+' : '') + annualR.toFixed(1);
        document.getElementById(prefix + '-return').textContent = (annualReturn >= 0 ? '+' : '') + (annualReturn * 100).toFixed(1) + '%';
        document.getElementById(prefix + '-dollar').textContent = '$' + Math.round(dollarReturn).toLocaleString();

        returns[prefix] = annualReturn;
        totalReturn += annualReturn;
      }

      const totalDollar = portfolio * totalReturn;

      // Combined section
      document.getElementById('combined-a').textContent = (returns['a'] >= 0 ? '+' : '') + (returns['a'] * 100).toFixed(1) + '%';
      document.getElementById('combined-b').textContent = (returns['b'] >= 0 ? '+' : '') + (returns['b'] * 100).toFixed(1) + '%';
      document.getElementById('combined-c').textContent = (returns['c'] >= 0 ? '+' : '') + (returns['c'] * 100).toFixed(1) + '%';
      document.getElementById('combined-total').textContent = (totalReturn >= 0 ? '+' : '') + (totalReturn * 100).toFixed(1) + '%';
      document.getElementById('combined-dollar').textContent = '$' + Math.round(totalDollar).toLocaleString();

      // Contribution bar
      const absTotal = Math.abs(returns['a']) + Math.abs(returns['b']) + Math.abs(returns['c']);
      if (absTotal > 0) {
        const aPct = Math.round((Math.abs(returns['a']) / absTotal) * 100);
        const bPct = Math.round((Math.abs(returns['b']) / absTotal) * 100);
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
