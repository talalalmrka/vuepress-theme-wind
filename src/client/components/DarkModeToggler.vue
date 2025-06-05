<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()" type="button" class="btn btn-primary" aria-label="Toggle dark mode">
    <fg-icon icon="bi-moon-stars-fill" class="dark:hidden" />
    <fg-icon icon="bi-sun-fill" class="hidden dark:block" />
    <span>Toggle</span>
  </button>
</template>
