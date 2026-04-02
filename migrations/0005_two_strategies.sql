-- Migrate from 3-strategy (A/B/C) to 2-strategy (Investing/Trading) classification
-- Investing = all stocks (SPY + individual stocks)
-- Trading = all futures, futures options, and all options

UPDATE trades SET strategy = 'Investing' WHERE strategy = 'A';
UPDATE trades SET strategy = 'Trading' WHERE strategy = 'B';
UPDATE trades SET strategy = 'Investing' WHERE strategy = 'C' AND asset_class = 'STK';
UPDATE trades SET strategy = 'Trading' WHERE strategy = 'C' AND asset_class IN ('OPT', 'FUT', 'FOP');
UPDATE trades SET strategy = 'Trading' WHERE strategy = 'C' AND strategy != 'Investing' AND strategy != 'Trading';
