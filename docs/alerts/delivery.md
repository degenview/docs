# Delivery, background and webhooks

When an alert fires, DegenView can show a banner, play a sound, send a macOS notification and post to your own server. You set the first three in **Settings ▸ Notifications**, and webhooks in **Settings ▸ Webhooks**.

## Notifications

![The Notifications page in Settings](/images/alerts/settings-notifications.png)

| Switch | What it does |
| --- | --- |
| **Price Alert Delivery** | Turns checking and delivering price alerts on or off |
| **Sound** | Plays an alert sound with a notification |
| **In-App Banners** | Shows a banner at the top of the window while DegenView is open |
| **macOS Notifications** | Sends alerts through Notification Center, even in the background (macOS only) |

A banner goes away after six seconds, or when you click its ✕. A newer price alert replaces an older one. Banners are for price alerts only. Script alerts use a macOS notification and webhooks.

## Background agent (macOS)

On macOS, the signed release embeds a small agent. It keeps price alerts, notifications and price-alert webhooks working **after you quit DegenView**. The **Background agent** section of the page shows its status, notification permission and last heartbeat, with **Retry Registration**, **Login Items Settings** and **Notification Settings** buttons.

If the status says **Needs approval in Login Items**, switch DegenView on in System Settings. **Foreground only** means the agent is switched off. **Agent not embedded** means this build has none.

Script alerts are never run by the agent. They need DegenView open. See [Script alerts](/alerts/script-alerts).

::: warning Windows and Linux
Desktop notifications, sound and the background agent exist only on macOS. Elsewhere, price alerts show as in-app banners and are checked only while DegenView is open, and script alerts reach you only through webhooks. The **Sound** switch is shown but does not play anything.
:::

## Webhooks

A webhook posts an alert's message to a web address you choose, for example a chat channel or a trading bot. Open **Settings ▸ Webhooks**.

![The Webhooks page in Settings](/images/alerts/settings-webhooks.png)

1. Click **Add Webhook**.
2. Enter a **Name** and the **Webhook URL**. It must start with `http://` or `https://`.
3. Choose the method, **POST** or **PUT**. Add headers if you need them.
4. Turn on **Enabled**, then click **Add Webhook**.
5. Click **Test** on the row to send a test message.

In a price alert's sheet, use **Send to webhooks** to choose which endpoints it posts to. Script alerts have a **Webhooks…** option on their card. Turning an endpoint off pauses it for every alert.

### Message

The alert's message is sent as the body. Valid JSON goes out as `application/json`, anything else as `text/plain`. The default price-alert message is `{{ticker}} alert: {{close}}`. You can use these placeholders:

`{{ticker}}` `{{exchange}}` `{{open}}` `{{high}}` `{{low}}` `{{close}}` `{{volume}}` `{{time}}` `{{timenow}}` `{{interval}}`

### Secrets

Put a token in the URL or a header with **Use secret…** instead of typing it in. It is stored in your Keychain on macOS, Windows Credential Manager on Windows or the Secret Service on Linux, and is not synced. It cannot be part of the host name.

### What to expect

- Each alert makes **one attempt** per webhook, with a 3 second limit. There are no retries and no redirects.
- A price alert is not posted if more than a minute has passed since it fired.
- Local and private addresses are allowed.
- Endpoints and secrets never sync to other Macs.

::: info Windows
Windows Credential Manager keeps at most 2560 bytes per secret. An ordinary token fits; a very long one, such as a long secret of non-English characters, is refused with an error when you save it.
:::
