<script setup lang="ts">
import { useData, useHasSidebar } from '@theme/client/composables';
defineProps<{
  sidebarOpen?: boolean
}>()

defineEmits<{ toggleSidebar: [] }>()
const hasSidebar = useHasSidebar()
const { themeLocale } = useData()
const { sidebarToggleClass, sidebarLabel } = themeLocale.value
</script>

<template>
  <!-- <button v-if="hasSidebar" @click.prevent="$emit('toggleSidebar')" type="button" class="vp-sidebar-toggle"
    :class="sidebarToggleClass" aria-expanded="false" role="button" tabindex="0" v-bind="$attrs"
    :aria-label="sidebarLabel">
    <fg-icon v-show="!sidebarOpen" icon="fg-bars" class="transition-transform duration-300"
      :class="{ 'rotate-90': sidebarOpen }" />
    <fg-icon v-show="sidebarOpen" icon="fg-x" class="transition-transform duration-300"
      :class="{ 'rotate-90': sidebarOpen }" />
  </button> -->
  <button v-if="hasSidebar" @click.prevent="$emit('toggleSidebar')" type="button" id="vp-sidebar-toggle"
    class="vp-sidebar-toggle relative w-8 h-8 flex flex-col justify-between items-center group lg:hidden"
    :class="{ 'open': sidebarOpen }" :aria-expanded="sidebarOpen" role="button" tabindex="0" v-bind="$attrs"
    :aria-label="sidebarLabel">
    <div
      class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
      <div
        class="flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 origin-center overflow-hidden">
        <div
          class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-6 transform transition-all duration-300 origin-left group-[.open]:rotate-[42deg]">
        </div>
        <div
          class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-3 transform transition-all duration-300 group-[.open]:-translate-x-10">
        </div>
        <div
          class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-6 transform transition-all duration-300 origin-left group-[.open]:-rotate-[42deg]">
        </div>
      </div>
    </div>
  </button>


</template>
