import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import tailwindcss from '@tailwindcss/vite'
import theme from './theme'
import path from 'path'
export default defineUserConfig({
  base: '/vuepress-theme-wind/',
  lang: 'en-US',
  title: 'VuePress Theme Wind',
  description: 'A beautiful VuePress theme using Tailwind CSS 4 and Fadgram UI',
  theme: theme,
  bundler: viteBundler({
    viteOptions: {
      base: '/vuepress-theme-wind/',
      resolve: {
        alias: {
          '@theme': path.resolve(__dirname, '../../src'),
          '@theme/*': path.resolve(__dirname, '../../src/*')
        }
      },
      /* server: {
        cors: true,
        watch: {
          usePolling: false,
          interval: 2000,
          binaryInterval: 2000,
        },
      }, */
      plugins: [tailwindcss()]
    }
  })
})
