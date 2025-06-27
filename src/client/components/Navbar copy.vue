<script setup lang="ts">
import { resolveComponent, useTemplateRef, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { hasGlobalComponent } from '@vuepress/helper/client'

import { useData } from '@theme-wind/client/composables'
const props = defineProps<{
  sidebarOpen?: boolean
  transparentTop?: boolean
}>()
defineEmits<{ toggleSidebar: [] }>()

const { themeLocale } = useData()
const { navbarClass, navbarLayout } = themeLocale.value

const navbar = useTemplateRef<HTMLElement>('navbar')

const SearchBox = hasGlobalComponent('SearchBox') ? resolveComponent('SearchBox') : (): null => null

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
  <header class="vp-navbar" :class="navbarClass" v-bind="$attrs" ref="navbar" vp-navbar>
    <SidebarToggle @click="$emit('toggleSidebar')" :sidebarOpen="sidebarOpen" />
    <navbar-brand />
    <NavbarLinks />
    <div class="nav">
      <div v-if="SearchBox" class="vp-navbar-link">
        <SearchBox />
      </div>
      <navbar-repo />
      <dark-mode-toggle />
    </div>
  </header>
</template>
