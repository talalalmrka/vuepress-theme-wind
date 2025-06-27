import type { HeaderItem } from '@vuepress/helper/client'
import { getHeaders } from '@vuepress/helper/client'
import { injectLocal, provideLocal } from '@vueuse/core'
import type { InjectionKey, Ref } from 'vue'
import { computed, ref } from 'vue'
import { onContentUpdated } from 'vuepress/client'
import { useData } from '@theme-wind/client/composables'

export type TocItemsRef = Ref<HeaderItem[]>

export const tocItemsSymbol: InjectionKey<TocItemsRef> = Symbol('tocItems')

/**
 * Inject headers
 */
export const useTocItems = (): TocItemsRef => {
  const items = injectLocal(tocItemsSymbol)

  if (!items) {
    // throw new Error('useTocItems() is called without provider.')
    console.warn('useTocItems() is called without provider.')
    return ref([])
  }
  return items
}

export const setupTocItems = (): void => {
  const { frontmatter, themeLocale } = useData()

  const tocItemsRef: TocItemsRef = ref([])
  /*const levels = computed(
    () => frontmatter.value.sidebarDepth ?? themeLocale.value.sidebarDepth ?? 2
  )*/

  const updateTocItems = (): void => {
    const flat: HeaderItem[] = []
    const flatten = (items: HeaderItem[]) => {
      items.forEach(item => {
        flat.push(item)
        if (item.children) {
          flatten(item.children)
        }
      })
    }
    const headers = getHeaders({
      levels: 'deep',
      ignore: ['.vp-badge']
    })
    flatten(headers)
    tocItemsRef.value = flat
  }

  provideLocal(tocItemsSymbol, tocItemsRef)

  onContentUpdated(reason => {
    if (reason === 'beforeUnmount') tocItemsRef.value = []
    else updateTocItems()
  })
}
