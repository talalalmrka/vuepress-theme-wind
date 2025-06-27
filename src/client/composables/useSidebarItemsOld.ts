import type { ComputedRef, InjectionKey } from 'vue'
import { computed, provide, inject } from 'vue'
import { isLinkRelative, isString } from '@vuepress/helper/client'
import { resolveAutoLink } from '../utils/resolveAutoLink'
import { resolvePrefix } from '../utils/resolvePrefix'
import { useData } from './useData'
import {
  SidebarItemOptions,
  ThemeHomePageFrontmatter,
  ThemePageFrontmatter
} from '@theme-wind/shared'
import { SidebarItem } from '@theme-wind/client'
export type SidebarItemsRef = ComputedRef<SidebarItem[]>

export const sidebarItemsOldSymbol: InjectionKey<SidebarItemsRef> = Symbol('sidebarItemsOld')
export const setupSidebarItemsOld = (): void => {
  const { frontmatter, routeLocale, routePath, themeLocale } = useData<
    ThemeHomePageFrontmatter | ThemePageFrontmatter
  >()
  // Get sidebar options from frontmatter > themeConfig
  const sidebarOptions = computed(() =>
    frontmatter.value.home
      ? false
      : (frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? 'structure')
  )
  const sidebarItems = computed(() => {
    const matchingConfig = Object.entries(sidebarOptions.value).find(([key]) => {
      if (key === routePath.value) return true
      if (key.endsWith(routeLocale.value) && routePath.value.startsWith(key)) return true
      return false
    })
    const currentItems = matchingConfig ? matchingConfig[1] : []
    return (currentItems ?? []).map(item => resolveSidebarItemOld(item))
  })
  provide(sidebarItemsOldSymbol, sidebarItems)
}
const resolveStructure = (prefix: string): SidebarItem[] => {
  const { routes } = useData()
  const routesArray = Object.keys(routes.value)
  const matchingRoutes = routesArray.filter(i => {
    return i !== prefix && i.startsWith(prefix)
  })
  const children = matchingRoutes.map(r => resolveSidebarItemOld(r, prefix))
  return children
}
const resolveSidebarItemOld = (item: SidebarItemOptions, prefix = ''): SidebarItem => {
  if (isString(item)) {
    return resolveAutoLink(resolvePrefix(prefix, item))
  }
  if ('children' in item) {
    const resolvedItem = {
      ...resolveAutoLink(resolvePrefix(prefix, item.prefix)),
      ...item
    }
    /* if (item.children === 'structure') {
      const ch = resolveStructure(resolvePrefix(prefix, item.prefix))
    } */
    const children =
      item.children === 'structure'
        ? resolveStructure(resolvePrefix(prefix, item.prefix))
        : item.children.map(child =>
            resolveSidebarItemOld(child, resolvePrefix(prefix, item.prefix))
          )
    return {
      ...resolvedItem,
      children: children
    }
  }
  return {
    ...item,
    link: isLinkRelative(item.link)
      ? resolveAutoLink(resolvePrefix(prefix, item.link)).link
      : item.link
  }
}
export const useSidebarItems = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsOldSymbol)
  if (!sidebarItems) throw new Error('useSidebarItems() is called without provider.')
  return sidebarItems
}
