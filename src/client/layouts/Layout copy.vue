<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useSidebarItems, useData, useHasSidebar } from '../composables'
import { usePage } from '@vuepress/client'
const sidebarOpen = ref(false)
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}
const { page, themeLocale } = useData()

const hasSidebar = useHasSidebar()
onMounted(() => {
  console.log(page.value)
})
</script>

<template>
  <div class="vp-theme-container" vp-container>
    <Navbar @toggleSidebar="toggleSidebar" :sidebarOpen="sidebarOpen" vp-navbar />
    <div v-if="sidebarOpen" @click="toggleSidebar" class="vp-sidebar-mask"></div>
    <Sidebar :open="sidebarOpen" :key="`sidebar-${page.path}`" @toggle-sidebar="toggleSidebar" />

    <main class="vp-page" :class="{ 'has-sidebar': hasSidebar }" vp-page>
      <Breadcrumbs :key="`breadcrumbs-${page.path}`" />

      <div class="vp-page-title">
        <h1 class="flex-space-2 text-4xl" v-if="page.title">
          <fg-icon :icon="page.icon" class="text-primary" />
          <span>{{ page.title }}</span>
        </h1>
      </div>

      <slot name="page-top" />

      <FgToc :key="`toc-${page.path}`" />

      <div id="markdown-content" class="vp-content" vp-content>
        <slot name="content-top" />
        <Content id="content" />
        <slot name="content-bottom" />
      </div>

      <PageNav />

      <slot name="page-bottom" />
      <Footer />
    </main>
  </div>
</template>
