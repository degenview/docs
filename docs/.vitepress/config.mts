import { defineConfig } from 'vitepress'

// Served at docs.degenview.app, so base is root.
export default defineConfig({
  base: '/',
  title: 'DegenView Docs',
  description: 'User guide for DegenView — a cross-platform market dashboard.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started/introduction' },
      { text: 'DegenView app', link: 'https://github.com/degenview/degenview' },
    ],
    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Installation', link: '/getting-started/installation' },
        ],
      },
      {
        text: 'Markets & data',
        items: [
          { text: 'Adding charts', link: '/markets/adding-charts' },
          { text: 'Data sources', link: '/markets/data-sources' },
        ],
      },
      {
        text: 'Charts & analysis',
        items: [
          { text: 'Charts', link: '/charts/charts' },
          { text: 'Indicators', link: '/charts/indicators' },
          { text: 'Drawings & tools', link: '/charts/drawings' },
        ],
      },
      {
        text: 'Pine Script',
        items: [
          { text: 'Overview', link: '/pine/overview' },
          { text: 'Script Manager', link: '/pine/script-manager' },
          { text: 'Inputs & alerts', link: '/pine/inputs-alerts' },
        ],
      },
      {
        text: 'Portfolio',
        items: [
          { text: 'Overview', link: '/portfolio/overview' },
          { text: 'Transactions', link: '/portfolio/transactions' },
          { text: 'Analytics & currency', link: '/portfolio/analytics' },
        ],
      },
      {
        text: 'Alerts',
        items: [
          { text: 'Price alerts', link: '/alerts/price-alerts' },
          { text: 'Alerts center', link: '/alerts/alerts-center' },
          { text: 'Delivery & background', link: '/alerts/delivery' },
        ],
      },
      {
        text: 'Trading & replay',
        items: [
          { text: 'Paper trading', link: '/paper-trading' },
          { text: 'Historical replay', link: '/replay' },
        ],
      },
      {
        text: 'Workspace',
        items: [
          { text: 'Tabs, windows & layouts', link: '/workspace/tabs-windows' },
          { text: 'Saved views & favorites', link: '/workspace/saved-views' },
          { text: 'Appearance', link: '/workspace/appearance' },
        ],
      },
      {
        text: 'MCP server',
        items: [
          { text: 'Overview & setup', link: '/mcp' },
        ],
      },
      {
        text: 'Settings',
        items: [
          { text: 'Settings reference', link: '/settings' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'DegenView user documentation',
      copyright: 'Copyright © 2026 Nico Oelgart',
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
