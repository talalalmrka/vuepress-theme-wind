import { prismjsPlugin, PrismjsPluginOptions } from "@vuepress/plugin-prismjs";
import { ThemeOptions } from "./options";
import { shikiPlugin, ShikiPluginOptions } from "@vuepress/plugin-shiki";
import {
  copyCodePlugin,
  CopyCodePluginOptions,
} from "@vuepress/plugin-copy-code";
import {
  markdownTabPlugin,
  MarkdownTabPluginOptions,
} from "@vuepress/plugin-markdown-tab";
import {
  backToTopPlugin,
  BackToTopPluginOptions,
} from "@vuepress/plugin-back-to-top";
import { iconPlugin, IconPluginOptions } from "@vuepress/plugin-icon";
import { noticePlugin, NoticePluginOptions } from "@vuepress/plugin-notice";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import {
  appendDatePlugin,
  AppendDatePluginOptions,
} from "@vuepress/plugin-append-date";
import {
  markdownContainerPlugin,
  MarkdownContainerPluginOptions,
} from "@vuepress/plugin-markdown-container";
import {
  markdownExtPlugin,
  MarkdownExtPluginOptions,
} from "@vuepress/plugin-markdown-ext";
import {
  markdownImagePlugin,
  MarkdownImagePluginOptions,
} from "@vuepress/plugin-markdown-image";
import {
  markdownIncludePlugin,
  MarkdownIncludePluginOptions,
} from "@vuepress/plugin-markdown-include";
import {
  linksCheckPlugin,
  LinksCheckPluginOptions,
} from "@vuepress/plugin-links-check";
import {
  markdownHintPlugin,
  MarkdownHintPluginOptions,
} from "@vuepress/plugin-markdown-hint";
import {
  markdownMathPlugin,
  MarkdownMathPluginOptions,
} from "@vuepress/plugin-markdown-math";
import {
  markdownStylizePlugin,
  MarkdownStylizePluginOptions,
} from "@vuepress/plugin-markdown-stylize";
import {
  docsearchPlugin,
  DocSearchPluginOptions,
} from "@vuepress/plugin-docsearch";
import {
  meilisearchPlugin,
  MeiliSearchPluginOptions,
} from "@vuepress/plugin-meilisearch";
import { searchPlugin, SearchPluginOptions } from "@vuepress/plugin-search";
import {
  slimsearchPlugin,
  SlimSearchPluginOptions,
} from "@vuepress/plugin-slimsearch";
import { tocPlugin, TocPluginOptions } from "@vuepress/plugin-toc";
import {
  activeHeaderLinksPlugin,
  ActiveHeaderLinksPluginOptions,
} from "@vuepress/plugin-active-header-links";
import { gitPlugin, GitPluginOptions } from "@vuepress/plugin-git";
import { catalogPlugin, CatalogPluginOptions } from "@vuepress/plugin-catalog";
import {
  mediumZoomPlugin,
  MediumZoomPluginOptions,
} from "@vuepress/plugin-medium-zoom";
export const assignPlugins = (options: ThemeOptions) => {
  return [
    ...(options.plugins ?? []),

    // ==================== Features ====================

    // Active Header Links Plugin
    // Automatically updates the active state of navigation links based on current scroll position
    ...(options.pluginOptions?.activeHeaderLinks
      ? [
          activeHeaderLinksPlugin(
            (options.pluginOptions
              .activeHeaderLinks as ActiveHeaderLinksPluginOptions) ?? {}
          ),
        ]
      : []),

    // Append Date Plugin
    // Automatically appends creation and update dates to pages
    ...(options.pluginOptions?.appendDate
      ? [
          appendDatePlugin(
            (options.pluginOptions.appendDate as AppendDatePluginOptions) ?? {}
          ),
        ]
      : []),

    // Back to Top Plugin
    // Adds a button to scroll back to the top of the page
    ...(options.pluginOptions?.backToTop
      ? [
          backToTopPlugin(
            (options.pluginOptions.backToTop as BackToTopPluginOptions) ?? {}
          ),
        ]
      : []),

    // Copy Code Plugin
    // Adds a copy button to code blocks
    ...(options.pluginOptions?.copyCode
      ? [
          copyCodePlugin(
            (options.pluginOptions.copyCode as CopyCodePluginOptions) ?? {}
          ),
        ]
      : []),

    // Git Plugin
    // Provides git-related information like last updated time
    ...(options.pluginOptions?.git
      ? [gitPlugin((options.pluginOptions.git as GitPluginOptions) ?? {})]
      : []),

    // Icon Plugin
    // Enables using icons from popular icon sets
    ...(options.pluginOptions?.icon
      ? [iconPlugin((options.pluginOptions.icon as IconPluginOptions) ?? {})]
      : []),

    // Links Check Plugin
    // Checks for broken links in your documentation
    ...(options.pluginOptions?.linksCheck
      ? [
          linksCheckPlugin(
            (options.pluginOptions.linksCheck as LinksCheckPluginOptions) ?? {}
          ),
        ]
      : []),

    // Medium Zoom Plugin
    // Adds a zoom effect to images
    ...(options.pluginOptions?.mediumZoom
      ? [
          mediumZoomPlugin(
            (options.pluginOptions.mediumZoom as MediumZoomPluginOptions) ?? {}
          ),
        ]
      : []),

    // Notice Plugin
    // Adds notice containers for important information
    ...(options.pluginOptions?.notice
      ? [
          noticePlugin(
            (options.pluginOptions.notice as NoticePluginOptions) ?? {
              config: [],
            }
          ),
        ]
      : []),
    // NProgress Plugin
    // Shows a progress bar during page navigation
    ...(options.pluginOptions?.nprogress ? [nprogressPlugin()] : []),

    // Table of Contents Plugin
    // Generates a table of contents for your pages
    /* ...(options.pluginOptions?.toc
      ? [tocPlugin(options.pluginOptions.toc as TocPluginOptions)]
      : []), */

    // Catalog Plugin
    // Generates a catalog for your pages
    ...(options.pluginOptions?.catalog
      ? [catalogPlugin(options.pluginOptions.catalog as CatalogPluginOptions)]
      : []),

    // ==================== Markdown Extensions ====================

    // Markdown Container Plugin
    // Adds custom container syntax to markdown
    ...(options.pluginOptions?.container
      ? [
          markdownContainerPlugin(
            options.pluginOptions.container as MarkdownContainerPluginOptions
          ),
        ]
      : []),

    // Markdown Extensions Plugin
    // Provides additional markdown syntax features
    ...(options.pluginOptions?.ext
      ? [
          markdownExtPlugin(
            options.pluginOptions.ext as MarkdownExtPluginOptions
          ),
        ]
      : []),

    // Markdown Hint Plugin
    // Adds hint/tip containers to markdown
    ...(options.pluginOptions?.hint
      ? [
          markdownHintPlugin(
            options.pluginOptions.hint as MarkdownHintPluginOptions
          ),
        ]
      : []),

    // Markdown Image Plugin
    // Enhanced image handling in markdown
    ...(options.pluginOptions?.image
      ? [
          markdownImagePlugin(
            options.pluginOptions.image as MarkdownImagePluginOptions
          ),
        ]
      : []),

    // Markdown Include Plugin
    // Allows including other markdown files
    ...(options.pluginOptions?.include
      ? [
          markdownIncludePlugin(
            options.pluginOptions.include as MarkdownIncludePluginOptions
          ),
        ]
      : []),

    // Markdown Math Plugin
    // Adds mathematical equation support
    ...(options.pluginOptions?.math
      ? [
          markdownMathPlugin(
            options.pluginOptions.math as MarkdownMathPluginOptions
          ),
        ]
      : []),

    // Markdown Stylize Plugin
    // Custom styling for markdown elements
    ...(options.pluginOptions?.stylize
      ? [
          markdownStylizePlugin(
            options.pluginOptions.stylize as MarkdownStylizePluginOptions
          ),
        ]
      : []),

    // Markdown Tab Plugin
    // Adds tabbed content support to markdown
    ...(options.pluginOptions?.tab
      ? [
          markdownTabPlugin(
            options.pluginOptions.tab as MarkdownTabPluginOptions
          ),
        ]
      : []),

    // ==================== Syntax Highlighting ====================

    // Prism.js Syntax Highlighting
    // Code syntax highlighting using Prism.js
    ...(options.pluginOptions?.highlight &&
    typeof options.pluginOptions.highlight === "object" &&
    options.pluginOptions.highlight.type === "prismjs"
      ? [
          prismjsPlugin(
            (options.pluginOptions.highlight as PrismjsPluginOptions) ?? {}
          ),
        ]
      : []),

    // Shiki Syntax Highlighting
    // Code syntax highlighting using Shiki
    ...(options.pluginOptions?.highlight &&
    typeof options.pluginOptions.highlight === "object" &&
    options.pluginOptions.highlight.type === "shiki"
      ? [
          shikiPlugin(
            (options.pluginOptions.highlight as ShikiPluginOptions) ?? {}
          ),
        ]
      : []),

    // ==================== Search Plugins ====================

    // DocSearch Plugin
    // Algolia DocSearch integration
    ...(options.pluginOptions?.search &&
    typeof options.pluginOptions.search === "object" &&
    options.pluginOptions.search.provider === "docsearch"
      ? [
          docsearchPlugin(
            options.pluginOptions.search as DocSearchPluginOptions
          ),
        ]
      : []),

    // MeiliSearch Plugin
    // Integration with MeiliSearch search engine
    ...(options.pluginOptions?.search &&
    typeof options.pluginOptions.search === "object" &&
    options.pluginOptions.search.provider === "meilisearch"
      ? [
          meilisearchPlugin(
            options.pluginOptions.search as MeiliSearchPluginOptions
          ),
        ]
      : []),

    // SlimSearch Plugin
    // Lightweight client-side search
    ...(options.pluginOptions?.search &&
    typeof options.pluginOptions.search === "object" &&
    options.pluginOptions.search.provider === "slimsearch"
      ? [
          slimsearchPlugin(
            options.pluginOptions.search as SlimSearchPluginOptions
          ),
        ]
      : []),

    // Built-in Search Plugin
    // VuePress's default search functionality
    ...(options.pluginOptions?.search &&
    typeof options.pluginOptions.search === "object" &&
    options.pluginOptions.search.provider === "local"
      ? [searchPlugin(options.pluginOptions.search as SearchPluginOptions)]
      : []),
  ];
};
