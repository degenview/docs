import { defineConfig } from 'vitepress'

// Served at docs.degenview.app, so base is root.
export default defineConfig({
  base: '/',
  title: 'DegenView Docs',
  description: 'User guide for DegenView — a cross-platform market dashboard.',
  cleanUrls: true,
  lastUpdated: true,
  // The marketing site (degenview.app) defaults to dark, so the docs do too.
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    ['link', { rel: 'icon', href: '/icon-192.png', type: 'image/png', sizes: '192x192' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#000000' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'DegenView',
    // Same links as the marketing header, plus the way in to these docs.
    nav: [
      { text: 'Docs', link: '/getting-started/introduction', activeMatch: '^/(?!$)' },
      { text: 'Features', link: 'https://degenview.app/#features' },
      { text: 'Download', link: 'https://degenview.app/download/' },
      { text: 'FAQ', link: 'https://degenview.app/faq/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/degenview/degenview' }],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'A quick tour', link: '/getting-started/quick-tour' },
        ],
      },
      {
        text: 'Markets & data',
        items: [
          { text: 'Adding charts', link: '/markets/adding-charts' },
          { text: 'Watchlists', link: '/markets/watchlists' },
          { text: 'Data sources & API keys', link: '/markets/data-sources' },
        ],
      },
      {
        text: 'Charts',
        items: [
          { text: 'Charts & navigation', link: '/charts/charts' },
          { text: 'Chart types', link: '/charts/chart-types' },
          { text: 'Indicators', link: '/charts/indicators' },
          { text: 'Price scale', link: '/charts/price-scale' },
          { text: 'Chart settings & templates', link: '/charts/settings-templates' },
          { text: 'Linked charts', link: '/charts/linked-charts' },
          { text: 'Snapshots', link: '/charts/snapshots' },
        ],
      },
      {
        text: 'Drawing tools',
        items: [
          { text: 'Drawing basics', link: '/drawings/overview' },
          { text: 'Lines, Fibonacci & Gann', link: '/drawings/lines-fibonacci' },
          { text: 'Patterns, forecasting & measuring', link: '/drawings/patterns-forecasting' },
          { text: 'Text, notes & images', link: '/drawings/text-notes' },
        ],
      },
      {
        text: 'Pine Studio',
        items: [
          { text: 'Overview', link: '/pine/overview' },
          { text: 'Writing scripts', link: '/pine/writing-scripts' },
          { text: 'Using scripts on charts', link: '/pine/using-scripts' },
          { text: 'Debugger & profiler', link: '/pine/debugger-profiler' },
          { text: 'AI assistant', link: '/pine/ai-assistant' },
          { text: 'What Pine supports', link: '/pine/language' },
        ],
      },
      {
        text: 'Portfolio',
        items: [
          { text: 'Overview & holdings', link: '/portfolio/overview' },
          { text: 'Transactions & imports', link: '/portfolio/transactions' },
          { text: 'Statistics & currencies', link: '/portfolio/statistics' },
        ],
      },
      {
        text: 'Alerts',
        items: [
          { text: 'Price alerts', link: '/alerts/price-alerts' },
          { text: 'Script alerts', link: '/alerts/script-alerts' },
          { text: 'Alerts center', link: '/alerts/alerts-center' },
          { text: 'Delivery & webhooks', link: '/alerts/delivery' },
        ],
      },
      {
        text: 'Trading & replay',
        items: [
          { text: 'Paper trading', link: '/trading/paper-trading' },
          { text: 'Historical replay', link: '/trading/replay' },
        ],
      },
      {
        text: 'Workspace',
        items: [
          { text: 'Tabs & windows', link: '/workspace/tabs-windows' },
          { text: 'Layouts', link: '/workspace/layouts' },
          { text: 'Appearance & themes', link: '/workspace/appearance' },
        ],
      },
      {
        text: 'MCP server',
        items: [
          { text: 'Setup', link: '/mcp/setup' },
          { text: 'Permissions & approvals', link: '/mcp/permissions' },
        ],
      },
      {
        text: 'Settings & updates',
        items: [
          { text: 'Settings reference', link: '/settings/reference' },
          { text: 'iCloud Sync', link: '/settings/icloud-sync' },
          { text: 'Updates', link: '/settings/updates' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Keyboard shortcuts', link: '/reference/shortcuts' },
          { text: 'Platform differences', link: '/reference/platforms' },
          { text: 'Troubleshooting', link: '/reference/troubleshooting' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message:
        '<strong>DegenView</strong> user documentation · <a href="https://degenview.app/">degenview.app</a> · <a href="https://degenview.app/privacy-policy/">Privacy policy</a>' +
        '<span class="dv-legal">Pine Script and TradingView are trademarks of TradingView, Inc. DegenView is not affiliated with or endorsed by TradingView or any listed data provider. Not financial advice.</span>',
      copyright: '© 2026 Nico Oelgart, GPL-3.0-only.',
    },
    outline: {
      label: 'On this page',
      level: [2, 3],
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
})
