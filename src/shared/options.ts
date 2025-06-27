import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from 'vuepress/shared'
import { PluginConfig } from 'vuepress'

import { NavbarOptions, NavbarLayoutOptions, NavbarLocaleData } from './navbar'
import { SidebarOptions } from './sidebar'
import { ThemePluginOptions } from './plugins'
import { BreadcrumbsOptions } from './breadcrumbs'
import { TocOptions } from './toc'
import { PageInfoType } from './page'
import { Author } from './author'
import { ChangelogOptions } from '@vuepress/plugin-git'

export type WindThemeLocaleOptions = WindThemeData

export type WindThemeData = ThemeData<WindThemeLocaleData>
export interface WindThemeLocaleData extends LocaleData {
  // Author
  author?: Author

  // Breadcrumbs
  breadcrumbs?: BreadcrumbsOptions | false

  // Dark mode
  darkMode?: boolean

  // Theme Color
  themeColor?: string

  // Extrnal link icon
  externalLinkIcon?: boolean

  // Home
  home?: string

  // Navbar
  navbar?: NavbarOptions | false

  // Navbar class name
  navbarClass?: string

  // Navbar label
  navbarLabel?: string

  // Navbar title
  navbarTitle?: string | false

  // Navbar title class
  navbarTitleClass?: string

  // Navbar brand class
  navbarBrandClass?: string

  // Navbar layout config @default { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }
  navbarLayout?: NavbarLayoutOptions

  // Navbar locales
  navbarLocales?: NavbarLocaleData
  // ARIA label for page-specific navigation (accessibility) Default: 'Page navigation'
  pageNavbarLabel?: string | null

  // Logo
  logo?: string | null

  // Logo dark
  logoDark?: string | null

  // Logo Alt
  logoAlt?: string | null

  // Custom CSS class for logo image
  logoClass?: string

  // Path to site favicon
  favicon?: string | null

  // Repository URL (GitHub/GitLab/Bitbucket)
  repo?: string | null

  // Repository link text
  repoLabel?: string

  // Language selection dropdown text
  selectLanguageText?: string

  // ARIA label for language selector (accessibility)
  selectLanguageAriaLabel?: string

  // Display name for current language
  selectLanguageName?: string

  // Sidebar configuration
  sidebar?: SidebarOptions

  // ARIA label for main navigation (accessibility)
  sidebarLabel?: string

  // Custom CSS class for sidebar
  sidebarClass?: string

  // Custom CSS class for sidebar toggle button
  sidebarToggleClass?: string

  // Custom CSS class for sidebar toggle button
  sidebarOverlayClass?: string

  // Sidebar depth
  sidebarDepth?: number

  // Show "Edit this page" link
  editLink?: boolean

  // Text for edit link
  editLinkText?: string

  // Pattern for edit link URL
  editLinkPattern?: string

  // Edit link icon
  editLinkIcon?: string
  // Edit link css class
  editLinkClass?: string

  // Documentation repository URL
  docsRepo?: string

  // Documentation repository branch Default: 'main'
  docsBranch?: string

  // Documentation directory in repository default: 'docs'
  docsDir?: string

  // Show last updated timestamp default true
  lastUpdated?: boolean

  // Text prefix for last updated timestamp Default: 'Last Updated: '
  lastUpdatedText?: string

  // Last updated icon
  lastUpdatedIcon?: string

  // Show page contributors Default: true
  contributors?: boolean

  // Text prefix for contributors list Default: 'Contributors: '
  contributorsText?: string

  // Contributors icon
  contributorsIcon?: string

  // Whether to get the changelog of a page
  changelog?: ChangelogOptions | boolean

  // Changelog title
  changelogTitle?: string

  // Changelog icon
  changelogIcon?: string

  // Default text for tip callouts Default: 'TIP'
  tip?: string

  // Default text for warning callouts Default: 'WARNING'
  warning?: string

  // Default text for danger callouts Default: 'DANGER'
  danger?: string

  // Default text for important callouts Default: 'IMPORTANT'
  important?: string

  // Default text for note callouts
  note?: string

  // Skip to content Default: 'Skip to main content'
  skipToContent?: string

  // Not found title Default: 'Page Not Found'
  notFoundTitle?: string

  // Custom messages for 404 page Example: ["Oops! That page doesn't exist"]
  notFoundMsg?: string[]

  // "Back to home" link text on 404 page Default: 'Back to home'
  backToHome?: string

  // "Back" link text on 404 page Default: 'Back'
  back?: string

  // Accessibility text for new window links Default: 'open in new window'
  openInNewWindow?: string

  // Accessibility label for color mode toggle Default: 'Toggle color mode'
  toggleColorMode?: string

  // Accessibility label for sidebar toggle Default: 'Toggle sidebar'
  toggleSidebar?: string

  // Previous page link text Set to `false` to hide Default: 'Prev'
  prev?: string | false

  // Icon for previous page link Set to `false` to hide icon Default: 'bi-chevron-right'
  prevIcon?: string | false

  // Next page link text Set to `false` to hide Default: 'Next'

  next?: string | false

  // Icon for next page link Set to `false` to hide icon Default: 'bi-chevron-left'
  nextIcon?: string | false

  // Footer content (HTML supported) Set to `false` to disable footer Example: 'Copyright © 2023'
  footer?: string | false

  // Table of contents configuration Set to `false` to disable TOC
  toc?: TocOptions | false

  // Icon for reading time indicator
  readingTimeIcon?: string

  // Accessibility label for reading time
  readingTimeLabel?: string

  // Metadata items shown below page title
  // Available options: 'Author', 'Date', 'Original', 'Category', 'Tag', 'ReadingTime'
  // Set to `false` to disable
  // Default: ['Author', 'Date', 'ReadingTime']
  pageInfo?: PageInfoType[] | false

  // Created at text
  createdTimeText?: string

  // Created at icon
  createdTimeIcon?: string

  // Icon for author metadata Default: 'bi-person'
  authorIcon?: string | false

  // Print aria label
  printLabel?: string
}
export interface WindThemeOptions extends WindThemeLocaleOptions {
  hostname?: string
  pluginOptions?: ThemePluginOptions
  plugins?: PluginConfig
}
