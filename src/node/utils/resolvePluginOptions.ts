import { ThemePluginOptions } from '../../shared'
import { deepMerge } from './deepMerge'
// default plugin options
export const PLUGIN_OPTIONS: ThemePluginOptions = {
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

export const resolvePluginOptions = (pluginOptions: ThemePluginOptions): void => {
  const mergedPluginOptions = deepMerge(
    PLUGIN_OPTIONS,
    pluginOptions as Partial<ThemePluginOptions>
  )

  Object.assign(pluginOptions, {
    ...mergedPluginOptions
  })
}
