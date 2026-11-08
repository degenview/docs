# Platforms

DegenView runs on macOS, Windows and Linux, and on Linux also as a Flatpak. Most things work the same everywhere. This page lists what differs, including gaps you should know about.

## At a glance

| | macOS | Windows | Linux | Flatpak |
|---|---|---|---|---|
| Install | Disk image, zip or Homebrew | Installer or portable zip | Tarball | `.flatpak` file |
| Window and tabs | Own tab strip, system window buttons, menu bar | Own tab strip and title bar, no menu bar | Own tab strip and title bar, no menu bar | Same as Linux |
| Shortcut key | ⌘ | Ctrl | Ctrl | Ctrl |
| Secret storage (API keys) | Keychain | None yet | Secret Service | App-private store |
| Desktop notifications and sound | Yes | No | No | No |
| Alerts while the app is closed | Yes, with the background agent | No | No | No |
| iCloud Sync | Some builds | No | No | No |
| Self-update | Yes, from Applications | Yes, if the folder is yours | Yes, if the folder is yours | No |

Windows and Linux builds exist for both Intel/AMD and ARM processors. The Windows builds are not signed by a developer certificate, so SmartScreen may show a warning the first time. Self-update on Windows and Linux has so far only been tested in automated tests, not in a real session. See [Installation](/getting-started/installation).

## Known Windows gaps

- **No secret store.** Keys you type in Settings cannot be saved, although the page may still say "secure storage". Alpaca and CoinMarketCap can read keys from the `DEGENVIEW_ALPACA_KEY_ID`, `DEGENVIEW_ALPACA_SECRET_KEY` and `DEGENVIEW_CMC_API_KEY` environment variables. The snapshot token can come from `DEGENVIEW_SNAPSHOT_TOKEN`.
- **No file dialogs.** Anything that needs one fails with "Could not open the file dialog": importing and exporting CSV files and watchlists, exporting paper trading, picking an image for a drawing, and importing an editor theme (the **Import…** button is hidden). Chart pictures and exported themes go to your Downloads folder instead.

## Linux notes

- There are no desktop notifications, no background agent and no iCloud Sync. Alerts show as banners inside DegenView, and only while it runs.
- File choosers use the system's file chooser portal. If none is available, the dialog may fail to appear, and it looks like you cancelled.
- Window corners are rounded only on Wayland or an X11 session with a compositor. On Wayland you cannot drop a tab on another window. See [Tabs and windows](/workspace/tabs-windows).

## Flatpak notes

The Flatpak is sandboxed: it has network, display and graphics access, but no access to your files except through the file chooser. Keys are kept in an app-private store. It cannot update itself, so download each new `.flatpak` from the release page. See [Updates](/settings/updates).

## Only on macOS

- Notifications through Notification Center, with sound, and the background agent that keeps price alerts running after you quit. See [Delivery](/alerts/delivery).
- iCloud Sync. See [iCloud Sync](/settings/icloud-sync).
- **Export…** of a script from Pine Studio.
- The menu bar with **Merge All Windows**.

Window and shortcut details are in [Keyboard shortcuts](/reference/shortcuts).
