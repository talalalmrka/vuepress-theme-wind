<script setup lang="ts">
import { onMounted } from 'vue'
import { useData } from '@theme-wind/client/composables'
import { useNavbarSelectLanguage } from '@theme-wind/client/composables/useNavbarSelectLanguage'
import { useSidebarItems } from '@theme-wind/client/composables'
import { sidebarData } from '@temp/theme-wind/sidebar.js'

interface DataItem {
  title: string
  icon?: string
  content: any
}
const { routeLocale, site, siteLocale, theme, themeLocale } = useData()
const langs = useNavbarSelectLanguage()
const sidebarItems = useSidebarItems()
const items: DataItem[] = [
  {
    title: 'langs',
    content: langs,
  },
  {
    title: 'sidebarData',
    content: sidebarData,
  },
  {
    title: 'sidebarItems',
    content: sidebarItems,
  },
  {
    title: 'theme',
    content: theme,
  },
  {
    title: 'themeLocale',
    content: themeLocale,
  },
  {
    title: 'site',
    content: site,
  },
  {
    title: 'siteLocale',
    content: siteLocale,
  },
  {
    title: 'routeLocale',
    content: routeLocale,
  },
]
onMounted(() => {
  //console.log('dropdown', dropdown)
})
</script>
<template>
  <div>
    <h1>Breakpoints</h1>
    <div
      class="flex items-center justify-center text-4xl font-semibold h-40 rounded-lg bg-gray-100 dark:bg-gray-700 mb-5">
      <span class="hidden mobile:block">Mobile</span>
      <span class="hidden tablet:block">Tablet</span>
      <span class="hidden laptop:block">Laptop</span>
      <span class="hidden pc:block">Pc</span>
    </div>

    <fg-accordion>
      <fg-accordion-item v-for="(item, index) in items" :key="index" :title="item.title">
        <fg-accordion-body>
          <pre class="text-sm w-full max-h-96 overflow-auto"><code>{{ item.content }}</code></pre>
        </fg-accordion-body>
      </fg-accordion-item>
    </fg-accordion>
  </div>
</template>