<script setup lang="ts">
import { computed } from 'vue'
import { useRouteLocale } from 'vuepress/client'
import Layout from './Layout.vue'

const routeLocale = useRouteLocale()
const homeLink = computed(() => routeLocale.value)
</script>

<template>
  <Layout>
    <template #page-bottom>
      <div class="max-w-2xl mx-auto text-center py-16">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <p class="text-xl mb-8">Page Not Found</p>
        <p class="mb-8 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <RouterLink :to="homeLink" class="btn btn-primary"> Return to Home </RouterLink>
      </div>
    </template>
  </Layout>
</template>
