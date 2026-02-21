export function howItWorksPage(): string {
  return `
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-14">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">How It Works</h1>
      <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
        How data flows from Interactive Brokers into the EPIG dashboard &mdash; step by step.
      </p>
    </div>

    <!-- ============================================ -->
    <!-- QUICK OVERVIEW: 3-Step Pipeline              -->
    <!-- ============================================ -->
    <div class="kpi-card mb-10">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-route text-blue-400"></i> Data Pipeline Overview
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Step 1 -->
        <div class="relative p-5 bg-epig-bg rounded-xl border border-blue-500/20">
          <div class="absolute -top-3 left-4">
            <span class="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 1</span>
          </div>
          <div class="mt-3">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
              <i class="fas fa-file-export text-blue-400 text-xl"></i>
            </div>
            <h3 class="font-semibold mb-2">Export from IB</h3>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Generate a <strong class="text-white">Flex Query</strong> in Interactive Brokers that exports your trade executions as CSV.
            </p>
          </div>
        </div>
        <!-- Arrow -->
        <div class="hidden md:flex items-center justify-center absolute-arrow">
        </div>
        <!-- Step 2 -->
        <div class="relative p-5 bg-epig-bg rounded-xl border border-emerald-500/20">
          <div class="absolute -top-3 left-4">
            <span class="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 2</span>
          </div>
          <div class="mt-3">
            <div class="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
              <i class="fas fa-cloud-upload-alt text-emerald-400 text-xl"></i>
            </div>
            <h3 class="font-semibold mb-2">Upload to EPIG</h3>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Upload the CSV at the <a href="/admin" class="text-blue-400 font-semibold no-underline hover:text-blue-300">Admin Console</a>. Trades are auto-classified by asset class.
            </p>
          </div>
        </div>
        <!-- Step 3 -->
        <div class="relative p-5 bg-epig-bg rounded-xl border border-amber-500/20">
          <div class="absolute -top-3 left-4">
            <span class="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">STEP 3</span>
          </div>
          <div class="mt-3">
            <div class="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
              <i class="fas fa-chart-line text-amber-400 text-xl"></i>
            </div>
            <h3 class="font-semibold mb-2">Dashboard Updates</h3>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Round trips are built, metrics computed, and the <a href="/dashboard" class="text-blue-400 font-semibold no-underline hover:text-blue-300">Dashboard</a> shows real 2026 performance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- STEP 1 DETAIL: IB Flex Query Setup           -->
    <!-- ============================================ -->
    <div class="kpi-card mb-8" id="flex-query-setup">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-cog text-blue-400"></i> Step 1 &mdash; Setting Up Your IB Flex Query
      </h2>
      <p class="text-sm text-epig-textDim mb-6 leading-relaxed">
        A Flex Query is a custom report you configure once in IB Account Management. After that, you run it weekly to export your latest fills.
      </p>

      <div class="space-y-4">
        <!-- 1a -->
        <div class="flex gap-4 items-start p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span class="text-blue-400 font-bold text-sm">1</span>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-1">Log in to IB Account Management</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Go to <code class="bg-epig-bg border border-epig-border rounded px-1.5 py-0.5 text-blue-400 text-xs">portal.interactivebrokers.com</code>
              &rarr; <strong class="text-white">Performance &amp; Reports</strong> &rarr; <strong class="text-white">Flex Queries</strong>.
            </p>
          </div>
        </div>

        <!-- 1b -->
        <div class="flex gap-4 items-start p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span class="text-blue-400 font-bold text-sm">2</span>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-1">Create a New Activity Flex Query</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Click the <strong class="text-white">+</strong> button next to "Activity Flex Queries". Name it something like
              <code class="bg-epig-bg border border-epig-border rounded px-1.5 py-0.5 text-emerald-400 text-xs">EPIG Export</code>.
            </p>
          </div>
        </div>

        <!-- 1c -->
        <div class="flex gap-4 items-start p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span class="text-blue-400 font-bold text-sm">3</span>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-1">Select the "Trades" Section</h4>
            <p class="text-sm text-epig-textDim leading-relaxed mb-3">
              In the query editor, expand <strong class="text-white">Trades</strong> and select <strong class="text-white">Executions</strong>. Include these fields:
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${['TradeID', 'Symbol', 'AssetClass', 'Buy/Sell', 'Quantity', 'Price', 'Amount', 'NetCash', 'Commission', 'TradeDate', 'Date/Time', 'Strike', 'Expiry', 'Put/Call'].map(f =>
                `<div class="flex items-center gap-2 text-xs">
                  <i class="fas fa-check text-emerald-400 text-[10px]"></i>
                  <code class="text-blue-300 font-mono">${f}</code>
                </div>`
              ).join('')}
            </div>
            <p class="text-xs text-epig-textDim mt-3 italic">
              <i class="fas fa-lightbulb text-amber-400 mr-1"></i>
              The most important field is <strong class="text-white">TradeID</strong> &mdash; this is the unique IB execution ID used for deduplication.
            </p>
          </div>
        </div>

        <!-- 1d -->
        <div class="flex gap-4 items-start p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span class="text-blue-400 font-bold text-sm">4</span>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-1">Configure Output Format</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Set <strong class="text-white">Format: CSV</strong>, <strong class="text-white">Period: Last 7 Calendar Days</strong> (or custom range).
              Leave "Include header" checked.
            </p>
          </div>
        </div>

        <!-- 1e -->
        <div class="flex gap-4 items-start p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span class="text-blue-400 font-bold text-sm">5</span>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-1">Run &amp; Download</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              Save the query, then click the <strong class="text-white">Run</strong> (arrow) icon next to it.
              IB generates a downloadable CSV file. Save it to your computer.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
        <div class="flex items-center gap-2 mb-2">
          <i class="fas fa-calendar-check text-blue-400"></i>
          <h4 class="font-semibold text-sm text-blue-400">Recommended Schedule</h4>
        </div>
        <p class="text-sm text-epig-textDim leading-relaxed">
          Run and upload every <strong class="text-white">Monday morning</strong> covering the prior week. EPIG automatically deduplicates
          &mdash; overlapping date ranges are safe; previously uploaded trades are skipped.
        </p>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- STEP 2 DETAIL: Upload to Admin Console       -->
    <!-- ============================================ -->
    <div class="kpi-card mb-8" id="upload-guide">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-cloud-upload-alt text-emerald-400"></i> Step 2 &mdash; Upload the CSV
      </h2>

      <div class="space-y-6">
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <i class="fas fa-arrow-right text-emerald-400"></i>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-1">Go to the Admin Console</h4>
            <p class="text-sm text-epig-textDim leading-relaxed mb-3">
              Navigate to <a href="/admin" class="text-blue-400 font-semibold no-underline hover:text-blue-300">/admin</a>
              &mdash; this is where all data ingestion happens.
            </p>
            <a href="/admin" class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm px-4 py-2.5 rounded-lg no-underline hover:bg-emerald-500/20 transition-colors">
              <i class="fas fa-external-link-alt"></i> Open Admin Console
            </a>
          </div>
        </div>

        <div class="section-divider"></div>

        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <i class="fas fa-file-csv text-emerald-400"></i>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-1">Drag &amp; Drop or Browse</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              In the "Step 1: Upload IB Flex Query" card, drag your CSV file onto the drop zone or click "Browse Files".
              Then click <strong class="text-white">Parse &amp; Auto-Classify</strong>.
            </p>
          </div>
        </div>

        <div class="section-divider"></div>

        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <i class="fas fa-tags text-emerald-400"></i>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-1">Auto-Classification</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              EPIG reads the <code class="bg-epig-bg border border-epig-border rounded px-1.5 py-0.5 text-xs text-blue-400">AssetClass</code> field and maps each fill:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              <div class="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg text-center">
                <div class="font-bold text-blue-400 mb-1">STK &rarr; Strategy A</div>
                <div class="text-xs text-epig-textDim">Core Allocation (stocks, ETFs)</div>
              </div>
              <div class="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg text-center">
                <div class="font-bold text-emerald-400 mb-1">FUT &rarr; Strategy B</div>
                <div class="text-xs text-epig-textDim">Futures Alerts (MES, ES)</div>
              </div>
              <div class="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg text-center">
                <div class="font-bold text-amber-400 mb-1">OPT &rarr; Strategy C</div>
                <div class="text-xs text-epig-textDim">Episodic Pivots (options)</div>
              </div>
            </div>
            <p class="text-xs text-epig-textDim mt-3">
              <i class="fas fa-info-circle text-blue-400 mr-1"></i>
              Vertical spreads (same expiry, different strikes, opposite sides) are automatically detected and grouped.
              You can override any assignment before confirming.
            </p>
          </div>
        </div>

        <div class="section-divider"></div>

        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <i class="fas fa-check-double text-emerald-400"></i>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-1">Review &amp; Confirm</h4>
            <p class="text-sm text-epig-textDim leading-relaxed">
              The review table shows every parsed fill with its strategy assignment, asset class, symbol, price, and P&L.
              Change any strategy via the dropdown. When satisfied, click <strong class="text-white">Confirm &amp; Ingest</strong>.
              Duplicates (same TradeID) are automatically skipped.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- STEP 3 DETAIL: How Metrics Are Computed      -->
    <!-- ============================================ -->
    <div class="kpi-card mb-8" id="metrics-engine">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-calculator text-amber-400"></i> Step 3 &mdash; How Data Becomes Metrics
      </h2>

      <div class="space-y-6">
        <!-- Round-trip builder -->
        <div>
          <h3 class="font-semibold text-base mb-3 flex items-center gap-2">
            <i class="fas fa-exchange-alt text-blue-400"></i> Round-Trip Trade Builder
          </h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-4">
            Individual IB fills (BUY/SELL) are grouped into <strong class="text-white">round-trip trades</strong>. A round trip
            is complete when net position returns to zero. This is how we get closed trade P&L.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 bg-epig-bg rounded-lg border border-blue-500/20">
              <h4 class="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wide">Strategy A &amp; B (STK / FUT)</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                FIFO matching by instrument. Buys build position, sells close it. When qty = 0 &rarr; one closed trade.
                P&L = sum of IB NetCash values.
              </p>
            </div>
            <div class="p-4 bg-epig-bg rounded-lg border border-amber-500/20">
              <h4 class="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wide">Strategy C (OPT / FOP)</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                Fills grouped by expiry + put/call. Adjacent strikes paired into vertical spreads.
                Open + close of both legs = 1 round trip. P&L = sum of all 4 legs' NetCash.
              </p>
            </div>
            <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
              <h4 class="text-xs font-bold text-epig-textMuted mb-2 uppercase tracking-wide">Deduplication</h4>
              <p class="text-xs text-epig-textDim leading-relaxed">
                Every fill carries an IB TradeID. Re-uploading the same period produces zero new trades.
                Only genuinely new fills are ingested.
              </p>
            </div>
          </div>
        </div>

        <div class="section-divider"></div>

        <!-- Metrics -->
        <div>
          <h3 class="font-semibold text-base mb-3 flex items-center gap-2">
            <i class="fas fa-square-root-variable text-blue-400"></i> Metric Definitions
          </h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-epig-border">
                  <th class="text-left px-4 py-3 text-epig-textDim font-semibold">Metric</th>
                  <th class="text-left px-4 py-3 text-epig-textDim font-semibold">What It Measures</th>
                  <th class="text-left px-4 py-3 text-epig-textDim font-semibold">Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">Cumulative Return</td>
                  <td class="px-4 py-3 text-epig-textDim">Total P&L as % of $100K portfolio</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">total_pnl / 100,000 * 100</td>
                </tr>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">Win Rate</td>
                  <td class="px-4 py-3 text-epig-textDim">% of round trips with positive P&L</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">wins / closed_trades</td>
                </tr>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">EV per Trade (R)</td>
                  <td class="px-4 py-3 text-epig-textDim">Expected value in risk units</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">WR * avg_win_R - (1 - WR) * 1.0</td>
                </tr>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">Profit Factor</td>
                  <td class="px-4 py-3 text-epig-textDim">Gross wins vs gross losses</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">sum(wins) / sum(|losses|)</td>
                </tr>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">Sharpe Ratio</td>
                  <td class="px-4 py-3 text-epig-textDim">Annualized risk-adjusted return</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">ann_return / ann_volatility</td>
                </tr>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">Sortino Ratio</td>
                  <td class="px-4 py-3 text-epig-textDim">Return vs downside deviation only</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">ann_return / ann_downside_dev</td>
                </tr>
                <tr class="border-b border-epig-border/50">
                  <td class="px-4 py-3 font-semibold">Max Drawdown</td>
                  <td class="px-4 py-3 text-epig-textDim">Largest peak-to-trough P&L decline</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">max(peak - trough) / capital</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 font-semibold">R-Multiple</td>
                  <td class="px-4 py-3 text-epig-textDim">P&L expressed as units of risk (1R = avg loss)</td>
                  <td class="px-4 py-3 font-mono text-xs text-blue-400">trade_pnl / avg_loss_dollar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- Strategy Definitions                         -->
    <!-- ============================================ -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-layer-group text-blue-400"></i> Strategy Definitions
      </h2>
      <div class="space-y-4">
        <div class="p-4 bg-epig-bg rounded-lg border border-blue-500/20">
          <h3 class="font-semibold text-blue-400 mb-2">Strategy A &mdash; Core Allocation</h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-2">
            70&ndash;100% SPY, 5&ndash;25% optional stock sleeve, remainder in cash/treasuries.
            Performance is computed from chained allocation snapshots.
          </p>
          <div class="text-xs text-epig-textDim">
            <strong>Asset classes:</strong> STK &bull;
            <strong>Instruments:</strong> SPY, individual equities &bull;
            <strong>Upload:</strong> IB Flex Query (stock executions)
          </div>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-emerald-500/20">
          <h3 class="font-semibold text-emerald-400 mb-2">Strategy B &mdash; Futures Alerts</h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-2">
            Defined-risk futures trades (MES/ES). Default 20-point stop loss and profit target.
          </p>
          <div class="text-xs text-epig-textDim">
            <strong>Asset classes:</strong> FUT &bull;
            <strong>Instruments:</strong> MES, ES &bull;
            <strong>Upload:</strong> IB Flex Query (futures executions)
          </div>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-amber-500/20">
          <h3 class="font-semibold text-amber-400 mb-2">Strategy C &mdash; Episodic Pivots</h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-2">
            Asymmetric options trades targeting outsized moves. Tracked by net R-multiple or dollar P&L.
            Vertical spreads are auto-detected.
          </p>
          <div class="text-xs text-epig-textDim">
            <strong>Asset classes:</strong> OPT, FOP &bull;
            <strong>Instruments:</strong> SPY, QQQ, equity options &bull;
            <strong>Upload:</strong> IB Flex Query (options executions)
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- Data Verification & Integrity                -->
    <!-- ============================================ -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-shield-halved text-blue-400"></i> Data Integrity
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border text-center">
          <i class="fas fa-fingerprint text-blue-400 text-2xl mb-3"></i>
          <h4 class="font-semibold text-sm mb-1">IB Execution IDs</h4>
          <p class="text-xs text-epig-textDim">Every fill carries a unique IB TradeID &mdash; the source of truth</p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border text-center">
          <i class="fas fa-copy text-blue-400 text-2xl mb-3"></i>
          <h4 class="font-semibold text-sm mb-1">Idempotent Ingestion</h4>
          <p class="text-xs text-epig-textDim">Re-uploading the same file has zero effect. No double counting ever.</p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border text-center">
          <i class="fas fa-scroll text-blue-400 text-2xl mb-3"></i>
          <h4 class="font-semibold text-sm mb-1">Full Audit Trail</h4>
          <p class="text-xs text-epig-textDim">Every upload, ingest, and allocation change is logged with timestamp.</p>
        </div>
      </div>
    </div>

    <!-- ============================================ -->
    <!-- FAQ                                          -->
    <!-- ============================================ -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-circle-question text-blue-400"></i> FAQ
      </h2>
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-1">Where do I upload the Flex Query file?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            At the <a href="/admin" class="text-blue-400 font-semibold no-underline">Admin Console</a> (/admin). Drag &amp; drop your CSV,
            click Parse, review the auto-classified trades, then Confirm.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">What if I upload the same file twice?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Nothing bad happens. EPIG checks each TradeID against the database and silently skips duplicates.
            You'll see "X duplicates skipped" in the confirmation.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">Can I upload multiple weeks at once?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Yes. Set the Flex Query date range to cover a longer period. EPIG processes all fills and deduplicates
            against what's already in the database.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">What if a trade is classified wrong?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            In the review table (Step 2), use the strategy dropdown on any row to change A/B/C before confirming.
            You can also use the "All &rarr; A/B/C" buttons for bulk changes.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">Is this investment advice?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            No. EPIG is for informational and educational purposes only. We share our trades transparently
            but do not advise others to replicate them. See <a href="/disclosures" class="text-blue-400 no-underline">Disclosures</a>.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">What instruments are traded?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Strategy A: SPY ETF, select individual stocks, cash/treasuries.<br>
            Strategy B: Micro E-mini S&P 500 (MES) and E-mini S&P 500 (ES) futures.<br>
            Strategy C: Options on SPY, QQQ, and select equities.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center py-8">
      <a href="/admin" class="btn-primary text-base no-underline inline-flex items-center gap-2" style="padding: 14px 32px;">
        <i class="fas fa-upload"></i> Go to Admin Console &amp; Upload
      </a>
      <p class="text-xs text-epig-textDim mt-3">
        Or view the <a href="/dashboard" class="text-blue-400 no-underline">Dashboard</a> to see current performance metrics.
      </p>
    </div>
  </div>
  `
}
