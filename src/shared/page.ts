import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { PageFrontmatter } from 'vuepress/shared'
import type { AutoLinkOptions } from './nav'
import type { SidebarArrayOptions } from './sidebar'

export interface ThemePageData extends Partial<GitPluginPageData> {
  filePathRelative: string | null
  readingTime?: string | null
}

export interface ThemePageFrontmatter extends PageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
  externalLinkIcon?: boolean
}

export interface ThemeNormalPageFrontmatter extends ThemePageFrontmatter {
  home?: false
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: SidebarArrayOptions | 'structure' | false
  sidebarDepth?: number
  prev?: AutoLinkOptions | string
  next?: AutoLinkOptions | string
  footer?: string | false
}

export interface HeroActionOptions {
  text: string
  icon?: string
  link: string
  color?: string
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
export interface BgStyle {
  cover?: boolean
  repeat?: boolean
  center?: boolean
  fixed?: boolean
}
export interface ThemeHomePageFrontmatter extends ThemePageFrontmatter {
  home: true
  heroImage?: string
  heroImageDark?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  bgImage?: string
  bgImageDark?: string
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
