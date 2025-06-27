import type { App } from 'vuepress/core'
import { logger } from '../utils'
/**
 * @private
 */
export const preparePagesData = async (app: App): Promise<void> => {
  logger.load('Preparing pages data')
  // Remove frontmatter from each page before output
  const output = app.pages.map(page => {
    return {
      path: page.data.path,
      title: page.data.title,
      lang: page.data.lang,
      icon: page.data.frontmatter.icon
    }
  })
  const outputFilePath = 'theme-wind/pages.js'
  await app.writeTemp(
    outputFilePath,
    `\
export const pagesData = ${JSON.stringify(output, null, 2)};
`
  )
  const outputPath = app.dir.temp(outputFilePath).replace(app.dir.source(), '')
  let relativeOutputPath = outputPath.replace(app.dir.source(), '')
  logger.succeed(`Pages data: docs${relativeOutputPath}`)
}
