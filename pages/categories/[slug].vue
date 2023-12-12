<script lang="ts" setup>
const params = useRoute().params;
const { data: categories, error } = await useWpApi().getCatgory(
  params.slug as string
);
const category = categories.value[0];
const { data: posts, error: postsError } = await useWpApi().getPosts(
  category.id
);
useHead({
  title: `Category - ${category.name}`,
  meta: [
    {
      name: 'description',
      content: ` ${params.slug}`,
    },
  ],
});
</script>

<template>
  <div class="container py-8 archive">
    <div class="grid sm:grid-cols-3 gap-10">
      <BlogGrid
        v-for="post in posts"
        :key="post.id"
        :title="post.title.rendered"
        :image="post._embedded['wp:featuredmedia'][0]?.source_url"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
      ></BlogGrid>
    </div>
  </div>
</template>
