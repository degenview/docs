# Installation

Download DegenView from the [download page](https://degenview.app/download/) or the [GitHub releases](https://github.com/degenview/degenview/releases). Pick the file for your computer.

## macOS

Works on Apple Silicon and Intel Macs with macOS 14 or newer.

1. Download the `.dmg` for your chip (`arm64` for Apple Silicon, `x64` for Intel). A `.zip` is also available.
2. Open the disk image and drag **DegenView** to **Applications**.
3. Open it from **Applications**.

The app is signed and notarized by Apple. Keep it in **Applications** so it can update itself.

### With Homebrew

If you use [Homebrew](https://brew.sh), install the same app from the DegenView tap:

```bash
brew install --cask degenview/degenview/degenview@rc
```

`degenview@rc` follows release candidates and final releases. `degenview/degenview/degenview` installs the latest final release only and works once one is published. Naming the cask in full is enough; you do not need to trust the tap separately. If you run `brew tap degenview/degenview` first and then install by the short name, Homebrew 7 asks you to run `brew trust degenview/degenview`.

DegenView updates itself, so `brew upgrade` skips it. To remove the app together with its data, cache and settings, run `brew uninstall --zap --cask degenview@rc`. API keys in the Keychain stay.

## Windows

Works on Windows x64 and ARM64.

1. Download `...windows-x64-setup.exe` (or `...windows-arm64-setup.exe` on an ARM PC). A portable `.zip` is also available.
2. Run the installer. It installs for your user only and needs no administrator rights.
3. Open DegenView from the Start menu.

::: warning Unsigned build
The Windows builds are not code-signed, so SmartScreen may warn you. Choose **More info**, then **Run anyway** if you trust the download.
:::

## Linux

Works on x64 and arm64 with a reasonably recent distribution (glibc 2.35 or newer: Ubuntu 22.04, Debian 12, Fedora 36 and later).

- **Tarball.** Unpack it and run `degenview`. To get a launcher and icon, copy `degenview` to `~/.local/bin`, `degenview.png` to `~/.local/share/icons/hicolor/512x512/apps` and `degenview.desktop` to `~/.local/share/applications`.
- **Flatpak.** Use this on older distributions such as RHEL 9. It runs in a sandbox and is updated with `flatpak update` once you add the DegenView repository (see below). A `.flatpak` file from the release page also installs, but it has no remote and does not update.

### With Flatpak

The runtime comes from Flathub, so [set Flathub up](https://flathub.org/setup) first. Then add the DegenView repository once and install:

```bash
flatpak remote-add --if-not-exists degenview https://flatpak.degenview.app/degenview.flatpakrepo
flatpak install degenview es.nico.degenview//beta
flatpak run es.nico.degenview
```

`beta` follows release candidates and final releases. `es.nico.degenview//stable` follows final releases only and works once one is published. Update with `flatpak update`. The repository is signed; Flatpak checks the signature on every install and update, and the key's fingerprint is on [flatpak.degenview.app](https://flatpak.degenview.app).

## First launch

DegenView opens an empty tab with a search box. Click it, type a symbol such as `BTC` and pick a result to chart it. See [Adding charts](/markets/adding-charts).

- **Crypto and prediction markets** need no account or key.
- **US stocks** need a free Alpaca account and API keys. See [Data sources & API keys](/markets/data-sources).
- **Settings** open with `⌘,` on macOS and `Ctrl+,` on Windows and Linux. See [Settings reference](/settings/reference).

## Updating

DegenView checks for new versions and can install them from **Settings ▸ About**. See [Updates](/settings/updates) for the cases where it cannot update itself.

## Building from source

Developers can build DegenView with Rust. The steps are in the [project README](https://github.com/degenview/degenview).
