# Indicators

Indicators add context to a chart without changing the price data. DegenView has 25 built in: five native ones and 20 that are Pine scripts bundled with the app. You can also add your own with [Pine scripts](/pine/using-scripts).

## The built-in indicators

Five are native to the chart:

| Indicator | What it shows |
| --- | --- |
| **Volume** (chip **Vol**) | Turnover per candle, as bars along the bottom. Only for markets that report volume. |
| **RSI** (chip **RSI 14**) | Momentum from 0 to 100 in its own pane, with guides at 30 and 70. |
| **EMA** | An exponential moving average of the closes, on the price scale. Periods 9, 20, 50, 100 or 200 (20 by default). |
| **Bollinger Bands** (chip **BB**) | A 20-period average with bands two standard deviations either side. |
| **Trend Flips** | Bullish and bearish markers from a 10-period ATR × 3 trend line. They appear after the candle closes and can whipsaw in sideways markets. |

Each native indicator can be added once per chart. RSI needs more than 14 candles, so zoom out or pick a longer timeframe if it looks empty.

The other 20 are ordinary Pine scripts that ship inside DegenView. They are always available, never appear in your scripts folder, and have inputs and styles like any script:

| Family | Indicators |
| --- | --- |
| **Trend** | Ichimoku Cloud, Parabolic SAR, Moving Average Ribbon, Linear Regression Bands, ADX / DMI, Aroon |
| **Momentum** | MACD, Stochastic, Stochastic RSI, CCI, Williams %R, Awesome Oscillator |
| **Volatility** | Donchian Channels, Keltner Channels, ATR |
| **Volume & Flow** | VWAP, Chaikin Money Flow, Money Flow Index, OBV |
| **Structure** | Williams Fractals |

Ichimoku, Parabolic SAR, the channels, the ribbon, VWAP, Williams Fractals and Linear Regression Bands draw on the price. The rest get a pane of their own. You can add a bundled indicator more than once, for example two MACDs with different lengths. VWAP needs volume.

## How to add one

1. Click a chart to focus it, then click **Indicators** in the toolbar. The picker opens.
2. Type in the search box, or browse the sidebar. Searching looks through every section and also matches aliases, so "stoch rsi" finds **Stochastic RSI**.
3. Click a card to see its preview and description, then click **Add to chart**. Return adds the selected one and closes the picker. Shift+Return adds it and keeps the picker open.

![The indicator picker](/images/charts/add-indicator.png)

The sidebar groups the list:

- **Yours**: **Favorites**, **My scripts** (your saved Pine scripts) and **Open Pine Studio**.
- **Built-in**: **Overlays** and **Separate pane**.
- **Library**: **Discover**, a popular row followed by the rest in a shuffled order (click **Shuffle** for another), and **All indicators**.
- **Families**: Trend, Momentum, Volatility, Volume & Flow and Structure.

Each card shows a small preview chart drawn on made-up bars. The detail panel has the description, the author and licence, and whether the indicator draws on the price (**Overlay**) or in its own pane (**Separate pane**). An indicator already on the chart says **On chart**, and its button reads **Remove from chart** (native ones) or **Add another copy** (scripts and bundled ones). The star next to **Add to chart** adds the indicator to your **Favorites**; press F to do the same from the keyboard. Arrow keys move through the list and Esc, or **Done**, closes the picker.

The button is greyed out when no market chart is focused. On a line chart only Volume is offered of the native indicators, and scripts are not.

## Pine scripts

Your saved indicators and strategies are listed under **My scripts**. Everything added from the picker, native or script, is one step for undo.

## Chips

Each indicator on a chart is a chip in the header. Hover a chip to show its controls:

- The eye hides or shows the indicator and keeps its settings.
- **Settings** opens the options. Only EMA and Pine scripts have it; for EMA you pick the period.
- The cross removes it.

When there are more than three chips, the rest fold into a **+N** pill that opens a list. On a narrow chart all chips fold into one count pill.

## Use the settings sheet instead

Open **Chart settings** (click the market name) and choose the **Indicators** tab. It lists the five native indicators with a switch each, and the EMA period picker.

![Indicators page in chart settings](/images/charts/settings-indicators.png)

The same sheet has a **Scripts** tab for Pine scripts on the chart. To remove several at once, right-click the chart and choose **Remove N indicators**.

## Limits

Prediction-market and CoinMarketCap charts are lines, and have no volume bars. CoinMarketCap charts have no indicators or scripts at all. On other line charts the picker offers no Pine scripts.
