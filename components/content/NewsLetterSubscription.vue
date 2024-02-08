<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
  >
    <div class="flex flex-col justify-center items-center lg:px-10 px-5 py-20 border border-slate-200 rounded-3xl bg-white shadow-lg lg:m-20 m-0">
      <Icon name="quill:inbox-newsletter" class="size-24 mt-10" />
      <h1 class="md:text-4xl text-2xl font-serif font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text py-2 m-10 saturate-150 text-center">Subscribe for Blogs and Projects</h1>
      <div class="flex xl:flex-row flex-col w-full xl:w-2/3">
        <div class="transition-all duration-200 delay-100 ease-in-out flex grow items-center rounded-lg shadow-sm m-2 ring-1 ring-inset md:ring-gray-300 ring-gray-400 focus-within:ring-2 focus:ring-inset focus-within:ring-gray-600 outline-gray-900">
          <Field
            type="email"
            name="email"
            placeholder="Email"
            class="block flex-1 bg-inherit border-0 text-gray-900 ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none p-2"
          />
          <ErrorMessage name="email" as="span" v-slot="{ message }" class="group relative isolate flex h-full items-center cursor-pointer">
            <Icon name="uil:exclamation" class="text-red-400 size-8" />
            <div class="transition-all ease-in-out delay-100 duration-300 p-2 h-auto right-0 top-0 bg-white absolute group-hover:opacity-100 opacity-0 group-hover:visible invisible rounded-lg outline outline-red-200 text-red-400 w-max" >
              <p class="font-mono text-sm">{{ message }}</p>
            </div>
          </ErrorMessage>
        </div>
        <button aria-label="submit" class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-black hover:bg-gray-900 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-1 shadow-sm">
          <Icon v-if="ShouldShowSpinner" name="svg-spinners:90-ring-with-bg" class="flex-none size-5" />
          <span v-if="ShouldShowSpinner" class="text-md font-mono px-2">Loading</span>
          <span v-else class="text-md font-mono px-2">Subscribe</span>
        </button>
      </div>
    </div>
  </Form>
  <div v-if="!ShouldHideModal" class="transition-all ease-in-out delay-100 duration-300 fixed left-0 right-0 bottom-0 top-0 backdrop-blur-md flex justify-center items-center z-10" @click="hideModal" v-bind:class="(ShouldShowModal ? 'opacity-100' : 'opacity-0')">
    <div class="bg-white p-10 shadow-2xl rounded-xl justify-center items-center flex flex-col">
      <Icon name="bi:envelope-check" class="size-14 py-1 pr-1" />
      <p class="font-mono text-xl mt-2">Subscribed</p>
      <p class="font-mono text-sm">You will recieve Blogs and Project Updates in your mail</p>
      <p class="font-mono text-xs mt-5"><Icon name="tabler:hand-click" class="size-5"/> Click anywhere to close</p>
    </div>
  </div>
  <div v-if="!ShouldHideErrModal" class="transition-all ease-in-out delay-100 duration-300 fixed left-0 right-0 bottom-0 top-0 backdrop-blur-md flex justify-center items-center z-10" @click="hideErrModal" v-bind:class="(ShouldShowErrModal ? 'opacity-100' : 'opacity-0')">
    <div class="bg-white p-10 shadow-2xl rounded-xl justify-center items-center flex flex-col">
      <Icon name="bi:envelope-x" class="size-14 py-1 pr-1" />
      <p class="font-mono text-xl mt-2 text-center">Unable to Subscribe</p>
      <p class="font-mono text-sm text-center">An Unknown Error Occured, You can reach me by my social handles</p>
      <p class="font-mono text-xs mt-5"><Icon name="tabler:hand-click" class="size-5"/> Click anywhere to close</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as yup from 'yup';

let ShouldShowSpinner = ref(false);

let ShouldShowModal = ref(false);
let ShouldHideModal = ref(true);

let ShouldShowErrModal = ref(false);
let ShouldHideErrModal = ref(true);

const schema = yup.object({
  email: yup.string().required().email(),
})

async function onSubmit(values: any) {
  ShouldShowSpinner.value = true;
  
  const response = await submitApi(values);

  ShouldShowSpinner.value = false;

  if (response.status.value === 'success') {
    showModal();
  } else {
    showErrModal();
  }
}

async function submitApi(values: any) {
  const response = await useFetch('https://api.vnyk.me/v1/newsletters/subscribers', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      email: values.email
    })
  })
  
  return response;
}

function hideModal() {
  ShouldShowModal.value = false;
  setTimeout(() => {
    ShouldHideModal.value = true;
  }, 400);
}

function showModal() {
  ShouldHideModal.value = false;
  setTimeout(() => {
    ShouldShowModal.value = true;
  }, 100);
}

function hideErrModal() {
  ShouldShowErrModal.value = false;
  setTimeout(() => {
    ShouldHideErrModal.value = true;
  }, 400);
}

function showErrModal() {
  ShouldHideErrModal.value = false;
  setTimeout(() => {
    ShouldShowErrModal.value = true;
  }, 100);
}
</script>
