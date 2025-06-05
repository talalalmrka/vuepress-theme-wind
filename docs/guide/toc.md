---
date: 2025-06-05
---

# Table of Contents

The theme provides a powerful Table of Contents (TOC) feature that can be customized through theme options and used in your components.

## Basic Configuration

You can enable and configure the TOC in your theme options:

```ts
// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { fadgramTheme } from "vuepress-theme-fadgram";

export default defineUserConfig({
  theme: fadgramTheme({
    toc: true, // Enable TOC with default settings
  }),
});
```

For more control, you can provide detailed options:

```ts
// .vuepress/config.ts
export default defineUserConfig({
  theme: fadgramTheme({
    toc: {
      title: "Contents", // Custom title
      print: true, // Show print button
      marker: true, // Show active section marker
      offset: 100, // Offset for active header detection
      delay: 300, // Delay before updating active header
    },
  }),
});
```

## Using the Composable

### Basic Usage

```vue
<script setup lang="ts">
import { useTocOptions } from "@theme/client";

// Get TOC options
const { isEnabled, title, showPrint, showMarker, offset, delay } =
  useTocOptions();
</script>

<template>
  <div v-if="isEnabled">
    <h2>{{ title }}</h2>
    <!-- Your TOC content -->
  </div>
</template>
```

### Custom TOC Component

Here's an example of a custom TOC component using the composable:

```vue
<script setup lang="ts">
import { useTocOptions } from "@theme/client";
import { getHeaders } from "@vuepress/helper/client";
import { ref, onMounted } from "vue";

const { isEnabled, title, showMarker, offset, delay } = useTocOptions();
const headers = ref([]);

onMounted(() => {
  headers.value = getHeaders({ levels: "deep" });
});
</script>

<template>
  <aside v-if="isEnabled" class="custom-toc">
    <div class="toc-header">
      <h2>{{ title }}</h2>
    </div>

    <nav class="toc-nav">
      <ul>
        <li v-for="header in headers" :key="header.slug">
          <a :href="\`#\${header.slug}\`" :class="{ active: header.active }">
            {{ header.title }}
          </a>
        </li>
      </ul>

      <div v-if="showMarker" class="toc-marker"></div>
    </nav>
  </aside>
</template>

<style>
.custom-toc {
  width: 300px;
  padding: 1rem;
}

.toc-nav {
  position: relative;
}

.toc-marker {
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  background-color: var(--vp-c-brand);
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1);
}
</style>
```

### Using with Active Header Detection

```vue
<script setup lang="ts">
import { useTocOptions } from "@theme/client";
import { ref, onMounted, onUnmounted } from "vue";

const { offset, delay } = useTocOptions();
const activeHeader = ref("");

function setupObserver() {
  const options = {
    rootMargin: `${-offset.value}px 0px -70% 0px`,
  };

  const observer = new IntersectionObserver((entries) => {
    // Add delay to prevent rapid changes
    setTimeout(() => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeHeader.value = entry.target.id;
          break;
        }
      }
    }, delay.value);
  }, options);

  // Observe all headers
  document.querySelectorAll("h2, h3, h4, h5, h6").forEach((header) => {
    observer.observe(header);
  });

  return () => observer.disconnect();
}

onMounted(() => {
  const cleanup = setupObserver();
  onUnmounted(cleanup);
});
</script>
```

### Print Feature Example

```vue
<script setup lang="ts">
import { useTocOptions } from "@theme/client";

const { showPrint } = useTocOptions();

function printPage() {
  window.print();
}
</script>

<template>
  <div class="toc-controls">
    <button v-if="showPrint" @click="printPage" class="print-button">
      <fg-icon icon="bi-printer" />
      Print
    </button>
  </div>
</template>
```

## TypeScript Support

The composable provides full TypeScript support. Here's how to use the types:

```ts
import type { TocOptions } from "@theme/shared";

// Define custom TOC options
const customTocOptions: TocOptions = {
  title: "Page Contents",
  print: true,
  marker: true,
  offset: 50,
  delay: 200,
};
```

## Best Practices

1. Always check `isEnabled` before rendering TOC-related components
2. Use the provided `offset` and `delay` values for consistent behavior
3. Implement smooth scrolling when clicking TOC links
4. Consider mobile responsiveness in your TOC implementation
5. Use the marker feature to provide clear visual feedback

## Common Use Cases

### Sidebar Integration

```vue
<script setup lang="ts">
import { useTocOptions } from "@theme/client";
import { useRoute } from "vue-router";

const { isEnabled, title } = useTocOptions();
const route = useRoute();

// Only show TOC on documentation pages
const showToc = computed(
  () => isEnabled.value && route.path.startsWith("/guide/")
);
</script>

<template>
  <aside class="sidebar">
    <nav class="main-nav">
      <!-- Main navigation -->
    </nav>

    <div v-if="showToc" class="sidebar-toc">
      <h3>{{ title }}</h3>
      <!-- TOC content -->
    </div>
  </aside>
</template>
```

### Responsive TOC

```vue
<script setup lang="ts">
import { useTocOptions } from "@theme/client";
import { useWindowSize } from "@vueuse/core";

const { isEnabled } = useTocOptions();
const { width } = useWindowSize();

const showToc = computed(() => isEnabled.value && width.value >= 768);
</script>

<template>
  <div class="page-layout">
    <main class="content">
      <!-- Page content -->
    </main>

    <Transition name="fade">
      <aside v-if="showToc" class="toc-sidebar">
        <!-- TOC content -->
      </aside>
    </Transition>
  </div>
</template>

<style>
.page-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 2rem;
}

@media (max-width: 768px) {
  .page-layout {
    grid-template-columns: 1fr;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
```
