import { computed, Ref } from 'vue'
import { getHeaders } from '@vuepress/helper/client'
import type { HeaderItem } from '@vuepress/helper/client'
import { useData } from './useData'
import { useNavbarHeight } from './useNavbarHeight'
export interface TocData {
  enabled: boolean
  title?: string
  print: boolean
  marker: boolean
  offset: number
  delay: number
  items: Ref<HeaderItem[]>
}
export const useToc = (): TocData => {
  const { themeLocale } = useData() //offset with navbar hight
  const offset = computed(() => {
    const toc = themeLocale.value.toc || {}
    const navbarHeight = useNavbarHeight()
    return (toc.offset || 5) + navbarHeight.value
  })

  //items
  const items = computed<HeaderItem[]>(() => {
    const flat: HeaderItem[] = []
    const toc = themeLocale.value.toc || {}
    const headers = getHeaders(
      toc.headerOptions ?? {
        levels: 'deep'
      }
    )
    const flatten = (items: HeaderItem[]) => {
      items.forEach(item => {
        flat.push(item)
        if (item.children) {
          flatten(item.children)
        }
      })
    }

    flatten(headers)
    return flat
  })
  return {
    enabled: themeLocale.value.toc !== false,
    title: themeLocale.value.toc && themeLocale.value.toc?.title,
    print: themeLocale.value.toc && themeLocale.value.toc?.print,
    marker: themeLocale.value.toc && themeLocale.value.toc?.marker,
    offset: offset.value,
    delay: themeLocale.value.toc ? themeLocale.value.toc.delay : 200,
    items: items
  }
}
/* export const useTocItems = (options?: GetHeadersOptions) => {
  const headers = getHeaders({
    levels: 'deep',
    ...options
  })
  const headersRef = computed(() => {
    const flat: HeaderItem[] = []

    const flatten = (items: HeaderItem[]) => {
      items.forEach(item => {
        flat.push(item)
        if (item.children) {
          flatten(item.children)
        }
      })
    }

    flatten(headers)
    return flat
  })
  return headersRef.value
}

export const useTocOffset = (): number => {
  const { themeLocale } = useData()
  const navbarHeight = useNavbarHeight()
  const toc = themeLocale.value.toc || {}
  const offset = toc.offset || 5
  return navbarHeight.value + offset
}
 */
