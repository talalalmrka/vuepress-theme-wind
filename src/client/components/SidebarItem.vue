<script setup lang="ts">
import { ref } from 'vue'
import type { SidebarConfig } from '../../shared'
defineProps<{
    item: SidebarConfig
}>()
const open = ref(true)
</script>
<template>
    <auto-link v-if="!item.children" :key="item.text" :config="item" class="vp-sidebar-link">
        <fg-icon :icon="item.icon" />
        <span>{{ item.text }}</span>
    </auto-link>
    <div v-if="item.children" class="vp-sidebar-group">
        <button type="button" @click="open = !open" class="vp-sidebar-title">
            <span class="flex-space-1">
                <fg-icon :icon="item.icon" />
                <span>{{ item.text }}</span>
            </span>
            <fg-icon icon="bi-chevron-down" class="transition-transform" :class="{ 'rotate-180': open }" />
        </button>
        <transition-slide>
            <div v-show="open" class="vp-sidebar-group-links">
                <sidebar-item v-for="child in item.children" :key="child.text" :item="child" />
            </div>
        </transition-slide>
    </div>
</template>