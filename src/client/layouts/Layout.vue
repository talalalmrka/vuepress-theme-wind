<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { usePageData, usePageFrontmatter } from "vuepress/client";
import { useSidebarItems } from "../composables";
const sidebarOpen = ref(false);
function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value;
}
const page = usePageData();
const frontmatter = usePageFrontmatter();
const sidebarItems = useSidebarItems();
const showSidebar = computed(() => {
  return frontmatter.value.sidebar !== false && sidebarItems.value.length > 0;
});
onMounted(() => {
  console.log("frontmatter", frontmatter.value);
  console.log("page", page.value);
});
</script>

<template>
  <div class="vp-theme-container">
    <Navbar
      @toggleSidebar="toggleSidebar"
      :sidebarOpen="sidebarOpen"
      vp-navbar
    />
    <div
      v-if="sidebarOpen"
      @click="toggleSidebar"
      class="vp-sidebar-mask"
    ></div>
    <Sidebar v-if="showSidebar" :open="sidebarOpen" />

    <main class="vp-page" vp-page>
      <div class="vp-page-title">
        <h1 class="flex-space-2 text-4xl" v-if="frontmatter.title">
          <fg-icon :icon="frontmatter.icon" class="text-primary" />
          <span>{{ frontmatter.title }}</span>
        </h1>
      </div>
      <slot name="page-top" />
      <Toc :key="page.path" />
      <Content class="vp-content" vp-content />
      <slot name="page-bottom" />
    </main>
    <Footer />
    <!-- Overlay -->
  </div>
</template>
