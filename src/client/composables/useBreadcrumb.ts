import { computed } from 'vue'
import { useData } from './useData'
import { BreadcrumbItem } from '@theme/shared'
import { resolveAutoLink } from '@theme/client/utils/resolveAutoLink'

export const useBreadcrumb = () => {
  const { page, themeLocale } = useData()
  const breadcrumbs = themeLocale.value.breadcrumbs || {}
  // Configuration values
  const separator = computed(() => breadcrumbs.separator)
  const homeText = computed(() => breadcrumbs.homeText)
  const homeIcon = computed(() => breadcrumbs.homeIcon)

  // Generate breadcrumb items
  const items = computed<BreadcrumbItem[]>(() => {
    const breadcrumbItems: BreadcrumbItem[] = []
    if (homeText || homeIcon) {
      breadcrumbItems.push({
        text: homeText.value,
        icon: homeIcon.value,
        link: '/'
      })
    }

    // Process route path segments
    const pathSegments = page.value.path.split('/').filter(Boolean)
    let accumulatedPath = ''

    for (const segment of pathSegments) {
      accumulatedPath += `/${segment}`
      const p = !accumulatedPath.endsWith('.html') ? accumulatedPath + '/' : accumulatedPath
      const routeRecord = resolveAutoLink(p)

      breadcrumbItems.push({
        text: routeRecord.text,
        link: routeRecord.link,
        icon: routeRecord.icon,
        currentPage: accumulatedPath === page.value.path
      })
    }

    return breadcrumbItems
  })
  return {
    separator,
    homeText,
    homeIcon,
    items
  }
}
