<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
import { hasGlobalComponent, type Slot } from '@vuepress/helper/client'
import { useHasSidebar } from '../composables/useHasSidebar'
import { Content } from 'vuepress/client'
import { useData, useToc, useTocItems } from '@theme-wind/client/composables'
const { page } = useData()
const hasSidebar = useHasSidebar()
defineSlots<{
    'page-top'?: Slot
    'page-bottom'?: Slot
    'content-top'?: Slot
    'content-bottom'?: Slot
}>()
const { enabled: tocEnabled } = useToc()
const tocItems = useTocItems()
const hasToc = computed(() => tocEnabled && tocItems.value.length)
const CommentService = hasGlobalComponent('CommentService')
    ? resolveComponent('CommentService')
    : (): null => null
</script>

<template>
    <div>
        <main class="vp-page" :class="{ 'has-sidebar': hasSidebar, 'has-toc': hasToc }" vp-page>
            <Breadcrumbs :key="`breadcrumbs-${page.path}`" />
            <PageHeader />

            <slot name="page-top" />
            <FgToc />

            <div id="markdown-content" class="vp-content" vp-content>
                <slot name="content-top" />
                <Content id="content" />
                <slot name="content-bottom" />
            </div>
            <Changelog />
            <PageMeta />
            <PageNav />
            <slot name="page-bottom" />
            <CommentService />
        </main>
        <Footer :class="{ 'has-sidebar': hasSidebar }" />
    </div>
</template>