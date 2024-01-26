// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  site: {
    url: 'https://vnyk.me',
    name: 'Vinayak Nivalkar',
    description: 'Personal Blog',
    defaultLocale: 'en',
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/seo"
  ]
})
