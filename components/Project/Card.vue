<template>
  <UCard class="project-card">
    <div class="project-head">
      <img
        :src="project.featured_media_src_url"
        class="rounded-lg"
        loading="lazy"
      />
    </div>
    <div class="project-body">
      <h3 class="mb-4">
        {{ project.title.rendered }}
      </h3>
      <div class="project-content" v-html="project.excerpt.rendered"></div>
      <div class="project-footer">
        <NuxtLink
          :to="{
            name: 'projects-slug',
            params: { slug: project.slug },
          }"
          class="button"
        >
          View Project
        </NuxtLink>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps(['project']);
</script>
<style scoped>
.project-card {
  @apply transition-all duration-300 hover:shadow-xl;
}
.project-body {
  @apply flex flex-col justify-between  py-4;
}
.project-content {
  @apply h-[70px] mb-4;
}
</style>
