# Installation

## Download a release

The easiest way to get DegenView is to download a prebuilt binary from the
[releases page](https://github.com/degenview/degenview/releases). Releases are published for
macOS (Apple Silicon and Intel), Windows, and Linux.

Download the file for your platform, unzip it, and run it.

## Requirements

- macOS (Apple Silicon or Intel), Windows (x64), or Linux (x64)
- No API keys are required for crypto, prediction markets, CoinMarketCap indices, or Pine
  Script. Everything works out of the box.
- Stock data is the one exception — it needs a free Alpaca account and API keys (see below).

## Build from source

If you prefer to build from source, install the
[Rust toolchain](https://rustup.rs) first, then:

```bash
git clone https://github.com/degenview/degenview
cd degenview
cargo run
```

A release binary lands at `target/release/degenview` (`degenview.exe` on Windows):

```bash
cargo build --release
```

### macOS app bundle

On macOS you can build a Finder-launchable app:

```bash
./tools/bundle.sh
open target/DegenView.app
```

### Linux launcher and icon

The Linux release tarball ships a `.desktop` launcher and a PNG icon. To get a launcher and
dock icon:

```bash
install -Dm755 degenview "$HOME/.local/bin/degenview"
install -Dm644 degenview.png "$HOME/.local/share/icons/hicolor/512x512/apps/degenview.png"
install -Dm644 degenview.desktop "$HOME/.local/share/applications/degenview.desktop"
```

## Stock data (optional)

To chart US stocks, you need a free [Alpaca](https://alpaca.markets) account and its API keys.

- On **macOS**, store the keys in Keychain from Settings ▸ API Keys.
- On **Windows and Linux**, set them as environment variables:

```bash
export DEGENVIEW_ALPACA_KEY_ID="your-key-id"
export DEGENVIEW_ALPACA_SECRET_KEY="your-secret-key"
```

See [Data sources](/markets/data-sources) for what each source provides and which ones need
keys.
