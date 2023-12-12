<template>
  <HomeHero />
  <Skills />
  <section class="home-projects">
    <div class="section_title">
      <h2>Projects</h2>
    </div>
    <div class="container">
      <div class="project-list">
        <NuxtLink
          v-for="(project, i) in projects.slice(0, 3)"
          :key="i"
          :to="`/projects/${project.slug}/`"
          class="project-list__card"
        >
          <ProjectList :project="project" />
          <div class="project-list__info">
            <div><Icon name="mi:external-link" size="48" /></div>
          </div>
        </NuxtLink>
      </div>
      <div class="project-list-link">
        <NuxtLink to="/projects" class="button lg">View All Projects </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const { data: projects } = await useWpApi().getProjects();
</script>
<style scoped>
.project-list__card {
  @apply rounded-md relative overflow-hidden;
}

.project-list-link {
  @apply py-12 text-center;
}
.project-list {
  @apply grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-5;
}
.project-list__info {
  @apply text-white absolute top-[20px] right-[20px] opacity-0 transition-opacity duration-500;
}
.project-list__card:hover .project-list__info {
  opacity: 1;
}
</style>
