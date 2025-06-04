<script setup lang="ts">
import { isLinkExternal, isString } from "@vuepress/helper/client";
import { RouteLink, withBase } from "vuepress/client";
import { computed, resolveComponent } from "vue";
import type { Slot } from "vue";
import { useDark } from "@vueuse/core";
import { HomeFeatureOptions } from '../../shared/page';


/* interface FeatureItem {
    icon?: string;
    title: string;
    details: string;
    link?: string;
}

interface Props {
    bgImage?: string;
    bgImageDark?: string;
    bgImageStyle?: string | Record<string, string>;
    color?: string;
    description?: string;
    image?: string;
    imageDark?: string;
    header?: string;
    features?: FeatureItem[];
}

defineProps<Props>(); */
const props = withDefaults(defineProps<HomeFeatureOptions>(), {
    features: () => [],
})
const isDark = useDark()
const backgroundImage = computed(() => {
    const img = isDark.value && props.bgImageDark ? props.bgImageDark : props.bgImage
    return isString(img) ? withBase(img) : null
})
const featureImage = computed(() => {
    const img = isDark.value && props.imageDark ? props.imageDark : props.image
    return isString(img) ? withBase(img) : null
})
</script>

<template>
    <div class="vp-feature-wrapper">
        <div v-if="backgroundImage" class="vp-feature-bg" :class="[props.class, {
            'bg-cover': props.bgStyle?.cover || true,
            'bg-repeat': props.bgStyle?.repeat || false,
            'bg-no-repeat': !props.bgStyle?.repeat || false,
            'bg-center': props.bgStyle?.center || true,
            'bg-fixed': props.bgStyle?.fixed || true
        }]" :style="[
            { 'background-image': `url(${backgroundImage})` },
        ]" />

        <div class="vp-feature" :style="color ? { color } : {}">
            <slot name="image">
                <img v-if="featureImage" class="vp-feature-image" :src="featureImage" :alt="props.imageAlt" />
            </slot>

            <slot name="info">
                <h2 v-if="header" class="vp-feature-header">{{ header }}</h2>
                <div v-if="description" class="vp-feature-description" v-html="description" />
            </slot>

            <div v-if="features && features.length" class="vp-features">
                <div v-for="(item, index) in features" :key="index" class="vp-feature-item"
                    :class="{ link: item.link }">
                    <a v-if="item.link && isLinkExternal(item.link)" :href="item.link" :aria-label="item.title"
                        target="_blank">
                        <h3 class="vp-feature-title">
                            <fg-icon icon="bi-arrow-right-short" class="vp-feature-title-arrow" />
                            <span class="flex-1">
                                <fg-icon :icon="item.icon" class="vp-feature-icon" />
                                <span v-html="item.title" />
                            </span>

                        </h3>
                        <div class="vp-feature-details" v-html="item.details" />
                    </a>

                    <RouteLink v-else-if="item.link" :to="item.link" :aria-label="item.title">
                        <a role="link">
                            <h3 class="vp-feature-title">
                                <span class="flex-1">
                                    <fg-icon :icon="item.icon" class="vp-feature-icon" />
                                    <span v-html="item.title" />
                                </span>
                                <fg-icon icon="bi-arrow-right-short" class="vp-feature-title-arrow" />
                            </h3>
                            <div class="vp-feature-details" v-html="item.details" />
                        </a>
                    </RouteLink>

                    <div v-else>
                        <h3 class="vp-feature-title">
                            <fg-icon :icon="item.icon" class="vp-feature-icon" />
                            <span v-html="item.title" />
                        </h3>
                        <div class="vp-feature-details" v-html="item.details" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>