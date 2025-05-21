import { computed } from 'vue'
import { useRoute } from 'vuepress/client'
import { useThemeOptions } from './useThemeOptions'
import type { SidebarConfig } from '../../shared'

export const useSidebarItems = () => {
  const route = useRoute()
  const themeOptions = useThemeOptions()

  return computed(() => {
    const sidebarConfig = themeOptions.sidebar || {}
    
    // Find matching sidebar config for current route
    const matchingConfig = Object.entries(sidebarConfig).find(([key]) => {
      if (key === route.path) return true
      if (key.endsWith('/') && route.path.startsWith(key)) return true
      return false
    })

    return matchingConfig ? matchingConfig[1] : []
  })
}

interface Header {
  level: number
}

export const useSidebarDepth = () => {
  const route = useRoute()
  return computed(() => {
    const headers = (route.meta.headers || []) as Header[]
    return headers.length > 0 ? Math.max(...headers.map(h => h.level)) : 1
  })
} 