<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import {
  useHeaders,
  useTocEnabled,
  useTocOptions,
  useTocHasHeader,
} from "../composables/useTocOptions";
import { HeaderItem } from "@vuepress/helper/client";
const route = useRoute();
const toc = useTocOptions();
const enabled = useTocEnabled();
const hasHeader = useTocHasHeader();
const items = ref<HeaderItem[]>([]);
const active = ref<string | null>(null);
const marker = ref<HTMLElement | null>(null);

/**
 * دالة لحساب ارتفاع navbar من أي عنصر يحمل السمة vp-navbar
 */
function getOffset(): number {
  const nav = document.querySelector(".vp-navbar") as HTMLElement | null;
  const navHeight = nav ? nav.offsetHeight : 0;
  const offset = toc.offset ?? 5;
  return navHeight + offset;
}

/**
 * دالة التمرير الناعم مع تعويض ارتفاع navbar
 */
function scrollTo(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;
  const navH = getOffset();
  const top = target.getBoundingClientRect().top + window.scrollY - navH;
  window.scrollTo({ top, behavior: "smooth" });
  active.value = id;
}
function updateMarker(): void {
  if (marker.value) {
    if (active.value) {
      const activeElement = document.querySelector(
        `[data-slug="${active.value}"]`
      );
      if (activeElement instanceof HTMLElement) {
        marker.value.classList.remove("hidden");
        marker.value.style.top = `${activeElement.offsetTop}px`;
      } else {
        marker.value.style.top = "0px";
        marker.value.classList.add("hidden");
      }
    } else {
      marker.value.style.top = "0px";
      marker.value.classList.add("hidden");
    }
  }
}
function scrollToActiveItem(slug: string): void {
  const activeElement = document.querySelector(`[data-slug="${slug}"]`);
  if (activeElement instanceof HTMLElement) {
    const tocWrapper = document.querySelector(".vp-toc-wrapper");
    if (!tocWrapper) return;

    const wrapperRect = tocWrapper.getBoundingClientRect();
    const elementRect = activeElement.getBoundingClientRect();

    if (
      elementRect.top < wrapperRect.top + getOffset() ||
      elementRect.bottom > wrapperRect.bottom - getOffset()
    ) {
      activeElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }
}
watch(
  () => active.value,
  (newActive: string | null, oldActive: string | null) => {
    if (newActive !== oldActive) {
      updateMarker();
    }
    if (newActive) {
      scrollToActiveItem(newActive);
    }
  }
);
watch(
  () => route.hash,
  (newHash, oldHash) => {
    if (oldHash !== newHash) {
      if (newHash) {
        const id = newHash.slice(1);
        active.value = id;
      } else {
        active.value = null;
      }
    }
  }
);
onMounted(async () => {
  await nextTick();
  items.value = useHeaders();
  const hash = location.hash;
  active.value = hash ? hash.slice(1) : null;
  updateMarker();
});
</script>
<template>
  <div v-if="enabled" class="vp-toc-placeholder">
    <aside id="vp-toc" class="vp-toc" vp-toc>
      <div v-if="hasHeader" class="vp-toc-header">
        <span v-if="toc.title" class="vp-toc-title">
          {{ toc.title }}
        </span>
        <button
          v-if="toc.print"
          type="button"
          class="print-button"
          title="Print"
        >
          <fg-icon icon="bi-printer" />
        </button>
      </div>

      <div class="vp-toc-wrapper">
        <ul class="vp-toc-list">
          <li
            v-for="item in items"
            :key="item.slug"
            class="vp-toc-item"
            :data-slug="item.slug"
          >
            <RouteLink
              @click="scrollTo(item.slug)"
              :to="item.link"
              class="vp-toc-link vp-sidebar-item"
              :class="[`level-${item.level}`, { active: active === item.slug }]"
            >
              {{ item.title }}
            </RouteLink>
          </li>
        </ul>
        <div v-if="toc.marker" ref="marker" class="vp-toc-marker"></div>
      </div>
    </aside>
  </div>
</template>
