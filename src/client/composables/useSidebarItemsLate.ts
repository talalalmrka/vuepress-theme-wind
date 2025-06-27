import { computed, ComputedRef, inject, InjectionKey, provide } from 'vue'
import { SidebarItem } from '../typings'
import { ThemeHomePageFrontmatter } from '@theme-wind/shared'
import { useData } from '@theme-wind/client/composables'

import { resolveSidebarItems } from '../utils/resolveSidebarItems'

export type SidebarItemsRef = ComputedRef<SidebarItem[]>

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> = Symbol('sidebarItemsLate')

/**
 * Create sidebar items ref and provide as global computed in setup
 */
export const setupSidebarItemsLate = (): void => {
  const { frontmatter, routeLocale, routePath, themeLocale } = useData<
    ThemeHomePageFrontmatter | ThemeHomePageFrontmatter
  >()

  // Get sidebar options from frontmatter > themeConfig
  const sidebarOptions = computed(() =>
    frontmatter.value.home
      ? false
      : (frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? 'structure')
  )

  const sidebarItems = computed(() =>
    resolveSidebarItems({
      config: sidebarOptions.value,
      routeLocale: routeLocale.value,
      routePath: routePath.value
    })
  )

  provide(sidebarItemsSymbol, sidebarItems)
}

/**
 * Inject sidebar items global computed
 */
export const useSidebarItemsLate = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsSymbol)

  if (!sidebarItems) throw new Error('useSidebarItems() is called without provider.')

  return sidebarItems
}
