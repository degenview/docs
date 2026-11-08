import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource-variable/inter'
import '@fontsource-variable/inter/wght-italic.css'
import '@fontsource-variable/jetbrains-mono'
import './custom.css'

// Same look as degenview.app: see custom.css for the palette taken from the marketing site.
export default {
  extends: DefaultTheme,
} satisfies Theme
