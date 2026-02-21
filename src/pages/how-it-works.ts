export function howItWorksPage(): string {
  return `
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-14">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">How EPIG Works</h1>
      <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
        Methodology, metric definitions, and data verification. Full transparency on how every number is computed.
      </p>
    </div>

    <!-- Data Pipeline -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-database text-blue-400"></i> Data Pipeline
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs bg-emerald-500/15 text-emerald-400 px-2 py-1 rounded font-semibold">PHASE 1 &mdash; CURRENT</span>
          </div>
          <h3 class="font-semibold mb-2">Manual IB Upload</h3>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Weekly uploads of Interactive Brokers Flex Query exports (XML/CSV).
            Every trade is verified against IB execution IDs.
            Data is parsed, validated, and ingested with full idempotency &mdash; duplicate uploads are safely rejected.
          </p>
          <div class="mt-3 text-xs text-epig-textDim">
            <i class="fas fa-clock mr-1"></i> Updated every Monday morning
          </div>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border opacity-60">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs bg-blue-500/15 text-blue-400 px-2 py-1 rounded font-semibold">PHASE 2 &mdash; COMING</span>
          </div>
          <h3 class="font-semibold mb-2">Real-Time Discord Ingestion</h3>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Discord bot captures trade alerts in real time. Alerts are reconciled against IB execution data.
            Alert-to-execution lag tracking provides transparency on fill quality.
          </p>
          <div class="mt-3 text-xs text-epig-textDim">
            <i class="fas fa-bolt mr-1"></i> Sub-second capture latency
          </div>
        </div>
      </div>
    </div>

    <!-- Strategy Definitions -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-layer-group text-blue-400"></i> Strategy Definitions
      </h2>
      <div class="space-y-6">
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <h3 class="font-semibold text-blue-400 mb-2">Strategy A &mdash; Core Allocation</h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-3">
            70&ndash;100% SPY, 5&ndash;25% optional stock sleeve, remainder in cash/treasuries.
            Performance is computed as a chain of period returns across allocation snapshots,
            not a simple start-to-end calculation.
          </p>
          <div class="text-xs text-epig-textDim">
            <strong>Key metric:</strong> Cumulative return via chained allocation snapshots
          </div>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <h3 class="font-semibold text-emerald-400 mb-2">Strategy B &mdash; Futures Alerts</h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-3">
            Defined-risk futures trades (MES/ES). Default: 20-point stop loss and profit target if not specified in the alert.
            Every trade has explicit risk boundaries.
          </p>
          <div class="text-xs text-epig-textDim">
            <strong>Key metrics:</strong> Net Points, R-Multiple, Win Rate, Expectancy
          </div>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border">
          <h3 class="font-semibold text-amber-400 mb-2">Strategy C &mdash; Episodic Pivots</h3>
          <p class="text-sm text-epig-textDim leading-relaxed mb-3">
            Asymmetric options trades targeting outsized moves during market dislocations.
            No default stop &mdash; tracked by net R-multiple or net dollar P&L.
          </p>
          <div class="text-xs text-epig-textDim">
            <strong>Key metrics:</strong> Net R, Win Rate, Profit Factor, Expectancy (R)
          </div>
        </div>
      </div>
    </div>

    <!-- Metric Definitions -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-square-root-variable text-blue-400"></i> Metric Definitions
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-epig-border">
              <th class="text-left px-4 py-3 text-epig-textDim font-semibold">Metric</th>
              <th class="text-left px-4 py-3 text-epig-textDim font-semibold">Definition</th>
              <th class="text-left px-4 py-3 text-epig-textDim font-semibold">Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Win Rate</td>
              <td class="px-4 py-3 text-epig-textDim">Percentage of trades that are profitable</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">count(net_pts > 0) / count(all)</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Expectancy (Pts)</td>
              <td class="px-4 py-3 text-epig-textDim">Average profit per trade in points</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">mean(net_points)</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Expectancy (R)</td>
              <td class="px-4 py-3 text-epig-textDim">Average R-multiple per trade</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">mean(R) across all trades</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Profit Factor</td>
              <td class="px-4 py-3 text-epig-textDim">Ratio of gross wins to gross losses</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">sum(wins) / sum(abs(losses))</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Sharpe Ratio</td>
              <td class="px-4 py-3 text-epig-textDim">Risk-adjusted return vs. volatility</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">(ann_return - rf) / ann_vol</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Sortino Ratio</td>
              <td class="px-4 py-3 text-epig-textDim">Downside risk-adjusted return</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">(ann_return - rf) / ann_dd_dev</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">Max Drawdown</td>
              <td class="px-4 py-3 text-epig-textDim">Largest peak-to-trough decline</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">max(peak - trough) on equity</td>
            </tr>
            <tr class="border-b border-epig-border/50">
              <td class="px-4 py-3 font-semibold">CAGR</td>
              <td class="px-4 py-3 text-epig-textDim">Annualized compound growth rate</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">(end/start)^(1/years) - 1</td>
            </tr>
            <tr>
              <td class="px-4 py-3 font-semibold">R-Multiple</td>
              <td class="px-4 py-3 text-epig-textDim">Profit/loss relative to initial risk</td>
              <td class="px-4 py-3 font-mono text-xs text-blue-400">net_points / planned_risk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Verification -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-shield-halved text-blue-400"></i> Data Verification
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border text-center">
          <i class="fas fa-fingerprint text-blue-400 text-2xl mb-3"></i>
          <h4 class="font-semibold text-sm mb-1">IB Execution IDs</h4>
          <p class="text-xs text-epig-textDim">Every trade carries a unique Interactive Brokers execution identifier</p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border text-center">
          <i class="fas fa-copy text-blue-400 text-2xl mb-3"></i>
          <h4 class="font-semibold text-sm mb-1">Idempotent Ingestion</h4>
          <p class="text-xs text-epig-textDim">Duplicate uploads are safely rejected. No double counting.</p>
        </div>
        <div class="p-4 bg-epig-bg rounded-lg border border-epig-border text-center">
          <i class="fas fa-scroll text-blue-400 text-2xl mb-3"></i>
          <h4 class="font-semibold text-sm mb-1">Full Audit Trail</h4>
          <p class="text-xs text-epig-textDim">Every admin action is logged with timestamp, user, and before/after state.</p>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="kpi-card">
      <h2 class="font-bold text-xl mb-6 flex items-center gap-2">
        <i class="fas fa-circle-question text-blue-400"></i> FAQ
      </h2>
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold mb-1">Is this investment advice?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            No. EPIG is strictly for informational and educational purposes. We share our trades transparently
            but do not advise others to replicate them. See our <a href="/disclosures" class="text-blue-400 no-underline">disclosures</a>.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">Can I replicate the trades?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            We provide transparency, not trade signals. The notifications show our actual executions
            but are not intended as recommendations. Individual results will vary based on execution,
            timing, and position sizing.
          </p>
        </div>
        <div class="border-t border-epig-border pt-4">
          <h4 class="font-semibold mb-1">How can I verify the data?</h4>
          <p class="text-sm text-epig-textDim leading-relaxed">
            Every trade on the dashboard includes an Interactive Brokers execution ID.
            These are verifiable artifacts from IB's reporting system.
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
  </div>
  `
}
