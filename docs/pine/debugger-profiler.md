# Debugger and profiler

The debugger lets you stop a script on a line and look at its values. The profiler shows which lines take the most time. Both work on the script open in Pine Studio and use the preview chart's candles.

![The debugger paused on a breakpoint, with variables listed under the editor (example script)](/images/pine/debugger.png)

## Debug a script

1. Click a line number, or press F9 with the cursor on a line, to set a breakpoint. Lines with no code, such as comments, are refused.
2. Click the bug button at the top right of Pine Studio.
3. Press the green play button. The script runs on the preview's candles and stops at the first breakpoint.
4. Use the step buttons to move through the code. The panel shows the current bar, and the editor scrolls to the stopped line.

The panel has sections for **Variables**, **Watches**, **Call Stack**, **Breakpoints** and a **Console**, where you can type an expression and see its value while the script is stopped. To watch a value, type an expression such as `close - open` into **Watches**, or right-click a variable and choose **Add to Watches**.

The debugger runs on a frozen copy of the preview's candles (up to 500), so new prices do not reach it. If you edit the script, restart the session to run the new text. Library functions are stepped over, not into.

### Breakpoint options

Right-click a breakpoint and choose **Edit Breakpoint…** to set:

- **Condition**: stop only when an expression is true, such as `bar_index > 100 and close > open`.
- **Hit count**: stop on the nth hit, every nth, or after the nth.
- **Log a message instead of stopping**: write text to the **Logs** tab. Put an expression in braces, like `{close}`.

### Stop at a bar

Use **Stop at bar** to pause at the start of a chosen bar. Click **Select bar** and then a candle, type a bar number (0 is the oldest), or enter a date and time in UTC.

### Shortcuts

| Command | macOS | Windows and Linux |
| --- | --- | --- |
| Start or continue | ⌃⌘Y | F5 |
| Pause | ⌃⌘P | F6 |
| Step over | F6 | F10 |
| Step into | F7 | F11 |
| Step out | F8 | Shift+F11 |
| Step to next bar | ⌃⌘B | F7 |
| Stop | ⌘. | Shift+F5 |
| Restart | ⇧⌘R | Ctrl+Shift+F5 |
| Set or clear breakpoint | F9 | F9 |

On a Mac, the function keys may need Fn held down.

## Profile a script

The profiler is off until you turn it on.

1. Click the stopwatch button at the top right, or press ⌥⌘R (Ctrl+Alt+R on Windows and Linux).
2. DegenView runs the script once on the preview's candles. The status reads **Profiling…** and then **Profile ready**.
3. A bar and a percentage appear beside the line numbers. The three hottest regions get a flame. Click a row in the **Profile** tab to jump to that code.

![The profiler showing time per line and the hottest lines](/images/pine/profiler.png)

A profile goes out of date when you edit the script, change an input, or the data changes. The tab then says **Profile out of date**. Run it again to refresh.

::: tip
Times include the profiler's own overhead, so a profiled run is slower than a normal one. Use the numbers to compare lines with each other, not as exact timings.
:::

Neither tool changes your charts, raises alerts or places trades.
