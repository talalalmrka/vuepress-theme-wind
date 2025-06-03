<script setup lang="ts">
import { computed, useTemplateRef, onMounted, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useData, useSidebarItems, useNavbarHeight, useHasSidebar } from '../composables'
defineProps<{
  open: boolean
}>()
defineEmits<{ toggleSidebar: [] }>()
const route = useRoute()
const sidebar = useTemplateRef('sidebar')
const { themeLocale } = useData()
const sidebarItems = useSidebarItems()
const hasSidebar = useHasSidebar()
const navbarHeight = useNavbarHeight()
const isActive = (link: string) => {
  return route.path === link
}
onMounted(async () => {
  await nextTick()
  if (navbarHeight.value && sidebar.value) {
    sidebar.value.style.marginTop = `${navbarHeight.value}px`
  }
  //console.log("sidebarItems", sidebarItems.value);
})
</script>

<template>
  <aside v-if="hasSidebar" class="vp-sidebar" :class="{ open: open }" vp-sidebar ref="sidebar">
    <sidebar-link v-for="item in sidebarItems" :key="item.text" :item="item" />
  </aside>
  <div
    v-if="hasSidebar"
    v-show="open"
    @click="$emit('toggleSidebar')"
    class="vp-sidebar-overlay"
  ></div>
</template>
