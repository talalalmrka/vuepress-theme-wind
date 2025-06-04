import { defineClientConfig, AutoLink } from '@vuepress/client'
import { defineCatalogInfoGetter } from '@vuepress/plugin-catalog/client'
import type { ClientConfig } from '@vuepress/client'
import FadgramVue from 'fadgram-vue'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'
import { sizes, colors } from './constants'
import { setupHeaders } from './composables/useHeaders'
import { setupTocItems } from '@theme/client/composables/useTocItems'
import { useActiveHeaderLinks } from '@theme/client/composables/useActiveHeaderLinks'
import './styles/index.css'

export default defineClientConfig({
  async enhance({ app }) {
    app.use(FadgramVue)
    app.config.globalProperties.$sizes = sizes
    app.config.globalProperties.$colors = colors
    app.component('AutoLink', AutoLink)
  },
  layouts: {
    Layout,
    NotFound
    // Home
  },

  setup() {
    setupHeaders()
    setupTocItems()
    defineCatalogInfoGetter((meta: { title?: string; order?: number }) => {
      if (meta.title) {
        return {
          title: meta.title,
          order: meta.order || 0
        }
      }
      return null
    })
    useActiveHeaderLinks()
  },
  rootComponents: []
} satisfies ClientConfig)
