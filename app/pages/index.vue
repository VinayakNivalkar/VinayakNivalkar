<template>
  <div>
    <div class="mt-20 pt-60">
      <NuxtImg class="object-fill h-96 w-96" v-bind:src="SelectedPxlArt" alt=""/>
      <div class="invisible" v-for="item in PxlArtArr">
        <NuxtImg class="w-0 h-0" :src="item" alt=""/>
      </div>
    </div>
    <div class="w-max m-auto mb-5 px-2 py-1 bg-red-50 hover:bg-red-100 cursor-pointer" @click="switchPxlArt">
      <h1 class="font-serif font-extrabold text-3xl text-gray-800">Vinayak Nivalkar</h1>
    </div>
    <div class="w-full p-5 flex flex-col items-center">
      <p class=" font-mono italic text-sm">I like Innovating</p>
      <p class="font-mono italic text-sm">I don't talk much</p>
      <p class="font-mono italic text-sm">But I do like Collaborating</p>
    </div>
    <div class=" w-full p-5 flex flex-col items-center">
      <p class="font-sans font-semibold text-sm">Have an Idea 💭 or Just wanna say Hii 👋</p>
      <p class="font-sans font-semibold text-sm">Here's how you can reach me</p>
      <div class="grid grid-cols-4 my-2">
        <a href="mailto:hello@vnyk.me" aria-label="Primary Email" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-3">
          <Icon name="mdi:email" class="flex-none size-5" />
          <p class="font-bold font-sans text-xs md:text-sm mx-1">hello@vnyk.me</p>
        </a>
        <a target="_blank" aria-label="LinkedIn Link" href="https://in.linkedin.com/in/vinayak-nivalkar-5988a519a" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-1">
          <Icon name="uil:linkedin" class="flex-none size-5" />
        </a>
        <a href="mailto:vinayaknivalkar2002@gmail.com" aria-label="Secondary Email" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-gradient-to-r from-green-500 to-blue-500 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-4">
          <Icon name="mdi:email" class="flex-none size-5" />
          <p class="font-bold font-sans text-xs md:text-sm mx-1">vinayaknivalkar2002@gmail.com</p>
        </a>
        <a target="_blank" aria-label="Github Link" href="https://github.com/VinayakNivalkar" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-gradient-to-r from-black to-gray-600 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-1">
          <Icon name="uil:github" class="flex-none size-5" />
        </a>
        <a href="tel:+918433527267" aria-label="Phone Number" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-gradient-to-r from-red-500 to-pink-500 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-3">
          <Icon name="mdi:phone" class="flex-none size-5" />
          <p class="font-bold font-sans text-xs md:text-sm mx-1">+91 8433527267</p>
        </a>
        <p class="col-span-4 text-center my-5">OR</p>
        <p class="col-span-4 text-left mx-3 my-1">Send a Message</p>
        <SendMessage/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const PxlArtArr = [
  '/svg/PxlAvatarVar1.svg',
  '/svg/PxlAvatarVar2.svg',
]
let SelectedPxlArt = ref(PxlArtArr[0]);

function switchPxlArt() {
  SelectedPxlArt.value = SelectedPxlArt.value === PxlArtArr[0] ? PxlArtArr[1] : PxlArtArr[0];
}
</script>
