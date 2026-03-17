export function adminPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-1">Admin Console</h1>
        <p class="text-epig-textMuted">Phase 1 &mdash; IB Upload with Auto-Classification &amp; Review</p>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="text-epig-textDim">Admin</span>
      </div>
    </div>

    <!-- Upload Section (full width — sole focus) -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
        <i class="fas fa-upload text-blue-400"></i>
        Step 1: Upload IB Flex Query
      </h2>
      <p class="text-sm text-epig-textDim mb-4">
        Upload your Interactive Brokers Flex Query CSV. Trades are <strong class="text-white">auto-classified</strong>
        by asset class: <span class="text-blue-400">SPY &rarr; Strategy A</span>,
        <span class="text-emerald-400">FUT/FOP/market OPT &rarr; Strategy B</span>,
        <span class="text-amber-400">non-SPY STK/stock OPT &rarr; Strategy C</span>.
        You can change any assignment before confirming.
        <a href="/how-it-works#flex-query-setup" class="text-blue-400 no-underline hover:text-blue-300 ml-1">
          <i class="fas fa-question-circle mr-0.5"></i>How to create a Flex Query
        </a>
      </p>
      <div class="border-2 border-dashed border-epig-border rounded-xl p-10 text-center mb-4 hover:border-blue-500/50 transition-colors cursor-pointer"
           id="upload-zone"
           ondragover="event.preventDefault(); this.classList.add('border-blue-500');"
           ondragleave="this.classList.remove('border-blue-500');"
           ondrop="handleFileDrop(event)">
        <i class="fas fa-cloud-upload-alt text-4xl text-epig-textDim mb-3"></i>
        <p class="text-sm text-epig-textDim mb-2">Drag &amp; drop IB Flex Query CSV here</p>
        <p class="text-xs text-epig-textDim">or</p>
        <label class="btn-outline inline-block mt-3 cursor-pointer text-sm" style="padding: 8px 20px;">
          <i class="fas fa-folder-open mr-1"></i> Browse Files
          <input type="file" accept=".csv,.xml" class="hidden" onchange="handleFileSelect(event)">
        </label>
      </div>
      <button class="btn-primary text-sm w-full" onclick="parseUpload()" id="parse-btn">
        <i class="fas fa-search mr-1"></i> Parse &amp; Auto-Classify
      </button>
      <div id="upload-status" class="hidden text-sm p-3 rounded-lg mt-3"></div>
    </div>

    <!-- Step 2: Review & Confirm (hidden until parse completes) -->
    <div id="review-section" class="hidden mb-8">
      <div class="kpi-card">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-bold text-lg flex items-center gap-2">
            <i class="fas fa-clipboard-check text-emerald-400"></i>
            Step 2: Review &amp; Confirm
          </h2>
          <div class="flex items-center gap-3">
            <button class="text-xs text-epig-textDim hover:text-white transition-colors" onclick="setAllStrategy('A')">
              All &rarr; A
            </button>
            <button class="text-xs text-epig-textDim hover:text-white transition-colors" onclick="setAllStrategy('B')">
              All &rarr; B
            </button>
            <button class="text-xs text-epig-textDim hover:text-white transition-colors" onclick="setAllStrategy('C')">
              All &rarr; C
            </button>
            <button class="text-xs text-epig-textDim hover:text-white transition-colors" onclick="resetStrategies()">
              Reset Auto
            </button>
          </div>
        </div>

        <!-- Summary Banner -->
        <div id="review-summary" class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4"></div>

        <!-- Filter Tabs -->
        <div class="flex gap-2 mb-4" id="filter-tabs">
          <button class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/30" onclick="filterTrades('all')" data-filter="all">
            All <span id="count-all"></span>
          </button>
          <button class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-epig-card text-epig-textDim border border-epig-border" onclick="filterTrades('A')" data-filter="A">
            <span class="text-blue-400">A</span> SPY <span id="count-A"></span>
          </button>
          <button class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-epig-card text-epig-textDim border border-epig-border" onclick="filterTrades('B')" data-filter="B">
            <span class="text-emerald-400">B</span> FUT/OPT <span id="count-B"></span>
          </button>
          <button class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-epig-card text-epig-textDim border border-epig-border" onclick="filterTrades('C')" data-filter="C">
            <span class="text-amber-400">C</span> Stocks/OPT <span id="count-C"></span>
          </button>
        </div>

        <!-- Trade Review Table -->
        <div class="overflow-x-auto max-h-[500px] overflow-y-auto">
          <table class="w-full text-sm" id="review-table">
            <thead class="sticky top-0 bg-epig-card z-10">
              <tr class="border-b border-epig-border">
                <th class="text-left px-2 py-2 text-epig-textDim font-medium w-20">Strategy</th>
                <th class="text-left px-2 py-2 text-epig-textDim font-medium">Class</th>
                <th class="text-left px-2 py-2 text-epig-textDim font-medium">Spread</th>
                <th class="text-left px-2 py-2 text-epig-textDim font-medium">Date</th>
                <th class="text-left px-2 py-2 text-epig-textDim font-medium">Side</th>
                <th class="text-left px-2 py-2 text-epig-textDim font-medium">Symbol</th>
                <th class="text-right px-2 py-2 text-epig-textDim font-medium">Strike</th>
                <th class="text-right px-2 py-2 text-epig-textDim font-medium">Qty</th>
                <th class="text-right px-2 py-2 text-epig-textDim font-medium">Price</th>
                <th class="text-right px-2 py-2 text-epig-textDim font-medium">Net Cash</th>
                <th class="text-left px-2 py-2 text-epig-textDim font-medium">TradeID</th>
              </tr>
            </thead>
            <tbody id="review-tbody"></tbody>
          </table>
        </div>

        <!-- Confirm Button -->
        <div class="mt-4 flex items-center justify-between">
          <p class="text-xs text-epig-textDim">
            <i class="fas fa-info-circle mr-1"></i>
            Change any strategy assignment using the dropdown. Duplicates (same TradeID) are auto-skipped.
          </p>
          <button class="btn-primary text-sm" onclick="confirmIngest()" id="confirm-btn" style="padding: 10px 24px;">
            <i class="fas fa-database mr-1"></i> Confirm &amp; Ingest <span id="ingest-count"></span> Trades
          </button>
        </div>
        <div id="confirm-status" class="hidden text-sm p-3 rounded-lg mt-3"></div>
      </div>
    </div>

    <!-- Audit Trail -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
        <i class="fas fa-scroll text-blue-400"></i>
        Audit Trail
      </h2>
      <div id="audit-trail" class="overflow-x-auto">
        <div class="text-sm text-epig-textDim">Loading...</div>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6" id="admin-stats">
      <div class="kpi-card text-center">
        <div class="kpi-label">Total Trades</div>
        <div class="kpi-value text-white" id="stat-trades">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">Strategy A</div>
        <div class="kpi-value text-blue-400" id="stat-a">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">Strategy B</div>
        <div class="kpi-value text-emerald-400" id="stat-b">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">Strategy C</div>
        <div class="kpi-value text-amber-400" id="stat-c">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">DB Status</div>
        <div class="kpi-value text-blue-400 text-lg" id="stat-db">...</div>
      </div>
    </div>

    <!-- Upload History -->
    <div class="kpi-card mb-6">
      <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
        <i class="fas fa-history text-blue-400"></i>
        Upload History
      </h2>
      <div id="upload-history" class="text-sm text-epig-textDim">Loading...</div>
    </div>

    <!-- Wipe & Re-import -->
    <div class="kpi-card mb-6 border border-red-900/30">
      <h2 class="font-bold text-lg mb-2 flex items-center gap-2">
        <i class="fas fa-trash-alt text-red-400"></i>
        Reset Trades
      </h2>
      <p class="text-sm text-epig-textDim mb-3">
        Delete all trades and upload history for a clean re-import. This cannot be undone.
      </p>
      <button class="bg-red-700 hover:bg-red-600 text-white text-sm font-bold px-4 py-2 rounded transition-colors"
        onclick="wipeTrades()" id="wipe-btn">
        <i class="fas fa-exclamation-triangle mr-1"></i> Wipe All Trades
      </button>
      <div id="wipe-status" class="hidden text-sm p-3 rounded-lg mt-3"></div>
    </div>

    <!-- Strategy A Allocation (collapsible — separate from upload flow) -->
    <div class="kpi-card mb-6">
      <button class="w-full flex items-center justify-between" onclick="document.getElementById('alloc-panel').classList.toggle('hidden'); this.querySelector('.alloc-arrow').classList.toggle('rotate-180');">
        <h2 class="font-bold text-lg flex items-center gap-2">
          <i class="fas fa-chart-pie text-blue-400"></i>
          Strategy A &mdash; Allocation Snapshot
        </h2>
        <i class="fas fa-chevron-down text-epig-textDim alloc-arrow transition-transform duration-200"></i>
      </button>
      <div id="alloc-panel" class="hidden mt-4">
        <p class="text-sm text-epig-textDim mb-4">
          Record a new allocation split for Strategy A. This is separate from trade uploads &mdash;
          it tracks how the portfolio is allocated across SPY, individual stocks, and cash.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div>
            <label class="text-sm text-epig-textDim mb-1 block">SPY %</label>
            <input type="number" value="80" min="70" max="100"
              class="w-full bg-epig-bg border border-epig-border rounded px-3 py-2 font-mono text-white focus:outline-none focus:border-blue-500"
              id="alloc-spy">
          </div>
          <div>
            <label class="text-sm text-epig-textDim mb-1 block">Stock Sleeve %</label>
            <input type="number" value="15" min="0" max="25"
              class="w-full bg-epig-bg border border-epig-border rounded px-3 py-2 font-mono text-white focus:outline-none focus:border-blue-500"
              id="alloc-stock">
          </div>
          <div>
            <label class="text-sm text-epig-textDim mb-1 block">Cash %</label>
            <input type="number" value="5" readonly
              class="w-full bg-epig-bg border border-epig-border rounded px-3 py-2 font-mono text-epig-textDim"
              id="alloc-cash">
          </div>
          <div>
            <label class="text-sm text-epig-textDim mb-1 block">Notes</label>
            <input type="text"
              class="w-full bg-epig-bg border border-epig-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              id="alloc-notes" placeholder="Optional reason...">
          </div>
        </div>
        <div class="mt-4">
          <button class="btn-primary text-sm" onclick="saveSnapshot()" style="padding: 10px 24px;">
            <i class="fas fa-save mr-1"></i> Save Snapshot
          </button>
          <div id="snapshot-status" class="hidden text-sm p-3 rounded-lg mt-3"></div>
        </div>
      </div>
    </div>

    <!-- SPY Benchmark Prices -->
    <div class="kpi-card">
      <button class="w-full flex items-center justify-between" onclick="document.getElementById('spy-panel').classList.toggle('hidden'); this.querySelector('.spy-arrow').classList.toggle('rotate-180');">
        <h2 class="font-bold text-lg flex items-center gap-2">
          <i class="fas fa-chart-line text-slate-400"></i>
          SPY Benchmark Prices
        </h2>
        <i class="fas fa-chevron-down text-epig-textDim spy-arrow transition-transform duration-200"></i>
      </button>
      <div id="spy-panel" class="hidden mt-4">
        <p class="text-sm text-epig-textDim mb-4">
          Refresh SPY daily close prices used for the benchmark line on the equity curve.
          Prices are cached in the database and auto-refresh when stale.
        </p>
        <div class="flex items-center gap-4">
          <button class="btn-primary text-sm" onclick="refreshSPY()" id="spy-refresh-btn" style="padding: 10px 24px;">
            <i class="fas fa-sync-alt mr-1"></i> Refresh SPY Prices
          </button>
          <span id="spy-count" class="text-sm text-epig-textDim"></span>
        </div>
        <div id="spy-status" class="hidden text-sm p-3 rounded-lg mt-3"></div>
      </div>
    </div>
  </div>

  <script>
    let selectedFile = null;
    let parsedTrades = [];      // full parsed array from server
    let originalStrategies = []; // auto-classified strategies (for reset)
    let currentFilter = 'all';
    let uploadFilename = '';

    // ══════════════════════════════════════════════════
    // Page Load
    // ══════════════════════════════════════════════════
    async function loadAdminData() {
      try {
        const healthRes = await fetch('/api/health');
        const health = await healthRes.json();
        document.getElementById('stat-trades').textContent = health.trades || '0';
        document.getElementById('stat-db').textContent = health.status === 'ok' ? 'Connected' : health.status;

        // Per-strategy counts
        try {
          const stratRes = await fetch('/api/admin/strategy-counts');
          const strat = await stratRes.json();
          document.getElementById('stat-a').textContent = strat.A || '0';
          document.getElementById('stat-b').textContent = strat.B || '0';
          document.getElementById('stat-c').textContent = strat.C || '0';
        } catch(e) {
          document.getElementById('stat-a').textContent = '-';
          document.getElementById('stat-b').textContent = '-';
          document.getElementById('stat-c').textContent = '-';
        }
      } catch(e) {
        document.getElementById('stat-db').textContent = 'Offline';
      }

      // Audit trail
      try {
        const auditRes = await fetch('/api/admin/audit');
        const audit = await auditRes.json();
        const el = document.getElementById('audit-trail');
        if (audit.entries && audit.entries.length > 0) {
          el.innerHTML = '<table class="w-full text-sm"><thead><tr class="border-b border-epig-border">' +
            '<th class="text-left px-3 py-2 text-epig-textDim font-medium">Timestamp</th>' +
            '<th class="text-left px-3 py-2 text-epig-textDim font-medium">Action</th>' +
            '<th class="text-left px-3 py-2 text-epig-textDim font-medium">Entity</th>' +
            '<th class="text-left px-3 py-2 text-epig-textDim font-medium">Details</th>' +
            '</tr></thead><tbody>' +
            audit.entries.map(e =>
              '<tr class="border-b border-epig-border/30"><td class="px-3 py-2 font-mono text-xs">' + e.timestamp +
              '</td><td class="px-3 py-2"><span class="text-xs bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded">' + e.action +
              '</span></td><td class="px-3 py-2">' + e.entity +
              '</td><td class="px-3 py-2 text-epig-textDim">' + (e.details || '') + '</td></tr>'
            ).join('') + '</tbody></table>';
        } else {
          el.innerHTML = '<p class="text-sm text-epig-textDim">No audit entries yet.</p>';
        }
      } catch(e) {}

      // Upload history
      try {
        const uploadsRes = await fetch('/api/admin/uploads');
        const uploads = await uploadsRes.json();
        const el = document.getElementById('upload-history');
        if (uploads.batches && uploads.batches.length > 0) {
          el.innerHTML = uploads.batches.map(b =>
            '<div class="flex items-center justify-between py-2 border-b border-epig-border/30">' +
            '<div><span class="font-mono text-xs">' + b.uploaded_at + '</span> ' +
            '<span class="ml-2 font-semibold text-white">' + b.filename + '</span></div>' +
            '<div class="flex gap-3">' +
            '<span class="text-emerald-400 text-xs">' + b.trades_new + ' new</span>' +
            '<span class="text-amber-400 text-xs">' + b.trades_duplicate + ' dup</span>' +
            '<span class="text-xs bg-' + (b.status==='complete'?'emerald':'blue') + '-500/15 text-' +
            (b.status==='complete'?'emerald':'blue') + '-400 px-2 py-0.5 rounded">' + b.status + '</span></div></div>'
          ).join('');
        } else {
          el.textContent = 'No uploads yet.';
        }
      } catch(e) {}
    }
    loadAdminData();

    // ══════════════════════════════════════════════════
    // File Handling
    // ══════════════════════════════════════════════════
    function handleFileDrop(e) {
      e.preventDefault();
      e.target.classList.remove('border-blue-500');
      const file = e.dataTransfer.files[0];
      if (file) { selectedFile = file; showStatus('upload-status', 'File selected: ' + file.name + ' (' + (file.size/1024).toFixed(1) + ' KB)', 'info'); }
    }

    function handleFileSelect(e) {
      const file = e.target.files[0];
      if (file) { selectedFile = file; showStatus('upload-status', 'File selected: ' + file.name + ' (' + (file.size/1024).toFixed(1) + ' KB)', 'info'); }
    }

    // ══════════════════════════════════════════════════
    // Step 1: Parse & Preview
    // ══════════════════════════════════════════════════
    async function parseUpload() {
      if (!selectedFile) { showStatus('upload-status', 'Please select a file first.', 'error'); return; }

      const btn = document.getElementById('parse-btn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Parsing...';
      showStatus('upload-status', 'Parsing ' + selectedFile.name + '...', 'info');

      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const res = await fetch('/api/admin/upload/preview', { method: 'POST', body: formData });
        const data = await res.json();

        if (data.success) {
          parsedTrades = data.trades;
          originalStrategies = data.trades.map(t => t.strategy);
          uploadFilename = data.summary.filename;

          const spreadMsg = data.summary.spreads && data.summary.spreads.detected > 0
            ? ' Detected ' + data.summary.spreads.detected + ' vertical spreads (' + data.summary.spreads.legs + ' legs).'
            : '';
          showStatus('upload-status',
            'Parsed ' + data.summary.executionRows + ' execution rows (' +
            data.summary.skippedRows + ' summary rows skipped).' + spreadMsg +
            ' Date range: ' + data.summary.dateRange.from + ' to ' + data.summary.dateRange.to, 'success');

          renderReviewSection(data.summary);
          btn.innerHTML = '<i class="fas fa-search mr-1"></i> Parse & Auto-Classify';
          btn.disabled = false;
        } else {
          showStatus('upload-status', 'Parse error: ' + (data.error || 'Unknown'), 'error');
          btn.innerHTML = '<i class="fas fa-search mr-1"></i> Parse & Auto-Classify';
          btn.disabled = false;
        }
      } catch(err) {
        showStatus('upload-status', 'Parse failed: ' + err.message, 'error');
        btn.innerHTML = '<i class="fas fa-search mr-1"></i> Parse & Auto-Classify';
        btn.disabled = false;
      }
    }

    // ══════════════════════════════════════════════════
    // Render Review Table
    // ══════════════════════════════════════════════════
    function renderReviewSection(summary) {
      const section = document.getElementById('review-section');
      section.classList.remove('hidden');

      // Summary banner
      const summaryEl = document.getElementById('review-summary');
      summaryEl.innerHTML =
        '<div class="bg-epig-bg rounded-lg p-3 text-center"><div class="text-xs text-epig-textDim">Total</div><div class="font-bold font-mono text-white">' + parsedTrades.length + '</div></div>' +
        '<div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-center"><div class="text-xs text-blue-400">A (SPY)</div><div class="font-bold font-mono text-blue-400" id="summary-a">' + countStrategy('A') + '</div></div>' +
        '<div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center"><div class="text-xs text-emerald-400">B (FUT/OPT)</div><div class="font-bold font-mono text-emerald-400" id="summary-b">' + countStrategy('B') + '</div></div>' +
        '<div class="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-center"><div class="text-xs text-amber-400">C (Stocks/OPT)</div><div class="font-bold font-mono text-amber-400" id="summary-c">' + countStrategy('C') + '</div></div>' +
        '<div class="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 text-center"><div class="text-xs text-purple-400">Spreads</div><div class="font-bold font-mono text-purple-400">' + countSpreads() + '</div></div>';

      updateCounts();
      renderTradeRows();

      // Scroll to review section
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderTradeRows() {
      const tbody = document.getElementById('review-tbody');
      const strategyColors = { A: 'blue', B: 'emerald', C: 'amber' };

      tbody.innerHTML = parsedTrades.map((t, idx) => {
        const hidden = currentFilter !== 'all' && t.strategy !== currentFilter ? 'style="display:none"' : '';
        const color = strategyColors[t.strategy] || 'blue';
        const sideColor = t.side === 'BUY' ? 'text-emerald-400' : 'text-red-400';
        const cashColor = t.netCash >= 0 ? 'text-emerald-400' : 'text-red-400';
        const spreadBg = t.spreadGroup ? ' bg-purple-500/[0.04]' : '';
        const spreadBadge = t.spreadType
          ? '<span class="inline-flex items-center gap-1 text-[10px] font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/25 rounded-full px-1.5 py-0.5">' +
            '<i class="fas fa-layer-group"></i>' + t.spreadType + '</span>'
          : '<span class="text-epig-textDim text-xs">&mdash;</span>';
        const strikeDisplay = t.strike ? t.strike.toLocaleString() : '';

        return '<tr class="border-b border-epig-border/30 trade-row hover:bg-white/[0.02]' + spreadBg + '" data-idx="' + idx + '" data-strategy="' + t.strategy + '" ' + hidden + '>' +
          '<td class="px-2 py-1.5">' +
            '<select class="bg-epig-bg border border-epig-border rounded px-1.5 py-1 text-xs font-bold text-' + color + '-400 focus:outline-none focus:border-blue-500 strategy-select" data-idx="' + idx + '" onchange="changeStrategy(' + idx + ', this.value)">' +
            '<option value="A"' + (t.strategy==='A' ? ' selected' : '') + ' class="text-blue-400">A</option>' +
            '<option value="B"' + (t.strategy==='B' ? ' selected' : '') + ' class="text-emerald-400">B</option>' +
            '<option value="C"' + (t.strategy==='C' ? ' selected' : '') + ' class="text-amber-400">C</option>' +
            '</select></td>' +
          '<td class="px-2 py-1.5 text-xs font-mono text-epig-textDim">' + t.assetClass + '</td>' +
          '<td class="px-2 py-1.5">' + spreadBadge + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono">' + t.tradeDate + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-semibold ' + sideColor + '">' + t.side + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono" title="' + t.fullSymbol + '">' + t.symbol + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono text-right text-epig-textDim">' + strikeDisplay + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono text-right">' + t.quantity + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono text-right">' + t.price.toFixed(2) + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono text-right ' + cashColor + '">' + t.netCash.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2}) + '</td>' +
          '<td class="px-2 py-1.5 text-xs font-mono text-epig-textDim">' + (t.tradeId || '-') + '</td>' +
        '</tr>';
      }).join('');
    }

    function changeStrategy(idx, newStrategy) {
      parsedTrades[idx].strategy = newStrategy;
      updateCounts();
      // Update the select color
      const select = document.querySelector('select[data-idx="' + idx + '"]');
      const colors = { A: 'text-blue-400', B: 'text-emerald-400', C: 'text-amber-400' };
      select.className = select.className.replace(/text-(blue|emerald|amber)-400/g, colors[newStrategy]);
    }

    function setAllStrategy(strategy) {
      parsedTrades.forEach((t, i) => { t.strategy = strategy; });
      updateCounts();
      renderTradeRows();
    }

    function resetStrategies() {
      parsedTrades.forEach((t, i) => { t.strategy = originalStrategies[i]; });
      updateCounts();
      renderTradeRows();
    }

    function filterTrades(filter) {
      currentFilter = filter;
      const rows = document.querySelectorAll('#review-tbody tr');
      rows.forEach(row => {
        if (filter === 'all' || row.dataset.strategy === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });

      // Update tab styles
      document.querySelectorAll('#filter-tabs button').forEach(btn => {
        if (btn.dataset.filter === filter) {
          btn.className = btn.className.replace('bg-epig-card text-epig-textDim border-epig-border', 'bg-blue-500/15 text-blue-400 border-blue-500/30');
        } else {
          btn.className = btn.className.replace('bg-blue-500/15 text-blue-400 border-blue-500/30', 'bg-epig-card text-epig-textDim border-epig-border');
        }
      });
    }

    function countStrategy(s) { return parsedTrades.filter(t => t.strategy === s).length; }
    function countSpreads() { const groups = new Set(parsedTrades.filter(t => t.spreadGroup).map(t => t.spreadGroup)); return groups.size; }

    function updateCounts() {
      const a = countStrategy('A'), b = countStrategy('B'), c = countStrategy('C');
      const el = (id) => document.getElementById(id);
      if (el('count-all')) el('count-all').textContent = '(' + parsedTrades.length + ')';
      if (el('count-A')) el('count-A').textContent = '(' + a + ')';
      if (el('count-B')) el('count-B').textContent = '(' + b + ')';
      if (el('count-C')) el('count-C').textContent = '(' + c + ')';
      if (el('summary-a')) el('summary-a').textContent = a;
      if (el('summary-b')) el('summary-b').textContent = b;
      if (el('summary-c')) el('summary-c').textContent = c;
      if (el('ingest-count')) el('ingest-count').textContent = '(' + parsedTrades.length + ')';
    }

    // ══════════════════════════════════════════════════
    // Step 2: Confirm & Ingest
    // ══════════════════════════════════════════════════
    async function confirmIngest() {
      if (parsedTrades.length === 0) return;

      const btn = document.getElementById('confirm-btn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Ingesting...';

      try {
        const res = await fetch('/api/admin/upload/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename: uploadFilename, trades: parsedTrades })
        });
        const data = await res.json();

        if (data.success) {
          const breakdown = Object.entries(data.byStrategy || {})
            .filter(([,v]) => v > 0)
            .map(([k,v]) => k + ': ' + v)
            .join(', ');

          showStatus('confirm-status',
            'Ingested ' + data.new + ' new trades (' + breakdown + '). ' +
            data.duplicates + ' duplicates skipped.', 'success');

          // Clear state
          parsedTrades = [];
          selectedFile = null;
          loadAdminData();

          btn.innerHTML = '<i class="fas fa-check mr-1"></i> Done!';
          setTimeout(() => {
            document.getElementById('review-section').classList.add('hidden');
            btn.innerHTML = '<i class="fas fa-database mr-1"></i> Confirm & Ingest';
            btn.disabled = false;
          }, 3000);
        } else {
          showStatus('confirm-status', 'Ingest error: ' + (data.error || 'Unknown'), 'error');
          btn.innerHTML = '<i class="fas fa-database mr-1"></i> Confirm & Ingest';
          btn.disabled = false;
        }
      } catch(err) {
        showStatus('confirm-status', 'Ingest failed: ' + err.message, 'error');
        btn.innerHTML = '<i class="fas fa-database mr-1"></i> Confirm & Ingest';
        btn.disabled = false;
      }
    }

    // ══════════════════════════════════════════════════
    // Wipe All Trades
    // ══════════════════════════════════════════════════
    async function wipeTrades() {
      if (!confirm('Are you sure you want to DELETE ALL TRADES? This cannot be undone.')) return;
      if (!confirm('This will remove all ' + document.getElementById('wipe-btn').dataset.count + ' trades. Type OK to confirm.')) return;

      const btn = document.getElementById('wipe-btn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Wiping...';

      try {
        const res = await fetch('/api/admin/wipe-trades', { method: 'POST' });
        const data = await res.json();
        if (data.success) {
          showStatus('wipe-status', 'Deleted ' + data.deleted + ' trades. You can now re-upload your CSV.', 'success');
          loadAdminData();
        } else {
          showStatus('wipe-status', 'Error: ' + (data.error || 'Unknown'), 'error');
        }
      } catch(err) {
        showStatus('wipe-status', 'Failed: ' + err.message, 'error');
      }
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-exclamation-triangle mr-1"></i> Wipe All Trades';
    }

    // ══════════════════════════════════════════════════
    // Allocation Snapshot
    // ══════════════════════════════════════════════════
    async function saveSnapshot() {
      const spy = parseInt(document.getElementById('alloc-spy').value);
      const stock = parseInt(document.getElementById('alloc-stock').value);
      const cash = 100 - spy - stock;
      document.getElementById('alloc-cash').value = cash;

      if (spy + stock > 100) { alert('SPY + Stock cannot exceed 100%'); return; }
      if (spy < 70 || spy > 100) { alert('SPY must be 70-100%'); return; }
      if (stock > 25) { alert('Stock sleeve max 25%'); return; }

      const notes = document.getElementById('alloc-notes').value;

      try {
        const res = await fetch('/api/admin/snapshot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ spy_pct: spy, stock_pct: stock, cash_pct: cash, notes })
        });
        const data = await res.json();
        if (data.success) {
          showStatus('snapshot-status', 'Allocation snapshot v' + data.version + ' saved.', 'success');
          loadAdminData();
        } else {
          showStatus('snapshot-status', 'Snapshot error: ' + (data.error || 'Unknown'), 'error');
        }
      } catch(err) {
        showStatus('snapshot-status', 'Snapshot failed: ' + err.message, 'error');
      }
    }

    // ══════════════════════════════════════════════════
    // SPY Price Refresh
    // ══════════════════════════════════════════════════
    async function refreshSPY() {
      const btn = document.getElementById('spy-refresh-btn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> Fetching...';
      try {
        const res = await fetch('/api/admin/refresh-spy', { method: 'POST' });
        const data = await res.json();
        if (data.ok) {
          showStatus('spy-status', 'Loaded ' + data.count + ' days of SPY prices (' + data.from + ' to ' + data.to + ')', 'success');
          document.getElementById('spy-count').textContent = data.count + ' days cached';
        } else {
          showStatus('spy-status', 'Error: ' + (data.error || 'Could not fetch SPY data'), 'error');
        }
      } catch(err) {
        showStatus('spy-status', 'Failed: ' + err.message, 'error');
      }
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-sync-alt mr-1"></i> Refresh SPY Prices';
    }

    // ══════════════════════════════════════════════════
    // Utilities
    // ══════════════════════════════════════════════════
    function showStatus(elId, msg, type) {
      const el = document.getElementById(elId);
      el.classList.remove('hidden');
      el.className = 'text-sm p-3 rounded-lg mt-3';
      if (type === 'success') el.className += ' bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      else if (type === 'error') el.className += ' bg-red-500/10 text-red-400 border border-red-500/20';
      else el.className += ' bg-blue-500/10 text-blue-400 border border-blue-500/20';
      el.innerHTML = '<i class="fas fa-' + (type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle') + ' mr-2"></i>' + msg;
    }
  </script>
  `
}
