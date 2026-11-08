# Using scripts on charts

Once a script is saved, you can run it on any chart, alongside the built-in indicators. You can add the same script more than once, with different inputs.

## Add a script to a chart

Pick whichever is nearest:

1. **From the + menu.** Click **+** in the chart header (tooltip **Add Indicator**), search **Search indicators and scripts**, and click a script. Built-in indicators come first, then your saved indicators and strategies. Libraries are not listed, and line charts have no scripts section. A script already on the chart shows **On chart**. Click it again to **Add another copy to this chart**.
2. **From chart settings.** Open **Chart settings ▸ Scripts**. Switch a script on under **Available** (**Your scripts** while none runs yet). Scripts already running are under **On this chart**.
3. **From Pine Studio.** Right-click a script in the list and choose **Add to Chart**. It goes to the chart you have focused.

![The Scripts page of chart settings, before any script is saved](/images/charts/settings-scripts.png)

::: warning A chart keeps the source it was added with
If you edit and save a script later, charts already running it do not change, and nothing tells you they are out of date. Remove the script from the chart and add it again to pick up the new version.
:::

## The script chip

Each script on a chart gets a chip in the chart legend. Its menu has:

| Item | What it does |
| --- | --- |
| **Hide** / **Show** | Hides or shows the script on this chart. |
| **Settings…** | Opens the inputs and style popover. |
| **Pine logs** | Opens the script's log messages on the chart. |
| **Remove** | Takes the script off this chart. |

In **Chart settings ▸ Scripts**, right-click a row for more: **Visual Order** (in front of or behind the candles), **Add Another Copy**, **Move Up** and **Move Down**.

## Inputs and style

**Settings…** opens a popover with two pages. **Inputs** has the script's controls. **Style** lets you show or hide each plot, and change its colour and line width. Nothing changes until you click **Apply**; **Cancel** discards your edits, and **Reset Style** returns to the script's own look.

![The Inputs page of a script's popover](/images/pine/popover-inputs.png)

![The Style page, with one plot's width, colour and visibility](/images/pine/popover-style.png)

## Pine logs

If a script calls `log.info()`, `log.warning()` or `log.error()`, choose **Pine logs** from its chip to read the messages next to the chart. You can search, filter by level and jump to the bar or source line that wrote one. The same view is the **Logs** tab in [Pine Studio](/pine/writing-scripts). It keeps the last 10,000 historical messages and 50,000 live ones.

![The Logs view with search and level filters](/images/pine/logs.png)

## Strategies

A strategy places simulated trades on the chart's bars. Its results appear in **Chart settings ▸ Scripts**, under **Backtest**: figures, an equity curve and the trade list. The numbers come from candles only. There is no margin model, so a strategy is never margin-called. See [What Pine supports](/pine/language).

## Alerts

To get notified when a script fires, see [Script alerts](/alerts/script-alerts).
