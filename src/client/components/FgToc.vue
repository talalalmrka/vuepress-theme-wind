<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vuepress/client'
import { useToc } from '@theme/client/composables'
import { useTocItems } from '@theme/client/composables/useTocItems'
const route = useRoute()
const { enabled, title, marker, print, offset } = useToc()
const items = useTocItems()
const markerEl = ref<HTMLElement | null>(null)
const tocOpen = ref(false)
const toggleToc = () => {
  tocOpen.value = !tocOpen.value
}
function scrollTo(id: string): void {
  toggleToc()
  const target = document.getElementById(id)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
const updateMarker = (): void => {
  const hash = route.hash ?? ''
  const slug = hash.slice(1)
  const activeElement = document.querySelector<HTMLElement>(`[data-slug="${slug}"]`)
  if (markerEl.value) {
    if (activeElement) {
      markerEl.value.classList.remove('hidden')
      markerEl.value.style.top = `${activeElement.offsetTop}px`
    } else {
      markerEl.value.classList.add('hidden')
      markerEl.value.style.top = '0px'
    }
  }
}

function scrollToActiveItem(slug: string): void {
  const activeElement = document.querySelector(`[data-slug="${slug}"]`)
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
  <div v-if="enabled" class="vp-toc-placeholder">
    <div
      class="sticky top-0 bg-body dark:bg-body-dark border-b flex-space-2 py-1 px-2 -mx-6 cursor-pointer lg:hidden text-sm"
      @click.prevent="toggleToc">
      <span>
        {{ title ?? 'On this page' }}
      </span>
      <fg-icon icon="bi-chevron-right" />
    </div>
    <aside id="vp-toc" class="vp-toc" :class="{ 'open': tocOpen }" vp-toc>
      <div v-if="title || print" class="vp-toc-header hidden lg:flex">
        <span v-if="title" class="vp-toc-title">
          {{ title }}
        </span>
        <button v-if="print" type="button" class="print-button" title="Print">
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
