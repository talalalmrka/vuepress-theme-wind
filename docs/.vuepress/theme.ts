import { windTheme } from '../../src/node/windTheme'
import { commentPlugin } from '@vuepress/plugin-comment'

import sidebar from './sidebar'
import navbar from './navbar'

export default windTheme({
  hostname: 'https://talalalmrka.github.io/vuepress-theme-wind',
  logo: '/images/logo.svg',
  logoDark: '/images/logo-dark.svg',
  favicon: '/favicon.ico',
  navbarTitle: 'Wind Theme',
  repo: 'https://github.com/talalalmrka/vuepress-theme-wind',
  docsRepo: 'https://github.com/talalalmrka/vuepress-theme-wind',
  docsDir: 'docs',
  author: {
    name: 'Talal almrka',
    url: 'https://vuepress.vuejs.org/',
    email: 'talalminfo@gmail.com'
  },
  navbar: navbar,
  sidebar: sidebar,
  /* locales: {
    '/': {
      sidebar: sidebar
    }
  }, */
  /* pluginOptions: {
    // search: false
    notice: {
      config: [
        {
          path: '/',
          title: 'Notice Title',
          content: 'Notice Content',
          actions: [
            {
              text: 'Primary Action',
              link: 'https://theme-hope.vuejs.press/',
              type: 'primary'
            },
            { text: 'Default Action' }
          ]
        }
      ]
    }
  }, */
  plugins: [
    commentPlugin({
      provider: 'Waline',
      serverURL: 'https://waline-820nf7b0z-talalalmrkas-projects.vercel.app/'
      // pageview: true,
      // lang: 'en-US',
      // path: '<%- $page.path %>'
    })
  ]
})
