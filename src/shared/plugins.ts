import { ActiveHeaderLinksPluginOptions } from '@vuepress/plugin-active-header-links'
import { AppendDatePluginOptions } from '@vuepress/plugin-append-date'
import { BackToTopPluginOptions } from '@vuepress/plugin-back-to-top'
import { CatalogPluginOptions } from '@vuepress/plugin-catalog'
import { CopyCodePluginOptions } from '@vuepress/plugin-copy-code'
import { GitPluginOptions } from '@vuepress/plugin-git'
import { IconPluginOptions } from '@vuepress/plugin-icon'
import { LinksCheckPluginOptions } from '@vuepress/plugin-links-check'
import { MarkdownContainerPluginOptions } from '@vuepress/plugin-markdown-container'
import { MarkdownExtPluginOptions } from '@vuepress/plugin-markdown-ext'
import { MarkdownHintPluginOptions } from '@vuepress/plugin-markdown-hint'
import { MarkdownImagePluginOptions } from '@vuepress/plugin-markdown-image'
import { MarkdownIncludePluginOptions } from '@vuepress/plugin-markdown-include'
import { MarkdownMathPluginOptions } from '@vuepress/plugin-markdown-math'
import { MarkdownStylizePluginOptions } from '@vuepress/plugin-markdown-stylize'
import { MarkdownTabPluginOptions } from '@vuepress/plugin-markdown-tab'
import { NoticePluginOptions } from '@vuepress/plugin-notice'
import { HighlighterOptions } from './highlight'
import { SearchOptions } from './search'
import { SeoPluginOptions } from '@vuepress/plugin-seo'
import { SitemapPluginOptions } from '@vuepress/plugin-sitemap'
import { MediumZoomPluginOptions } from '@vuepress/plugin-medium-zoom'
import { TocOptions } from './toc'
import { ReadingTimePluginOptions } from '@vuepress/plugin-reading-time'
import { RevealJsPluginOptions } from '@vuepress/plugin-revealjs'

export interface ThemePluginOptions {
  activeHeaderLinks?: ActiveHeaderLinksPluginOptions | boolean
  appendDate?: AppendDatePluginOptions | boolean
  backToTop?: BackToTopPluginOptions | boolean
  catalog?: CatalogPluginOptions | boolean
  container?: MarkdownContainerPluginOptions | boolean
  copyCode?: CopyCodePluginOptions | boolean
  ext?: MarkdownExtPluginOptions | boolean
  git?: GitPluginOptions | boolean
  highlight?: HighlighterOptions | boolean
  hint?: MarkdownHintPluginOptions | boolean
  icon?: IconPluginOptions | boolean
  image?: MarkdownImagePluginOptions | boolean
  include?: MarkdownIncludePluginOptions | boolean
  linksCheck?: LinksCheckPluginOptions | boolean
  math?: MarkdownMathPluginOptions | boolean
  mediumZoom?: MediumZoomPluginOptions | boolean
  notice?: NoticePluginOptions | boolean
  nprogress?: boolean
  photoSwipe?: boolean
  readingTime?: ReadingTimePluginOptions | boolean
  revealJs?: RevealJsPluginOptions | boolean
  stylize?: MarkdownStylizePluginOptions | boolean
  search?: SearchOptions | boolean
  seo?: Omit<SeoPluginOptions, 'hostname' | 'author'> | boolean
  sitemap?: Omit<SitemapPluginOptions, 'hostname'> | boolean
  tab?: MarkdownTabPluginOptions | boolean
  toc?: TocOptions | boolean
}
