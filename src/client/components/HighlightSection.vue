<script setup lang="ts">
import { isLinkExternal, isString } from "@vuepress/helper/client";
import { RouteLink, withBase } from "vuepress/client";
import { resolveComponent, computed } from "vue";
import { useDark } from "@vueuse/core";
import { HomeHighlightOptions } from "../../shared/page";
const props = withDefaults(defineProps<HomeHighlightOptions>(), {
    type: "un-order",
    highlights: () => [],
})

const isDark = useDark()
// Compute tag names based on list type
const listTag = computed(() => {
    switch (props.type) {
        case "order":
            return "ol";
        case "no-order":
            return "dl";
        default:
            return "ul";
    }
});

const itemTag = computed(() => (props.type === "no-order" ? "div" : "li"));
const titleTag = computed(() => (props.type === "no-order" ? "dt" : "h3"));
const detailsTag = computed(() => (props.type === "no-order" ? "dd" : "div"));

const backgroundImage = computed(() => {
    const img = isDark.value && props.bgImageDark ? props.bgImageDark : props.bgImage
    return isString(img) ? withBase(img) : null
})
const image = computed(() => {
    const img = isDark.value && props.imageDark ? props.imageDark : props.image
    return isString(img) ? withBase(img) : null
})
</script>

<template>
    <div class="vp-highlight-wrapper" :class="props.class">
        <div v-if="backgroundImage" class="vp-highlight-bg" :class="{
            'bg-cover': props.bgStyle?.cover || true,
            'bg-repeat': props.bgStyle?.repeat || false,
            'bg-no-repeat': !props.bgStyle?.repeat || false,
            'bg-center': props.bgStyle?.center || true,
            'bg-fixed': props.bgStyle?.fixed || true
        }" :style="[
            { 'background-image': `url(${backgroundImage})` },
        ]" />

        <div class="vp-highlight">
            <slot name="image">
                <img v-if="image" class="vp-highlight-image" :class="imageClass" :src="image" :alt="imageAlt" />
            </slot>

            <slot name="info">
                <div class="vp-highlight-info-wrapper">
                    <div class="vp-highlight-info">
                        <h2 v-if="header" class="vp-highlight-header" v-html="header" />
                        <div v-if="description" class="vp-highlight-description" v-html="description" />

                        <slot name="highlights" :highlights="highlights">
                            <component :is="listTag" v-if="highlights.length" class="vp-highlights">
                                <component :is="itemTag" v-for="(item, index) in highlights" :key="index"
                                    class="vp-highlight-item-wrapper" :class="{ link: item.link }">
                                    <a v-if="item.link && isLinkExternal(item.link)" class="vp-highlight-item link"
                                        :href="item.link" :aria-label="item.title" target="_blank">
                                        <component :is="titleTag" class="vp-highlight-title">
                                            <fg-icon :icon="item.icon" class="vp-highlight-icon" />
                                            <span v-html="item.title" />
                                        </component>
                                        <component :is="detailsTag" v-if="item.details" class="vp-highlight-details"
                                            v-html="item.details" />
                                    </a>

                                    <RouteLink v-else-if="item.link" class="vp-highlight-item link" :to="item.link"
                                        :aria-label="item.title">
                                        <component :is="titleTag" class="vp-highlight-title">
                                            <fg-icon :icon="item.icon" class="vp-highlight-icon" />
                                            <span v-html="item.title" />
                                        </component>
                                        <component :is="detailsTag" v-if="item.details" class="vp-highlight-details"
                                            v-html="item.details" />
                                    </RouteLink>

                                    <div v-else class="vp-highlight-item">
                                        <component :is="titleTag" class="vp-highlight-title">
                                            <fg-icon :icon="item.icon" class="vp-highlight-icon" />
                                            <span v-html="item.title" />
                                        </component>
                                        <component :is="detailsTag" v-if="item.details" class="vp-highlight-details"
                                            v-html="item.details" />
                                    </div>
                                </component>
                            </component>
                        </slot>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>