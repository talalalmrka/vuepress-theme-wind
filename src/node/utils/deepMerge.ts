export const deepMerge = <T extends Record<string, any>>(
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
