# Live trading

Live trading sends **real orders with real money** to a broker you connect. It sits next to [paper trading](/trading/paper-trading), which stays simulated and is never mixed up with it: everything live carries an amber **LIVE** marker that paper trading never uses.

::: warning Read this first
Live trading is new. DegenView checks every order before it is sent and asks before the ones that matter, but a market order is a real order, and the software cannot know whether you meant it. Start with an amount you can afford to lose, and use a small, far-from-the-market limit order to see how everything behaves before you rely on it.
:::

## Brokers

| Broker | Trades | Notes |
| --- | --- | --- |
| **Coinbase** | Spot markets on Coinbase Advanced Trade | Orders are placed in the portfolio the API key belongs to. Futures, perpetuals and equities are not supported. |

More brokers can be added without changing how any of this works.

## Connect a broker

Open **Settings ▸ Brokers**. Each broker has a card with the steps for creating an API key at the broker. In short:

1. Create a key for the portfolio you want to trade.
2. Give it **View**, and **Trade** only if you want to place orders from DegenView.
3. **Do not give it Transfer.** DegenView never moves funds, and a key that can is a risk you do not need. If you connect one anyway, DegenView warns you.
4. Paste the key's name and its private key, then click **Connect**.

![Settings ▸ Brokers](/images/trading/live-settings.png)

**Connect** first checks the key by reading your account. Nothing is placed or changed by the check. If the key works, it is saved to your system's secure storage (the Keychain on a Mac), the connection starts, and the fields are cleared: a pasted private key is never left on the screen. A key that can only view is accepted too, and the page says so; you can watch balances and orders but not trade.

Your keys never leave your Mac. They are not synced between devices, are not in your layouts or backups, and no script, alert or other program can use them to trade. Each Mac you use connects on its own with its own key.

**Disconnect** removes the key from this Mac and stops the connection. It does **not** revoke the key at the broker (delete it in the broker's own settings for that), and orders you already placed stay live there.

The page also holds your choices for trading: whether limit orders and single cancels ask first, whether to be told when orders fill, and whether to show your orders on charts. Market orders, changing an order and **Cancel all** always ask, whatever you choose.

## The live panel

Open the trading panel as for paper trading. Once a broker is connected, a **Trade on** switch appears at the top of the panel: **Paper** or the broker. The choice is per tab, and a tab always starts on paper.

![The live trading panel](/images/trading/live-panel.png)

* **Orders**: your working orders, the ones that just finished (dimmed), and any order that was sent and not yet confirmed. Tick rows to cancel several at once, or use **Cancel all**.
* **History**: finished orders, by status, loaded as you scroll.
* **Fills**: your recent executions with price, size and fee.
* **Balances**: what is available and what is held in open orders, per asset.

Everything here is what the broker last told DegenView, shared by every window. If the connection drops, a banner says what you are looking at may be out of date and new orders are paused until it is back. Your orders are the broker's to confirm: pressing cancel marks an order **Cancel requested** and it stays listed until the broker says it is cancelled. An order can still fill while a cancel is on its way, and the panel says so if it does.

## Place an order

Click **New order** (or **BUY** / **SELL** on a chart, or right-click a chart) to open the ticket. The ticket is for the market of the chart you are looking at, and only a chart whose data comes from the broker can be traded on it: a Coinbase chart for Coinbase. DegenView never trades a similar market for you.

![The live order ticket](/images/trading/live-ticket.png)

1. Choose **Buy** or **Sell** and a type: **Market**, **Limit** or **Stop-limit** (a limit order that is placed once the price reaches the stop).
2. Enter the size, or what you want to spend for a market buy. The 25–100% buttons round **down** to the market's step.
3. Enter the prices the type needs. **Use bid / ask** fill them in.
4. Check the broker's own figures under the form: the total, the fee, and any warning. If the broker would refuse the order, it says why and the order cannot be sent.
5. Click **Review order**, read the confirmation, then **Place order**.

DegenView never rounds an order for you. If a price or size is not on the market's step, or is below the minimum, the field says so and tells you the nearest valid value; you decide.

The bid and ask in the ticket and on the chart's BUY and SELL buttons are the **broker's** prices, not the chart's last price: they are different feeds and only the broker's can be traded. If the price on screen is old, it is not shown.

If the connection fails while an order is being sent, DegenView does not guess. The order is listed as **Unconfirmed**, the broker is asked, and it either appears as a normal order or is dropped from the list once the broker has had time to show it. **Check** on that row looks again, and only sends it again if the broker really does not have it.

## Trade on the chart

![Live orders on a chart](/images/trading/live-chart.png)

On a chart of the broker's own market:

* **SELL** and **BUY** in the chart header show the broker's bid and ask and open the ticket.
* Each working order is a line with a **LIVE** tag. Click its ✕ to ask to cancel it; the line stays, marked, until the broker confirms.
* **Drag** a line to propose a new price. When you let go, the **edit sheet** opens with the new price and the broker's preview, and nothing changes until you confirm it. Press **Esc** while dragging to drop the proposal. Click a line to open the same sheet without moving it.
* Right-click the chart for **Live · Buy / Sell …** entries at market, at a limit price, or as a stop-limit order at the price you clicked. They open the ticket, filled in; they do not place anything.

During a **replay**, live ordering is switched off (the buttons and menu entries are greyed, with the reason), because a replay's prices are history. On charts whose prices are constructed, such as Renko or Heikin Ashi, a click is not a market price, so the price entries are greyed there too. Live orders are never included in a shared snapshot of a chart.

## Change or cancel an order

The pencil on an order, or dragging its line, edits an **open limit or stop-limit order in place**, using the broker's own edit. It is previewed first, and you confirm it. It is not offered for anything the broker will not edit, and the reason is the tooltip. DegenView never edits by cancelling and placing a new order, because that could leave you exposed between the two steps.

## Notifications

When an order is placed, partly filled, filled, cancelled, expired or rejected, DegenView tells you once, at the foot of the tab and as a system notification. You can turn this off in **Settings ▸ Brokers**. Orders that were already open when the connection started are not announced.

## Limits

* Only Coinbase spot markets are supported, with market, limit (good-til-cancelled or fill-or-kill, optionally post-only) and stop-limit orders. Brackets, TWAP, scaled orders and expiry dates are not offered.
* DegenView has no way to move funds, and never will through this feature.
* You need to be online. Orders are not queued for later.
* The amounts shown use `.` for decimals and `,` for thousands whatever your system language.
* This feature has been tested against a simulated exchange built from the broker's published documentation. Some behaviour of the real service could not be checked in advance (the documentation lists them), so treat the first real orders with care.
