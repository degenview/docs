# Libraries

A library is a Pine script that holds code other scripts can reuse: functions, types, enums and methods. You write it once in Pine Studio, then `import` it into any indicator, strategy or other library.

A library plots nothing and cannot be added to a chart. It only exists to be imported.

## Write a library

1. In Pine Studio, click **New Script** and give it a name, for example `MathUtils`.
2. Replace the code with a `library()` declaration, then mark what you want to share with `export`:

```text
//@version=6
library("MathUtils")

export half(float x) =>
    x / 2

export double(float x) =>
    x * 2
```

3. Press ⌘S (Ctrl+S on Windows and Linux). The script moves to the **Libraries** group in the list.

What you can export:

- Functions: `export name(float x) =>`. Give each parameter a type.
- Types and enums: `export type Zone` and `export enum Mode`.
- Methods: `export method name(Zone this) =>`.

Anything without `export` stays private to the library, so helper functions are safe to keep inside it. `export` is an error in any script that is not a `library()`.

A library can import other libraries. The chain stops at 8 levels, and a library cannot import itself, directly or through another one.

## Use a library

Add an `import` line near the top of the script that uses it, then call what it exports with the library's name in front:

```text
//@version=6
indicator("Half of close")
import me/MathUtils/1 as mu

plot(mu.half(close))
```

An import has three parts: `user/Library/version`, then an optional `as alias`.

| Part | What to write |
| --- | --- |
| `user` | Any name, for example `me`. DegenView ignores it. |
| `Library` | The library's script name in the list. If no script has that name, DegenView also matches the title inside `library("…")`. |
| `version` | A whole number, for example `1`. DegenView ignores it. |
| `as alias` | The short name you call it by. Without it, the library's name is used. |

Your libraries have no user or version, so `me/MathUtils/1`, `anyone/MathUtils/7` and `x/MathUtils/1` all find the same script. The line must still have all three parts, and the version must be digits.

An alias cannot be used twice in one script, and it cannot be `import`, `export`, `method`, `type`, `enum` or `as`.

Types, enums and methods work the same way. A library's type is written with the alias in front, for example `mu.Zone`.

## Edit a library

- **Save it.** Scripts that import a library read its last saved version. Unsaved edits in the library's editor are not seen.
- **Charts keep the version they were added with.** A chart that already runs an indicator uses the library code from when you added it. Remove the indicator and add it again to pick up changes. See [Using scripts on charts](/pine/using-scripts).
- **Renaming a library breaks imports of the old name**, unless the title in its `library("…")` line still matches. Update the `import` lines in the scripts that use it.

## Libraries in the editor and tools

- Right-click a library in the list for **Rename**, **Duplicate**, **Export…** and **Delete**. **Add to Chart** and **Create Alert** are not offered, and libraries do not appear in the indicator picker.
- The [debugger](/pine/debugger-profiler) steps over library functions instead of into them.
- A `log.*()` call inside a library is labelled with the library's name in the **Logs** tab. Open it to go to the line in the library.
- Imports work in the preview, on charts, in alerts and over [MCP](/mcp/setup).

## Import errors

These show in **Problems** on the line of the `import`.

| Message | What to do |
| --- | --- |
| An import reads: import user/Library/version [as alias]. | The line has the wrong shape. Check the spaces and the `as`. |
| '…' is not a library path: expected user/Library/version, e.g. me/Math/1. | Use three parts separated by `/`, with a number last. |
| Library '…' was not found. | No saved library has that name or title. Check the spelling and that you saved it. |
| '…' is not a library: it does not declare library(). | The script you named is an indicator or strategy. Libraries need a `library()` line. |
| Library '…' has errors (line N: …). | Open the library and fix the first error it names. |
| '…' is already used and cannot be an import alias. | Pick another name with `as`. |
| '…' does not export '…'. | The library has no exported item of that name. Check for a missing `export`. |
| Library '…' imports itself, directly or through another library. | Remove the loop. |
| Libraries import each other more than 8 levels deep. | Flatten the chain. |

## Using libraries from TradingView

A script from TradingView that imports a published library, such as `import TradingView/ta/14 as tvta`, looks for a library of that name among yours. DegenView does not download published libraries. To use one, copy its source into a new script in Pine Studio, make sure it starts with `library("Name")`, and save it under the name in the import line. Check the library's licence before you copy it.

::: tip
Name a library after what it does, such as `MathUtils` or `Sessions`, and use a short alias such as `mu`, so calls like `mu.half(close)` stay readable.
:::
