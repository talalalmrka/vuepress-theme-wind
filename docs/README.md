---
date: 2025-06-05
home: true
title: Home
icon: bi-house
heroText: Vuepress Theme Wind
tagline: A vuepress tailwind theme
heroAlt: Vuepress Theme Wind
heroImage: /images/logo.svg
heroImageDark: /images/logo-dark.svg
bgImage: /images/hero-light.webp
bgImageDark: /images/hero-dark.webp
bgStyle:
  attachment: fixed
  blur: sm
heroFullScreen: true
actions:
  - text: Getting Started
    icon: bi-lightbulb
    link: /guide/getting-started
    type: primary

  - text: View On Github
    icon: bi-github
    link: https://github.com/yourusername/vuepress-theme-wind
    type: secondary

highlights:
  - header: Easy to install
    image: /images/icon/install.svg
    bgImage: /images/bg/install-light.svg
    bgImageDark: /images/bg/install-dark.svg
    highlights:
      - title: Run <code>pnpm create vuepress-theme-wind wind-project</code> to create a new project with this theme.
      - title: Run <code>pnpm create vuepress-theme-wind add .</code> in your project root to create a new project with this theme.

  - header: Add things you want in markdown
    description: We extended the standard commonMark specification and added tons of new features for you.
    image: /images/markdown.svg
    bgImage: /images/bg/2.svg
    bgImageDark: /images/bg/2-dark.svg
    features:
      - title: Links Check
        icon: bi-clipboard-check
        details: Check markdown links
        link: https://theme-hope.vuejs.press/guide/markdown/others.html#link-check

      - title: Hint box
        icon: bi-archive
        details: Decorate Markdown content with styles
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html

      - title: GFM alerts
        icon: bi-bell
        details: GFM alert box
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html

      - title: Tabs
        icon: bi-layout-three-columns
        details: Group similar content with tabs and switch them together
        link: https://theme-hope.vuejs.press/guide/markdown/content/tabs.html

      - title: Code Tabs
        icon: bi-code-square
        details: Group similar codes with tabs
        link: https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html

      - title: Custom Align
        icon: bi-text-center
        details: Let you decide to align paragraphs in the way you like
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/align.html

      - title: Attrs
        icon: bi-code-slash
        details: Allow you to add attributes for Markdown content
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html

      - title: Superscript and subscript
        icon: bi-type-h1
        details: Inserting superscript and subscript
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/sup-sub.html

      - title: Footnote
        icon: bi-quote
        details: Your Markdown now support footnotes
        link: https://theme-hope.vuejs.press/guide/markdown/content/footnote.html

      - title: Mark
        icon: bi-highlighter
        details: Mark and highlight contents
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/mark.html

      - title: Spoiler
        icon: bi-eye-slash
        details: Mark spoiler contents
        link: https://theme-hope.vuejs.press/guide/markdown/stylize/spoiler.html

      - title: Tasklist
        icon: bi-check-square
        details: Use tasklist in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/tasklist.html

      - title: Image syntax
        icon: bi-image
        details: improve syntax to specify size and color scheme
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/image.html

      - title: Component Support
        icon: bi-puzzle
        details: Easily insert components in Markdown
        link: https://theme-hope.vuejs.press/guide/component/grammar.html

      - title: Components
        icon: bi-puzzle-fill
        details: Common components out fo box
        link: https://theme-hope.vuejs.press/guide/component/built-in.html

      - title: Chart Support
        icon: bi-bar-chart
        details: Display charts in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/chartjs.html

      - title: Flowchart Support
        icon: bi-diagram-3
        details: Create your flowchart in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/flowchart.html

      - title: Mermaid Support
        icon: bi-pie-chart
        details: Add mermaid diagram in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/mermaid.html

      - title: Plantuml Support
        icon: bi-diagram-2
        details: Add plantuml in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/chart/plantuml.html

      - title: Tex Support
        icon: bi-square-root
        details: Markdown now have Tex Support so you can write your formula
        link: https://theme-hope.vuejs.press/guide/markdown/grammar/math.html

      - title: Include snippet Support
        icon: bi-file-earmark-text
        details: split your docs with different parts and import them in Markdown
        link: https://theme-hope.vuejs.press/guide/markdown/content/include.html

      - title: Playground Support
        icon: bi-code-square
        details: You can add playground in Markdown files
        link: https://theme-hope.vuejs.press/guide/markdown/code/playground.html

      - title: Kotlin playground Support
        icon: bi-code-slash
        details: Reactive kotlin playground
        link: https://theme-hope.vuejs.press/guide/markdown/code/kotlin-playground.html

      - title: Vue playground Support
        icon: bi-filetype-vue
        details: Show living vue component in playground
        link: https://theme-hope.vuejs.press/guide/markdown/code/vue-playground.html

      - title: Sandpack playground Support
        icon: bi-code-square
        details: A live coding environment driven by Sandpack.
        link: https://theme-hope.vuejs.press/guide/markdown/code/sandpack.html

      - title: Code Demo Support
        icon: bi-laptop-code
        details: You can insert code demo easily
        link: https://theme-hope.vuejs.press/guide/markdown/code/demo.html

      - title: Presentation Support
        icon: bi-easel
        details: Insert presentation in Markdown files via Reveal.js
        link: https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html

  - header: Customizable UI
    description: Customizable outlook with full a11y support.
    image: /images/ui.svg
    highlights:
      - title: Dark Mode
        icon: bi-circle-half
        details: Switch between light and dark modes freely
        link: ./guide/interface/darkmode.html

      - title: Customizable Theme Color
        icon: bi-palette
        details: Set theme color with the brand color and even a picker
        link: ./guide/interface/theme-color.html

      - title: More
        icon: bi-three-dots
        details: RTL layout, print support, fullscreen button, etc.
        link: ./guide/interface/others.html

  - header: Improved layouts
    description: An awesome responsive layout
    image: /images/layout.svg
    bgImage: /images/bg5-light.svg
    bgImageDark: /images/bg5-dark.svg
    highlights:
      - title: Navbar
        icon: bi-window
        details: Fully customizable navbar with improved mobile support
        link: ./guide/layout/navbar.html

      - title: Sidebar
        icon: bi-layout-sidebar
        details: Generate sidebar based on page headings and file structure
        link: https://theme-hope.vuejs.press/guide/layout/sidebar.html

      - title: Slide Page
        icon: bi-easel
        details: Adding slide pages to display things you like
        link: https://theme-hope.vuejs.press/guide/layout/slides.html

      - title: Other Layout Improvement
        icon: bi-grid
        details: Improved page nav and new breadcrumb, footer and toc. We also bring you a brand new homepage.
        link: https://theme-hope.vuejs.press/guide/layout/

  - header: New features
    description: We added new helpfull tailwind features.
    image: /images/features.svg
    bgImage: /images/bg1-light.svg
    bgImageDark: /images/bg1-dark.svg
    features:
      - title: Catalog Page
        icon: bi-diagram-3
        details: Auto generating catalog page and out of box catalog component
        link: https://theme-hope.vuejs.press/guide/feature/catalog.html

      - title: Pageviews and Comments
        icon: bi-chat-dots
        details: Pageview statistics and comment support with 4 comment service
        link: https://theme-hope.vuejs.press/guide/feature/comment.html

      - title: Article Information
        icon: bi-info-circle
        details: Add author, writing date, reading time, word count and other information to your article
        link: https://theme-hope.vuejs.press/guide/feature/page-info.html

      - title: Article Encryption
        icon: bi-lock
        details: Encrypt you articles based on page links, so that only the one you want could see them
        link: https://theme-hope.vuejs.press/guide/feature/encrypt.html

      - title: Search
        icon: bi-search
        details: Support docsearch, client search, slimsearch, meilisearch
        link: https://theme-hope.vuejs.press/guide/feature/search.html

      - title: Code Block
        icon: bi-code-square
        details: Customize code block themes, line number, highlight lines, copy button, etc.
        link: https://theme-hope.vuejs.press/guide/markdown/code/fence.html

      - title: Image Preview
        icon: bi-image
        details: Support viewing, zooming, sharing your page images like a gallery
        link: https://theme-hope.vuejs.press/guide/feature/photo-swipe.html

  - header: Blogging
    description: Create personal blog with theme
    image: /images/blog.svg
    bgImage: /images/bg5-light.svg
    bgImageDark: /images/bg5-dark.svg
    highlights:
      - title: Blog features
        icon: bi-journal-text
        details: Listing your articles with their dates, tags and categories
        link: https://theme-hope.vuejs.press/guide/blog/intro.html

      - title: Blog homepage
        icon: bi-journal
        details: New blog homepage
        link: https://theme-hope.vuejs.press/guide/blog/home.html

      - title: Blogger info
        icon: bi-person-circle
        details: Customize avatar, name, slogan, introduction and social links
        link: https://theme-hope.vuejs.press/guide/blog/blogger.html

      - title: Timeline
        icon: bi-clock-history
        details: Read through blog posts in a timeline
        link: https://theme-hope.vuejs.press/guide/blog/timeline.html

  - header: Advanced
    description: Advanced features to improve site SEO and user experience
    image: /images/advanced.svg
    bgImage: /images/bg4-light.svg
    bgImageDark: /images/bg4-dark.svg
    highlights:
      - title: SEO Enhancement
        icon: bi-graph-up
        details: Optimize pages for search engines
        link: https://theme-hope.vuejs.press/guide/advanced/seo.html

      - title: Sitemap
        icon: bi-diagram-3
        details: Generate a Sitemap for your site
        link: https://theme-hope.vuejs.press/guide/advanced/sitemap.html

      - title: Feed
        icon: bi-rss
        details: Generate feed to allow users to subscribe it
        link: https://theme-hope.vuejs.press/guide/advanced/feed.html

      - title: PWA
        icon: bi-phone
        details: Make your site more like an APP
        link: https://theme-hope.vuejs.press/guide/advanced/pwa.html

copyright: false
footer: Copyrights reserved @ <a href="/" target="_blank">Fadgram</a> | 2025
---
