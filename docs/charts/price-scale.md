# Price scale

The price scale is the axis on the right of a chart. It has four modes, set per chart and saved with your layout. Chart templates do not carry the mode.

## The four modes

| Mode | The axis reads |
| --- | --- |
| **Regular** | Prices. Equal price differences are equally tall. |
| **Percent** | The signed percent change from the close of the first bar you can see. |
| **Indexed to 100** | 100 at that same bar, and 100 plus the change after it. |
| **Logarithmic** | Prices, but equal ratios are equally tall. Useful for long moves or fast growth. |

## How to change the mode

- Click the small button where the price and time axes meet, and pick a mode from the menu.
- Right-click the price axis and pick a mode, or **Reset price scale**.
- Open **Chart settings ▸ Appearance**, then **Price axis ▸ Scale**.
- Press ⌥P for Percent or ⌥L for Logarithmic (Alt+P and Alt+L on Windows and Linux). Pressing the active mode's key returns to Regular. They act on the focused chart and are ignored while you are typing in a text field. Indexed to 100 has no shortcut.

![Corner menu with the four price scale modes](/images/charts/price-scale-menu.png)

## Good to know

- Percent and Indexed change only the axis labels and the crosshair tag. Drawings, alerts, orders and the open-high-low-close box still use real prices.
- The reference bar moves as you pan, so percent values change as the left edge moves.
- If any visible price is zero or below, Logarithmic is drawn as Regular until the data allows it. The button's tooltip says so.

![Axis in Percent mode on example candles](/images/charts/price-scale-percent.png)

![Axis in Logarithmic mode on example candles](/images/charts/price-scale-log.png)

Both pictures use made-up example candles.

## Price formatting

**Chart settings ▸ Appearance ▸ Price axis** also sets how prices are written:

- **Decimal places**: **Auto** or a fixed number from 0 to 12. Auto picks a precision from the price: none from 1,000 up, two from 1, and two significant digits below 1.
- **Small prices**: for prices below 0.001, either **Count the zeros** (0.0₅278, where the small number counts the zeros after the point) or **Write out the zeros** (0.00000278).

The change applies to the axis, the crosshair and the readouts, and a preview shows sample prices as you edit. Dragging and double-clicking the axis are covered in [Charts & navigation](/charts/charts).
