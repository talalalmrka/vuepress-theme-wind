<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useDark } from "@vueuse/core";
import { useData } from "../composables/useData";
import type { ThemeHomePageFrontmatter } from "../../shared/page";
const { frontmatter, siteLocale } = useData<ThemeHomePageFrontmatter>();
const isDark = useDark();
onMounted(() => {
  console.log("frontmatter", frontmatter);
});
</script>
<template>
  <div class="vp-theme-container">
    <pre>{{ frontmatter }}</pre>
  </div>
</template>
