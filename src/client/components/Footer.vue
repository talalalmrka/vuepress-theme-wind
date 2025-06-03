<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '../composables'
const { themeLocale, page } = useData()
const { frontmatter } = useData<ThemeHomePageFrontmatter>();
const footerContent = computed(() => {
  if (frontmatter.value.footer !== false || themeLocale.value.footer !== false) {
    return frontmatter.value.footer || themeLocale.value.footer || false
  }
  return false
})
</script>

<template>
  <footer v-if="footerContent" class="vp-footer" v-bind="$attrs">
    <div class="container mx-auto px-4 py-3">
      <div class="text-center" v-html="footerContent" />
    </div>
  </footer>
</template>
