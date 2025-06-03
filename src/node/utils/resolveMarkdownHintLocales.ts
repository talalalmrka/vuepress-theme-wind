import type { MarkdownHintPluginLocaleData } from '@vuepress/plugin-markdown-hint'
import type { LocaleConfig } from 'vuepress/shared'
import type { WindThemeData } from '../../shared'

/**
 * Resolve options for @vuepress/plugin-markdown-container
 *
 * For custom containers default title
 */
export const resolveMarkdownHintLocales = (
  localeOptions: WindThemeData
): LocaleConfig<MarkdownHintPluginLocaleData> =>
  Object.entries(localeOptions.locales ?? {}).reduce<LocaleConfig<MarkdownHintPluginLocaleData>>(
    (result, [key, value]) => {
      result[key] = {}

      if (value.tip) result[key].tip = value.tip
      if (value.warning) result[key].warning = value.warning
      if (value.danger) result[key].caution = value.danger
      if (value.important) result[key].important = value.important
      if (value.note) result[key].note = value.note

      return result
    },
    {}
  )
