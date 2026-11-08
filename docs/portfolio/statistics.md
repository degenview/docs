# Portfolio: statistics, currencies and privacy

The **Statistics** section shows how your portfolio has performed. This page also explains how profit is worked out, how reporting currencies work, and how to hide your amounts.

## What Statistics shows

![The Statistics section](/images/portfolio/statistics.png)

- **Total P&L**, split into unrealized (open positions) and realized (profit you have banked by selling).
- Cards for **Current Value**, **Cost Basis**, **Portfolio High**, **Portfolio Low**, **Transactions**, **Assets**, **Fees Paid** and **Tracking Since**.
- **Value Range**, which shows how far up between your low and high the portfolio sits now.
- **Win Rate**, a ring that counts assets **In profit**, **At a loss**, **Break-even** and **No price**.
- **P&L by Asset**, one bar per asset.

## How profit is worked out

DegenView uses **weighted-average cost**. Each buy updates your average cost per unit. A sell takes its cost from that average, so the remaining units keep the same average. There is no FIFO or specific-lot choice.

Fees add to cost on a buy and reduce proceeds on a sell. Rewards, airdrops and similar income count as units acquired at the price you entered, which can be zero.

## Reporting currency

The currency menu in the header (USD, EUR, GBP, JPY, CHF or BTC) sets the currency every amount is shown in. Your choice is remembered for each portfolio and for **All Portfolios**. The menu is locked while DegenView is converting your transactions.

## Privacy mode

Click the eye icon (**Hide portfolio values**) to mask amounts with dots. Percentages and allocation shares stay visible. DegenView remembers the setting. Click again (**Reveal portfolio values**) to show amounts.

## History and ranges

The value chart on the Overview uses a history DegenView builds on your own computer.

- **1W**, **1M**, **1Y** and **ALL** use one point per day, stamped at local midnight and priced at the last finished daily close. Today's point therefore uses yesterday's close, and the live value covers today.
- **1D** uses points 30 minutes apart. It works only for portfolios in USD with dollar-quoted markets; otherwise it shows the daily points.
- If an asset's candles are missing, DegenView still draws what it can and retries every 10 minutes.
- Days before an asset's first available candle are left out.
- If your transactions cannot be replayed, for example a sell larger than the holding, the page shows an error instead of zeros.

::: info Not synced
The history is rebuilt on each Mac and is never synced through iCloud. Your transactions sync; the chart is recalculated from them.
:::

Use **Export Portfolio History…** in [Transactions and imports](/portfolio/transactions) to save the daily values. See [Overview and holdings](/portfolio/overview) for the charts themselves.
