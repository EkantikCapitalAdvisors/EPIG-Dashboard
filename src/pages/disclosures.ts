export function disclosuresPage(): string {
  return `
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-8">Disclosures & Risk Warnings</h1>

    <div class="space-y-8 text-sm text-epig-textDim leading-relaxed">
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">General Disclosure</h2>
        <p>
          EPIG Investment Design (&ldquo;EPIG&rdquo;) is operated by Ekantik Capital and is provided for
          <strong class="text-white">informational and educational purposes only</strong>. Nothing contained
          on this website constitutes investment advice, a solicitation, recommendation, endorsement,
          or offer by Ekantik Capital or any third-party service provider to buy or sell any securities
          or other financial instruments.
        </p>
      </div>

      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">No Investment Advice</h2>
        <p>
          EPIG does not provide personalized investment advice. The information shared through the platform,
          including trade notifications, dashboard data, and performance metrics, is not tailored to the
          investment needs of any specific person. You should not rely on this information to make or refrain
          from making any investment decisions.
        </p>
      </div>

      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Past Performance</h2>
        <p>
          <strong class="text-white">Past performance is not indicative of future results.</strong>
          All performance data displayed on the EPIG dashboard represents historical trades executed in
          real accounts verified via Interactive Brokers execution reports. However, past results do not
          guarantee future performance. The value of investments can go down as well as up, and you may
          receive back less than you invest.
        </p>
      </div>

      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Risk of Loss</h2>
        <p>
          Trading futures and options involves substantial risk of loss and is not suitable for all investors.
          You should carefully consider whether trading is suitable for you in light of your financial condition.
          You could lose substantially more than your initial investment. Do not use capital you cannot afford to lose.
        </p>
      </div>

      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Hypothetical Performance</h2>
        <p>
          The 3-Strategy Calculator on this website produces hypothetical, illustrative results based on
          user-defined inputs. These projections do not represent actual trading performance and should not
          be interpreted as predictions of future returns. Hypothetical performance has many inherent
          limitations, including the benefit of hindsight.
        </p>
      </div>

      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Data Accuracy</h2>
        <p>
          While we strive to ensure the accuracy of all data presented on the EPIG platform,
          Ekantik Capital does not warrant or guarantee the completeness, accuracy, or reliability
          of any information. Trade data is sourced from Interactive Brokers execution reports and
          is subject to the accuracy of those reports.
        </p>
      </div>
    </div>
  </div>
  `
}
