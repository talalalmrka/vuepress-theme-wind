import {
  ensureEndingSlash,
  entries,
  fromEntries,
  isArray,
  isPlainObject,
  removeLeadingSlash
} from '@vuepress/helper'
import type { App } from 'vuepress/core'
import { sanitizeFileName } from 'vuepress/utils'

import { getSidebarInfo } from './getSidebarInfo'
import { getSidebarSorter } from './getSidebarSorter'
import type {
  SidebarArrayOptions,
  SidebarGroupOptions,
  SidebarInfo,
  SidebarOptions,
  SidebarSorter,
  WindThemeData
} from '@theme-wind/shared'
import { logger } from '../utils'

const removeExtension = (path: string): string =>
  path.replace(/^(README|index)\.md$/i, '').replace(/\.md$/, '')

const getGeneratePaths = (sidebarConfig: SidebarArrayOptions, prefix = ''): string[] => {
  const result: string[] = []

  if (!isArray(sidebarConfig)) {
    logger.error(
      `Expecting array, but getting invalid sidebar config${
        prefix ? ` under ${prefix}` : ''
      } with: ${JSON.stringify(sidebarConfig)}`
    )

    return result
  }

  sidebarConfig.forEach(item => {
    // It’s a sidebar group config
    if (isPlainObject(item) && 'children' in item) {
      const childPrefix = `${prefix}${item.prefix ?? ''}`

      // The children needs to be generated
      if (item.children === 'structure') result.push(childPrefix)
      else result.push(...getGeneratePaths(item.children, childPrefix))
    }
  })

  return result
}

const getSidebarItems = (infos: SidebarInfo[]): (SidebarGroupOptions | string)[] =>
  infos.map(info => {
    if (info.type === 'file') return info.path ?? removeExtension(sanitizeFileName(info.filename))

    return {
      text: info.title,
      prefix: `${sanitizeFileName(info.dirname)}/`,
      ...info.groupInfo,
      children: getSidebarItems(info.children)
    }
  })

/**
 * @private
 */
export const getSidebarData = (
  app: App,
  themeData: WindThemeData,
  sorter?: SidebarSorter
): SidebarOptions => {
  const generatePaths: string[] = []
  const sorters = getSidebarSorter(sorter)

  // Exact generate sidebar paths
  entries(themeData.locales).forEach(([localePath, { sidebar = 'structure' }]) => {
    if (isArray(sidebar)) generatePaths.push(...getGeneratePaths(sidebar))
    else if (isPlainObject(sidebar))
      entries(sidebar).forEach(([prefix, config]) => {
        if (config === 'structure') generatePaths.push(prefix)
        else if (isArray(config))
          generatePaths.push(...getGeneratePaths(config).map(item => `${prefix}${item}`))
      })
    else if (sidebar === 'structure') generatePaths.push(localePath)
  })

  const sidebarData = fromEntries(
    generatePaths.map(path => [
      path,
      getSidebarItems(
        getSidebarInfo({
          pages: app.pages,
          sorters,
          scope: removeLeadingSlash(ensureEndingSlash(path))
        })
      )
    ])
  )

  if (app.env.isDebug)
    logger.info(`Sidebar structure data: ${JSON.stringify(sidebarData, null, 2)}`)

  return sidebarData
}

/**
 * @private
 */
export const prepareSidebarData = async (
  app: App,
  themeData: WindThemeData,
  sorter?: SidebarSorter
): Promise<void> => {
  logger.load('Preparing sidebar data')
  const sidebarData = getSidebarData(app, themeData, sorter)
  const outputFilePath = 'theme-wind/sidebar.js'
  await app.writeTemp(
    outputFilePath,
    `\
export const sidebarData = ${JSON.stringify(sidebarData, null, 2)};
`
  )
  const outputPath = app.dir.temp(outputFilePath).replace(app.dir.source(), '')
  let relativeOutputPath = outputPath.replace(app.dir.source(), '')
  logger.succeed(`Sidebar data: docs${relativeOutputPath}`)
}
