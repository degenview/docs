# Chart settings & templates

Chart settings control how one chart looks. A chart template saves that look so you can give it to other charts. The right-click menu is the quick way to reach all of this.

## Chart settings

Click a chart's market name, logo or price, or choose **Settings…** from the right-click menu. Changes apply as you make them. The sheet has five tabs:

| Tab | What is there |
| --- | --- |
| **Indicators** | The five built-in indicators. See [Indicators](/charts/indicators). |
| **Scripts** | Pine scripts on this chart. See [Using scripts on charts](/pine/using-scripts). |
| **Compare** | Other markets drawn on this chart. See [Comparing markets](/charts/compare). |
| **Appearance** | Chart type and its settings, price axis format, and colours. |
| **Canvas** | The page the chart is drawn on. |

The footer has **Remove Chart**, which asks you to confirm, and **Done**.

![Appearance tab with the chart type and preview](/images/charts/settings-appearance.png)

### Canvas

![Canvas tab](/images/charts/settings-canvas.png)

The **Canvas** tab sets the **Background** (one colour or a gradient), vertical and horizontal grid lines, **Pane separators**, **Crosshair** (colour, thickness 1 to 4, style), **Watermark** (**Hidden**, **Symbol** or **Replay mode**), **OHLC values**, scale text and lines, **Buttons** (**Navigation** and **Pane**) and **Margins**. **Reset Canvas to Defaults** restores it all, except candle colours and the chart type.

## Chart templates

A template stores a chart type, its settings, the colours and the canvas. It does not store the market, timeframe, indicators, scripts, drawings or scale mode.

Open the **Templates** menu on the Appearance or Canvas tab:

1. **Save current settings as template…** and give it a name (1 to 48 characters, unique).
2. Pick a saved one under **My templates**, or one of the **Presets**: Default Dark, Default Light, Minimal, High Contrast and Presentation.
3. **Manage Templates…** renames, updates, duplicates or deletes saved ones. Presets are fixed, but you can duplicate them.

Under **When applying**, choose **Apply appearance and canvas** or **Apply colors and canvas only**. **Apply current settings to all charts…** restyles the other charts in the same tab. **Reset chart appearance to defaults…** puts the look back. A chart that cannot draw a template's type keeps its own type and takes only the colours and canvas.

## Right-click menus

Right-click the empty plot for:

- **Copy price**, **Paste**, and **Add alert on** the symbol at that price
- Order tickets at that price. They only open the paper ticket and send nothing. See [Paper trading](/trading/paper-trading).
- **Lock vertical cursor line by time**
- **Table view** and **Object tree**
- **Chart template** ▸ saved templates, presets, **Save current as template…**, **Manage templates…**, **Reset to default**
- **Remove N drawings**, **Remove N indicators**, and **Settings…**

Alerts and orders say **Not available during replay** while a replay runs. Right-click the price axis for [price scale](/charts/price-scale) modes, and the time axis for **Reset chart view**.

![Chart right-click menu](/images/charts/context-menu.png)

## Table view

**Table view** opens a panel under the charts with one row per bar, newest first. Click **Time** to flip the order. Columns are Time, Open, High, Low, Close, Volume where available, and one per visible indicator or script plot. Times are UTC.

![Table view docked under the charts](/images/charts/table-view.png)

## Object tree

**Object tree** opens a panel on the right listing the symbol, indicators, scripts and drawings, topmost first. Click a drawing to select it, double-click to open its settings, and use the row buttons to hide, lock or delete.

![Object tree docked at the right](/images/charts/object-tree.png)
