<script setup lang="ts">
import { ref, Ref, onMounted, nextTick, watch } from 'vue'
import { useRoute, RouteLink, useRouter } from 'vuepress/client'
import { useToc } from '@theme/client/composables'
import { useTocItems } from '@theme/client/composables/useTocItems'
const route = useRoute()
const router = useRouter()
const { enabled, title, marker, print, offset } = useToc()
const items = useTocItems()
const markerEl = ref<HTMLElement | null>(null)

function scrollTo(id: string): void {
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
    <button type="button" class="vp-toc-toggle md:hidden">
      <fg-icon icon="fg-bars" />
    </button>
    <aside id="vp-toc" class="vp-toc" vp-toc>
      <div v-if="title || print" class="vp-toc-header">
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
