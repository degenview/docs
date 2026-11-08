# Patterns, forecasting & measuring

These tools let you sketch chart patterns, Elliott waves and "what if" trades, and measure moves. You place every point yourself. Nothing is detected for you, and nothing is ever traded.

::: warning Manual and hypothetical
Pattern and wave tools never find patterns, check rules or call a pattern valid or invalid. Position and forecast tools never place an order. They are sketches, not signals or advice.
:::

## Patterns tile

| Section | Tools |
| --- | --- |
| Chart patterns | **XABCD pattern**, **Cypher pattern**, **Head and shoulders**, **ABCD pattern**, **Triangle pattern**, **Three drives pattern** |
| Elliott waves | **Elliott impulse wave (1·2·3·4·5)**, **Elliott correction wave (A·B·C)**, **Elliott triangle wave (A·B·C·D·E)**, **Elliott double combo wave (W·X·Y)**, **Elliott triple combo wave (W·X·Y·X·Z)** |
| Cycles | **Cyclic lines**, **Time cycles**, **Sine line** |

![An XABCD pattern on made-up sample candles](/images/drawings/xabcd.png)

- Click each pivot in turn. Backspace takes the last one back.
- Ratios shown between legs are measured from the real prices you placed. On chart patterns, turn **Pivot names** and **Ratios** on or off in the settings, and set the **Precision** (0 to 6 decimals).
- Elliott waves have a **Labels** switch and offer nine degrees, from Grand Supercycle to Subminuette. The default is Intermediate.
- Cycles are counted in bars, not clock time.

![An Elliott impulse wave on made-up sample candles](/images/drawings/elliott-impulse.png)

## Forecast tile

| Section | Tools |
| --- | --- |
| Forecasting and measurement | **Long position**, **Short position**, **Position forecast**, **Bars pattern**, **Ghost feed**, **Sector** |
| Volume-based | **Anchored VWAP**, **Fixed range volume profile**, **Anchored volume profile** |
| Measurers | **Price range**, **Date range**, **Date and price range** |

### Positions and forecasts

**Long position** and **Short position** show a target and a stop around an entry, with the profit, loss and reward over risk. They are labelled "(hypothetical)". Settings are account (default 1,000), lot, risk (default 25 % of the account), leverage, **Compact stats** and **Always show stats**. To trade for real, use [Paper trading](/trading/paper-trading).

**Position forecast** draws an arrow from a source to a target. It says Success or Failure once the bars you have show which happened.

### Bars pattern, Ghost feed and Sector

- **Bars pattern** copies up to 500 bars and sets them down elsewhere. It can be mirrored or flipped.
- **Ghost feed** draws made-up candles between two points, up to 500. **New run** (under **Draw another run** in the settings) gives a new random run. It is not a prediction.
- **Sector** draws a wedge of a circle from three clicks: an origin, a point to its right that sets the radius, and a third that sets the angle.

### VWAP and volume profiles

- **Anchored VWAP** uses the average of high, low and close, with up to three bands at 1, 2 and 3 standard deviations (only the first is on by default). It shows "No volume data" if the market has none.
- Volume profiles use 24 rows and a 70 % value area, in Total, Up/Down or Delta modes. They need a market with volume.

### Measurers

Each measurer prints price change, percent, ticks, bars (counting both ends), time and volume. You can switch each off.

::: tip
Ticks here are steps of the last price place, not an exchange tick size. Pips are not offered.
:::
