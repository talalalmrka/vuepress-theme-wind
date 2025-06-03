<script setup lang="ts">
import type { Slot } from '@vuepress/helper/client'
import { useHasSidebar } from '../composables/useHasSidebar'
import { Content } from 'vuepress/client'
import { useData, useToc } from '@theme/client/composables'
const { page } = useData()
const hasSidebar = useHasSidebar()
defineSlots<{
    'page-top'?: Slot
    'page-bottom'?: Slot
    'content-top'?: Slot
    'content-bottom'?: Slot
}>()
const { enabled: tocEnabled } = useToc()
</script>

<template>
    <div>
        <main class="vp-page" :class="{ 'has-sidebar': hasSidebar, 'has-toc': tocEnabled }" vp-page>
            <Breadcrumbs :key="`breadcrumbs-${page.path}`" />
            <PageHeader />

            <slot name="page-top" />
            <FgToc />

            <div id="markdown-content" class="vp-content" vp-content>
                <slot name="content-top" />
                <Content id="content" />
                <slot name="content-bottom" />
            </div>
            <PageMeta />
            <PageNav />
            <slot name="page-bottom" />
        </main>
        <Footer :class="{ 'has-sidebar': hasSidebar }" />
    </div>
</template>