import type { AutoLinkConfig } from "vuepress/client";
import { ActiveHeaderLinksPluginOptions } from "@vuepress/plugin-active-header-links";
import { GitPluginOptions } from "@vuepress/plugin-git";
import { MarkdownOptions } from "./markdown";
import { PrismjsPluginOptions } from "@vuepress/plugin-prismjs";
import { ShikiPluginOptions } from "@vuepress/plugin-shiki";
import { MarkdownTabPluginOptions } from "@vuepress/plugin-markdown-tab";
import { CopyCodePluginOptions } from "@vuepress/plugin-copy-code";
import { BackToTopPluginOptions } from "@vuepress/plugin-back-to-top";
import { IconPluginOptions } from "@vuepress/plugin-icon";
import { AppendDatePluginOptions } from "@vuepress/plugin-append-date";
import { MarkdownContainerPluginOptions } from "@vuepress/plugin-markdown-container";
import { TocPluginOptions } from "@vuepress/plugin-toc";
import { PluginConfig } from "vuepress";
import { NoticePluginOptions } from "@vuepress/plugin-notice";
import { MarkdownExtPluginOptions } from "@vuepress/plugin-markdown-ext";
import { MarkdownImagePluginOptions } from "@vuepress/plugin-markdown-image";
import { MarkdownIncludePluginOptions } from "@vuepress/plugin-markdown-include";
import { MarkdownHintPluginOptions } from "@vuepress/plugin-markdown-hint";
import { MarkdownMathPluginOptions } from "@vuepress/plugin-markdown-math";
import { MarkdownStylizePluginOptions } from "@vuepress/plugin-markdown-stylize";
import { LinksCheckPluginOptions } from "@vuepress/plugin-links-check";
import { CatalogPluginOptions } from "@vuepress/plugin-catalog";

import { SearchPluginOptions } from "@vuepress/plugin-search";
import { DocSearchPluginOptions } from "@vuepress/plugin-docsearch";
import { SlimSearchPluginOptions } from "@vuepress/plugin-slimsearch";
import { MeiliSearchPluginOptions } from "@vuepress/plugin-meilisearch";

export interface ThemeOptions {
  logo?: string;
  navbarTitle?: string | boolean;
  darkMode?: boolean;
  navbar?: LinkOptions[];
  repo?: string;
  repoLabel?: string;
  sidebar?: Record<string, SidebarConfig[]>;
  footer?: string;
  features?: {
    activeHeaderLinks: ActiveHeaderLinksPluginOptions | boolean;
    appendDate?: AppendDatePluginOptions | boolean;
    backToTop?: BackToTopPluginOptions | boolean;
    copyCode?: CopyCodePluginOptions | boolean;
    git?: GitPluginOptions | boolean;
    icon?: IconPluginOptions | boolean;
    linksCheck?: LinksCheckPluginOptions | boolean;
    notice?: NoticePluginOptions | boolean;
    nprogress?: boolean;
    toc?: TocPluginOptions | boolean;
    catalog?: CatalogPluginOptions | boolean;
  };
  markdown?: {
    container?: MarkdownContainerPluginOptions | boolean;
    ext?: MarkdownExtPluginOptions | boolean;
    hint?: MarkdownHintPluginOptions | boolean;
    image?: MarkdownImagePluginOptions | boolean;
    include?: MarkdownIncludePluginOptions | boolean;
    math?: MarkdownMathPluginOptions | boolean;
    stylize?: MarkdownStylizePluginOptions | boolean;
    tab?: MarkdownTabPluginOptions | boolean;
    highlight?: {
      type: "shiki" | "prismjs";
      options?: ShikiPluginOptions | PrismjsPluginOptions;
    };
  };
  search?: {
    docsearch?: DocSearchPluginOptions | boolean;
    meilisearch?: MeiliSearchPluginOptions | boolean;
    slimsearch?: SlimSearchPluginOptions | boolean;
    search?: SearchPluginOptions | boolean;
  };
  toc?: TocOptions | boolean;
  plugins?: PluginConfig;
}

export interface LinkOptions extends AutoLinkConfig {
  icon?: string;
  children?: LinkOptions[];
}

export interface SidebarConfig {
  text: string;
  icon?: string;
  link?: string;
  children?: SidebarConfig[];
}
// Home Page Frontmatter
export interface HomePageFrontmatter {
  layout: "Home";
  title?: string;
  icon?: string;
  hero?: HeroConfig;
}
// Hero Config
export interface HeroConfig {
  text?: string;
  tagline?: string;
  image?: string;
  imageDark?: string;
  alt?: string;
  bgImage?: string;
  bgImageDark?: string;
  bgStyle?: HeroBgStyle;
  fullScreen?: boolean;
  class?: string;
  actions?: HeroActionConfig[];
}
// Hero Bg Style
export interface HeroBgStyle {
  cover?: boolean;
  repeat?: boolean;
  center?: boolean;
  fixed?: boolean;
}
// Action Button
export interface HeroActionConfig {
  text: string;
  icon?: string;
  color?: string;
  link: string;
  outline?: boolean;
  pill?: boolean;
  class?: string;
}

export interface HighlightConfig {
  title?: string;
  icon?: string;
  link?: string;
  details?: string;
  header?: string;
  description?: string;
  image?: string;
  bgImage?: string;
  bgImageDark?: string;
  highlights?: HighlightConfig[];
  features?: FeatureConfig[];
}

export interface FeatureConfig {
  title?: string;
  icon?: string;
  link?: string;
  details?: string;
}
export interface HomePageFrontmatterr {
  layout: "Home";
  title?: string;
  icon?: string;
  heroImage?: string;
  heroAlt?: string;
  heroText?: string;
  tagline?: string;
  bgImage?: string;
  bgImageDark?: string;
  bgImageStyle?: {
    "background-size": "cover" | "contain";
    "background-position": "center" | "top" | "bottom";
    "background-repeat": "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
    "background-attachment": "fixed" | "scroll";
  };
  heroFullScreen?: boolean;
  actions?: {
    text: string;
    icon?: string;
    class?: string;
    link: string;
    type?: "primary" | "secondary";
  }[];
  features?: {
    title: string;
    details: string;
  }[];
  footer?: string;
}
export type HighlightOptions =
  | ({
      type: "prismjs";
    } & PrismjsPluginOptions)
  | ({
      type: "shiki";
    } & ShikiPluginOptions);
export { assignDefaultOptions } from "./assignDefaultOptions";
export { MarkdownOptions };

export interface TocOptions {
  title?: string;
  print?: boolean;
  marker?: boolean;
  offset?: number;
  delay?: number;
}
