// Self-contained offline placeholder. Replaces the public landing
// and other consumer-facing pages while OFFLINE_MODE is true.
// Returns a complete HTML document (no layout wrapper) so it
// inherits no nav, no footer, and no waitlist form by accident.

export function offlinePage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EPIG — Offline | Ekantik Capital Advisors</title>
  <meta name="description" content="The site is paused while infrastructure is being built.">
  <meta name="robots" content="noindex, nofollow">
  <meta name="theme-color" content="#0a0e17">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
      background: #0a0e17;
      color: #f1f5f9;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 32px 24px;
      line-height: 1.6;
    }
    .container {
      max-width: 480px;
      width: 100%;
      text-align: center;
    }
    .logo {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 56px;
    }
    .logo-mark {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: #E5A418;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 11px;
      color: white;
      letter-spacing: 0.5px;
    }
    .logo-text { text-align: left; line-height: 1.05; }
    .logo-name {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: white;
    }
    .logo-sub {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.2em;
      color: #E5A418;
      text-transform: uppercase;
      margin-top: 2px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(200, 169, 81, 0.08);
      border: 1px solid rgba(200, 169, 81, 0.3);
      margin-bottom: 24px;
    }
    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #C8A951;
      box-shadow: 0 0 8px rgba(200, 169, 81, 0.7);
    }
    .badge-text {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #C8A951;
    }
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 400;
      font-size: clamp(36px, 7vw, 48px);
      color: white;
      margin: 0 0 16px 0;
      line-height: 1.05;
      letter-spacing: 0.005em;
    }
    .lede {
      font-family: 'Playfair Display', Georgia, serif;
      font-style: italic;
      color: #C8A951;
      font-size: 18px;
      margin: 0 0 36px 0;
      line-height: 1.4;
    }
    p {
      color: #94a3b8;
      font-size: 15px;
      line-height: 1.75;
      margin: 0 0 14px 0;
    }
    .contact {
      margin-top: 44px;
      padding-top: 24px;
      border-top: 1px solid #1e293b;
      font-size: 13px;
      color: #64748b;
    }
    .contact a {
      color: #C8A951;
      text-decoration: none;
      font-weight: 600;
    }
    .contact a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <main class="container">
    <div class="logo" aria-label="Ekantik Capital Advisors LLC">
      <div class="logo-mark" aria-hidden="true">ECA</div>
      <div class="logo-text">
        <div class="logo-name">Ekantik Capital</div>
        <div class="logo-sub">Advisors LLC</div>
      </div>
    </div>

    <div class="badge">
      <span class="badge-dot" aria-hidden="true"></span>
      <span class="badge-text">Offline</span>
    </div>

    <h1>The site is paused.</h1>
    <p class="lede">Infrastructure is being built. EPIG will return when activation conditions are met.</p>

    <p>This page is not currently accepting capital, enrolling members, or offering managed relationships.</p>

    <div class="contact">
      For inquiries: <a href="mailto:info@ekantikcapital.com">info@ekantikcapital.com</a>
    </div>
  </main>
</body>
</html>`
}
