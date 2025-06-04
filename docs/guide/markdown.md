---
title: Markdown
icon: bi-markdown
---

## Essentials

### Strikethrough

~~Strikethrough text~~ using `~~text~~`.

### Emoji Support 🎉

:tada: `:tada:`
:heart: `:heart:`
:rocket: `:rocket:`
:100: `:100:`

## Task Lists & Footnotes

### Task List

- [ ] Plan A
- [x] Plan B

### Footnotes

Footnote 1[^first]. Footnote 2[^second].

[^first]: This is the first footnote.

[^second]: This is the second footnote.

## Containers & Alerts

### VuePress Containers

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
Dangerous content warning.
:::

::: details
This is a collapsible details block.
:::

### Custom Title Containers

::: important Custom Title
An important container with custom title.
:::

::: danger STOP
Danger zone — do not proceed.
:::

::: details Click to view code

```js
console.log('Hello VuePress!')
```

:::

### Admonitions (Markdown Plus)

> [!note]
> This is note text

> [!important]
> This is important text

> [!tip]
> This is tip text

> [!warning]
> This is warning text

> [!caution]
> This is caution text

## Images & Zoom

### Medium Zoom

Click the image to zoom:

![Medium zoom example](/images/logo.svg)

Enable in theme config:

```js
// .vuepress/config.js
windTheme: {
  plugins: {
    mediumZoom: true
  }
}
```

---

## Layout & Stylize

### Align Content

::: left
Left-aligned content.
:::

::: center
Centered content.
:::

::: right
Right-aligned content.
:::

::: justify
Justified content.
:::

### Highlighting

VuePress is ==powerful==!

### Spoilers

VuePress is !!powerful!!.

### Superscript & Subscript

H~2~O is water.
2^10^ = 1024

## Advanced Features

### Tabs

::: tabs

@tab title 1
Tab 1 content.

@tab title 2
Tab 2 content.

@tab:active title 3
Tab 3 content.

:::

### Tables (GFM)

| Feature         | Support | Notes                       |
| --------------- | ------- | --------------------------- |
| Tables          | ✅      | GFM style                   |
| Alignment       | ✅      | Use `:---`, `:---:`, `---:` |
| Complex content | ✅      | Inline markdown supported   |

## Vue Syntax & Code Blocks

### Using Vue in Markdown

- Interpolation: `{{ 1 + 1 }}`
- Directives:
  `<span v-for="i in 3">{{ i }} </span>`

### Code Blocks

#### Basic

```js
const hello = 'Hello VuePress'
console.log(hello)
```

#### With Line Numbers

```js:line-numbers
function greet(name) {
  console.log(`Hello, ${name}!`)
  return true
}
```

#### With Highlighted Lines

```js{2,4-5}
const config = {
  title: 'My Site',         // highlighted
  description: 'Docs site',
  theme: 'default',         // highlighted
  plugins: []               // highlighted
}
```

#### With Title

```js title="config.js"
module.exports = {
  title: 'My Site',
  description: 'Documentation site'
}
```

#### Code tabs

::: code-tabs#shell
@tab npm

```bash
npm i -D vuepress-theme-fadgram
```

@tab pnpm

```bash
pnpm add -D vuepress-theme-fadgram
```

@tab yarn

```bash
yarn add -D vuepress-theme-fadgram
```

:::

#### Import from File

@[code](../../src/shared/defaultOptions.ts)

---

## Math & TOC

### Math Equations

Inline: $E = mc^2$
Euler’s Identity: $e^{ipi} + 1 = 0$

Block:

$$
frac{partial f}{partial x} = lim_{h to 0} frac{f(x + h) - f(x)}{h}
$$

---

## Links

- [Internal link](./getting-started.md)
- [Same page link](#markdown-features)
- [External link](https://v2.vuepress.vuejs.org/)

---

## Markdown Config & Plugins

### Sample Config

```js
module.exports = {
  markdown: {
    lineNumbers: true,
    anchor: { permalink: true },
    toc: { includeLevel: [1, 2, 3] },
    extendMarkdown: md => {
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

### Common Plugins

- `markdown-it-emoji`
- `markdown-it-anchor`
- `markdown-it-toc`
- `markdown-it-katex`
- `markdown-it-container`

---

## Best Practices

1. Use relative links for internal navigation
2. Add descriptive alt text for images
3. Use proper header hierarchy
4. Include TOC for long docs
5. Use containers for important content

---

## Image Switching

Light & dark mode image switching:

![GitHub Light](/images/github-light.svg#dark)
![GitHub Dark](/images/github-dark.svg#light)
