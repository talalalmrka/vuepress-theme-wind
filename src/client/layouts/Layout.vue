<script setup lang="ts">
import { useData, useHasSidebar } from '@theme/client/composables'
import { useScrollPromise } from '@theme/client/composables/useScrollPromise';
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

// sidebar
const sidebarOpen = ref(false)
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
const hasSidebar = useHasSidebar()

// classes
const containerClass = computed(() => [
  {
    'has-sidebar': hasSidebar,
  },
  frontmatter.value.pageClass,
])
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
onContentUpdated(() => {
  sidebarOpen.value = false
})

</script>

<template>
  <div class="vp-theme-container" :class="containerClass" vp-container>
    <slot name="navbar">
      <Navbar @toggle-sidebar="toggleSidebar" :sidebarOpen="sidebarOpen" :transparent-top="frontmatter.home"
        :key="`navbar-${page.path}`" />
    </slot>
    <slot name="sidebar">
      <Sidebar :sidebar-open="sidebarOpen" @toggle-sidebar="toggleSidebar" />
    </slot>

    <slot name="page">
      <SlideYTransition @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
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