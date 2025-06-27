---
date: 2025-06-05
title: Dark mode
icon: bi-moon-stars
# next: /form/checkbox
---

# Dark mode

## Example

<dark-mode-toggler/>

## Usage

```vue
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

// Use data-theme attribute instead of class
const isDark = useDark({
  selector: 'html', // target the <html> element
  attribute: 'data-theme', // use data-theme attribute
  valueDark: 'dark', // set attribute to 'dark'
  valueLight: 'light' // set attribute to 'light'
})
const toggleDark = useToggle(isDark)
</script>
<template>
  <fg-button @click="toggleDark()" aria-label="Toggle dark mode">
    <fg-icon v-show="!isDark" icon="bi-moon-stars-fill" class="dark:hidden" />
    <fg-icon v-show="isDark" icon="bi-sun-fill" class="hidden dark:block" />
    <span>{{ isDark ? 'Dark' : 'Light' }}</span>
  </fg-button>
</template>
```
