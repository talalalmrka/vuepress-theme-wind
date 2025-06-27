<script setup lang="ts">
import { useNavbarConfig } from '../composables/useNavbarConfig'
defineProps<{
  linksOpen?: boolean
}>()

defineEmits<{ toggleLinks: [] }>()
const navbarLinks = useNavbarConfig()
const hasLinks = navbarLinks.value.length;
</script>

<template>
  <button v-if="hasLinks" @click.prevent="$emit('toggleLinks')" type="button" id="vp-navbar-links-toggle"
    class="vp-navbar-links-toggle relative w-8 h-8 flex flex-col justify-between items-end p-2 group lg:hidden"
    :class="{ 'open': linksOpen, 'items-center': linksOpen }" :aria-expanded="linksOpen" role="button" tabindex="0"
    v-bind="$attrs" aria-label="Toggle links">
    <span
      class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full overflow-hidden
      h-[2px] w-full transform transition-all duration-300 origin-left group-[.open]:rotate-[42deg] group-[.open]:translate-y-[3px]"></span>
    <span
      class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-2/3 transform transition-all duration-300 group-[.open]:opacity-0">
    </span>
    <span
      class="bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-200 dark:group-hover:bg-white rounded-full h-[2px] w-full transform transition-all duration-300 origin-left group-[.open]:-rotate-[42deg]">
    </span>
  </button>
</template>
