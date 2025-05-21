<script setup lang="ts">
import { useThemeOptions } from '../composables'
const themeOptions = useThemeOptions()
</script>
<template>
    <a v-if="themeOptions.repo" :href="themeOptions.repo" target="_blank" :title="themeOptions.repoLabel ?? themeOptions.repo" class="vp-navbar-link vp-repo-link">
        <fg-icon icon="bi-github" class="repo-icon" />
        <span v-if="themeOptions.repoLabel">{{ themeOptions.repoLabel }}</span>
    </a>
</template>
