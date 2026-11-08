# What Pine supports

DegenView runs Pine Script **version 6** with its own engine. Most everyday indicators and strategies work. This page says what does, what does not, and what to do when a script from elsewhere misbehaves.

## What works

- Indicators, strategies and libraries. A script can import your own libraries from Pine Studio.
- Plots, fills, shapes, arrows, background and candle colours, labels, lines, boxes, tables, polylines and line fills.
- Inputs of every common type: numbers, true/false, colours, text, time, price, source, symbol, session, timeframe and drop-down lists.
- The `ta`, `math`, `str` and `color` libraries, plus arrays, maps and matrices.
- Your own functions, types and methods, and `varip` variables.
- Other timeframes and symbols through `request.security`, and finer-grained candles through `request.security_lower_tf`.
- `request.footprint()`, which builds volume rows from finer candles. This is an approximation, not true tick data.
- Strategies with entries, orders, exits, order groups, risk rules, backtest figures and a trade list.
- `alert()` and `alertcondition()`. See [Script alerts](/alerts/script-alerts).
- `log.info()`, `log.warning()` and `log.error()`.

## Limits

| Limit | Value |
| --- | --- |
| Script size | Up to 500,000 characters and 50,000 words and symbols |
| Run time | 10 seconds per run |
| Work per bar | 20 million operations |
| Function call depth | 64 |

Candles come in 1H, 1D, 1W, 1M, 3M and 1Y sizes. There are no minute timeframes.

## What returns na or is approximate

When a script uses a data feed DegenView does not have, it gets `na` and a warning in **Problems**. Most other unsupported settings warn too.

- No data feed for `request.seed`, `request.dividends`, `request.earnings`, `request.economic`, `request.financial`, `request.quandl` or `request.splits`. `request.currency_rate` gives 1 for the same currency and `na` for any other. Many symbol-info values for dividends and earnings are also `na`.
- Strategies have no margin model, so there are no margin calls. The bar magnifier and `calc_on_order_fills` are ignored, with a warning. `strategy.convert_to_account` and `strategy.convert_to_symbol` return the amount unchanged.
- On stocks, calendar values such as the hour or day of week use UTC, not the exchange's time zone.
- Font family, bold and italic on labels, boxes and table cells are accepted but ignored.

::: info Newer builds
If a script fails while running, it stops and keeps the bars it already drew. Warnings also appear for strategy settings that are ignored.
:::

## If a script from TradingView does not work

1. **Check the version line.** It must be `//@version=6`. Scripts written for version 5 or older are rejected. Update them using TradingView's version 6 migration guide, then paste again.
2. **Read Problems.** Open the **Problems** tab in [Pine Studio](/pine/writing-scripts). Click an item to jump to its line.
3. **Look for warnings about `na`.** They name the feature that is missing.
4. **Do not name a variable like a built-in.** Writing `open = 1` gives a warning, or an error if the script already used the built-in.
5. **Try a smaller version.** Remove parts until it runs, or use the [debugger](/pine/debugger-profiler) to see where values go wrong.
6. **Ask the assistant.** The [AI assistant](/pine/ai-assistant) can explain an error.

Community scripts are the work of their authors. Check a script's licence before you reuse it. Results can differ from TradingView's because the data sources differ.
