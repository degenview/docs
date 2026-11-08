# iCloud Sync

iCloud Sync keeps your watchlists, layouts, scripts and more the same on every Mac signed in to your Apple Account. It is optional and off until you turn it on.

::: warning Not production-ready
iCloud Sync is not described as production-ready. It has worked between two Macs on one Apple Account, but other cases, such as a second Apple Account, sign-out and sign-in, sleep and wake, and a dropped network, are not fully checked. Keep your own backups of anything important.
:::

## Availability

- iCloud Sync is **macOS only**.
- It exists only in builds that include it. If you do not see an **iCloud Sync** page in Settings, your build does not have it.
- It needs a Mac signed in to iCloud.

## How to turn it on

1. Open **Settings ▸ iCloud Sync**.
2. Turn on **Sync DegenView data with iCloud**.
3. DegenView asks **Use the Apple Account signed in on this Mac?** Nothing is read from or sent to iCloud until you agree. Click **Use This Account**, or **Not Now**.
4. If iCloud already holds DegenView data, choose how to combine it. **Merge (Recommended)** keeps everything from both. **Use iCloud's Data** replaces this Mac's watchlists, layouts and templates, after saving a copy. Scripts, alerts, portfolios and paper accounts are always merged.

The page then shows a **Status**, **Last synced** and a **Sync Now** button. If you sign in with a different Apple Account later, it asks again: **Keep Local Only**, **Merge Into This Account** or **Use This Account's Data**.

## What syncs

The **What syncs** switches let you turn off a kind of data for this Mac:

- Watchlists
- Layouts and drawings
- Chart and drawing templates (including editor themes)
- Pine scripts
- Price alerts
- Portfolios
- Paper trading
- Preferences

## What never syncs

Market data caches, portfolio value history, webhook endpoints and their secrets, API keys, MCP access, and which windows and tabs are open. Alerts you sync arrive switched off on your other Macs, so each alert notifies from one Mac only.

## Things to know

- If the same item changes on two Macs at once, DegenView keeps both. The other copy has "conflict from" in its name. Delete the one you do not need.
- Pine scripts sync as written, so do not leave secrets in them. Script drafts do not sync.
- **Delete iCloud Data** removes what DegenView stored in iCloud and turns sync off. Your data on this Mac stays. You must type a confirmation word.
- Turning sync off removes nothing from iCloud.

See also [Layouts](/workspace/layouts) and [Platforms](/reference/platforms).
