import { resolveRoute } from 'vuepress/client'

import type { AutoLinkOptions, PageInfoData } from '../../shared'
import { isString } from 'vuepress/shared'

/**
 * Resolve AutoLink props from string
 *
 */
export const resolveLinkInfo = (
  item: string,
  preferFull = false,
  currentPath?: string
): AutoLinkOptions => {
  const { meta, path, notFound } = resolveRoute<PageInfoData>(item, currentPath)
  const icon = isString(meta.icon)
    ? meta.icon.startsWith('bi-')
      ? meta.icon
      : `bi-${meta.icon}`
    : null
  return notFound
    ? { text: path, link: path }
    : {
        text: !preferFull && meta.shortTitle ? meta.shortTitle : meta.title || path,
        link: path,
        icon: icon
      }
}
