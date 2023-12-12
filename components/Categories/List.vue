<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const { data: categories } = await useWpApi().getCatgories();
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1300);
});
</script>
<template>
  <div>
    <div v-if="loading" class="loader-categories">
      <Icon name="svg-spinners:90-ring-with-bg" size="48" />
    </div>
    <div class="flex flex-col gap-4" v-else>
      <h3>Categories</h3>
      <NuxtLink
        v-for="category in categories"
        :key="(category as any).id"
        :to="`/categories/${(category as any).slug}`"
        class="category-link"
      >
        <span class="font-semibold">{{ (category as any).name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.category-link {
  @apply block
        py-1
        rounded
        text-sky-600
        hover:text-sky-900
        duration-200;
}
.loader-categories {
  @apply flex flex-col justify-center items-center py-28 -ml-8;
}
</style>
