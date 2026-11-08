# Tabs and windows

DegenView keeps your work in tabs. Each tab holds its own set of charts, and you can spread tabs over as many windows as you like.

## What the tab strip shows

Most tabs are chart tabs. Two special tabs also exist, one of each: the Portfolio Tracker and Pine Studio. Open them from the **Portfolio Tracker** and **Pine Studio** buttons at the right of the toolbar.

A chart tab shows the market logo, symbol, an up or down arrow, live price, percent change and the layout name after a slash. It follows the tab's focused chart. Prediction markets and CoinMarketCap charts show no price.

![The tab strip with a chart tab and a Pine Studio tab](/images/getting-started/layout-tab.png)

Many tabs shrink to just a logo, and then the strip scrolls. The **+** button stays at the end.

## How to work with tabs

1. Press ⌘T (Ctrl+T on Windows and Linux) or click **+** to open a new tab. It starts empty, with a page to pick a market. See [Layouts](/workspace/layouts).
2. Drag a tab to reorder it.
3. Press ⌘W (Ctrl+W) to close it, or middle-click it.
4. Press Ctrl+Tab and Ctrl+Shift+Tab to move to the next and previous tab.

Right-click a tab for its menu.

![The tab context menu](/images/workspace/tab-menu.png)

The menu offers the close options, **Rename Tab…**, **Reset Tab Title**, **Tab Title** and the window items below. Rename and title options apply to chart tabs only.

::: info Newer builds
**Close Other Tabs**, **Close Tabs to the Right**, **Rename Tab…**, **Tab Title** and the live price and layout name in the strip are newer than the last release candidate.
:::

## Rename a tab and change the title style

Choose **Rename Tab…**, type a name (up to 60 characters) and press Return. Esc cancels, and an empty name restores the default. A custom name replaces the symbol and price.

**Tab Title** picks what every tab shows: **Symbol, price and layout**, **Symbol only** or **Layout name only**. The same choice is in [Appearance](/workspace/appearance). Custom names and the title style stay on this computer.

## Windows

- **Move Tab to New Window** gives the tab its own window. Dragging a tab out of the strip does the same.
- **Move Tab to Window** lists your other windows. Dragging a tab onto another window's strip merges it in.
- On macOS, the **Window** menu also has **Merge All Windows**, **Show Next Tab** and **Show Previous Tab**.

## Differences by system

- **macOS:** the usual window buttons and a menu bar. The first window opens at about 80% of your screen.
- **Windows and Linux:** DegenView draws its own title bar and window buttons, with no menu bar. A settings button sits beside them, and closing the last window quits the app.
- **Linux on Wayland:** you cannot drop a tab onto another window. Use **Move Tab to Window**.

Window sizes and positions are not remembered between launches. More in [Platforms](/reference/platforms).

## When you reopen the app

DegenView saves your tabs every few seconds and when you quit. They return in the same order, all in one window. A tab reopens its layout, or shows **Unnamed** if you deleted it. Layout edits you had not saved show as saved after the restart.
