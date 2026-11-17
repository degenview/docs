# Network and proxy

If your connection goes through a proxy, for example a VPN client in "system proxy" mode, DegenView can follow it. Open **Settings ▸ Network**. Changes save as you make them.

## Modes

| Mode | What it does |
|---|---|
| **System** | The default. Follows the `ALL_PROXY`, `HTTPS_PROXY` and `HTTP_PROXY` environment variables (lowercase works too), then the proxy your operating system is set to. |
| **Manual** | Uses the server you type on the page. |
| **Off** | Connects directly, whatever the system or the environment says. |

The badge at the top of the page says what DegenView is doing now, for example **Using 127.0.0.1:7890 from the system**, **Connecting directly**, **Proxy off** or **No proxy server set**.

In **System** mode DegenView checks again every half minute or so, so a VPN that switches its proxy on or off is followed without a restart.

### Where the system proxy comes from

- **Windows:** **Settings ▸ Network & internet ▸ Proxy**. An automatic setup script (PAC) is not followed.
- **macOS:** **System Settings ▸ Network**, the proxy of your active connection.
- **Linux:** there is no system setting, so only the environment variables and **Manual** apply.

## Manual proxy

Choose **Manual**, then fill in the **Server** section:

- **HTTP** (a proxy that allows `CONNECT`, as most do) or **SOCKS5**.
- **Host** and **Port**, for example `127.0.0.1` and `7890`.
- Under **Sign in**, a **User name** and **Password**, only if the proxy asks for them. The password is kept in your system's secret storage (see [Platforms](/reference/platforms)), never in DegenView's files. **Remove password** deletes it.

Nothing is used until both host and port are valid. A proxy that cannot be used is reported on the page instead of silently falling back to a direct connection.

## Skip the proxy

Under **Hosts that connect directly**, list hosts that should not use the proxy, separated by commas.

- A name also covers its subdomains: `example.com` covers `api.example.com`.
- `*.corp.test` and `192.168.1.*` work as patterns. Address ranges such as `10.0.0.0/8` are not accepted.
- `<local>` stands for every name without a dot, such as `intranet`.

Local addresses never use the proxy: `localhost`, `*.local`, `10.*`, `172.16.*` to `172.31.*`, `192.168.*`, `169.254.*` and the IPv6 equivalents. This list is not shown for **Off**.

## What goes through the proxy

Market data, live price feeds, updates, link previews, webhooks, AI requests, chart sharing and live trading.

Live price feeds and live trading streams can run through an HTTP proxy or a SOCKS5 proxy. SOCKS4 and `https://` proxies work for ordinary requests but not for live feeds, and DegenView says so. A live feed reconnects by itself when you change the setting.

Not covered:

- [iCloud Sync](/settings/icloud-sync) uses the system's own networking and proxy handling.
- PAC scripts and per-host proxy rules beyond the list above.

On macOS, the background agent that keeps [price alerts](/alerts/delivery) running picks up a change within a few seconds.

::: info Not tried everywhere
The proxy support has been tested against simulated proxies. It has not yet been tried with a real Windows system proxy or a VPN client end to end. If a chart stays empty behind a proxy, see [Troubleshooting](/reference/troubleshooting#data-does-not-load-behind-a-proxy-or-vpn).
:::
