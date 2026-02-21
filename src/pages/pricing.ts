export function pricingPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-14">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
      <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
        The dashboard is always free and public. Subscriptions unlock real-time Discord notifications on every trade.
      </p>
    </div>

    <!-- What's free -->
    <div class="glass-card p-8 max-w-3xl mx-auto mb-12">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center">
          <i class="fas fa-unlock text-emerald-400"></i>
        </div>
        <h3 class="font-bold text-lg">Always Free &mdash; No Login Required</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="flex items-center gap-2 text-sm text-epig-textMuted">
          <i class="fas fa-check text-emerald-400"></i> Full performance dashboard
        </div>
        <div class="flex items-center gap-2 text-sm text-epig-textMuted">
          <i class="fas fa-check text-emerald-400"></i> All three strategy metrics
        </div>
        <div class="flex items-center gap-2 text-sm text-epig-textMuted">
          <i class="fas fa-check text-emerald-400"></i> Trade-by-trade history
        </div>
        <div class="flex items-center gap-2 text-sm text-epig-textMuted">
          <i class="fas fa-check text-emerald-400"></i> Performance Projector
        </div>
        <div class="flex items-center gap-2 text-sm text-epig-textMuted">
          <i class="fas fa-check text-emerald-400"></i> Weekly email digest
        </div>
        <div class="flex items-center gap-2 text-sm text-epig-textMuted">
          <i class="fas fa-check text-emerald-400"></i> Methodology documentation
        </div>
      </div>
    </div>

    <!-- Plans -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
      <!-- Monthly -->
      <div class="kpi-card">
        <div class="mb-6">
          <h3 class="text-lg font-bold mb-1">Flexible Access</h3>
          <p class="text-sm text-epig-textDim">Monthly billing, cancel anytime</p>
        </div>
        <div class="mb-6">
          <span class="text-4xl font-extrabold font-mono">$149</span>
          <span class="text-epig-textDim">/month</span>
        </div>
        <div class="space-y-3 mb-8">
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-check text-blue-400"></i>
            <span class="text-epig-textMuted">Everything free, plus:</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-bolt text-blue-400"></i>
            <span>Real-time Discord notifications</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fab fa-discord text-blue-400"></i>
            <span>Private subscriber channels</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-bell text-blue-400"></i>
            <span>Trade alerts for all 3 strategies</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-calendar text-blue-400"></i>
            <span>60-day free trial</span>
          </div>
        </div>
        <button class="btn-outline w-full text-center" onclick="startTrial('monthly')">
          Start 60-Day Free Trial
        </button>
        <p class="text-[11px] text-epig-textDim mt-3 text-center">$0 today &middot; First charge after 60 days</p>
      </div>

      <!-- Annual -->
      <div class="kpi-card border-blue-500/30 relative" style="background: linear-gradient(135deg, rgba(59,130,246,0.05), rgba(16,185,129,0.05));">
        <div class="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          SAVE 44%
        </div>
        <div class="mb-6">
          <h3 class="text-lg font-bold mb-1">For the Committed Investor</h3>
          <p class="text-sm text-epig-textDim">Annual billing, best value</p>
        </div>
        <div class="mb-6">
          <span class="text-4xl font-extrabold font-mono">$999</span>
          <span class="text-epig-textDim">/year</span>
          <div class="text-sm text-epig-textDim mt-1">
            <span class="line-through">$1,788</span> &mdash; saves $789/year
          </div>
        </div>
        <div class="space-y-3 mb-8">
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-check text-emerald-400"></i>
            <span class="text-epig-textMuted">Everything in monthly, plus:</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-bolt text-emerald-400"></i>
            <span>Real-time Discord notifications</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fab fa-discord text-emerald-400"></i>
            <span>Private subscriber channels</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-bell text-emerald-400"></i>
            <span>Trade alerts for all 3 strategies</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-star text-emerald-400"></i>
            <span>Priority access &amp; early features</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <i class="fas fa-calendar text-emerald-400"></i>
            <span>60-day free trial</span>
          </div>
        </div>
        <button class="btn-primary w-full text-center" onclick="startTrial('annual')">
          Start 60-Day Free Trial
        </button>
        <p class="text-[11px] text-epig-textDim mt-3 text-center">$0 today &middot; First charge after 60 days</p>
      </div>
    </div>

    <!-- FAQ Link -->
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-epig-textMuted text-sm mb-3">Have questions about trials, billing, or what&rsquo;s included?</p>
      <a href="/faq" class="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm no-underline hover:text-blue-300 transition-colors">
        <i class="fas fa-circle-question"></i>
        Read the Full FAQ
        <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>

    <!-- Compliance -->
    <div class="text-center mt-12">
      <p class="text-xs text-epig-textDim max-w-2xl mx-auto">
        Subscriptions are for notification access only. The performance dashboard remains free and public.
        EPIG does not provide investment advice. <a href="/disclosures" class="text-blue-400 no-underline">Full disclosure &rarr;</a>
      </p>
    </div>
  </div>

  <script>
    function startTrial(plan) {
      // In production, this would redirect to Stripe Checkout
      alert('Stripe Checkout integration coming soon.\\nPlan: ' + plan + '\\n$0 today - 60-day free trial');
    }
  </script>
  `
}
