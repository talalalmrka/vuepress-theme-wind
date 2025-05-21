<script setup lang="ts">
import { computed } from 'vue'
import { useRouteLocale } from 'vuepress/client'
import { useThemeOptions } from '../composables'
// import Navbar from '../components/Navbar.vue'
// import Footer from '../components/Footer.vue'

const routeLocale = useRouteLocale()
const themeOptions = useThemeOptions()
const homeLink = computed(() => routeLocale.value)
</script>

<template>
  <div class="theme-container">
    <header class="navbar">
      <Navbar />
    </header>

    <main class="not-found">
      <div class="max-w-2xl mx-auto text-center py-16">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <p class="text-xl mb-8">Page Not Found</p>
        <p class="mb-8 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <RouterLink :to="homeLink" class="btn btn-primary">
          Return to Home
        </RouterLink>
      </div>
    </main>

    <footer v-if="themeOptions.footer" class="footer">
      <Footer />
    </footer>
  </div>
</template>

<style lang="postcss">
.theme-container {
  @apply min-h-screen flex flex-col;
}

.navbar {
  @apply sticky top-0 z-50 bg-white dark:bg-gray-900;
}

.not-found {
  @apply flex-1 px-4;
}

.footer {
  @apply mt-auto py-6 bg-gray-50 dark:bg-gray-800;
}
</style> 