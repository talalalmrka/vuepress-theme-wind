<script setup lang="ts">
import { computed } from 'vue'
import { useThemeOptions } from '../composables'
import { useSiteData, withBase } from '@vuepress/client'
const site = useSiteData()
const themeOptions = useThemeOptions()
const title = computed(() => {
  if (typeof themeOptions.navbarTitle === 'string') {
    return themeOptions.navbarTitle
  }
  return themeOptions.navbarTitle ? site.value.title : ''
})
</script>
<template>
    <RouteLink to="/" class="vp-navbar-brand">
        <img v-if="themeOptions.logo" :src="withBase(themeOptions.logo)" class="vp-navbar-logo">
        <span v-if="title" class="v-navbar-title">{{ title }}</span>
    </RouteLink>
</template>
