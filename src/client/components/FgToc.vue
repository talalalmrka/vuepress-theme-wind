<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import { useRoute } from 'vuepress/client'
import { useToc, useData, useTocItems, useWindowSize } from '@theme-wind/client/composables'
const { isMobile } = useWindowSize()
const route = useRoute()
const { enabled, title, marker, print, offset } = useToc()
const items = useTocItems()
const hasToc = computed(() => enabled && items.value.length)
const { themeLocale } = useData()
const { printLabel } = themeLocale.value
const markerEl = ref<HTMLElement | null>(null)
const tocOpen = ref(false)
const toggleToc = () => {
  tocOpen.value = !tocOpen.value
}
const scrollTo = (id: string): void => {
  toggleToc()
  const target = document.getElementById(id)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
const slug = computed(() => (route.hash ?? '').slice(1))
const updateMarker = (): void => {
  //const hash = route.hash ?? ''
  //const slug = hash.slice(1)
  const activeElement = document.querySelector<HTMLElement>(`[data-slug="${slug.value}"]`)
  if (markerEl.value) {
    if (activeElement) {
      markerEl.value.classList.remove('hidden')
      markerEl.value.style.top = `${activeElement.offsetTop}px`
    } else {
      markerEl.value.classList.add('hidden')
      markerEl.value.style.top = '0px'
    }
  }
  if (!isMobile.value) {
    scrollToActiveItem()
  }
}

const scrollToActiveItem = (): void => {
  const activeElement = document.querySelector<HTMLElement>(`[data-slug="${slug.value}"]`)
  if (activeElement instanceof HTMLElement) {
    const tocWrapper = document.querySelector('.vp-toc-wrapper')
    if (!tocWrapper) return

    const wrapperRect = tocWrapper.getBoundingClientRect()
    const elementRect = activeElement.getBoundingClientRect()

    if (
      elementRect.top < wrapperRect.top + offset ||
      elementRect.bottom > wrapperRect.bottom - offset
    ) {
      activeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }
}
const startPrint = (): void => {
  window.print()
}
watch(
  () => route.hash,
  (newHash, oldHash) => {
    if (oldHash !== newHash) {
      updateMarker()
    }
  }
)

onMounted(async () => {
  await nextTick()
  updateMarker()
  if (route.hash) {
    scrollTo(route.hash.slice(1))
  }
})
</script>
<template>
  <div v-if="hasToc" class="vp-toc-placeholder">
    <div
      class="sticky top-0 bg-body dark:bg-body-dark border-b flex-space-2 py-1 px-2 -mx-6 cursor-pointer lg:hidden text-sm">
      <button type="button" role="button" @click.prevent="toggleToc" class="flex-space-1">
        <span>
          {{ title ?? 'On this page' }}
        </span>
        <fg-icon icon="bi-chevron-right" />
      </button>
    </div>
    <aside id="vp-toc" class="vp-toc" :class="{ 'open': tocOpen }" vp-toc>
      <div v-if="title || print" class="vp-toc-header hidden lg:flex">
        <span v-if="title" class="vp-toc-title">
          {{ title }}
        </span>
        <button v-if="print" type="button" @click.prevent="startPrint" class="print-button" :title="printLabel">
          <fg-icon icon="bi-printer" />
        </button>
      </div>

      <div class="vp-toc-wrapper">
        <ul class="vp-toc-list">
          <li v-for="item in items" :key="item.slug" class="vp-toc-item" :data-slug="item.slug">
            <a @click.prevent="scrollTo(item.slug)" :href="`#${item.slug}`" class="vp-toc-link vp-sidebar-item"
              :class="[`level-${item.level}`, { active: route.hash === item.link }]">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div v-if="marker" class="vp-toc-marker" ref="markerEl"></div>
      </div>
    </aside>
  </div>
</template>
