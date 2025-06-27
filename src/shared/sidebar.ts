import type { AutoLinkOptions, NavItemOptions } from './nav'

import type { ThemeNormalPageFrontmatter, ThemePageData } from './page'
// types for SidebarItem
export type SidebarLinkOptions = AutoLinkOptions

export interface SidebarGroupOptions extends NavItemOptions {
  // Link prefix of current group
  prefix?: string

  // Link of current group
  link?: string

  // Whether current group is collapsible
  collapsible?: boolean

  // Whether current group is expanded
  expanded?: boolean

  // Children of current group
  children: SidebarItemOptions[] | 'structure'
}

export type SidebarItemOptions = SidebarGroupOptions | SidebarLinkOptions | string
export type SidebarArrayOptions = SidebarItemOptions[]

export type SidebarObjectOptions = Record<string, SidebarArrayOptions | 'structure' | false>
export type SidebarOptions = SidebarArrayOptions | SidebarObjectOptions | 'structure' | false

export interface SidebarFileInfo {
  type: 'file'
  filename: string

  title: string
  order: number | null
  path?: string | null

  frontmatter: ThemeNormalPageFrontmatter
  pageData: ThemePageData
}

export interface SidebarDirInfo {
  type: 'dir'
  dirname: string
  children: SidebarInfo[]

  title: string
  order: number | null

  groupInfo: {
    icon?: string
    expanded?: boolean
    collapsible?: boolean
    link?: string
  }

  frontmatter: ThemeNormalPageFrontmatter | null
  pageData: ThemePageData | null
}

export type SidebarInfo = SidebarFileInfo | SidebarDirInfo

export type SidebarSorterKeyword = 'readme' | 'order' | 'date' | 'date-desc' | 'filename' | 'title'

export type SidebarSorterFunction = (infoA: SidebarInfo, infoB: SidebarInfo) => number

export type SidebarSorter =
  | SidebarSorterFunction
  | SidebarSorterFunction[]
  | SidebarSorterKeyword
  | SidebarSorterKeyword[]

export interface SidebarLocaleOptions {
  /**
   * Sidebar config
   *
   * @description Set to `false` to disable sidebar in current locale
   * @see https://theme-hope.vuejs.press/guide/layout/sidebar.html
   *
   * 侧边栏配置
   *
   * @description 设置为 `false` 以在当前语言中禁用侧边栏
   * @see https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html
   */
  sidebar?: SidebarOptions
}
