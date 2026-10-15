# Delivery & background

When an alert fires, DegenView can deliver it in two ways, independently configurable:

- **In-app banner** — a banner inside the app.
- **Desktop notification** — a native notification on macOS.

You choose which (or both) per alert.

## Background delivery on macOS

Signed macOS bundles embed a small background agent that keeps price alerts, native
notifications, and price-alert webhooks running **after you quit the app**. This means price
alerts keep firing even when the DegenView window is closed.

::: info Pine alerts are app-only
Pine Script alerts are evaluated while the app is running and are not part of background
delivery.
:::

## Webhooks

Price alerts can be delivered to a webhook, so you can forward them to other tools. Webhook
delivery is configurable in Settings.
