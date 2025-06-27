<script setup lang="ts">
import type { RequiredSlot } from "@vuepress/helper/client"
import { Transition, TransitionGroup, defineProps, computed } from "vue"

// define props exactly as before
const props = defineProps({
    /**
     * Transition delay
     */
    delay: { type: Number, default: 0 },

    /**
     * Transition duration
     */
    duration: { type: Number, default: 0.25 },

    /**
     * Whether to use TransitionGroup
     */
    group: Boolean,

    /**
     * Whether to use appear
     */
    appear: Boolean,
})

// set initial off-screen style
function setStyle(el: Element): void {
    const html = el as HTMLElement
    html.style.transition =
        `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`
    html.style.transform = "translateY(-20px)"
    html.style.opacity = "0"
}

// reset to on-screen
function unsetStyle(el: Element): void {
    const html = el as HTMLElement
    html.style.transform = "translateY(0)"
    html.style.opacity = "1"
}

// pick the right wrapper
const Tag = computed(() => (props.group ? TransitionGroup : Transition))

// collect all of our transition hooks/props
const attrs = {
    name: "drop",
    appear: props.appear,
    onAppear: setStyle,
    onAfterAppear: unsetStyle,
    onEnter: setStyle,
    onAfterEnter: unsetStyle,
    onBeforeLeave: setStyle,
}
</script>
<!-- components/DropTransition.vue -->
<template>
    <component :is="Tag" v-bind="attrs">
        <slot />
    </component>
</template>
