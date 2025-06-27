<script setup lang="ts">
import { computed } from "vue"
import { RouteLink } from "vuepress/client"
import { HeroActionOptions } from "../../shared"

const props = defineProps<{ config: HeroActionOptions }>()
// keep all possible classes explicitly so Tailwind can detect them
const colorClasses: Record<HeroActionOptions['type'], string> = {
  primary: 'vp-button-primary',
  secondary: 'vp-button-secondary',
  light: 'vp-button-light',
  dark: 'vp-button-dark',
  red: 'vp-button-red',
  orange: 'vp-button-orange',
  amber: 'vp-button-amber',
  yellow: 'vp-button-yellow',
  lime: 'vp-button-lime',
  green: 'vp-button-green',
  emerald: 'vp-button-emerald',
  teal: 'vp-button-teal',
  cyan: 'vp-button-cyan',
  sky: 'vp-button-sky',
  blue: 'vp-button-blue',
  indigo: 'vp-button-indigo',
  violet: 'vp-button-violet',
  purple: 'vp-button-purple',
  fuchsia: 'vp-button-fuchsia',
  pink: 'vp-button-pink',
  rose: 'vp-button-rose',
  slate: 'vp-button-slate',
  gray: 'vp-button-gray',
  zinc: 'vp-button-zinc',
  neutral: 'vp-button-neutral',
  stone: 'vp-button-stone',
}

const outlineClasses: Record<HeroActionOptions['type'], string> = {
  primary: 'vp-button-outline-primary',
  secondary: 'vp-button-outline-secondary',
  light: 'vp-button-outline-light',
  dark: 'vp-button-outline-dark',
  red: 'vp-button-outline-red',
  orange: 'vp-button-outline-orange',
  amber: 'vp-button-outline-amber',
  yellow: 'vp-button-outline-yellow',
  lime: 'vp-button-outline-lime',
  green: 'vp-button-outline-green',
  emerald: 'vp-button-outline-emerald',
  teal: 'vp-button-outline-teal',
  cyan: 'vp-button-outline-cyan',
  sky: 'vp-button-outline-sky',
  blue: 'vp-button-outline-blue',
  indigo: 'vp-button-outline-indigo',
  violet: 'vp-button-outline-violet',
  purple: 'vp-button-outline-purple',
  fuchsia: 'vp-button-outline-fuchsia',
  pink: 'vp-button-outline-pink',
  rose: 'vp-button-outline-rose',
  slate: 'vp-button-outline-slate',
  gray: 'vp-button-outline-gray',
  zinc: 'vp-button-outline-zinc',
  neutral: 'vp-button-outline-neutral',
  stone: 'vp-button-outline-stone',
}
const sizeClasses: Record<HeroActionOptions['size'], string> = {
  xxs: 'vp-button-xxs',
  xs: 'vp-button-xs',
  sm: 'vp-button-sm',
  lg: 'vp-button-lg',
  xl: 'vp-button-xl',
  xxl: 'vp-button-xxl',
}

const buttonClass = computed(() => {
  // pull defaults and flags out once
  const {
    type = 'primary',
    outline = false,
    rounded = true,
    size = 'lg'
  } = props.config

  // choose from the correct map
  const colorClass = outline
    ? outlineClasses[type]
    : colorClasses[type]
  const sizeClass = sizeClasses[size]
  return ['vp-hero-action', 'vp-button', colorClass, sizeClass, { 'pill': rounded }, props.config.class]
}) 
</script>

<template>
  <RouteLink :to="config.link" :title="config.text" :class="buttonClass">
    <fg-icon v-if="config.icon" :icon="config.icon" />
    <span v-if="config.text">{{ config.text }}</span>
  </RouteLink>
</template>
