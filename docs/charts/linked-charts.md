# Linked charts

When a tab has several charts, linking keeps them looking at the same stretch of time. Pan or zoom one, and the others follow.

## How to use it

1. Put two or more market charts in one tab. The link button appears on the left tool strip, below the drawing tools and behind its own divider. With fewer than two market charts it is not shown.
2. Click the link button. The **Link charts** popover opens.
3. Switch on what you want to share:
   - **Sync horizontal position**: panning one chart moves the others to the same point in time.
   - **Sync zoom level**: zooming one chart adjusts the others.

Both switches start on. **Vertical scales remain independent**, so each chart keeps its own price range.

![Link charts popover on the tool strip](/images/charts/linked-charts.png)

## What to expect

- Charts are matched by time, not by bar count, so each one shows the same dates even when their history differs in length.
- Switching an option on moves nothing straight away. The charts line up at your next pan or zoom.
- The settings are saved with the layout, and changing them marks the layout as changed. See [Layouts](/workspace/layouts).
- Portfolio cards are ignored.

## Charts that are not linked

Renko, Kagi, Line Break, Point & Figure and Range charts have no shared time axis. The popover lists them as **Not linked** and leaves them alone. See [Chart types](/charts/chart-types).

## The shared crosshair

The crosshair is shared whether or not you link. Hover over one chart and a vertical line shows at the same horizontal position on every other chart in the tab. It follows position across the card, not a date.

::: info Newer builds
Zooming with the **Zoom in** tool moves linked charts in time only. See [Charts & navigation](/charts/charts).
:::
