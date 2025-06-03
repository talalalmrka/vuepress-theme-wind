<script setup lang="ts">
import { useNavbarConfig } from '../composables/useNavbarConfig'
const navbarLinks = useNavbarConfig()
</script>

<template>
  <nav v-if="navbarLinks.length" class="vp-navbar-nav vp-navbar-collapse expand-md">
    <NavbarLink v-for="item in navbarLinks" :key="item.text" :item="item" />
  </nav>
</template>
