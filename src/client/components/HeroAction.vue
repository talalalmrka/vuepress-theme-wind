<script setup lang="ts">
import { computed } from "vue"
import { RouteLink } from "vuepress/client"
import { HeroActionOptions } from "../../shared"

const props = defineProps<{ config: HeroActionOptions }>()
// keep all possible classes explicitly so Tailwind can detect them
const colorClasses: Record<HeroActionOptions['color'], string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  light: 'btn-light',
  dark: 'btn-dark',
  red: 'btn-red',
  orange: 'btn-orange',
  amber: 'btn-amber',
  yellow: 'btn-yellow',
  lime: 'btn-lime',
  green: 'btn-green',
  emerald: 'btn-emerald',
  teal: 'btn-teal',
  cyan: 'btn-cyan',
  sky: 'btn-sky',
  blue: 'btn-blue',
  indigo: 'btn-indigo',
  violet: 'btn-violet',
  purple: 'btn-purple',
  fuchsia: 'btn-fuchsia',
  pink: 'btn-pink',
  rose: 'btn-rose',
  slate: 'btn-slate',
  gray: 'btn-gray',
  zinc: 'btn-zinc',
  neutral: 'btn-neutral',
  stone: 'btn-stone',
}

const outlineClasses: Record<HeroActionOptions['color'], string> = {
  primary: 'btn-outline-primary',
  secondary: 'btn-outline-secondary',
  light: 'btn-outline-light',
  dark: 'btn-outline-dark',
  red: 'btn-outline-red',
  orange: 'btn-outline-orange',
  amber: 'btn-outline-amber',
  yellow: 'btn-outline-yellow',
  lime: 'btn-outline-lime',
  green: 'btn-outline-green',
  emerald: 'btn-outline-emerald',
  teal: 'btn-outline-teal',
  cyan: 'btn-outline-cyan',
  sky: 'btn-outline-sky',
  blue: 'btn-outline-blue',
  indigo: 'btn-outline-indigo',
  violet: 'btn-outline-violet',
  purple: 'btn-outline-purple',
  fuchsia: 'btn-outline-fuchsia',
  pink: 'btn-outline-pink',
  rose: 'btn-outline-rose',
  slate: 'btn-outline-slate',
  gray: 'btn-outline-gray',
  zinc: 'btn-outline-zinc',
  neutral: 'btn-outline-neutral',
  stone: 'btn-outline-stone',
}

const buttonClass = computed(() => {
  // pull defaults and flags out once
  const {
    color = 'primary',
    outline = false,
    rounded = true,
  } = props.config

  // choose from the correct map
  const base = outline
    ? outlineClasses[color]
    : colorClasses[color]
  return ["btn", "md:btn-lg", base, { 'pill': rounded }, props.config.class]
}) 
</script>

<template>
  <RouteLink :to="config.link" :title="config.text" class="btn md:btn-lg pill" :class="buttonClass">
    <fg-icon v-if="config.icon" :icon="config.icon" />
    <span v-if="config.text">{{ config.text }}</span>
  </RouteLink>
</template>
