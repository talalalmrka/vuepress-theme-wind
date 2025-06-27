<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

import { useData, useWindowSize } from '@theme-wind/client/composables'
import NavbarLinksToggle from './NavbarLinksToggle.vue';
const props = defineProps<{
  sidebarOpen?: boolean
  transparentTop?: boolean
}>()
defineEmits<{ toggleSidebar: [] }>()

const { themeLocale } = useData()
const { navbarClass, navbarLayout } = themeLocale.value
const navbar = useTemplateRef<HTMLElement>('navbar')
const { isMobile } = useWindowSize()
const linksOpen = ref(false)
const toggleLinks = (): void => {
  linksOpen.value = !linksOpen.value
}
const transparentNavbar = (): void => {
  if (props.transparentTop && navbar.value) {
    if (window.scrollY < navbar.value.offsetHeight) {
      navbar.value.classList.add('transparent')
    } else {
      navbar.value.classList.remove('transparent')
    }
  }
}
useEventListener('scroll', transparentNavbar)
onMounted(() => {
  transparentNavbar()
})
</script>
<template>
  <header class="vp-navbar" :class="[navbarClass, { 'links-open': linksOpen }]" v-bind="$attrs" ref="navbar" vp-navbar>
    <nav class="vp-navbar-start vp-navbar-nav">
      <SidebarToggle :sidebar-open="sidebarOpen" @toggle-sidebar="$emit('toggleSidebar')" />
      <template v-if="navbarLayout?.start?.length">
        <component v-for="name in navbarLayout.start" :is="name" :key="name" />
      </template>
    </nav>
    <nav class="vp-navbar-center vp-navbar-nav">
      <template v-if="navbarLayout?.center?.length">
        <component v-for="name in navbarLayout.center" :is="name" :key="name" />
      </template>
    </nav>
    <nav class="vp-navbar-end vp-navbar-nav">
      <template v-if="navbarLayout?.end?.length">
        <component v-for="name in navbarLayout.end" :is="name" :key="name" />
      </template>
      <NavbarLinksToggle v-show="isMobile" :links-open="linksOpen" @toggle-links="toggleLinks" />
    </nav>
  </header>
  <NavbarLinksMobile v-if="isMobile" v-show="linksOpen" class="vp-navbar-links-mobile" />
</template>
