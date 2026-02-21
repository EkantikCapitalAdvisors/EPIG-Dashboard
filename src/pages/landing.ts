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

  <!-- ════ SECTION 4: COFFEE CART ANALOGY ════ -->
  <section class="section-divider">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Three Ways to Own a Coffee Business</h2>
        <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
          A simple analogy that explains the EPIG structural advantage.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="kpi-card border-epig-borderLight">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-gray-500/20 flex items-center justify-center">
              <i class="fas fa-building text-gray-400"></i>
            </div>
            <div>
              <h3 class="font-semibold">Lease the Cart</h3>
              <span class="text-xs text-epig-textDim uppercase tracking-wide">Passive / Index</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed">
            You own the lease. Someone else operates. Returns depend entirely on foot traffic (the market).
            In a downturn, you still pay rent &mdash; drawdowns hit fully.
          </p>
          <div class="mt-4 pt-4 border-t border-epig-border">
            <span class="text-xs text-red-400"><i class="fas fa-exclamation-triangle mr-1"></i>No protection in downturns</span>
          </div>
        </div>
        <div class="kpi-card border-epig-borderLight">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <i class="fas fa-mug-hot text-amber-400"></i>
            </div>
            <div>
              <h3 class="font-semibold">Operate the Cart</h3>
              <span class="text-xs text-epig-textDim uppercase tracking-wide">Active / Stock Picking</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed">
            You make every decision yourself. Better returns possible, but success depends entirely on
            your skill and time. Inconsistent, exhausting, hard to scale.
          </p>
          <div class="mt-4 pt-4 border-t border-epig-border">
            <span class="text-xs text-amber-400"><i class="fas fa-exclamation-triangle mr-1"></i>Skill-dependent, not systematic</span>
          </div>
        </div>
        <div class="kpi-card border-blue-500/30" style="background: linear-gradient(135deg, rgba(59,130,246,0.05), rgba(16,185,129,0.05));">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <i class="fas fa-cogs text-blue-400"></i>
            </div>
            <div>
              <h3 class="font-semibold">Own the System</h3>
              <span class="text-xs text-blue-400 uppercase tracking-wide">EPIG Approach</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed">
            You own the building, operate multiple revenue streams, and have insurance against fire.
            Structural protection + systematic income + asymmetric upside &mdash; all in one design.
          </p>
          <div class="mt-4 pt-4 border-t border-blue-500/20">
            <span class="text-xs text-emerald-400"><i class="fas fa-shield-halved mr-1"></i>Protected, systematic, and scalable</span>
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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Strategy A -->
        <div class="kpi-card relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
          <div class="flex items-center gap-3 mb-6 mt-2">
            <div class="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center">
              <span class="text-blue-400 font-bold text-lg">A</span>
            </div>
            <div>
              <h3 class="font-bold text-lg">Core Allocation</h3>
              <span class="text-xs text-epig-textDim">Foundation &amp; Protection</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed mb-4">
            70&ndash;100% SPY exposure with an optional 5&ndash;25% stock sleeve.
            Remaining capital in cash or treasuries. Managed via allocation snapshots.
          </p>
          <div class="space-y-3">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">SPY Allocation</span>
              <span class="text-blue-400 font-mono font-semibold">70&ndash;100%</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Stock Sleeve</span>
              <span class="text-blue-400 font-mono font-semibold">0&ndash;25%</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Cash / Treasuries</span>
              <span class="text-blue-400 font-mono font-semibold">Remainder</span>
            </div>
          </div>
          <a href="/dashboard" class="block mt-6 text-center text-sm text-blue-400 font-semibold hover:text-blue-300 no-underline">
            View Strategy A Performance &rarr;
          </a>
        </div>
        <!-- Strategy B -->
        <div class="kpi-card relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
          <div class="flex items-center gap-3 mb-6 mt-2">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <span class="text-emerald-400 font-bold text-lg">B</span>
            </div>
            <div>
              <h3 class="font-bold text-lg">Futures Alerts</h3>
              <span class="text-xs text-epig-textDim">Systematic Income</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed mb-4">
            Defined-risk futures trades with 20-point default stop loss and profit target.
            Every trade has predefined risk boundaries.
          </p>
          <div class="space-y-3">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Default Stop</span>
              <span class="text-emerald-400 font-mono font-semibold">20 pts</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Risk Type</span>
              <span class="text-emerald-400 font-mono font-semibold">Defined</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Tracking</span>
              <span class="text-emerald-400 font-mono font-semibold">Net Pts / R</span>
            </div>
          </div>
          <a href="/dashboard" class="block mt-6 text-center text-sm text-emerald-400 font-semibold hover:text-emerald-300 no-underline">
            View Strategy B Performance &rarr;
          </a>
        </div>
        <!-- Strategy C -->
        <div class="kpi-card relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-400"></div>
          <div class="flex items-center gap-3 mb-6 mt-2">
            <div class="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center">
              <span class="text-amber-400 font-bold text-lg">C</span>
            </div>
            <div>
              <h3 class="font-bold text-lg">Episodic Pivots</h3>
              <span class="text-xs text-epig-textDim">Asymmetric Upside</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed mb-4">
            Asymmetric options trades capturing outsized moves during market dislocations.
            No default stops &mdash; tracked by net R-multiple or net dollars.
          </p>
          <div class="space-y-3">
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Stop Policy</span>
              <span class="text-amber-400 font-mono font-semibold">None</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Risk Profile</span>
              <span class="text-amber-400 font-mono font-semibold">Asymmetric</span>
            </div>
            <div class="flex justify-between items-center text-sm">
              <span class="text-epig-textDim">Tracking</span>
              <span class="text-amber-400 font-mono font-semibold">Net R / $</span>
            </div>
          </div>
          <a href="/dashboard" class="block mt-6 text-center text-sm text-amber-400 font-semibold hover:text-amber-300 no-underline">
            View Strategy C Performance &rarr;
          </a>
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
