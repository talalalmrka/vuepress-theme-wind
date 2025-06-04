---
title: Getting started
icon: bi-stars
---

# Getting Started

## Installation

You can install the theme using your preferred package manager:

```bash
# pnpm
pnpm add -D vuepress-theme-fadgram-next

# npm
npm install -D vuepress-theme-fadgram-next

# yarn
yarn add -D vuepress-theme-fadgram-next
```

## Configuration

Create or update your `.vuepress/config.ts` file:

```ts
import { defineUserConfig } from "vuepress";
import { fadgramTheme } from "vuepress-theme-fadgram-next";

export default defineUserConfig({
  theme: fadgramTheme({
    // Theme configuration
    navbar: {
      logo: "/logo.png",
      links: [
        {
          text: "Guide",
          link: "/guide/",
        },
        // Add more navigation links
      ],
    },
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          children: ["/guide/README.md", "/guide/getting-started.md"],
        },
      ],
    },
    footer: {
      content: "Made with Fadgram Theme",
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  }),
});
```

## Theme Options

The theme accepts the following options:

### Navbar

Configure the navigation bar:

```ts
navbar: {
  logo?: string       // Path to logo image
  links?: NavLink[]   // Navigation links
}

interface NavLink {
  text: string       // Link text
  link?: string      // Link URL
  icon?: string      // Icon name from Fadgram UI icons
  children?: NavLink[] // Dropdown menu items
}
```

### Sidebar

Configure the sidebar navigation:

```ts
sidebar: {
  [path: string]: SidebarConfig[]
}

interface SidebarConfig {
  text: string           // Section title
  link?: string         // Section link
  children?: SidebarConfig[] // Nested items
}
```

### Footer

Configure the footer content:

```ts
footer: {
  content?: string    // Footer content
  copyright?: string  // Copyright text
}
```

### Features

Enable or disable theme features:

```ts
features: {
  darkMode?: boolean  // Enable dark mode toggle
  search?: boolean    // Enable search
  backToTop?: boolean // Enable back to top button
}
```
