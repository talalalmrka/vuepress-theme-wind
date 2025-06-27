import type { App } from 'vuepress/core'
import { logger } from '../utils'
import { WindThemeLocaleOptions } from '@theme-wind/shared'
/**
 * @private
 */
export const prepareLocaleData = async (
  app: App,
  localeOptions: WindThemeLocaleOptions
): Promise<void> => {
  logger.load('Preparing locale options')
  const outputFilePath = 'theme-wind/locale.js'
  await app.writeTemp(
    outputFilePath,
    `\
export const localeData = ${JSON.stringify(localeOptions, null, 2)};
`
  )
  const outputPath = app.dir.temp(outputFilePath).replace(app.dir.source(), '')
  let relativeOutputPath = outputPath.replace(app.dir.source(), '')
  logger.succeed(`Locale data: docs${relativeOutputPath}`)
}
