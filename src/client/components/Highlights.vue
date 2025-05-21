<script setup lang="ts">
import { computed } from "vue";
import { usePageFrontmatter, withBase } from "vuepress/client";
import { useDark } from "@vueuse/core";
import type { HomePageFrontmatterr, HighlightConfig } from "../../shared";
const frontmatter = usePageFrontmatter<HomePageFrontmatterr>();
const highlights = computed(() => frontmatter.value.highlights ?? []);
</script>

<template>
  <HighlightItem
    v-for="highlight in highlights"
    :key="highlight.header"
    :config="highlight"
  />
</template>
