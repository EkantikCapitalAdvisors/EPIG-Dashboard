-- Migration: Investing/Trading → A/B/C (three-strategy reclassification)
-- A = SPY core (SPY stock only) + CASH
-- B = Futures & Options (FUT / FOP / OPT)
-- C = Episodic Pivot (individual stocks, non-SPY)

-- From the 2-strategy system back to 3-strategy
UPDATE trades SET strategy = 'B' WHERE strategy = 'Trading';
UPDATE trades SET strategy = 'A' WHERE strategy = 'Investing' AND instrument LIKE 'SPY%';
UPDATE trades SET strategy = 'C' WHERE strategy = 'Investing' AND asset_class = 'STK' AND instrument NOT LIKE 'SPY%';
UPDATE trades SET strategy = 'A' WHERE strategy = 'Investing';

-- Any stray stock options that may still be tagged as C should go to B
UPDATE trades SET strategy = 'B' WHERE asset_class IN ('OPT', 'FOP', 'FUT') AND strategy != 'B';
-- Any SPY rows that ended up elsewhere
UPDATE trades SET strategy = 'A' WHERE asset_class = 'STK' AND instrument LIKE 'SPY%' AND strategy != 'A';
-- Any non-SPY stocks that ended up elsewhere
UPDATE trades SET strategy = 'C' WHERE asset_class = 'STK' AND instrument NOT LIKE 'SPY%' AND strategy != 'C';
