import { useSidebarItems } from './useSidebarItems'
import { useData } from './useData'
export const useHasSidebar = (): boolean => {
  const { themeLocale, frontmatter } = useData()
  const sidebarItems = useSidebarItems()
  return (
    !frontmatter.value.home &&
    themeLocale.value.sidebar !== false &&
    sidebarItems.value &&
    sidebarItems.value.length > 0
  )
}
