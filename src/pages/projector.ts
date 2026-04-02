export function projectorPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold mb-2">Performance Projector</h1>
      <p class="text-epig-textMuted max-w-xl mx-auto">
        Year-end projections based on <strong class="text-white">actual 2026 YTD trade data</strong> from uploaded IB Flex Queries.
        Extrapolates current performance across both strategies to estimate annualized returns.
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

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      <!-- Investing -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A951] to-[#d4ba6a]"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-[#C8A951]/15 flex items-center justify-center text-[#C8A951] font-bold text-sm"><i class="fas fa-landmark text-xs"></i></span>
          Investing &mdash; SPY &amp; Stocks
        </h3>
        <div id="inv-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-[#C8A951]" id="inv-winrate-val">55%</span>
            </div>
            <input type="range" id="inv-winrate" min="10" max="95" value="55" class="w-full accent-[#C8A951]" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-[#C8A951]" id="inv-avgwin-val">1.20</span>
            </div>
            <input type="range" id="inv-avgwin" min="0.1" max="10" value="1.2" step="0.01" class="w-full accent-[#C8A951]" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="inv-avgloss-val">1.00</span>
            </div>
            <input type="range" id="inv-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full accent-red-500" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="inv-trades" value="120" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk / Trade (1R)</span>
            <div class="flex items-center gap-1">
              <span class="text-epig-textDim text-sm">$</span>
              <input type="number" id="inv-risk" value="160" min="1" max="100000" step="1"
                class="w-24 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade</span>
              <span class="font-mono text-[#C8A951]" id="inv-ev">+0.21R &nbsp;($34)</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-[#C8A951]" id="inv-annual-r">+25.2R</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual</span>
              <span class="font-mono font-bold text-lg text-[#C8A951]" id="inv-dollar">$4,032</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Return on Portfolio</span>
              <span class="font-mono text-sm text-[#C8A951]" id="inv-return">+4.0%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Trading -->
      <div class="kpi-card relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
        <h3 class="font-bold text-lg mt-2 mb-1 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-bold text-sm"><i class="fas fa-bolt text-xs"></i></span>
          Trading &mdash; Futures &amp; Options
        </h3>
        <div id="trd-data-source" class="text-[10px] text-epig-textDim mb-4"></div>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-emerald-400" id="trd-winrate-val">60%</span>
            </div>
            <input type="range" id="trd-winrate" min="10" max="95" value="60" class="w-full accent-emerald-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-emerald-400" id="trd-avgwin-val">1.50</span>
            </div>
            <input type="range" id="trd-avgwin" min="0.1" max="10" value="1.5" step="0.01" class="w-full accent-emerald-500" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="trd-avgloss-val">1.00</span>
            </div>
            <input type="range" id="trd-avgloss" min="0.1" max="5" value="1" step="0.01" class="w-full accent-red-500" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="trd-trades" value="200" min="1" max="2000" step="1"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk / Trade (1R)</span>
            <div class="flex items-center gap-1">
              <span class="text-epig-textDim text-sm">$</span>
              <input type="number" id="trd-risk" value="114" min="1" max="100000" step="1"
                class="w-24 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
                oninput="recalculate()">
            </div>
          </div>

          <div class="border-t border-epig-border pt-4 space-y-2">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">EV per Trade</span>
              <span class="font-mono text-emerald-400" id="trd-ev">+0.50R &nbsp;($57)</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Annual R Earned</span>
              <span class="font-mono text-emerald-400" id="trd-annual-r">+100.0R</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Projected Annual</span>
              <span class="font-mono font-bold text-lg text-emerald-400" id="trd-dollar">$11,400</span>
            </div>
            <div class="flex justify-between items-center mt-1">
              <span class="text-epig-textDim text-sm">Return on Portfolio</span>
              <span class="font-mono text-sm text-emerald-400" id="trd-return">+11.4%</span>
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
            <span class="w-3 h-3 rounded-full bg-[#C8A951]"></span>
            <span>Investing &mdash; SPY &amp; Stocks</span>
          </div>
          <div class="text-right">
            <span class="font-mono font-bold text-[#C8A951]" id="combined-inv-dollar">$4,032</span>
            <span class="font-mono text-xs text-epig-textDim ml-2" id="combined-inv-pct">(4.0%)</span>
          </div>
        </div>
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span>Trading &mdash; Futures &amp; Options</span>
          </div>
          <div class="text-right">
            <span class="font-mono font-bold text-emerald-400" id="combined-trd-dollar">$11,400</span>
            <span class="font-mono text-xs text-epig-textDim ml-2" id="combined-trd-pct">(11.4%)</span>
          </div>
        </div>
        <div class="border-t border-epig-border pt-4 flex justify-between items-center">
          <span class="font-bold text-lg">Total Projected Annual</span>
          <span class="font-mono font-extrabold text-2xl text-emerald-400" id="combined-total-dollar">$35,496</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-epig-textDim">Return on Portfolio</span>
          <span class="font-mono font-extrabold text-2xl gradient-text" id="combined-total-pct">+35.5%</span>
        </div>
      </div>

      <!-- Visual breakdown -->
      <div class="mt-6">
        <div class="flex h-4 rounded-full overflow-hidden">
          <div class="bg-[#C8A951] transition-all duration-300" id="bar-inv" style="width:26%"></div>
          <div class="bg-emerald-500 transition-all duration-300" id="bar-trd" style="width:74%"></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-epig-textDim">
          <span>Investing: <span id="bar-inv-label">26%</span></span>
          <span>Trading: <span id="bar-trd-label">74%</span></span>
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

        const stratMap = { Investing: 'inv', Trading: 'trd' };

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

      for (const [prefix, color] of [['inv', 'amber'], ['trd', 'emerald']]) {
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
      for (const p of ['inv', 'trd']) {
        const pct = (dollars[p] / portfolio) * 100;
        document.getElementById('combined-' + p + '-dollar').textContent = fmt(dollars[p]);
        document.getElementById('combined-' + p + '-pct').textContent =
          '(' + (pct >= 0 ? '+' : '') + pct.toFixed(1) + '%)';
      }
      document.getElementById('combined-total-dollar').textContent = fmt(totalDollar);
      document.getElementById('combined-total-pct').textContent =
        (totalPct >= 0 ? '+' : '') + totalPct.toFixed(1) + '%';

      // Contribution bar
      const absTotal = Math.abs(dollars['inv']) + Math.abs(dollars['trd']);
      if (absTotal > 0) {
        const invPct = Math.round((Math.abs(dollars['inv']) / absTotal) * 100);
        const trdPct = 100 - invPct;
        document.getElementById('bar-inv').style.width = invPct + '%';
        document.getElementById('bar-trd').style.width = trdPct + '%';
        document.getElementById('bar-inv-label').textContent = invPct + '%';
        document.getElementById('bar-trd-label').textContent = trdPct + '%';
      }
    }

    // Load live data on page load
    loadLiveStats();
  </script>
  `
}
