import { useRouter } from 'vue-router'
import { resolveAutoLink } from './resolveAutoLink'
import { resolvePrefix } from './resolvePrefix'
import type {
  SidebarOptions,
  SidebarArrayOptions,
  SidebarObjectOptions,
  SidebarItemOptions
} from '@theme-wind/shared'
import { isArray, isString, isPlainObject } from '@vuepress/helper/client'
import { SidebarItem } from '@theme-wind/client/typings'

// Resolve sidebar items based on configuration
export const resolveSidebarItems = (
  sidebarConfig: SidebarOptions,
  currentPath: string
): SidebarItem[] => {
  // Handle false or empty sidebar
  if (sidebarConfig === false) return []

  // Handle 'structure' mode
  if (sidebarConfig === 'structure') {
    return generateStructureSidebar(currentPath)
  }

  // Handle array configuration
  if (isArray(sidebarConfig)) {
    return resolveArraySidebar(sidebarConfig, currentPath)
  }

  // Handle object configuration
  if (isPlainObject(sidebarConfig)) {
    return resolveObjectSidebar(sidebarConfig, currentPath)
  }

  return []
}

// Generate sidebar structure automatically
export const generateStructureSidebar = (currentPath: string): SidebarItem[] => {
  const router = useRouter()

  const pages = router
    .getRoutes()
    .filter(
      route =>
        route.path.startsWith(currentPath) &&
        !route.meta.isNotFound &&
        !route.path.endsWith('.html') &&
        route.meta.title !== false
    )
    .sort((a, b) => a.path.localeCompare(b.path))
  console.log('pages', router.getRoutes())

  return pages.map(p => resolveSidebarItem(p.path, currentPath))
}

// Resolve array-type sidebar configuration
export const resolveArraySidebar = (
  config: SidebarArrayOptions,
  currentPath: string
): SidebarItem[] => {
  return config.map(item => resolveSidebarItem(item, currentPath))
}

// Resolve object-type sidebar configuration
export const resolveObjectSidebar = (
  config: SidebarObjectOptions,
  currentPath: string
): SidebarItem[] => {
  const matchedKeys = Object.keys(config)
    .filter(key => currentPath.startsWith(key))
    .sort((a, b) => b.length - a.length) // sort by longest prefix

  if (matchedKeys.length === 0) return []

  const matchedConfig = config[matchedKeys[0]]

  if (matchedConfig === false) return []
  if (matchedConfig === 'structure') return generateStructureSidebar(currentPath)
  if (isArray(matchedConfig)) return resolveArraySidebar(matchedConfig, currentPath)

  return []
}

// Normalize sidebar items (handle string shorthands)
export const resolveSidebarItem = (item: SidebarItemOptions, currentPath = ''): SidebarItem => {
  if (isString(item)) {
    return resolveAutoLink(resolvePrefix(currentPath, item))
  }
  // Handle string shorthand
  /* if (isString(item)) {
    return {
      text: item,
      link: item,
      children: []
    }
  } */

  // Handle group items
  if ('children' in item) {
    return {
      ...resolveAutoLink(resolvePrefix(currentPath, item.prefix)),
      ...item,
      children:
        item.children === 'structure'
          ? generateStructureSidebar(item.prefix || currentPath)
          : (item.children as SidebarItemOptions[]).map(child =>
              resolveSidebarItem(child, currentPath)
            )
    }
  }

  return item
}
