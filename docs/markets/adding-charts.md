# Adding charts

A chart follows one market: a crypto pair, a US stock, a prediction market or a market-wide index. You add charts from the **Add Chart** sheet, which searches several data providers at once.

## How to add a chart

1. Click **Add Chart** at the top right of a tab. On an empty tab (**Start a new chart**) you can also click the big search box.
2. Pick a section: **Crypto**, **Stocks**, **Predictions**, **CoinMarketCap** or **Portfolio**.
3. Type in the search box, or click one of the suggestions shown while it is empty.
4. Select a result, then click **Add**. Return selects the first result, and Return again adds it. Double-clicking a result adds it straight away.

![Add Chart sheet before typing, showing crypto suggestions](/images/markets/add-chart-start.png)

Crypto search asks Binance, Coinbase, DEXScreener and CoinGecko together and groups the results by provider. The same symbol from two providers stays two separate charts, so you can keep a Binance chart and a Coinbase chart of the same coin side by side.

![Add Chart sheet with search results grouped by provider](/images/markets/add-chart.png)

Markets you picked before show up under **Recent**. Use **Clear**, or right-click a row and choose **Remove from Recent**.

## What each section does

| Section | Notes |
| --- | --- |
| **Crypto** | Pairs and on-chain tokens. No key needed. |
| **Stocks** | US stocks and ETFs. Needs free Alpaca keys: see [Data sources](/markets/data-sources). |
| **Predictions** | Polymarket and Kalshi. Use the provider dropdown to switch. |
| **CoinMarketCap** | Four market-wide charts: Altcoin Season and Fear & Greed, each as a history chart or a current gauge. |
| **Portfolio** | Adds a portfolio card instead of a market chart. See [Overview & holdings](/portfolio/overview). |

### Several outcomes on one chart

Prediction results are grouped by event. Tick several choices of one event, or tick the box on the event heading to select them all, to get one chart with a coloured line per choice. You can only combine choices from the same event. Such a chart is saved with your layout, but it cannot be stored in a watchlist.

## Timeframe

The timeframe buttons at the top left of the tab (**1H, 1D, 1W, 1M, 3M, 1Y**) apply to every chart in that tab. There are no minute timeframes.

## Next steps

- [Watchlists](/markets/watchlists) keep the markets you follow, and can add charts too.
- [Charts & navigation](/charts/charts) explains what is on a chart.
