<script setup lang="ts">
import { useContributors, useLastUpdated } from '@vuepress/plugin-git/client'
import { AutoLink } from 'vuepress/client'
import { useData } from '@theme-wind/client/composables'
import { useEditLink } from '@theme-wind/client/composables/useEditLink'
import FgAutoLink from './FgAutoLink.vue'
const { frontmatter, themeLocale } = useData()
const { changelog } = themeLocale.value
const editLink = useEditLink()
const lastUpdated = useLastUpdated(
  () => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true,
)
const lastUpdatedText = themeLocale.value.lastUpdatedText ?? lastUpdated.locale
const contributors = useContributors(
  () =>
    frontmatter.value.contributors ?? themeLocale.value.contributors ?? true,
)
</script>

<template>
  <div class="vp-page-meta">
    <FgAutoLink v-if="editLink" :config="editLink" class="vp-meta-item link" />
    <span v-if="lastUpdated" class="vp-meta-item last-updated">
      <fg-icon :icon="themeLocale.lastUpdatedIcon" />
      <span class="meta-item-label" v-if="lastUpdatedText" v-html="lastUpdatedText" />
      <time class="meta-item-info" :datetime="lastUpdated.iso" data-allow-mismatch>
        {{ lastUpdated.text }}
      </time>
    </span>
    <div v-if="contributors.length" class="vp-meta-item contributors">
      <fg-icon :icon="themeLocale.contributorsIcon" />
      <span class="meta-item-label" v-if="themeLocale.contributorsText" v-html="themeLocale.contributorsText" />
      <span class="meta-item-info">
        <template v-for="(contributor, index) in contributors" :key="index">
          <span class="contributor" :title="`email: ${contributor.email}`">
            {{ contributor.name }}
          </span>
          <template v-if="index !== contributors.length - 1">, </template>
        </template>
      </span>
    </div>
  </div>
</template>