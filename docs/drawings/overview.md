# Drawing tools overview

DegenView has 86 drawing tools in six menus on the left of the chart, plus a Ruler. Use them to mark levels, trends, ideas and notes on the price chart.

## The tool strip

The strip runs down the left of each chart. The top tile is **Crosshair**, which puts any active tool down. Each menu tile shows the last tool you used from its menu. Open the full menu with the small corner mark, a right-click, or the Right arrow key.

| Tile | Menu sections | Details |
| --- | --- | --- |
| Lines | Lines, Channels, Pitchforks | [Lines, channels, Fibonacci & Gann](/drawings/lines-fibonacci) |
| Fibonacci and Gann | Fibonacci, Gann | [Lines, channels, Fibonacci & Gann](/drawings/lines-fibonacci) |
| Patterns | Chart patterns, Elliott waves, Cycles | [Patterns, forecasting & measuring](/drawings/patterns-forecasting) |
| Forecast | Forecasting and measurement, Volume-based, Measurers | [Patterns, forecasting & measuring](/drawings/patterns-forecasting) |
| Brushes, arrows and shapes | Brushes, Arrows, Shapes | [Text, notes, images & posts](/drawings/text-notes) |
| Text and notes | Text and notes, Content | [Text, notes, images & posts](/drawings/text-notes) |

![The six tool menus: lines, Fibonacci and Gann, and patterns](/images/drawings/menus-1.png)

![The forecast, brushes and shapes, and text and notes menus](/images/drawings/menus-2.png)

Below the menus are the **Ruler** and **Zoom in**, then the drawing options:

| Option | What it does |
| --- | --- |
| **Ruler** | Measures percent, price, time and bars between two points. It is temporary: it is not saved and not listed in the Object tree. |
| **Zoom in** | Drag a rectangle to zoom to it. See [Charts & navigation](/charts/charts). |
| **Magnet** | Cycles Off, Weak and Strong. Strong snaps to the open, high, low or close of the nearest bar. Weak snaps only when you are within 20 pixels. Hold ⌘ (Ctrl on Windows and Linux) to flip it for one placement. It does not affect brush strokes or moving a whole drawing. |
| **Keep drawing** | On by default: the tool stays armed after each drawing. Turn it off to return to the crosshair each time. |
| **Lock all drawings** | Locks every drawing on the chart. |
| **Hide all drawings** | Hides every drawing. This is not saved, so drawings reappear after a restart. |

::: info Newer builds
**Zoom in** and **Zoom out** are in builds after v0.6.0-rc.14. **Zoom out** appears under **Zoom in** once there is a zoom to go back from.
:::

## How to draw

1. Pick a tool from a menu. Hover a tile for about a quarter of a second to see its name.
2. Place it on the chart.
3. Press Esc to abandon a drawing in progress.

How you place a drawing depends on how many points it needs.

| Tool type | Placement |
| --- | --- |
| Two points | Drag, or click twice. |
| Three or more points | Drag places the first two, then click once per remaining point. Backspace removes the last point. |
| Polyline and Path | Click each vertex (up to 5,000). Double-click, Return, Esc or right-click to finish. Clicking the first vertex closes a Polyline. |
| Brush and Highlighter | Press, drag, release. |

Hold Shift to keep a Rectangle or Ellipse square, and to keep Fib circles round.

Some tools have a shortcut with ⌥ (Option on Mac, Alt on Windows and Linux): **⌥T** trend line, **⌥H** horizontal line, **⌥J** horizontal ray, **⌥V** vertical line, **⌥C** crossline, **⌥F** Fib retracement. The shortcut shows in the menu row. ⌃⌥H (Ctrl+Alt+H on Windows and Linux) hides or shows all drawings. See [Keyboard shortcuts](/reference/shortcuts).

## Select and edit

Click a drawing to select it. Shift-click to select several, which then move, lock, hide, duplicate and delete together.

A floating toolbar appears next to it with colours, thickness, line style, text, settings, lock, hide, duplicate and delete (red).

![A selected line with its floating toolbar](/images/drawings/selected-line.png)

The **Settings** button, or a double-click, opens the properties dialog. Its tabs depend on the tool: Style, Text, Coordinates and Visibility are common. Coordinates edit price and a UTC date and time. Visibility turns the drawing on or off per timeframe. Changes show live; **OK** keeps them and **Cancel** discards them.

![The properties dialog of a trend line](/images/drawings/properties.png)

Right-click a drawing for its menu: **Settings…**, **Copy**, **Duplicate**, **Copy style**, **Paste style**, **Lock**, **Hide**, the four order commands (**Bring forward** to **Send to back**), vertex commands where they apply, and **Delete**.

![The drawing context menu](/images/drawings/context-menu.png)

### Templates and defaults

The **Template** button in the dialog saves a tool's style as a template, applies one, makes the current style the default for new drawings of that tool, or resets it. Templates are per tool and carry style only. They are separate from [chart templates](/charts/settings-templates).

### Copy, paste and undo

- ⌘C and ⌘V (Ctrl+C and Ctrl+V on Windows and Linux) copy and paste drawings, up to 500 at a time. ⌘D duplicates.
- Delete or Backspace deletes the selection.
- ⌘Z undoes (Ctrl+Z on Windows and Linux). Redo is ⇧⌘Z, or Ctrl+Y off Mac. One batch of changes is one undo step.

### Object tree

Right-click an empty part of the chart and choose **Object tree**. It lists the chart's symbol, indicators and scripts, then its drawings, topmost first. A filter field narrows the list. Click to select, double-click for settings, and use the row buttons to hide, lock or delete.

## Limits

- Drawings live on the main price pane only, not in indicator panes.
- There are no groups.
- Drawings follow the price, so they stay put on any [price scale](/charts/price-scale) mode.
- Drawings are saved with the layout and sync with [iCloud Sync](/settings/icloud-sync).
- A drawing made by a newer version of DegenView is kept but not drawn.
