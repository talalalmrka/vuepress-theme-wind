import { NavbarOptions, SidebarOptions } from '../shared'

type Helper<T> = (options: T) => T

export type ThemeNavbarHelper = Helper<NavbarOptions>

export type ThemeSidebarHelper = Helper<SidebarOptions>

export const navbar: ThemeNavbarHelper = options => options

export const sidebar: ThemeSidebarHelper = options => options
