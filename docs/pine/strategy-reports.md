# Strategy reports

A strategy places simulated trades on the candles of the chart it runs on. Its results are shown in two places: the **Report** tab of [Pine Studio](/pine/writing-scripts), and **Chart settings ▸ Scripts** under **Backtest**, for a strategy that is on a chart. Both read the same results. The Report tab has the room for everything below; the chart settings keep to a compact summary.

## Figures

| Figure | What it is |
| --- | --- |
| **Net profit** | Profit of all closed trades after commission, in money and as a percentage of the initial capital. |
| **Closed trades** | How many round trips the strategy has finished. |
| **Win rate** | The share of closed trades that made money. |
| **Profit factor** | Gross profit divided by gross loss. Shown as a dash until there is a losing trade. |
| **Max drawdown** | The largest fall of equity from a peak, in money and as a percentage of that peak. The first peak is the initial capital. |
| **Avg trade** | Net profit divided by the number of closed trades. |
| **Open P&L** | Profit or loss of the trade still open on the last bar. |
| **Final equity** | Equity after the last bar, open trade included. |

Green is a gain and red a loss. Nothing else on the page is coloured.

## Equity and trades

The **Equity** curve follows the account bar by bar, with a dashed line at the initial capital. The **Trades** list shows the latest 100 closed trades, newest first, with side, entry and exit price and profit. Hover a trade to see its order ids, its size and the comments of the orders that opened and closed it.

::: warning Price-based charts
On a Heikin Ashi, Renko, Kagi, Line Break, Point & Figure or Range chart, a strategy fills at that chart's constructed prices, which no market traded at. The report says so above the figures. Treat those results as indicative only.
:::

## Simulation

A backtest is one history, and the wins and losses in it came out one way. The **Simulation** card on the Report tab asks how far the result could move if they had come out differently. It takes your closed trades and draws them at random, with replacement, as many times as there are trades, so a trade can turn up several times in one run and not at all in another. It repeats this hundreds of times. Each run adds the drawn profits to the initial capital.

Drawing with replacement is what spreads the final equity: a run that happens to draw the big winners more often ends higher. The order of the draws only shapes the path, so it matters for the drawdown and not for where a run ends.

The card shows:

- **Median result**, **5th percentile** and **95th percentile**: the profit at the end of the run in the middle, and the runs that ended lower than 95 in 100 and higher than 95 in 100. A wide gap between them means the result leans on a few trades turning up.
- **Chance of a loss**: the share of runs that ended with less than the initial capital. A run that breaks even is not counted as a loss.
- **Median drawdown** and **Drawdown, worst 5%**: the typical largest fall from a peak across the runs, and the fall that only one run in twenty was worse than. It can be over 100% when a run takes equity below zero.
- A **fan chart** of equity along the trades: the shaded band is the middle 90% of runs, the line through it is the median, and the dashed line is the initial capital.

The simulation takes 10 to 20,000 closed trades. With fewer, the card says how many it is waiting for; with more, it says the list is too long, so the tab stays quick to open.

The results are the same every time for the same trades: the random draws use a fixed seed, so reopening the report does not change the figures. The number of runs goes from 1,000 down to 100 as the trade list gets longer. The card is on the Report tab only; the chart settings do not show it.

::: warning What the simulation can and cannot tell you
- It redraws the trades you have. It says nothing about trades the strategy has not made, or about a market that behaves differently from the one tested.
- Profits are added as money. A strategy that sizes each trade as a percentage of equity would compound in real life, so the simulated range is an approximation for it.
- Trades are treated as independent of each other. Strings of wins or losses that come from the market, not from chance, are broken up by the draws.
:::

Like every figure in DegenView, this is a tool for looking at a strategy, not advice. See [What Pine supports](/pine/language) for what the strategy emulator does and does not model.
