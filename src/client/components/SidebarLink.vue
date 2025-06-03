<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import type { SidebarItem } from '../../shared'
const props = defineProps<{
  item: SidebarItem
}>()
const open = ref(true)
const isGroup = computed(() => {
  return 'children' in props.item
})
const isCollapsible = computed(() => {
  return isGroup.value && props.item.collapsible
})
const isExpanded = computed(() => {
  return isGroup.value && props.item.expanded === true
})
const toggleGroup = () => {
  if (isCollapsible.value) {
    open.value = !open.value
  }
}
onMounted(() => {
  if (isCollapsible.value && !isExpanded.value) {
    open.value = false
  }
})
</script>
<template>
  <div v-if="isGroup" class="vp-sidebar-group">
    <button
      v-if="isCollapsible"
      type="button"
      @click.prevent="toggleGroup"
      class="vp-sidebar-title"
    >
      <span class="flex-space-1">
        <fg-icon :icon="item.icon" />
        <span>{{ item.text }}</span>
      </span>
      <fg-icon
        v-if="isCollapsible"
        icon="bi-chevron-down"
        class="transition-transform"
        :class="{ 'rotate-180': open }"
      />
    </button>
    <span v-else class="vp-sidebar-title flex-space-1 justify-start">
      <fg-icon :icon="item.icon" />
      <span>{{ item.text }}</span>
    </span>
    <transition-expand>
      <div v-show="open" class="vp-sidebar-group-links">
        <sidebar-link v-for="child in item.children" :key="child.text" :item="child" />
      </div>
    </transition-expand>
  </div>
  <auto-link v-else :key="item.link" :config="item" class="vp-sidebar-link">
    <fg-icon :icon="item.icon" />
    <span>{{ item.text }}</span>
  </auto-link>
</template>
