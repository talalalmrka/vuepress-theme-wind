<script setup lang="ts">
import { useData } from '@theme/client/composables'
import PageInfo from '@theme/client/components/PageInfo.vue'
const { page } = useData()
</script>

<template>
    <div class="vp-page-header">
        <h1 class="vp-page-title" v-if="page.title">
            <fg-icon :icon="page.icon" class="vp-page-title-icon" />
            <span>{{ page.title }}</span>
        </h1>
        <PageInfo />
    </div>
</template>