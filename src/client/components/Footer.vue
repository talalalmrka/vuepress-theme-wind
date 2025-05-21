<script setup lang="ts">
import { useSiteData } from "@vuepress/client";
import { useThemeOptions } from "../composables";

const themeOptions = useThemeOptions();
</script>

<template>
  <footer v-if="themeOptions.footer" class="vp-footer">
    <div class="container mx-auto px-4 py-3">
      <div class="text-center">
        {{ themeOptions.footer }}
      </div>
    </div>
  </footer>
</template>
