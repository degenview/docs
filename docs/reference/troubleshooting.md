# Troubleshooting

Quick answers to common problems. Each one links to the page with the full story.

## A chart does not load, or shows a warning pill

If a refresh fails, DegenView keeps the last data on screen and shows a pill such as **Couldn't refresh · showing the last result**, or **Binance rate limit reached · showing the last result** with the provider's name. Free data sources limit how often you can ask. Wait, and DegenView tries again by itself. See [Data sources](/markets/data-sources).

## I cannot add a stock chart

US stocks and ETFs need free Alpaca API keys. Open **Settings ▸ Alpaca**, enter your **API Key ID** and **Secret Key**, and click **Save**. Without keys, the stocks tab says **Set up Alpaca before adding a stock chart.** See [Data sources](/markets/data-sources).

## My price alert did not fire

Check that the alert is **Active**, not **Paused**, and that **Price Alert Delivery** is on in **Settings ▸ Notifications**. An alert fires when the price crosses your level, not when it already sits beyond it. DegenView can only check while it is running, except on macOS with the background agent. See [Delivery](/alerts/delivery) and [Price alerts](/alerts/price-alerts).

## My script alert is paused

Editing a script pauses its alerts until you re-arm them. Open the Alerts window, go to **Scripts**, and re-arm it. A script alert also fires only while a chart shows the same symbol and timeframe with its live feed running. See [Script alerts](/alerts/script-alerts).

## My API keys are not saved on Windows

DegenView keeps keys in Windows Credential Manager. If Settings says a key could not be saved, check that you are signed in to a normal Windows account and that the secret is under 2560 bytes, the most Credential Manager keeps per item. A key that was saved shows under Control Panel ▸ Credential Manager ▸ Windows Credentials. As a fallback, set Alpaca and CoinMarketCap keys as environment variables. See [Platforms](/reference/platforms).

## I cannot add alerts or orders during replay

While a replay is open, the right-click items for alerts and orders read **Not available during replay**. Close the replay, then add them. See [Replay](/trading/replay).

## An assistant cannot connect over MCP

Check that **Enable MCP Server** is on and **Status** says **Running**. The address and port in the assistant must match **Endpoint**, and the token must be pasted whole, as `Bearer` followed by the token. If it connects but is refused, the assistant may only have read access, so see its sheet under **Clients**. A request that needs your approval also waits in a window in DegenView. See [MCP server setup](/mcp/setup) and [Permissions](/mcp/permissions).

## DegenView cannot update itself

If the button says **View Release**, the app is in a folder you cannot write to, runs from the disk image, or is a Flatpak. Move it to a folder you own, or download the new version from the release page. In a Flatpak, run `flatpak update` if you installed from the DegenView repository. See [Updates](/settings/updates).
