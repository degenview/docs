# Indicators

Indicators add context to a chart without changing the price data. DegenView has five built in, and you can add your own with [Pine scripts](/pine/using-scripts).

## The built-in indicators

| Indicator | What it shows |
| --- | --- |
| **Volume** (chip **Vol**) | Turnover per candle, as bars along the bottom. Only for markets that report volume. |
| **RSI** (chip **RSI 14**) | Momentum from 0 to 100 in its own pane, with guides at 30 and 70. |
| **EMA** | An exponential moving average of the closes, on the price scale. Periods 9, 20, 50, 100 or 200 (20 by default). |
| **Bollinger Bands** (chip **BB**) | A 20-period average with bands two standard deviations either side. |
| **Trend Flips** | Bullish and bearish markers from a 10-period ATR × 3 trend line. They appear after the candle closes and can whipsaw in sideways markets. |

Each one can be added once per chart. RSI needs more than 14 candles, so zoom out or pick a longer timeframe if it looks empty.

## How to add one

1. Click **+** in the chart header, next to the chips. Once a chart has indicators, the **+** shows while you hover the header.
2. Type in **Search indicators and scripts**, or use the arrow keys and Return.
3. Pick an indicator under **Built-in**.

![Add indicator menu listing built-in indicators and scripts](/images/charts/add-indicator.png)

Indicators already on the chart are not listed again. Saved Pine scripts appear under **Scripts**, and the footer has **Pine Studio…** and **All Indicator Settings…**.

## Chips

Each indicator on a chart is a chip in the header. Hover a chip to show its controls:

- The eye hides or shows the indicator and keeps its settings.
- **Settings** opens the options. Only EMA and Pine scripts have it; for EMA you pick the period.
- The cross removes it.

When there are more than three chips, the rest fold into a **+N** pill that opens a list. On a narrow chart all chips fold into one count pill.

## Use the settings sheet instead

Open **Chart settings** (click the market name) and choose the **Indicators** tab. It lists all five with a switch each, and the EMA period picker.

![Indicators page in chart settings](/images/charts/settings-indicators.png)

The same sheet has a **Scripts** tab for Pine scripts on the chart. To remove several at once, right-click the chart and choose **Remove N indicators**.

## Limits

Prediction-market and CoinMarketCap charts are lines, and have no volume bars. CoinMarketCap charts have no indicators or scripts at all. On other line charts the indicator menu lists no Pine scripts.
