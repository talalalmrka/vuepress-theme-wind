<script setup lang="ts">
import { ref } from 'vue'
import type { NavbarItem } from '@theme-wind/client'
defineProps<{
  item: NavbarItem
}>()
const open = ref(false)
const show = (): void => {
  if (!open.value) {
    open.value = true
  }
}
const hide = (): void => {
  if (open.value) {
    open.value = false
  }
}
const toggle = (): void => {
  open.value = !open.value
}
</script>
<template>
  <div v-if="'children' in item" class="vp-dropdown" :class="[item.dropdownClass, { 'open': open }]" @touchstart="show"
    @mouseenter="show" @mouseleave="hide">
    <button type="button" aria-label="Toggle dropdown" class="vp-navbar-link vp-dropdown-toggle">
      <span class="flex-space-2">
        <fg-icon :icon="item.icon" />
        <span>{{ item.text }}</span>
      </span>
      <fg-icon icon="bi-chevron-down" class="vp-dropdown-icon" :class="{ 'rotate-180': open }" />
    </button>
    <div class="vp-dropdown-menu" :class="item.dropdownMenuClass">
      <auto-link v-for="child in item.children" :key="child.text" class="vp-dropdown-link" :config="child">
        <fg-icon :icon="child.icon" />
        <span>{{ child.text }}</span>
      </auto-link>
    </div>
  </div>
  <auto-link v-else :key="item.text" :config="item" class="vp-navbar-link" :title="item.text">
    <fg-icon :icon="item.icon" />
    <span>{{ item.text }}</span>
  </auto-link>
</template>
