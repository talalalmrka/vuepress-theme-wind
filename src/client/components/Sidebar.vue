<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebarItems } from '../composables'
defineProps<{
    open: boolean
}>()
const route = useRoute()
const sidebarItems = useSidebarItems()

const isActive = (link: string) => {
  return route.path === link
}
</script>

<template>
  <aside class="vp-sidebar" :class="{ 'open': open }" vp-sidebar>
    <sidebar-item v-for="item in sidebarItems" :key="item.text" :item="item" />
  </aside>
</template>