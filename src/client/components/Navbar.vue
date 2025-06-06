<script setup lang="ts">
import { resolveComponent, useTemplateRef, onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { hasGlobalComponent } from '@vuepress/helper/client'

import { useData } from '@theme/client/composables'
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
    <nav class="vp-navbar-start nav">
      <SidebarToggle :sidebar-open="sidebarOpen" @toggle-sidebar="$emit('toggleSidebar')" />
      <template v-if="navbarLayout?.start?.length">
        <component v-for="name in navbarLayout.start" :is="name" :key="name" />
      </template>
    </nav>
    <nav class="vp-navbar-center nav">
      <template v-if="navbarLayout?.center?.length">
        <component v-for="name in navbarLayout.center" :is="name" :key="name" />
      </template>
    </nav>
    <nav class="vp-navbar-end nav">
      <template v-if="navbarLayout?.end?.length">
        <component v-for="name in navbarLayout.end" :is="name" :key="name" />
      </template>
    </nav>
  </header>
</template>
