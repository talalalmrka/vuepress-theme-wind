import type {
  AutoLinkOptions,
  NavGroup,
  SidebarGroupOptions,
  SidebarLinkOptions
} from '../../shared'

export type SidebarItem = AutoLinkOptions | NavGroup<SidebarItem>
export interface SidebarGroupItem extends SidebarGroupOptions {
  prefix: string
  children: SidebarItem[]
}
export type SidebarLinkItem = SidebarLinkOptions
