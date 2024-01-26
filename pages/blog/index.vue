<template>
  <div class="w-full h-full py-20 px-10 md:px-20">
    <h1 class="font-serif font-extrabold text-gray-800 text-7xl">Blog</h1>
    <div class="flex flex-wrap py-10 pb-20">
      <ContentList path="/blog" v-slot="{ list }">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <NuxtLink v-for="item in list" :key="item._path" :to="item._path" class="md:min-w-80 min-w-60 w-full shadow-xl rounded-xl overflow-hidden border-black/10 border bg-white">
            <NuxtImg :src="item.image" class="aspect-video w-full object-cover object-center" />
            <div class="py-5 px-5">
              <h2 class="font-serif text-xl font-semibold">{{ item.title }}</h2>
              <p class="font-mono text-sm line-clamp-1">{{ item.description }}</p>
              <p class="font-mono text-xs line-clamp-1 font-extralight text-gray-500 mt-2">{{ format(new Date(item.publishedOn), 'MMM do, yyyy') }}</p>
            </div>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
</script>
