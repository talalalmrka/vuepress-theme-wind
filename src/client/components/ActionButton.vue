<script setup lang="ts">
interface Props {
  text?: string;
  icon?: string;
  link?: string;
  color?: string;
  outline?: boolean;
  pill?: boolean;
  class?: string;
}
defineProps<Props>();
const colorClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  light: "btn-light",
  dark: "btn-dark",
  red: "btn-red",
  orange: "btn-orange",
  amber: "btn-amber",
  yellow: "btn-yellow",
  lime: "btn-lime",
  green: "btn-green",
  emerald: "btn-emerald",
  teal: "btn-teal",
  cyan: "btn-cyan",
  sky: "btn-sky",
  blue: "btn-blue",
  indigo: "btn-indigo",
  violet: "btn-violet",
  purple: "btn-purple",
  fuchsia: "btn-fuchsia",
  pink: "btn-pink",
  rose: "btn-rose",
  slate: "btn-slate",
  gray: "btn-gray",
  zinc: "btn-zinc",
  neutral: "btn-neutral",
  stone: "btn-stone",
};

const colorOutlineClasses = {
  primary: "btn-outline-primary",
  secondary: "btn-outline-secondary",
  light: "btn-outline-light",
  dark: "btn-outline-dark",
  red: "btn-outline-red",
  orange: "btn-outline-orange",
  amber: "btn-outline-amber",
  yellow: "btn-outline-yellow",
  lime: "btn-outline-lime",
  green: "btn-outline-green",
  emerald: "btn-outline-emerald",
  teal: "btn-outline-teal",
  cyan: "btn-outline-cyan",
  sky: "btn-outline-sky",
  blue: "btn-outline-blue",
  indigo: "btn-outline-indigo",
  violet: "btn-outline-violet",
  purple: "btn-outline-purple",
  fuchsia: "btn-outline-fuchsia",
  pink: "btn-outline-pink",
  rose: "btn-outline-rose",
  slate: "btn-outline-slate",
  gray: "btn-outline-gray",
  zinc: "btn-outline-zinc",
  neutral: "btn-outline-neutral",
  stone: "btn-outline-stone",
};

const buttonClass = computed(() => {
  const colorClass = outline
    ? colorOutlineClasses[color] || colorOutlineClasses.primary
    : colorClasses[color] || colorClasses.primary;
  return ["btn", colorClass, { pill: pill }];
});
</script>

<template>
  <RouteLink :to="link" :class="buttonClass">
    <fg-icon v-if="icon" :icon="icon" />
    <span v-if="text">{{ text }}</span>
  </RouteLink>
</template>
