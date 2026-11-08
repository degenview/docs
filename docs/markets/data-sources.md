# Data sources

DegenView gets candles and quotes straight from public market-data providers. Most need no setup. Only stock charts need free Alpaca keys, and CoinMarketCap keys are optional.

## Providers

| Provider | Section in Add Chart | Good to know |
| --- | --- | --- |
| **Binance** | Crypto | Live candle updates. Older history loads as you scroll back. |
| **Coinbase** | Crypto | Refreshes every few seconds. Older history loads as you scroll back. |
| **DEXScreener** | Crypto | Search comes from DEXScreener and candles from GeckoTerminal, which serves about 180 days on its free tier. Longer timeframes are shallow. |
| **CoinGecko** | Crypto | No volume and no older history. Rate-limited, so it refreshes more slowly. |
| **Alpaca (IEX)** | Stocks | US stocks and ETFs on Alpaca's free IEX feed. Needs keys. IEX is a single exchange, so volume can be lower than consolidated figures. |
| **Polymarket** | Predictions | Drawn as a probability line. Has a **Trending on Polymarket** list. |
| **Kalshi** | Predictions | Drawn as a probability line. |
| **CoinMarketCap** | CoinMarketCap | Altcoin Season Index, Altcoin Season History, Fear & Greed Index and Fear & Greed History. |

Volume exists for Binance, Coinbase, DEXScreener and Alpaca only. Prediction markets and CoinMarketCap charts are drawn as lines: they have no chart-type choice and no volume bars, and the indicator menu offers no Pine scripts on them. CoinMarketCap charts also have no indicators or scripts, so their chart settings offer only **Appearance** and **Canvas**.

## How fresh is the data

Only Binance streams live candles. Every other provider is polled on a timer, more slowly for rate-limited ones. If a refresh fails, the chart keeps the last data and shows a pill such as **Couldn't refresh · showing the last result**. Background tabs and hidden windows pause their feeds.

## Set up Alpaca for stocks

1. Open **Settings ▸ Alpaca**. The page walks you through **Getting your keys**: create a free account and generate a key in the API Keys section of the Alpaca dashboard.
2. Paste **API Key ID** and **Secret Key**, then click **Save**. The badge changes to **Keys saved**.
3. Use **Remove Keys** to delete them.

![The Alpaca settings page](/images/settings/alpaca.png)

Until keys are saved, the **Stocks** section says **Set up Alpaca before adding a stock chart.** and offers **Open Settings**.

## CoinMarketCap key (optional)

**Settings ▸ CoinMarketCap** works in **Public API mode** without a key. A key only raises rate limits. **Test Connection** checks it.

![The CoinMarketCap settings page](/images/settings/cmc.png)

::: info Where keys are stored
On macOS keys go to the Keychain, on Linux to the Secret Service, and on Windows to Windows Credential Manager. You can also set the environment variables `DEGENVIEW_ALPACA_KEY_ID`, `DEGENVIEW_ALPACA_SECRET_KEY` and `DEGENVIEW_CMC_API_KEY` before starting DegenView; they are used when nothing is saved. See [Platforms](/reference/platforms).
:::

## Next steps

- [Adding charts](/markets/adding-charts)
- [Troubleshooting](/reference/troubleshooting) if a chart stays empty.
