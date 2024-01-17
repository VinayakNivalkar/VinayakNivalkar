//@ts-ignore
import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [vsharp()],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@nuxt/image"
  ]
})