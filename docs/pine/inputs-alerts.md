# Inputs & alerts

## Input controls

Pine Script `input.*` declarations become real, typed controls on the chart. Supported input
types:

- int
- float
- bool
- color
- time
- string

Changing an input re-evaluates the script **live** — no recompile needed. This is handy for
tuning a period or threshold and watching the chart respond instantly.

## Script alerts

A script can fire an alert with its `alert()` call. When the condition is met on a live bar,
DegenView notifies you — just like a price alert.

Pine alerts are **app-only**. They are evaluated while the app is running and are not part of
background delivery (see [Delivery & background](/alerts/delivery)).

## Where alerts show up

Script alerts appear in the [Alerts center](/alerts/alerts-center) alongside your price
alerts, so you have one place to review everything that fired.
