-- ═══════════════════════════════════════════════════════════
-- Add FifoPnlRealized and IBCommission columns
-- FifoPnlRealized is IB's authoritative realized P&L per fill
-- IBCommission is the per-fill commission (negative)
-- True P&L = fifo_pnl + ib_commission
-- ═══════════════════════════════════════════════════════════

ALTER TABLE trades ADD COLUMN fifo_pnl REAL;
ALTER TABLE trades ADD COLUMN ib_commission REAL;
