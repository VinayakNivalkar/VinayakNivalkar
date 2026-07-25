import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  site: {
    url: 'https://vnyk.me',
    name: 'Vinayak Nivalkar',
    description: 'Personal Blog',
    defaultLocale: 'en',
    trailingSlash: true
  },
  css: ['~/assets/css/main.css'],
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: true
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  icon: {
    mode: 'svg',
    provider: 'none',
    clientBundle: {
      scan: true,
      icons: [
        'bi:envelope-check',
        'bi:envelope-x',
        'bi:send-x-fill',
        'fluent-emoji-flat:crossed-fingers',
        'fluent-emoji-flat:party-popper',
        'fluent-emoji-flat:victory-hand',
        'ic:round-arrow-back-ios',
        'ic:round-keyboard-arrow-right',
        'iconoir:file-not-found',
        'iconoir:send-diagonal-solid',
        'mdi:email',
        'mdi:phone',
        'quill:inbox-newsletter',
        'svg-spinners:90-ring-with-bg',
        'tabler:hand-click',
        'uil:copyright',
        'uil:exclamation',
        'uil:github',
        'uil:linkedin'
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    '@nuxtjs/seo'
  ]
})
