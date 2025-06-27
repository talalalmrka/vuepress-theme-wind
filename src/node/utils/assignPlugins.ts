import { prismjsPlugin, PrismjsPluginOptions } from '@vuepress/plugin-prismjs'
import { shikiPlugin, ShikiPluginOptions } from '@vuepress/plugin-shiki'
import { copyCodePlugin, CopyCodePluginOptions } from '@vuepress/plugin-copy-code'
import { markdownTabPlugin, MarkdownTabPluginOptions } from '@vuepress/plugin-markdown-tab'
import { backToTopPlugin, BackToTopPluginOptions } from '@vuepress/plugin-back-to-top'
import { iconPlugin, IconPluginOptions } from '@vuepress/plugin-icon'
import { noticePlugin, NoticePluginOptions } from '@vuepress/plugin-notice'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { appendDatePlugin, AppendDatePluginOptions } from '@vuepress/plugin-append-date'
import {
  markdownContainerPlugin,
  MarkdownContainerPluginOptions
} from '@vuepress/plugin-markdown-container'
import { markdownExtPlugin, MarkdownExtPluginOptions } from '@vuepress/plugin-markdown-ext'
import { markdownImagePlugin, MarkdownImagePluginOptions } from '@vuepress/plugin-markdown-image'
import {
  markdownIncludePlugin,
  MarkdownIncludePluginOptions
} from '@vuepress/plugin-markdown-include'
import { linksCheckPlugin, LinksCheckPluginOptions } from '@vuepress/plugin-links-check'
import { markdownHintPlugin, MarkdownHintPluginOptions } from '@vuepress/plugin-markdown-hint'
import { markdownMathPlugin, MarkdownMathPluginOptions } from '@vuepress/plugin-markdown-math'
import {
  markdownStylizePlugin,
  MarkdownStylizePluginOptions
} from '@vuepress/plugin-markdown-stylize'
import { docsearchPlugin, DocSearchPluginOptions } from '@vuepress/plugin-docsearch'
import { meilisearchPlugin, MeiliSearchPluginOptions } from '@vuepress/plugin-meilisearch'
import { searchPlugin, SearchPluginOptions } from '@vuepress/plugin-search'
import { slimsearchPlugin, SlimSearchPluginOptions } from '@vuepress/plugin-slimsearch'
/* import {
  activeHeaderLinksPlugin,
  ActiveHeaderLinksPluginOptions
} from '@vuepress/plugin-active-header-links' */
import { gitPlugin, GitPluginOptions } from '@vuepress/plugin-git'
import { catalogPlugin, CatalogPluginOptions } from '@vuepress/plugin-catalog'
import { mediumZoomPlugin, MediumZoomPluginOptions } from '@vuepress/plugin-medium-zoom'
import { PluginConfig } from 'vuepress'
// import { useNavbarHeight } from '../../client/composables/useNavbarHeight'
import { readingTimePlugin, ReadingTimePluginOptions } from '@vuepress/plugin-reading-time'
import { seoPlugin, SeoPluginOptions } from '@vuepress/plugin-seo'
import { sitemapPlugin, SitemapPluginOptions } from '@vuepress/plugin-sitemap'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { revealJsPlugin, RevealJsPluginOptions } from '@vuepress/plugin-revealjs'
import { ThemePluginOptions, WindThemeOptions } from '../../shared'

function getSEOPluginOptions(
  hostname,
  author,
  seoOption: Omit<SeoPluginOptions, 'hostname' | 'author'> | boolean
): SeoPluginOptions {
  const baseOptions = typeof seoOption === 'boolean' ? {} : seoOption
  return {
    ...baseOptions,
    hostname: hostname,
    author: author
  }
}
function getSitemapPluginOptions(
  themeOptions: WindThemeOptions,
  sitemapOption: Omit<SitemapPluginOptions, 'hostname'> | boolean
): SitemapPluginOptions {
  const baseOptions = typeof sitemapOption === 'boolean' ? {} : sitemapOption
  return {
    ...baseOptions,
    hostname: themeOptions.hostname
  }
}
export const assignPlugins = (options: WindThemeOptions): PluginConfig => {
  const pluginOptions: ThemePluginOptions = options.pluginOptions ?? {}
  const plugins = options.plugins ?? []
  return [
    ...plugins,

    // ==================== Features ====================

    // Append Date Plugin
    // Automatically appends creation and update dates to pages
    ...(pluginOptions?.appendDate
      ? [appendDatePlugin((pluginOptions.appendDate as AppendDatePluginOptions) ?? {})]
      : []),

    // Back to Top Plugin
    // Adds a button to scroll back to the top of the page
    ...(pluginOptions?.backToTop
      ? [backToTopPlugin((pluginOptions.backToTop as BackToTopPluginOptions) ?? {})]
      : []),

    // Copy Code Plugin
    // Adds a copy button to code blocks
    ...(pluginOptions?.copyCode
      ? [copyCodePlugin((pluginOptions.copyCode as CopyCodePluginOptions) ?? {})]
      : []),

    // Git Plugin
    // Provides git-related information like last updated time
    ...(pluginOptions?.git ? [gitPlugin((pluginOptions.git as GitPluginOptions) ?? {})] : []),

    // Icon Plugin
    // Enables using icons from popular icon sets
    ...(pluginOptions?.icon ? [iconPlugin((pluginOptions.icon as IconPluginOptions) ?? {})] : []),

    // Links Check Plugin
    // Checks for broken links in your documentation
    ...(pluginOptions?.linksCheck
      ? [linksCheckPlugin((pluginOptions.linksCheck as LinksCheckPluginOptions) ?? {})]
      : []),

    // Medium Zoom Plugin
    // Adds a zoom effect to images
    ...(pluginOptions?.mediumZoom
      ? [mediumZoomPlugin((pluginOptions.mediumZoom as MediumZoomPluginOptions) ?? {})]
      : []),

    // Notice Plugin
    // Adds notice containers for important information
    ...(pluginOptions?.notice
      ? [
          noticePlugin(
            (pluginOptions.notice as NoticePluginOptions) ?? {
              config: []
            }
          )
        ]
      : []),
    // NProgress Plugin
    // Shows a progress bar during page navigation
    ...(pluginOptions?.nprogress ? [nprogressPlugin()] : []),

    // Photo swipe
    ...(pluginOptions?.photoSwipe ? [photoSwipePlugin()] : []),

    // Table of Contents Plugin
    // Generates a table of contents for your pages
    /* ...(pluginOptions?.toc
      ? [tocPlugin(pluginOptions.toc as TocPluginOptions)]
      : []), */

    // Catalog Plugin
    // Generates a catalog for your pages
    ...(pluginOptions?.catalog
      ? [catalogPlugin(pluginOptions.catalog as CatalogPluginOptions)]
      : []),

    // ==================== Markdown Extensions ====================

    // Markdown Container Plugin
    // Adds custom container syntax to markdown
    ...(pluginOptions?.container
      ? [markdownContainerPlugin(pluginOptions.container as MarkdownContainerPluginOptions)]
      : []),

    // Markdown Extensions Plugin
    // Provides additional markdown syntax features
    ...(pluginOptions?.ext
      ? [markdownExtPlugin(pluginOptions.ext as MarkdownExtPluginOptions)]
      : []),

    // Markdown Hint Plugin
    // Adds hint/tip containers to markdown
    ...(pluginOptions?.hint
      ? [markdownHintPlugin(pluginOptions.hint as MarkdownHintPluginOptions)]
      : []),

    // Markdown Image Plugin
    // Enhanced image handling in markdown
    ...(pluginOptions?.image
      ? [markdownImagePlugin(pluginOptions.image as MarkdownImagePluginOptions)]
      : []),

    // Markdown Include Plugin
    // Allows including other markdown files
    ...(pluginOptions?.include
      ? [markdownIncludePlugin(pluginOptions.include as MarkdownIncludePluginOptions)]
      : []),

    // Markdown Math Plugin
    // Adds mathematical equation support
    ...(pluginOptions?.math
      ? [markdownMathPlugin(pluginOptions.math as MarkdownMathPluginOptions)]
      : []),

    // Markdown Stylize Plugin
    // Custom styling for markdown elements
    ...(pluginOptions?.stylize
      ? [markdownStylizePlugin(pluginOptions.stylize as MarkdownStylizePluginOptions)]
      : []),

    // Markdown Tab Plugin
    // Adds tabbed content support to markdown
    ...(pluginOptions?.tab
      ? [markdownTabPlugin(pluginOptions.tab as MarkdownTabPluginOptions)]
      : []),

    // Reading time
    // Adds reading time to page info
    ...(pluginOptions?.readingTime
      ? [readingTimePlugin(pluginOptions.readingTime as ReadingTimePluginOptions)]
      : []),

    // Revealjs
    ...(pluginOptions?.revealJs
      ? [revealJsPlugin(pluginOptions.revealJs as RevealJsPluginOptions)]
      : []),

    // ==================== Syntax Highlighting ====================

    // Prism.js Syntax Highlighting
    // Code syntax highlighting using Prism.js
    ...(pluginOptions?.highlight &&
    typeof pluginOptions.highlight === 'object' &&
    pluginOptions.highlight.type === 'prismjs'
      ? [prismjsPlugin((pluginOptions.highlight as PrismjsPluginOptions) ?? {})]
      : []),

    // Shiki Syntax Highlighting
    // Code syntax highlighting using Shiki
    ...(pluginOptions?.highlight &&
    typeof pluginOptions.highlight === 'object' &&
    pluginOptions.highlight.type === 'shiki'
      ? [shikiPlugin((pluginOptions.highlight as ShikiPluginOptions) ?? {})]
      : []),

    // ==================== Search Plugins ====================

    // DocSearch Plugin
    // Algolia DocSearch integration
    ...(pluginOptions?.search &&
    typeof pluginOptions.search === 'object' &&
    pluginOptions.search.provider === 'docsearch'
      ? [docsearchPlugin(pluginOptions.search as DocSearchPluginOptions)]
      : []),

    // MeiliSearch Plugin
    // Integration with MeiliSearch search engine
    ...(pluginOptions?.search &&
    typeof pluginOptions.search === 'object' &&
    pluginOptions.search.provider === 'meilisearch'
      ? [meilisearchPlugin(pluginOptions.search as MeiliSearchPluginOptions)]
      : []),

    // SlimSearch Plugin
    // Lightweight client-side search
    ...(pluginOptions?.search &&
    typeof pluginOptions.search === 'object' &&
    pluginOptions.search.provider === 'slimsearch'
      ? [slimsearchPlugin(pluginOptions.search as SlimSearchPluginOptions)]
      : []),

    // Built-in Search Plugin
    // VuePress's default search functionality
    ...(pluginOptions?.search &&
    typeof pluginOptions.search === 'object' &&
    pluginOptions.search.provider === 'local'
      ? [searchPlugin(pluginOptions.search as SearchPluginOptions)]
      : []),

    // ==================== SEO & Sitemap ====================

    // SEO Plugin
    ...(pluginOptions?.seo
      ? [seoPlugin(getSEOPluginOptions(options.hostname, options.author, pluginOptions.seo))]
      : []),

    // Sitemap Plugin
    ...(pluginOptions?.sitemap
      ? [sitemapPlugin(getSitemapPluginOptions(options, pluginOptions.sitemap))]
      : [])
  ]
}
