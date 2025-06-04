import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { windTheme } from '../../src/node/windTheme'
import { sidebar } from './sidebar'
import navbar from './navbar'
export default windTheme({
  hostname: 'https://talalalmrka.github.io/vuepress-theme-wind',
  logo: '/images/logo.svg',
  favicon: '/favicon.ico',
  navbarTitle: 'Wind Theme',
  repo: 'https://github.com/talalalmrka/vuepress-theme-wind',
  author: {
    name: 'Talal almrka',
    url: 'https://vuepress.vuejs.org/',
    email: 'talalminfo@gmail.com'
  },
  navbar: navbar,
  sidebar: sidebar,
  pluginOptions: {
    readingTime: {
      locales: {
        en: {
          word: 'The word',
          time: 'The time'
        }
      }
    }
  }
})
