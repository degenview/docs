# Settings reference

Settings has one page per topic, listed down the left. This page is a quick tour of each.

![The Settings window with its list of pages](/images/settings/appearance.png)

## How to open Settings

Press ⌘, (Ctrl+, on Windows and Linux). On macOS you can also use **Settings…** in the app menu. On Windows and Linux there is a settings button in the tab strip, left of the window buttons. DegenView reopens the page you used last.

## The pages

| Page | What it does |
|---|---|
| **Appearance** | Theme (**System**, **Light**, **Dark**) and what tabs show. See [Appearance and themes](/workspace/appearance). |
| **Pine Studio** | The look of the code editor: editor themes, font, size and line height. See [Writing scripts](/pine/writing-scripts). |
| **Alpaca** | Your **API Key ID** and **Secret Key**. Needed to chart US stocks and ETFs. See [Data sources](/markets/data-sources). |
| **CoinMarketCap** | An optional key for higher rate limits. Without one, DegenView uses the public API. **Test Connection** checks a key. |
| **AI Assistant** | Provider, model and key for the Pine Studio assistant. The key is yours, and the assistant sends your script text to that provider. See [AI assistant](/pine/ai-assistant). |
| **Notifications** | How price alerts are delivered: delivery on or off, sound, in-app banners and, on macOS, system notifications and the background agent. See [Delivery](/alerts/delivery). |
| **Webhooks** | Web addresses that alerts can post to. See [Delivery](/alerts/delivery). |
| **Snapshots** | The host for shared chart pictures, an optional access token, whether pictures include orders and positions, and the resolution. See [Snapshots](/charts/snapshots). |
| **MCP Server** | Lets AI assistants inspect and control DegenView. See [MCP server setup](/mcp/setup). |
| **iCloud Sync** | Keeps data the same across your Macs. Only in some macOS builds. See [iCloud Sync](/settings/icloud-sync). |
| **Storage** | Shows the logos and lookups DegenView saved on this computer, with **Clear Cache…** to delete them. Your charts, watchlists, portfolios, alerts and scripts are not touched. |
| **About** | Version, update check and channel, license, **Build Info** with **Copy** for bug reports, and links. See [Updates](/settings/updates). |

## Where keys are kept

On macOS, keys and secrets go to the Keychain. On Linux they go to the system's Secret Service, or an app-private store inside a Flatpak. Windows has no secret store yet, so keys you type cannot be saved. See [Platforms](/reference/platforms).

## Good to know

- Your data stays on your computer, except where you choose otherwise: iCloud Sync, snapshot hosting, webhooks, remote MCP connections, and the AI assistant, which sends script text to the provider you pick.
- **Clear Cache…** only removes things DegenView can download again.
