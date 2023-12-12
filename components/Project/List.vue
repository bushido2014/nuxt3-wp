<template>
  <div
    class="project-list__img"
    v-bind:style="{
      'background-image': 'url(' + project.featured_media_src_url + ')',
    }"
  ></div>
</template>
<script setup lang="ts">
defineProps(['project']);
</script>
<style scoped>
.project-list__img {
  @apply h-[280px] bg-no-repeat 
bg-center bg-cover 
transition duration-300 relative;
}
.project-list__img {
  @apply before:content-['']
before:absolute
before:top-0
before:left-0
before:right-0
before:bottom-0 
before:transition 
before:duration-500  
before:opacity-60 
before:bg-slate-800;
}
.project-list__card:hover .project-list__img::before {
  opacity: 0.85;
}
</style>
