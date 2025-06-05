import type { AutoLinkOptions, NavItemOptions } from './nav'

/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItemOptions {
  /**
   * Link prefix of current group
   */
  prefix?: string

  /**
   * Link of current group
   */
  link?: string

  /**
   * Children of current group
   */
  children: T[]
}

// Navbar types

// types for NavbarItem
export type NavbarLinkOptions = AutoLinkOptions | string
// types for NavbarDropdown
export type NavbarGroupOptions = NavGroup<NavbarLinkOptions | NavGroup<NavbarLinkOptions>>
// types for navbar options
export type NavbarOptions = (NavbarGroupOptions | NavbarLinkOptions)[] | false

/**
 * Navbar component
 *
 * 导航栏组件
 */
export type NavbarComponent =
  | 'NavbarBrand'
  | 'NavbarLinks'
  | 'NavbarRepo'
  | 'SearchBox'
  | 'DarkModeToggle'

/**
 * Navbar layout options
 *
 * 导航栏布局选项
 */
export interface NavbarLayoutOptions {
  start?: string[]
  center?: string[]
  end?: string[]
}
