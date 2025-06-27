<script setup lang="ts">
import type { RequiredSlot, Slot } from '@vuepress/helper/client'
// import type { AutoLinkConfig } from 'vuepress/client'
import { AutoLink } from 'vuepress/client'
import { AutoLinkConfig } from '@theme-wind/shared/link'

defineProps<{
  config: AutoLinkConfig
}>()
</script>
<template>
  <AutoLink :config="config" v-bind="$attrs" :class="config.class">
    <fg-icon :icon="config.icon" />
    <span v-if="config.text" v-html="config.text" />
    <fg-icon :icon="config.endIcon" />
  </AutoLink>
</template>
