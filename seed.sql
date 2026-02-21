-- ═══════════════════════════════════════════════════════════
-- EPIG Seed Data — Sample Trades & Snapshots
-- ═══════════════════════════════════════════════════════════

-- Strategy A: Allocation snapshots
INSERT OR IGNORE INTO allocation_snapshots (version, snapshot_date, spy_pct, stock_pct, cash_pct, notes) VALUES
  (1, '2025-03-01', 85, 10, 5, 'Initial allocation at launch'),
  (2, '2025-04-15', 80, 15, 5, 'Increased stock sleeve — added NVDA/AAPL'),
  (3, '2025-06-01', 75, 20, 5, 'Increased stock sleeve — added MSFT'),
  (4, '2025-08-01', 80, 15, 5, 'Reduced stock sleeve — trimmed NVDA after run-up'),
  (5, '2025-10-01', 85, 10, 5, 'Risk-off: reduced equities into Q4'),
  (6, '2025-12-15', 80, 15, 5, 'Year-end rebalance'),
  (7, '2026-01-15', 80, 15, 5, 'No change — allocation confirmed'),
  (8, '2026-02-10', 80, 15, 5, 'Current allocation');

-- Strategy B: Futures trades (MES/ES)
INSERT OR IGNORE INTO trades (strategy, source, ib_execution_id, trade_date, trade_number, side, instrument, entry_price, stop_price, tp_price, exit_price, net_points, planned_risk_points, net_r, realized_pnl, result) VALUES
  ('B', 'IB', 'IB-B-001', '2025-03-03', 1, 'BUY',  'MES', 5820.25, 5800.25, 5840.25, 5838.50, 18.25, 20, 0.91, 91.25, 'WIN'),
  ('B', 'IB', 'IB-B-002', '2025-03-05', 2, 'SELL', 'MES', 5845.00, 5865.00, 5825.00, 5828.75, 16.25, 20, 0.81, 81.25, 'WIN'),
  ('B', 'IB', 'IB-B-003', '2025-03-07', 3, 'BUY',  'MES', 5810.50, 5790.50, 5830.50, 5792.00, -18.50, 20, -0.93, -92.50, 'LOSS'),
  ('B', 'IB', 'IB-B-004', '2025-03-10', 4, 'SELL', 'MES', 5835.75, 5855.75, 5815.75, 5812.25, 23.50, 20, 1.18, 117.50, 'WIN'),
  ('B', 'IB', 'IB-B-005', '2025-03-12', 5, 'BUY',  'MES', 5802.00, 5782.00, 5822.00, 5780.50, -21.50, 20, -1.08, -107.50, 'LOSS'),
  ('B', 'IB', 'IB-B-006', '2025-03-14', 6, 'BUY',  'MES', 5815.25, 5795.25, 5835.25, 5842.75, 27.50, 20, 1.38, 137.50, 'WIN'),
  ('B', 'IB', 'IB-B-007', '2025-03-17', 7, 'SELL', 'MES', 5850.00, 5870.00, 5830.00, 5833.50, 16.50, 20, 0.83, 82.50, 'WIN'),
  ('B', 'IB', 'IB-B-008', '2025-03-19', 8, 'BUY',  'MES', 5825.50, 5805.50, 5845.50, 5848.00, 22.50, 20, 1.13, 112.50, 'WIN'),
  ('B', 'IB', 'IB-B-009', '2025-03-21', 9, 'SELL', 'MES', 5860.25, 5880.25, 5840.25, 5878.00, -17.75, 20, -0.89, -88.75, 'LOSS'),
  ('B', 'IB', 'IB-B-010', '2025-03-24', 10, 'BUY',  'MES', 5840.00, 5820.00, 5860.00, 5862.50, 22.50, 20, 1.13, 112.50, 'WIN'),
  ('B', 'IB', 'IB-B-011', '2025-03-26', 11, 'SELL', 'MES', 5870.50, 5890.50, 5850.50, 5855.25, 15.25, 20, 0.76, 76.25, 'WIN'),
  ('B', 'IB', 'IB-B-012', '2025-03-28', 12, 'BUY',  'MES', 5855.00, 5835.00, 5875.00, 5836.50, -18.50, 20, -0.93, -92.50, 'LOSS'),
  ('B', 'IB', 'IB-B-013', '2025-04-01', 13, 'BUY',  'MES', 5830.25, 5810.25, 5850.25, 5852.75, 22.50, 20, 1.13, 112.50, 'WIN'),
  ('B', 'IB', 'IB-B-014', '2025-04-03', 14, 'SELL', 'MES', 5865.00, 5885.00, 5845.00, 5842.00, 23.00, 20, 1.15, 115.00, 'WIN'),
  ('B', 'IB', 'IB-B-015', '2025-04-07', 15, 'BUY',  'MES', 5810.75, 5790.75, 5830.75, 5795.25, -15.50, 20, -0.78, -77.50, 'LOSS'),
  ('B', 'IB', 'IB-B-016', '2025-04-09', 16, 'SELL', 'MES', 5845.50, 5865.50, 5825.50, 5822.00, 23.50, 20, 1.18, 117.50, 'WIN'),
  ('B', 'IB', 'IB-B-017', '2025-04-11', 17, 'BUY',  'MES', 5820.00, 5800.00, 5840.00, 5843.25, 23.25, 20, 1.16, 116.25, 'WIN'),
  ('B', 'IB', 'IB-B-018', '2025-04-14', 18, 'BUY',  'MES', 5835.25, 5815.25, 5855.25, 5818.00, -17.25, 20, -0.86, -86.25, 'LOSS'),
  ('B', 'IB', 'IB-B-019', '2025-04-16', 19, 'SELL', 'MES', 5855.50, 5875.50, 5835.50, 5832.75, 22.75, 20, 1.14, 113.75, 'WIN'),
  ('B', 'IB', 'IB-B-020', '2025-04-18', 20, 'BUY',  'MES', 5815.00, 5795.00, 5835.00, 5840.50, 25.50, 20, 1.28, 127.50, 'WIN');

-- Strategy C: Options pivot trades
INSERT OR IGNORE INTO trades (strategy, source, ib_execution_id, trade_date, trade_number, side, instrument, entry_price, exit_price, net_points, net_r, realized_pnl, result) VALUES
  ('C', 'IB', 'IB-C-001', '2025-03-10', 1, 'BUY',  'SPY 580C', 4.20, 8.50, 4.30, 2.05, 430.00, 'WIN'),
  ('C', 'IB', 'IB-C-002', '2025-03-18', 2, 'BUY',  'SPY 575P', 3.80, 1.20, -2.60, -0.68, -260.00, 'LOSS'),
  ('C', 'IB', 'IB-C-003', '2025-04-02', 3, 'BUY',  'QQQ 490C', 5.10, 12.40, 7.30, 2.43, 730.00, 'WIN'),
  ('C', 'IB', 'IB-C-004', '2025-04-15', 4, 'BUY',  'NVDA 950C', 8.50, 3.20, -5.30, -0.62, -530.00, 'LOSS'),
  ('C', 'IB', 'IB-C-005', '2025-04-28', 5, 'BUY',  'SPY 590C', 3.60, 9.80, 6.20, 2.72, 620.00, 'WIN'),
  ('C', 'IB', 'IB-C-006', '2025-05-12', 6, 'BUY',  'AAPL 200C', 4.40, 2.10, -2.30, -0.52, -230.00, 'LOSS'),
  ('C', 'IB', 'IB-C-007', '2025-05-22', 7, 'BUY',  'SPY 585P', 5.20, 14.60, 9.40, 2.81, 940.00, 'WIN'),
  ('C', 'IB', 'IB-C-008', '2025-06-05', 8, 'BUY',  'QQQ 500C', 6.80, 2.40, -4.40, -0.65, -440.00, 'LOSS'),
  ('C', 'IB', 'IB-C-009', '2025-06-18', 9, 'BUY',  'SPY 595C', 3.90, 11.20, 7.30, 2.87, 730.00, 'WIN'),
  ('C', 'IB', 'IB-C-010', '2025-07-01', 10, 'BUY', 'TSLA 280C', 7.20, 18.50, 11.30, 2.57, 1130.00, 'WIN');

-- Seed audit log
INSERT INTO audit_log (timestamp, admin_id, action, entity, details) VALUES
  ('2025-03-01 09:00:00', 'admin', 'SNAPSHOT', 'Strategy A', 'Initial allocation: SPY 85%, Stocks 10%, Cash 5%'),
  ('2025-03-03 09:15:00', 'admin', 'UPLOAD', 'Strategy B', '20 trades ingested from IB Flex Query CSV'),
  ('2025-03-10 09:20:00', 'admin', 'UPLOAD', 'Strategy C', '10 trades ingested from IB Flex Query CSV'),
  ('2025-04-15 09:00:00', 'admin', 'SNAPSHOT', 'Strategy A', 'Allocation changed: SPY 85%→80%, Stocks 10%→15%');
