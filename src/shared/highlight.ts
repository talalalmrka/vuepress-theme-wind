import { PrismjsPluginOptions } from '@vuepress/plugin-prismjs'
import { ShikiPluginOptions } from '@vuepress/plugin-shiki'
export type HighlighterOptions =
  | ({
      type: 'prismjs'
    } & PrismjsPluginOptions)
  | ({
      type: 'shiki'
    } & ShikiPluginOptions)
