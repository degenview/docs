# Charts & navigation

Every chart is a card in your tab. This page covers what is on a card and how to move around it.

## What is on a chart

The top of each card is its header, left to right:

- A grip to drag the card to a new place.
- The source logo, the market name and the last price. Click any of them to open **Chart settings**.
- Indicator chips and a **+** button. See [Indicators](/charts/indicators).
- On the right: the chart-type button ([Chart types](/charts/chart-types)), a star for **Favorites**, a camera for [snapshots](/charts/snapshots), a bell for [price alerts](/alerts/price-alerts), and the percent change across the bars you see now. Prediction-market and CoinMarketCap charts have no chart-type button or bell.

Under the header is the plot, with the price axis on the right and the time axis at the bottom. A box of open, high, low and close values shows at the top left of the plot while you hover. A **Replay** badge appears in the header during [replay](/trading/replay). Right-click anywhere for the menus described in [Chart settings & templates](/charts/settings-templates).

## Move and zoom

| Do this | Result |
| --- | --- |
| Drag the plot | Pans. Dragging up or down also moves the price range and turns autoscale off. |
| Mouse wheel | Zooms. |
| Swipe sideways on a trackpad | Scrolls through time. |
| Drag the price axis | Stretches the price range. |
| Drag the time axis | Stretches the bars. The newest bar stays put. |
| Double-click the price axis | Turns autoscale back on. |
| Double-click the time axis | Jumps to the newest bars at default spacing. |
| Esc during a drag | Puts the view back where the drag started. |

Trackpad pinch does not zoom, and there are no keyboard shortcuts for moving around.

## Navigation buttons

Five small buttons sit at the bottom left of the plot: **Zoom in**, **Zoom out**, **Scroll to the left**, **Scroll to the right** and **Reset chart view**. Show or hide them with the **Navigation** row in **Chart settings ▸ Canvas ▸ Buttons** (**Always visible**, **Visible on mouse over** or **Never visible**). They show on mouse over by default. Hiding them does not disable the wheel or trackpad.

## Older history

Scroll back toward the oldest bar and DegenView loads 1,000 more candles at a time, up to 100,000. Binance, Coinbase and Alpaca do this. DEXScreener does it on 1H only, and CoinGecko, prediction markets and CoinMarketCap do not.

New live bars move the view only if the newest bar is on screen. If you are looking at older bars, they stay put.

## Crosshair

The pointer draws a crosshair. In a tab with several charts it also shows as a vertical line at the same horizontal position on each. Right-click the plot and choose **Lock vertical cursor line by time** to pin a line at that time while you move the pointer elsewhere. The lock is not saved with your layout.

::: info Newer builds
**Zoom in tool.** Click the magnifier on the left tool strip, under the ruler, then drag a rectangle on the chart to zoom to it on both axes. A drag under 8 points tall zooms time only, and Esc cancels. While the chart has a zoom to go back from, a **Zoom out** tile appears under it and steps back up to 8 zooms. Both are undo steps (⌘Z, or Ctrl+Z on Windows and Linux).
:::

![Zoom rectangle dragged over example candles](/images/charts/zoom-in.png)

The candles shown are made-up examples.
