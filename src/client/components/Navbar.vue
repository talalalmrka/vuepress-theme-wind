<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useThemeOptions } from "../composables";
defineProps<{
  sidebarOpen?: boolean;
  transparentTop?: boolean;
}>();
defineEmits<{ toggleSidebar: [] }>();
const themeOptions = useThemeOptions();
const transparent = ref(false);
const navbarHeight = computed(() => {
  const nav = document.querySelector(".vp-navbar") as HTMLElement | null;
  return nav ? nav.offsetHeight : 0;
});
function toggleTransparentTop(scrollY: number) {
  if (scrollY > navbarHeight.value) {
    transparent.value = false;
  } else {
    transparent.value = true;
  }
}
onMounted(() => {
  window.addEventListener("scroll", () => {
    toggleTransparentTop(window.scrollY);
  });
  toggleTransparentTop(window.scrollY);
});
</script>

<template>
  <header
    class="vp-navbar"
    v-bind="$attrs"
    :class="{ transparent: transparent && transparentTop }"
    vp-navbar
  >
    <sidebar-toggle
      @click="$emit('toggleSidebar')"
      :sidebarOpen="sidebarOpen"
    />
    <navbar-brand />

    <navbar-links />

    <div class="nav">
      <div v-if="themeOptions.pluginOptions?.search" class="vp-navbar-link">
        <SearchBox />
      </div>
      <navbar-repo />
      <dark-mode-toggle />
    </div>
  </header>
</template>
