import type { AutoLinkOptions, NavItemOptions } from './nav'

// types for SidebarItem
export type SidebarLinkOptions = AutoLinkOptions

export interface SidebarGroupOptions extends NavItemOptions {
  /**
   * Link prefix of current group
   */
  prefix?: string

  /**
   * Link of current group
   */
  link?: string

  /**
   * Whether current group is collapsible
   *
   * @default false
   */
  collapsible?: boolean
  /**
   * Whether current group is expanded
   *
   * @default false
   */
  expanded?: boolean

  /**
   * Children of current group
   */
  children: SidebarItemOptions[]
}

export type SidebarItemOptions = SidebarGroupOptions | SidebarLinkOptions | string
export type SidebarArrayOptions = SidebarItemOptions[]

export type SidebarOptions = Record<string, SidebarItemOptions[] | false>
//export type SidebarArrayOptions = SidebarItemOptions[];

/* export type SidebarObjectOptions = Record<
  string,
  SidebarArrayOptions | "heading" | false
>; */

/* export type SidebarOptions =
  | SidebarArrayOptions
  | SidebarObjectOptions
  | "heading"; */
