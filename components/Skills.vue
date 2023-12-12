<template>
  <section>
    <div class="container">
      <div class="skills">
        <template v-for="(icon, index) in icons" :key="index">
          <Icon :name="icon" class="icon-dev" />
        </template>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const icons = [
  'skill-icons:html',
  'skill-icons:css',
  'skill-icons:bootstrap',
  'skill-icons:tailwindcss-dark',
  'skill-icons:javascript',
  'skill-icons:jquery',
  'skill-icons:vuejs-dark',
  'skill-icons:nuxtjs-dark',
  'skill-icons:php-dark',
  'skill-icons:wordpress',
  'skill-icons:mysql-dark',
  'skill-icons:github-dark',
];
</script>
<style scoped>
.skills {
  @apply grid gap-8 
grid-cols-2 
lg:grid-cols-4 
place-items-center;
}
.icon-dev {
  @apply w-28 h-28 
cursor-pointer 
my-4 transition-all 
duration-500 hover:scale-125;
}
</style>
