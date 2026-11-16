import { h, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource-variable/inter'
import '@fontsource-variable/inter/wght-italic.css'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource-variable/big-shoulders-display'
import './custom.css'
import { initCandleCity } from './candle-city'

// Same look as degenview.app: see custom.css for the tokens taken from the marketing site.
// The animated candlestick city behind the page is the marketing site's own script (candle-city.ts, scroll-loop.ts),
// copied as is; it reads --up, --down and --city-alpha from :root and follows the `.dark` class, like there.
export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-top': () => h('canvas', { class: 'candle-city', 'aria-hidden': 'true', 'data-candle-city': '' }),
    }),
  setup() {
    onMounted(() => {
      const canvas = document.querySelector<HTMLCanvasElement>('[data-candle-city]')
      if (canvas) initCandleCity(canvas)
    })
  },
} satisfies Theme
