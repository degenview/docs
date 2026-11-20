# Liquidations and taker flow

::: info Newer builds
The market flow panel arrives after 0.6.0-rc.31.
:::

The market flow panel shows two things the candles do not: who is being forced out of their positions, and who is pushing the price. It docks at the right of a chart tab and has three modes, switched at the top of the panel:

- **Liquidations** shows how much was force-liquidated across the market, and a tape of the latest ones.
- **Taker flow** shows, for the market of the focused chart, whether buyers or sellers were the aggressors.
- **Book** shows the order book of the focused chart's market. It has a page of its own: [Order book](/charts/order-book).

Liquidations and Taker flow read the exchanges' public sockets. They need no keys and no account, nothing is saved, and a panel only ever holds the last hour.

## Open the panel

Click the flame in the toolbar, to the right of the watchlist button (**Show Market Flow** or **Hide Market Flow**), or the cross in the panel's header to close it. Each tab remembers whether it is open while DegenView runs, but a tab starts with it closed the next time you launch.

The panel only listens while it is drawn, and only for the mode on show. Close it, or leave the tab, and the sockets close within a few seconds. Nothing is collected in the background, so when you open it again it starts from an empty hour.

## Liquidations

A liquidation happens when an exchange closes a leveraged position by force because its owner can no longer cover it. The panel adds up the perpetual futures liquidations announced by Binance and Bybit.

![The Liquidations mode: totals for the last minute, five minutes and hour, and the tape of the latest liquidations](/images/charts/liquidations-panel.png)

The top of the panel gives the **Last minute**, **5 minutes** and **Hour** totals in dollars. Under each total a bar shows the split: red is longs liquidated, green is shorts liquidated.

- A **long** is liquidated by a forced sale, so it reads **Long** in red. Usually the price is falling.
- A **short** is liquidated by a forced buy, so it reads **Short** in green. Usually the price is rising.

Under **Latest** is the tape, newest first, with the time, the market, the side and the size in dollars. Hover a row for the exchange, the amount and the price. The size menu (**Any size**, **$1K and up**, **$10K and up**, **$100K and up**, **$1M and up**) filters the tape only. The totals always count every liquidation, so a quiet tape under a large filter does not mean a quiet market.

The tape shows the latest 300 matching rows of the last hour.

### Read the footnote

The exchanges do not announce every liquidation, so the totals are a floor, and a busy moment adds up to less than it was:

- **Binance** sends at most the latest liquidation of each market per second. In a cascade the others in that second never arrive.
- **Bybit** has no feed for every market, so DegenView follows its 60 busiest markets. A liquidation in a smaller market is not counted. The list is fetched when the panel opens.
- Only USDT and USDC perpetuals are counted, as dollars (price times size). Coin-margined contracts are left out, and so are exchanges other than Binance and Bybit.
- A liquidation order that has not filled anything yet is not a liquidation, and is ignored.

The figures are what the two exchanges announce. They are not checked against a third-party aggregator, so expect them to differ from the numbers a site such as Coinglass shows.

## Taker flow

Every trade has a taker: the side that hit the order book, a buyer lifting an offer or a seller hitting a bid. **Net flow** is what the takers bought minus what they sold, in dollars. Positive, in green, means buyers were the aggressors. Negative, in red, means sellers were. It tells you who was in a hurry, not who was right.

Taker flow follows the focused chart. Open it with BTCUSDT focused and it shows Bitcoin; focus ETHUSDT and it switches to Ethereum, starting from an empty record. A chart from another crypto exchange counts too: Coinbase's `BTC-USD` and Kraken's `XBT/USD` are both Bitcoin. A stock, a prediction market or a CoinMarketCap chart has no flow, and the panel says **No flow for this market**.

![The Taker flow mode for BTC a few minutes after opening: net flow for three spans, a bar per minute with the minutes before the panel opened left empty, and each venue's flow](/images/charts/taker-flow-panel.png)

For the asset, DegenView follows four markets, all quoted in USDT:

| Venue | Market |
| --- | --- |
| **Binance spot** | `{ASSET}USDT` |
| **Binance perp** | the USDⓈ-M perpetual |
| **Bybit spot** | `{ASSET}USDT` |
| **Bybit perp** | the linear perpetual |

The panel shows, from the top:

- The **net flow** over the **Last minute**, **5 minutes** and **Hour**, all four venues added up. The bar under each is the split between buying (green) and selling (red). Hover it for the dollars bought and sold.
- **Net flow a minute, last 30 minutes**: a bar for each minute, the newest at the right, up when takers bought more than they sold and down when they sold more. Hover a bar for that minute's net, bought and sold.
- A table with each **venue**'s net over **1m**, **5m** and **1h**. Hover a row for what that venue's takers bought and sold in the hour.

Until the first trade arrives the panel says **Waiting for {asset} trades**. A market a venue does not list stays empty there, and the venue shows a dash. Many perpetuals use another name, for example `1000PEPEUSDT` for PEPE, so their flow may only come from the venues that list `PEPEUSDT`. Bybit is not served in some countries: if it cannot be reached its two rows stay empty and the totals are marked partial, as below.

Taker flow follows one asset at a time, because the exchanges have no feed of every market's trades. Two windows showing two different assets each keep their own record.

### Partial figures

A quiet market and a connection that was not there look the same in the trades, so DegenView also keeps when each venue's socket was connected. A figure that covers only part of its period is marked, so you do not read a young record as a full hour:

- A total whose period was only partly observed shows **partial** under its bar. Hover the bar to see how much of the period was observed. The **Hour** reads partial for the first hour after you open the panel, and the **5 minutes** for the first five.
- A venue's figure for a period that was not fully observed is muted.
- A minute bar that some venue was not connected for is faded. A minute no venue was connected for is drawn as an empty dark cell, not as a quiet minute.

![The Taker flow mode seconds after opening: every total says partial and every venue figure is muted](/images/charts/taker-flow-partial.png)

A drop in a connection leaves the same marks: the totals that include the gap read partial and the minutes it covered are faded, until they roll out of the hour. Reconnecting is automatic.

## When the panel stays empty

| You see | Why |
| --- | --- |
| **Waiting for liquidations** | None has been announced since you opened the panel. Liquidations come in bursts, so a calm market can stay silent for minutes. |
| **No flow for this market** | The focused chart is not a crypto market, or has no `{ASSET}USDT` market on the four venues. |
| **Waiting for {asset} trades** | No venue has traded since you opened the panel. A thinly traded market can take a while. |
| One venue shows dashes | That venue does not list the market or could not be reached. |

If a venue is unreachable because of a VPN or proxy, see [Network and proxy](/settings/network).

## Next steps

- [Changing a chart's symbol](/markets/symbol-search), to move the focused chart, and its taker flow, to another market.
- [Data sources](/markets/data-sources) for the providers behind the charts.
