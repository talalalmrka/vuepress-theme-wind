<script setup lang="ts">
import { computed } from 'vue'
import { usePageFrontmatter, withBase } from 'vuepress/client'
import { useData } from '@theme/client/composables'
import { useDark } from '@vueuse/core'
const data = useData()
console.log(data)

import type { HomePageFrontmatter, HighlightConfig } from '../../shared'
//const frontmatter = usePageFrontmatter<HomePageFrontmatter>();

const frontmatter = usePageFrontmatter()
const highlights = computed(() => frontmatter.value.highlights ?? [])
const isEven = (n: number): boolean => {
  return n % 2 === 0
}
const bgClass = (n: number): string => {
  return isEven(n) ? 'bg-gray-50 dark:bg-gray-800' : ''
}
</script>

<template>
  <section v-if="highlights.length > 0" id="highlights-container">
    <HighlightItem
      v-for="(highlight, index) in highlights"
      :key="`highlight-${index}`"
      :config="highlight"
      :class="bgClass(index)"
    />
  </section>
</template>
