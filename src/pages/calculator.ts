export function calculatorPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold mb-2">3-Strategy Calculator</h1>
      <p class="text-epig-textMuted max-w-xl mx-auto">
        Model your portfolio with EPIG&rsquo;s three-layer design. Adjust inputs to see illustrative expected returns.
      </p>
      <div class="inline-flex items-center gap-2 mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2">
        <i class="fas fa-info-circle text-amber-400"></i>
        <span class="text-xs text-amber-400">Illustrative only. Does NOT use actual EPIG performance data.</span>
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
        <h3 class="font-bold text-lg mt-2 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 font-bold text-sm">A</span>
          Core Allocation
        </h3>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-blue-400" id="a-winrate-val">55%</span>
            </div>
            <input type="range" id="a-winrate" min="30" max="85" value="55" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-blue-400" id="a-avgwin-val">1.2</span>
            </div>
            <input type="range" id="a-avgwin" min="0.5" max="5" value="1.2" step="0.1" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="a-avgloss-val">1.0</span>
            </div>
            <input type="range" id="a-avgloss" min="0.5" max="3" value="1" step="0.1" class="w-full" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="a-trades" value="120" min="10" max="500" step="10"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk per Trade</span>
            <div class="flex items-center gap-1">
              <input type="number" id="a-risk" value="1" min="0.25" max="5" step="0.25"
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
              <span class="text-epig-textDim">Expected Annual R</span>
              <span class="font-mono text-blue-400" id="a-annual-r">+25.2</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Expected Annual Return</span>
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
        <h3 class="font-bold text-lg mt-2 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-bold text-sm">B</span>
          Futures Alerts
        </h3>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-emerald-400" id="b-winrate-val">60%</span>
            </div>
            <input type="range" id="b-winrate" min="30" max="85" value="60" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-emerald-400" id="b-avgwin-val">1.5</span>
            </div>
            <input type="range" id="b-avgwin" min="0.5" max="5" value="1.5" step="0.1" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="b-avgloss-val">1.0</span>
            </div>
            <input type="range" id="b-avgloss" min="0.5" max="3" value="1" step="0.1" class="w-full" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="b-trades" value="200" min="10" max="1000" step="10"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk per Trade</span>
            <div class="flex items-center gap-1">
              <input type="number" id="b-risk" value="2" min="0.5" max="10" step="0.5"
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
              <span class="text-epig-textDim">Expected Annual R</span>
              <span class="font-mono text-emerald-400" id="b-annual-r">+100.0</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Expected Annual Return</span>
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
        <h3 class="font-bold text-lg mt-2 mb-4 flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold text-sm">C</span>
          Episodic Pivots
        </h3>

        <div class="space-y-5">
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Win Rate</span>
              <span class="font-mono text-amber-400" id="c-winrate-val">45%</span>
            </div>
            <input type="range" id="c-winrate" min="20" max="75" value="45" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Win (R)</span>
              <span class="font-mono text-amber-400" id="c-avgwin-val">3.0</span>
            </div>
            <input type="range" id="c-avgwin" min="1" max="10" value="3" step="0.1" class="w-full" oninput="recalculate()">
          </div>
          <div>
            <div class="flex justify-between text-sm mb-1">
              <span class="text-epig-textDim">Avg Loss (R)</span>
              <span class="font-mono text-red-400" id="c-avgloss-val">1.0</span>
            </div>
            <input type="range" id="c-avgloss" min="0.5" max="3" value="1" step="0.1" class="w-full" oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Trades / Year</span>
            <input type="number" id="c-trades" value="60" min="5" max="300" step="5"
              class="w-20 bg-epig-bg border border-epig-border rounded px-2 py-1 text-sm font-mono text-right text-white focus:outline-none focus:border-blue-500"
              oninput="recalculate()">
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-epig-textDim">Risk per Trade</span>
            <div class="flex items-center gap-1">
              <input type="number" id="c-risk" value="1" min="0.25" max="5" step="0.25"
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
              <span class="text-epig-textDim">Expected Annual R</span>
              <span class="font-mono text-amber-400" id="c-annual-r">+48.0</span>
            </div>
          </div>

          <div class="border-t border-epig-border pt-4">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-sm">Expected Annual Return</span>
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
      <h3 class="font-bold text-lg mb-6 text-center">Combined Portfolio Projection</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center py-2">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>Strategy A &mdash; Core Allocation</span>
          </div>
          <span class="font-mono font-bold text-blue-400" id="combined-a">+10.5%</span>
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
          <span class="font-bold text-lg">Total Expected Annual Return</span>
          <span class="font-mono font-extrabold text-2xl gradient-text" id="combined-total">+40.1%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-bold text-lg">Expected Dollar Return</span>
          <span class="font-mono font-extrabold text-2xl text-emerald-400" id="combined-dollar">$401,000</span>
        </div>
      </div>

      <!-- Visual breakdown -->
      <div class="mt-6">
        <div class="flex h-4 rounded-full overflow-hidden">
          <div class="bg-blue-500 transition-all duration-300" id="bar-a" style="width:26%"></div>
          <div class="bg-emerald-500 transition-all duration-300" id="bar-b" style="width:50%"></div>
          <div class="bg-amber-500 transition-all duration-300" id="bar-c" style="width:24%"></div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-epig-textDim">
          <span>A: <span id="bar-a-label">26%</span></span>
          <span>B: <span id="bar-b-label">50%</span></span>
          <span>C: <span id="bar-c-label">24%</span></span>
        </div>
      </div>

      <p class="text-[10px] text-epig-textDim mt-6 text-center italic">
        *Illustrative projections only. Based on user-defined inputs, not actual EPIG performance.
        Past performance is not indicative of future results. <a href="/disclosures" class="text-blue-400 no-underline">Full disclosure &rarr;</a>
      </p>
    </div>
  </div>

  <script>
    function recalculate() {
      const portfolio = parseFloat(document.getElementById('portfolio-size').value) || 0;

      // Strategy A — EV-based (same formula as B and C)
      const aWinRate = parseInt(document.getElementById('a-winrate').value) / 100;
      const aAvgWin = parseFloat(document.getElementById('a-avgwin').value);
      const aAvgLoss = parseFloat(document.getElementById('a-avgloss').value);
      const aTrades = parseInt(document.getElementById('a-trades').value);
      const aRisk = parseFloat(document.getElementById('a-risk').value) / 100;
      const aEV = aWinRate * aAvgWin - (1 - aWinRate) * aAvgLoss;
      const aAnnualR = aEV * aTrades;
      const aReturn = aEV * aTrades * aRisk;
      const aDollar = portfolio * aReturn;

      document.getElementById('a-winrate-val').textContent = Math.round(aWinRate * 100) + '%';
      document.getElementById('a-avgwin-val').textContent = aAvgWin.toFixed(1);
      document.getElementById('a-avgloss-val').textContent = aAvgLoss.toFixed(1);
      document.getElementById('a-ev').textContent = (aEV >= 0 ? '+' : '') + aEV.toFixed(2);
      document.getElementById('a-annual-r').textContent = (aAnnualR >= 0 ? '+' : '') + aAnnualR.toFixed(1);
      document.getElementById('a-return').textContent = (aReturn >= 0 ? '+' : '') + (aReturn * 100).toFixed(1) + '%';
      document.getElementById('a-dollar').textContent = '$' + Math.round(aDollar).toLocaleString();

      // Strategy B
      const bWinRate = parseInt(document.getElementById('b-winrate').value) / 100;
      const bAvgWin = parseFloat(document.getElementById('b-avgwin').value);
      const bAvgLoss = parseFloat(document.getElementById('b-avgloss').value);
      const bTrades = parseInt(document.getElementById('b-trades').value);
      const bRisk = parseFloat(document.getElementById('b-risk').value) / 100;
      const bEV = bWinRate * bAvgWin - (1 - bWinRate) * bAvgLoss;
      const bAnnualR = bEV * bTrades;
      const bReturn = bEV * bTrades * bRisk;
      const bDollar = portfolio * bReturn;

      document.getElementById('b-winrate-val').textContent = Math.round(bWinRate * 100) + '%';
      document.getElementById('b-avgwin-val').textContent = bAvgWin.toFixed(1);
      document.getElementById('b-avgloss-val').textContent = bAvgLoss.toFixed(1);
      document.getElementById('b-ev').textContent = (bEV >= 0 ? '+' : '') + bEV.toFixed(2);
      document.getElementById('b-annual-r').textContent = (bAnnualR >= 0 ? '+' : '') + bAnnualR.toFixed(1);
      document.getElementById('b-return').textContent = (bReturn >= 0 ? '+' : '') + (bReturn * 100).toFixed(1) + '%';
      document.getElementById('b-dollar').textContent = '$' + Math.round(bDollar).toLocaleString();

      // Strategy C
      const cWinRate = parseInt(document.getElementById('c-winrate').value) / 100;
      const cAvgWin = parseFloat(document.getElementById('c-avgwin').value);
      const cAvgLoss = parseFloat(document.getElementById('c-avgloss').value);
      const cTrades = parseInt(document.getElementById('c-trades').value);
      const cRisk = parseFloat(document.getElementById('c-risk').value) / 100;
      const cEV = cWinRate * cAvgWin - (1 - cWinRate) * cAvgLoss;
      const cAnnualR = cEV * cTrades;
      const cReturn = cEV * cTrades * cRisk;
      const cDollar = portfolio * cReturn;

      document.getElementById('c-winrate-val').textContent = Math.round(cWinRate * 100) + '%';
      document.getElementById('c-avgwin-val').textContent = cAvgWin.toFixed(1);
      document.getElementById('c-avgloss-val').textContent = cAvgLoss.toFixed(1);
      document.getElementById('c-ev').textContent = (cEV >= 0 ? '+' : '') + cEV.toFixed(2);
      document.getElementById('c-annual-r').textContent = (cAnnualR >= 0 ? '+' : '') + cAnnualR.toFixed(1);
      document.getElementById('c-return').textContent = (cReturn >= 0 ? '+' : '') + (cReturn * 100).toFixed(1) + '%';
      document.getElementById('c-dollar').textContent = '$' + Math.round(cDollar).toLocaleString();

      // Combined
      const totalReturn = aReturn + bReturn + cReturn;
      const totalDollar = portfolio * totalReturn;
      document.getElementById('combined-a').textContent = (aReturn >= 0 ? '+' : '') + (aReturn * 100).toFixed(1) + '%';
      document.getElementById('combined-b').textContent = (bReturn >= 0 ? '+' : '') + (bReturn * 100).toFixed(1) + '%';
      document.getElementById('combined-c').textContent = (cReturn >= 0 ? '+' : '') + (cReturn * 100).toFixed(1) + '%';
      document.getElementById('combined-total').textContent = (totalReturn >= 0 ? '+' : '') + (totalReturn * 100).toFixed(1) + '%';
      document.getElementById('combined-dollar').textContent = '$' + Math.round(totalDollar).toLocaleString();

      // Bar chart
      const absTotal = Math.abs(aReturn) + Math.abs(bReturn) + Math.abs(cReturn);
      if (absTotal > 0) {
        const aPct = Math.round((Math.abs(aReturn) / absTotal) * 100);
        const bPct = Math.round((Math.abs(bReturn) / absTotal) * 100);
        const cPct = 100 - aPct - bPct;
        document.getElementById('bar-a').style.width = aPct + '%';
        document.getElementById('bar-b').style.width = bPct + '%';
        document.getElementById('bar-c').style.width = cPct + '%';
        document.getElementById('bar-a-label').textContent = aPct + '%';
        document.getElementById('bar-b-label').textContent = bPct + '%';
        document.getElementById('bar-c-label').textContent = cPct + '%';
      }
    }

    // Initial calculation
    recalculate();
  </script>
  `
}
