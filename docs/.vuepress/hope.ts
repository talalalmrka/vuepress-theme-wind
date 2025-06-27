import { hopeTheme } from 'vuepress-theme-hope'
import sidebar from './sidebarHope'
export default hopeTheme({
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
  navbar: [
    '/',
    {
      text: 'Guide',
      prefix: '/guide/',
      children: [
        'introduction',
        'installation',
        'getting-started',
        'config',
        'dark-mode',
        'markdown'
      ]
    }
  ],
  sidebar: sidebar
})
