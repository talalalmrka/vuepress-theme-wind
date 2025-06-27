<script setup lang="ts">
import { ref, computed } from 'vue'
import type { NavbarItem } from '@theme-wind/client'
const props = defineProps<{
  item: NavbarItem
}>()
const open = ref(false)
const isGroup = computed(() => {
  return 'children' in props.item
})
const toggle = (): void => {
  open.value = !open.value
}
</script>
<template>
  <div v-if="isGroup" class="vp-navbar-links-mobile-collapse">
    <button type="button" @click="open = !open" class="vp-navbar-link-mobile">
      <span class="flex-space-2 flex-1">
        <fg-icon :icon="item.icon" />
        <span>{{ item.text }}</span>
      </span>
      <fg-icon icon="bi-chevron-down" :class="{ 'rotate-180': open }" />
    </button>
    <transition-expand>
      <div v-show="open" class="">
        <NavbarLinkMobile v-for="child in item.children" :key="child.text" :item="child" />
      </div>
    </transition-expand>
  </div>
  <AutoLink v-else :key="item.text" :config="item" class="vp-navbar-link-mobile" :title="item.text">
    <fg-icon :icon="item.icon" />
    <span>{{ item.text }}</span>
  </AutoLink>
</template>
