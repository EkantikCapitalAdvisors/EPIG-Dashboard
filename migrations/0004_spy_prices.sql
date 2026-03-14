-- SPY daily close prices cache (for benchmark comparison)
CREATE TABLE IF NOT EXISTS spy_prices (
  date TEXT PRIMARY KEY,
  close REAL NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_spy_prices_date ON spy_prices(date);
