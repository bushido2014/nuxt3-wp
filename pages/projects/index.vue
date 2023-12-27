<template>
  <section>
    <div class="container">
      <div v-if="loading" class="projects-loader">
        <Icon name="svg-spinners:90-ring-with-bg" size="48" />
      </div>
      <div class="project-wrapper" v-else>
        <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const { data: projects } = await useWpApi().getProjects();
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 2300);
});
useHead({
  title: 'All Projects',
  meta: [
    {
      name: 'description',
      content:
        'Nuxt Apps, Wordpress Websites, Wordpress Landing and more',
    },
  ],
});
</script>

<style scoped>
.projects-loader {
  @apply flex flex-col justify-center items-center min-h-screen;
}
.project-wrapper {
  @apply grid
        gap-8
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        place-items-center;
}
</style>
