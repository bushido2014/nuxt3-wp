<template>
  <header class="site-header">
    <div class="container">
      <NuxtLink to="/" class="text-xl md:text-2xl font-medium"
        >Nuxt 3 WP</NuxtLink
      >
      <nav class="nav">
        <ul class="menu">
          <li>
            <NuxtLink to="/"><span>Home</span></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog"><span>Blog</span></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact"><span>Contact</span></NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="md:hidden">
        <Icon
          name="nimbus:menu"
          size="32"
          @click="isOpen = true"
          class="cursor-pointer"
        />
      </div>
      <USlideover v-model="isOpen">
        <div class="p-5">
          <div class="p-1 text-left">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="closeMenu"
            />
            <span class="font-medium ml-2 text-lg">Menu</span>
          </div>

          <ul class="mobile-menu border-t py-4">
            <li>
              <NuxtLink :to="`/`" class="mobile-menu__link"> Home </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/blog`" class="mobile-menu__link">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="`/contact`" class="mobile-menu__link">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
      </USlideover>
    </div>
  </header>
</template>
<script setup>
const isOpen = ref(false);
const closeMenu = () => {
  isOpen.value = false;
};
</script>
<style scoped>
.nav {
  @apply md:flex items-center hidden;
}
.mobile-menu {
  @apply list-none;
}
.mobile-menu__link {
  @apply transition duration-300 hover:text-sky-700;
}
</style>
