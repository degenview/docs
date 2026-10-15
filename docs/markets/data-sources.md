# Data sources

DegenView pulls market data from several sources. Most need no setup; only stocks require an
API key.

## Crypto

Crypto charts are available from four sources, searchable side by side:

- **Binance** — spot pairs, with real-time WebSocket updates.
- **Coinbase** — spot pairs, with real-time WebSocket updates.
- **CoinGecko** — broad crypto coverage.
- **DEXScreener** — decentralized-exchange pairs, with historical candles from GeckoTerminal.

No key is required for any of them.

## Stocks

US equities come through **Alpaca's IEX feed**. This is the one source that needs credentials —
a free Alpaca account with API keys.

- On macOS, store the keys in Keychain (Settings ▸ API Keys).
- On Windows and Linux, set the `DEGENVIEW_ALPACA_KEY_ID` and
  `DEGENVIEW_ALPACA_SECRET_KEY` environment variables.

See [Installation](/getting-started/installation) for the exact commands.

## Prediction markets

**Polymarket** and **Kalshi** events are charted as probabilities. These are prediction
markets — instead of a price, you watch the market's implied chance of an outcome. No key
needed.

## CoinMarketCap indices

Two market-wide indices are available, historical or latest:

- **Altcoin Season** — whether altcoins are outperforming Bitcoin.
- **Crypto Fear and Greed** — overall market sentiment.

No CoinMarketCap API key is required for the default access. Adding one in Settings is
optional and can raise your rate limits.

## Live vs. refreshed data

| Source | Update style |
| --- | --- |
| Binance, Coinbase | Real-time WebSocket |
| Other sources | Automatic refresh |

You don't have to manage any of this — DegenView picks the right update method per source.
