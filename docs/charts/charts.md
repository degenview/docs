# Charts & navigation

Every chart is a card in your tab. This page covers what is on a card and how to move around it.

## What is on a chart

The top of each card is its header, left to right:

- A grip to drag the card to a new place.
- The source logo, the market name and the last price. Click any of them to open **Chart settings**.
- Indicator chips. See [Indicators](/charts/indicators).
- On the right: a star for **Favorites**, a camera for [snapshots](/charts/snapshots), a bell for [price alerts](/alerts/price-alerts), and the percent change across the bars you see now. Prediction-market and CoinMarketCap charts have no bell.

The chart type and the indicator picker are not in the header. They are buttons in the toolbar above the cards, and they act on the focused chart.

Under the header is the plot, with the price axis on the right and the time axis at the bottom. A box of open, high, low and close values shows at the top left of the plot while you hover. A **Replay** badge appears in the header during [replay](/trading/replay). Right-click anywhere for the menus described in [Chart settings & templates](/charts/settings-templates).

## The toolbar

The toolbar runs across the top of every chart tab.

![The toolbar](/images/charts/toolbar.png)

From the left:

- **1H, 1D, 1W, 1M, 3M, 1Y** set the candle size for every chart in the tab. See [Adding charts](/markets/adding-charts#timeframe).
- The **chart-type** button opens the [chart type](/charts/chart-types) menu.
- **Indicators** opens the [indicator picker](/charts/indicators).
- **Replay** starts and stops [historical replay](/trading/replay). While a replay is open it is lit.
- **Undo** and **Redo** step back and forward through changes to drawings, indicators, scripts and zooms. They are greyed out when there is nothing to undo or redo. The keyboard shortcuts do the same (see [Keyboard shortcuts](/reference/shortcuts)).

At the right, the layout menu shows the layout name (see [Layouts](/workspace/layouts)), followed by **Chart settings**, **Portfolio Tracker**, **Pine Studio**, the watchlist button and **Add Chart**.

Chart type, **Indicators** and **Chart settings** act on the focused chart, the one with the highlighted frame. Click a chart to focus it. They are greyed out when there is no market chart to act on, for instance in an empty tab. When the window is narrow, **Indicators**, **Replay** and **Add Chart** drop their labels and keep their icons.

## Move and zoom

| Do this | Result |
| --- | --- |
| Drag the plot | Pans. Dragging up or down also moves the price range and turns autoscale off. |
| Mouse wheel | Zooms the bars. The newest bar stays where it is, so you zoom in on the latest candles. |
| ⌘ + wheel (Ctrl + wheel on Windows and Linux) | Zooms the bars around the pointer. The candle under the pointer stays under it. |
| Pinch on a trackpad | Same as ⌘ + wheel: zooms around the pointer. Spread your fingers to show fewer bars. |
| Wheel, ⌘ + wheel or pinch over the price axis | Stretches the price range, like dragging the axis. The time is left alone. |
| Swipe sideways on a trackpad | Scrolls through time. |
| Drag the price axis | Stretches the price range. |
| Drag the time axis | Stretches the bars. The newest bar stays put. |
| Double-click the price axis | Turns autoscale back on. |
| Double-click the time axis | Jumps to the newest bars at default spacing. |
| Esc during a drag | Puts the view back where the drag started. |

A chart shows at least 20 bars, so zooming in stops there. Zooming around the pointer also moves the right edge of the chart. In [linked charts](/charts/linked-charts) that syncs position, the other charts follow it. There are no keyboard shortcuts for moving around.

::: tip Zoom on one gesture
Hold ⌘ (Ctrl on Windows and Linux) and scroll to zoom on the candle you are looking at. Without the key, the wheel always zooms toward the newest bars.
:::

## Navigation buttons

Five small buttons sit at the bottom left of the plot: **Zoom in**, **Zoom out**, **Scroll to the left**, **Scroll to the right** and **Reset chart view**. Like the time axis, they zoom around the newest bar. The scroll buttons stop at the newest bar; only dragging goes on into empty space. Show or hide them with the **Navigation** row in **Chart settings ▸ Canvas ▸ Buttons** (**Always visible**, **Visible on mouse over** or **Never visible**). They show on mouse over by default. Hiding them does not disable the wheel, the pinch or the trackpad.

## Older history

Scroll back toward the oldest bar and DegenView loads 1,000 more candles at a time, up to 100,000. Binance, Coinbase, OKX, Bybit, Gate.io, MEXC and Alpaca do this. Gate.io reaches back about 8,900 candles, and Kraken has only its newest 720. DEXScreener does it on 1H only, and CoinGecko, prediction markets and CoinMarketCap do not.

New live bars move the view only if the newest bar is on screen. If you are looking at older bars, they stay put.

## Crosshair

The pointer draws a crosshair. In a tab with several charts it also shows as a vertical line at the same horizontal position on each. Right-click the plot and choose **Lock vertical cursor line by time** to pin a line at that time while you move the pointer elsewhere. The lock is not saved with your layout.

::: info Newer builds
**Zoom in tool.** Click the magnifier on the left tool strip, under the ruler, then drag a rectangle on the chart to zoom to it on both axes. A drag under 8 points tall zooms time only, and Esc cancels. While the chart has a zoom to go back from, a **Zoom out** tile appears under it and steps back up to 8 zooms. Both are undo steps (⌘Z, or Ctrl+Z on Windows and Linux).
:::

![Zoom rectangle dragged over example candles](/images/charts/zoom-in.png)

The candles shown are made-up examples.
