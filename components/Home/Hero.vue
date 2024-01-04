<template>
  <section
    class="hero"
    
  >
    <div class="hero-content">
      <h1 class="hero-title">Viorel Soltan</h1>
      <p class="hero-text">Full-Stack Developer</p>
    </div>
    <div class="down-wrapp pb-6 text-center">
        <NuxtLink to="#skills">
          <Icon
            name="ph:caret-double-down-light"
            class="down-con animate-bounce"
            size="52"
          />
        </NuxtLink>
      </div>
  </section>
</template>
<style scoped>
.hero {
  @apply bg-gradient-to-b from-slate-700 to-sky-950 min-h-screen z-10 relative;
}


.hero-content {
  @apply flex flex-col
 z-10 text-white
 gap-12 text-center
 relative justify-center
items-center p-6 min-h-screen;
animation: fadeIn 5s;
}
.hero-title {
  @apply text-5xl md:text-7xl mb-4 text-white;
}
.hero-text {
  @apply text-4xl;
}
.down-con {
  @apply text-white cursor-pointer;
}
  
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
