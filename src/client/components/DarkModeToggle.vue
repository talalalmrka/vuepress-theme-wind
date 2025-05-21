<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
// Use data-theme attribute instead of class
const isDark = useDark({
  selector: 'html',          // target the <html> element
  attribute: 'data-theme',   // use data-theme attribute
  valueDark: 'dark',         // set attribute to 'dark'
  valueLight: 'light'        // set attribute to 'light'
})
const toggleDark = useToggle(isDark)
function toggle() {
    const mode = window.document.documentElement.dataset.theme || 'light';
    const newMode = mode === 'dark' ? 'light' : 'dark';
    localStorage.setItem('vuepress-color-scheme', newMode)
    window.document.documentElement.dataset.theme = newMode;
}
</script>

<template>
    <button @click="toggleDark()" type="button" class="vp-navbar-link vp-dark-mode-link" aria-label="Toggle dark mode">
        <fg-icon icon="bi-moon-stars-fill" class="dark:hidden" />
        <fg-icon icon="bi-sun-fill" class="hidden dark:block" />
    </button>
</template>