<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <UCard class="transition-all duration-300 hover:shadow-lg">
    <article class="group post">
      <div v-if="image" class="post-image__wrapper">
        <img
          :src="image"
          :alt="title"
          class="post-image group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div class="post-content">
        <h3 class="post-content__title group-hover:text-slate-950">
          <NuxtLink :to="`/blog/${slug}`">
            {{ title }}
          </NuxtLink>
        </h3>

        <div class="py-3">
          <div
            class="h-20"
            v-html="
              excerpt.slice(0, 112) + (excerpt.length > 112 ? ' ...' : '')
            "
          ></div>
        </div>
        <NuxtLink v-if="slug" class="button" :to="`/blog/${slug}`"
          >Read more
        </NuxtLink>
      </div>
    </article>
  </UCard>
</template>
<style scoped>
.post {
  @apply overflow-hidden;
}
.post-image__wrapper {
  @apply h-[240px] w-full relative overflow-hidden rounded-lg;
}
.post-image {
  @apply duration-300 rounded-lg
   absolute object-cover w-full h-full;
}
.post-content {
  @apply pt-4;
}
.post-content__title {
  @apply text-[26px] font-semibold mb-2 duration-300 transition;
}
</style>
