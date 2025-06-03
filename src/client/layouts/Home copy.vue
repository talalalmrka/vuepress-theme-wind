<script setup>
import { useThemeOptions } from '../composables'
import { computed, onMounted } from 'vue'
import { usePageFrontmatter, withBase } from 'vuepress/client'
import { useDark } from '@vueuse/core'
const frontmatter = usePageFrontmatter()
const isDark = useDark()
const themeOptions = useThemeOptions()
</script>
<template>
  <div class="vp-theme-container">
    <main class="vp-page vp-home" vp-page>
      <Navbar :transparent-top="true" />
      <Hero />
      <Highlights />
      <slot name="page-top" />
      <Content v-if="$slots.default" class="vp-content" vp-content />
      <slot name="page-bottom" />
    </main>
    <Footer />
  </div>
</template>
