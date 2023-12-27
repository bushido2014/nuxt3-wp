// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxt/ui', 'nuxt-icon'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt Fullstack Wordpress',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },
  runtimeConfig: {
    public: {
      wpBlog: process.env.WP_BLOG,
    },
  },
  routeRules: {
    '/categories': { redirect: '/blog' },
  },

  site: {
    url: 'https://nuxt3-blogwp.vercel.app',
  },
  
});
