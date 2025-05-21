<script setup lang="ts">
import { computed } from "vue";
import { usePageFrontmatter, withBase } from "vuepress/client";
import { useDark } from "@vueuse/core";
import type { HeroConfig } from "../../shared";

const frontmatter = usePageFrontmatter();
const hero = frontmatter.value.hero as HeroConfig;
const isDark = useDark();
const heroImage = computed(() => {
  const img = isDark.value && hero.imageDark ? hero.imageDark : hero.image;
  return img ? withBase(img) : null;
});
const bgImage = computed(() => {
  const img =
    isDark.value && hero.bgImageDark ? hero.bgImageDark : hero.bgImage;
  return img ? withBase(img) : null;
});
const bgStyle = computed(() => {
  return {
    backgroundImage: `url(${bgImage.value})`,
  };
});
</script>
<template>
  <section
    v-if="hero"
    class="relative px-2 md:px-4"
    :class="{
      'h-screen': hero.fullScreen || false,
      'bg-cover': hero.bgStyle?.cover || true,
      'bg-repeat': hero.bgStyle?.repeat || false,
      'bg-no-repeat': !hero.bgStyle?.repeat || false,
      'bg-center': hero.bgStyle?.center || true,
      'bg-fixed': hero.bgStyle?.fixed || true,
    }"
    :style="bgStyle"
  >
    <div
      class="absolute inset-0 flex flex-col justify-center items-center bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg backdrop-opacity-80"
    >
      <img
        v-if="heroImage"
        :src="heroImage"
        :alt="hero.alt"
        class="w-32 h-auto mb-4"
      />
      <h1
        v-if="hero.text"
        class="text-4xl md:text-6xl font-bold text-center text-gradient-primary"
      >
        {{ hero.text }}
      </h1>
      <p v-if="hero.tagline" class="mt-2 text-lg md:text-xl text-center">
        {{ hero.tagline }}
      </p>
      <div v-if="hero.actions" class="mt-6 flex flex-col md:flex-row gap-4">
        <HeroAction v-for="action in hero.actions" :config="action" />
      </div>
    </div>
  </section>
</template>
