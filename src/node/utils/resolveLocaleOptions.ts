import type { WindThemeLocaleData, WindThemeLocaleOptions } from '../../shared/index.js'
import { deepMerge } from './deepMerge'

export const LOCALE_OPTIONS: WindThemeLocaleOptions = {
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
  lastUpdatedText: 'Last updated: ',
  lastUpdatedIcon: 'bi-clock',
  contributors: true,
  contributorsText: 'Contributors: ',
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
  createdTimeText: 'Created at: ',
  createdTimeIcon: 'bi-calendar',
  selectLanguageText: 'Languages',
  selectLanguageAriaLabel: 'Select language',
  navbarLocales: {
    selectLangAriaLabel: 'Select language',
    langName: 'English'
  }
}

export const LOCALE_DATA: WindThemeLocaleData = {
  // navbar
  selectLanguageName: 'English'
}

/**
 * Assign default options
 */
export const resolveLocaleOptions = (localeOptions: WindThemeLocaleOptions): void => {
  localeOptions.locales ??= {}
  const mergedLocaleOptions = deepMerge(
    LOCALE_OPTIONS,
    localeOptions as Partial<WindThemeLocaleData>
  )

  Object.assign(localeOptions, {
    ...mergedLocaleOptions
    // ...LOCALE_OPTIONS,
    // ...localeOptions
  })
  localeOptions.locales['/'] ??= {}
  Object.assign(localeOptions.locales['/'], {
    ...LOCALE_DATA,
    ...localeOptions.locales['/']
  })
  if (localeOptions.sidebar) {
    Object.assign(localeOptions.locales['/'], {
      sidebar: localeOptions.sidebar
    })
  }
}
