export function privacyPage(): string {
  return `
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-2">Privacy Policy</h1>
    <p class="text-epig-textDim text-sm mb-8">Last updated: February 1, 2026</p>

    <div class="space-y-6 text-sm text-epig-textDim leading-relaxed">
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Information We Collect</h2>
        <p class="mb-3">We collect the following information:</p>
        <ul class="list-disc list-inside space-y-1">
          <li><strong class="text-white">Email address</strong> &mdash; for weekly digest subscriptions and account management</li>
          <li><strong class="text-white">Discord ID</strong> &mdash; when you connect your Discord account for notifications</li>
          <li><strong class="text-white">Payment information</strong> &mdash; processed securely through Stripe; we do not store card details</li>
          <li><strong class="text-white">Usage data</strong> &mdash; anonymous analytics to improve the platform</li>
        </ul>
      </div>
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
        <p>Your information is used to: deliver the services you subscribe to, send weekly performance digests, manage your subscription, provide Discord access, and improve the platform. We do not sell your personal information to third parties.</p>
      </div>
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. Payment processing is handled by Stripe with PCI DSS compliance. All data transmission is encrypted via HTTPS.</p>
      </div>
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Third-Party Services</h2>
        <p>We use the following third-party services: Stripe (payments), Discord (notifications), and email service providers (weekly digests). Each has their own privacy policy governing the use of your information.</p>
      </div>
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at support@ekantikcapital.com. You may unsubscribe from emails using the link provided in each message.</p>
      </div>
      <div class="kpi-card">
        <h2 class="text-lg font-semibold text-white mb-3">Contact</h2>
        <p>For privacy-related inquiries, contact us at <a href="mailto:support@ekantikcapital.com" class="text-blue-400 no-underline">support@ekantikcapital.com</a>.</p>
      </div>
    </div>
  </div>
  `
}
