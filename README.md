# DegenView Docs

End-user documentation for [DegenView](https://github.com/degenview/degenview), built with
[VitePress](https://vitepress.dev).

## Local development

```bash
npm install
npm run docs:dev
```

- `docs:build` — build the site into `docs/.vitepress/dist`.
- `docs:preview` — preview the production build locally.

## Deployment

The site deploys to GitHub Pages at `docs.degenview.app` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), using the official Pages
actions (no `gh-pages` branch needed).

One-time repository setup:

1. Enable Pages and set the **Source** to **GitHub Actions** (Settings ▸ Pages).
2. Add a `CNAME` DNS record for `docs.degenview.app` pointing to `degenview.github.io`.
   The `CNAME` file lives in `docs/public/` and is copied into the build output automatically.

Pushing to `main` rebuilds and redeploys.

## Structure

Content lives in `docs/`, one folder per area. The sidebar is in `docs/.vitepress/config.mts`; keep it in step when you add or move a page (VitePress fails the build on dead links).

- `getting-started/` — introduction, installation, quick tour
- `markets/` — adding charts, watchlists, data sources and API keys
- `charts/` — chart types, indicators, price scale, settings and templates, linked charts, snapshots
- `drawings/` — drawing tools
- `pine/` — Pine Studio and the Pine engine
- `portfolio/`, `alerts/`, `trading/` — portfolio tracking, alerts and webhooks, paper trading and replay
- `workspace/` — tabs, windows, layouts, appearance
- `mcp/`, `settings/`, `reference/` — MCP server, settings, updates, shortcuts, platform differences, troubleshooting

## Writing

The docs are for end users: say what a feature is in a sentence or two, then how to use it. Use the exact labels from the app in **bold**, keep pages short, and say plainly where macOS, Windows and Linux differ. Mark features that are newer than the last release with `::: info Newer builds`.

## Screenshots

Images live in `docs/public/images/<area>/` and are referenced as `/images/<area>/<name>.png`. They are dark-theme, PNG, palette-compressed and no wider than 1600 px, so a page stays light.

They were taken from the app itself, never from a real user profile:

- **Window shots** come from a release build run with a throwaway `HOME`, `DEGENVIEW_NO_KEYCHAIN=1` and `DEGENVIEW_NO_NOTIFICATIONS=1`, with live Binance and Coinbase data, captured by window id.
- **Gallery shots** (drawing examples, portfolio, Pine debugger and profiler, AI assistant) come from the app's own test galleries, which render with sample data: `DEGENVIEW_GALLERY_DIR=<dir> cargo test --lib <test> -- --ignored` in the app repository. Their candles and numbers are made up.

Retake an image when the UI it shows changes.
