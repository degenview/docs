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

Content lives in `docs/`, grouped by feature:

- `getting-started/` — introduction and installation
- `markets/` — data sources and adding charts
- `charts/` — charts, indicators, drawings
- `pine/` — Pine Script engine
- `portfolio/` — portfolio tracking
- `alerts/` — price and script alerts
- `workspace/` — tabs, windows, saved views, appearance
- top-level pages for paper trading, replay, MCP, and settings
