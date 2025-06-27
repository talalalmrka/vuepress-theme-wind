import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { PageFrontmatter } from 'vuepress/shared'
import type { AutoLinkOptions } from './nav'
import type { SidebarArrayOptions, SidebarOptions } from './sidebar'
export interface StructureSidebarDirOptions {
  text?: string
  icon?: string
  expanded?: boolean
  collapsible?: boolean
  link?: boolean
  index?: boolean
  order?: number
}
export interface ThemePageData extends Partial<GitPluginPageData> {
  filePathRelative: string | null
  readingTime?: string | null
}

export interface ThemePageFrontmatter extends PageFrontmatter {
  icon?: string
  home?: boolean
  navbar?: boolean
  sidebar?: SidebarOptions
  pageClass?: string
  externalLinkIcon?: boolean
}

export interface ThemeNormalPageFrontmatter extends ThemePageFrontmatter {
  home?: false
  index?: boolean
  order?: number
  dir?: StructureSidebarDirOptions
  shortTitle?: string
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  prev?: AutoLinkOptions | string
  next?: AutoLinkOptions | string
  footer?: string | false
}

export interface HeroActionOptions {
  text: string
  icon?: string
  link: string
  type: string
  size: string
  outline?: boolean
  rounded?: boolean
  class?: string
}
export interface HomeHighlightOptions {
  header: string
  description?: string
  color?: string
  image?: string
  imageDark?: string
  imageClass?: string
  imageAlt?: string
  bgImage?: string
  bgImageDark?: string
  bgStyle?: BgStyle
  class?: string
  type?: 'order' | 'un-order' | 'no-order'
  highlights?: HomeHighlightItem[]
}
interface HomeHighlightItem {
  title: string
  details?: string
  icon?: string
  link?: string
}

export type HomeFeatureItem = HomeHighlightItem

export interface HomeFeatureOptions {
  header?: string
  description?: string
  color?: string
  image?: string
  imageDark?: string
  imageAlt?: string
  bgImage?: string
  bgImageDark?: string
  bgStyle?: BgStyle
  class?: string
  features: HomeFeatureItem[]
}

export type BgPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left'
  | 'center'
  | 'right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right'

export type BgAttachment = 'fixed' | 'local' | 'scroll'

export type BgRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat-space'
  | 'repeat-round'
  | 'no-repeat'

export type BgSize = 'auto' | 'cover' | 'contain'

export interface BgStyle {
  position: BgPosition
  attachment: BgAttachment
  repeat: BgRepeat
  size: BgSize
  /* cover: boolean
  repeat: boolean
  center: boolean
  fixed: boolean */
  blur: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none'
}
export interface ThemeHomePageFrontmatter extends ThemePageFrontmatter {
  home: true
  heroImage?: string
  heroImageClass?: string
  heroImageDark?: string
  heroImageDarkClass?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  bgImage?: string
  bgImageClass?: string
  bgImageDark?: string
  bgImageDarkClass?: string
  bgStyle?: BgStyle
  heroFullScreen?: boolean
  heroClass?: string
  actions?: HeroActionOptions[]
  features?: HomeFeatureItem[]
  highlights?: (HomeFeatureOptions | HomeHighlightOptions)[]
  footer?: string | false
}
export type PageInfoType =
  | 'Author'
  | 'Category'
  | 'Date'
  | 'Original'
  | 'PageView'
  | 'Tag'
  | 'ReadingTime'
  | 'Word'
  | 'CreatedTime'

export interface PageInfoData extends Record<string, unknown> {
  /**
   * Article title
   */
  title: string

  /**
   * Article short title
   */
  shortTitle: string

  /**
   * Page icon
   */
  icon?: string

  /**
   * Whether this page should be indexed
   *
   * used in other functions, e.g.: sidebar and catalog
   */
  index?: boolean

  /**
   * The order of this page in same directory
   */
  order?: number
}

export interface ThemeProjectHomePageFrontmatter extends ThemeHomePageFrontmatter {
  actions?: HeroActionOptions[]
  features?: HomeFeatureItem[]
  highlights?: (HomeFeatureOptions | HomeHighlightOptions)[]
}
