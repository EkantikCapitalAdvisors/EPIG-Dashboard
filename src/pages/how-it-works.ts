export function howItWorksPage(): string {
  return `
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- HERO: THE PROMISE                                       -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="text-center mb-16">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        LIVE VERIFIED PERFORMANCE
      </div>
      <h1 class="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
        Real Trades. Real Money.<br>
        <span class="gradient-text">Zero Black Boxes.</span>
      </h1>
      <p class="text-epig-textMuted text-lg max-w-2xl mx-auto leading-relaxed">
        Every number on this platform comes from <strong class="text-white">actual executions in a live Interactive Brokers account</strong>.
        No backtests. No paper trades. No cherry-picked results.
      </p>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- SECTION 1: WHY YOU SHOULD TRUST THIS DATA               -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="kpi-card mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-shield-halved text-emerald-400 text-lg"></i>
        </div>
        <h2 class="font-bold text-xl">Why You Can Trust This Data</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div class="p-5 bg-epig-bg rounded-xl border border-emerald-500/20">
          <div class="text-3xl font-bold text-emerald-400 font-mono mb-2">IB</div>
          <h3 class="font-semibold text-sm text-white mb-2">Interactive Brokers Verified</h3>
          <p class="text-xs text-epig-textDim leading-relaxed">
            All data is exported via IB Flex Queries &mdash; standardized reports generated <em>directly by your broker</em>.
            Each fill carries a unique execution ID that cannot be fabricated.
          </p>
        </div>
        <div class="p-5 bg-epig-bg rounded-xl border border-emerald-500/20">
          <div class="text-3xl font-bold text-emerald-400 font-mono mb-2">0%</div>
          <h3 class="font-semibold text-sm text-white mb-2">Zero Manual Edits</h3>
          <p class="text-xs text-epig-textDim leading-relaxed">
            CSVs are uploaded directly from IB to the platform. No transformations, no adjustments, no selective omissions.
            What IB reports is what you see &mdash; commissions and fees included.
          </p>
        </div>
        <div class="p-5 bg-epig-bg rounded-xl border border-emerald-500/20">
          <div class="text-3xl font-bold text-emerald-400 font-mono mb-2">
            <i class="fas fa-paper-plane text-2xl"></i>
          </div>
          <h3 class="font-semibold text-sm text-white mb-2">Direct Data Delivery</h3>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Want maximum confidence? We will <strong class="text-white">send the raw IB Flex Query CSV directly to you</strong> &mdash;
            or configure IB's third-party reporting to deliver statements from Interactive Brokers to your email. Zero middlemen.
          </p>
        </div>
      </div>

      <!-- Verification methods -->
      <div class="rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 p-5">
        <h4 class="font-semibold text-emerald-400 text-sm mb-4"><i class="fas fa-check-double mr-2"></i>5 Ways to Verify Our Track Record</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-emerald-400 text-[10px] font-bold">1</span>
            </div>
            <span class="text-xs text-epig-textDim">Request the <strong class="text-white">raw IB CSV</strong> &mdash; verify every fill against market data</span>
          </div>
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-emerald-400 text-[10px] font-bold">2</span>
            </div>
            <span class="text-xs text-epig-textDim">Set up <strong class="text-white">IB third-party delivery</strong> &mdash; statements come straight from the broker</span>
          </div>
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-emerald-400 text-[10px] font-bold">3</span>
            </div>
            <span class="text-xs text-epig-textDim">Cross-reference <strong class="text-white">TradeIDs and timestamps</strong> against exchange records</span>
          </div>
          <div class="flex items-start gap-2">
            <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-emerald-400 text-[10px] font-bold">4</span>
            </div>
            <span class="text-xs text-epig-textDim">Check the <strong class="text-white">audit trail</strong> &mdash; every upload is timestamped and logged</span>
          </div>
          <div class="flex items-start gap-2 sm:col-span-2">
            <div class="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-emerald-400 text-[10px] font-bold">5</span>
            </div>
            <span class="text-xs text-epig-textDim">Follow <strong class="text-white">real-time Discord alerts</strong> and compare our calls vs. dashboard results after market close</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- SECTION 2: WHAT IS AN IB FLEX QUERY?                    -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="kpi-card mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-file-export text-blue-400 text-lg"></i>
        </div>
        <h2 class="font-bold text-xl">What Is an IB Flex Query?</h2>
      </div>

      <p class="text-sm text-epig-textMuted leading-relaxed mb-6">
        A Flex Query is <strong class="text-white">Interactive Brokers' official trade reporting system</strong> &mdash; used by
        hedge funds, auditors, and regulators worldwide. It is the gold standard for verifiable brokerage data.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-fingerprint text-blue-400 mt-1 text-sm"></i>
            <div>
              <h4 class="font-semibold text-sm text-white mb-1">Tamper-Proof Execution IDs</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                Every single trade fill gets a unique IB-assigned <strong class="text-white">TradeID</strong>. This cannot be created, duplicated, or backdated.
                It is the brokerage's proof that the trade happened.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <i class="fas fa-coins text-blue-400 mt-1 text-sm"></i>
            <div>
              <h4 class="font-semibold text-sm text-white mb-1">Net of All Costs</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                The NetCash column includes commissions, exchange fees, and regulatory fees.
                <strong class="text-white">What you see is the actual money in/out of the account.</strong> No hidden costs.
              </p>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fas fa-clock text-blue-400 mt-1 text-sm"></i>
            <div>
              <h4 class="font-semibold text-sm text-white mb-1">Exact Timestamps</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                Every fill is timestamped to the second. Cross-reference against exchange time & sales data
                to confirm execution during actual market hours.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <i class="fas fa-table text-blue-400 mt-1 text-sm"></i>
            <div>
              <h4 class="font-semibold text-sm text-white mb-1">Complete Data Fields</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                Symbol, asset class, side, quantity, price, strike, expiry, put/call &mdash;
                every field needed to reconstruct the exact trade and verify P&L independently.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Visual: IB → Platform pipeline -->
      <div class="rounded-xl bg-blue-500/[0.04] border border-blue-500/20 p-5">
        <h4 class="font-semibold text-blue-400 text-sm mb-4"><i class="fas fa-route mr-2"></i>From IB Account to Your Screen &mdash; 3 Steps, No Gaps</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
              <span class="text-white text-xs font-bold">1</span>
            </div>
            <div>
              <span class="text-xs text-white font-semibold block">IB Flex Query Export</span>
              <span class="text-[11px] text-epig-textDim">CSV generated by Interactive Brokers</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <span class="text-white text-xs font-bold">2</span>
            </div>
            <div>
              <span class="text-xs text-white font-semibold block">Upload & Auto-Classify</span>
              <span class="text-[11px] text-epig-textDim">SPY → A, FUT/FOP/market OPT → B, other STK/stock OPT → C &mdash; duplicates rejected</span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
              <span class="text-white text-xs font-bold">3</span>
            </div>
            <div>
              <span class="text-xs text-white font-semibold block">Dashboard Updates Live</span>
              <span class="text-[11px] text-epig-textDim">Metrics, equity curves, projector refresh instantly</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- SECTION 3: THE THREE STRATEGIES                         -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="kpi-card mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-layer-group text-purple-400 text-lg"></i>
        </div>
        <h2 class="font-bold text-xl">Three Layers. One System.</h2>
      </div>
      <p class="text-sm text-epig-textMuted leading-relaxed mb-6">
        EPIG runs three distinct strategies simultaneously &mdash; each designed for a different return profile.
        Together, they create a portfolio that protects capital, generates income, and captures asymmetric upside.
      </p>

      <div class="space-y-4">
        <!-- Strategy A -->
        <div class="rounded-xl border border-orange-500/20 bg-orange-500/[0.03] p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold uppercase bg-orange-500/15 text-orange-400 border border-orange-500/30">A</span>
            <div>
              <h3 class="font-bold text-white text-sm">SPY Investments</h3>
              <span class="text-[11px] text-orange-400/70 font-mono">SPY (S&amp;P 500 ETF) positions</span>
            </div>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Your core SPY position. Provides broad market exposure and anchors the portfolio with S&amp;P 500 participation.
          </p>
        </div>

        <!-- Strategy B -->
        <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">B</span>
            <div>
              <h3 class="font-bold text-white text-sm">Futures &amp; Market Options</h3>
              <span class="text-[11px] text-emerald-400/70 font-mono">FUT + FOP + market OPT (SPY/SPX) &bull; MES/ES &bull; defined risk</span>
            </div>
            <span class="ml-auto flex items-center gap-1.5 text-[11px] font-semibold" style="color:#5865F2;">
              <i class="fab fa-discord"></i> Real-Time Alerts
            </span>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            All futures and market-related options trades &mdash; defined-risk futures (MES/ES) with stops, plus SPY/SPX options verticals and directional plays.
            Systematic income generation and asymmetric opportunity capture.
            <strong class="text-white">Every entry and exit is sent as a Discord alert in real time.</strong>
          </p>
        </div>

        <!-- Strategy C -->
        <div class="rounded-xl border border-purple-500/20 bg-purple-500/[0.03] p-5">
          <div class="flex items-center gap-3 mb-3">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold uppercase bg-purple-500/15 text-purple-400 border border-purple-500/30">C</span>
            <div>
              <h3 class="font-bold text-white text-sm">Stocks &amp; Stock Options</h3>
              <span class="text-[11px] text-purple-400/70 font-mono">Individual equities outside SPY + stock options</span>
            </div>
            <span class="ml-auto flex items-center gap-1.5 text-[11px] font-semibold" style="color:#5865F2;">
              <i class="fab fa-discord"></i> Real-Time Alerts
            </span>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Individual stock positions outside of SPY and options on individual stocks &mdash; select equities held for strategic opportunities and sector exposure.
            <strong class="text-white">Every entry and exit is sent as a Discord alert in real time.</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- SECTION 4: HOW TO READ THE NUMBERS                      -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="kpi-card mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-magnifying-glass-chart text-blue-400 text-lg"></i>
        </div>
        <h2 class="font-bold text-xl">How to Read the Numbers</h2>
      </div>
      <p class="text-sm text-epig-textMuted leading-relaxed mb-6">
        The dashboard presents real performance metrics for each strategy. Here&rsquo;s what matters most when evaluating the results.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 bg-epig-bg rounded-lg border border-blue-500/15">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-amber-400 text-lg"><i class="fas fa-star"></i></span>
            <span class="text-blue-400 font-bold font-mono text-sm">EV per Trade (R)</span>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            <strong class="text-white">The #1 metric.</strong> Expected value per trade in risk units.
            Positive EV = the strategy makes money over time.
            +0.46R means for every $1 risked, you expect $0.46 profit on average.
          </p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-blue-400 font-bold font-mono text-sm">Win Rate</span>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Percentage of closed trades that were profitable.
            60% with good risk/reward is excellent. Don't chase 90%+ rates &mdash;
            those usually mean tiny gains vs. rare catastrophic losses.
          </p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-blue-400 font-bold font-mono text-sm">Profit Factor</span>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Gross wins &divide; gross losses. Above 1.0 = profitable.
            Above 1.5 = strong. Above 2.0 = exceptional.
            This shows how much winners outpace losers in absolute dollars.
          </p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-blue-400 font-bold font-mono text-sm">Max Drawdown</span>
          </div>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Largest peak-to-trough decline. This is the worst it got.
            EPIG targets <strong class="text-white">&lt;10% max drawdown</strong> across the combined portfolio.
            Capital preservation is the foundation.
          </p>
        </div>
      </div>

      <div class="rounded-xl bg-blue-500/[0.04] border border-blue-500/20 p-4">
        <p class="text-xs text-epig-textDim leading-relaxed mb-0">
          <i class="fas fa-lightbulb text-amber-400 mr-1.5"></i>
          <strong class="text-white">Key insight:</strong> Individual trade results don't matter &mdash; what matters is
          the <em>expected value over hundreds of trades</em>. A positive EV strategy with enough trade count
          converges to its theoretical edge. That's the mathematical basis of this approach.
        </p>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- SECTION 5: HOW YOU TAKE ADVANTAGE (DISCORD)             -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="kpi-card mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(88,101,242,0.15);">
          <i class="fab fa-discord text-lg" style="color:#5865F2;"></i>
        </div>
        <h2 class="font-bold text-xl">How You Take Advantage</h2>
      </div>

      <p class="text-sm text-epig-textMuted leading-relaxed mb-6">
        As a subscriber, you receive <strong class="text-white">real-time Discord alerts</strong>
        every time a Strategy A, B, or C trade is placed.
      </p>

      <!-- Discord alert mockup -->
      <div class="rounded-xl border border-epig-borderLight bg-[#2b2d31] p-5 mb-6">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background:#E5A418;">
            <span class="text-white text-[10px] font-bold" style="font-family:'Montserrat',sans-serif;">ECA</span>
          </div>
          <div>
            <span class="text-sm font-semibold text-white">EPIG Trade Bot</span>
            <span class="text-[10px] ml-2 px-1.5 py-0.5 rounded text-white" style="background:#5865F2;">BOT</span>
          </div>
          <span class="ml-auto text-[10px] text-[#949ba4]">Today at 10:32 AM</span>
        </div>
        <div class="bg-[#1e1f22] rounded-lg p-4 border-l-4 border-emerald-500">
          <div class="text-xs font-bold text-emerald-400 mb-2">🟢 STRATEGY B &mdash; TRADE ENTRY</div>
          <div class="grid grid-cols-2 gap-y-1.5 text-xs">
            <span class="text-[#949ba4]">Instrument</span><span class="text-white font-mono">MES (Micro E-mini)</span>
            <span class="text-[#949ba4]">Direction</span><span class="text-white font-mono">LONG</span>
            <span class="text-[#949ba4]">Entry</span><span class="text-white font-mono">5,892.50</span>
            <span class="text-[#949ba4]">Stop Loss</span><span class="text-red-400 font-mono">5,872.50 (-20 pts)</span>
            <span class="text-[#949ba4]">Risk</span><span class="text-white font-mono">$100 (1 contract &times; $5/pt)</span>
          </div>
        </div>
      </div>

      <!-- What you do with alerts -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div class="space-y-3">
          <h3 class="font-semibold text-white text-sm mb-1">Each Alert Includes</h3>
          <div class="flex items-start gap-2">
            <i class="fas fa-check text-emerald-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim">Instrument, direction, and exact entry price</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-check text-emerald-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim">Stop loss level and dollar risk per contract</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-check text-emerald-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim">Exit alert with P&L in dollars and R-multiple</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-check text-emerald-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim">Weekly performance recap and strategy health check</span>
          </div>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-white text-sm mb-1">What You Can Do</h3>
          <div class="flex items-start gap-2">
            <i class="fas fa-arrow-right text-amber-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim"><strong class="text-white">Mirror the trades</strong> in your own brokerage account at your own size</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-arrow-right text-amber-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim"><strong class="text-white">Study the methodology</strong> &mdash; learn timing, risk management, and execution</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-arrow-right text-amber-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim"><strong class="text-white">Track verified results</strong> on the dashboard as IB data updates weekly</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fas fa-arrow-right text-amber-400 mt-0.5 text-xs"></i>
            <span class="text-xs text-epig-textDim"><strong class="text-white">Start with 1 MES contract</strong> (~$30 risk/trade) and scale at your own pace</span>
          </div>
        </div>
      </div>

      <div class="rounded-xl bg-amber-500/[0.06] border border-amber-500/30 p-4">
        <p class="text-xs text-epig-textDim leading-relaxed mb-0">
          <i class="fas fa-triangle-exclamation text-amber-400 mr-1"></i>
          <strong class="text-amber-400">Important:</strong> Alerts are shared for educational and informational purposes.
          They are not investment advice. You decide whether, when, and how to act. See <a href="/disclosures" class="text-blue-400 no-underline">Disclosures</a>.
        </p>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- SECTION 6: WHY TRY THIS APPROACH                        -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="kpi-card mb-8">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-rocket text-amber-400 text-lg"></i>
        </div>
        <h2 class="font-bold text-xl">Why Try This Approach</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="p-5 bg-epig-bg rounded-xl border border-epig-border text-center">
          <div class="text-2xl mb-3"><i class="fas fa-eye text-emerald-400"></i></div>
          <h4 class="font-semibold text-sm text-white mb-2">100% Transparency</h4>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Every trade, every fill, every P&L number is IB-sourced and visible.
            No hidden losses. No selective reporting. Request the raw data anytime.
          </p>
        </div>
        <div class="p-5 bg-epig-bg rounded-xl border border-epig-border text-center">
          <div class="text-2xl mb-3"><i class="fas fa-shield-halved text-emerald-400"></i></div>
          <h4 class="font-semibold text-sm text-white mb-2">Defined Risk Always</h4>
          <p class="text-xs text-epig-textDim leading-relaxed">
            No open-ended losses. Futures: 20-point stops. Options: defined-risk spreads.
            You always know your max downside before entering.
          </p>
        </div>
        <div class="p-5 bg-epig-bg rounded-xl border border-epig-border text-center">
          <div class="text-2xl mb-3"><i class="fas fa-scale-balanced text-emerald-400"></i></div>
          <h4 class="font-semibold text-sm text-white mb-2">Skin in the Game</h4>
          <p class="text-xs text-epig-textDim leading-relaxed">
            This is not a signal service run on paper money. We trade our own capital.
            Our P&L is your P&L. The incentives are aligned.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="p-5 bg-epig-bg rounded-xl border border-epig-border text-center">
          <div class="text-2xl mb-3"><i class="fas fa-chart-line text-amber-400"></i></div>
          <h4 class="font-semibold text-sm text-white mb-2">Live Track Record</h4>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Not a backtest. Not paper trading. Real money, real fills, updated weekly.
            The dashboard shows 2026 YTD results from actual market executions.
          </p>
        </div>
        <div class="p-5 bg-epig-bg rounded-xl border border-epig-border text-center">
          <div class="text-2xl mb-3"><i class="fas fa-money-bill-wave text-amber-400"></i></div>
          <h4 class="font-semibold text-sm text-white mb-2">Start Small</h4>
          <p class="text-xs text-epig-textDim leading-relaxed">
            1 MES contract = ~$30 risk per trade. Start with minimal capital,
            see real results, and scale up only when you're confident.
          </p>
        </div>
        <div class="p-5 bg-epig-bg rounded-xl border border-epig-border text-center">
          <div class="text-2xl mb-3"><i class="fas fa-chart-line text-amber-400"></i></div>
          <h4 class="font-semibold text-sm text-white mb-2">Free Dashboard</h4>
          <p class="text-xs text-epig-textDim leading-relaxed">
            Full access to the live performance dashboard at zero cost.
            Verify the data yourself before making any decisions.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-epig-border">
        <a href="/dashboard" class="btn-primary text-sm no-underline px-8 py-3">
          <i class="fas fa-chart-line mr-2"></i>View Live Dashboard
        </a>
        <a href="/how-it-works" class="btn-outline text-sm no-underline px-8 py-3">
          <i class="fas fa-book-open mr-2"></i>Learn How It Works
        </a>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════ -->
    <!-- LINK TO FAQ                                              -->
    <!-- ════════════════════════════════════════════════════════ -->
    <div class="text-center py-6">
      <p class="text-epig-textMuted text-sm mb-3">Have more questions?</p>
      <a href="/faq" class="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm no-underline hover:text-blue-300 transition-colors">
        <i class="fas fa-circle-question"></i>
        Read the Full FAQ
        <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>

    <!-- Disclosure -->
    <div class="text-center py-2">
      <p class="text-xs text-epig-textDim max-w-2xl mx-auto leading-relaxed">
        EPIG Investment Design is for informational and educational purposes only.
        Nothing herein constitutes investment advice. Past performance is not indicative of future results.
        See <a href="/disclosures" class="text-blue-400 no-underline">full disclosures</a>.
      </p>
    </div>
  </div>
  `
}
