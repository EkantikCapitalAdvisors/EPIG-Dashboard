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
          <a href="/calculator" class="btn-outline text-base no-underline px-8 py-3.5">
            <i class="fas fa-calculator mr-2"></i>Try the Calculator
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

  <!-- ════ SECTION 2: STRUCTURAL CHALLENGES ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Why Traditional Portfolios Fail</h2>
        <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
          Four structural problems that erode wealth over time &mdash; even in "good" markets.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="kpi-card">
          <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <i class="fas fa-chart-bar text-red-400 text-xl"></i>
          </div>
          <h3 class="font-semibold text-lg mb-2">P/E Dependence</h3>
          <p class="text-epig-textDim text-sm leading-relaxed">
            At elevated valuations (S&P 500 P/E > 25), forward 10-year returns have historically averaged only 2&ndash;4% annually. Most portfolios are fully exposed to this risk.
          </p>
        </div>
        <div class="kpi-card">
          <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <i class="fas fa-link text-red-400 text-xl"></i>
          </div>
          <h3 class="font-semibold text-lg mb-2">Correlation Spikes</h3>
          <p class="text-epig-textDim text-sm leading-relaxed">
            In crashes, asset classes move together. The diversification you thought you had evaporates when you need it most. 2020 and 2022 proved this conclusively.
          </p>
        </div>
        <div class="kpi-card">
          <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <i class="fas fa-arrow-trend-down text-red-400 text-xl"></i>
          </div>
          <h3 class="font-semibold text-lg mb-2">Drawdown Math</h3>
          <p class="text-epig-textDim text-sm leading-relaxed">
            A 50% drawdown requires a 100% recovery. A 33% drawdown needs a 50% gain. The asymmetry of loss is the single greatest threat to compounding.
          </p>
        </div>
        <div class="kpi-card">
          <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
            <i class="fas fa-clock text-red-400 text-xl"></i>
          </div>
          <h3 class="font-semibold text-lg mb-2">Lost Decades</h3>
          <p class="text-epig-textDim text-sm leading-relaxed">
            2000&ndash;2010 returned 0% for S&P 500 investors. 13 years to recover from 2000 peak. Buy-and-hold assumes you have unlimited time.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ════ SECTION 3: AUDIENCE QUALIFICATION ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="glass-card p-10 md:p-14 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-6">Built for Serious Capital</h2>
        <p class="text-epig-textMuted text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          EPIG is designed for investors with <span class="text-white font-semibold">$500K+ portfolios</span> who
          understand that protecting capital is the foundation of compounding. If you have significant assets
          and want institutional-grade transparency on how they can be managed, this platform is for you.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-400 font-mono">$500K+</div>
            <div class="text-epig-textDim text-sm mt-1">Minimum Portfolio</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-emerald-400 font-mono">3&ndash;5yr</div>
            <div class="text-epig-textDim text-sm mt-1">Investment Horizon</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-amber-400 font-mono">Active</div>
            <div class="text-epig-textDim text-sm mt-1">Management Approach</div>
          </div>
        </div>
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

      <!-- Architecture Description -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

        <!-- LEFT: SPY — The Coffee Shop -->
        <div class="rounded-2xl border border-red-500/20 bg-[#12121e] p-8 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-400"></div>
          <div class="flex items-center gap-3 mb-6 mt-2">
            <div class="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
              <i class="fas fa-store text-red-400 text-2xl"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">SPY: The Coffee Shop</h3>
              <span class="text-xs text-red-400 uppercase tracking-wider font-bold">Single Location &bull; No Escape Route</span>
            </div>
          </div>

          <p class="text-[#8892a6] text-sm leading-relaxed mb-6">
            Owning SPY is like owning a single coffee shop on one street corner. When the economy is booming, foot traffic is great.
            But when the storm hits, there&rsquo;s nowhere to go.
          </p>

          <div class="space-y-5 mb-8">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-cloud-showers-heavy text-red-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Open in Every Storm</h4>
                <p class="text-sm text-[#8892a6] leading-relaxed">
                  Must stay open no matter what &mdash; recessions, crashes, bear markets. There is no mechanism to reduce exposure.
                  When the S&P drops 40%, you ride every percent of it down.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-arrow-trend-down text-red-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Foot Traffic Collapses</h4>
                <p class="text-sm text-[#8892a6] leading-relaxed">
                  In a downturn, valuations compress and volume dries up. A single-location business has zero diversification.
                  Your revenue stream is entirely dependent on one variable: market direction.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-hand-holding-dollar text-red-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Absorb the Losses</h4>
                <p class="text-sm text-[#8892a6] leading-relaxed">
                  Can&rsquo;t escape the storm. A 50% drawdown requires a 100% gain just to break even. The math of loss is brutally asymmetric &mdash;
                  and passive investing offers no tools to manage it.
                </p>
              </div>
            </div>
          </div>

          <div class="p-5 bg-red-500/5 border border-red-500/20 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <i class="fas fa-exclamation-triangle text-red-400"></i>
              <span class="text-sm font-bold text-red-400 uppercase tracking-wide">The Problem</span>
            </div>
            <p class="text-sm text-[#8892a6] leading-relaxed mb-0">
              The S&P 500 returned <strong class="text-white">0% from 2000&ndash;2010</strong>. It took <strong class="text-white">13 years</strong>
              to recover from the 2000 peak. Passive investing assumes you have unlimited time and unlimited pain tolerance.
              Most investors have neither.
            </p>
          </div>
        </div>

        <!-- RIGHT: EPIG — The Adaptive Network -->
        <div class="rounded-2xl border border-emerald-500/20 bg-[#12121e] p-8 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(16,185,129,0.02), rgba(59,130,246,0.02));">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-400"></div>
          <div class="flex items-center gap-3 mb-6 mt-2">
            <div class="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <i class="fas fa-network-wired text-emerald-400 text-2xl"></i>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">EPIG: The Adaptive Network</h3>
              <span class="text-xs text-emerald-400 uppercase tracking-wider font-bold">Multiple Routes &bull; Built-In Defense</span>
            </div>
          </div>

          <p class="text-[#8892a6] text-sm leading-relaxed mb-6">
            EPIG operates like a logistics network &mdash; multiple delivery routes, real-time rerouting, and the ability to pause
            risky zones. When one route gets blocked, the network adapts and keeps delivering.
          </p>

          <div class="space-y-5 mb-8">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-route text-emerald-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Adapt &amp; Reroute</h4>
                <p class="text-sm text-[#8892a6] leading-relaxed">
                  When the market drops, the network doesn&rsquo;t shut down &mdash; it reroutes. Tactical futures <span class="text-emerald-400 font-semibold">(Strategy B)</span> profit
                  from both directions. Asymmetric options <span class="text-purple-400 font-semibold">(Strategy C)</span> thrive during dislocations. The system has multiple paths to revenue.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-pause-circle text-emerald-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Pause Risky Zones</h4>
                <p class="text-sm text-[#8892a6] leading-relaxed">
                  When a zone becomes dangerous &mdash; elevated VIX, deteriorating breadth, macro risk &mdash; the network pauses that route.
                  Active allocation management <span class="text-orange-400 font-semibold">(Strategy A)</span> reduces equity exposure instead of riding the drawdown to the bottom.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <i class="fas fa-shield-halved text-emerald-400"></i>
              </div>
              <div>
                <h4 class="font-bold text-white mb-1">Protect the Network</h4>
                <p class="text-sm text-[#8892a6] leading-relaxed">
                  Three independent revenue streams ensure the system stays profitable overall. Even when individual zones are disrupted,
                  the network continues to deliver. The goal is <strong class="text-white">structural resilience</strong>, not blind exposure.
                </p>
              </div>
            </div>
          </div>

          <div class="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
            <div class="flex items-center gap-2 mb-2">
              <i class="fas fa-check-circle text-emerald-400"></i>
              <span class="text-sm font-bold text-emerald-400 uppercase tracking-wide">The EPIG Advantage</span>
            </div>
            <p class="text-sm text-[#8892a6] leading-relaxed mb-0">
              Core allocation <span class="text-orange-400 font-semibold">(A)</span> participates in market growth.
              Tactical futures <span class="text-emerald-400 font-semibold">(B)</span> generate systematic income with defined risk.
              Episodic pivots <span class="text-purple-400 font-semibold">(C)</span> capture outsized moves during dislocations.
              <strong class="text-white">The whole is greater than the sum of its parts.</strong>
            </p>
          </div>
        </div>
      </div>

      <!-- How the Three Layers Map to the Network -->
      <div class="rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-8 mb-10">
        <h3 class="text-xl font-bold text-white mb-2 text-center">How the Three Layers Map to the Network</h3>
        <p class="text-[#8892a6] text-sm text-center mb-8 max-w-2xl mx-auto">
          Each EPIG layer serves as a distinct delivery channel within the network. If one gets disrupted, the others keep operating.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Layer A -->
          <div class="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center">
                <i class="fas fa-road text-orange-400"></i>
              </div>
              <div>
                <span class="text-xs text-orange-400 uppercase tracking-wider font-bold">Layer A</span>
                <h4 class="font-bold text-white text-sm">The Main Highway</h4>
              </div>
            </div>
            <p class="text-sm text-[#8892a6] leading-relaxed mb-3">
              Core equity allocation (SPY + stock sleeve). Carries ~80% of all traffic. In good weather, it delivers the bulk of returns.
              When storms hit, active management can throttle the flow &mdash; reduce SPY, raise cash, add treasuries.
            </p>
            <div class="flex items-center justify-between text-xs border-t border-orange-500/15 pt-3 mt-3">
              <span class="text-[#8892a6]">Capital Deployed</span>
              <span class="text-orange-400 font-mono font-bold">85&ndash;99%</span>
            </div>
          </div>
          <!-- Layer B -->
          <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                <i class="fas fa-truck-fast text-emerald-400"></i>
              </div>
              <div>
                <span class="text-xs text-emerald-400 uppercase tracking-wider font-bold">Layer B</span>
                <h4 class="font-bold text-white text-sm">Express Delivery Fleet</h4>
              </div>
            </div>
            <p class="text-sm text-[#8892a6] leading-relaxed mb-3">
              Systematic MES/ES futures with defined 20-point stops. Fast, repeatable, direction-agnostic. This fleet runs in any weather &mdash;
              long or short &mdash; generating income independent of whether the highway is open.
            </p>
            <div class="flex items-center justify-between text-xs border-t border-emerald-500/15 pt-3 mt-3">
              <span class="text-[#8892a6]">VaR Overlay</span>
              <span class="text-emerald-400 font-mono font-bold">1&ndash;5%</span>
            </div>
          </div>
          <!-- Layer C -->
          <div class="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center">
                <i class="fas fa-helicopter text-purple-400"></i>
              </div>
              <div>
                <span class="text-xs text-purple-400 uppercase tracking-wider font-bold">Layer C</span>
                <h4 class="font-bold text-white text-sm">Drone Airdrops</h4>
              </div>
            </div>
            <p class="text-sm text-[#8892a6] leading-relaxed mb-3">
              Asymmetric SPY/QQQ options deployed during market dislocations. Like drones that can reach places ground vehicles can&rsquo;t &mdash;
              limited risk, outsized payoff when volatility spikes and everyone else is grounded.
            </p>
            <div class="flex items-center justify-between text-xs border-t border-purple-500/15 pt-3 mt-3">
              <span class="text-[#8892a6]">Position Size</span>
              <span class="text-purple-400 font-mono font-bold">5&ndash;25%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Insight -->
      <div class="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 p-6 flex items-start gap-4">
        <div class="w-12 h-12 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
          <i class="fas fa-lightbulb text-blue-400 text-lg"></i>
        </div>
        <div>
          <div class="text-white font-bold mb-1">Think Networks, Not Storefronts</div>
          <p class="text-[#8892a6] text-sm leading-relaxed mb-0">
            A single coffee shop (SPY) has one revenue stream and zero defense against bad weather.
            A logistics network (EPIG) has the main highway <span class="text-orange-400 font-semibold">(A)</span>,
            an express fleet <span class="text-emerald-400 font-semibold">(B)</span>,
            and drone airdrops <span class="text-purple-400 font-semibold">(C)</span> &mdash;
            multiple delivery channels that can reroute around disruption and keep the system profitable even when individual zones shut down.
            That&rsquo;s the structural difference between passively holding an index and actively managing a multi-layer investment design.
          </p>
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

  <!-- ════ SECTION 6: CALCULATOR PREVIEW ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="glass-card p-10 md:p-14">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="flex-1">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4">Model Your Own Portfolio</h2>
            <p class="text-epig-textMuted text-lg leading-relaxed mb-6">
              Use the 3-strategy calculator to see how EPIG&rsquo;s design could work with your portfolio size.
              Adjust allocation, win rates, and trade frequency with interactive sliders.
            </p>
            <p class="text-xs text-epig-textDim mb-6">
              <i class="fas fa-info-circle mr-1"></i>
              The calculator is for illustrative purposes only and does not use actual EPIG performance data.
            </p>
            <a href="/calculator" class="btn-primary no-underline inline-block">
              <i class="fas fa-calculator mr-2"></i>Open Calculator
            </a>
          </div>
          <div class="flex-1 w-full">
            <div class="kpi-card">
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Portfolio Size</span>
                  <span class="font-mono font-bold text-blue-400">$1,000,000</span>
                </div>
                <div class="h-px bg-epig-border"></div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Strategy A (Allocation)</span>
                  <span class="font-mono text-emerald-400">+8.2%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Strategy B (Futures)</span>
                  <span class="font-mono text-emerald-400">+14.6%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-epig-textDim">Strategy C (Pivots)</span>
                  <span class="font-mono text-emerald-400">+9.1%</span>
                </div>
                <div class="h-px bg-epig-border"></div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Combined Expected Return</span>
                  <span class="font-mono font-bold text-lg text-emerald-400">+31.9%</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Expected Dollar Return</span>
                  <span class="font-mono font-bold text-lg text-emerald-400">$319,000</span>
                </div>
              </div>
              <p class="text-[10px] text-epig-textDim mt-4 italic">
                *Illustrative only. Not a projection of actual EPIG performance.
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
            Full performance dashboard, 3-strategy calculator, and subscription system live.
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
  </script>
  `
}
