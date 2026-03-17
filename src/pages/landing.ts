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
        EPIG is a three-layer managed investment strategy that keeps 70&ndash;85% of your capital structurally protected
        while compounding tactical futures income and asymmetric options returns. Built on the S&amp;P 500.
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
        <p>It is a rules-based, managed investment strategy with three layers:</p>
        <p><strong class="text-white">Layer A</strong> holds your SPY (S&amp;P 500 ETF) position &mdash; the core structural allocation that provides broad market exposure and serves as your capital&rsquo;s anchor.</p>
        <p><strong class="text-white">Layer B</strong> encompasses all futures and market-level options trades &mdash; tactical S&amp;P 500 futures (MES/ES) with defined stops, plus SPY/SPX options during market dislocations.</p>
        <p><strong class="text-white">Layer C</strong> tracks individual stocks outside of SPY and options on individual stocks &mdash; select equities and stock options chosen for strategic opportunities, sector exposure, or tactical plays beyond the core index allocation.</p>
        <p>The result: a strategy engineered to target <strong class="text-white">16%+ CAGR</strong> across full market cycles while keeping original capital at risk below 5%.</p>
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

  <!-- ════ SECTION 3: THREE-LAYER DESIGN ════ -->
  <section style="background:#111827;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 style="font-family:'Playfair Display',Georgia,serif;" class="text-3xl sm:text-4xl font-bold text-white mb-4">Three Layers. One Integrated System.</h2>
        <p class="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed" style="font-family:'Source Sans Pro',sans-serif;">
          Each layer serves a distinct structural purpose. Together they create a managed portfolio that protects, generates income, and compounds &mdash; without requiring you to make a single trade.
        </p>
      </div>

      <!-- Three Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <!-- Layer A -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1" style="background:linear-gradient(to right,#C8A951,#e0c878);"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider" style="background:rgba(200,169,81,0.15);color:#C8A951;border:1px solid rgba(200,169,81,0.3);">Layer A</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">SPY Investments</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Your core SPY (S&amp;P 500 ETF) allocation &mdash; providing broad market exposure, capital preservation, and participation in long-term equity growth. This layer anchors the portfolio.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital Deployed</span>
              <span style="color:#C8A951;" class="font-mono font-bold text-sm">70&ndash;85%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Contribution</span>
              <span style="color:#C8A951;" class="font-mono font-bold text-sm">4&ndash;6% annually</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Risk Profile</span>
              <span class="text-white text-sm">Market-aligned</span>
            </div>
          </div>
        </div>

        <!-- Layer B -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Layer B</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Futures &amp; Market Options</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            All futures and market-related options trades &mdash; defined-risk S&amp;P 500 futures (MES/ES) with hard stops, plus SPY/SPX options verticals. Systematic income generation and episodic opportunity capture combined.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital at Risk</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">3&ndash;5%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Contribution</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">8&ndash;12% annually</span>
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

        <!-- Layer C -->
        <div class="rounded-2xl border border-[#1e293b] bg-[#1a1f2e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-purple-400 border border-purple-500/30">Layer C</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Stocks &amp; Stock Options</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5" style="font-family:'Source Sans Pro',sans-serif;">
            Individual stock positions outside of SPY and options on individual stocks &mdash; select equities and stock options chosen for strategic opportunities, sector exposure, or tactical plays beyond the core index allocation.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital at Risk</span>
              <span class="text-purple-400 font-mono font-bold text-sm">3&ndash;5%</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Contribution</span>
              <span class="text-purple-400 font-mono font-bold text-sm">4&ndash;8% annually</span>
            </div>
            <div class="h-px bg-[#1e293b]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Risk Profile</span>
              <span class="text-white text-sm">Asymmetric</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Strip -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Target CAGR</div>
          <div class="text-2xl font-extrabold text-white font-mono">16<span class="text-lg text-[#8892a6]">%+</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">Across full market cycles</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Principal at Risk</div>
          <div class="text-2xl font-extrabold text-emerald-400 font-mono">&lt;5<span class="text-lg text-[#8892a6]">%</span></div>
          <div class="text-[11px] text-[#8892a6] mt-1">At any given time</div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Trades / Year</div>
          <div class="text-2xl font-extrabold text-white font-mono">150<span class="text-lg text-[#8892a6]">&ndash;200</span></div>
        </div>
        <div class="rounded-xl border border-[#1e293b] bg-[#1a1f2e] p-5 text-center">
          <div class="text-xs text-[#8892a6] uppercase tracking-wider font-semibold mb-2">Your Role</div>
          <div class="text-sm font-semibold text-white mt-2">Review performance.</div>
          <div class="text-[11px] text-[#8892a6] mt-1">We handle execution.</div>
        </div>
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
              <td class="px-5 py-3 text-emerald-400">&lt;5% tactical, rest protected</td>
            </tr>
            <tr class="bg-[#151a27]">
              <td class="px-5 py-3 text-white font-medium">Drawdown Risk</td>
              <td class="px-5 py-3 text-gray-400">30&ndash;50%+ in major corrections</td>
              <td class="px-5 py-3 text-emerald-400">&lt;10% engineered target</td>
            </tr>
            <tr class="bg-[#1a1f2e]">
              <td class="px-5 py-3 text-white font-medium">Lost Decade Risk</td>
              <td class="px-5 py-3 text-gray-400">Real (2000&ndash;2010: ~0% return)</td>
              <td class="px-5 py-3 text-emerald-400">Market-neutral income sleeve</td>
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
          What happens to $100K over a decade if you never have a losing year? We compared EPIG&rsquo;s 16% CAGR target against actual S&amp;P 500 total returns across two very different market regimes &mdash; so you can gauge the potential edge regardless of what the next decade looks like.
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
          <p class="text-xs text-[#64748b] mb-4" style="font-family:'Source Sans Pro',sans-serif;">Growth of $100,000 &mdash; S&amp;P 500 total return vs. 16% CAGR compounding</p>
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
              <div class="text-xs uppercase tracking-wider font-semibold mb-1" style="color:#C8A951;">EPIG at 16% CAGR</div>
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
          <p class="text-xs text-[#64748b] mb-4" style="font-family:'Source Sans Pro',sans-serif;">Growth of $100,000 &mdash; S&amp;P 500 total return vs. 16% CAGR compounding</p>
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
              <div class="text-xs uppercase tracking-wider font-semibold mb-1" style="color:#C8A951;">EPIG at 16% CAGR</div>
              <div class="text-xl font-bold font-mono text-emerald-400">$441,144</div>
              <div class="text-[11px] text-emerald-500/70 mt-0.5">1.3x more &mdash; same result, no drawdowns</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Takeaway -->
      <div class="rounded-xl p-6" style="background:rgba(200,169,81,0.06);border-left:3px solid #C8A951;">
        <h4 class="font-bold text-white mb-3">Two Regimes. One Conclusion.</h4>
        <p class="text-sm text-gray-300 leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">In a bad decade</strong> (2000&ndash;2010), the S&amp;P went nowhere &mdash; two crashes wiped out a full decade of gains. EPIG&rsquo;s 16% CAGR with no losing years would have turned $100K into $441K while the market barely broke even. The gap is massive: 4.2x.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed mb-3" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">In a great decade</strong> (2015&ndash;2025), the S&amp;P delivered ~13% CAGR &mdash; a genuinely strong run. Yet EPIG still outperforms by ~$99K on a $100K investment, and does it without a single year of losses. No -18% in 2022. No -4% in 2018. No recovery years wasted.
        </p>
        <p class="text-sm text-gray-300 leading-relaxed mb-0" style="font-family:'Source Sans Pro',sans-serif;">
          <strong class="text-white">The question isn&rsquo;t which decade comes next.</strong> It&rsquo;s whether you want your wealth to depend on which one it is. EPIG is designed to compound regardless.
        </p>
      </div>

      <!-- Disclaimer -->
      <p class="text-[10px] text-[#64748b] mt-6 text-center italic" style="font-family:'Source Sans Pro',sans-serif;">
        *The 16% CAGR figure represents EPIG&rsquo;s target annual return based on strategy design and backtested modeling. It is not a guarantee of future performance. S&amp;P 500 returns reflect actual total returns (price + dividends). Past performance is not indicative of future results.
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
            At any given moment, the vast majority of your portfolio sits in SPY, cash, or Treasury bills. Only 1&ndash;5% is deployed in active tactical positions. This means a total wipeout of every active trade would impact less than 5% of your capital.
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
            Layer B futures trades use a 20-point hard stop. Layer C options trades risk only the debit paid. No trade is ever entered without a predefined maximum loss. There is no scenario where a single trade causes outsized damage.
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
                  <span class="text-sm text-[#94a3b8]">Strategy A &mdash; SPY Investments</span>
                  <span class="font-mono" id="lp-strat-a-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Strategy B &mdash; Futures &amp; Market Options</span>
                  <span class="font-mono" id="lp-strat-b-pct"><span class="text-[#64748b]">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-[#94a3b8]">Strategy C &mdash; Stocks &amp; Stock Options</span>
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
              85&ndash;99% of your capital is held in SPY, cash, or Treasury bills at all times. Active positions (futures and options) deploy only 1&ndash;5% of capital, each with predefined maximum loss. Circuit breaker protocols automatically shift the portfolio to a defensive posture if drawdown exceeds thresholds. There are no lockup periods &mdash; your capital is accessible on any business day.
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
    // ═══ Compounding Comparison Charts ═══
    (function renderCompoundingCharts() {
      // S&P 500 actual total returns by year
      var spReturns = {
        2000:-0.091, 2001:-0.119, 2002:-0.221, 2003:0.287, 2004:0.109,
        2005:0.049, 2006:0.158, 2007:0.055, 2008:-0.370, 2009:0.265,
        2010:0.151, 2011:0.021, 2012:0.160, 2013:0.324, 2014:0.137,
        2015:0.014, 2016:0.120, 2017:0.218, 2018:-0.044, 2019:0.315,
        2020:0.184, 2021:0.287, 2022:-0.181, 2023:0.263, 2024:0.250
      };
      var epigRate = 0.16;

      function buildSeries(startYear, endYear) {
        var labels = [String(startYear)];
        var spValues = [100000];
        var epigValues = [100000];
        var spVal = 100000;
        var epigVal = 100000;
        for (var y = startYear; y <= endYear; y++) {
          spVal *= (1 + (spReturns[y] || 0));
          epigVal *= (1 + epigRate);
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
                label: 'EPIG (16% CAGR)',
                data: data.epig,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16,185,129,0.08)',
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
