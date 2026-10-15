# Transactions

A portfolio is built from transactions. Record a buy or a sell, and DegenView keeps the
ledger and computes your position using **weighted-average accounting**.

## Adding a transaction

Open the transaction editor for your portfolio and enter:

- the asset
- the side (buy or sell)
- the quantity
- the price
- the date

DegenView updates the position and cost basis automatically.

## Weighted-average cost

When you buy more of an asset at a different price, your average cost is recalculated as a
weighted average. Sells reduce the position but don't change the remaining average cost.

## Importing transactions

Instead of typing everything, you can import a CSV — including CoinMarketCap transaction
exports, which are mapped to assets automatically. See
[Analytics & currency](/portfolio/analytics) for import and export details.
