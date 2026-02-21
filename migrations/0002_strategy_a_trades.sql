-- ═══════════════════════════════════════════════════════════
-- Allow Strategy A trades in the trades table
-- Add asset_class, strike, expiry, put_call columns for IB data
-- ═══════════════════════════════════════════════════════════

-- Drop the CHECK constraint on strategy by recreating the table
-- SQLite doesn't support ALTER TABLE DROP CONSTRAINT, so we use a workaround

CREATE TABLE IF NOT EXISTS trades_new (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  strategy TEXT NOT NULL CHECK(strategy IN ('A', 'B', 'C')),
  source TEXT NOT NULL DEFAULT 'IB' CHECK(source IN ('IB', 'Discord', 'Manual')),
  
  -- IB identifiers (for idempotency / deduplication)
  ib_execution_id TEXT UNIQUE,
  discord_message_id TEXT,
  reconciled INTEGER NOT NULL DEFAULT 0,
  
  -- IB asset classification
  asset_class TEXT CHECK(asset_class IN ('STK', 'FUT', 'OPT', 'FOP', 'CASH')),
  
  -- Trade data
  trade_date TEXT NOT NULL,
  trade_number INTEGER,
  side TEXT NOT NULL CHECK(side IN ('BUY', 'SELL')),
  instrument TEXT NOT NULL,
  quantity INTEGER DEFAULT 1,
  
  -- Options/Futures specific
  strike REAL,
  expiry TEXT,
  put_call TEXT CHECK(put_call IN ('P', 'C', NULL)),
  
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

-- Copy existing data
INSERT INTO trades_new SELECT 
  id, strategy, source, ib_execution_id, discord_message_id, reconciled,
  NULL, -- asset_class
  trade_date, trade_number, side, instrument, quantity,
  NULL, NULL, NULL, -- strike, expiry, put_call
  entry_price, stop_price, tp_price, exit_price,
  net_points, planned_risk_points, net_r, realized_pnl, result,
  notes, created_at, updated_at
FROM trades;

-- Swap tables
DROP TABLE trades;
ALTER TABLE trades_new RENAME TO trades;

-- Recreate indexes
CREATE INDEX IF NOT EXISTS idx_trades_strategy ON trades(strategy);
CREATE INDEX IF NOT EXISTS idx_trades_date ON trades(trade_date);
CREATE INDEX IF NOT EXISTS idx_trades_ib_exec ON trades(ib_execution_id);
CREATE INDEX IF NOT EXISTS idx_trades_asset_class ON trades(asset_class);
