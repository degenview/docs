# MCP server

DegenView can run an optional local [Model Context Protocol](https://modelcontextprotocol.io)
server, letting an AI assistant or automation tool inspect and drive the app. It is **off by
default** — you enable it yourself.

## Turning it on

Enable the server in Settings ▸ MCP Server.

## Local and authenticated

The server is designed to be safe by default:

- It listens on `127.0.0.1` only — nothing reaches it from another machine.
- Every request needs a **bearer token**. When you generate a token it is shown once; only a
  hash is kept.
- Revoking a client cuts it off immediately.

## Permissions

Every capability is labelled **Read** or **Write**. You set a global maximum, then narrow it
per client. A client never gets more than the maximum, and changes apply immediately.

## What clients can do

With the right permissions, a client can:

- list workspaces and charts
- add charts and indicators
- list and manage price alerts
- read Pine scripts, diagnostics, inputs, styles, reports, and alert subscriptions
- edit a script's draft and saved source (with permission)

## Who is this for?

The MCP server is for users who want an AI assistant or automation to work with their DegenView
data. If you don't use such tools, leave it off — the rest of DegenView is unaffected.
