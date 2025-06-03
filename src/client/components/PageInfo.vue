<script setup lang="ts">
import { useData } from '@theme/client/composables';
const { themeLocale } = useData()
const pageInfo = themeLocale.value.pageInfo as string[] ?? []
const author = themeLocale.value.author;
</script>

<template>
    <div v-if="pageInfo?.length" class="vp-page-info">
        <component v-for="name in pageInfo" :is="name" :key="name" />
    </div>
</template>
