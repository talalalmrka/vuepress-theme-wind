---
title: Installation
icon: bi-gear-wide-connected
---

## Installation

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

## Usage

```ts
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import tailwindcss from "@tailwindcss/vite";
export default defineUserConfig({
  // ... another site options
  theme: windTheme({
    // theme options
  }),
  bundler: viteBundler({
    viteOptions: {
      // ... another vite options
      plugins: [tailwindcss()],
    },
  }),
});
```
