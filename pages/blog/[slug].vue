<script lang="ts" setup>
const params = useRoute().params;

const { data: posts } = await useWpApi().getPost(params.slug as string);
const post = posts.value[0];
</script>
<template>
  <Head>
    <Title> {{ post.title.rendered }} </Title>
    <Meta
      name="description"
      :content="
        post.excerpt.rendered.replace(/<\/?p[^>]*>/g, '').split('.')[0] + '.'
      "
    />
  </Head>
  <article class="post">
    <div class="sm:px-20">
      <!-- Blog Title  -->
      <h1 class="post-title">
        {{ post.title.rendered }}
      </h1>
      <!-- Blog Meta  -->
      <div class="post-meta">
        <span
          >Written by:
          <span class="text-primary-500">{{
            post._embedded['author'][0]?.name
          }}</span></span
        >

        <span
          >Published on:
          <span class="text-primary-500">{{ post.date }}</span></span
        >
      </div>
      <!-- Blog Image  -->
      <div class="post-image pb-6">
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          :alt="post.title.rendered"
          class="w-full"
        />
      </div>
      <div class="post-content" v-html="post.content.rendered"></div>
    </div>
  </article>
</template>
<style scoped>
.post {
  @apply py-14 max-w-5xl mx-auto;
}
.post-meta {
  @apply flex my-10 justify-center gap-5;
}
.post-title {
  @apply text-3xl
          sm:text-5xl
          font-bold
          text-center
          leading-snug
          mb-5;
}
article.post-content p {
  color: red;
}
.post .wp-block-heading {
   @apply py-3;
}
</style>
