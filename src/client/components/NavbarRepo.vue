<script setup lang="ts">
import { useData } from '../composables'
const { themeLocale } = useData()
</script>
<template>
  <a
    v-if="themeLocale.repo"
    :href="themeLocale.repo"
    target="_blank"
    :title="themeLocale.repoLabel ?? themeLocale.repo"
    class="vp-navbar-link vp-repo-link"
  >
    <fg-icon icon="bi-github" class="repo-icon" />
    <span v-if="themeLocale.repoLabel">{{ themeLocale.repoLabel }}</span>
  </a>
</template>
