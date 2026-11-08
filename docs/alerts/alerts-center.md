# Alerts center

The Alerts window lists every price alert and script alert in one place. Use it to review what fired and to pause, edit or delete alerts.

## Open it

Click the bell in the tool sidebar (**View Price Alerts**). A red count on the bell shows alerts that fired since you last looked. The Alerts center opens in its own window.

![The Alerts window](/images/alerts/alerts-window.png)

## Tabs

| Tab | What it shows |
| --- | --- |
| **Active** | Alerts that are watching the market |
| **Triggered** | Once-only alerts that fired and are waiting to be re-enabled |
| **Paused** | Alerts you switched off |
| **All** | Every price alert |
| **History** | Every time an alert fired |
| **Scripts** | Alerts from your Pine scripts, see [Script alerts](/alerts/script-alerts) |

Type in **Search asset or name** to filter the current tab.

A banner at the top tells you where alerts run. **Background agent active** means alerts keep being checked when DegenView is closed. **Foreground evaluation only** means they are checked only while the app is open. **Notifications are turned off** has an **Open Settings** button. See [Delivery and webhooks](/alerts/delivery).

## Alert cards

Each card shows the asset, what the alert waits for, the current price, how far away it is, whether it fires once or every time, and how many webhooks it posts to. A badge shows its state, such as **Re-arming** (waiting for the price to move back across the level), **Waiting for data** or **Paused**.

Open a card's menu for:

- **Edit…**
- **Pause**, **Resume** or **Re-enable**
- **Duplicate**
- **Delete…**, which asks first. Deleting an alert keeps its trigger history.

With iCloud Sync on, the menu also has **Watch on This Mac** or **Stop Watching on This Mac**. See [iCloud Sync](/settings/icloud-sync).

## History

**History** logs each time an alert fired, with its target and how many webhook posts were delivered, for example "Webhooks 2/3 delivered". **Clear History** removes every logged trigger, not only the ones matching your search, and keeps your alerts.

To make a new alert, use the bell on a chart. See [Price alerts](/alerts/price-alerts).
