<script setup lang="ts">
import { computed } from 'vue'
import { useRouteLocale } from 'vuepress/client'
import { useData } from '@theme-wind/client/composables'
import Layout from './Layout.vue'
import { useScrollPromise } from '@theme-wind/client/composables/useScrollPromise';
const { routeLocale, themeLocale } = useData()
const messages = computed(() => themeLocale.value.notFoundMsg ?? ['Not Found'])
const getMsg = (): string =>
  messages.value[Math.floor(Math.random() * messages.value.length)]

const homeLink = computed(() => themeLocale.value.home ?? routeLocale.value)
const homeText = computed(() => themeLocale.value.backToHome ?? 'Back to home')
const backText = computed(() => themeLocale.value.back ?? 'Go back')
const title = computed(() => themeLocale.value.notFoundTitle ?? 'Page Not Found')
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
const goBack = (): void => {
  window.history.go(-1)
}
</script>

<template>
  <div class="vp-theme-container" vp-container>
    <Navbar />
    <SlideYTransition @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
      <div class="flex min-h-screen items-center" vp-page>
        <div class="max-w-2xl mx-auto text-center py-16">
          <h1 class="text-6xl font-bold mb-4">404</h1>
          <p class="text-xl mb-8">{{ title }}</p>
          <p class="mb-8 text-gray-600 dark:text-gray-400">
            {{ getMsg() }}
          </p>
          <div class="flex flex-col md:flex-row gap-2">
            <RouteLink :to="homeLink" class="btn btn-primary">
              <fg-icon icon="bi-house" />
              <span>{{ homeText }}</span>
            </RouteLink>
            <button type="button" @click="goBack" class="btn btn-secondary">
              <fg-icon icon="bi-arrow-left" />
              <span>{{ backText }}</span>
            </button>
          </div>
        </div>
      </div>
    </SlideYTransition>
  </div>
</template>
