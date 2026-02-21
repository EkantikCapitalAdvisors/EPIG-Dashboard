export function layout(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
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
  <!-- Navigation -->
  <nav class="sticky top-0 z-50 bg-epig-bg/95 backdrop-blur-md border-b border-epig-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <a href="/" class="flex items-center gap-3 text-white no-underline">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
              <span class="font-bold text-sm">E</span>
            </div>
            <span class="font-bold text-lg tracking-tight">EPIG</span>
          </a>
        </div>
        <div class="hidden md:flex items-center gap-6">
          <a href="/dashboard" class="nav-link">Dashboard</a>
          <a href="/calculator" class="nav-link">Calculator</a>
          <a href="/how-it-works" class="nav-link">How It Works</a>
          <a href="/pricing" class="nav-link">Pricing</a>
          <a href="/updates" class="nav-link flex items-center gap-1.5">Updates <span class="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">NEW</span></a>
          <a href="/admin" class="nav-link">Admin</a>
        </div>
        <div class="flex items-center gap-3">
          <a href="/pricing" class="btn-primary text-sm no-underline" style="padding:8px 20px;">Start Free Trial</a>
          <button id="mobile-menu-btn" class="md:hidden text-epig-textMuted hover:text-white">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-epig-border bg-epig-bg px-4 py-3">
      <div class="flex flex-col gap-3">
        <a href="/dashboard" class="nav-link py-2">Dashboard</a>
        <a href="/calculator" class="nav-link py-2">Calculator</a>
        <a href="/how-it-works" class="nav-link py-2">How It Works</a>
        <a href="/pricing" class="nav-link py-2">Pricing</a>
        <a href="/updates" class="nav-link py-2">Updates</a>
        <a href="/admin" class="nav-link py-2">Admin</a>
        <a href="/disclosures" class="nav-link py-2">Disclosures</a>
      </div>
    </div>
  </nav>

  <!-- Latest update banner -->
  <div class="bg-gradient-to-r from-emerald-600/15 via-blue-600/10 to-purple-600/15 border-b border-emerald-500/20">
    <div class="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-sm">
      <div class="pulse-dot"></div>
      <span class="text-emerald-400 font-semibold">Latest Update</span>
      <span class="text-epig-textMuted">Feb 17 &mdash; Weekly data uploaded: 12 new Strategy B trades, 3 Strategy C trades</span>
      <a href="/updates" class="text-blue-400 font-semibold hover:text-blue-300 no-underline">View all updates &rarr;</a>
    </div>
  </div>

  <!-- Main content -->
  <main>
    ${content}
  </main>

  <!-- Footer -->
  <footer class="border-t border-epig-border mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center">
              <span class="font-bold text-sm text-white">E</span>
            </div>
            <span class="font-bold text-lg text-white">EPIG Investment Design</span>
          </div>
          <p class="text-epig-textDim text-sm leading-relaxed">
            Structural protection, systematic income, and disciplined compounding&mdash;with full transparency.
          </p>
        </div>
        <div>
          <h4 class="font-semibold text-epig-text mb-4 text-sm uppercase tracking-wider">Platform</h4>
          <div class="flex flex-col gap-2">
            <a href="/dashboard" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Dashboard</a>
            <a href="/calculator" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Calculator</a>
            <a href="/pricing" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Pricing</a>
            <a href="/how-it-works" class="text-epig-textDim text-sm hover:text-epig-text no-underline">How It Works</a>
            <a href="/admin" class="text-epig-textDim text-sm hover:text-epig-text no-underline">Admin Console</a>
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
            <a href="#" class="text-epig-textDim text-sm hover:text-epig-text no-underline"><i class="fab fa-discord mr-2"></i>Discord Community</a>
            <a href="#" class="text-epig-textDim text-sm hover:text-epig-text no-underline"><i class="fab fa-twitter mr-2"></i>Twitter</a>
            <a href="mailto:support@ekantikcapital.com" class="text-epig-textDim text-sm hover:text-epig-text no-underline"><i class="fas fa-envelope mr-2"></i>Contact</a>
          </div>
        </div>
      </div>
      <div class="section-divider pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-epig-textDim text-xs">
          &copy; 2026 Ekantik Capital. All rights reserved. EPIG Investment Design is for informational and educational purposes only. Nothing herein constitutes investment advice.
        </p>
        <p class="text-epig-textDim text-xs">
          Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });
    // Active nav
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === window.location.pathname) link.classList.add('active');
    });
  </script>
</body>
</html>`
}
