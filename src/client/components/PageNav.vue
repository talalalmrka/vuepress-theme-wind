<script setup lang="ts">
import { useData } from '@theme/client/composables'
import { useNavigate } from '@theme/client/composables/useNavigate'
import { useRelatedLinks } from '@theme/client/composables/useRelatedLinks'
import { useEventListener } from '@vueuse/core'
import { computed } from 'vue'

const { themeLocale } = useData()
const { navbarLabel, next, nextIcon, prev, prevIcon } = themeLocale.value;
const navigate = useNavigate()

const { prevLink, nextLink } = useRelatedLinks()


useEventListener('keydown', (event): void => {
  if (event.altKey) {
    if (event.key === 'ArrowRight') {
      if (nextLink.value) {
        navigate(nextLink.value.link)
        event.preventDefault()
      }
    } else if (event.key === 'ArrowLeft') {
      if (prevLink.value) {
        navigate(prevLink.value.link)
        event.preventDefault()
      }
    }
  }
})
</script>

<template>
  <nav v-if="prevLink || nextLink" class="vp-page-nav" :aria-label="navbarLabel">
    <AutoLink v-if="prevLink" class="prev" :config="prevLink">
      <div class="hint">
        <fg-icon icon="bi-chevron-left" class="me-1" />
        <span v-if="prev" v-html="prev" />
      </div>
      <div class="link">
        <span class="external-link">
          <fg-icon :icon="prevLink.icon" />
          <span>{{ prevLink.text }}</span>
        </span>
      </div>
    </AutoLink>
    <AutoLink v-if="nextLink" class="next" :config="nextLink">
      <div class="hint">
        <span v-if="next" v-html="next" />
        <fg-icon icon="bi-chevron-right" class="ms-1" />
      </div>
      <div class="link">
        <span class="external-link">
          <fg-icon :icon="nextLink.icon" />
          <span>{{ nextLink.text }}</span>
        </span>
      </div>
    </AutoLink>
  </nav>
</template>
