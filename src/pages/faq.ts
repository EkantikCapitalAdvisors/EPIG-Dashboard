export function faqPage(): string {
  return `
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-14">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p class="text-epig-textMuted text-lg max-w-2xl mx-auto">
        Common questions about EPIG, the data, and how to get started.
      </p>
    </div>

    <!-- ── General ── -->
    <div class="mb-10">
      <h2 class="text-lg font-bold mb-5 flex items-center gap-2">
        <i class="fas fa-circle-info text-blue-400"></i> General
      </h2>
      <div class="space-y-1">
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">What is EPIG?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            EPIG (Ekantik Principal Protection Income &amp; Growth) is a three-strategy managed investment system: Strategy A &mdash; SPY Core (70% targeting 2&times; market returns),
            Strategy B &mdash; Futures &amp; Options (20% targeting 50% annual return), and Strategy C &mdash; Episodic Pivot (10% on opportunistic stock setups).
            All trades are executed in a real Interactive Brokers account and shared with full transparency.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">Is this investment advice?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            No. EPIG is for <strong class="text-white">informational and educational purposes only</strong>. We share our trades transparently so subscribers can learn from the methodology,
            but we do not advise anyone to replicate them. You decide whether, when, and how to act with your own capital.
            See our <a href="/disclosures" class="text-blue-400 no-underline">full disclosures</a>.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">Who is this for?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            Investors who want full transparency into a rules-based investment approach. Whether you follow the alerts in your own account,
            study the methodology, or simply want to track verified performance &mdash; EPIG is designed for serious, education-minded capital allocators.
          </div>
        </details>
      </div>
    </div>

    <!-- ── Data & Verification ── -->
    <div class="mb-10">
      <h2 class="text-lg font-bold mb-5 flex items-center gap-2">
        <i class="fas fa-shield-halved text-emerald-400"></i> Data & Verification
      </h2>
      <div class="space-y-1">
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">Is the trade data real?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            Yes. Every number comes from <strong class="text-white">IB Flex Query exports</strong> &mdash; standardized reports generated directly by Interactive Brokers.
            Each fill carries a unique IB TradeID. These are real executions, not backtests, paper trades, or hypotheticals.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">Can I verify the data myself?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            Absolutely. We can send the raw IB Flex Query CSV directly to you, or configure IB&rsquo;s third-party reporting
            to deliver brokerage statements straight from Interactive Brokers to your email. No middleman, no edits, no possibility of manipulation.
            Just ask via Discord.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">How often is the dashboard updated?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            Weekly. Every Monday, the latest IB Flex Query is exported and uploaded. The dashboard, performance projector,
            and all metrics refresh instantly. Discord alerts are real-time during market hours.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">Are commissions included in the P&L?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            Yes. All P&amp;L figures use IB&rsquo;s NetCash column, which is net of commissions, exchange fees, and regulatory fees.
            What you see on the dashboard is the actual money in/out of the account.
          </div>
        </details>
      </div>
    </div>

    <!-- ── Trading & Strategy ── -->
    <div class="mb-10">
      <h2 class="text-lg font-bold mb-5 flex items-center gap-2">
        <i class="fas fa-chart-line text-amber-400"></i> Trading & Strategy
      </h2>
      <div class="space-y-1">
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">What instruments are traded?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            <strong class="text-white">Strategy A &mdash; SPY Core:</strong> SPY (S&amp;P 500 ETF).<br>
            <strong class="text-white">Strategy B &mdash; Futures &amp; Options:</strong> Micro E-mini S&amp;P 500 (MES), E-mini S&amp;P 500 (ES) futures, plus options (SPY/SPX and single-name vertical spreads).<br>
            <strong class="text-white">Strategy C &mdash; Episodic Pivot:</strong> Opportunistic individual stock positions, sized by conviction.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">How much capital do I need to follow along?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            You can start very small. 1 MES contract requires roughly $1,500 margin and risks ~$30 per trade (20-point stop &times; $5/point).
            For Strategy B options, minimum risk is the debit paid for a spread (typically $50&ndash;$500 per trade).
            There is no minimum on our side &mdash; only your broker&rsquo;s requirements.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">What does &ldquo;R-multiple&rdquo; mean?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            R-multiple expresses trade P&amp;L as a multiple of risk. 1R = your average loss (the unit of risk).
            A +3R trade means profit of 3&times; your average loss. A -1R trade means an average-sized loss.
            This normalizes results so you can compare strategies regardless of position size.
          </div>
        </details>
        <details class="group kpi-card !p-0 overflow-hidden">
          <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-epig-cardHover transition-colors">
            <span class="font-semibold text-sm pr-4">What is &ldquo;EV per Trade&rdquo; and why does it matter?</span>
            <i class="fas fa-chevron-down text-epig-textDim text-xs transition-transform group-open:rotate-180"></i>
          </summary>
          <div class="px-5 pb-5 text-sm text-epig-textDim leading-relaxed">
            EV (Expected Value) per trade is the average amount you expect to make per trade in R-multiples.
            <strong class="text-white">A positive EV means the strategy makes money over time</strong>.
            Example: +0.46R means for every $1 risked, you expect to earn $0.46 on average. This is the single most important metric
            for evaluating any systematic trading approach.
          </div>
        </details>
      </div>
    </div>

    <!-- Still have questions -->
    <div class="text-center py-6">
      <p class="text-epig-textMuted text-sm mb-4">Still have questions?</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a href="mailto:info@ekantikcapital.com" class="btn-outline text-sm no-underline px-6 py-2.5">
          <i class="fas fa-envelope mr-2"></i>Email Us
        </a>
        <a href="/dashboard" class="btn-primary text-sm no-underline px-6 py-2.5">
          <i class="fas fa-chart-line mr-2"></i>View Dashboard
        </a>
      </div>
    </div>
  </div>
  `
}
