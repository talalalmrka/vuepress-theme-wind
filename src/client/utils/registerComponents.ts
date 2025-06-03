import type { App, Component } from 'vue'

export const registerComponents = async (app: App) => {
  const components = import.meta.glob<{ default: Component }>('../components/*.vue')

  for (const [path, importComponent] of Object.entries(components)) {
    const componentName =
      path
        .split('/')
        .pop()
        ?.replace(/\.\w+$/, '') || ''
    const component = await importComponent()
    app.component(componentName, component.default)
  }
}
