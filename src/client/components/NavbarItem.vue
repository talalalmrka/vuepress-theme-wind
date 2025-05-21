<script setup lang="ts">
import { ref } from "vue";
import type { LinkOptions } from "../../shared";
defineProps<{
  item: LinkOptions;
}>();
const open = ref(false);
</script>
<template>
  <auto-link
    v-if="!item.children"
    :key="item.text"
    :config="item"
    class="vp-navbar-link"
    :title="item.text"
  >
    <fg-icon :icon="item.icon" />
    <span>{{ item.text }}</span>
  </auto-link>
  <div
    v-if="item.children"
    class="vp-dropdown"
    @touchstart="open = true"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      @click="open = !open"
      class="vp-navbar-link vp-dropdown-toggle"
    >
      <span class="flex-space-2">
        <fg-icon :icon="item.icon" />
        <span>{{ item.text }}</span>
      </span>
      <fg-icon
        icon="bi-chevron-down"
        class="vp-dropdown-icon"
        :class="{ 'rotate-180': open }"
      />
    </button>
    <div class="vp-dropdown-menu">
      <auto-link
        v-for="child in item.children"
        :key="child.text"
        class="vp-dropdown-link"
        :config="child"
      >
        <fg-icon :icon="child.icon" />
        <span>{{ child.text }}</span>
      </auto-link>
    </div>
  </div>
</template>
