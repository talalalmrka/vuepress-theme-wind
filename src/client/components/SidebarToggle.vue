<script setup lang="ts">
import { useData, useHasSidebar } from '@theme-wind/client/composables';
defineProps<{
  sidebarOpen?: boolean
}>()

defineEmits<{ toggleSidebar: [] }>()
const hasSidebar = useHasSidebar()
const { themeLocale } = useData()
const { sidebarToggleClass, sidebarLabel } = themeLocale.value
</script>

<template>
  <button v-if="hasSidebar" @click.prevent="$emit('toggleSidebar')" type="button" id="vp-sidebar-toggle"
    class="vp-sidebar-toggle relative w-8 h-8 flex flex-col justify-between items-start p-2 group lg:hidden"
    :class="[sidebarToggleClass, { 'open': sidebarOpen, 'items-center': sidebarOpen }]" :aria-expanded="sidebarOpen"
    role="button" tabindex="0" v-bind="$attrs" :aria-label="sidebarLabel">
    <span
      class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full overflow-hidden
      h-[2px] w-full transform transition-all duration-300 origin-left group-[.open]:rotate-[42deg] group-[.open]:translate-y-[3px]"></span>
    <span
      class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-2/3 transform transition-all duration-300 group-[.open]:-translate-x-10 group-[.open]:hidden">
    </span>
    <span
      class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-full transform transition-all duration-300 origin-left group-[.open]:-rotate-[42deg]">
    </span>
  </button>
</template>
