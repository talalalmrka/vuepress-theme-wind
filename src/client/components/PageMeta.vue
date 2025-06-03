<script setup lang="ts">
import { useData } from '@theme/client/composables'
import { useContributors, useLastUpdated } from '@vuepress/plugin-git/client'

const { frontmatter, themeLocale } = useData()
const lastUpdated = useLastUpdated(
  () => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true,
)
</script>

<template>
  <div class="vp-page-meta">
    <div class="vp-meta-item git-info">
      <div v-if="lastUpdated" class="vp-meta-item last-updated">
        <span class="meta-item-label">{{ themeLocale.lastUpdatedText ?? lastUpdated.locale }}:
        </span>
        <time class="meta-item-info" :datetime="lastUpdated.iso" data-allow-mismatch>
          {{ lastUpdated.text }}
        </time>
      </div>
    </div>
  </div>
</template>