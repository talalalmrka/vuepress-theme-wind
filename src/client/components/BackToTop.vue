<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

const checkScroll = () => {
  show.value = window.pageYOffset > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <Transition name="fade">
    <button
      v-show="show"
      class="back-to-top"
      @click="scrollToTop"
      title="Back to top"
    >
      <i class="bi-arrow-up"></i>
    </button>
  </Transition>
</template>

<style lang="postcss">
.back-to-top {
  @apply fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition-colors;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style> 