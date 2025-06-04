---
title: Config
icon: bi-gear-fill
catalog: Guide
---

# Config

This theme comes with a rich set of features that can be configured through the theme options.

## Basic Configuration

### logo

- Type: `string`
- Default: `""`

The logo image URL to be displayed in the navbar.

### navbarTitle

- Type: `string | boolean`
- Default: `true`

Controls the display of the navbar title.

### darkMode

- Type: `boolean`
- Default: `true`

Enables or disables dark mode support.

### repo

- Type: `string`
- Default: `""`

The repository URL for your documentation.

### navbar

- Type: `LinkOptions[]`
- Default: `[]`

Navigation bar configuration array.

### sidebar

- Type: `Record<string, SidebarConfig[]>`
- Default: `{}`

Sidebar configuration object.

### footer

- Type: `object`
  - `content`: `string` (Default: `""`)
  - `copyright`: `string` (Default: `"Copyright © {currentYear}"`)

Footer configuration options.

## Theme Features

### backToTop

- Type: `BackToTopPluginOptions | boolean`
- Default: `{}`

Configures the back-to-top button functionality.

### copyCode

- Type: `CopyCodePluginOptions | boolean`
- Default: `{ showInMobile: true }`

Configures the code copy button functionality.

### icon

- Type: `IconPluginOptions | boolean`
- Default: `{ type: "iconify", prefix: "bi" }`

Icon configuration options.

### nprogress

- Type: `boolean`
- Default: `false`

Enables or disables the progress bar during navigation.

## Markdown Features

### appendDate

- Type: `AppendDatePluginOptions | boolean`
- Default: `{}`

Configures automatic date appending to markdown files.

### container

- Type: `MarkdownContainerPluginOptions | boolean`
- Default: `{ type: "tip" }`

Custom container configuration.

### ext

- Type: `MarkdownExtPluginOptions | boolean`
- Default:

```js
{
  gfm: true,
  footnote: true,
  tasklist: true,
  breaks: true,
  linkify: true,
  vPre: true
}
```

Extended markdown syntax configuration.

### image

- Type: `MarkdownImagePluginOptions | boolean`
- Default:

```js
{
  figure: true,
  lazyload: true,
  mark: true,
  size: true
}
```

Image enhancement configuration.

### include

- Type: `MarkdownIncludePluginOptions | boolean`
- Default: `{}`

Markdown file inclusion configuration.

### hint

- Type: `MarkdownHintPluginOptions | boolean`
- Default: `{}`

Hint block configuration.

### math

- Type: `MarkdownMathPluginOptions | boolean`
- Default: `undefined`

Mathematical formula support configuration.

### stylize

- Type: `MarkdownStylizePluginOptions | boolean`
- Default:

```js
{
  align: true,
  attrs: true,
  mark: true,
  spoiler: true,
  sub: true,
  sup: true
}
```

Text styling enhancement configuration.

### tabs

- Type: `MarkdownTabPluginOptions | boolean`
- Default: `{ tabs: true, codeTabs: true }`

Tab container configuration.

### linksCheck

- Type: `LinksCheckPluginOptions | boolean`
- Default: `{}`

Link checking configuration.

### highlight

- Type: `object`
  - `type`: `'shiki' | 'prismjs'`
  - `options`: `ShikiPluginOptions | PrismjsPluginOptions`
- Default: `{ type: 'shiki', options: {} }`

Code highlighting configuration.
