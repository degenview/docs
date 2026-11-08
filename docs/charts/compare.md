# Comparing markets

::: info Newer builds
Comparing markets arrives after 0.6.0-rc.18.
:::

Compare draws other markets on top of a chart, on the same time axis, so you can see how they move against each other without opening a second chart. Add as many as you like: BTCUSDT with ETHUSDT, SOLUSDT, BNBUSDT and anything else you want to hold it against.

![BTCUSDT candles with five compared markets drawn as coloured lines on the Percent axis](/images/charts/compare-chart.png)

This is different from **Add Chart**, which puts another chart next to this one. A compared market belongs to the chart it is drawn on, is saved with it, and never changes what that chart's indicators, scripts, drawings, alerts or paper orders read: they stay on the chart's own market.

## Add a market

Any of these draws the market on the focused chart:

- Press **⌘K** (Windows and Linux: **Ctrl+K**) to open the [symbol picker](/markets/symbol-search), highlight a market and press **⌥Return** (Alt+Enter). The picker closes.
- In the picker, click the compare button that shows on the highlighted row, left of the plus, or right-click a row and choose **Compare with** the chart's market.
- Open **Chart settings ▸ Compare** and click **Add symbol…**. This opens the picker in a compare mode: **Return** draws the highlighted market and the picker stays open, so you can add several in a row. The footer reads **Compare with BTCUSDT**. Press **Esc** to close it.

![The symbol picker in compare mode: the highlighted row has a compare button and the footer says what Return does](/images/charts/compare-picker.png)

A market that is already on the chart, or is the chart's own, is marked with a check and is not added again. A stock needs Alpaca keys, as everywhere else: see [Data sources](/markets/data-sources).

Compare is not offered on every chart. Prediction-market and CoinMarketCap charts are lines, not candles, and the price-based types (Renko, Line Break, Kagi, Point & Figure, Range) have no steady time axis to line markets up on. Compared markets stay saved on a chart you switch to one of those types, but are not drawn, and the legend says why.

## How the lines line up

Markets are placed by time, never by position. A daily stock bar and a daily crypto bar that belong to the same day line up even though they open at different hours, and a stock does not take the crypto market's weekend: where a market has no candle there is a gap, the line breaks and the crosshair shows a dash. Nothing is filled in.

Each line follows one price of its candles, the close by default.

## Percent, or a scale of its own

A chart can hold markets worth 100,000 and markets worth 0.2. Each market uses one of two scales:

| Scale | What it does |
| --- | --- |
| **Chart's scale** | The line starts where the chart's own price starts, at the left edge of what you see, and moves by its own percentage change from there. On the **Percent** or **Indexed to 100** axis the axis then reads each market's change, so they compare directly. |
| **Its own scale** | The market is fitted to the height of the chart, whatever it costs. Its price is in the tag at the end of the line and in the legend, not on the axis. Pick **Scale of** another market to fit several together. |

Because the first line on the chart's scale only makes sense as a change, adding it to a chart on the **Regular** axis switches the chart to **Percent**. Only that first one does: if you later pick **Regular** again, adding more markets leaves your choice alone. **Undo** in the toolbar takes the market off and puts the axis back. See [Price scale](/charts/price-scale).

The start moves as you pan, as it does for the percent axis, so the percentages are always measured from the left edge of the chart. The settings page tells you when the current axis cannot compare the markets and offers **Percent** and **Indexed to 100** in one click.

## The legend

Each compared market is a chip in the chart header, after the indicators and scripts. Hover a chip for its controls: the eye hides or shows the line, **Settings** opens the Compare page, and the cross removes it. More than three chips fold into a **+N** pill that opens a scrolling list with each market's latest price.

![The +2 pill open, listing the two markets that did not fit as chips](/images/charts/compare-fold.png)

Right-click a chip for **Hide** or **Show**, **Settings…**, the scale (**Chart's scale**, **Its own scale**, **Scale of …**) and the drawing order (**Bring to front**, **Bring forward**, **Send backward**, **Send to back**), and **Remove**. Later markets are drawn on top of earlier ones. The lines are drawn under the chart's own candles.

A chip's tooltip says how its data is doing: waiting to load, loading, or why it failed. One market failing never affects the others or the chart; it is tried again after a short wait.

## The crosshair

Move the crosshair over the chart and a box under the open-high-low-close readout lists every compared market at that bar, in its own colour: its change on the Percent and Indexed axes, its price on the others. A ring marks the point on each line. A market with no candle at that bar shows a dash. With many markets the box lists what fits and counts the rest.

![The crosshair readout listing five compared markets](/images/charts/compare-crosshair.png)

## Chart settings ▸ Compare

Click the market name to open the chart settings and choose the **Compare** tab. It has one card per market. The card's header shows the line as it is drawn, the market, its exchange and its latest price, or what is wrong with it, with the eye, a menu for the drawing order and **Remove**, and a chevron that opens its settings:

| Setting | What it does |
| --- | --- |
| **Colour** | One of eight palette colours, or any colour with **Custom**. |
| **Line** | Width, from 0.5 to 4 px, and **Solid**, **Dashed** or **Dotted**. |
| **Price** | The price of each candle the line follows: **Open**, **High**, **Low**, **Close**, **HL2**, **HLC3** or **OHLC4**. |
| **Scale** | **Chart's scale**, **Its own scale** or **Scale of** another market. |
| **Last value tag** | The label at the end of the line with its latest value. |

![The Compare tab with the first market's settings open](/images/charts/compare-settings.png)

Up to three markets start open; with more, the cards start folded and the page remembers which you open. Past six markets a search field appears. The **…** menu next to **Add symbol…** has **Show all**, **Hide all** and **Remove all…**, which asks first. Dragging a colour in the picker is one undo step.

## Good to know

- **No limit.** Add as many markets as you like. Requests go out a few at a time and each market refreshes less often as more are active, so a big list loads in turn rather than all at once. Hidden markets are not loaded. A market compared on two charts is loaded once.
- **History.** A market loads as far back as the chart does and pages further as you scroll back. Binance markets update live; others refresh every few seconds.
- **Replay.** During [replay](/trading/replay) compared markets show only up to the replay position, in the lines, the crosshair, the legend and the percentages.
- **Snapshots.** A [snapshot](/charts/snapshots) includes the visible lines and tags.
- **Layouts.** Compared markets are saved with the chart in your layout and sync with [iCloud](/settings/icloud-sync). A build that does not know about Compare drops them the next time it saves that layout.
- **Chart templates** do not include compared markets.
- Switching the chart's market keeps its compared markets. One that is now the chart's own market stays in the list, is not drawn, and says so.
