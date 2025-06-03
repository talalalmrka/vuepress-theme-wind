<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from '@vuepress/client'
import { useDark } from '@vueuse/core'
import { isString } from 'vuepress/shared'
import { useData } from '@theme/client/composables'
const isDark = useDark()
const { themeLocale, siteLocale } = useData()
const { navbarBrandClass, logoClass, logoAlt } = themeLocale.value;
const logo = computed(() => {
  const img = isDark.value && themeLocale.value.logoDark ? themeLocale.value.logoDark : themeLocale.value.logo
  return isString(img) ? withBase(img) : null
})
const title = computed(() => themeLocale.value.navbarTitle !== false ? (isString(themeLocale.value.navbarTitle) ? themeLocale.value.navbarTitle : siteLocale.value.title) : null)
</script>
<template>
  <RouteLink to="/" class="vp-navbar-brand" :class="navbarBrandClass">
    <img v-if="logo" :src="logo" class="vp-navbar-logo" :class="logoClass" :alt="logoAlt" />
    <span v-if="title" class="v-navbar-title">{{ title }}</span>
  </RouteLink>
</template>
