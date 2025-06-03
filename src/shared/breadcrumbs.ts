import { AutoLinkOptions } from './nav'

export interface BreadcrumbsOptions {
  separator?: string
  homeText?: string
  icons?: boolean
  homeIcon?: string
}

//export type BreadcrumbsConfig = BreadcrumbsOptions | false;

export interface BreadcrumbItem extends AutoLinkOptions {
  currentPage?: boolean
}
