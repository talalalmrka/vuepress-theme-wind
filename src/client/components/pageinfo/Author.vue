<script setup lang="ts">
import { computed } from 'vue'
import { useData } from '@theme-wind/client/composables'
import type { Author, AuthorInfo } from '@theme-wind/shared'

const { themeLocale } = useData()
const rawAuthor = themeLocale.value.author as Author | undefined
const authorIcon = themeLocale.value.authorIcon;
// Normalize any Author into AuthorInfo[]
const authors = computed<AuthorInfo[]>(() => {
    if (!rawAuthor) return []

    // helper to wrap a simple name into AuthorInfo
    const wrap = (name: string): AuthorInfo => ({ name })

    // If it's an array...
    if (Array.isArray(rawAuthor)) {
        // check first element type
        if (typeof rawAuthor[0] === 'string') {
            return (rawAuthor as string[]).map(wrap)
        } else {
            return rawAuthor as AuthorInfo[]
        }
    }

    // Not an array
    if (typeof rawAuthor === 'string') {
        return [wrap(rawAuthor)]
    } else {
        return [rawAuthor as AuthorInfo]
    }
})
</script>
<template>
    <span v-if="authors.length" class="vp-page-info-item vp-page-info-reading-time">
        <fg-icon :icon="authorIcon" />
        <span v-for="(info, idx) in authors" :key="idx">
            <!-- if there's a URL, link the name; else if email, mailto; else plain -->
            <template v-if="info.url">
                <a :href="info.url" target="_blank" rel="noopener noreferrer">
                    {{ info.name }}
                </a>
            </template>
            <template v-else-if="info.email">
                <a :href="`mailto:${info.email}`">
                    {{ info.name }}
                </a>
            </template>
            <template v-else>
                {{ info.name }}
            </template>
            <!-- comma+space except after last author -->
            <span v-if="idx < authors.length - 1">, </span>
        </span>
    </span>
</template>
