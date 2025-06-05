<script setup lang="ts">
import type { Slot } from '@vuepress/helper/client'
import { useData, useSidebarItems, useHasSidebar } from '../composables'
defineProps<{
  sidebarOpen: boolean
}>()
defineEmits<{ toggleSidebar: [] }>()
const { themeLocale } = useData()
const { sidebarClass, sidebarOverlayClass } = themeLocale.value
const sidebarItems = useSidebarItems()
const hasSidebar = useHasSidebar()
defineSlots<{
  top?: Slot
  bottom?: Slot
}>()
</script>

<template>
  <div v-if="hasSidebar" v-show="sidebarOpen" @click="$emit('toggleSidebar')" class="vp-sidebar-overlay"
    :class="sidebarOverlayClass">
  </div>
  <aside v-if="hasSidebar" class="vp-sidebar" vp-sidebar :class="[sidebarClass, { 'open': sidebarOpen }]">
    <slot name="top" />
    <sidebar-link v-for="item in sidebarItems" :key="item.text" :item="item" />
    <slot name="bottom" />
  </aside>
</template>
