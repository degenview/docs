# Platforms

DegenView runs on macOS, Windows and Linux, and on Linux also as a Flatpak. Most things work the same everywhere. This page lists what differs, including gaps you should know about.

## At a glance

| | macOS | Windows | Linux | Flatpak |
|---|---|---|---|---|
| Install | Disk image, zip or Homebrew | Installer or portable zip | Tarball | Flatpak repository or `.flatpak` file |
| Window and tabs | Own tab strip, system window buttons, menu bar | Own tab strip and title bar, no menu bar | Own tab strip and title bar, no menu bar | Same as Linux |
| Shortcut key | ⌘ | Ctrl | Ctrl | Ctrl |
| Secret storage (API keys) | Keychain | Credential Manager | Secret Service | App-private store |
| Desktop notifications and sound | Yes | No | No | No |
| Alerts while the app is closed | Yes, with the background agent | No | No | No |
| iCloud Sync | Some builds | No | No | No |
| Self-update | Yes, from Applications | Yes, if the folder is yours | Yes, if the folder is yours | No |

Windows and Linux builds exist for both Intel/AMD and ARM processors. The Windows builds are not signed by a developer certificate, so SmartScreen may show a warning the first time. Self-update on Windows and Linux has so far only been tested in automated tests, not in a real session. See [Installation](/getting-started/installation).

## Windows notes

- **Secret storage.** Keys and secrets you type in Settings (data provider keys, AI keys, webhook secrets, the snapshot token) go to Windows Credential Manager, for your Windows account on this PC. You can see and remove them under Control Panel ▸ Credential Manager ▸ Windows Credentials, where they are named `es.nico.degenview…`. Other programs running as you can read them, as with the macOS Keychain, and they are never written to DegenView's own files or synced. Credential Manager keeps at most 2560 bytes per item: an ordinary key fits, and a longer secret is refused with an error instead of being cut off. Alpaca, CoinMarketCap and the snapshot token can also come from the `DEGENVIEW_ALPACA_KEY_ID`, `DEGENVIEW_ALPACA_SECRET_KEY`, `DEGENVIEW_CMC_API_KEY` and `DEGENVIEW_SNAPSHOT_TOKEN` environment variables when nothing is saved.

## Known Windows gaps

- **No file dialogs.** Anything that needs one fails with "Could not open the file dialog": importing and exporting CSV files and watchlists, exporting paper trading, picking an image for a drawing, and importing an editor theme (the **Import…** button is hidden). Chart pictures and exported themes go to your Downloads folder instead.

## Linux notes

- There are no desktop notifications, no background agent and no iCloud Sync. Alerts show as banners inside DegenView, and only while it runs.
- File choosers use the system's file chooser portal. If none is available, the dialog may fail to appear, and it looks like you cancelled.
- Window corners are rounded only on Wayland or an X11 session with a compositor. On Wayland you cannot drop a tab on another window. See [Tabs and windows](/workspace/tabs-windows).

## Flatpak notes

The Flatpak is sandboxed: it has network, display and graphics access, but no access to your files except through the file chooser. Keys are kept in an app-private store. It cannot replace itself: update it with `flatpak update` if you added the DegenView repository, or download each new `.flatpak` from the release page if you installed a file. See [Installation](/getting-started/installation#with-flatpak) and [Updates](/settings/updates).

## Only on macOS

- Notifications through Notification Center, with sound, and the background agent that keeps price alerts running after you quit. See [Delivery](/alerts/delivery).
- iCloud Sync. See [iCloud Sync](/settings/icloud-sync).
- **Export…** of a script from Pine Studio.
- The menu bar with **Merge All Windows**.

Window and shortcut details are in [Keyboard shortcuts](/reference/shortcuts).
