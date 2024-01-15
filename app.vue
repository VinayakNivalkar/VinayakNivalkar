<template>
  <div class="relative isolate overflow-x-hidden w-screen h-screen flex md:flex-row flex-col">
    <div class="transition-all ease-in-out delay-100 duration-300 absolute flex bg-[url('~/assets/jpg/me_at_beach.jpg')] w-full h-full md:blur-none blur-sm bg-cover md:opacity-100 opacity-10 md:w-1/2">
      <img :src="MeAtBeach" class="flex md:self-auto self-center object-cover w-full invisible md:visible">
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
import PxlAvatarVar1 from 'assets/svg/PxlAvatarVar1.svg';
import favicon from 'assets/favicon.ico';
import MeAtBeach from 'assets/jpg/me_at_beach.jpg';

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
  ogImage: PxlAvatarVar1,
  ogUrl: 'https://vnyk.me',
  twitterTitle: 'Vinayak Nivalkar',
  twitterDescription: 'Personal Blog',
  twitterImage: PxlAvatarVar1,
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg',
      href: favicon,
    }
  ]
})
</script>