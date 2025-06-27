<script setup lang="ts">
import { useData, useBreadcrumb } from '@theme-wind/client/composables';
//import { useBreadcrumb } from '@theme-wind/client/composables/useBreadcrumb';
const { page } = useData()
const { separator, items } = useBreadcrumb()
//const pathSegments = page.value.path.split('/').filter(Boolean)
</script>

<template>
  <nav class="vp-breadcrumbs" v-if="items.length">
    <ol class="vp-breadcrumbs-list">
      <li v-for="(item, index) in items" :key="index" class="vp-breadcrumbs-item">
        <span v-if="separator && index !== items.length && index !== 0" class="vp-breadcrumbs-separator"
          v-html="separator" />
        <span v-if="item.currentPage" class="vp-breadcrumbs-link-current">
          <fg-icon :icon="item.icon" class="vp-breadcrumbs-icon" />
          <span>{{ item.text }}</span>
        </span>
        <RouteLink v-else :key="index" :to="item.link" class="vp-breadcrumbs-link" :title="item.text">
          <fg-icon :icon="item.icon" class="vp-breadcrumbs-icon" />
          <span>{{ item.text }}</span>
        </RouteLink>
      </li>
    </ol>
  </nav>
</template>
