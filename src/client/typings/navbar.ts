import type { AutoLinkOptions, NavGroup } from '../../shared'

export type NavbarItem = AutoLinkOptions | NavGroup<NavbarItem>
