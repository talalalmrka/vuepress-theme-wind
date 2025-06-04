import type { AutoLinkOptions, NavGroup } from '../shared'

export type NavbarItem = AutoLinkOptions | NavGroup<NavbarItem>
export type SidebarItem = AutoLinkOptions | NavGroup<SidebarItem>
