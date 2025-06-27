<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'
import { useData } from '@theme-wind/client/composables'
const { page, themeLocale, frontmatter } = useData()
const createdTime = frontmatter.value.date || page.value.git?.createdTime
const { createdTimeText, createdTimeIcon } = themeLocale.value
const createdTimeFormatted = createdTime ? new Date(createdTime).toLocaleDateString() : null
</script>
<template>
    <span v-if="createdTimeFormatted" class="vp-page-info-item vp-page-info-created-time"
        :data-tooltip="createdTimeText">
        <fg-icon :icon="createdTimeIcon" />
        <span v-html="createdTimeFormatted" />
    </span>
</template>