# Pine Script

DegenView includes a built-in **Pine Script v6** engine. You write scripts in the Pine Script
language, and DegenView runs them over your chart's bars — entirely on your own machine.

## Why it matters

- **Local evaluation** — scripts are lexed, parsed, and evaluated in-process. No account is
  needed, and your source never leaves your device.
- **Renders straight onto the chart** — plots, shapes, backgrounds, and candle colors appear
  directly on the chart.
- **Live inputs** — typed `input.*` controls re-evaluate the script as you change them,
  without recompiling.

## What a script can draw

A Pine Script can produce:

- plots (lines, areas, and values)
- shapes
- background highlights
- custom candle colors

All of it renders on top of the chart, alongside the built-in indicators.

## Getting started

1. Open the Script Manager (see [Script Manager](/pine/script-manager)).
2. Write or open a script.
3. Watch the preview chart re-run as you type.

## Related

- [Script Manager](/pine/script-manager) — the `.pine` library, editor, and diagnostics.
- [Inputs & alerts](/pine/inputs-alerts) — controls and script-triggered alerts.
