<template>
  <div>
    <button
      @click="scrollToTop"
      :class="` scroll-to-top ${
        showButton
          ? 'opacity-1 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`"
    >
      <Icon name="mi:chevron-double-up" size="36" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const showButton = ref<boolean>(false);
onMounted(() => {
  document.addEventListener('scroll', () => {
    const heightOffset = document.documentElement.scrollTop;
    showButton.value = heightOffset > 680;
  });
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
<style scoped>
.scroll-to-top {
  @apply fixed p-2 bottom-6
right-6 flex items-center
justify-center
rounded-full shadow bg-slate-700 text-white hover:bg-slate-900
rotate-0 duration-300 sm:bottom-6 sm:right-6;
}
</style>
