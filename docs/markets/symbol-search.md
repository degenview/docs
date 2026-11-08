# Changing a chart's symbol

::: info Newer builds
The symbol button and the symbol picker arrive after 0.6.0-rc.17.
:::

The symbol button at the top left of the toolbar shows the market of the chart you are working on, named the way its exchange names it: `BTCUSDT` on Binance, `BTC-USD` on Coinbase, `AAPL` for a stock. Click it to swap that chart to another market without adding a new one.

![The toolbar with the symbol button at its left end](/images/markets/toolbar-symbol.png)

## Change the symbol

1. Click a chart to focus it, then click the symbol button, or press **⌘K** (Windows and Linux: **Ctrl+K**).
2. The search opens already looking for the market the chart shows, with the text selected. Type to replace it, or pick one of the rows right away.
3. Press **Return** or click a row. The focused chart now shows that market. Its settings, indicators, drawings and place in the tab stay, and the candles reload.

![The symbol picker searching for btc across crypto and stocks](/images/markets/symbol-picker.png)

With no chart on the tab, the same search adds one.

## Finding the right market

Search for an asset ("btc"), a market ("BTCUSD", "btc/usd" and "BTC-USD" all mean the same thing) or a company ("apple").

Every dollar market of the asset (USD, USDT, USDC and the other dollar coins) comes first, from every exchange that lists it, so you can pick Binance's `BTCUSDT` or Coinbase's `BTC-USD` at a glance. Markets that merely include the asset in another currency, such as `BTCTRY`, follow below them, and unrelated names come last.

- **All, Stocks, Crypto**: the tabs narrow the results. **All** searches crypto and stocks together. Press **Tab** to move between them.
- **All venues**: choose one exchange to see only its markets.
- **A check** marks a market that is already on a chart in this tab. A **+** on the highlighted row adds the market as a new chart instead of replacing the current one.
- With nothing typed, the list shows markets you picked recently, or a few popular ones if you have none yet.

![The picker before typing, listing popular markets](/images/markets/symbol-picker-popular.png)

Stocks need your free Alpaca keys. Until they are set, the picker says so and offers **Open Settings**. See [Data sources](/markets/data-sources).

## The detail panel

The panel on the right (it hides in a narrow window) shows the highlighted market's last price and change, whether it is trading, and where it is listed. **Also trades as** lists the same asset's dollar markets on other exchanges. Click one to switch the chart straight to it.

![Stock results with the market state and price on the right](/images/markets/symbol-picker-stocks.png)

## Keys

| Key | Does |
| --- | --- |
| ↑ ↓ | Move through the results |
| Return | Replace the chart's market with the highlighted one |
| ⇧Return | Add the highlighted market as a new chart |
| Tab | Switch between All, Stocks and Crypto |
| Esc | Close |

::: info Names changed
Charts and search results used to show pairs with a slash (`BTC/USDT`). They now show the exchange's own name (`BTCUSDT`). Saved charts and alerts keep working; a watchlist row keeps the name it was saved with until you re-add it.
:::

To add prediction markets, CoinMarketCap charts or portfolio cards, use [Add Chart](/markets/adding-charts).
