import type { App, Page, Theme } from 'vuepress/core'
import { fs, getDirname, path } from 'vuepress/utils'
import { WindThemeOptions, ThemePageData } from '../shared'
import { assignPlugins } from './utils'
import { addViteOptimizeDepsExclude, addViteOptimizeDepsInclude } from '@vuepress/helper'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { isString } from 'vuepress/shared'

import { addFavicon } from './utils/addFavicon'
import { setMeta } from './utils/setMeta'
import { resolveLocaleOptions } from './utils/resolveLocaleOptions'
import { resolvePluginOptions } from './utils/resolvePluginOptions'
import { prepareSidebarData } from './sidebar'
import { preparePagesData } from './pages/preparePagesData'
import { prepareLocaleData } from './locale/prepareLocaleData'
const __dirname = import.meta.dirname || getDirname(import.meta.url)
const componentsDir = path.resolve(__dirname, '../client/components')
const pageInfoComponentsDir = `${componentsDir}/pageinfo`
export const windTheme = ({
  hostname,
  pluginOptions = {},
  plugins = [],
  ...localeOptions
}: WindThemeOptions = {}): Theme => {
  resolveLocaleOptions(localeOptions)
  resolvePluginOptions(pluginOptions)

  const pageInfoComponentsMap = Object.fromEntries(
    fs
      .readdirSync(pageInfoComponentsDir)
      .filter(file => file.endsWith('.vue'))
      .map(file => [file.replace(/\.vue$/, ''), path.resolve(pageInfoComponentsDir, file)])
  )

  return {
    name: 'vuepress-theme-wind',
    templateBuild: path.resolve(__dirname, '../../templates/build.html'),
    alias: {
      '@theme-wind': path.resolve(__dirname, '../client'),
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/components'))
          .filter(file => file.endsWith('.vue'))
          .map(file => [
            `@theme-wind/${file}`,
            path.resolve(__dirname, '../client/components', file)
          ])
      ),
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/composables'))
          .filter(file => file.endsWith('.ts'))
          .map(file => [
            `@theme-wind/${file.slice(0, -3)}`,
            path.resolve(__dirname, '../client/composables', file)
          ])
      ),
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/utils'))
          .filter(file => file.endsWith('.ts'))
          .map(file => [
            `@theme-wind/${file.slice(0, -3)}`,
            path.resolve(__dirname, '../client/utils', file)
          ])
      )
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),

    extendsBundlerOptions: (bundlerOptions, app) => {
      // ensure theme alias is not optimized by Vite
      addViteOptimizeDepsInclude(bundlerOptions, app, '@vueuse/core', true)

      addViteOptimizeDepsExclude(bundlerOptions, app, '@theme-wind-wind')
    },
    async onInitialized(app) {
      if (localeOptions.favicon) addFavicon(app, localeOptions.favicon)
      if (localeOptions.themeColor) setMeta(app, 'theme-color', localeOptions.themeColor)
      // ;(app.siteData as SiteData).pages = app.pages
    },
    async onPrepared(app) {
      await prepareSidebarData(app, localeOptions)
      await preparePagesData(app)
      await prepareLocaleData(app, localeOptions)
    },
    extendsPage: (page: Page<Partial<ThemePageData>>) => {
      page.data.filePathRelative = page.filePathRelative
      page.data.title = page.frontmatter.title || page.title
      page.data.icon = page.frontmatter.icon || null
      page.routeMeta.title = page.frontmatter.title || page.title
      const icon = isString(page.frontmatter.icon)
        ? page.frontmatter.icon.startsWith('bi-')
          ? page.frontmatter.icon
          : `bi-${page.frontmatter.icon}`
        : null
      page.routeMeta.icon = icon
      page.data.createdTime = page.data.git?.createdTime
    },
    plugins: [
      registerComponentsPlugin({
        componentsDir,
        components: {
          ...pageInfoComponentsMap
        }
      }),
      ...assignPlugins({
        hostname: hostname,
        pluginOptions: pluginOptions,
        plugins: plugins,
        ...localeOptions
      }),
      //...assignPlugins(options),
      themeDataPlugin({
        themeData: localeOptions
      })
    ]
  }
}
