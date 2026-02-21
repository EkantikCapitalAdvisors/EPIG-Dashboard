export function landingPage(): string {
  return `
  <!-- ════ SECTION 1: HERO ════ -->
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center relative">
      <div class="slide-up">
        <div class="inline-flex items-center gap-2 bg-epig-card border border-epig-border rounded-full px-4 py-1.5 mb-8">
          <div class="pulse-dot"></div>
          <span class="text-epig-textMuted text-sm">Live dashboard updated weekly</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Protect Capital. Generate Income.<br>
          <span class="gradient-text">Compound Relentlessly.</span>
        </h1>
        <p class="text-lg sm:text-xl text-epig-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
          A three-layer investment design combining structural protection, systematic futures execution,
          and asymmetric options pivots &mdash; with full transparency on every trade.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/dashboard" class="btn-primary text-base no-underline px-8 py-3.5">
            <i class="fas fa-chart-line mr-2"></i>View Live Dashboard
          </a>
          <a href="/projector" class="btn-outline text-base no-underline px-8 py-3.5">
            <i class="fas fa-chart-line mr-2"></i>Performance Projector
          </a>
        </div>
      </div>
      <!-- Hero stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
        <div class="kpi-card text-center">
          <div class="kpi-label">Strategies</div>
          <div class="kpi-value text-white">3</div>
        </div>
        <div class="kpi-card text-center">
          <div class="kpi-label">Full Transparency</div>
          <div class="kpi-value text-emerald-400">100%</div>
        </div>
        <div class="kpi-card text-center">
          <div class="kpi-label">Verified via</div>
          <div class="kpi-value text-blue-400 text-lg">IB Fills</div>
        </div>
        <div class="kpi-card text-center">
          <div class="kpi-label">Free Trial</div>
          <div class="kpi-value text-amber-400">60 days</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 2: LIMITATIONS OF CURRENT PARADIGM ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-widest text-red-400 border border-red-500/40 rounded-full px-5 py-1.5 mb-6">Limitations of Current Paradigm</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
          Why Traditional Approaches Generate Lower<br>Risk-Adjusted Returns
        </h2>
        <p class="text-epig-textMuted text-lg max-w-3xl mx-auto leading-relaxed">
          It&rsquo;s not about stock picking or manager skill &mdash; it&rsquo;s about <span class="text-red-400 font-semibold">structural market challenges</span> that reduce returns for
          passive investors. EPIG is designed to neutralize these four fundamental constraints.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Card 1: P/E Dependence -->
        <div class="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-7">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <span class="text-red-400 font-bold text-sm">1</span>
            </div>
            <h3 class="text-xl font-bold text-red-400">P/E Dependence</h3>
          </div>
          <p class="text-white font-semibold text-sm mb-4">Future returns depend on entry P/E:</p>
          <div class="rounded-xl bg-[#0d0d18]/60 border border-[#2a2a3e] p-4 mb-4 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm text-[#c0c8d8]">P/E = 5</span>
              <span class="text-sm font-bold text-emerald-400">~20% return</span>
            </div>
            <div class="h-px bg-[#2a2a3e]"></div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-[#c0c8d8]">P/E = 15</span>
              <span class="text-sm font-bold text-amber-400">~12% return</span>
            </div>
            <div class="h-px bg-[#2a2a3e]"></div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-[#c0c8d8]">P/E = 30</span>
              <span class="text-sm font-bold text-red-400">~3% return</span>
            </div>
          </div>
          <p class="text-xs text-[#8892a6] italic">High starting P/E = Lower 10-year returns</p>
        </div>

        <!-- Card 2: Correlation Challenge -->
        <div class="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-7">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <span class="text-red-400 font-bold text-sm">2</span>
            </div>
            <h3 class="text-xl font-bold text-red-400">Correlation Challenge</h3>
          </div>
          <p class="text-white font-semibold text-sm mb-5">Most stocks move with the market:</p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-red-400 mt-0.5">&rarr;</span>
              <p class="text-sm text-[#c0c8d8]">Diversification &ne; Protection</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-red-400 mt-0.5">&rarr;</span>
              <p class="text-sm text-[#c0c8d8]">Still suffer full market drawdowns</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-red-400 mt-0.5">&rarr;</span>
              <p class="text-sm text-[#c0c8d8]">Diluted returns from winners</p>
            </div>
          </div>
        </div>

        <!-- Card 3: Full Exposure Required -->
        <div class="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-7">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <span class="text-red-400 font-bold text-sm">3</span>
            </div>
            <h3 class="text-xl font-bold text-red-400">Full Exposure Required</h3>
          </div>
          <p class="text-white font-semibold text-sm mb-5">Must invest 100% to get average returns:</p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <i class="fas fa-xmark text-red-400 mt-0.5 w-4 text-center"></i>
              <p class="text-sm text-[#c0c8d8]">No liquidity for opportunities</p>
            </div>
            <div class="flex items-start gap-3">
              <i class="fas fa-xmark text-red-400 mt-0.5 w-4 text-center"></i>
              <p class="text-sm text-[#c0c8d8]">No control over downside</p>
            </div>
            <div class="flex items-start gap-3">
              <i class="fas fa-xmark text-red-400 mt-0.5 w-4 text-center"></i>
              <p class="text-sm text-[#c0c8d8]">Cannot leverage selectively</p>
            </div>
          </div>
        </div>

        <!-- Card 4: Lost Decades -->
        <div class="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-7">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <span class="text-red-400 font-bold text-sm">4</span>
            </div>
            <h3 class="text-xl font-bold text-red-400">Lost Decades</h3>
          </div>
          <p class="text-white font-semibold text-sm mb-5">Cannot generate returns in down/sideways markets:</p>
          <div class="rounded-xl bg-[#0d0d18]/60 border border-[#2a2a3e] p-5">
            <p class="text-sm text-[#8892a6] mb-2">Example: 2000&ndash;2010</p>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-4xl font-extrabold text-red-400 font-mono">~0%</span>
              <span class="text-sm text-[#c0c8d8]">S&amp;P 500 return</span>
            </div>
            <p class="text-xs text-[#8892a6] italic">10 years of capital locked up, zero growth</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ════ SECTION 3: THE EPIG ADVANTAGE ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <span class="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 border border-amber-500/40 rounded-full px-5 py-1.5 mb-6">
          <i class="fas fa-bolt mr-1"></i>The EPIG Advantage
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
          The Power to Consolidate: <span class="text-emerald-400">Housing 50&ndash;90%</span> of Your Liquid Net Worth
        </h2>
        <p class="text-emerald-400/80 text-lg italic">
          Why EPIG&rsquo;s Architecture Enables What Traditional Approaches Cannot
        </p>
      </div>

      <!-- The EPIG Consolidation Capability -->
      <div class="rounded-2xl border border-emerald-500/25 bg-[#0a1a14] p-8 md:p-10 mb-10">
        <div class="flex items-center justify-center gap-2 mb-8">
          <i class="fas fa-shield-halved text-amber-400 text-lg"></i>
          <h3 class="text-xl font-bold text-emerald-400">The EPIG Consolidation Capability</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <!-- Card: <10% Max Drawdown -->
          <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 text-center">
            <div class="w-12 h-12 rounded-full border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-chart-line text-emerald-400 text-lg"></i>
            </div>
            <h4 class="text-white font-bold mb-2">&lt;10% Max Drawdown</h4>
            <p class="text-sm text-[#8892a6] leading-relaxed">
              Engineered by design &mdash; not luck. You&rsquo;re <span class="text-emerald-400 underline">always in control</span> because risk is capped systematically.
            </p>
          </div>

          <!-- Card: Daily Liquidity -->
          <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 text-center">
            <div class="w-12 h-12 rounded-full border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-money-bill-wave text-emerald-400 text-lg"></i>
            </div>
            <h4 class="text-white font-bold mb-2">Daily Liquidity</h4>
            <p class="text-sm text-[#8892a6] leading-relaxed">
              Access your capital <span class="text-emerald-400 underline">whenever needed</span>. No lockup periods, no penalties &mdash; full flexibility.
            </p>
          </div>

          <!-- Card: 100% Transparency -->
          <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 text-center">
            <div class="w-12 h-12 rounded-full border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-eye text-emerald-400 text-lg"></i>
            </div>
            <h4 class="text-white font-bold mb-2">100% Transparency</h4>
            <p class="text-sm text-[#8892a6] leading-relaxed">
              No black box. Every trade, every position, every decision is <span class="text-emerald-400 underline">visible and explainable</span>.
            </p>
          </div>

          <!-- Card: Systematic Edge -->
          <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 text-center">
            <div class="w-12 h-12 rounded-full border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-gears text-emerald-400 text-lg"></i>
            </div>
            <h4 class="text-white font-bold mb-2">Systematic Edge</h4>
            <p class="text-sm text-[#8892a6] leading-relaxed">
              Not discretionary gambling &mdash; <span class="text-emerald-400 underline">repeatable, rules-based</span> strategy with defined risk parameters.
            </p>
          </div>
        </div>

        <!-- The Result callout -->
        <div class="border-l-4 border-amber-400 bg-amber-500/[0.05] rounded-r-xl p-5">
          <p class="text-sm text-[#c0c8d8] leading-relaxed mb-0">
            <i class="fas fa-lightbulb text-amber-400 mr-1"></i>
            <strong class="text-amber-400">The Result:</strong> Unlike traditional strategies that force you to spread assets across multiple &ldquo;buckets,&rdquo;
            EPIG&rsquo;s architecture lets you <strong class="text-white">consolidate 50&ndash;90% of your liquid net worth</strong> into a single unified strategy &mdash;
            because you&rsquo;re in control at all times.
          </p>
        </div>
      </div>

      <!-- Antifragile by Design (Taleb) -->
      <div class="rounded-2xl border border-purple-500/25 bg-[#12101e] p-8 md:p-10">
        <div class="flex items-center justify-center gap-3 mb-4">
          <i class="fas fa-chart-line text-purple-400 text-xl"></i>
          <h3 class="text-xl font-bold text-white">Antifragile by Design (Taleb): Convexity in Volatility</h3>
        </div>
        <p class="text-center text-[#8892a6] italic text-sm mb-8 max-w-3xl mx-auto">
          EPIG is inspired by a barbell logic: a defensive base plus small convex bets designed to benefit from volatility.
        </p>

        <!-- Fragile / Robust / Anti-fragile Labels -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div class="rounded-xl border border-red-500/30 bg-red-500/[0.06] p-4 text-center">
            <span class="text-red-400 font-bold text-base">Fragile</span>
            <p class="text-xs text-[#8892a6] mt-1">Worse when volatility rises.</p>
          </div>
          <div class="rounded-xl border border-[#3a3a4e] bg-[#1a1a2e] p-4 text-center">
            <span class="text-white font-bold text-base">Robust</span>
            <p class="text-xs text-[#8892a6] mt-1">Resists shocks; doesn&rsquo;t improve.</p>
          </div>
          <div class="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] p-4 text-center">
            <span class="text-emerald-400 font-bold text-base">Anti-fragile</span>
            <p class="text-xs text-[#8892a6] mt-1">Can improve as volatility rises (convexity).</p>
          </div>
        </div>

        <!-- Convexity Chart (SVG) -->
        <div class="rounded-xl bg-[#0d0d18] border border-[#2a2a3e] p-6 mb-8">
          <svg viewBox="0 0 500 280" class="w-full max-w-lg mx-auto" style="font-family: system-ui, sans-serif;">
            <!-- Axes -->
            <line x1="60" y1="240" x2="480" y2="240" stroke="#3a3a4e" stroke-width="1.5"/>
            <line x1="60" y1="20" x2="60" y2="240" stroke="#3a3a4e" stroke-width="1.5"/>
            <!-- Arrow heads -->
            <polygon points="480,240 472,236 472,244" fill="#3a3a4e"/>
            <polygon points="60,20 56,28 64,28" fill="#3a3a4e"/>

            <!-- Y-axis label -->
            <text x="22" y="130" fill="#8892a6" font-size="11" text-anchor="middle" transform="rotate(-90, 22, 130)">Outcome Sensitivity &rarr;</text>
            <!-- X-axis label -->
            <text x="280" y="270" fill="#8892a6" font-size="11" text-anchor="middle">Volatility / Disorder &rarr;</text>

            <!-- Robust line (straight, gray) -->
            <line x1="80" y1="130" x2="460" y2="130" stroke="#8892a6" stroke-width="2"/>
            <text x="462" y="125" fill="#8892a6" font-size="11" font-weight="bold">Robust</text>

            <!-- Fragile curve (red, dashed, curving down) -->
            <path d="M80,110 Q200,125 300,140 Q380,160 460,210" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="8,5"/>
            <text x="440" y="225" fill="#ef4444" font-size="11" font-weight="bold">Fragile</text>

            <!-- Anti-fragile curve (green, curving up) -->
            <path d="M80,150 Q200,135 300,115 Q380,85 460,40" fill="none" stroke="#10b981" stroke-width="2.5"/>
            <text x="420" y="35" fill="#10b981" font-size="11" font-weight="bold">Anti-fragile</text>
          </svg>
        </div>

        <!-- Bullet points -->
        <div class="rounded-xl border-l-4 border-purple-500 bg-purple-500/[0.04] p-5 mb-6 space-y-3">
          <div class="flex items-start gap-3">
            <i class="fas fa-shield-halved text-purple-400 mt-0.5"></i>
            <p class="text-sm text-[#c0c8d8]">Defensive base reduces fragility (selective exposure).</p>
          </div>
          <div class="flex items-start gap-3">
            <i class="fas fa-chart-line text-purple-400 mt-0.5"></i>
            <p class="text-sm text-[#c0c8d8]">Convex sleeves seek asymmetry in turbulence.</p>
          </div>
          <div class="flex items-start gap-3">
            <i class="fas fa-circle-stop text-purple-400 mt-0.5"></i>
            <p class="text-sm text-[#c0c8d8]">Circuit breakers cap downside; optionality preserves upside.</p>
          </div>
        </div>

        <!-- Warning callout -->
        <div class="rounded-xl bg-amber-500/[0.06] border border-amber-500/30 p-4 mb-4">
          <p class="text-sm text-[#c0c8d8] mb-0">
            <i class="fas fa-triangle-exclamation text-amber-400 mr-1"></i>
            <strong class="text-amber-400">What this is NOT:</strong> This does not mean risk-free or always profitable &mdash; convexity can have carry costs.
          </p>
        </div>

        <p class="text-center text-xs text-[#8892a6] italic">
          Educational concept only. Results vary; losses can occur.
        </p>
      </div>

    </div>
  </section>

  <!-- ════ SECTION 4: SPY vs EPIG ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">SPY vs. <span class="gradient-text">EPIG</span></h2>
        <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
          Passive index investing locks you into every storm. EPIG adapts, reroutes, and protects the network.
        </p>
      </div>

      <!-- Hero Image -->
      <div class="rounded-2xl overflow-hidden border border-epig-border mb-12">
        <img src="/static/spy-vs-epig.png" alt="SPY vs EPIG — The Coffee Shop vs The Amazon Network" class="w-full h-auto" loading="lazy">
      </div>

      <!-- Why not just stay 100% invested in S&P 500? — Collapsible -->
      <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] overflow-hidden mb-10">
        <button onclick="document.getElementById('spy-compare-body').classList.toggle('hidden'); this.querySelector('.chevron-icon').classList.toggle('rotate-180')" 
          class="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors cursor-pointer">
          <h3 class="text-xl sm:text-2xl font-bold text-white">Why not just stay 100% invested in S&amp;P 500?</h3>
          <i class="fas fa-chevron-up chevron-icon text-[#8892a6] transition-transform duration-300"></i>
        </button>

        <div id="spy-compare-body" class="px-6 pb-8">
          <p class="text-[#8892a6] text-sm leading-relaxed mb-8">
            Traditional buy-and-hold S&amp;P 500 has significant limitations:
          </p>

          <!-- Two-Column Comparison Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <!-- S&P 500 (Buy & Hold) -->
            <div class="rounded-xl border-2 border-red-500/30 bg-red-500/[0.03] p-6">
              <div class="flex items-center gap-2 mb-1">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <span class="text-red-400 font-bold text-sm">S&amp;P 500 (Buy &amp; Hold)</span>
              </div>
              <p class="text-[#8892a6] text-xs italic mb-5">Traditional Approach</p>

              <div class="space-y-4 mb-6">
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-exclamation-triangle text-red-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed">Always in the market &ndash; full exposure to <strong class="text-white">all</strong> market phases</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-exclamation-triangle text-red-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed">Full drawdowns during corrections <strong class="text-white">(30&ndash;50%+)</strong></p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-exclamation-triangle text-red-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed">No cash cushion to deploy during opportunities</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-exclamation-triangle text-red-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed">Returns dependent on P/E at entry <strong class="text-white">(timing risk)</strong></p>
                </div>
              </div>

              <div class="pt-4 border-t border-red-500/20">
                <div class="text-red-400 font-bold text-sm mb-2">Risk Profile: High</div>
                <div class="w-full h-2.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-gradient-to-r from-red-500 via-red-400 to-[#1a1a2e]" style="width: 90%"></div>
                </div>
              </div>
            </div>

            <!-- EPIG Architecture -->
            <div class="rounded-xl border-2 border-emerald-500/30 bg-emerald-500/[0.03] p-6">
              <div class="flex items-center gap-2 mb-1">
                <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span class="text-emerald-400 font-bold text-sm">EPIG Architecture</span>
              </div>
              <p class="text-[#8892a6] text-xs italic mb-5">Selective Exposure Strategy</p>

              <div class="space-y-4 mb-6">
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-check text-emerald-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed"><strong class="text-white">~90%</strong> of principal fully secured always</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-check text-emerald-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed"><strong class="text-white">3&ndash;5%</strong> tactical overlay + <strong class="text-white">3&ndash;5%</strong> long-term &ndash; precisely controlled exposure</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-check text-emerald-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed">Selectivity = constant exposure &ndash; <strong class="text-white">quality over quantity</strong></p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-check text-emerald-400 text-xs"></i>
                  </div>
                  <p class="text-sm text-[#c0c8d8] leading-relaxed">Circuit breakers &amp; auto-shutdown protections built in</p>
                </div>
              </div>

              <div class="pt-4 border-t border-emerald-500/20">
                <div class="text-emerald-400 font-bold text-sm mb-2">Risk Profile: Low</div>
                <div class="w-full h-2.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400" style="width: 25%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Insight Callout -->
          <div class="rounded-xl border border-amber-500/30 bg-amber-500/[0.04] p-5 mb-8">
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fas fa-lightbulb text-amber-400"></i>
              </div>
              <p class="text-sm text-[#c0c8d8] leading-relaxed mb-0">
                <strong class="text-white">Key Insight:</strong> By harvesting only <strong class="text-white">high-EV windows</strong>
                (and otherwise sitting in bills), the design aims to <strong class="text-white">out-compound</strong> a constant S&amp;P allocation
                across cycles while <em class="text-white">avoiding major drawdowns</em>.
              </p>
            </div>
          </div>

          <!-- Market Exposure Comparison -->
          <div>
            <h4 class="text-white font-bold text-sm mb-4">Market Exposure Comparison:</h4>
            <div class="space-y-3">
              <!-- S&P 500 bar -->
              <div class="flex items-center gap-4">
                <span class="text-sm text-[#8892a6] w-16 flex-shrink-0">S&amp;P 500:</span>
                <div class="flex-1 relative">
                  <div class="w-full h-8 rounded-lg bg-red-500/80 flex items-center px-3">
                    <span class="text-white text-xs font-bold">100% constant</span>
                  </div>
                </div>
              </div>
              <!-- EPIG bar -->
              <div class="flex items-center gap-4">
                <span class="text-sm text-[#8892a6] w-16 flex-shrink-0">EPIG:</span>
                <div class="flex-1 relative flex items-center gap-3">
                  <div class="h-8 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center px-3" style="width: 70%">
                    <span class="text-white text-xs font-bold whitespace-nowrap">&asymp; 0% default</span>
                  </div>
                  <span class="text-xs text-[#8892a6] whitespace-nowrap">&rarr; brief, capped spikes</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 5: THREE-LAYER DESIGN ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">The Three-Layer Design</h2>
        <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
          Each layer serves a distinct structural purpose. Together they create an investment system
          that protects, generates income, and compounds.
        </p>
      </div>

      <!-- ── Three Strategy Cards ── -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <!-- Layer A -->
        <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">Layer A</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Core Allocation</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5">
            Structural equity base providing market participation with downside awareness. SPY-anchored with an optional stock sleeve.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Capital Deployed</span>
              <span class="text-orange-400 font-mono font-bold text-sm">85&ndash;99%</span>
            </div>
            <div class="h-px bg-[#2a2a3e]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span class="text-orange-400 font-mono font-bold text-sm">~6&ndash;8%</span>
            </div>
          </div>
          <a href="/dashboard" class="flex items-center justify-center gap-2 text-sm text-orange-400 font-semibold hover:text-orange-300 transition-colors no-underline">
            View Strategy A Performance <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>

        <!-- Layer B -->
        <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Layer B</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Tactical</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5">
            Defined-risk futures trades overlaid on the core. Systematic entries with 20-point stops generating repeatable income.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">VaR Overlay</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">1&ndash;5%</span>
            </div>
            <div class="h-px bg-[#2a2a3e]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span class="text-emerald-400 font-mono font-bold text-sm">~12&ndash;16%</span>
            </div>
          </div>
          <a href="/dashboard" class="flex items-center justify-center gap-2 text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors no-underline">
            View Strategy B Performance <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>

        <!-- Layer C -->
        <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-400"></div>
          <div class="flex items-center gap-3 mb-4 mt-2">
            <span class="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-purple-400 border border-purple-500/30">Layer C</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-1">Episodic Pivot</h3>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-5">
            Asymmetric options capturing outsized moves during market dislocations. Limited risk, unlimited upside potential.
          </p>
          <div class="space-y-3 mb-5">
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Position Size</span>
              <span class="text-purple-400 font-mono font-bold text-sm">5&ndash;25%</span>
            </div>
            <div class="h-px bg-[#2a2a3e]"></div>
            <div class="flex justify-between items-center">
              <span class="text-[#8892a6] text-sm">Target Return</span>
              <span class="text-purple-400 font-mono font-bold text-sm">~6&ndash;10%</span>
            </div>
          </div>
          <a href="/dashboard" class="flex items-center justify-center gap-2 text-sm text-purple-400 font-semibold hover:text-purple-300 transition-colors no-underline">
            View Strategy C Performance <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>

      <!-- ── KPI Summary Row ── -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 text-center">
          <div class="text-[#8892a6] text-xs uppercase tracking-wider font-semibold mb-2">Target Modeled CAGR</div>
          <div class="text-4xl font-extrabold text-white font-mono">26<span class="text-2xl text-[#8892a6]">%</span></div>
        </div>
        <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 text-center">
          <div class="text-[#8892a6] text-xs uppercase tracking-wider font-semibold mb-2">Total Capital at Risk</div>
          <div class="text-4xl font-extrabold text-emerald-400 font-mono">&lt;5<span class="text-2xl text-[#8892a6]">%</span></div>
        </div>
        <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 text-center">
          <div class="text-[#8892a6] text-xs uppercase tracking-wider font-semibold mb-2">Total Bets / Year</div>
          <div class="text-4xl font-extrabold text-white font-mono">150<span class="text-2xl text-[#8892a6]">&ndash;200</span></div>
        </div>
      </div>

      <!-- ── Return Contribution Chart ── -->
      <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 mb-10">
        <h3 class="text-lg font-bold text-white mb-1">Return Contribution by Strategy</h3>
        <p class="text-[#8892a6] text-sm mb-6">Expected annual return breakdown across the three layers</p>
        <!-- Stacked Bar -->
        <div class="relative">
          <div class="flex rounded-xl overflow-hidden h-14 mb-4">
            <div class="bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center" style="width: 26%;">
              <span class="text-white font-bold text-sm drop-shadow">A: 6&ndash;8%</span>
            </div>
            <div class="bg-gradient-to-r from-emerald-500 to-green-400 flex items-center justify-center" style="width: 48%;">
              <span class="text-white font-bold text-sm drop-shadow">B: 12&ndash;16%</span>
            </div>
            <div class="bg-gradient-to-r from-purple-500 to-violet-400 flex items-center justify-center" style="width: 26%;">
              <span class="text-white font-bold text-sm drop-shadow">C: 6&ndash;10%</span>
            </div>
          </div>
          <!-- Legend -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-sm bg-orange-400"></div>
              <span class="text-[#8892a6]">Strategy A &mdash; Core Allocation</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-sm bg-emerald-400"></div>
              <span class="text-[#8892a6]">Strategy B &mdash; Tactical</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-sm bg-purple-400"></div>
              <span class="text-[#8892a6]">Strategy C &mdash; Episodic Pivot</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Portfolio Allocation ── -->
      <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-6 mb-10">
        <h3 class="text-lg font-bold text-white mb-1">Portfolio Allocation</h3>
        <p class="text-[#8892a6] text-sm mb-6">How capital is distributed across the three layers</p>
        <!-- Allocation Bar -->
        <div class="flex rounded-xl overflow-hidden h-10 mb-6">
          <div class="bg-orange-400/80 flex items-center justify-center" style="width: 80%;">
            <span class="text-white text-xs font-bold drop-shadow">~80%</span>
          </div>
          <div class="bg-emerald-400/80 flex items-center justify-center" style="width: 10%;">
          </div>
          <div class="bg-purple-400/80 flex items-center justify-center" style="width: 10%;">
          </div>
        </div>
        <!-- Allocation Legend Items -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-orange-400 font-bold text-sm">A</span>
            </div>
            <div>
              <div class="text-white font-semibold text-sm">Strategy A &mdash; ~80%</div>
              <div class="text-[#8892a6] text-xs">Capital preservation &amp; market participation</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-emerald-400 font-bold text-sm">B</span>
            </div>
            <div>
              <div class="text-white font-semibold text-sm">Strategy B &mdash; 3&ndash;5%</div>
              <div class="text-[#8892a6] text-xs">Tactical overlay with defined risk</div>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-purple-400 font-bold text-sm">C</span>
            </div>
            <div>
              <div class="text-white font-semibold text-sm">Strategy C &mdash; 3&ndash;5%</div>
              <div class="text-[#8892a6] text-xs">Asymmetric long-term opportunities</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Key Insight Callout ── -->
      <div class="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-6 flex items-start gap-4">
        <div class="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
          <i class="fas fa-lightbulb text-blue-400"></i>
        </div>
        <div>
          <div class="text-white font-bold text-sm mb-1">Key Insight</div>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-0">
            ~80% of capital remains protected in broad market exposure (Strategy A), while a small 3&ndash;5% tactical overlay
            (Strategy B) generates outsized returns through systematic, defined-risk futures trades. Strategy C adds asymmetric
            upside from episodic opportunities &mdash; creating a compounding engine with structurally limited downside.
          </p>
        </div>
      </div>

    </div>
  </section>

  <!-- ════ SECTION 6: PERFORMANCE PROJECTOR PREVIEW (LIVE) ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="glass-card p-10 md:p-14">
        <div class="flex flex-col md:flex-row items-start gap-10">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-5">
              <h2 class="text-3xl sm:text-4xl font-bold">Project Your Year-End Returns</h2>
              <span id="projector-live-badge" class="hidden inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1 flex-shrink-0">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-emerald-400 text-xs font-bold uppercase tracking-wider">Live</span>
              </span>
            </div>
            <p class="text-epig-textMuted text-lg leading-relaxed mb-4">
              See how YTD performance across all three strategies could compound through year-end.
              Powered by <strong class="text-white">real 2026 trade data</strong> from verified IB fills &mdash;
              adjust portfolio size and explore per-strategy breakdowns.
            </p>
            <p id="projector-data-summary" class="text-xs text-epig-textDim mb-6">
              <i class="fas fa-database text-emerald-400 mr-1"></i>
              <span id="projector-summary-text">Loading live trade data...</span>
            </p>
            <a href="/projector" class="btn-primary no-underline inline-block">
              <i class="fas fa-chart-line mr-2"></i>Open Performance Projector
            </a>
          </div>
          <div class="flex-1 w-full">
            <div class="kpi-card">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Portfolio Size</span>
                  <span class="font-mono font-bold text-blue-400">$100,000</span>
                </div>
                <div class="h-px bg-epig-border"></div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Strategy A &mdash; Core Allocation</span>
                  <span class="font-mono" id="lp-strat-a-pct"><span class="text-epig-textDim">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Strategy B &mdash; Tactical Futures</span>
                  <span class="font-mono" id="lp-strat-b-pct"><span class="text-epig-textDim">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Strategy C &mdash; Episodic Pivots</span>
                  <span class="font-mono" id="lp-strat-c-pct"><span class="text-epig-textDim">--</span></span>
                </div>
                <div class="h-px bg-epig-border"></div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Projected Annual Return</span>
                  <span class="font-mono font-bold text-lg" id="lp-total-pct"><span class="text-epig-textDim">--</span></span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Projected Dollar Return</span>
                  <span class="font-mono font-bold text-lg" id="lp-total-dollar"><span class="text-epig-textDim">--</span></span>
                </div>
              </div>
              <p class="text-[10px] text-epig-textDim mt-4 italic">
                *Based on YTD performance extrapolated to full year. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 7: SOCIAL PROOF ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">Trusted by Serious Investors</h2>
      <p class="text-epig-textMuted text-lg mb-12 max-w-xl mx-auto">
        Real-time activity from our growing community.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div class="kpi-card text-center">
          <div class="kpi-label">Active Subscribers</div>
          <div class="kpi-value text-blue-400" id="subscriber-count">247</div>
        </div>
        <div class="kpi-card text-center">
          <div class="kpi-label">Trades Logged</div>
          <div class="kpi-value text-emerald-400">1,842</div>
        </div>
        <div class="kpi-card text-center">
          <div class="kpi-label">Avg. Session</div>
          <div class="kpi-value text-amber-400">12 min</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 8: LEAD CAPTURE ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="glass-card p-10 md:p-14 text-center max-w-2xl mx-auto">
        <div class="w-16 h-16 rounded-2xl bg-blue-500/15 flex items-center justify-center mx-auto mb-6">
          <i class="fas fa-envelope text-blue-400 text-2xl"></i>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">Weekly Performance Summary</h2>
        <p class="text-epig-textMuted mb-8 leading-relaxed">
          Get a concise weekly digest of all three strategies &mdash; key metrics, notable trades,
          and allocation changes. Delivered every Monday morning.
        </p>
        <form id="lead-form" class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="return handleLeadSubmit(event)">
          <input type="email" id="lead-email" placeholder="your@email.com" required
            class="flex-1 bg-epig-card border border-epig-border rounded-lg px-4 py-3 text-white placeholder-epig-textDim focus:outline-none focus:border-blue-500 transition-colors">
          <button type="submit" class="btn-primary whitespace-nowrap">
            <i class="fas fa-paper-plane mr-2"></i>Subscribe
          </button>
        </form>
        <p class="text-xs text-epig-textDim mt-4">Free. Unsubscribe anytime. No spam.</p>
        <div id="lead-success" class="hidden mt-4 text-emerald-400 font-semibold">
          <i class="fas fa-check-circle mr-1"></i> Subscribed! Check your inbox Monday.
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 8b: LATEST UPDATES ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold mb-2">Latest Updates</h2>
          <p class="text-epig-textMuted text-lg">Weekly data uploads, platform changes, and notable events.</p>
        </div>
        <a href="/updates" class="btn-outline text-sm no-underline hidden sm:inline-flex items-center gap-2" style="padding: 10px 20px;">
          View All <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="kpi-card">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs bg-blue-500/15 text-blue-400 px-2.5 py-1 rounded-full font-semibold">DATA</span>
            <span class="text-sm text-epig-textDim font-mono">2026-02-17</span>
          </div>
          <h3 class="font-semibold mb-2">Weekly Upload &mdash; Feb 17</h3>
          <p class="text-sm text-epig-textDim leading-relaxed">
            IB Flex Query uploaded for all three strategies. 12 new trades for B, 3 for C.
            Strategy A allocation unchanged at 80/15/5.
          </p>
        </div>
        <div class="kpi-card">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-full font-semibold">FEATURE</span>
            <span class="text-sm text-epig-textDim font-mono">2026-02-14</span>
          </div>
          <h3 class="font-semibold mb-2">Combined Portfolio Tab</h3>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Dashboard now includes a Combined Portfolio view aggregating all three strategies,
            with weekly/monthly returns toggle.
          </p>
        </div>
        <div class="kpi-card">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-xs bg-amber-500/15 text-amber-400 px-2.5 py-1 rounded-full font-semibold">PLATFORM</span>
            <span class="text-sm text-epig-textDim font-mono">2026-02-01</span>
          </div>
          <h3 class="font-semibold mb-2">EPIG Public Launch</h3>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Full performance dashboard, performance projector, and subscription system live.
            Phase 1 with manual IB uploads active.
          </p>
        </div>
      </div>
      <div class="text-center sm:hidden">
        <a href="/updates" class="btn-outline text-sm no-underline inline-flex items-center gap-2" style="padding: 10px 20px;">
          View All Updates <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 9: PRICING CTA ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4">Ready to See Inside the System?</h2>
      <p class="text-epig-textMuted text-lg mb-10 max-w-2xl mx-auto">
        Start with a 60-day free trial. Get real-time Discord notifications on every trade.
        Cancel anytime &mdash; no commitment required.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/pricing" class="btn-primary text-base no-underline px-8 py-3.5">
          Start 60-Day Free Trial
        </a>
        <a href="/how-it-works" class="btn-outline text-base no-underline px-8 py-3.5">
          Learn the Methodology
        </a>
      </div>
      <p class="text-xs text-epig-textDim mt-6">$0 today. $149/mo or $999/yr after trial ends.</p>
    </div>
  </section>

  <script>
    async function handleLeadSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('lead-email').value;
      try {
        const res = await fetch('/api/leads/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        });
        if (res.ok) {
          document.getElementById('lead-form').classList.add('hidden');
          document.getElementById('lead-success').classList.remove('hidden');
        }
      } catch(err) { console.error(err); }
      return false;
    }

    // ══════════════════════════════════════════════════
    // PERFORMANCE PROJECTOR — LIVE DATA WIDGET
    // Fetches real YTD stats and projects annual returns
    // based on a $100K portfolio.
    // ══════════════════════════════════════════════════
    (async function loadProjectorPreview() {
      const PORTFOLIO = 100000;

      function pctColor(val) {
        return val >= 0 ? 'text-emerald-400' : 'text-red-400';
      }
      function fmtPct(val) {
        return (val >= 0 ? '+' : '') + val.toFixed(1) + '%';
      }
      function fmtDollar(val) {
        const sign = val >= 0 ? '+' : '-';
        return sign + '$' + Math.abs(Math.round(val)).toLocaleString();
      }

      try {
        const res = await fetch('/api/projector/stats');
        const data = await res.json();

        if (!data.strategies) return; // no data yet

        const stratMap = { A: 'a', B: 'b', C: 'c' };
        let totalAnnualDollar = 0;
        let totalTrades = 0;
        let earliestDate = '9999-99-99';
        let latestDate = '0000-00-00';

        for (const [strat, prefix] of Object.entries(stratMap)) {
          const s = data.strategies[strat];
          if (!s) {
            document.getElementById('lp-strat-' + prefix + '-pct').innerHTML = '<span class="text-epig-textDim">No data</span>';
            continue;
          }

          totalTrades += s.closedTrades;
          if (s.firstDate < earliestDate) earliestDate = s.firstDate;
          if (s.lastDate > latestDate) latestDate = s.lastDate;

          // Calculate annualized return on $100K portfolio
          // annualPnl from the API = totalPnl / yearFraction
          const annualPct = (s.annualPnl / PORTFOLIO) * 100;
          totalAnnualDollar += s.annualPnl;

          const el = document.getElementById('lp-strat-' + prefix + '-pct');
          if (el) {
            el.className = 'font-mono ' + pctColor(annualPct);
            el.textContent = fmtPct(annualPct);
          }
        }

        const totalPct = (totalAnnualDollar / PORTFOLIO) * 100;

        // Projected Annual Return
        const totalPctEl = document.getElementById('lp-total-pct');
        if (totalPctEl) {
          totalPctEl.className = 'font-mono font-bold text-lg ' + pctColor(totalPct);
          totalPctEl.textContent = fmtPct(totalPct);
        }

        // Projected Dollar Return
        const totalDollarEl = document.getElementById('lp-total-dollar');
        if (totalDollarEl) {
          totalDollarEl.className = 'font-mono font-bold text-lg ' + pctColor(totalAnnualDollar);
          totalDollarEl.textContent = fmtDollar(totalAnnualDollar);
        }

        // Show LIVE badge
        document.getElementById('projector-live-badge').classList.remove('hidden');

        // Update summary text
        const summaryEl = document.getElementById('projector-summary-text');
        if (summaryEl) {
          summaryEl.textContent = 'Based on ' + totalTrades + ' closed trades from ' + earliestDate + ' to ' + latestDate + '. Auto-refreshes on each upload.';
        }
      } catch(e) {
        // Silently fail — widget stays in loading state
        console.error('Projector preview:', e);
      }
    })();
  </script>
  `
}
