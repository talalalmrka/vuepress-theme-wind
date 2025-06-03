import { resolveRoute } from 'vuepress/client'
import type { AutoLinkOptions } from '../../shared/nav'

/**
 * Resolve AutoLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export const resolveAutoLink = (config: string, currentPath?: string): AutoLinkOptions => {
  const { notFound, meta, path } = resolveRoute<{
    title?: string
    icon?: string
  }>(config, currentPath)

  return notFound
    ? { text: path, link: path }
    : {
        text: meta.title || path,
        icon: meta.icon || null,
        link: path
      }
}
