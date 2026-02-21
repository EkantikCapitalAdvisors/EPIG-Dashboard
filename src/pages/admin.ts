export function adminPage(): string {
  return `
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold mb-1">Admin Console</h1>
        <p class="text-epig-textMuted">Phase 1 &mdash; Manual IB Upload &amp; Trade Management</p>
      </div>
      <div class="flex items-center gap-2 text-sm">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="text-epig-textDim">Admin</span>
      </div>
    </div>

    <!-- Upload Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="kpi-card">
        <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
          <i class="fas fa-upload text-blue-400"></i>
          IB Flex Query Upload
        </h2>
        <p class="text-sm text-epig-textDim mb-4">
          Upload Interactive Brokers Flex Query exports (XML or CSV). Trades are parsed,
          validated for duplicates, and ingested with full idempotency.
        </p>
        <div class="border-2 border-dashed border-epig-border rounded-xl p-8 text-center mb-4 hover:border-blue-500/50 transition-colors cursor-pointer"
             id="upload-zone"
             ondragover="event.preventDefault(); this.classList.add('border-blue-500');"
             ondragleave="this.classList.remove('border-blue-500');"
             ondrop="handleFileDrop(event)">
          <i class="fas fa-cloud-upload-alt text-3xl text-epig-textDim mb-3"></i>
          <p class="text-sm text-epig-textDim mb-2">Drag &amp; drop IB export file here</p>
          <p class="text-xs text-epig-textDim">or</p>
          <label class="btn-outline inline-block mt-3 cursor-pointer text-sm" style="padding: 8px 20px;">
            <i class="fas fa-folder-open mr-1"></i> Browse Files
            <input type="file" accept=".xml,.csv" class="hidden" onchange="handleFileSelect(event)">
          </label>
        </div>
        <div class="flex gap-2 mb-3">
          <select id="upload-strategy" class="bg-epig-bg border border-epig-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500">
            <option value="B">Strategy B &mdash; Futures</option>
            <option value="C">Strategy C &mdash; Pivots</option>
            <option value="A">Strategy A &mdash; Allocation Snapshot</option>
          </select>
          <button class="btn-primary text-sm" onclick="processUpload()" style="padding: 8px 20px;">
            <i class="fas fa-play mr-1"></i> Process Upload
          </button>
        </div>
        <div id="upload-status" class="hidden text-sm p-3 rounded-lg"></div>
      </div>

      <!-- Allocation Snapshot -->
      <div class="kpi-card">
        <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
          <i class="fas fa-chart-pie text-blue-400"></i>
          Strategy A &mdash; Update Allocation
        </h2>
        <p class="text-sm text-epig-textDim mb-4">
          Record a new allocation snapshot. This creates a versioned record used to chain period returns.
        </p>
        <div class="space-y-4">
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
            <label class="text-sm text-epig-textDim mb-1 block">Cash / Treasuries %</label>
            <input type="number" value="5" readonly
              class="w-full bg-epig-bg border border-epig-border rounded px-3 py-2 font-mono text-epig-textDim"
              id="alloc-cash">
          </div>
          <div>
            <label class="text-sm text-epig-textDim mb-1 block">Notes (optional)</label>
            <textarea rows="2"
              class="w-full bg-epig-bg border border-epig-border rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
              id="alloc-notes" placeholder="Reason for allocation change..."></textarea>
          </div>
          <button class="btn-primary text-sm w-full" onclick="saveSnapshot()">
            <i class="fas fa-save mr-1"></i> Save Allocation Snapshot
          </button>
        </div>
      </div>
    </div>

    <!-- Recent Activity / Audit Trail -->
    <div class="kpi-card mb-8">
      <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
        <i class="fas fa-scroll text-blue-400"></i>
        Audit Trail
      </h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-epig-border">
              <th class="text-left px-3 py-2.5 text-epig-textDim font-medium">Timestamp</th>
              <th class="text-left px-3 py-2.5 text-epig-textDim font-medium">Action</th>
              <th class="text-left px-3 py-2.5 text-epig-textDim font-medium">Entity</th>
              <th class="text-left px-3 py-2.5 text-epig-textDim font-medium">Details</th>
              <th class="text-left px-3 py-2.5 text-epig-textDim font-medium">Admin</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-epig-border/50 trade-row">
              <td class="px-3 py-2.5 font-mono text-xs">2026-02-17 09:15:23</td>
              <td class="px-3 py-2.5"><span class="text-xs bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded">UPLOAD</span></td>
              <td class="px-3 py-2.5">Strategy B</td>
              <td class="px-3 py-2.5 text-epig-textDim">12 trades ingested from IB Flex Query</td>
              <td class="px-3 py-2.5 text-epig-textDim">admin@ekantik</td>
            </tr>
            <tr class="border-b border-epig-border/50 trade-row">
              <td class="px-3 py-2.5 font-mono text-xs">2026-02-17 09:12:05</td>
              <td class="px-3 py-2.5"><span class="text-xs bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded">SNAPSHOT</span></td>
              <td class="px-3 py-2.5">Strategy A</td>
              <td class="px-3 py-2.5 text-epig-textDim">Allocation: SPY 80%, Stocks 15%, Cash 5%</td>
              <td class="px-3 py-2.5 text-epig-textDim">admin@ekantik</td>
            </tr>
            <tr class="border-b border-epig-border/50 trade-row">
              <td class="px-3 py-2.5 font-mono text-xs">2026-02-17 09:10:41</td>
              <td class="px-3 py-2.5"><span class="text-xs bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded">UPLOAD</span></td>
              <td class="px-3 py-2.5">Strategy C</td>
              <td class="px-3 py-2.5 text-epig-textDim">3 trades ingested from IB Flex Query</td>
              <td class="px-3 py-2.5 text-epig-textDim">admin@ekantik</td>
            </tr>
            <tr class="border-b border-epig-border/50 trade-row">
              <td class="px-3 py-2.5 font-mono text-xs">2026-02-10 09:22:18</td>
              <td class="px-3 py-2.5"><span class="text-xs bg-amber-500/15 text-amber-400 px-2 py-0.5 rounded">EDIT</span></td>
              <td class="px-3 py-2.5">Strategy A</td>
              <td class="px-3 py-2.5 text-epig-textDim">Allocation changed: SPY 85%&rarr;80%, Stocks 10%&rarr;15%</td>
              <td class="px-3 py-2.5 text-epig-textDim">admin@ekantik</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Stats (live from API) -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="admin-stats">
      <div class="kpi-card text-center">
        <div class="kpi-label">Total Trades</div>
        <div class="kpi-value text-white" id="stat-trades">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">DB Status</div>
        <div class="kpi-value text-blue-400 text-lg" id="stat-db">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">Snapshots</div>
        <div class="kpi-value text-emerald-400" id="stat-snapshots">...</div>
      </div>
      <div class="kpi-card text-center">
        <div class="kpi-label">Audit Entries</div>
        <div class="kpi-value text-amber-400" id="stat-audits">...</div>
      </div>
    </div>

    <!-- Upload History -->
    <div class="kpi-card mt-6 mb-6">
      <h2 class="font-bold text-lg mb-4 flex items-center gap-2">
        <i class="fas fa-history text-blue-400"></i>
        Upload History
      </h2>
      <div id="upload-history" class="text-sm text-epig-textDim">Loading...</div>
    </div>

    <!-- Sample CSV Download -->
    <div class="text-center mb-8">
      <p class="text-sm text-epig-textDim mb-2">Need a template? Download a sample IB CSV:</p>
      <a href="/static/sample-ib-futures.csv" download class="btn-outline text-sm inline-block no-underline" style="padding: 8px 20px;">
        <i class="fas fa-download mr-1"></i> Download Sample CSV
      </a>
    </div>
  </div>

  <script>
    let selectedFile = null;

    // ── Load stats and history on page load ──
    async function loadAdminData() {
      try {
        const healthRes = await fetch('/api/health');
        const health = await healthRes.json();
        document.getElementById('stat-trades').textContent = health.trades || '0';
        document.getElementById('stat-db').textContent = health.status === 'ok' ? 'Connected' : health.status;
        document.getElementById('stat-snapshots').textContent = health.snapshots || '0';
        document.getElementById('stat-audits').textContent = health.auditEntries || '0';
      } catch(e) {
        document.getElementById('stat-db').textContent = 'Offline';
      }

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
            '<span class="text-xs bg-' + (b.status==='complete'?'emerald':'blue') + '-500/15 text-' + (b.status==='complete'?'emerald':'blue') + '-400 px-2 py-0.5 rounded">' + b.status + '</span>' +
            '</div></div>'
          ).join('');
        } else {
          el.textContent = 'No uploads yet. Upload your first IB CSV above.';
        }
      } catch(e) {}
    }

    loadAdminData();

    // ── File handling ──
    function handleFileDrop(e) {
      e.preventDefault();
      e.target.classList.remove('border-blue-500');
      const file = e.dataTransfer.files[0];
      if (file) { selectedFile = file; showUploadStatus('File selected: ' + file.name + ' (' + (file.size/1024).toFixed(1) + ' KB)', 'info'); }
    }

    function handleFileSelect(e) {
      const file = e.target.files[0];
      if (file) { selectedFile = file; showUploadStatus('File selected: ' + file.name + ' (' + (file.size/1024).toFixed(1) + ' KB)', 'info'); }
    }

    // ── REAL upload to API ──
    async function processUpload() {
      if (!selectedFile) { showUploadStatus('Please select a file first.', 'error'); return; }
      const strategy = document.getElementById('upload-strategy').value;
      showUploadStatus('Uploading ' + selectedFile.name + ' for Strategy ' + strategy + '...', 'info');

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('strategy', strategy);

      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
        const data = await res.json();

        if (data.success) {
          showUploadStatus(
            'Upload complete! ' + data.new + ' new trades ingested, ' +
            data.duplicates + ' duplicates skipped from ' + data.filename,
            'success'
          );
          selectedFile = null;
          loadAdminData(); // Refresh stats
        } else {
          showUploadStatus('Upload error: ' + (data.error || 'Unknown error'), 'error');
        }
      } catch(err) {
        showUploadStatus('Upload failed: ' + err.message, 'error');
      }
    }

    function showUploadStatus(msg, type) {
      const el = document.getElementById('upload-status');
      el.classList.remove('hidden');
      el.className = 'text-sm p-3 rounded-lg';
      if (type === 'success') el.className += ' bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      else if (type === 'error') el.className += ' bg-red-500/10 text-red-400 border border-red-500/20';
      else el.className += ' bg-blue-500/10 text-blue-400 border border-blue-500/20';
      el.innerHTML = '<i class="fas fa-' + (type==='success'?'check-circle':type==='error'?'exclamation-circle':'info-circle') + ' mr-2"></i>' + msg;
    }

    // ── REAL snapshot save to API ──
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
          showUploadStatus('Allocation snapshot v' + data.version + ' saved: SPY ' + spy + '%, Stock ' + stock + '%, Cash ' + cash + '%', 'success');
          loadAdminData();
        } else {
          showUploadStatus('Snapshot error: ' + (data.error || 'Unknown'), 'error');
        }
      } catch(err) {
        showUploadStatus('Snapshot failed: ' + err.message, 'error');
      }
    }
  </script>
  `
}
