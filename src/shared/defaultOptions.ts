import type { ThemePluginOptions, WindThemeLocaleData } from '@theme-wind/shared'

export const DEFAULT_LOCALE_OPTIONS: WindThemeLocaleData = {
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
  navbarLayout: {
    start: ['NavbarBrand'],
    center: ['NavbarLinks'],
    end: ['SearchBox', 'SelectLanguage', 'NavbarRepo', 'DarkModeToggle']
  },
  logo: null,
  repo: null,

  // sidebar
  sidebar: {},
  sidebarLabel: 'Toggle sidebar',
  //external link icon
  externalLinkIcon: true,

  //theme color
  themeColor: '#009966',
  // page meta
  editLink: true,
  editLinkText: 'Edit this page',
  editLinkIcon: 'bi-pencil-square',
  editLinkClass: 'edit-link',
  lastUpdated: true,
  lastUpdatedText: 'Last updated',
  lastUpdatedIcon: 'bi-clock',
  contributors: true,
  contributorsText: 'Contributors',
  contributorsIcon: 'bi-person',
  changelog: true,
  // 404 page messages
  skipToContent: 'Skip to main content',
  notFoundTitle: 'Page not found',
  notFoundMsg: [
    'There’s nothing here.',
    'How did we get here?',
    'That’s a Four-Oh-Four.',
    "Looks like we've got some broken links."
  ],
  back: 'Go back',
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
  pageInfo: ['Author', 'ReadingTime', 'CreatedTime'],
  authorIcon: 'bi-person',
  createdTimeText: 'Created at',
  createdTimeIcon: 'bi-calendar',
  selectLanguageText: 'Languages',
  selectLanguageAriaLabel: 'Select language',
  navbarLocales: {
    selectLangAriaLabel: 'Select language',
    langName: 'English'
  }
}

// default plugin options
export const DEFAULT_PLUGIN_OPTIONS: ThemePluginOptions = {
  activeHeaderLinks: {
    headerAnchorSelector: '.header-anchor',
    headerLinkSelector: '.vp-toc-link',
    offset: 73
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
  git: {
    createdTime: true,
    changelog: true
  },
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
  /* icon: {
    prefix: 'bi',
    type: 'iconify'
  }, */
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
  photoSwipe: true,
  readingTime: {},
  revealJs: {},
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
  seo: {},
  sitemap: {},
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
