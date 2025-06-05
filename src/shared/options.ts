import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { LocaleData } from 'vuepress/shared'
import { PluginConfig } from 'vuepress'

import { NavbarOptions, NavbarLayoutOptions } from './navbar'
import { SidebarOptions } from './sidebar'
import { ThemePluginOptions } from './plugins'
import { BreadcrumbsOptions } from './breadcrumbs'
import { TocOptions } from './toc'
import { PageInfoType } from './page'
import { Author } from './author'

/**
 * Wind Theme Locale Configuration
 * Extends VuePress's base locale settings with theme-specific options
 *
 * Usage in config:
 *
 * export default defineUserConfig({
 *   locales: {
 *     '/': {
 *       // WindThemeLocaleData options here
 *     }
 *   }
 * })
 */
export interface WindThemeLocaleData extends LocaleData {
  /**
   * Default author information shown in page metadata
   *
   * Example: { name: 'John Doe', email: 'john@example.com' }
   */
  author?: Author

  /**
   * Breadcrumb navigation configuration
   * Set to `false` to disable breadcrumbs
   *
   * Default: Enabled with default settings
   */
  breadcrumbs?: BreadcrumbsOptions | false

  /**
   * Enable dark mode toggle functionality
   *
   * Default: true (dark mode available)
   */
  darkMode?: boolean

  /**
   * Show external link icon indicator (↗) for external URLs
   *
   * Default: true
   */
  externalLinkIcon?: boolean

  /**
   * Text for "Home" link in navigation elements
   *
   * Default: 'Home'
   */
  home?: string

  /**
   * Navigation bar configuration
   * Set to `false` to disable navbar completely
   *
   * Default: Auto-generated from page headers
   */
  navbar?: NavbarOptions | false
  /**
   * Custom CSS class for entire navbar container
   */
  navbarClass?: string
  /**
   * ARIA label for main navigation (accessibility)
   *
   * Default: 'Navigation'
   */
  navbarLabel?: string

  /**
   * Text for navbar title/logo area
   * Set to `false` to hide title
   *
   * Default: Site title
   */
  navbarTitle?: string | false

  /**
   * Custom CSS class for navbar title element
   */
  navbarTitleClass?: string
  /**
   * Custom CSS class for navbar brand container (logo + title)
   */
  navbarBrandClass?: string
  /**
   * Navbar layout config
   *
   * 导航栏布局设置
   *
   * @default { start: ["Brand"], center: ["Links"], end: ["Language", "Repo", "Outlook", "Search"] }
   */
  navbarLayout?: NavbarLayoutOptions
  /**
   * ARIA label for page-specific navigation (accessibility)
   *
   * Default: 'Page navigation'
   */
  pageNavbarLabel?: string | null

  /**
   * Path to light mode logo image
   *
   * Default: '/favicon.ico'
   */
  logo?: string | null

  /**
   * Path to dark mode logo image
   *
   * Default: Same as light mode logo
   */
  logoDark?: string | null

  /**
   * Alt text for logo image (accessibility)
   *
   * Default: Site title
   */
  logoAlt?: string | null

  /**
   * Custom CSS class for logo image
   */
  logoClass?: string

  /**
   * Path to site favicon
   *
   * Default: '/favicon.ico'
   */
  favicon?: string | null

  /**
   * Repository URL (GitHub/GitLab/Bitbucket)
   *
   * Example: 'https://github.com/vuepress/vuepress-next'
   */
  repo?: string | null

  /**
   * Repository link text
   *
   * Default: 'Repo'
   */
  repoLabel?: string

  /**
   * Language selection dropdown text
   *
   * Default: 'Languages'
   */
  selectLanguageText?: string

  /**
   * ARIA label for language selector (accessibility)
   *
   * Default: 'Select language'
   */
  selectLanguageAriaLabel?: string

  /**
   * Display name for current language
   *
   * Default: Locale name
   */
  selectLanguageName?: string

  /**
   * Sidebar configuration
   * Set to `false` to disable sidebar
   *
   * Default: Auto-generated from page headers
   */
  sidebar?: SidebarOptions | false
  /**
   * ARIA label for main navigation (accessibility)
   *
   * Default: 'Navigation'
   */
  sidebarLabel?: string
  /**
   * Custom CSS class for sidebar
   */
  sidebarClass?: string
  /**
   * Custom CSS class for sidebar toggle button
   */
  sidebarToggleClass?: string
  /**
   * Custom CSS class for sidebar toggle button
   */
  sidebarOverlayClass?: string
  /**
   * Show "Edit this page" link
   *
   * Default: true
   */
  editLink?: boolean

  /**
   * Text for edit link
   *
   * Default: 'Edit this page'
   */
  editLinkText?: string

  /**
   * Pattern for edit link URL
   *
   * Placeholders:
   *   :repo    - docsRepo value
   *   :branch  - docsBranch value
   *   :path    - Relative file path
   *   :dir     - docsDir value
   *
   * Default: ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string

  /**
   * Documentation repository URL
   *
   * Default: repo value
   */
  docsRepo?: string

  /**
   * Documentation repository branch
   *
   * Default: 'main'
   */
  docsBranch?: string

  /**
   * Documentation directory in repository
   *
   * Default: ''
   */
  docsDir?: string

  /**
   * Show last updated timestamp
   *
   * Default: true
   */
  lastUpdated?: boolean

  /**
   * Text prefix for last updated timestamp
   *
   * Default: 'Last Updated: '
   */
  lastUpdatedText?: string

  /**
   * Show page contributors
   *
   * Default: true
   */
  contributors?: boolean

  /**
   * Text prefix for contributors list
   *
   * Default: 'Contributors: '
   */
  contributorsText?: string

  /**
   * Default text for tip callouts
   *
   * Default: 'TIP'
   */
  tip?: string

  /**
   * Default text for warning callouts
   *
   * Default: 'WARNING'
   */
  warning?: string

  /**
   * Default text for danger callouts
   *
   * Default: 'DANGER'
   */
  danger?: string

  /**
   * Default text for important callouts
   *
   * Default: 'IMPORTANT'
   */
  important?: string

  /**
   * Default text for note callouts
   *
   * Default: 'NOTE'
   */
  note?: string

  /**
   * Custom messages for 404 page
   *
   * Example: ["Oops! That page doesn't exist"]
   */
  notFound?: string[]

  /**
   * "Back to home" link text on 404 page
   *
   * Default: 'Back to home'
   */
  backToHome?: string

  /**
   * Accessibility text for new window links
   *
   * Default: 'open in new window'
   */
  openInNewWindow?: string

  /**
   * Accessibility label for color mode toggle
   *
   * Default: 'Toggle color mode'
   */
  toggleColorMode?: string

  /**
   * Accessibility label for sidebar toggle
   *
   * Default: 'Toggle sidebar'
   */
  toggleSidebar?: string

  /**
   * Previous page link text
   * Set to `false` to hide
   *
   * Default: 'Previous'
   */
  prev?: string | false

  /**
   * Icon for previous page link
   * Set to `false` to hide icon
   *
   * Default: '←'
   */
  prevIcon?: string | false

  /**
   * Next page link text
   * Set to `false` to hide
   *
   * Default: 'Next'
   */
  next?: string | false

  /**
   * Icon for next page link
   * Set to `false` to hide icon
   *
   * Default: '→'
   */
  nextIcon?: string | false

  /**
   * Footer content (HTML supported)
   * Set to `false` to disable footer
   *
   * Example: 'Copyright © 2023'
   */
  footer?: string | false

  /**
   * Table of contents configuration
   * Set to `false` to disable TOC
   *
   * Default: Enabled with depth 2
   */
  toc?: TocOptions | false

  /**
   * Icon for reading time indicator
   *
   * Default: '⏱️'
   */
  readingTimeIcon?: string

  /**
   * Accessibility label for reading time
   *
   * Default: 'Reading time'
   */
  readingTimeLabel?: string

  /**
   * Metadata items shown below page title
   *
   * Available options:
   *   'Author', 'Date', 'Original', 'Category', 'Tag', 'ReadingTime'
   *
   * Set to `false` to disable
   *
   * Default: ['Author', 'Date', 'ReadingTime']
   */
  pageInfo?: PageInfoType[] | false

  /**
   * Icon for author metadata
   * Set to `false` to hide icon
   *
   * Default: '👤'
   */
  authorIcon?: string | false
}

/**
 * Root Theme Configuration
 * Combines locale settings with global theme options
 *
 * Usage in config:
 *
 * export default defineUserConfig({
 *   theme: windTheme({
 *     // ThemeOptions here
 *   })
 * })
 */
export interface ThemeOptions extends WindThemeLocaleData {
  /**
   * Base URL of the site (used for SEO and canonical URLs)
   *
   * Example: 'https://example.com'
   */
  hostname?: string

  /**
   * Configuration for theme's built-in plugins
   */
  pluginOptions?: ThemePluginOptions

  /**
   * Custom VuePress plugins to use with theme
   *
   * Example: [['@vuepress/plugin-pwa', { ... }]]
   */
  plugins?: PluginConfig
}

/**
 * Final Theme Data Type
 * Used internally by VuePress with Wind theme options
 */
export type WindThemeData = ThemeData<ThemeOptions>
