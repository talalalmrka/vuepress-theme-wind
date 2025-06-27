import {
  isArray,
  isLinkRelative,
  isPlainObject,
  isString,
  keys,
  startsWith
} from '@vuepress/helper/client'

import type { SidebarItem } from '@theme-wind/client/typings/sidebar'
import type {
  SidebarArrayOptions,
  SidebarItemOptions,
  SidebarObjectOptions,
  SidebarOptions
} from '@theme-wind/shared'
import { sidebarData } from '@temp/theme-wind/sidebar.js'
import { resolvePrefix } from '@theme-wind/client/utils/resolvePrefix'
import { resolveAutoLink } from '@theme-wind/client/utils/resolveAutoLink'
import { resolveLinkInfo } from './resolveLinkInfo'
import { isLinkInternal } from './isLinkInternal'
import { resolveRoute } from 'vuepress/client'

export interface SidebarArrayItem {
  config: SidebarArrayOptions
  prefix?: string
}

/**
 * Resolve a single sidebar item (link or group), recursively
 */
/* export const resolveSidebarItem = (item: SidebarItemOptions, pathPrefix = ''): SidebarItem => {
  if (isString(item)) {
    return resolveAutoLink(resolvePrefix(pathPrefix, item))
  }
  if ('children' in item) {
    const prefix = resolvePrefix(pathPrefix, item.prefix)
    const children = item.children === 'structure' ? sidebarData[prefix] : item.children

    return {
      ...resolveAutoLink(resolvePrefix(pathPrefix, item.prefix)),
      prefix,
      children: children.map(child => resolveSidebarItem(child, prefix))
    }
  }
  return {
    ...item,
    ...resolveAutoLink(resolvePrefix(pathPrefix, item.link))
  }
} */
export const resolveSidebarItem = (item: SidebarItemOptions, pathPrefix: string): SidebarItem => {
  const config = isString(item)
    ? resolveLinkInfo(resolvePrefix(pathPrefix, item))
    : isString(item.link)
      ? {
          ...item,
          link: isLinkInternal(item.link)
            ? resolveRoute(resolvePrefix(pathPrefix, item.link)).path
            : item.link
        }
      : item

  // Resolved group item
  if ('children' in config) {
    const prefix = resolvePrefix(pathPrefix, config.prefix)

    const children = config.children === 'structure' ? sidebarData[prefix] : config.children

    return {
      ...config,
      prefix,
      children: children.map(item => resolveSidebarItem(item, prefix))
    }
  }

  return {
    ...config
  }
}

/**
 * Resolve an array of sidebar items
 */
export const resolveArraySidebarItems = ({
  config,
  prefix = ''
}: SidebarArrayItem): SidebarItem[] => config.map(item => resolveSidebarItem(item, prefix))

export interface ResolveMultiSidebarOptions {
  config: SidebarObjectOptions
  routePath: string
}

/**
 * Handle object-mode sidebar (multiple prefix keys)
 */
export const resolveMultiSidebarItems = ({
  config,
  routePath
}: ResolveMultiSidebarOptions): SidebarItem[] => {
  const sidebarRoutes = keys(config).sort((a, b) => b.length - a.length)
  for (const base of sidebarRoutes) {
    if (startsWith(decodeURI(routePath), base)) {
      const matched = config[base]
      const arr = matched === 'structure' ? sidebarData[base] : matched || []
      return resolveArraySidebarItems({ config: arr, prefix: base })
    }
  }
  console.warn(`${decodeURI(routePath)} is missing its sidebar config.`)
  return []
}

export interface ResolveSidebarOptions {
  config: SidebarOptions
  routeLocale: string
  routePath: string
}

/**
 * Main entry: choose resolution strategy based on user config
 */
export const resolveSidebarItemsOld = ({
  config,
  routeLocale,
  routePath
}: ResolveSidebarOptions): SidebarItem[] => {
  if (config === 'structure') {
    return resolveArraySidebarItems({ config: sidebarData[routeLocale], prefix: routeLocale })
  }
  if (isArray(config)) {
    return resolveArraySidebarItems({ config })
  }
  if (isPlainObject(config)) {
    return resolveMultiSidebarItems({ config, routePath })
  }
  return []
}
