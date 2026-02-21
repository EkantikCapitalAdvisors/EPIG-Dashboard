-- ═══════════════════════════════════════════════════════════
-- EPIG Investment Design — Initial Schema
-- ═══════════════════════════════════════════════════════════

-- Trades table (Strategies B & C)
CREATE TABLE IF NOT EXISTS trades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  strategy TEXT NOT NULL CHECK(strategy IN ('B', 'C')),
  source TEXT NOT NULL DEFAULT 'IB' CHECK(source IN ('IB', 'Discord', 'Manual')),
  
  -- IB identifiers (for idempotency / deduplication)
  ib_execution_id TEXT UNIQUE,
  discord_message_id TEXT,
  reconciled INTEGER NOT NULL DEFAULT 0,
  
  -- Trade data
  trade_date TEXT NOT NULL,
  trade_number INTEGER,
  side TEXT NOT NULL CHECK(side IN ('BUY', 'SELL')),
  instrument TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  
  -- Prices
  entry_price REAL NOT NULL,
  stop_price REAL,
  tp_price REAL,
  exit_price REAL,
  
  -- Computed results
  net_points REAL,
  planned_risk_points REAL DEFAULT 20,
  net_r REAL,
  realized_pnl REAL,
  result TEXT CHECK(result IN ('WIN', 'LOSS', 'OPEN', 'SCRATCH')),
  
  -- Metadata
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Allocation snapshots (Strategy A)
CREATE TABLE IF NOT EXISTS allocation_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  version INTEGER NOT NULL,
  snapshot_date TEXT NOT NULL,
  
  spy_pct REAL NOT NULL CHECK(spy_pct >= 0 AND spy_pct <= 100),
  stock_pct REAL NOT NULL CHECK(stock_pct >= 0 AND stock_pct <= 100),
  cash_pct REAL NOT NULL CHECK(cash_pct >= 0 AND cash_pct <= 100),
  
  -- Stock sleeve detail (JSON array of {ticker, weight})
  stock_sleeve_detail TEXT,
  
  -- Period return since previous snapshot
  period_return_pct REAL,
  
  notes TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Audit log (every admin action)
CREATE TABLE IF NOT EXISTS audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL DEFAULT (datetime('now')),
  admin_id TEXT NOT NULL DEFAULT 'admin',
  action TEXT NOT NULL,
  entity TEXT NOT NULL,
  entity_id TEXT,
  previous_json TEXT,
  new_json TEXT,
  details TEXT
);

-- Leads (weekly digest subscribers)
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TEXT NOT NULL DEFAULT (datetime('now')),
  unsubscribed_at TEXT
);

-- Upload batches (track each file upload)
CREATE TABLE IF NOT EXISTS upload_batches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  filename TEXT NOT NULL,
  strategy TEXT NOT NULL,
  file_type TEXT NOT NULL DEFAULT 'csv',
  trades_parsed INTEGER NOT NULL DEFAULT 0,
  trades_new INTEGER NOT NULL DEFAULT 0,
  trades_duplicate INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'processing' CHECK(status IN ('processing', 'complete', 'error')),
  error_message TEXT,
  uploaded_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_trades_strategy ON trades(strategy);
CREATE INDEX IF NOT EXISTS idx_trades_date ON trades(trade_date);
CREATE INDEX IF NOT EXISTS idx_trades_ib_exec ON trades(ib_execution_id);
CREATE INDEX IF NOT EXISTS idx_snapshots_date ON allocation_snapshots(snapshot_date);
CREATE INDEX IF NOT EXISTS idx_audit_timestamp ON audit_log(timestamp);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
