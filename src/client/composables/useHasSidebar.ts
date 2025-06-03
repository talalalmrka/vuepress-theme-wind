import { useSidebarItems } from './useSidebarItems'
import { useData } from './useData'
export const useHasSidebar = (): boolean => {
  const { themeLocale } = useData()
  const sidebarItems = useSidebarItems()
  return themeLocale.value.sidebar !== false && sidebarItems.value && sidebarItems.value.length > 0
}
