<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vuepress/client'
import { useDark } from '@vueuse/core'
import { useNavbarHeight, useData } from '../composables'
import type { ThemeHomePageFrontmatter } from '../../shared/page'
import { isString } from 'vuepress/shared'

const { frontmatter, } = useData<ThemeHomePageFrontmatter>()
const isDark = useDark()

const hasHero = computed(() => {
  return frontmatter.value.heroImage
    || frontmatter.value.heroImageDark
    || frontmatter.value.bgImage
    || frontmatter.value.bgImageDark
    || frontmatter.value.actions
    || frontmatter.value.heroText
    || frontmatter.value.tagline
})

const heroImage = computed(() => {
  const img = isDark.value && frontmatter.value.imageDark ? frontmatter.value.imageDark : frontmatter.value.heroImage
  return isString(img) ? withBase(img) : null
})
const bgImage = computed(() => {
  const img = isDark.value && frontmatter.value.bgImageDark ? frontmatter.value.bgImageDark : frontmatter.value.bgImage
  return isString(img) ? withBase(img) : null
})
const bgStyle = computed(() => {
  return {
    backgroundImage: `url(${bgImage.value})`
  }
})
const hasHighlights = (): boolean => {
  const highlights = computed(() => frontmatter.value.highlights ?? [])
  return highlights.value.length > 0
}
const scrollToHighlights = (): void => {
  const target = document.getElementById('highlights-container')
  if (target) {
    const navbarHeight = useNavbarHeight()
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const scrollPosition = targetPosition - navbarHeight.value
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    })
  }
}
</script>
<template>
  <section v-if="hasHero" class="relative" :class="[frontmatter.heroClass, {
    'h-screen': frontmatter.heroFullScreen || false,
    // 'min-h-[400px]': !frontmatter.heroFullScreen || false,
    'bg-cover': frontmatter.bgStyle?.cover || true,
    'bg-repeat': frontmatter.bgStyle?.repeat || false,
    'bg-no-repeat': !frontmatter.bgStyle?.repeat || false,
    'bg-center': frontmatter.bgStyle?.center || true,
    'bg-fixed': frontmatter.bgStyle?.fixed || true
  }]" :style="bgStyle">
    <div
      class=" inset-0 flex flex-col justify-center items-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg backdrop-opacity-80 py-30"
      :class="{ 'h-full': frontmatter.heroFullScreen || false }">
      <img v-if="heroImage" :src="heroImage" :alt="frontmatter.heroAlt" class="w-32 h-auto mb-4" />
      <h1 v-if="frontmatter.heroText" class="text-4xl md:text-6xl font-bold text-center text-gradient-primary">
        {{ frontmatter.heroText }}
      </h1>
      <p v-if="frontmatter.tagline" class="mt-2 text-lg md:text-xl text-center">
        {{ frontmatter.tagline }}
      </p>
      <div v-if="frontmatter.actions" class="mt-6 flex flex-col md:flex-row gap-4">
        <HeroAction v-for="action in frontmatter.actions" :config="action" />
      </div>
    </div>
    <button v-if="hasHighlights" type="button" aria-label="Scroll to highlights" @click.prevent="scrollToHighlights"
      class="absolute start-1/2 -translate-x-1/2 top-full animate-bounce text-2xl -translate-y-full -mt-8 bg-body/30 dark:bg-body-dark/30 backdrop-blur-md saturate-150 rounded-full w-10 h-10 flex items-center justify-center">
      <fg-icon icon="bi-chevron-double-down" />
    </button>
  </section>
</template>
