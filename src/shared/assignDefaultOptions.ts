import { ThemeOptions } from "./options";

export const assignDefaultOptions = (options: ThemeOptions): ThemeOptions => {
  return {
    darkMode: options.darkMode ?? true,
    footer:
      options.footer ??
      `Copyright reserved @ Fadgram | ${new Date().getFullYear()}`,
    logo: options.logo ?? "",
    navbar: options.navbar ?? [],
    navbarTitle: options.navbarTitle ?? true,
    pluginOptions: {
      activeHeaderLinks: options.pluginOptions?.activeHeaderLinks ?? {
        headerAnchorSelector: ".header-anchor",
        headerLinkSelector: ".vp-toc-link",
        offset: 64,
      },
      appendDate: options.pluginOptions?.appendDate ?? {},
      backToTop: options.pluginOptions?.backToTop ?? {},
      catalog: options.pluginOptions?.catalog ?? {},
      container: options.pluginOptions?.container ?? {
        locales: {
          "/": {
            defaultInfo: "TIP",
          },
          "/zh/": {
            defaultInfo: "提示",
          },
        },
        type: "tip",
      },
      copyCode: options.pluginOptions?.copyCode ?? {
        showInMobile: true,
      },
      ext: options.pluginOptions?.ext ?? {
        breaks: true,
        component: true,
        footnote: true,
        gfm: true,
        linkify: true,
        tasklist: true,
        vPre: true,
      },
      git: options.pluginOptions?.git ?? {},
      highlight: options.pluginOptions?.highlight ?? {
        themes: {
          dark: "one-dark-pro",
          light: "one-light",
        },
        type: "shiki",
      },
      hint: options.pluginOptions?.hint ?? {
        alert: true,
        hint: true,
        injectStyles: true,
      },
      icon: options.pluginOptions?.icon ?? {
        prefix: "bi",
        type: "iconify",
      },
      image: options.pluginOptions?.image ?? {
        figure: true,
        lazyload: true,
        mark: true,
        size: true,
      },
      include: options.pluginOptions?.include ?? {},
      linksCheck: options.pluginOptions?.linksCheck ?? {},
      math: options.pluginOptions?.math ?? {},
      mediumZoom: options.pluginOptions?.mediumZoom ?? {},
      notice: options.pluginOptions?.notice ?? {
        config: [],
      },
      nprogress: options.pluginOptions?.nprogress ?? false,
      search: options.pluginOptions?.search ?? {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
        provider: "local",
      },
      stylize: options.pluginOptions?.stylize ?? {
        align: true,
        attrs: true,
        mark: true,
        spoiler: true,
        sub: true,
        sup: true,
      },
      tab: options.pluginOptions?.tab ?? {
        codeTabs: true,
        tabs: true,
      },
      toc: options.pluginOptions?.toc ?? {
        delay: 200,
        marker: true,
        offset: 0,
        print: true,
        title: "On This Page",
      },
    },
    plugins: options.plugins ?? [],
    repo: options.repo ?? "",
    sidebar: options.sidebar ?? {},
  };
};
