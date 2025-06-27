import type { WindThemeOptions, WindThemeLocaleData } from '../../shared'
import { DEFAULT_LOCALE_OPTIONS, DEFAULT_PLUGIN_OPTIONS } from '../../shared/defaultOptions'

/**
 * Deep merge utility that respects false values and nested objects
 */
const deepMerge = <T extends Record<string, any>>(
  defaults: T,
  overrides?: Partial<T> | false
): T => {
  // If override is false, return false
  if (overrides === false) return false as any

  // If no overrides, return defaults
  if (!overrides) return defaults

  const merged = { ...defaults }
  for (const key in overrides) {
    if (Object.prototype.hasOwnProperty.call(overrides, key)) {
      const value = overrides[key]
      const defaultValue = defaults[key]

      if (
        value !== undefined &&
        value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        typeof defaultValue === 'object' &&
        defaultValue !== null
      ) {
        // Recursively merge nested objects
        merged[key] = deepMerge(defaultValue, value)
      } else if (value !== undefined) {
        // Assign primitive or array values directly
        merged[key] = value
      }
    }
  }

  return merged
}

/**
 * Resolve theme options with default values
 */
export const resolveThemeOptions = (options: WindThemeOptions): void => {
  const { hostname, pluginOptions: userPluginOptions, plugins, ...localeOptions } = options

  // Merge locale options
  const mergedLocaleOptions = deepMerge(
    DEFAULT_LOCALE_OPTIONS,
    localeOptions as Partial<WindThemeLocaleData>
  )

  // Merge plugin options
  const mergedPluginOptions = deepMerge(DEFAULT_PLUGIN_OPTIONS, userPluginOptions)
  Object.assign(options, {
    ...mergedLocaleOptions,
    hostname,
    pluginOptions: mergedPluginOptions,
    plugins
  })
}
