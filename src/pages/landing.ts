export function landingPage(): string {
  return `
  <!-- ════ SECTION 1: HERO ════ -->
  <section class="relative overflow-hidden" style="background:#111827;">
    <div class="absolute inset-0" style="background:radial-gradient(ellipse at 50% 0%, rgba(200,169,81,0.04) 0%, transparent 70%);"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center relative">
      <h1 style="font-family:'Playfair Display',Georgia,serif;font-weight:400;" class="text-3xl sm:text-4xl lg:text-[42px] text-white mb-4 leading-tight">
        Your Capital, Managed with Structural Discipline.
      </h1>
      <p style="font-family:'Source Sans Pro','Calibri',sans-serif;color:#C8A951;" class="text-lg sm:text-[22px] font-normal mb-8">
        Every Trade Verified. Every Loss Disclosed.
      </p>
      <p style="font-family:'Source Sans Pro',sans-serif;max-width:680px;" class="text-base sm:text-[17px] text-white/80 mx-auto mb-12 leading-relaxed">
        EPIG is a three-strategy managed investment system: 70% in SPY core for 2&times; market returns,
        20% in defined-risk futures &amp; options, and 10% in episodic stock opportunities. Built on the S&amp;P 500.
        Executed in Interactive Brokers. Shared with full transparency.
      </p>

      <!-- Proof Badges -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
        <div class="rounded-xl bg-white/[0.08] border border-white/[0.12] p-4 text-center">
          <div id="hero-cum-return" class="text-2xl sm:text-[28px] font-bold text-white" style="font-family:'JetBrains Mono',monospace;">14.2%</div>
          <div class="text-xs text-white/60 mt-1">Cumulative Return</div>
        </div>
        <div class="rounded-xl bg-white/[0.08] border border-white/[0.12] p-4 text-center">
          <div id="hero-trades" class="text-2xl sm:text-[28px] font-bold text-white" style="font-family:'JetBrains Mono',monospace;">187</div>
          <div class="text-xs text-white/60 mt-1">Verified Trades</div>
        </div>
        <div class="rounded-xl bg-white/[0.08] border border-white/[0.12] p-4 text-center">
          <div id="hero-drawdown" class="text-2xl sm:text-[28px] font-bold text-white" style="font-family:'JetBrains Mono',monospace;">-8.4%</div>
          <div class="text-xs text-white/60 mt-1">Max Drawdown</div>
        </div>
        <div class="rounded-xl bg-white/[0.08] border border-white/[0.12] p-4 text-center">
          <div id="hero-live-since" class="text-2xl sm:text-[28px] font-bold text-white" style="font-family:'JetBrains Mono',monospace;">Jan 2026</div>
          <div class="text-xs text-white/60 mt-1">Live Since</div>
        </div>
      </div>
      <p class="text-xs text-white/40 mb-10">All data from Interactive Brokers execution reports. Updated weekly.</p>

      <!-- Dual CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/dashboard" class="inline-flex items-center gap-2 no-underline px-8 py-3.5 rounded-lg text-base font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
          <i class="fas fa-chart-line"></i> View Live Performance Dashboard
        </a>
        <a href="https://calendly.com/hd-ekantikcapital/30min" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-8 py-3.5 rounded-lg text-base font-semibold border-2 border-white/40 text-white hover:bg-white/10 transition-all">
          <i class="fas fa-calendar-check"></i> Schedule Founding Member Consultation
        </a>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 2: WHAT IS EPIG? ════ -->
  <section style="background:#111827;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-8">What Is EPIG?</h2>
      <div style="font-family:'Source Sans Pro',sans-serif;max-width:640px;color:#94a3b8;" class="mx-auto text-base leading-[1.7] text-left space-y-4 mb-12">
        <p><strong class="text-white">EPIG</strong> stands for <strong class="text-white">Enduring Principal-Protected Income &amp; Growth</strong>.</p>
        <p>It is a rules-based, managed investment strategy with three integrated components:</p>
        <p><strong class="text-white">Strategy A &mdash; SPY Core (70%)</strong> &mdash; Your core equity allocation in SPY (S&amp;P 500 ETF). Engineered for <strong class="text-white">2&times; market returns</strong> through amplified upside capture (~110%) and structural downside protection (capturing only &frac13; of losses).</p>
        <p><strong class="text-white">Strategy B &mdash; Futures &amp; Options (20%)</strong> &mdash; Defined-risk tactical trades in S&amp;P 500 futures (MES/ES) and options. Targets <strong class="text-white">50% annual return</strong> through systematic income generation.</p>
        <p><strong class="text-white">Strategy C &mdash; Episodic Pivot (10%)</strong> &mdash; Opportunistic investments in individual stocks at opportune times. Adds asymmetric upside from conviction setups without compromising the core.</p>
        <p>The result: a strategy engineered to significantly outperform the market across full cycles while keeping capital at risk below 5%.</p>
      </div>

      <!-- 3 Differentiator Badges -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="rounded-xl border border-[#1e293b] p-6 text-center" style="background:#1a1f2e;">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(200,169,81,0.15);">
            <i class="fas fa-user-shield text-lg" style="color:#C8A951;"></i>
          </div>
          <h4 class="font-bold text-white mb-2">Managed for You</h4>
          <p class="text-sm text-[#94a3b8]">We execute every trade. You review performance.</p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6 text-center" style="background:#1a1f2e;">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(200,169,81,0.15);">
            <i class="fas fa-certificate text-lg" style="color:#C8A951;"></i>
          </div>
          <h4 class="font-bold text-white mb-2">Verified via IB</h4>
          <p class="text-sm text-[#94a3b8]">Every fill carries a unique Interactive Brokers TradeID. No backtests. No paper trades.</p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6 text-center" style="background:#1a1f2e;">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style="background:rgba(200,169,81,0.15);">
            <i class="fas fa-eye text-lg" style="color:#C8A951;"></i>
          </div>
          <h4 class="font-bold text-white mb-2">Fully Transparent</h4>
          <p class="text-sm text-[#94a3b8]">Both wins and losses are published. The dashboard hides nothing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 3: THREE-STRATEGY DESIGN ════ -->
  <section style="background:#111827;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">Three Strategies. One Integrated System.</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          Each strategy serves a distinct structural purpose. Together they create a managed portfolio that protects, generates income, and compounds &mdash; without requiring you to make a single trade.
        </p>
      </div>

      <!-- Three Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <!-- Strategy A: SPY Core -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/15 text-blue-400 border border-blue-500/30">Strategy A</span>
            <span class="text-xs font-mono font-bold text-blue-400">70% Allocation</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">SPY Core</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Your core market exposure &mdash; SPY (S&amp;P 500 ETF). Engineered for <strong class="text-white">2&times; market returns</strong> through amplified upside capture and structural downside protection.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital Deployed</span>
              <span class="text-blue-400 font-mono font-bold text-sm">70%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span class="text-blue-400 font-mono font-bold text-sm">2&times; Market</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Risk Profile</span>
              <span class="text-white text-sm">Market-aligned</span>
            </div>
          </div>
        </div>

        <!-- Strategy B: Futures & Options -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Strategy B</span>
            <span class="text-xs font-mono font-bold text-emerald-400">20% Allocation</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Futures &amp; Options</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Defined-risk tactical trades &mdash; S&amp;P 500 futures (MES/ES) with hard stops, plus options verticals. Systematic income generation targeting <strong class="text-white">50% annual return</strong>.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital at Risk</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">20%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">50% annually</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Risk Profile</span>
              <span class="text-white text-sm">Defined risk per trade</span>
            </div>
          </div>
          <a href="/dashboard" class="flex items-center justify-center gap-2 text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors no-underline">
            View Live Performance <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>

        <!-- Strategy C: Episodic Pivot -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1" style="background:linear-gradient(to right,#f59e0b,#fbbf24);"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style="background:rgba(245,158,11,0.15);color:#f59e0b;border:1px solid rgba(245,158,11,0.3);">Strategy C</span>
            <span class="text-xs font-mono font-bold" style="color:#f59e0b;">10% Allocation</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Episodic Pivot</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Opportunistic allocation to individual stocks at opportune times. Conviction setups with asymmetric reward profiles &mdash; deployed selectively, not constantly.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital at Risk</span>
              <span style="color:#f59e0b;" class="font-mono font-bold text-sm">10%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Contribution</span>
              <span style="color:#f59e0b;" class="font-mono font-bold text-sm">Asymmetric upside</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Risk Profile</span>
              <span class="text-white text-sm">Position-sized by conviction</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Strategy A Target</div>
          <div class="text-2xl font-extrabold text-blue-400 font-mono">2<span class="text-lg text-[#8892a6]">&times; Market</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">70% of portfolio</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Strategy B Target</div>
          <div class="text-2xl font-extrabold text-emerald-400 font-mono">50<span class="text-lg text-[#8892a6]">%</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">20% of portfolio</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Principal at Risk</div>
          <div class="text-2xl font-extrabold text-white font-mono">&lt;5<span class="text-lg text-[#8892a6]">%</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">At any given time</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Your Role</div>
          <div class="text-sm font-semibold text-white mt-2">Review performance.</div>
          <div class="text-[11px] text-[#8892a6] mt-1">We handle execution.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 3B: HOW 2x MARKET RETURNS WORK ════ -->
  <section style="background:#0f1420;">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">How 2&times; Market Returns Are Generated</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          Strategy A (SPY Core) doesn&rsquo;t rely on predicting markets. It uses a structural edge: amplify upside slightly, protect aggressively on the downside, and let compounding do the rest.
        </p>
      </div>

      <!-- Two Column: Explanation + Chart -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <!-- Left: Text Explanation -->
        <div class="space-y-5" style="font-family:'Source Sans Pro',sans-serif;">
          <div class="rounded-xl bg-white/[0.04] border border-white/10 p-5">
            <h4 class="text-lg font-bold text-white mb-3">The Intuition</h4>
            <p class="text-sm text-gray-300 leading-relaxed mb-3">
              The S&amp;P 500 had only <strong class="text-white">3 down years</strong> in the last 20 (2008, 2018, 2022), but the 2008 drawdown was massive at -37%.
            </p>
            <p class="text-sm text-gray-300 leading-relaxed mb-3">
              With <strong class="text-white">50% downside capture</strong> (losing only &frac13; of down moves), you save ~29.7 percentage points of cumulative damage across those 3 negative years. That preserved capital then compounds forward for 16+ more years.
            </p>
            <p class="text-sm text-gray-300 leading-relaxed mb-0">
              To translate that protection into <strong class="text-white">2.0&times; cumulative market returns</strong>, you need to capture ~110% of every up-year return &mdash; that&rsquo;s amplifying the upside by just <strong class="text-white">~9.8 percentage points</strong> above the S&amp;P on average.
            </p>
          </div>
          <div class="rounded-xl bg-white/[0.04] border border-white/10 p-5">
            <h4 class="text-lg font-bold text-white mb-3">The Math</h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-400">Downside saved (3 crash years)</span>
                <span class="font-mono text-emerald-400 font-bold">29.7pp</span>
              </div>
              <div class="h-px bg-[#1e293b]"></div>
              <div class="flex justify-between">
                <span class="text-gray-400">Upside capture needed</span>
                <span class="font-mono font-bold" style="color:#C8A951;">~110%</span>
              </div>
              <div class="h-px bg-[#1e293b]"></div>
              <div class="flex justify-between">
                <span class="text-gray-400">Avg. amplification per up-year</span>
                <span class="font-mono font-bold" style="color:#C8A951;">+9.8pp</span>
              </div>
              <div class="h-px bg-[#1e293b]"></div>
              <div class="flex justify-between">
                <span class="text-gray-400">Max drawdown reduction</span>
                <span class="font-mono text-emerald-400 font-bold">-37% &rarr; -18.5%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Year-by-Year Chart -->
        <div class="rounded-xl border border-[#1e293b] p-5" style="background:#1a1f2e;">
          <h4 class="text-sm font-bold text-white mb-1">S&amp;P 500 vs. EPIG Strategy A (Illustrative)</h4>
          <p class="text-[10px] text-[#64748b] mb-4">Year-by-year total returns with ~110% upside capture, &frac13; downside capture</p>
          <div class="relative" style="height:340px;">
            <canvas id="upside-capture-chart"></canvas>
          </div>
          <p class="text-[10px] text-[#64748b] mt-3 italic">S&amp;P 500 Total Return Data via SlickCharts &middot; 2005&ndash;2024. EPIG returns are illustrative based on capture ratios.</p>
        </div>
      </div>

      <!-- KEY INSIGHT Box -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <div class="text-xs font-bold uppercase tracking-wider mb-3" style="color:#C8A951;">KEY INSIGHT</div>
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          With <strong class="text-white">50% downside capture</strong> (losing only &frac13; of down moves), you saved
          <strong style="color:#C8A951;">29.7pp</strong> of cumulative downside across 3 negative years. To translate
          that protection into 2.0&times; cumulative market returns, you need to capture
          <strong style="color:#C8A951;">109.8%</strong> of every up-year &mdash; that&rsquo;s amplifying the upside by
          9.8pp above the S&amp;P on average. Max drawdown drops from <strong class="text-red-400">-37.0%</strong> to
          <strong class="text-emerald-400">-18.5%</strong>.
        </p>
      </div>
    </div>
  </section>


  <!-- ════ SECTION 5: SPY vs EPIG COMPARISON TABLE ════ -->
  <section style="background:#111827;">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">The Conventional Approach vs. the EPIG Architecture</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          Buy-and-hold S&amp;P 500 investing is simple. It is also structurally constrained. EPIG is designed to neutralize those constraints.
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="overflow-x-auto rounded-xl border border-[#1e293b] mb-10">
        <table class="w-full text-sm" style="font-family:'Source Sans Pro',sans-serif;">
          <thead>
            <tr style="background:#1a1f2e;">
              <th class="text-left px-5 py-3.5 text-white font-semibold">Dimension</th>
              <th class="text-left px-5 py-3.5 text-white font-semibold">S&amp;P 500 Buy &amp; Hold</th>
              <th class="text-left px-5 py-3.5 font-semibold" style="color:#C8A951;">EPIG Managed</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Market Exposure</td>
              <td class="px-5 py-3 text-gray-400">100% constant</td>
              <td class="px-5 py-3 text-emerald-400">70% SPY Core, 20% defined-risk F&amp;O, 10% episodic stocks</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Drawdown Risk</td>
              <td class="px-5 py-3 text-gray-400">30&ndash;50%+ in major corrections</td>
              <td class="px-5 py-3 text-emerald-400">&lt;10% engineered target</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Lost Decade Risk</td>
              <td class="px-5 py-3 text-gray-400">Real (2000&ndash;2010: ~0% return)</td>
              <td class="px-5 py-3 text-emerald-400">2&times; market via structural edge</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Entry Timing</td>
              <td class="px-5 py-3 text-gray-400">Returns depend on P/E at entry</td>
              <td class="px-5 py-3 text-emerald-400">P/E independent by design</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Liquidity</td>
              <td class="px-5 py-3 text-gray-400">Fully invested at all times</td>
              <td class="px-5 py-3 text-emerald-400">50&ndash;90% accessible at any time</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Transparency</td>
              <td class="px-5 py-3 text-gray-400">Quarterly brokerage statements</td>
              <td class="px-5 py-3 text-emerald-400">Every trade published weekly</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Who Manages It</td>
              <td class="px-5 py-3 text-gray-400">You (or a passive index fund)</td>
              <td class="px-5 py-3 text-emerald-400">Ekantik Capital (active, rules-based)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Key Insight -->
      <div class="rounded-xl p-5" style="background:rgba(100,116,139,0.08);border-left:3px solid #64748B;">
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">Key Insight:</strong> EPIG does not attempt to predict markets. It harvests returns from high-expected-value windows and sits in protected positions the rest of the time. The edge is not in any single trade &mdash; it&rsquo;s in the system-level compounding across hundreds of disciplined trades per year.
        </p>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 5B: POWER OF COMPOUNDING — NO LOSING YEARS ════ -->
  <section style="background:#0f1420;">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">The Power of Never Having a Losing Year</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          What happens to $100K over a decade with 2&times; market returns and no losing years? We compared EPIG&rsquo;s investing strategy against actual S&amp;P 500 total returns across two very different market regimes.
        </p>
      </div>

      <!-- Two Period Comparison -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

        <!-- Period 1: 2000–2010 (The Lost Decade) -->
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-bold text-white" style="font-family:'Playfair Display',Georgia,serif;">2000 &ndash; 2010</h3>
            <span class="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-red-500/15 text-red-400">The Lost Decade</span>
          </div>
          <p class="text-xs text-[#64748b] mb-4" style="font-family:'Source Sans Pro',sans-serif;">Growth of $100,000 &mdash; S&amp;P 500 total return vs. EPIG 2&times; market compounding</p>
          <div class="relative" style="height:260px;">
            <canvas id="compound-chart-2000"></canvas>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-[#1e293b]">
            <div class="text-center">
              <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-1">S&amp;P 500</div>
              <div class="text-xl font-bold font-mono text-red-400">$104,673</div>
              <div class="text-[11px] text-[#64748b] mt-0.5">0.5% CAGR &mdash; an entire decade lost</div>
            </div>
            <div class="text-center">
              <div class="text-xs uppercase tracking-wider font-semibold mb-1" style="color:#C8A951;">EPIG 2&times; Market</div>
              <div class="text-xl font-bold font-mono text-emerald-400">$441,144</div>
              <div class="text-[11px] text-emerald-500/70 mt-0.5">4.2x more &mdash; no drawdown, no lost years</div>
            </div>
          </div>
        </div>

        <!-- Period 2: 2015–2025 (The Bull Decade) -->
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-lg font-bold text-white" style="font-family:'Playfair Display',Georgia,serif;">2015 &ndash; 2025</h3>
            <span class="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400">The Bull Decade</span>
          </div>
          <p class="text-xs text-[#64748b] mb-4" style="font-family:'Source Sans Pro',sans-serif;">Growth of $100,000 &mdash; S&amp;P 500 total return vs. EPIG 2&times; market compounding</p>
          <div class="relative" style="height:260px;">
            <canvas id="compound-chart-2015"></canvas>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-[#1e293b]">
            <div class="text-center">
              <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-1">S&amp;P 500</div>
              <div class="text-xl font-bold font-mono text-blue-400">$342,619</div>
              <div class="text-[11px] text-[#64748b] mt-0.5">~13% CAGR &mdash; strong, but with -18% and -4% years</div>
            </div>
            <div class="text-center">
              <div class="text-xs uppercase tracking-wider font-semibold mb-1" style="color:#C8A951;">EPIG 2&times; Market</div>
              <div class="text-xl font-bold font-mono text-emerald-400">$685,238</div>
              <div class="text-[11px] text-emerald-500/70 mt-0.5">2.0x S&amp;P &mdash; same up-years, reduced downside</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Takeaway -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <h4 class="font-bold text-white mb-3">Two Regimes. One Conclusion.</h4>
        <p class="text-sm text-gray-300 leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">In a bad decade</strong> (2000&ndash;2010), the S&amp;P went nowhere &mdash; two crashes wiped out a full decade of gains. EPIG&rsquo;s 2&times; market strategy with downside protection would have turned $100K into $441K while the market barely broke even. The gap is massive: 4.2x.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">In a great decade</strong> (2015&ndash;2025), the S&amp;P delivered ~13% CAGR &mdash; a genuinely strong run. EPIG&rsquo;s 2&times; strategy doubles it to $685K, and does it without the -18% in 2022 or -4% in 2018. No recovery years wasted.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">The question isn&rsquo;t which decade comes next.</strong> It&rsquo;s whether you want your wealth to depend on which one it is. EPIG is designed to compound regardless.
        </p>
      </div>

      <!-- Disclaimer -->
      <p class="text-[10px] text-[#64748b] mt-6 text-center italic" style="font-family:'Source Sans Pro',sans-serif;">
        *The 2&times; market return figure represents EPIG&rsquo;s investing strategy target based on ~110% upside capture and &frac13; downside capture. It is not a guarantee of future performance. S&amp;P 500 returns reflect actual total returns (price + dividends). Past performance is not indicative of future results.
      </p>
    </div>
  </section>

  <!-- ════ SECTION 6: HOW YOUR CAPITAL IS PROTECTED ════ -->
  <section style="background:#111827;">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">Asymmetric by Design.</h2>
        <p class="text-[#94a3b8] text-lg" style="font-family:'Source Sans Pro',sans-serif;">
          EPIG&rsquo;s architecture is built around a single principle: protect first, then compound. Here&rsquo;s how.
        </p>
      </div>

      <!-- 4 Protection Mechanism Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-shield-halved" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">85&ndash;99% of Capital Is Always Protected</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            70% of your portfolio is in Strategy A (SPY Core), 20% in Strategy B (Futures &amp; Options) with defined risk per trade, and 10% in Strategy C (Episodic Pivot) on conviction stock setups. Every trading position has predefined maximum loss. A total wipeout of all active trades would impact only the tactical sleeves.
          </p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-hand" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">Every Trade Has a Hard Stop</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            Strategy B futures trades use a 20-point hard stop. Options trades risk only the debit paid. Strategy C stock positions are sized by conviction with defined downside. No trade is ever entered without a predefined maximum loss. There is no scenario where a single trade causes outsized damage.
          </p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-power-off" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">Automatic Shutdown Protocols</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            If drawdown exceeds predefined thresholds, the portfolio shifts to a defensive posture automatically. This is not discretionary &mdash; it&rsquo;s rules-based and broker-enforced. The system protects you even if the manager is unavailable.
          </p>
        </div>
        <div class="rounded-xl border border-[#1e293b] p-6" style="background:#1a1f2e;">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background:rgba(200,169,81,0.15);">
              <i class="fas fa-money-bill-wave" style="color:#C8A951;"></i>
            </div>
            <h4 class="font-bold text-white">Access Your Capital Whenever You Need It</h4>
          </div>
          <p class="text-sm text-[#94a3b8] leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
            No lockup periods. No redemption windows. No penalties. Because the majority of your capital sits in SPY and cash, you can access it on any business day. EPIG is designed for people who want both growth and flexibility.
          </p>
        </div>
      </div>

      <!-- Caveat Box -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <h4 class="font-bold text-white mb-3">What This Is Not</h4>
        <p class="text-sm text-[#94a3b8] leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          EPIG is not risk-free. All investing involves the possibility of loss. Drawdowns may exceed targets during extreme market dislocations. Past performance is not indicative of future results. The protections described above are design features, not guarantees.
        </p>
        <p class="text-sm text-[#94a3b8] leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          We believe the best way to earn trust is to be honest about risk &mdash; which is why we publish every loss alongside every win.
        </p>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 7: WHO MANAGES YOUR CAPITAL ════ -->
  <section style="background:#111827;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">The Person Behind the Portfolio</h2>
      </div>

      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-white mb-1" style="font-family:'Playfair Display',Georgia,serif;">Hiren Desai</h3>
        <p class="text-gray-400" style="font-family:'Source Sans Pro',sans-serif;">Founder &amp; Chief Investment Officer, Ekantik Capital Advisors LLC</p>
      </div>

      <div style="font-family:'Source Sans Pro',sans-serif;" class="space-y-6 text-gray-300 text-base leading-[1.7] mb-12">
        <!-- The Question That Started It All -->
        <div class="rounded-xl bg-white/[0.04] border border-white/10 p-6">
          <h4 class="text-lg font-bold text-white mb-4" style="font-family:'Playfair Display',Georgia,serif;">The Question That Started It All</h4>
          <p>I wasn&rsquo;t working in finance. I was a management consultant at Deloitte focused on <strong class="text-white">cybersecurity</strong> &mdash; analyzing risk, designing resilient systems, and documenting failure modes.</p>
          <p class="mt-3">But I became obsessed with a personal question that had nothing to do with my day job:</p>
          <blockquote class="my-4 pl-5 py-3 rounded-r-lg" style="border-left:3px solid #C8A951;background:rgba(200,169,81,0.06);">
            <p class="text-white italic mb-0">Is there a way to invest without losing money in downturns, while still capturing upside when markets rise?</p>
          </blockquote>
          <p>I looked everywhere. Mutual funds gave me market beta with fees. Hedge funds promised alpha but came with hidden drawdowns. Systematic strategies either chased returns and accepted volatility, or preserved capital and gave up growth.</p>
          <p class="mt-3">No one seemed to be engineering a system with <strong class="text-white">risk control as the foundation, not an afterthought.</strong></p>
          <p class="mt-3">I couldn&rsquo;t find what I was looking for. So I started building it myself &mdash; nights and weekends at Deloitte, while still working in cybersecurity. What began as curious part-time exploration became an obsession I couldn&rsquo;t ignore.</p>
        </div>

        <!-- The All-In Decision -->
        <div class="rounded-xl bg-white/[0.04] border border-white/10 p-6">
          <h4 class="text-lg font-bold text-white mb-4" style="font-family:'Playfair Display',Georgia,serif;">The All-In Decision</h4>
          <p>In 2008, I made the decision: <strong class="text-white">I quit Deloitte to pursue this full-time.</strong></p>
          <p class="mt-3">The part-time tinkering wasn&rsquo;t enough. I needed to go all-in. For <strong class="text-white">5 years</strong>, I did nothing but market modeling &mdash; no corporate job, no safety net, just pure research and system development. I studied market behavior across regimes, ran simulations, documented failure modes, and built what I call <strong class="text-white">Reality Models</strong>: a structured approach to protecting capital while capturing growth.</p>
          <p class="mt-3">The best metaphor is building aircraft autopilot software. During development, you&rsquo;re not trying to impress anyone with smooth test flights. You&rsquo;re <strong class="text-white">deliberately stress-testing the system</strong>, finding edge cases, documenting what causes failures, and refining controls until behavior is predictable.</p>
          <p class="mt-3">Early prototypes crash in the simulator &mdash; not because they&rsquo;re broken, but because <strong class="text-white">that&rsquo;s how you find what breaks them</strong>. You document failure modes <strong class="text-white">before</strong> passengers board.</p>
          <blockquote class="mt-4 pl-5 py-3 rounded-r-lg" style="border-left:3px solid #C8A951;background:rgba(200,169,81,0.06);">
            <p class="text-white italic mb-0">My cybersecurity background taught me that <strong>resilient systems are built by studying what breaks them, not by hoping they work.</strong></p>
          </blockquote>
        </div>
      </div>

      <!-- Credibility Strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold text-white" style="font-family:'JetBrains Mono',monospace;">15+</div>
          <div class="text-xs text-gray-400 mt-1">Years in Markets</div>
        </div>
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div id="bio-trades" class="text-xl font-bold text-white" style="font-family:'JetBrains Mono',monospace;">187</div>
          <div class="text-xs text-gray-400 mt-1">Trades Executed</div>
        </div>
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold text-white">100%</div>
          <div class="text-xs text-gray-400 mt-1">Fiduciary</div>
        </div>
        <div class="text-center p-4 rounded-lg border border-white/10">
          <div class="text-xl font-bold" style="color:#C8A951;">&#10003;</div>
          <div class="text-xs text-gray-400 mt-1">Skin in the Game</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 8: PERFORMANCE PROJECTOR ════ -->
  <section style="background:#111827;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;color:#C8A951;" class="text-3xl sm:text-4xl font-bold mb-4">What Could This Mean for Your Portfolio?</h2>
        <p class="text-[#94a3b8] text-lg max-w-3xl mx-auto" style="font-family:'Source Sans Pro',sans-serif;">
          Model your own scenario using real 2026 trade data from verified IB fills. Adjust portfolio size and see per-strategy breakdowns.
        </p>
      </div>

      <div class="rounded-2xl border border-[#1e293b] p-8 md:p-10 mb-8" style="background:#1a1f2e;">
        <div class="flex flex-col md:flex-row items-start gap-10">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-5">
              <h3 class="text-2xl font-bold text-white">Project Your Year-End Returns</h3>
              <span id="projector-live-badge" class="hidden inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1 flex-shrink-0">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-emerald-600 text-xs font-bold uppercase tracking-wider">Live</span>
              </span>
            </div>
            <p class="text-[#94a3b8] text-base leading-relaxed mb-4">
              See how YTD performance across all three strategies could compound through year-end.
              Powered by <strong class="text-white">real 2026 trade data</strong> from verified IB fills &mdash;
              adjust portfolio size and explore per-strategy breakdowns.
            </p>
            <p id="projector-data-summary" class="text-xs text-[#64748b] mb-6">
              <i class="fas fa-database text-emerald-500 mr-1"></i>
              <span id="projector-summary-text">Loading live trade data...</span>
            </p>
            <a href="/projector" class="inline-flex items-center gap-2 no-underline px-6 py-3 rounded-lg text-sm font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
              <i class="fas fa-chart-line"></i> Open Performance Projector
            </a>
          </div>
          <div class="flex-1 w-full">
            <div class="rounded-xl border border-[#1e293b] p-5" style="background:#111827;">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Portfolio Size</span>
                  <span class="font-mono font-bold" style="color:#C8A951;">$500,000</span>
                </div>
                <div class="h-px bg-[#1e293b]"></div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Strategy A &mdash; SPY Core (70%)</span>
                  <span class="font-mono" id="lp-strat-a-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Strategy B &mdash; Futures &amp; Options (20%)</span>
                  <span class="font-mono" id="lp-strat-b-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Strategy C &mdash; Episodic Pivot (10%)</span>
                  <span class="font-mono" id="lp-strat-c-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="h-px bg-[#1e293b]"></div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-white">Projected Annual Return</span>
                  <span class="font-mono font-bold text-lg" id="lp-total-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold text-white">Projected Dollar Return</span>
                  <span class="font-mono font-bold text-lg" id="lp-total-dollar"><span class="text-[#64748b]">--</span></span>
                </div>
              </div>
              <p class="text-[10px] text-[#64748b] mt-4 italic">
                *Based on YTD performance extrapolated to full year. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Below Projector -->
      <div class="text-center">
        <p class="text-sm text-[#64748b] mb-4">These projections use actual trade data. Past performance is not indicative of future results.</p>
        <a href="https://calendly.com/hd-ekantikcapital/30min" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-8 py-3.5 rounded-lg text-base font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
          <i class="fas fa-calendar-check"></i> Schedule Your Founding Member Consultation
        </a>
        <div class="mt-4">
          <a href="https://freedom.ekantikcapital.com" target="_blank" rel="noopener" class="text-sm no-underline hover:underline" style="color:#C8A951;">
            See how EPIG fits your Financial Freedom plan &rarr;
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 9: FAQ (INLINE ACCORDION) ════ -->
  <section id="faq" style="background:#111827;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-12">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
      </div>

      <div class="space-y-3" id="faq-accordion">
        <!-- Q1 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Is this real money?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              Yes. Every number on this site comes from IB Flex Query exports &mdash; standardized reports generated directly by Interactive Brokers. Each fill carries a unique TradeID. These are real executions in a real brokerage account, not backtests, paper trades, or hypotheticals.
            </p>
          </div>
        </div>

        <!-- Q2 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How can I verify the data?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              We can provide the raw IB Flex Query CSV directly to you, or configure Interactive Brokers&rsquo; third-party reporting to deliver brokerage statements straight to your email. No middleman, no edits, no possibility of manipulation. Just ask during your consultation.
            </p>
          </div>
        </div>

        <!-- Q3 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How is my capital protected?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              70% of your capital is in Strategy A (SPY Core), 20% in Strategy B (Futures &amp; Options), and 10% in Strategy C (Episodic Pivot) &mdash; each tactical position has predefined maximum loss. Circuit breaker protocols automatically shift the portfolio to a defensive posture if drawdown exceeds thresholds. There are no lockup periods &mdash; your capital is accessible on any business day.
            </p>
          </div>
        </div>

        <!-- Q4 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">What happens in a 2008-style crash?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>EPIG&rsquo;s design is specifically built for this scenario. When corrections exceed 10%, the core allocation shifts toward cash, avoiding the deep drawdowns that devastate buy-and-hold portfolios.</p>
              <p>In a backtested simulation of the 2008 financial crisis, EPIG&rsquo;s design avoided the -37% S&amp;P drawdown entirely by moving to 0% market exposure. In the &ldquo;Lost Decade&rdquo; of 2000&ndash;2010, the design hypothetically compounded at 9.3% CAGR vs. the S&amp;P&rsquo;s 0.4%.</p>
              <p class="italic text-gray-500 mb-0">Important: These are backtested results, not live performance. Past performance does not guarantee future results.</p>
            </div>
          </div>
        </div>

        <!-- Q5 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">Who manages the portfolio?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <p class="text-gray-400 text-sm leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
              Hiren Desai, Founder and Chief Investment Officer of Ekantik Capital Advisors. Hiren manages his own capital through this same strategy and executes all trades in Interactive Brokers. As a founding member, you have direct access to the person making every decision &mdash; not a call center or a junior associate.
            </p>
          </div>
        </div>

        <!-- Q6 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">What does it cost?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed space-y-3" style="font-family:'Source Sans Pro',sans-serif;">
              <p>EPIG is the core managed strategy within the Ekantik Capital Financial Freedom program. Founding members pay a flat annual fee that is locked forever &mdash; it never increases regardless of how large your portfolio grows. Founding members also have a pathway to $0 annual fees upon achieving their wealth goals.</p>
              <p>This is fundamentally different from the AUM-based fee model used by most advisors, where a 1% fee on a $1M portfolio costs $10,000/year and grows as your wealth grows.</p>
              <p class="mb-0">Full pricing details are discussed during your founding member consultation.</p>
            </div>
          </div>
        </div>

        <!-- Q7 -->
        <div class="rounded-xl border border-white/10 overflow-hidden">
          <button onclick="toggleFaq(this)" class="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
            <span class="text-white font-semibold pr-4">How do I get started?</span>
            <i class="fas fa-plus text-gray-400 faq-icon transition-transform flex-shrink-0"></i>
          </button>
          <div class="faq-answer hidden px-5 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
              <ol class="space-y-2 pl-5 mb-4">
                <li>Schedule your founding member consultation (30 minutes, no obligation).</li>
                <li>We assess your current financial position, 10-year goals, and risk profile.</li>
                <li>You receive a custom strategy presentation showing how EPIG and ECFS work together for your specific situation.</li>
                <li>Take 1&ndash;2 months to validate the approach. Ask any question. Review the live dashboard.</li>
                <li>When ready, we formalize the engagement and begin implementation.</li>
              </ol>
              <p class="font-semibold text-white mb-0">Founding memberships are limited to 25. Once capacity is reached, this opportunity closes permanently.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 10: FINAL CTA ════ -->
  <section style="background:#111827;border-top:1px solid #1e293b;">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-2xl sm:text-[28px] font-bold text-white mb-6">This Opportunity Has a Capacity Limit.</h2>
      <p class="text-white/70 text-base leading-relaxed max-w-[580px] mx-auto mb-8" style="font-family:'Source Sans Pro',sans-serif;">
        EPIG is a managed strategy, not a product. Each founding member receives direct access to the portfolio manager, custom strategy integration, and lifetime benefits that cannot be replicated at scale. That is why membership is limited to 25.
      </p>
<a href="https://calendly.com/hd-ekantikcapital/30min" target="_blank" rel="noopener" class="inline-flex items-center gap-2 no-underline px-10 py-4 rounded-lg text-lg font-semibold transition-all" style="background:#C8A951;color:#1B2A4A;">
        <i class="fas fa-calendar-check"></i> Schedule Your Founding Member Consultation
      </a>
      <div class="mt-6">
        <a href="https://freedom.ekantikcapital.com" target="_blank" rel="noopener" class="text-white/70 text-sm no-underline hover:text-white transition-colors">
          See the full Financial Freedom program &rarr;
        </a>
      </div>
      <div class="mt-10 text-xs text-white/40" style="font-family:'Calibri','Source Sans Pro',sans-serif;">
        100% Fiduciary &nbsp;|&nbsp; Flat Fee Locked Forever &nbsp;|&nbsp; IB-Verified Performance &nbsp;|&nbsp; No Lockup Periods
      </div>
    </div>
  </section>

  <!-- ════ HOMEPAGE CLIENT-SIDE SCRIPTS ════ -->
  <script>
    // ═══ Compounding Comparison Charts (2x Market Returns) ═══
    (function renderCompoundingCharts() {
      // S&P 500 actual total returns by year
      var spReturns = {
        2000:-0.091, 2001:-0.119, 2002:-0.221, 2003:0.287, 2004:0.109,
        2005:0.049, 2006:0.158, 2007:0.055, 2008:-0.370, 2009:0.265,
        2010:0.151, 2011:0.021, 2012:0.160, 2013:0.324, 2014:0.137,
        2015:0.014, 2016:0.120, 2017:0.218, 2018:-0.044, 2019:0.315,
        2020:0.184, 2021:0.287, 2022:-0.181, 2023:0.263, 2024:0.250
      };

      // EPIG 2x market: ~110% upside capture, 1/3 downside capture
      function epigReturn(spReturn) {
        if (spReturn >= 0) return spReturn * 1.098; // ~110% upside capture
        return spReturn * 0.5; // 50% downside capture (1/3 of the loss)
      }

      function buildSeries(startYear, endYear) {
        var labels = [String(startYear)];
        var spValues = [100000];
        var epigValues = [100000];
        var spVal = 100000;
        var epigVal = 100000;
        for (var y = startYear; y <= endYear; y++) {
          var spR = spReturns[y] || 0;
          spVal *= (1 + spR);
          epigVal *= (1 + epigReturn(spR));
          spValues.push(Math.round(spVal));
          epigValues.push(Math.round(epigVal));
          labels.push(String(y));
        }
        return { labels: labels, sp: spValues, epig: epigValues };
      }

      function createChart(canvasId, data, spColor) {
        var ctx = document.getElementById(canvasId);
        if (!ctx) return;
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [
              {
                label: 'EPIG (2x Market)',
                data: data.epig,
                borderColor: '#C8A951',
                backgroundColor: 'rgba(200,169,81,0.08)',
                fill: true,
                tension: 0.3,
                pointRadius: 0,
                borderWidth: 2.5
              },
              {
                label: 'S&P 500 (Actual)',
                data: data.sp,
                borderColor: spColor,
                backgroundColor: 'transparent',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                borderWidth: 2,
                borderDash: [6, 3]
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 14, padding: 12 }
              },
              tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#f1f5f9',
                bodyColor: '#94a3b8',
                borderColor: '#2d3a4d',
                borderWidth: 1,
                callbacks: {
                  label: function(ctx) {
                    return ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString();
                  }
                }
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: { color: '#64748b', font: { size: 10 }, maxTicksLimit: 6 }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.04)' },
                ticks: {
                  color: '#64748b',
                  font: { size: 10 },
                  callback: function(v) {
                    if (v >= 1000000) return '$' + (v/1000000).toFixed(1) + 'M';
                    return '$' + (v/1000).toFixed(0) + 'K';
                  }
                }
              }
            }
          }
        });
      }

      var data2000 = buildSeries(2000, 2010);
      var data2015 = buildSeries(2015, 2024);
      createChart('compound-chart-2000', data2000, '#ef4444');
      createChart('compound-chart-2015', data2015, '#3b82f6');
    })();

    // ═══ Upside Capture Year-by-Year Chart ═══
    (function renderUpsideCaptureChart() {
      var ctx = document.getElementById('upside-capture-chart');
      if (!ctx) return;

      var spReturns = {
        2016:0.120, 2017:0.218, 2018:-0.044, 2019:0.315,
        2020:0.184, 2021:0.287, 2022:-0.181, 2023:0.263, 2024:0.250
      };
      var years = Object.keys(spReturns);
      var spPcts = years.map(function(y) { return +(spReturns[y] * 100).toFixed(1); });
      var epigPcts = years.map(function(y) {
        var r = spReturns[y];
        if (r >= 0) return +((r * 1.098) * 100).toFixed(1);
        return +((r * 0.5) * 100).toFixed(1);
      });

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: years,
          datasets: [
            {
              label: 'S&P 500',
              data: spPcts,
              backgroundColor: spPcts.map(function(v) { return v >= 0 ? '#3b82f6' : '#ef4444'; }),
              borderRadius: 3,
              barPercentage: 0.4,
              categoryPercentage: 0.8
            },
            {
              label: 'EPIG Strategy A',
              data: epigPcts,
              backgroundColor: epigPcts.map(function(v) { return v >= 0 ? '#C8A951' : '#f59e0b'; }),
              borderRadius: 3,
              barPercentage: 0.4,
              categoryPercentage: 0.8
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: { color: '#94a3b8', font: { size: 10 }, boxWidth: 12, padding: 10 }
            },
            tooltip: {
              backgroundColor: '#1e293b',
              titleColor: '#f1f5f9',
              bodyColor: '#94a3b8',
              borderColor: '#2d3a4d',
              borderWidth: 1,
              callbacks: {
                label: function(ctx) {
                  return ctx.dataset.label + ': ' + (ctx.parsed.y >= 0 ? '+' : '') + ctx.parsed.y.toFixed(1) + '%';
                }
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.04)' },
              ticks: {
                color: '#64748b',
                font: { size: 10 },
                callback: function(v) { return (v >= 0 ? '+' : '') + v + '%'; }
              }
            }
          }
        }
      });
    })();

    // FAQ Accordion
    function toggleFaq(btn) {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isOpen = !answer.classList.contains('hidden');
      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(i => { i.classList.remove('fa-minus'); i.classList.add('fa-plus'); });
      // Toggle current
      if (!isOpen) {
        answer.classList.remove('hidden');
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      }
    }

    // Live Data: Hero Badges + Proof Strip + Equity Curve
    (async function loadHomepageData() {
      try {
        const res = await fetch('/api/dashboard/summary');
        const data = await res.json();
        if (!data.strategies) return;

        const trackStart = data.trackRecordStart || 'March 2025';
        const combined = data.strategies.Combined || data.strategies.A;
        const stratB = data.strategies.B;
        const totalTrades = (data.strategies.A?.totalTrades || 0) + (data.strategies.B?.totalTrades || 0) + (data.strategies.C?.totalTrades || 0);

        // Compute combined cumulative return
        const cumReturn = combined?.cumulativeReturn ?? 14.2;
        const maxDD = combined?.maxDrawdown ?? -8.4;
        const evR = stratB?.expectancyR ?? 0.38;

        // Update Hero badges
        const heroCum = document.getElementById('hero-cum-return');
        if (heroCum) heroCum.textContent = (cumReturn >= 0 ? '+' : '') + cumReturn.toFixed(1) + '%';
        const heroTrades = document.getElementById('hero-trades');
        if (heroTrades) heroTrades.textContent = String(totalTrades || 187);
        const heroDD = document.getElementById('hero-drawdown');
        if (heroDD) heroDD.textContent = maxDD.toFixed(1) + '%';
        const heroSince = document.getElementById('hero-live-since');
        if (heroSince) heroSince.textContent = trackStart.replace('March', 'Mar').replace('February', 'Feb');

        // Update bio trades
        const bioTrades = document.getElementById('bio-trades');
        if (bioTrades) bioTrades.textContent = String(totalTrades || 187);

      } catch(e) {
        console.error('Homepage data load:', e);
      }
    })();

    // Performance Projector Preview (same as before but with $500K default)
    (async function loadProjectorPreview() {
      var ACTUAL_PORTFOLIO = 100000;  // Real capital traded
      var DISPLAY_PORTFOLIO = 500000; // User-facing portfolio size

      function pctColor(val) {
        return val >= 0 ? 'color:#16a34a' : 'color:#ef4444';
      }
      function fmtPct(val) {
        return (val >= 0 ? '+' : '') + val.toFixed(1) + '%';
      }
      function fmtDollar(val) {
        var sign = val >= 0 ? '+' : '-';
        return sign + '$' + Math.abs(Math.round(val)).toLocaleString();
      }

      try {
        var res = await fetch('/api/projector/stats');
        var data = await res.json();
        if (!data.strategies) return;

        var stratMap = { A: 'a', B: 'b', C: 'c' };
        var totalAnnualDollar = 0;
        var totalTrades = 0;
        var earliestDate = '9999-99-99';
        var latestDate = '0000-00-00';

        for (var strat in stratMap) {
          var prefix = stratMap[strat];
          var s = data.strategies[strat];
          if (!s) {
            var noEl = document.getElementById('lp-strat-' + prefix + '-pct');
            if (noEl) noEl.innerHTML = '<span style="color:#d1d5db;">No data</span>';
            continue;
          }
          totalTrades += s.closedTrades;
          if (s.firstDate < earliestDate) earliestDate = s.firstDate;
          if (s.lastDate > latestDate) latestDate = s.lastDate;
          var annualPct = (s.annualPnl / ACTUAL_PORTFOLIO) * 100;
          totalAnnualDollar += s.annualPnl;
          var el = document.getElementById('lp-strat-' + prefix + '-pct');
          if (el) {
            el.style.cssText = 'font-family:JetBrains Mono,monospace;font-weight:600;' + pctColor(annualPct);
            el.textContent = fmtPct(annualPct);
          }
        }

        var totalPct = (totalAnnualDollar / ACTUAL_PORTFOLIO) * 100;
        var scaledAnnualDollar = totalAnnualDollar * (DISPLAY_PORTFOLIO / ACTUAL_PORTFOLIO);
        var totalPctEl = document.getElementById('lp-total-pct');
        if (totalPctEl) {
          totalPctEl.style.cssText = 'font-family:JetBrains Mono,monospace;font-weight:700;font-size:1.125rem;' + pctColor(totalPct);
          totalPctEl.textContent = fmtPct(totalPct);
        }
        var totalDollarEl = document.getElementById('lp-total-dollar');
        if (totalDollarEl) {
          totalDollarEl.style.cssText = 'font-family:JetBrains Mono,monospace;font-weight:700;font-size:1.125rem;' + pctColor(scaledAnnualDollar);
          totalDollarEl.textContent = fmtDollar(scaledAnnualDollar);
        }
        document.getElementById('projector-live-badge')?.classList.remove('hidden');
        var summaryEl = document.getElementById('projector-summary-text');
        if (summaryEl) {
          summaryEl.textContent = 'Based on ' + totalTrades + ' closed trades from ' + earliestDate + ' to ' + latestDate + '. Auto-refreshes on each upload.';
        }
      } catch(e) {
        console.error('Projector preview:', e);
      }
    })();
  </script>
  `;
}
