# Price alerts

A price alert tells you when a market crosses a level. DegenView checks it on your computer, so you need no account or online service.

## Create an alert

Start from any of these:

- the bell in a chart's header (**Create Price Alert**);
- a watchlist row's menu, **Create Price Alert…**;
- a right-click on the chart, **Add alert on SYMBOL at PRICE…**, which starts at the price you clicked;
- a price-line drawing's menu, **Add alert at this price**.

The sheet opens with these choices:

| Setting | Options |
| --- | --- |
| **Alert me when the price** | **Above**, **Below**, **Rises**, **Falls** |
| **Target price** | The level, or a percentage for Rises and Falls |
| **Currency** | USD, EUR, GBP, JPY or CHF |
| **How often** | **Once** or **Every time** |
| Note | Optional text |
| **Send to webhooks** | Optional, see [Delivery and webhooks](/alerts/delivery) |

![The price alert editor](/images/alerts/alert-editor.png)

**Rises** and **Falls** work from the current price: "rises 10%" means 10% above the price when you open the sheet. They need a fresh price. If the same alert already exists, the sheet warns you before saving a second one.

## How an alert fires

An alert fires when the price **crosses** the level, from the far side to the near side. A price that is simply sitting past the level does not fire it.

- **Once** fires, then waits in the **Triggered** tab until you re-enable it.
- **Every time** re-arms after the price crosses back, and fires on the next crossing.
- Each new price update is checked once against each alert.

An alert can only fire while DegenView is watching the market. A crossing that happens while the app is closed and no [background agent](/alerts/delivery) is running is not reported afterwards.

## Alert lines on the chart

Each active or paused alert is a dashed line at its level, with an arrow at the right edge of the plot.

![Alert lines with their pills](/images/alerts/alert-lines.png)

- Click the arrow to open a pill with the level and a bin. Click again to close it.
- **Drag the arrow or pill up or down** to reprice the alert. It snaps to the price tick. Dragging across the current price flips its direction. Press Esc to cancel a drag.
- Right-click for **Edit alert…**, **Pause alert** or **Resume alert**, and **Delete alert**.

Percentage alerts cannot be dragged. Alerts in a currency with no exchange rate are not drawn.

## Limits

- An AI assistant using the [MCP server](/mcp/setup) cannot create a new price alert once you already have 500.
- Prediction markets and CoinMarketCap indices do not support alerts.
- Alerts are not available during [replay](/trading/replay).

Manage them in the [Alerts center](/alerts/alerts-center). For Pine Script alerts, see [Script alerts](/alerts/script-alerts).
