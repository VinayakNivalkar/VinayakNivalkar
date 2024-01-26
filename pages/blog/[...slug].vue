<template>
  <div class="w-full h-full md:p-20 p-10">
    <ContentDoc>
      <template v-slot="{doc}">
        <div class="flex flex-row items-center my-10 md:my-auto">
          <button aria-label="back" class="rounded-full bg-black text-white min-w-14 min-h-14 md:min-h-0 md:min-w-0 md:size-0 size-auto" @click="() => router.back()">
            <Icon class="md:invisible visible size-8" name="ic:round-arrow-back-ios" />
          </button>
          <BreadCrumb class="md:visible invisible md:size-auto size-0">{{ doc.title }}</BreadCrumb>
          <p class="grow font-mono text-sm line-clamp-1 font-extralight text-gray-500 text-right">Published <span class="text-black">{{ format(new Date(doc.publishedOn), 'MMM do, yyyy') }}</span></p>
        </div>
        <BlogTitle>{{ doc.title }}</BlogTitle>
        <BlogDescription>{{ doc.description }}</BlogDescription>
        <ContentRenderer class="my-10 border-t-slate-300 border-t py-10" :value="doc" />
      </template>
      <template #empty>
        <div class="h-full flex flex-col justify-center items-center">
          <Icon name="iconoir:file-not-found" class="md:size-40 size-20 md:text-slate-400 text-gray-600" />
          <h1 class="md:text-6xl text-2xl font-bold font-serif m-10 md:text-slate-600 text-black text-center">This Blog doesn't Exist</h1>
          <button v-on:click="() => router.replace('/blog')" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:saturate-150 px-2.5 py-2.5 rounded-lg m-2 scale-125 hover:scale-150">
            <p class="font-bold font-sans text-xs md:text-sm mx-1">Go To Blogs</p>
          </button>
        </div>
      </template>
    </ContentDoc>
    <div class="p-10"></div>
  </div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';

const router = useRouter();
</script>