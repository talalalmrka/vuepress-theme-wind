<script setup lang="ts">
import { useThemeOptions } from '../composables'
const themeOptions = useThemeOptions()
</script>

<template>
    <div v-if="themeOptions.navbar?.length" class="vp-navbar-nav vp-navbar-collapse expand-md">
        <navbar-item v-for="item in themeOptions.navbar" :key="item.text" :item="item" />
    </div>
</template>