<template>
  <div class="relative isolate overflow-x-hidden w-screen h-screen flex md:flex-row flex-col">
    <div class="transition-all ease-in-out delay-100 duration-300 absolute flex bg-[url('/jpg/me_at_beach_mini.jpeg')] md:bg-none bg-center w-full h-full md:blur-none blur-sm bg-cover md:opacity-100 opacity-10 md:w-1/2">
      <NuxtImg alt="" height="1440px" quality="70" src="/jpg/me_at_beach.jpg" format="webp" class="flex md:self-auto self-center object-cover w-full invisible md:visible"/>
    </div>
    <div class="transition-all ease-in-out delay-100 duration-300 absolute bg-transparent flex flex-col items-center justify-center w-screen h-screen overflow-y-scroll md:right-0 pt-60 md:w-1/2">
      <NuxtPage />
    </div>
    <div class="md:visible invisible absolute bottom-0 left-0 right-0 bg-black p-3 text-white">
      <div class="grid col-span-3 justify-center">
        <p class="font-mono text-xs"><Icon name="uil:copyright"></Icon> Vinayak Nivalkar | All rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
let SelectedPage = ref(route.path);

watch(() => route.path, () => {
  SelectedPage.value = route.path;
})

useSeoMeta({
  title: 'Vinayak Nivalkar',
  description: 'Personal Blog',
  ogTitle: 'Vinayak Nivalkar',
  ogDescription: 'Personal Blog',
  ogImage: '/svg/PxlAvatarVar1.svg',
  ogUrl: 'https://vnyk.me',
  twitterTitle: 'Vinayak Nivalkar',
  twitterDescription: 'Personal Blog',
  twitterImage: '/svg/PxlAvatarVar1.svg',
  twitterCard: 'summary'
})

useHead({
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png?v=1'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png?v=1'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png?v=1'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest?v=1'
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg?v=1',
      color: '#000000'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico?v=1'
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg?v=1'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png?v=1'
    }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#00aba9'
    },
    {
      name: 'theme-color',
      content: '#ffffff'
    }
  ]
})
</script>