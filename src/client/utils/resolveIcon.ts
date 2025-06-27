import { resolveRoute } from 'vuepress/client'

import type { AutoLinkOptions, PageInfoData } from '../../shared'
import { isString } from 'vuepress/shared'

/**
 * Resolve AutoLink props from string
 *
 */
export const resolveIcon = (item?: string, currentPath?: string): string | null => {
  if (!item) {
    return null
  }
  const { meta, notFound } = resolveRoute<PageInfoData>(item, currentPath)
  const icon = isString(meta.icon)
    ? meta.icon.startsWith('bi-')
      ? meta.icon
      : `bi-${meta.icon}`
    : null
  return notFound ? null : icon
}
