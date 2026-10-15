# Adding charts

## Search for a symbol

Use the add-chart search to find a symbol. You can search across multiple sources at once —
crypto exchanges, stock data, prediction markets, and CoinMarketCap indices all appear in the
same search. Pick a result to add it as a chart.

::: tip Multiple sources
The same symbol can be added from different sources without being treated as a duplicate.
For example, you can keep a Binance BTC chart and a Coinbase BTC chart side by side, each
tracking its own feed.
:::

## Change the timeframe

Each chart supports these timeframes:

- 1H
- 1D
- 1W
- 1M
- 3M
- 1Y

Zoom in and out with the scroll wheel on the chart.

## Live updates

Crypto charts from Binance and Coinbase update in real time over a WebSocket connection.
Other sources refresh automatically on their own schedule. You don't need to do anything to
enable this — it happens by default.

## What "multi-source identity" means

Normally a symbol is identified by its name alone, so "BTC" from one place looks the same as
"BTC" from another. DegenView instead identifies each chart by its symbol *and* its source.
That's what lets you keep the same ticker from two different exchanges as two separate,
independent charts.

## Next steps

- See [Data sources](/markets/data-sources) for what each source offers.
- See [Charts](/charts/charts) for chart types, indicators, and tools.
