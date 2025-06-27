<script setup lang="ts">
import { resolveComponent } from 'vue'
import { hasGlobalComponent } from '@vuepress/helper/client'
const GitChangelog = hasGlobalComponent('GitChangelog') ? resolveComponent('GitChangelog') : (): null => null
</script>

<template>
    <div v-if="GitChangelog" class="changelog-container">
        <GitChangelog />
    </div>
</template>
