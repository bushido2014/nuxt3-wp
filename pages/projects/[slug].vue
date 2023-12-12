<template>
  <Head>
    <Title> {{ project.title.rendered }} </Title>
    <Meta
      name="description"
      :content="
        project.excerpt.rendered.replace(/<\/?p[^>]*>/g, '').split('.')[0] + '.'
      "
    />
  </Head>
  <div class="single-project__wrapp">
    <article class="single-project" v-if="project">
      <div class="single-project__link">
        <NuxtLink to="/projects" class="back"
          ><span
            ><Icon name="system-uicons:chevron-left-double" size="32"
          /></span>
          Back to All Projects
        </NuxtLink>
      </div>
      <div class="single-project__title">
        <h1>
          {{ project.title.rendered }}
        </h1>
      </div>
      <div class="single-project__img">
        <img :src="project.featured_media_src_url" />
      </div>

      <div
        v-if="project.content"
        class="single-project__content"
        v-html="project.content.rendered"
      ></div>
    </article>
  </div>
</template>
<script lang="ts" setup>
const params = useRoute().params;

const { data: projects } = await useWpApi().getProject(params.slug as string);
const project = projects.value[0];
</script>
<style scoped>
.single-project__wrapp {
  @apply py-14 max-w-5xl mx-auto;
}
.single-project__title {
  @apply py-6;
}
.single-project__img {
  @apply mb-5;
}
.back {
  @apply font-semibold text-sky-700;
}
</style>
