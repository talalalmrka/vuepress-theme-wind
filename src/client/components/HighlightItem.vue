<script setup lang="ts">
import type { HighlightConfig } from '../../shared'
import { computed } from 'vue'
import { withBase } from 'vuepress/client'
import { useDark } from '@vueuse/core'
const props = defineProps<{
  config: HighlightConfig
}>()
const isDark = useDark()
const image = computed(() => {
  const img = props.config.image
  return img ? withBase(img) : null
})
const bgImage = computed(() => {
  const img =
    isDark.value && props.config.bgImageDark ? props.config.bgImageDark : props.config.bgImage
  return img ? withBase(img) : null
})
const bgStyle = computed(() => {
  return bgImage.value
    ? {
        backgroundImage: `url(${bgImage.value})`
      }
    : {}
})
</script>

<template>
  <div
    class="vp-highlight-wrapper py-14 bg-cover bg-center bg-norepeat bg-fixed"
    :style="bgStyle"
    v-bind="$attrs"
    :class="config.class"
  >
    <div class="container">
      <!-- highlights -->
      <div
        v-if="config.highlights && !config.features"
        class="flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <div class="md:w-1/3">
          <img v-if="image" :src="image" class="w-40" alt="Highlight Image" />
        </div>
        <div class="md:w-2/3">
          <h2 v-if="config.header" class="mb-6 border-b-0 text-2xl md:text-3xl font-semibold">
            {{ config.header }}
          </h2>
          <p v-if="config.description" class="">
            {{ config.description }}
          </p>
          <ul v-if="config.highlights" class="">
            <li v-for="(item, index) in config.highlights" :key="index">
              <a
                v-if="item.link"
                :href="item.link"
                class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 group"
              >
                <h3
                  v-if="item.title"
                  class="flex-space-1 mb-0 py-1 text-base md:text-lg justify-between"
                >
                  <span class="flex-space-1 grow">
                    <fg-icon :icon="item.icon" class="" />
                    <span>{{ item.title }}</span>
                  </span>
                  <fg-icon
                    icon="bi-arrow-right"
                    class="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </h3>
                <p v-if="item.details" class="m-0">
                  {{ item.details }}
                </p>
              </a>
              <div v-else>
                <h3 v-if="item.title" class="flex-space-1 mb-0 py-1 text-base md:text-lg">
                  <fg-icon :icon="item.icon" class="" />
                  <span>{{ item.title }}</span>
                </h3>
                <p
                  v-if="item.details"
                  class="m-0 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {{ item.details }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- features -->
    <div v-if="config.features" class="container">
      <img v-if="image" :src="image" class="w-48 mx-auto" alt="Highlight Image" />
      <h2 v-if="config.header" class="text-2xl md:text-3xl font-bold text-center">
        {{ config.header }}
      </h2>
      <p
        v-if="config.description"
        class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 text-center"
      >
        {{ config.description }}
      </p>
      <div v-if="config.features" class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
        <div v-for="(feature, index) in config.features" :key="index" class="col">
          <div
            class="p-3 bg-gray-200/30 dark:bg-gray-800/30 rounded-lg shadow-sm backdrop-blur-md h-full"
          >
            <h3 class="text-lg md:text-xl font-semibold">
              <a
                v-if="feature.link"
                :href="feature.link"
                class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 flex-space-1 justify-between group transition-colors"
              >
                <span class="flex-space-1 grow">
                  <fg-icon :icon="feature.icon" />
                  <span>{{ feature.title }}</span>
                </span>
                <fg-icon
                  icon="bi-arrow-right"
                  class="opacity-0 group-hover:opacity-100 transition-all"
                />
              </a>
              <span v-else>{{ feature.title }}</span>
            </h3>
            <p
              v-if="feature.details"
              class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              {{ feature.details }}
            </p>
          </div>
        </div>
      </div>
      <!-- here -->
    </div>
  </div>
</template>
