export function updatesPage(): string {
  return `
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-14">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">Updates & Changelog</h1>
      <p class="text-epig-textMuted text-lg">Platform updates, data uploads, and notable changes.</p>
    </div>

    <div class="space-y-6">
      <div class="kpi-card">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs bg-blue-500/15 text-blue-400 px-2.5 py-1 rounded-full font-semibold">DATA</span>
          <span class="text-sm text-epig-textDim font-mono">2026-02-17</span>
        </div>
        <h3 class="font-semibold mb-2">Weekly Data Upload &mdash; Week of Feb 17</h3>
        <p class="text-sm text-epig-textDim leading-relaxed">
          IB Flex Query data uploaded for all three strategies. 12 new trades added to Strategy B,
          3 new trades for Strategy C. Strategy A allocation unchanged (80/15/5).
        </p>
      </div>

      <div class="kpi-card">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs bg-emerald-500/15 text-emerald-400 px-2.5 py-1 rounded-full font-semibold">FEATURE</span>
          <span class="text-sm text-epig-textDim font-mono">2026-02-14</span>
        </div>
        <h3 class="font-semibold mb-2">Monthly Returns Heatmap Added</h3>
        <p class="text-sm text-epig-textDim leading-relaxed">
          The dashboard now includes a monthly returns heatmap showing performance by month for each strategy.
          Color-coded for quick visual assessment.
        </p>
      </div>

      <div class="kpi-card">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs bg-blue-500/15 text-blue-400 px-2.5 py-1 rounded-full font-semibold">DATA</span>
          <span class="text-sm text-epig-textDim font-mono">2026-02-10</span>
        </div>
        <h3 class="font-semibold mb-2">Weekly Data Upload &mdash; Week of Feb 10</h3>
        <p class="text-sm text-epig-textDim leading-relaxed">
          Standard weekly upload. 8 trades for Strategy B, 2 for Strategy C.
          Strategy A allocation adjusted: SPY reduced to 80% from 85%, stock sleeve increased to 15%.
        </p>
      </div>

      <div class="kpi-card">
        <div class="flex items-center gap-3 mb-3">
          <span class="text-xs bg-amber-500/15 text-amber-400 px-2.5 py-1 rounded-full font-semibold">PLATFORM</span>
          <span class="text-sm text-epig-textDim font-mono">2026-02-01</span>
        </div>
        <h3 class="font-semibold mb-2">EPIG Investment Design Launch</h3>
        <p class="text-sm text-epig-textDim leading-relaxed">
          Public launch of the EPIG platform with full performance dashboard, performance projector,
          and subscription system. Phase 1 with manual IB uploads active.
        </p>
      </div>
    </div>
  </div>
  `
}
