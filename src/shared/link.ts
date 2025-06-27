import { AutoLinkConfig as AutoLinkConfigReal } from 'vuepress/client'

export interface LinkOptions extends AutoLinkConfigReal {
  icon?: string
  children?: LinkOptions[]
}
export interface AutoLinkConfig extends AutoLinkConfigReal {
  icon?: string
  endIcon?: string
  class?: string
}
