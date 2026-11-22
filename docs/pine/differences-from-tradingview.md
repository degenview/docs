# Differences from TradingView

DegenView runs Pine Script v6 with its own engine. For the built-ins listed under [Checked against TradingView](#checked-against-tradingview), the same script on the same symbol and timeframe gives the same numbers as TradingView. This page lists where results still differ, so you know what to expect when you move a script across.

DegenView is not affiliated with TradingView. For what is and is not supported at all, see [What Pine supports](/pine/language).

## Where results can differ

### Data

- **Candles come from a different feed.** Prices, volume and the first bar of a chart can differ by a little. Volume-based series such as `ta.obv` and `ta.pvt` can sit at a constant offset from TradingView after a single bar whose volume differs. The shape is identical.

### Other timeframes and symbols

- **Warm-up on the chart's own symbol.** When a script asks for a higher timeframe of the symbol it is on, DegenView first loads about 300 earlier higher-timeframe bars. TradingView does not. Averages such as an EMA on that request settle sooner in DegenView, so the first values after the chart starts can differ.
- **Stocks and futures.** Higher-timeframe buckets follow the calendar, not the exchange's session. A "1D" request on a stock can group bars differently from TradingView.
- **`calc_bars_count`.** On TradingView it counts candles of the timeframe being requested, and the candle still forming is one of them. Several requests on the same timeframe in one script share one window, and the largest count wins for all of them. DegenView windows each request on its own count, so a script that mixes counts for one timeframe can see fewer bars than on TradingView.
- **`indicator(timeframe = ...)`.** It is not applied. The script runs on the chart's timeframe. Use `request.security` to read another timeframe.
- **Candles come in 1H, 1D, 1W, 1M, 3M and 1Y.** There are no minute timeframes.

### Live bars and alerts

- **When a bar counts as closed.** DegenView takes it from the data feed, not the clock. A bar that arrives already closed is run as history. TradingView closes it by wall-clock time.
- **`alertcondition()` frequency.** DegenView does not apply the frequency a script implies. Check how often the alert fires when you create it.

### Indicator maths

- **`ta.*` calls in loops.** Each call keeps one running state per script line. Calling the same `ta.*` function several times from one line in a loop shares that state. Move the call out of the loop, or call it before the loop.
- **Locals with the same name in separate blocks.** Two blocks that each declare a variable with the same name can read each other's history through `[1]`. Give them different names.
- **Functions not measured against TradingView.** These stay strict about `na`: when any value in the window is `na`, the result is `na`. TradingView's behaviour was not measured for them: `ta.cog`, `ta.cmo`, `ta.cci`, `ta.hma`, `ta.correlation`, `ta.mode`, `ta.mfi`, `ta.tsi`, `ta.kc`, `ta.vwma`, `ta.wpr`, `ta.rci`, `ta.highestbars`, `ta.lowestbars`, `ta.rising` and `ta.falling`. On a feed with gaps they can differ from TradingView.
- **Infinities.** On TradingView `math.abs`, `math.sqrt`, `math.exp`, `math.floor`, `math.ceil`, `math.pow`, `math.avg`, `math.sign` and `math.log` of an infinity stay infinite, and `inf >= inf` and `inf <= inf` are `false`. DegenView gives `na` for some of these and `true` for the comparisons, so a script that relies on an infinity surviving a calculation can differ.
- **Dividing by a literal zero.** `x / 0` is a compile error on TradingView (CE10224). DegenView accepts it and gives an infinity. Dividing by a variable that holds zero gives an infinity on both.
- **`max_bars_back`.** It is accepted, but DegenView does not model a fixed history buffer.

### Text

- **`str.format` with `{0}` on whole numbers.** TradingView groups thousands in some cases (`8,050`). DegenView prints `8050`.

## Checked against TradingView

The same probe scripts were run on a TradingView chart and in DegenView (BINANCE:BTCUSDT, 1H, thousands of bars), and the tables compared cell by cell. These matched:

- `ta.macd` with any three lengths, including a source with gaps.
- `ta.supertrend` and `ta.sar`, including named arguments.
- `ta.stdev`, `ta.variance` (biased and unbiased) and `ta.bbw`.
- `ta.iii`, `ta.obv`, `ta.pvt` and `ta.cum`, including which bar they start on.
- `ta.vwap` as a variable and as a function. It starts on the first bar, as on TradingView.
- `request.security` context: `timeframe.change`, `bar_index`, `barstate.isfirst`, `ta.tr` and history inside the request.
- History of variables declared inside functions and blocks.
- The price axis range when the chart is scrolled back: extended horizontal lines, boxes and labels in the margin widen it, sloped extended lines do not.

Not compared on a live TradingView chart: `barstate` flags on a live bar beyond the cases above, `request.security` with `lookahead_on` across every timeframe pair, and `na` in division.

## Rules worth knowing

- **Comparing decimals.** All six comparison operators treat two numbers as equal when they differ by at most 0.0000000001 (`1e-10`). `0.1 + 0.2 == 0.3` is `true`, as on TradingView. Infinities order correctly, and any comparison to `na` with `==` is `false`.
- **Calls that can skip bars.** A `ta.*` call inside a condition, ternary or function that does not run on every bar gets warning CW10004 in **Problems**, as on TradingView.
- **Woodie pivots.** Woodie pivots with the developing option turned on stop the script with an error, as on TradingView.
- **Names.** A collection of collections, and variable names that are Pine reserved words, are errors, as on TradingView.

If a script gives different numbers from TradingView and the cause is not on this page, check the data first: open the same symbol and timeframe in both and compare the candles.
