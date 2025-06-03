import { TocPluginOptions } from '@vuepress/plugin-toc'

export interface TocOptions extends TocPluginOptions {
  title?: string
  print?: boolean
  marker?: boolean
  offset?: number
  delay?: number
}
