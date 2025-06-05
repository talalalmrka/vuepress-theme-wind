<script setup lang="ts">
import { computed } from 'vue';
import {
    useReadingTimeData,
    useReadingTimeLocale,
} from '@vuepress/plugin-reading-time/client'
import { useData } from '@theme/client/composables';
const { themeLocale } = useData()
const { readingTimeIcon, readingTimeLabel } = themeLocale.value
const readingTimeData = useReadingTimeData()
const readingTimeLocale = useReadingTimeLocale();
const { time, words } = readingTimeLocale.value
const minutes = readingTimeData.value?.minutes
const minsMeta = computed(() => `${minutes}M`)
const tooltip = computed(() => `${time} ${words}`)
</script>

<template>
    <span v-if="readingTimeData" class="vp-page-info-item vp-page-info-reading-time" :aria-label="readingTimeLabel"
        :data-tooltip="tooltip">
        <fg-icon icon="bi-hourglass-bottom" />
        <span v-text="time" />
        <meta v-if="minsMeta" property="timeRequired" :content="minsMeta">
    </span>
</template>