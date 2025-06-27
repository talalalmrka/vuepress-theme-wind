<script setup lang="ts">
import { useNavbarSelectLanguage } from '@theme-wind/client/composables/useNavbarSelectLanguage'
const item = useNavbarSelectLanguage()
</script>
<template>
    <NavbarLink v-if="item" :item="item" />
</template>
