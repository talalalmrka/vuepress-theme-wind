import { ThemeOptions } from '../../shared'

export const assignDefaultOptions = (options: ThemeOptions): ThemeOptions => {
  return {
    repo: options.repo ?? '',
    sidebar: options.sidebar ?? {},
    breadcrumbs: options.breadcrumbs ?? {
      separator: '/',
      homeText: 'Home',
      icons: true,
      homeIcon: 'bi-house'
    },
    darkMode: options.darkMode ?? true,
    footer: options.footer ?? `Copyright reserved @ Fadgram | ${new Date().getFullYear()}`,
    logo: options.logo ?? '',
    navbar: options.navbar ?? [],
    toc:
      options.toc !== false
        ? {
            delay: options.toc?.delay ?? 200,
            marker: options.toc?.marker ?? true,
            offset: options.toc?.offset ?? 5,
            print: options.toc?.print ?? true,
            title: options.toc?.title ?? 'On This Page'
          }
        : options.toc,
    next: options.next ?? 'Next',
    nextIcon: options.nextIcon ?? 'bi-chevron-right',
    prev: options.prev ?? 'Prev',
    prevIcon: options.prevIcon ?? 'bi-chevron-left',
    readingTimeIcon: options.readingTimeIcon ?? 'bi-hourglass-bottom',
    readingTimeLabel: options.readingTimeLabel ?? 'Reading time',
    pageInfo: options.pageInfo ?? ['ReadingTime', 'Author'],
    pluginOptions: {
      activeHeaderLinks: options.pluginOptions?.activeHeaderLinks ?? {
        headerAnchorSelector: '.header-anchor',
        headerLinkSelector: '.vp-toc-link',
        offset: 64
      },
      appendDate: options.pluginOptions?.appendDate ?? {},
      backToTop: options.pluginOptions?.backToTop ?? {},
      catalog: options.pluginOptions?.catalog ?? {},
      container: options.pluginOptions?.container ?? {
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
      copyCode: options.pluginOptions?.copyCode ?? {
        showInMobile: true
      },
      ext: options.pluginOptions?.ext ?? {
        breaks: true,
        component: true,
        footnote: true,
        gfm: true,
        linkify: true,
        tasklist: true,
        vPre: true
      },
      git: options.pluginOptions?.git ?? {},
      highlight: options.pluginOptions?.highlight ?? {
        themes: {
          dark: 'one-dark-pro',
          light: 'one-light'
        },
        type: 'shiki'
      },
      hint: options.pluginOptions?.hint ?? {
        alert: true,
        hint: true,
        injectStyles: true
      },
      icon: options.pluginOptions?.icon ?? {
        prefix: 'bi',
        type: 'iconify'
      },
      image: options.pluginOptions?.image ?? {
        figure: true,
        lazyload: true,
        mark: true,
        size: true
      },
      include: options.pluginOptions?.include ?? {},
      linksCheck: options.pluginOptions?.linksCheck ?? {},
      math: options.pluginOptions?.math ?? {
        type: 'katex'
      },
      mediumZoom: options.pluginOptions?.mediumZoom ?? {},
      notice: options.pluginOptions?.notice ?? {
        config: []
      },
      nprogress: options.pluginOptions?.nprogress ?? false,
      readingTime: options.pluginOptions?.readingTime ?? {},
      search: options.pluginOptions?.search ?? {
        locales: {
          '/': {
            placeholder: 'Search'
          },
          '/zh/': {
            placeholder: '搜索'
          }
        },
        provider: 'local'
      },
      stylize: options.pluginOptions?.stylize ?? {
        align: true,
        attrs: true,
        mark: true,
        spoiler: true,
        sub: true,
        sup: true
      },
      tab: options.pluginOptions?.tab ?? {
        codeTabs: true,
        tabs: true
      },
      toc: options.pluginOptions?.toc ?? {
        delay: 200,
        marker: true,
        offset: 0,
        print: true,
        title: 'On This Page'
      }
    },
    plugins: options.plugins ?? []
  }
}
