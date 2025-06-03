import type { Page, Theme } from 'vuepress/core'
import { fs, getDirname, path } from 'vuepress/utils'
import { ThemeOptions, ThemePageData, SiteData } from '../shared'
import { assignPlugins } from './utils'
import { addViteOptimizeDepsExclude } from '@vuepress/helper'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { resolveThemeOptions } from './utils/resolveThemeOptions'
const __dirname = import.meta.dirname || getDirname(import.meta.url)
const componentsDir = path.resolve(__dirname, '../client/components')
const pageInfoComponentsDir = `${componentsDir}/pageinfo`

export const windTheme = (options: ThemeOptions): Theme => {
  //const themeOptions = resolveThemeOptions(options)
  resolveThemeOptions(options)
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
      '@theme': path.resolve(__dirname, '../client'),
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/components'))
          .filter(file => file.endsWith('.vue'))
          .map(file => [`@theme/${file}`, path.resolve(__dirname, '../client/components', file)])
      ),
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/composables'))
          .filter(file => file.endsWith('.ts'))
          .map(file => [
            `@theme/${file.slice(0, -3)}`,
            path.resolve(__dirname, '../client/composables', file)
          ])
      ),
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/utils'))
          .filter(file => file.endsWith('.ts'))
          .map(file => [
            `@theme/${file.slice(0, -3)}`,
            path.resolve(__dirname, '../client/utils', file)
          ])
      )
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),

    extendsBundlerOptions: (bundlerOptions, app) => {
      // ensure theme alias is not optimized by Vite
      addViteOptimizeDepsExclude(bundlerOptions, app, '@theme')
    },
    async onInitialized(app) {
      ;(app.siteData as SiteData).pages = app.pages
    },
    extendsPage: (page: Page<Partial<ThemePageData>>) => {
      page.data.filePathRelative = page.filePathRelative
      page.data.title = page.frontmatter.title || page.title
      page.data.icon = page.frontmatter.icon || null
      page.routeMeta.title = page.frontmatter.title || page.title
      page.routeMeta.icon = page.frontmatter.icon || null
    },
    plugins: [
      registerComponentsPlugin({
        componentsDir,
        components: {
          ...pageInfoComponentsMap
        }
      }),
      // ...assignPlugins(themeOptions),
      ...assignPlugins(options),
      themeDataPlugin({
        // themeData: themeOptions
        themeData: options
      })
    ]
  }
}
