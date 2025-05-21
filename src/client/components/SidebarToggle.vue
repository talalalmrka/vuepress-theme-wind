<script setup lang="ts">
defineProps<{
    sidebarOpen?: boolean
}>()

defineEmits<{ toggle: [] }>()
</script>

<template>
    <button type="button" class="vp-sidebar-toggle" aria-expanded="false" role="button" tabindex="0" v-bind="$attrs">
        <fg-icon v-show="!sidebarOpen" icon="fg-bars" class="transition-transform duration-300" :class="{ 'rotate-90': sidebarOpen }" />
        <fg-icon v-show="sidebarOpen" icon="fg-x" class="transition-transform duration-300" :class="{ 'rotate-90': sidebarOpen }" />
    </button>
</template>
