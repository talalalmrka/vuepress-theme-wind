<script setup lang="ts">
import { computed } from 'vue'
import { isString } from '@vuepress/helper/client'
import { withBase } from 'vuepress/client'
import { useData } from '@theme-wind/client/composables'
import type { BgStyle, ThemeHomePageFrontmatter } from '@theme-wind/shared'

const { frontmatter, siteLocale } = useData<ThemeHomePageFrontmatter>()
const info = computed(() => {
    const { heroText, tagline, heroStyle, heroFullScreen = false } = frontmatter.value
    return {
        text: heroText ?? siteLocale.value.title ?? 'Hello',
        tagline: tagline ?? siteLocale.value.description ?? '',
        style: heroStyle ?? null,
        isFullScreen: heroFullScreen,
    }
})

const image = computed(() => {
    const { heroImage, heroImageDark, heroAlt, heroImageClass, heroImageDarkClass } = frontmatter.value
    return {
        image: heroImage ? withBase(heroImage) : null,
        imageDark: heroImageDark ? withBase(heroImageDark) : null,
        alt: heroAlt ?? '',
        class: heroImageClass,
        classDark: heroImageDarkClass ?? heroImageClass
    }
})
const blurClasses: Record<BgStyle['blur'], string> = {
    xs: 'after:backdrop-blur-xs',
    sm: 'after:backdrop-blur-sm',
    md: 'after:backdrop-blur-md',
    lg: 'after:backdrop-blur-lg',
    xl: 'after:backdrop-blur-xl',
    '2xl': 'after:backdrop-blur-2xl',
    '3xl': 'after:backdrop-blur-3xl',
    none: 'after:bacdrop-blur-none',
}
const bg = computed(() => {
    const { bgImage, bgImageClass, bgImageDark, bgImageDarkClass, bgStyle } = frontmatter.value
    const defaultBgStyle: BgStyle = {
        position: 'center',
        attachment: 'fixed',
        repeat: 'no-repeat',
        size: 'cover',
        blur: 'xs',
    }
    const backgroundStyle: BgStyle = {
        ...defaultBgStyle,
        ...bgStyle
    }
    const blurClass = blurClasses[backgroundStyle.blur]
    return {
        image: isString(bgImage) ? withBase(bgImage) : null,
        imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
        class: [
            'vp-hero-mask',
            blurClass,
        ],
        classLight: [
            {
                'vp-hero-mask-light': bgImageDark
            },
            bgImageClass
        ],
        classDark: [
            'vp-hero-mask-dark',
            bgImageDarkClass ?? bgImageClass
        ],
        style: {
            'background-position': backgroundStyle.position,
            'background-attachment': backgroundStyle.attachment,
            'background-repeat': backgroundStyle.repeat,
            'background-size': backgroundStyle.size
        }
    }
})

const actions = computed(() => frontmatter.value.actions ?? [])
const hasHighlights = (frontmatter.value.highlights ?? []).length;
const navbarHeight = computed(() => {
    const navbar = document.querySelector<HTMLElement>('[vp-navbar]')
    return navbar ? navbar.offsetHeight : 0
})
const scrollToHighlights = (): void => {
    const target = document.getElementById('highlights-container')
    if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY
        const scrollPosition = targetPosition - navbarHeight.value
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })
    }
}
</script>
<template>
    <header :class="['vp-hero', { 'hero-fullscreen': info.isFullScreen }]">
        <!-- Background images -->
        <div v-if="bg.image" :class="[bg.class, bg.classLight]"
            :style="[bg.style, { backgroundImage: `url(${bg.image})` }]" />
        <div v-if="bg.imageDark" :class="[bg.class, bg.classDark]"
            :style="[bg.style, { backgroundImage: `url(${bg.imageDark})` }]" />

        <!-- Main content -->
        <div class="vp-hero-info">

            <!-- heroLogo slot or default image -->
            <slot name="heroLogo" v-bind="image">
                <DropTransition appear group>
                    <template #default>
                        <img v-if="image.image" key="light" class="vp-hero-image"
                            :class="[image.class, { 'vp-hero-image-light': image.imageDark }]" :src="image.image"
                            :alt="image.alt" />
                        <img v-if="image.imageDark" key="dark" class="vp-hero-image vp-hero-image-dark"
                            :class="image.classDark" :src="image.imageDark" :alt="image.alt" />
                    </template>
                </DropTransition>
            </slot>

            <!-- heroInfo slot or default texts & actions -->
            <slot name="heroInfo" v-bind="info">
                <div class="vp-hero-infos">
                    <DropTransition v-if="info.text" appear :delay="0.04">
                        <h1 id="main-title" class="vp-hero-title">{{ info.text }}</h1>
                    </DropTransition>

                    <DropTransition v-if="info.tagline" appear :delay="0.08">
                        <div id="main-description" v-html="info.tagline" />
                    </DropTransition>

                    <DropTransition v-if="actions.length" appear :delay="0.12">
                        <p class="vp-hero-actions">
                            <HeroAction v-for="(action, idx) in actions" :key="idx" :config="action" />
                        </p>
                    </DropTransition>
                </div>
            </slot>
        </div>
        <button v-if="hasHighlights" @click.prevent="scrollToHighlights" type="button"
            class="vp-hero-slide-down-button">
            <fg-icon icon="bi-chevron-double-down" />
        </button>
    </header>
</template>