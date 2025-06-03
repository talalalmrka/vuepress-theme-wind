import { computed, ComputedRef } from 'vue'
import { isLinkRelative, isString } from '@vuepress/helper/client'
import { resolveAutoLink } from '../utils/resolveAutoLink'
import { resolvePrefix } from '../utils/resolvePrefix'
import { useRoute } from 'vuepress/client'
import { useData } from './useData'
import { SidebarItemOptions } from '@theme/shared'
import { SidebarItem } from '../typings'
const resolveSidebarItem = (item: SidebarItemOptions, prefix = ''): SidebarItem => {
  if (isString(item)) {
    return resolveAutoLink(resolvePrefix(prefix, item))
  }
  if ('children' in item) {
    const resolvedItem = {
      ...resolveAutoLink(resolvePrefix(prefix, item.prefix)),
      ...item
    }
    return {
      ...resolvedItem,
      // children: [],
      children: item.children.map(child =>
        resolveSidebarItem(child, resolvePrefix(prefix, item.prefix))
      )
    }
  }
  return {
    ...item,
    link: isLinkRelative(item.link)
      ? resolveAutoLink(resolvePrefix(prefix, item.link)).link
      : item.link
  }
}
export const useSidebarItems = (): ComputedRef<SidebarItem[]> => {
  //export const useSidebarItems = (): SidebarItem[] => {
  const route = useRoute()
  const { themeLocale } = useData()
  const currentItems = computed(() => {
    const sidebarConfig = themeLocale.value.sidebar || {}
    const matchingConfig = Object.entries(sidebarConfig).find(([key]) => {
      if (key === route.path) return true
      if (key.endsWith('/') && route.path.startsWith(key)) return true
      return false
    })

    return matchingConfig ? matchingConfig[1] : []
  })
  //return [];
  return computed(() => (currentItems.value || []).map(item => resolveSidebarItem(item)))
}
