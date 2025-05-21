<script setup>
import { computed, onMounted } from "vue";
import { usePageFrontmatter, withBase } from "vuepress/client";
import { useDark } from "@vueuse/core";
const frontmatter = usePageFrontmatter();
const isDark = useDark();
const bgImage = computed(() => {
  const img =
    isDark.value && frontmatter.value.bgImageDark
      ? frontmatter.value.bgImageDark
      : frontmatter.value.bgImage;
  return img ? withBase(img) : null;
});

const heroImage = computed(() => {
  const img =
    isDark.value && frontmatter.value.heroImageDark
      ? frontmatter.value.heroImageDark
      : frontmatter.value.heroImage;
  return img ? withBase(img) : null;
});
const heroClasses = computed(() => {
  return {
    ["h-screen"]: frontmatter.heroFullScreen || false,
    [`bg-[url(${bgImage.value})]`]: bgImage.value,
    "bg-cover": frontmatter.bgImageStyle?.["background-size"] === "cover",
    "bg-center": frontmatter.bgImageStyle?.["background-position"] === "center",
    "bg-no-repeat":
      frontmatter.bgImageStyle?.["background-repeat"] === "no-repeat",
    "bg-fixed": frontmatter.bgImageStyle?.["background-attachment"] === "fixed",
  };
});
// Compute hero background style (light vs dark)
const bgStyle = computed(() => {
  return {
    backgroundAttachment:
      frontmatter.bgImageStyle?.["background-attachment"] || "scroll",
    backgroundSize: frontmatter.bgImageStyle?.["background-size"] || "cover",
    backgroundRepeat:
      frontmatter.bgImageStyle?.["background-repeat"] || "no-repeat",
  };
});

// Button styling based on type
function buttonClass(type) {
  const base = "transition-transform transform hover:scale-105";
  return type === "primary"
    ? `${base} bg-blue-600 text-white hover:bg-blue-700`
    : `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`;
}

// Determine responsive grid columns
function gridCols(n) {
  if (n <= 1) return "grid-cols-1";
  if (n === 2) return "grid-cols-1 md:grid-cols-2";
  if (n === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
}
onMounted(() => {
  console.log(frontmatter.value);
});
</script>
<template>
  <Navbar
    :class="{
      'navbar-transparent-dark': isDark.value,
      'navbar-transparent-light': !isDark.value,
    }"
  />
  <main class="min-h-screen">
    <!-- Hero Section -->
    <Hero />
    <div v-if="frontmatter.features" class="features">
      <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="feature in frontmatter.features"
            :key="feature.title"
            class="feature-item"
          >
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ feature.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Highlights Sections -->
    <section class="py-16 px-4 max-w-6xl mx-auto">
      <div
        v-for="(section, idx) in frontmatter.highlights"
        :key="idx"
        class="mb-16"
      >
        <div class="flex flex-col lg:flex-row items-center">
          <!-- Section Header + Image -->
          <div class="lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 class="text-4xl font-semibold mb-4">{{ section.header }}</h2>
            <img
              v-if="section.image"
              :src="withBase(section.image)"
              alt=""
              class="w-16 h-16 mx-auto lg:mx-0"
            />
          </div>
          <!-- Cards Grid -->
          <div
            :class="[
              'lg:w-2/3 grid gap-8',
              gridCols(section.highlights.length),
            ]"
            :style="section.bgImageStyle || {}"
          >
            <div
              v-for="item in section.highlights"
              :key="item.title"
              class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              <h3 class="text-2xl font-medium mb-2" v-html="item.title" />
              <p
                class="text-gray-600 dark:text-gray-300"
                v-html="item.details"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      v-if="frontmatter.footer || frontmatter.copyright"
      class="py-6 text-center text-sm text-gray-500"
    >
      <div v-html="frontmatter.footer || frontmatter.copyright"></div>
    </footer>
  </main>
</template>

<style scoped>
.hero-fullscreen {
  height: 100vh;
}
</style>
