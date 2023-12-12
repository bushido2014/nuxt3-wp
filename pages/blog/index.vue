<template>
  <div class="container py-8">
    <div class="flex gap-10 w-full md:flex-row flex-col">
      <main class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full md:w-3/4">
        <BlogGrid
          v-for="post in displayedPosts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
        ></BlogGrid>
      </main>
      <aside class="w-full md:w-1/4">
        <CategoriesList />
      </aside>
    </div>
    <div class="py-6 text-center">
      <vue-awesome-paginate
        :total-items="totalPosts"
        :items-per-page="itemsPerPage"
        v-model="currentPage"
        :max-pages-shown="2"
        :on-click="onClickHandler"
        paginate-buttons-class="icon"
        active-page-class="active"
        next-button-class="next"
      />
    </div>
    <div ref="top"></div>
  </div>
</template>
<script lang="ts" setup>
import useWpApi from '~~/composables/useWpApi';
import { ref, computed, onMounted } from 'vue';
const currentPage = ref(1);
const itemsPerPage = 4;

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Blog Page',
    },
  ],
  titleTemplate: 'Wp Blog - %s',
});
const { data: posts } = await useWpApi().getPosts();

const onClickHandler = (page) => {
  currentPage.value = page;
  scrollToTop();
};

const totalPosts = computed(() => {
  if (Array.isArray(posts.value)) {
    return posts.value.length;
  } else {
    return 0;
  }
});

const displayedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return Array.isArray(posts.value)
    ? posts.value.slice(startIndex, endIndex)
    : [];
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  scrollToTop();
});
</script>
