<script setup lang="ts">
import { Content } from 'vuepress/client'
import { isArray } from "@vuepress/helper/client";
import Hero from './Hero.vue';
import FeatureSection from './FeatureSection.vue';
import HighlightSection from './HighlightSection.vue';
import { useData } from "../composables/useData";
import type { ThemeHomePageFrontmatter } from "../../shared/page";
const { frontmatter } = useData<ThemeHomePageFrontmatter>();
</script>

<template>
    <div>
        <main class="vp-home">
            <Hero />
            <div v-if="isArray(frontmatter.highlights)" class="highlights-container" id="highlights-container">
                <component v-for="(highlight, index) in frontmatter.highlights" :key="index"
                    :is="'features' in highlight ? FeatureSection : HighlightSection" v-bind="highlight" />
            </div>
            <div vp-content>
                <Content />
            </div>
        </main>
        <Footer />
    </div>
</template>