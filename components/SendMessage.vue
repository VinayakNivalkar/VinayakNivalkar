<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    class="col-span-full grid grid-cols-4"
  >
    <div class="flex rounded-lg shadow-sm m-2 col-span-4 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus:ring-inset focus-within:ring-gray-600 focus-within:outline-dashed focus-within:outline-offset-4 outline-gray-900">
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
    <div class="flex rounded-lg shadow-sm m-2 col-span-4 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus:ring-inset focus-within:ring-gray-600 focus-within:outline-dashed focus-within:outline-offset-4 outline-gray-900">
      <Field
        type="text"
        as="textarea"
        name="message"
        placeholder="Message"
        class="block flex-1 bg-inherit border-0 text-gray-900 ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none p-2"
      />
      <ErrorMessage name="message" as="span" v-slot="{ message }" class="group relative isolate flex h-full items-center cursor-pointer">
        <Icon name="uil:exclamation" class="text-red-400 size-8" />
        <div class="transition-all ease-in-out delay-100 duration-300 p-2 h-auto right-0 top-0 bg-white absolute group-hover:opacity-100 opacity-0 group-hover:visible invisible rounded-lg outline outline-red-200 text-red-400 w-max" >
          <p class="font-mono text-sm">{{ message }}</p>
        </div>
      </ErrorMessage>
    </div>
    <div class="flex rounded-lg shadow-sm m-2 col-span-3 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus:ring-inset focus-within:ring-gray-600 focus-within:outline-dashed focus-within:outline-offset-4 outline-gray-900">
      <Field
        type="name"
        name="name"
        placeholder="Name"
        class="block flex-1 bg-inherit border-0 text-gray-900 ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none p-2"
      />
      <ErrorMessage name="name" as="span" v-slot="{ message }" class="group relative isolate flex h-full items-center cursor-pointer">
        <Icon name="uil:exclamation" class="text-red-400 size-8" />
        <div class="transition-all ease-in-out delay-100 duration-300 p-2 h-auto right-0 top-0 bg-white absolute group-hover:opacity-100 opacity-0 group-hover:visible invisible rounded-lg outline outline-red-200 text-red-400 w-max" >
          <p class="font-mono text-sm">{{ message }}</p>
        </div>
      </ErrorMessage>
    </div>
    <button class="transition-all ease-in-out duration-250 delay-100 flex flex-row justify-center items-center bg-black hover:bg-gray-900 text-white hover:saturate-150 hover:scale-[110%] px-2.5 py-2.5 rounded-lg m-2 col-span-1 shadow-sm">
      <Icon v-if="ShouldShowSpinner" name="svg-spinners:90-ring-with-bg" class="flex-none size-5" />
      <Icon v-else name="iconoir:send-diagonal-solid" class="flex-none size-5" />
    </button>
  </Form>
  <div v-if="!ShouldHideModal" class="transition-all ease-in-out delay-100 duration-300 fixed left-0 right-0 bottom-0 top-0 backdrop-blur-md flex justify-center items-center z-10" @click="hideModal" v-bind:class="(ShouldShowModal ? 'opacity-100' : 'opacity-0')">
    <div class="bg-white p-10 shadow-2xl rounded-xl justify-center items-center flex flex-col">
      <Icon name="iconoir:send-diagonal-solid" class="size-14 py-1 pr-1" />
      <p class="font-mono text-xl mt-2">Message Sent</p>
      <p class="font-mono text-sm">I'll get back to you as soon as possible</p>
      <p class="font-mono text-xs mt-5"><Icon name="tabler:hand-click" class="size-5"/> Click anywhere to close</p>
    </div>
  </div>
  <div v-if="!ShouldHideErrModal" class="transition-all ease-in-out delay-100 duration-300 fixed left-0 right-0 bottom-0 top-0 backdrop-blur-md flex justify-center items-center z-10" @click="hideErrModal" v-bind:class="(ShouldShowErrModal ? 'opacity-100' : 'opacity-0')">
    <div class="bg-white p-10 shadow-2xl rounded-xl justify-center items-center flex flex-col">
      <Icon name="bi:send-x-fill" class="size-14 py-1 pr-1" />
      <p class="font-mono text-xl mt-2 text-center">Unable to Send Message</p>
      <p class="font-mono text-sm text-center">An Unknown Error Occured, You can reach me by my social handles</p>
      <p class="font-mono text-xs mt-5"><Icon name="tabler:hand-click" class="size-5"/> Click anywhere to close</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as yup from 'yup';

let ShouldShowModal = ref(false);
let ShouldHideModal = ref(true);
let ShouldShowSpinner = ref(false);

let ShouldShowErrModal = ref(false);
let ShouldHideErrModal = ref(true);

const schema = yup.object({
  name: yup.string().required().max(16),
  message: yup.string().required().max(128),
  email: yup.string().required().email(),
})

const web3forms_access_key = process.env.WEB3FORMS_ACCESS_KEY;

async function onSubmit(values: any) {
  ShouldShowSpinner.value = true;
  
  const response = await submitweb3(values);

  ShouldShowSpinner.value = false;

  if (response.success) {
    showModal();
  } else {
    showErrModal();
  }
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

async function submitweb3(values: any) {
  const response = await $fetch('https://api.web3forms.com/submit', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: web3forms_access_key,
      name: values.name,
      email: values.email,
      message: values.message,
    }),
  })

  return response as any;
}
</script>
