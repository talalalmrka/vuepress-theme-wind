import type { LocaleData } from 'vuepress/shared'

import type { Author } from './author'
import { WindThemeLocaleData, WindThemeLocaleOptions } from './options'

export interface ThemeLocaleData extends WindThemeLocaleData {
  /**
   * Current lang code
   */
  lang: string
}

export interface ThemeLocaleOptions extends WindThemeLocaleOptions {
  /**
   * Global default author
   *
   * 全局默认作者
   */
  author?: Author
}

export interface ThemeLocaleConfig extends LocaleData, ThemeLocaleData {
  /**
   * Global default author
   *
   * 全局默认作者
   */
  author?: Author
}
