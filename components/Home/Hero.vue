<template>
  <section
    class="hero"
    style="background-image: url('https://i.postimg.cc/7LTmfKWv/hero.jpg')"
  >
    <div class="hero-content">
      <h1 class="hero-title">Viorel Soltan</h1>
      <p class="hero-text">Full-Stack Developer</p>
    </div>
  </section>
</template>
<style scoped>
.hero {
  @apply w-full relative bg-cover bg-no-repeat bg-center min-h-screen;
}

.hero {
  @apply before:content-['']
before:absolute
before:top-0
before:left-0
before:right-0
before:bottom-0
before:opacity-60 
before:bg-slate-800;
}
.hero-content {
  @apply flex flex-col
 z-10 text-white
 gap-12 text-center
 relative justify-center
items-center py-16 px-8 min-h-screen;
}
.hero-title {
  @apply text-5xl md:text-7xl mb-4 text-white;
}
.hero-text {
  @apply text-4xl;
}
</style>
