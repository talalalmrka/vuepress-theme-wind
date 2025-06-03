<script setup lang="ts">
import { useData, useHasSidebar, useSidebarItems } from '@theme/client/composables'
import type { Slot } from '@vuepress/helper/client'
import { computed, ref } from 'vue'
import { onContentUpdated } from 'vuepress/client'

defineSlots<{
  'navbar'?: Slot
  'navbar-before'?: Slot
  'navbar-after'?: Slot
  'sidebar'?: Slot
  'sidebar-top'?: Slot
  'sidebar-bottom'?: Slot
  'page'?: Slot
  'page-top'?: Slot
  'page-bottom'?: Slot
  'page-content-top'?: Slot
  'page-content-bottom'?: Slot
}>()

const { frontmatter, page, themeLocale } = useData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar ?? themeLocale.value.navbar ?? true,
)

// sidebar
const sidebarOpen = ref(false)
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
const sidebarItems = useSidebarItems()
const hasSidebar = useHasSidebar()
// external-link-icon
const enableExternalLinkIcon = computed(
  () =>
    frontmatter.value.externalLinkIcon ??
    themeLocale.value.externalLinkIcon ??
    true,
)

// classes
const containerClass = computed(() => [
  {
    //'no-navbar': !shouldShowNavbar.value,
    //'no-sidebar': !sidebarItems.value.length,
    'has-sidebar': hasSidebar,
    //'sidebar-open': isSidebarOpen.value,
    //'external-link-icon': enableExternalLinkIcon.value,
  },
  frontmatter.value.pageClass,
])

// close sidebar when content changes
/* onContentUpdated(() => {
  sidebarOpen.value = false;
}) */
</script>

<template>
  <div class="vp-theme-container" :class="containerClass" vp-container>
    <slot name="navbar">
      <Navbar @toggleSidebar="toggleSidebar" :sidebarOpen="sidebarOpen" :transparent-top="frontmatter.home"
        :key="`navbar-${page.path}`" />
    </slot>

    <div v-if="!frontmatter.home && hasSidebar" v-show="sidebarOpen" class="vp-sidebar-overlay"
      @click="toggleSidebar" />

    <slot name="sidebar">
      <Sidebar v-if="!frontmatter.home && hasSidebar" :open="sidebarOpen" :key="`sidebar-${page.path}`"
        @toggle-sidebar="toggleSidebar" />
    </slot>

    <slot name="page">
      <SlideYTransition>
        <FgHome v-if="frontmatter.home" />
        <FgPage v-else :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #content-top>
            <slot name="page-content-top" />
          </template>
          <template #content-bottom>
            <slot name="page-content-bottom" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </FgPage>
      </SlideYTransition>
    </slot>
  </div>
</template>