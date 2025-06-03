import { AutoLinkConfig } from 'vuepress/client'

export interface LinkOptions extends AutoLinkConfig {
  icon?: string
  children?: LinkOptions[]
}
