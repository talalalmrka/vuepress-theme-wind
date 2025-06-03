import type { ThemePluginOptions, WindThemeLocaleData, WindThemeLocaleOptions } from '../../shared'

export const DEFAULT_LOCALE_OPTIONS: WindThemeLocaleOptions = {
  // breadcrumbs
  breadcrumbs: {
    separator: '/',
    homeText: 'Home',
    icons: true,
    homeIcon: 'bi-house'
  },

  // color mode
  darkMode: true,

  footer: `Copyright reserved @ Fadgram | ${new Date().getFullYear()}`,
  // navbar
  navbar: [],
  logo: null,
  repo: null,
  //selectLanguageText: 'Languages',
  //selectLanguageAriaLabel: 'Select language',

  // sidebar
  sidebar: {},
  sidebarDepth: 2,

  // page meta
  editLink: true,
  editLinkText: 'Edit this page',
  lastUpdated: true,
  contributors: true,
  contributorsText: 'Contributors',

  // 404 page messages
  notFound: [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`
  ],
  backToHome: 'Take me home',

  // a11y
  openInNewWindow: 'open in new window',
  toggleColorMode: 'toggle color mode',
  toggleSidebar: 'toggle sidebar',
  toc: {
    delay: 200,
    marker: true,
    offset: 0,
    print: true,
    title: 'On This Page'
  },
  next: 'Next',
  nextIcon: 'bi-chevron-right',
  prev: 'Prev',
  prevIcon: 'bi-chevron-left',
  readingTimeIcon: 'bi-hourglass-bottom',
  readingTimeLabel: 'Reading time',
  pageInfo: ['ReadingTime', 'Author']
}

export const DEFAULT_LOCALE_DATA: WindThemeLocaleData = {
  // navbar
  selectLanguageName: 'English'
}

export const DEFAULT_PLUGIN_OPTIONS: ThemePluginOptions = {
  activeHeaderLinks: {
    headerAnchorSelector: '.header-anchor',
    headerLinkSelector: '.vp-toc-link',
    offset: 64
  },
  appendDate: {},
  backToTop: {},
  catalog: {},
  container: {
    locales: {
      '/': {
        defaultInfo: 'TIP'
      },
      '/zh/': {
        defaultInfo: '提示'
      }
    },
    type: 'tip'
  },
  copyCode: {
    showInMobile: true
  },
  ext: {
    breaks: true,
    component: true,
    footnote: true,
    gfm: true,
    linkify: true,
    tasklist: true,
    vPre: true
  },
  git: {},
  highlight: {
    type: 'shiki',
    themes: {
      light: 'one-light',
      dark: 'one-dark-pro'
    }
  },
  hint: {
    alert: true,
    hint: true,
    injectStyles: true
  },
  icon: {
    prefix: 'bi',
    type: 'iconify'
  },
  image: {
    figure: true,
    lazyload: true,
    mark: true,
    size: true
  },
  include: {},
  linksCheck: {},
  math: {
    type: 'katex'
  },
  mediumZoom: {},
  notice: {
    config: []
  },
  nprogress: true,
  readingTime: {},
  search: {
    provider: 'local',
    locales: {
      '/': {
        placeholder: 'Search'
      },
      '/zh/': {
        placeholder: '搜索'
      }
    }
  },
  stylize: {
    align: true,
    attrs: true,
    mark: true,
    spoiler: true,
    sub: true,
    sup: true
  },
  tab: {
    codeTabs: true,
    tabs: true
  },
  toc: {
    delay: 200,
    marker: true,
    offset: 0,
    print: true,
    title: 'On This Page'
  }
}

/**
 * Assign default options
 */
export const assignDefaultLocaleOptions = (localeOptions: WindThemeLocaleOptions): void => {
  localeOptions.locales ??= {}
  Object.assign(localeOptions, {
    ...DEFAULT_LOCALE_OPTIONS,
    ...localeOptions
  })
  localeOptions.locales['/'] ??= {}
  Object.assign(localeOptions.locales['/'], {
    ...DEFAULT_LOCALE_DATA,
    ...localeOptions.locales['/']
  })
}
