import { computed, ComputedRef } from 'vue'
import { isLinkRelative, isString } from '@vuepress/helper/client'
import { resolveAutoLink } from '../utils/resolveAutoLink'
import { resolvePrefix } from '../utils/resolvePrefix'
import { useData } from './useData'
import type { NavbarGroupOptions, NavbarLinkOptions } from '../../shared/navbar'
import type { NavbarItem } from '@theme-wind/client'
const resolveNavbarItem = (
  item: NavbarGroupOptions | NavbarLinkOptions,
  prefix = ''
): NavbarItem => {
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
      children: item.children.map(child =>
        resolveNavbarItem(child, resolvePrefix(prefix, item.prefix))
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
export const useNavbarConfig = (): ComputedRef<NavbarItem[]> => {
  const { themeLocale } = useData()
  return computed(() => (themeLocale.value.navbar || []).map(item => resolveNavbarItem(item)))
}
