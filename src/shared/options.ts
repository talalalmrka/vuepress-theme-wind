import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from 'vuepress/shared'
import { PluginConfig } from 'vuepress'
import { NavbarOptions } from './navbar'
import { SidebarOptions } from './sidebar'
import { ThemePluginOptions } from './plugins'
import { BreadcrumbsOptions } from './breadcrumbs'
import { TocOptions } from './toc'
import { PageInfoType } from './page'
import { Author } from './author'

export interface WindThemeLocaleData extends LocaleData {
  author?: Author
  breadcrumbs?: BreadcrumbsOptions | false
  darkMode?: boolean
  externalLinkIcon?: boolean
  home?: string
  navbar?: NavbarOptions | false
  navbarLabel?: string | null
  navbarTitle?: string | false
  navbarClass?: string
  navbarBrandClass?: string
  pageNavbarLabel?: string | null
  logo?: string | null
  logoDark?: string | null
  logoAlt?: string | null
  logoClass?: string
  favicon?: string | null
  repo?: string | null
  repoLabel?: string
  selectLanguageText?: string
  selectLanguageAriaLabel?: string
  selectLanguageName?: string
  sidebar?: SidebarOptions | false
  sidebarDepth?: number
  editLink?: boolean
  editLinkText?: string
  editLinkPattern?: string
  docsRepo?: string
  docsBranch?: string
  docsDir?: string
  lastUpdated?: boolean
  lastUpdatedText?: string
  contributors?: boolean
  contributorsText?: string
  tip?: string
  warning?: string
  danger?: string
  important?: string
  note?: string
  notFound?: string[]
  backToHome?: string
  openInNewWindow?: string
  toggleColorMode?: string
  toggleSidebar?: string
  prev?: string | false
  prevIcon?: string | false
  next?: string | false
  nextIcon?: string | false
  footer?: string | false
  toc?: TocOptions | false
  readingTimeIcon?: string
  readingTimeLabel?: string
  pageInfo?: PageInfoType[] | false
  authorIcon?: string | false
}

export interface ThemeOptions extends WindThemeLocaleData {
  hostname?: string
  pluginOptions?: ThemePluginOptions
  plugins?: PluginConfig
}

export type WindThemeData = ThemeData<ThemeOptions>
