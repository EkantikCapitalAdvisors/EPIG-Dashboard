interface SocialMeta {
  title?: string
  description?: string
  path?: string
  image?: string
}

const SITE_URL = 'https://epig-dashboard.pages.dev'
const DEFAULT_DESCRIPTION = 'Verified IB trade data \u00b7 3 integrated strategies \u00b7 Full transparency. See exactly how we protect capital and compound returns \u2014 every trade tracked from a live brokerage account.'
const DEFAULT_IMAGE = SITE_URL + '/static/og-image.png'

export function layout(title: string, content: string, social?: SocialMeta): string {
  const ogTitle = social?.title || title
  const ogDesc = social?.description || DEFAULT_DESCRIPTION
  const ogImage = social?.image || DEFAULT_IMAGE
  const ogUrl = SITE_URL + (social?.path || '/')

  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>

  <!-- Primary Meta Tags -->
  <meta name="title" content="${ogTitle}">
  <meta name="description" content="${ogDesc}">
  <meta name="author" content="Ekantik Capital Advisors LLC">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${ogUrl}">

  <!-- Open Graph / Facebook / WhatsApp / Telegram / LinkedIn -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${ogUrl}">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${ogDesc}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:site_name" content="EPIG Investment Design">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${ogUrl}">
  <meta name="twitter:title" content="${ogTitle}">
  <meta name="twitter:description" content="${ogDesc}">
  <meta name="twitter:image" content="${ogImage}">

  <!-- WhatsApp / Telegram specifics (they read og: tags primarily) -->
  <!-- Additional Telegram-specific -->
  <meta name="telegram:channel" content="@ekantikcapital">

  <!-- Apple / Mobile -->
  <meta name="apple-mobile-web-app-title" content="EPIG">
  <meta name="theme-color" content="#0a0e17">
  <meta name="msapplication-TileColor" content="#0a0e17">

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            epig: {
              bg: '#0a0e17',
              card: '#111827',
              cardHover: '#1a2332',
              border: '#1e293b',
              borderLight: '#2d3a4d',
              accent: '#3b82f6',
              accentHover: '#2563eb',
              green: '#10b981',
              greenDark: '#059669',
              red: '#ef4444',
              redDark: '#dc2626',
              gold: '#f59e0b',
              text: '#f1f5f9',
              textMuted: '#94a3b8',
              textDim: '#64748b',
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Montserrat:wght@600;700;800&family=Playfair+Display:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <style>
    * { scrollbar-width: thin; scrollbar-color: #1e293b #0a0e17; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #0a0e17; }
    ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 3px; }
    body { font-family: 'Inter', system-ui, sans-serif; background: #0a0e17; color: #f1f5f9; }
    .kpi-card { background: #111827; border: 1px solid #1e293b; border-radius: 12px; padding: 20px 24px; transition: all 0.2s; }
    .kpi-card:hover { border-color: #2d3a4d; background: #1a2332; }
    .kpi-value { font-family: 'JetBrains Mono', monospace; font-size: 1.75rem; font-weight: 700; }
    .kpi-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-bottom: 4px; }
    .strategy-tab { padding: 10px 24px; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.2s; background: transparent; color: #64748b; border: 1px solid transparent; }
    .strategy-tab:hover { color: #94a3b8; background: #111827; }
    .strategy-tab.active { background: #1e293b; color: #f1f5f9; border-color: #3b82f6; }
    .chart-container { background: #111827; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; }
    .btn-primary { background: #3b82f6; color: #fff; padding: 12px 28px; border-radius: 8px; font-weight: 600; transition: all 0.2s; border: none; cursor: pointer; }
    .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }
    .btn-outline { border: 1px solid #3b82f6; color: #3b82f6; padding: 12px 28px; border-radius: 8px; font-weight: 600; transition: all 0.2s; background: transparent; cursor: pointer; }
    .btn-outline:hover { background: rgba(59,130,246,0.1); }
    .section-divider { border-top: 1px solid #1e293b; }
    .glass-card { background: rgba(17,24,39,0.8); backdrop-filter: blur(12px); border: 1px solid #1e293b; border-radius: 12px; }
    .gradient-text { background: linear-gradient(135deg, #3b82f6, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .pulse-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    .slide-up { animation: slideUp 0.6s ease-out; }
    @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .trade-row:hover { background: #1a2332; }
    .win-badge { background: rgba(16,185,129,0.15); color: #10b981; padding: 2px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .loss-badge { background: rgba(239,68,68,0.15); color: #ef4444; padding: 2px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .nav-link { color: #94a3b8; font-size: 0.875rem; font-weight: 500; transition: color 0.2s; text-decoration: none; }
    .nav-link:hover { color: #f1f5f9; }
    .nav-link.active { color: #3b82f6; }
    input[type="range"] { -webkit-appearance: none; appearance: none; background: #1e293b; height: 6px; border-radius: 3px; outline: none; }
    input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #3b82f6; cursor: pointer; border: 2px solid #0a0e17; }
    .heatmap-cell { width: 100%; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 600; border-radius: 4px; }
  </style>
</head>
<body class="min-h-screen">
  <!-- Founding Member Banner -->
  <div id="founding-banner" style="background:#C8A951;color:#1B2A4A;font-size:13px;text-align:center;padding:8px 40px 8px 8px;position:relative;">
    EPIG is a managed strategy within the Ekantik Capital Financial Freedom program. Founding memberships limited to 25.
    <a href="https://freedom.ekantikcapital.com#membership" style="color:#1B2A4A;font-weight:600;text-decoration:underline;margin-left:4px;">Learn more &rarr;</a>
    <button id="dismiss-banner" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#1B2A4A;cursor:pointer;font-size:16px;padding:4px 8px;line-height:1;" aria-label="Dismiss banner">&times;</button>
  </div>

  <!-- Navigation -->
  <nav class="sticky top-0 z-50 bg-epig-bg/95 backdrop-blur-md border-b border-epig-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <a href="/" class="flex items-center gap-3 text-white no-underline">
            <div class="w-9 h-9 rounded-lg flex items-center justify-center" style="background:#E5A418;">
              <span class="font-bold text-xs text-white" style="font-family:'Montserrat',sans-serif;letter-spacing:0.5px;">ECA</span>
            </div>
            <div class="hidden sm:flex flex-col leading-none">
              <span class="font-bold text-[15px] text-white tracking-tight" style="font-family:'Montserrat',sans-serif;">Ekantik Capital</span>
              <span class="text-[9px] font-semibold uppercase tracking-[0.2em]" style="color:#E5A418;">Advisors LLC</span>
            </div>
          </a>
        </div>
        <div class="hidden md:flex items-center gap-6">
          <a href="/" class="nav-link">Home</a>
          <a href="/dashboard" class="nav-link">Live Dashboard</a>
          <a href="/projector" class="nav-link">Projector</a>
          <a href="/disclosures" class="nav-link">Disclosures</a>
          <a href="https://freedom.ekantikcapital.com" class="no-underline" style="background:#C8A951;color:#1B2A4A;font-weight:600;border-radius:6px;padding:8px 20px;font-size:0.875rem;">Become a Founding Member</a>
        </div>
        <div class="flex items-center gap-3">
          <a href="https://freedom.ekantikcapital.com" class="md:hidden no-underline text-xs" style="background:#C8A951;color:#1B2A4A;font-weight:600;border-radius:6px;padding:6px 14px;">Founding Member</a>
          <button id="mobile-menu-btn" class="md:hidden text-epig-textMuted hover:text-white">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-epig-border bg-epig-bg px-4 py-3">
      <div class="flex flex-col gap-3">
        <a href="/" class="nav-link py-2">Home</a>
        <a href="/dashboard" class="nav-link py-2">Live Dashboard</a>
        <a href="/projector" class="nav-link py-2">Projector</a>
        <a href="/disclosures" class="nav-link py-2">Disclosures</a>
      </div>
    </div>
  </nav>

  <!-- Main content -->
  <main>
    ${content}
  </main>

  <!-- Floating Share Sidebar (Desktop) -->
  <div id="share-sidebar" class="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1 py-3 px-1.5 rounded-r-xl" style="background:rgba(17,24,39,0.92);border:1px solid #1e293b;border-left:none;backdrop-filter:blur(12px);">
    <span class="text-[9px] font-bold uppercase tracking-[0.15em] text-epig-textDim mb-2">Share</span>
    <a id="share-linkedin" href="#" target="_blank" rel="noopener" title="Share on LinkedIn"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2]/15 transition-colors">
      <i class="fab fa-linkedin-in text-lg"></i>
    </a>
    <a id="share-facebook" href="#" target="_blank" rel="noopener" title="Share on Facebook"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2]/15 transition-colors">
      <i class="fab fa-facebook-f text-lg"></i>
    </a>
    <a id="share-twitter" href="#" target="_blank" rel="noopener" title="Share on Twitter/X"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors">
      <i class="fab fa-x-twitter text-lg"></i>
    </a>
    <a id="share-whatsapp" href="#" target="_blank" rel="noopener" title="Share on WhatsApp"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/15 transition-colors">
      <i class="fab fa-whatsapp text-lg"></i>
    </a>
    <a id="share-telegram" href="#" target="_blank" rel="noopener" title="Share on Telegram"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-[#26A5E4] hover:bg-[#26A5E4]/15 transition-colors">
      <i class="fab fa-telegram-plane text-lg"></i>
    </a>
    <a id="share-email" href="#" title="Share via Email"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-epig-textMuted hover:bg-white/10 transition-colors">
      <i class="fas fa-envelope text-base"></i>
    </a>
    <button id="share-copy" title="Copy link"
       class="w-10 h-10 rounded-lg flex items-center justify-center text-amber-400 hover:bg-amber-400/15 transition-colors cursor-pointer border-0 bg-transparent">
      <i class="fas fa-link text-base"></i>
    </button>
  </div>

  <!-- Mobile Share FAB -->
  <button id="share-fab" class="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer border-0" aria-label="Share">
    <i class="fas fa-share-nodes text-xl"></i>
  </button>
  <!-- Mobile Share Popup -->
  <div id="share-mobile" class="lg:hidden fixed bottom-24 right-6 z-40 hidden rounded-2xl p-4 w-56" style="background:rgba(17,24,39,0.97);border:1px solid #1e293b;backdrop-filter:blur(12px);">
    <span class="text-xs font-bold uppercase tracking-widest text-epig-textDim block mb-3">Share this page</span>
    <div class="grid grid-cols-4 gap-2">
      <a id="m-share-linkedin" href="#" target="_blank" rel="noopener" class="w-11 h-11 rounded-lg flex items-center justify-center text-[#0A66C2] bg-[#0A66C2]/10"><i class="fab fa-linkedin-in"></i></a>
      <a id="m-share-facebook" href="#" target="_blank" rel="noopener" class="w-11 h-11 rounded-lg flex items-center justify-center text-[#1877F2] bg-[#1877F2]/10"><i class="fab fa-facebook-f"></i></a>
      <a id="m-share-twitter" href="#" target="_blank" rel="noopener" class="w-11 h-11 rounded-lg flex items-center justify-center text-white bg-white/10"><i class="fab fa-x-twitter"></i></a>
      <a id="m-share-whatsapp" href="#" target="_blank" rel="noopener" class="w-11 h-11 rounded-lg flex items-center justify-center text-[#25D366] bg-[#25D366]/10"><i class="fab fa-whatsapp"></i></a>
      <a id="m-share-telegram" href="#" target="_blank" rel="noopener" class="w-11 h-11 rounded-lg flex items-center justify-center text-[#26A5E4] bg-[#26A5E4]/10"><i class="fab fa-telegram-plane"></i></a>
      <a id="m-share-email" href="#" class="w-11 h-11 rounded-lg flex items-center justify-center text-epig-textMuted bg-white/5"><i class="fas fa-envelope"></i></a>
      <button id="m-share-copy" class="w-11 h-11 rounded-lg flex items-center justify-center text-amber-400 bg-amber-400/10 cursor-pointer border-0"><i class="fas fa-link"></i></button>
    </div>
  </div>

  <!-- Footer -->
  <footer class="border-t border-epig-border mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background:#E5A418;">
              <span class="font-bold text-xs text-white" style="font-family:'Montserrat',sans-serif;letter-spacing:0.5px;">ECA</span>
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-bold text-[15px] text-white" style="font-family:'Montserrat',sans-serif;">Ekantik Capital</span>
              <span class="text-[9px] font-semibold uppercase tracking-[0.2em]" style="color:#E5A418;">Advisors LLC</span>
            </div>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed">
            EPIG is a managed investment strategy within the Ekantik Capital Financial Freedom program.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-epig-text mb-4 text-sm uppercase tracking-wider">Platform</h4>
          <div class="flex flex-col gap-2">
            <a href="/dashboard" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Dashboard</a>
            <a href="/projector" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Performance Projector</a>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-epig-text mb-4 text-sm uppercase tracking-wider">Program</h4>
          <div class="flex flex-col gap-2">
            <a href="https://freedom.ekantikcapital.com" target="_blank" rel="noopener" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Financial Freedom Program</a>
            <a href="https://dashboard.ekantikcapital.com" target="_blank" rel="noopener" class="text-epig-textDim text-sm hover:text-epig-text no-underline">ECFS Live Performance</a>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-epig-text mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <div class="flex flex-col gap-2">
            <a href="/disclosures" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Disclosures</a>
            <a href="/terms" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Terms of Service</a>
            <a href="/privacy" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Privacy Policy</a>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-epig-text mb-4 text-sm uppercase tracking-wider">Connect</h4>
          <div class="flex flex-col gap-2">
            <a href="https://x.com/ekantikcapital" target="_blank" rel="noopener" class="text-epig-textDim text-sm hover:text-epig-text no-underline"><i class="fab fa-x-twitter mr-2"></i>X (formerly Twitter)</a>
            <a href="mailto:info@ekantikcapital.com" class="text-epig-textDim text-sm hover:text-epig-text no-underline"><i class="fas fa-envelope mr-2"></i>Contact</a>
          </div>
        </div>
      </div>
      <div class="section-divider pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-epig-textDim text-xs">
          &copy; 2026 Ekantik Capital Advisors LLC. All rights reserved. EPIG Investment Design is for informational and educational purposes only. Nothing herein constitutes investment advice.
        </p>
        <p class="text-epig-textDim text-xs">
          Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  </footer>

  <script>
    // Founding member banner dismiss
    (function() {
      const banner = document.getElementById('founding-banner');
      if (banner && sessionStorage.getItem('bannerDismissed')) {
        banner.style.display = 'none';
      }
      document.getElementById('dismiss-banner')?.addEventListener('click', () => {
        if (banner) banner.style.display = 'none';
        sessionStorage.setItem('bannerDismissed', '1');
      });
    })();

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });
    // Active nav
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === window.location.pathname) link.classList.add('active');
    });

    // ══════════════════════════════════════
    // SHARE WIDGET — populate share URLs
    // ══════════════════════════════════════
    (function initShareWidget() {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      const text = encodeURIComponent(
        'Check out EPIG Investment Design — verified trade performance from a live IB account. 3 integrated strategies, full transparency.'
      );

      // Desktop sidebar links
      const setHref = (id, href) => { const el = document.getElementById(id); if (el) el.href = href; };
      setHref('share-linkedin',  'https://www.linkedin.com/sharing/share-offsite/?url=' + url);
      setHref('share-facebook',  'https://www.facebook.com/sharer/sharer.php?u=' + url);
      setHref('share-twitter',   'https://x.com/intent/tweet?url=' + url + '&text=' + text);
      setHref('share-whatsapp',  'https://wa.me/?text=' + text + '%20' + url);
      setHref('share-telegram',  'https://t.me/share/url?url=' + url + '&text=' + text);
      setHref('share-email',     'mailto:?subject=' + title + '&body=' + text + '%0A%0A' + url);

      // Mobile links (same URLs, prefixed m-)
      setHref('m-share-linkedin',  'https://www.linkedin.com/sharing/share-offsite/?url=' + url);
      setHref('m-share-facebook',  'https://www.facebook.com/sharer/sharer.php?u=' + url);
      setHref('m-share-twitter',   'https://x.com/intent/tweet?url=' + url + '&text=' + text);
      setHref('m-share-whatsapp',  'https://wa.me/?text=' + text + '%20' + url);
      setHref('m-share-telegram',  'https://t.me/share/url?url=' + url + '&text=' + text);
      setHref('m-share-email',     'mailto:?subject=' + title + '&body=' + text + '%0A%0A' + url);

      // Copy link button
      function copyLink(btn) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          const icon = btn.querySelector('i');
          icon.className = 'fas fa-check text-base';
          btn.title = 'Copied!';
          setTimeout(() => { icon.className = 'fas fa-link text-base'; btn.title = 'Copy link'; }, 2000);
        });
      }
      document.getElementById('share-copy')?.addEventListener('click', function() { copyLink(this); });
      document.getElementById('m-share-copy')?.addEventListener('click', function() { copyLink(this); });

      // Mobile FAB toggle
      const fab = document.getElementById('share-fab');
      const mobile = document.getElementById('share-mobile');
      fab?.addEventListener('click', () => {
        mobile?.classList.toggle('hidden');
        const icon = fab.querySelector('i');
        if (mobile?.classList.contains('hidden')) {
          icon.className = 'fas fa-share-nodes text-xl';
        } else {
          icon.className = 'fas fa-times text-xl';
        }
      });
      // Close mobile popup when clicking outside
      document.addEventListener('click', (e) => {
        if (!fab?.contains(e.target) && !mobile?.contains(e.target)) {
          mobile?.classList.add('hidden');
          const icon = fab?.querySelector('i');
          if (icon) icon.className = 'fas fa-share-nodes text-xl';
        }
      });
    })();
  </script>
</body>
</html>`
}
