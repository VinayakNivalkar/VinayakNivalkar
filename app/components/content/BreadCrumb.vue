<template>
  <div class="flex items-center md:py-10 py-2 md:-translate-x-0 -translate-x-2"> 
    <NuxtLink to="/blog" class="transition-all ease-in-out delay-100 duration-200 font-mono py-1 px-2 text-blue-400 border rounded-lg border-transparent hover:border-blue-400">Blog</NuxtLink>
    <Icon class="font-mono py-1 text-slate-600 size-8" name="ic:round-keyboard-arrow-right"/>
    <p class="font-mono py-1 px-2 text-slate-600 cursor-not-allowed"><slot /></p>
  </div>
</template>

<script lang="ts" setup>

</script>
