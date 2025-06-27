import type { NavbarOptions } from '../../src/shared'
import { navbar } from '../../src/node/helpers'
export default navbar([
  '/',
  {
    text: 'Guide',
    icon: 'bi-lightbulb',
    prefix: '/guide/',
    children: [
      'introduction',
      'installation',
      'getting-started',
      'data',
      'config',
      'dark-mode',
      'markdown'
    ]
  }
])
