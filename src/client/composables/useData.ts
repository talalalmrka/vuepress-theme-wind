/* import type { ThemeDataRef, ThemeLocaleDataRef } from '@vuepress/plugin-theme-data/client'
import { useThemeData, useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import type { ClientData } from 'vuepress/client'
import { useData as _useData } from 'vuepress/client'
import type { WindThemeData, ThemeNormalPageFrontmatter, ThemePageData } from '../../shared'

export interface Data<
  PageFrontmatter extends Record<string, unknown> = ThemeNormalPageFrontmatter,
  PageData extends Record<string, unknown> = ThemePageData
> extends Pick<
    ClientData<PageFrontmatter, PageData>,
    | 'frontmatter'
    | 'head'
    | 'headTitle'
    | 'lang'
    | 'layouts'
    | 'page'
    | 'pageComponent'
    | 'pageLayout'
    | 'redirects'
    | 'routeLocale'
    | 'routePath'
    | 'routes'
    | 'site'
    | 'siteLocale'
  > {
  theme: ThemeDataRef<WindThemeData>
  themeLocale: ThemeLocaleDataRef<WindThemeData>
}

export const useData = <
  PageFrontmatter extends Record<string, unknown> = ThemeNormalPageFrontmatter,
  PageData extends Record<string, unknown> = ThemePageData
>(): Data<PageFrontmatter, PageData> => ({
  ..._useData<PageFrontmatter, PageData>(),
  theme: useThemeData<WindThemeData>(),
  themeLocale: useThemeLocaleData<WindThemeData>()
})
 */

import type { ThemeDataRef, ThemeLocaleDataRef } from '@vuepress/plugin-theme-data/client'
import { useThemeData, useThemeLocaleData } from '@vuepress/plugin-theme-data/client'
import type { ClientData } from 'vuepress/client'
import { useData as _useData } from 'vuepress/client'
import type {
  WindThemeData,
  ThemeNormalPageFrontmatter,
  ThemePageData,
  WindThemeLocaleData
} from '../../shared'

export interface Data<
  PageFrontmatter extends Record<string, unknown> = ThemeNormalPageFrontmatter,
  PageData extends Record<string, unknown> = ThemePageData
> extends Pick<
    ClientData<PageFrontmatter, PageData>,
    | 'frontmatter'
    | 'head'
    | 'headTitle'
    | 'lang'
    | 'layouts'
    | 'page'
    | 'pageComponent'
    | 'pageLayout'
    | 'redirects'
    | 'routeLocale'
    | 'routePath'
    | 'routes'
    | 'site'
    | 'siteLocale'
  > {
  theme: ThemeDataRef<WindThemeData>
  themeLocale: ThemeLocaleDataRef<WindThemeLocaleData>
}

export const useData = <
  PageFrontmatter extends Record<string, unknown> = ThemeNormalPageFrontmatter,
  PageData extends Record<string, unknown> = ThemePageData
>(): Data<PageFrontmatter, PageData> => ({
  ..._useData<PageFrontmatter, PageData>(),
  theme: useThemeData<WindThemeData>(),
  themeLocale: useThemeLocaleData<WindThemeLocaleData>()
})
