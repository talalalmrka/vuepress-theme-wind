import type { SiteData as VuePressSiteData } from 'vuepress'
import type { Page } from 'vuepress/core'

export interface SiteData extends VuePressSiteData {
  pages: Page[]
}
