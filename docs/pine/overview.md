# Pine Studio

Pine Studio is where you write, test and manage Pine Script indicators and strategies. Scripts run on your own computer, and you can put them on any chart.

Pine Script is TradingView's scripting language. DegenView runs Pine Script v6 with its own engine and is not affiliated with TradingView.

![Pine Studio with the script list, a preview chart, the Inputs tab and the code editor](/images/pine/studio.png)

## What stays on your computer

Scripts are evaluated locally. Your code is not uploaded anywhere. The one exception is the [AI assistant](/pine/ai-assistant): if you use it, the open script and your message are sent to the AI provider you chose. If you never open the assistant, nothing is sent.

You need no account to use Pine Studio. The preview chart still loads candles from the market's data source, as any chart does.

## How to open it

Use any of these:

- Click the **Pine Studio** icon in the toolbar, next to **Portfolio Tracker**.
- Right-click a script's own pane on a chart and choose **Open Pine Studio**.
- Click **+** in a chart header, then **Pine Studio…** at the bottom of the menu. This opens **Chart settings ▸ Scripts**.
- In **Chart settings ▸ Scripts**, click **Pine Studio** (**Open Pine Studio** when you have no scripts yet).

Pine Studio is one tab. If it is already open, DegenView switches to it.

## The bundled examples

The first time you start DegenView, Pine Studio adds nine example scripts so you have something to try:

| Type | Examples |
| --- | --- |
| Indicators | Bollinger Squeeze, EMA Cross, Higher Timeframe Trend, MACD Histogram, Pivot Levels, RSI Zones, Stats Table, Volume Spike Alert |
| Strategy | EMA Cross Strategy |

Edit them freely. If you delete one, it stays deleted. If you already had scripts, the examples are not added.

## Where your scripts live

Each script is a plain text file ending in `.pine`, in a **Scripts** folder inside DegenView's data folder. Right-click a script and choose **Show in Finder** (**Show in Explorer** on Windows, **Show in File Manager** on Linux) to find it.

| System | Data folder |
| --- | --- |
| macOS | `~/Library/Application Support/es.nico.degenview` |
| Windows | `%APPDATA%\es.nico.degenview` |
| Linux | `~/.local/share/es.nico.degenview` |

You can back these files up or edit them in another editor. DegenView notices changes made outside the app. See [Writing scripts](/pine/writing-scripts).

### Vibe-code with your own agent

Because scripts are plain files, you can also vibe-code them with a coding agent such as Claude Code, Codex or Cursor. Point the agent at the **Scripts** folder (make it the agent's working folder), then describe the script you want.

- New and changed `.pine` files show up in the Pine Studio list within a couple of seconds. Open one to see it on the preview chart.
- Errors appear in the **Problems** tab. Paste them back to the agent, or connect it through the [MCP server](/mcp/setup) so it can compile a script and read the diagnostics itself.
- Start every file with `//@version=6`, and tell the agent which features are not supported. See [What Pine supports](/pine/language).
- Let the agent edit only the `.pine` files. Leave the **ScriptMetadata** folder next to **Scripts** alone, because it holds each script's saved revisions and settings.
- If the same script is open with unsaved edits, DegenView asks whether to **Reload from disk** or **Keep my version**.

## Where to go next

- [Writing scripts](/pine/writing-scripts): the editor, the preview chart and the drawer tabs.
- [Using scripts on charts](/pine/using-scripts): add a script to a chart and change its settings.
- [Debugger and profiler](/pine/debugger-profiler): find bugs and slow lines.
- [AI assistant](/pine/ai-assistant): ask a model to explain or change a script.
- [What Pine supports](/pine/language): what works, and what does not.
