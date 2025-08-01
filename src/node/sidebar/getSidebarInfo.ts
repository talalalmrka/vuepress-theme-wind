import { startsWith } from '@vuepress/helper'
import type { Page } from 'vuepress/core'
import { sanitizeFileName } from 'vuepress/utils'

import type { StructureInfo } from './getStructureInfo.js'
import { getStructureInfo } from './getStructureInfo.js'
import { getTitleFromFilename } from './getTitleFromFilename.js'
import type {
  SidebarDirInfo,
  SidebarFileInfo,
  SidebarInfo,
  SidebarSorterFunction,
  ThemeNormalPageFrontmatter,
  ThemePageData
} from '../../shared'

export interface ThemeSidebarInfoOptions {
  pages: Page[]
  sorters: SidebarSorterFunction[]
  scope: string
}

/**
 * @private
 */
const getSidebarChildrenInfo = (
  { scope, pages, sorters }: ThemeSidebarInfoOptions,
  children: StructureInfo[]
): SidebarInfo[] =>
  children
    .map(item => getSidebarInfoFromStructure({ pages, scope, sorters }, item))
    .filter((item): item is SidebarInfo => item !== null)
    // sort items
    .sort((infoA, infoB) => {
      for (const sorter of sorters) {
        const result = sorter(infoA, infoB)

        if (result !== 0) return result
      }

      return 0
    })

/**
 * @private
 */
const getSidebarInfoFromStructure = (
  { scope, pages, sorters }: ThemeSidebarInfoOptions,
  info: StructureInfo
): SidebarInfo | null => {
  // handle file
  if (info.type === 'file') {
    const page = pages.find(
      ({ filePathRelative }) => filePathRelative === `${scope}${info.path}`
    ) as Page<ThemePageData, ThemeNormalPageFrontmatter>

    if (page.frontmatter.index === false) return null

    const fileInfo: SidebarFileInfo = {
      type: 'file',
      filename: info.filename,

      title: page.frontmatter.shortTitle ?? page.title,
      order: page.frontmatter.order ?? null,
      path: decodeURI(page.path) === page.pathInferred ? null : page.path,

      frontmatter: page.frontmatter,
      pageData: page.data
    }

    return fileInfo
  }

  // handle dir

  // performance improvements
  const relatedPages = pages.filter(({ filePathRelative }) =>
    startsWith(filePathRelative, `${scope}${info.path}/`)
  )
  const READMEFile = info.children.find(
    info => info.type === 'file' && info.filename.toLowerCase() === 'readme.md'
  )

  if (READMEFile) {
    const readmePage = relatedPages.find(
      ({ filePathRelative }) => filePathRelative === `${scope}${READMEFile.path}`
    ) as Page<ThemePageData, ThemeNormalPageFrontmatter>

    // get dir information
    const dirOptions = readmePage.frontmatter.dir

    const title = dirOptions?.text ?? readmePage.frontmatter.shortTitle ?? readmePage.title
    const icon = dirOptions?.icon ?? readmePage.frontmatter.icon
    const collapsible = dirOptions?.collapsible ?? true
    const expanded = collapsible && dirOptions?.expanded === true

    if (dirOptions?.index === false) return null

    const dirInfo: SidebarDirInfo = {
      type: 'dir',
      dirname: info.dirname,
      children: getSidebarChildrenInfo(
        { pages: relatedPages, scope, sorters },
        dirOptions?.link
          ? // filter README.md
            info.children.filter(
              item => item.type !== 'file' || item.filename.toLowerCase() !== 'readme.md'
            )
          : info.children
      ),

      title,
      order: dirOptions?.order ?? null,
      // group information
      groupInfo: {
        ...(collapsible ? { collapsible } : {}),
        ...(expanded ? { expanded } : {}),
        ...(icon ? { icon } : {}),
        ...(dirOptions?.link
          ? {
              link:
                readmePage.pathInferred === decodeURI(readmePage.path)
                  ? `${sanitizeFileName(info.dirname)}/`
                  : readmePage.path
            }
          : {})
      },

      frontmatter: readmePage.frontmatter,
      pageData: readmePage.data
    }

    return dirInfo
  }

  const dirInfo: SidebarDirInfo = {
    type: 'dir',
    dirname: info.dirname,
    children: getSidebarChildrenInfo({ pages: relatedPages, scope, sorters }, info.children),

    title: getTitleFromFilename(info.dirname),
    order: null,

    // group information
    groupInfo: {
      collapsible: true
    },

    frontmatter: null,
    pageData: null
  }

  return dirInfo
}

/**
 * @private
 */
export const getSidebarInfo = ({
  pages,
  sorters,
  scope
}: ThemeSidebarInfoOptions): // base = ""
SidebarInfo[] =>
  getStructureInfo(pages, scope)
    .map(info => getSidebarInfoFromStructure({ scope, pages, sorters }, info))
    .filter((item): item is SidebarInfo => item !== null)
    // sort items
    .sort((infoA, infoB) => {
      for (const sorter of sorters) {
        const result = sorter(infoA, infoB)

        if (result !== 0) return result
      }

      return 0
    })
