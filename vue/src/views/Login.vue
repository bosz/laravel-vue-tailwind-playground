<template lang="">
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
    <div v-if="errorMsg" class="py-3 px-5 bg-red-500 text-white rounded flex items-center justify-between">
      {{ errorMsg }}
      <span @click="errorMsg = ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgb(0,0,0,0.2)]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </span>
      </div>
    <form class="space-y-6" action="POST" @submit="login">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="remember" class="block text-sm font-medium leading-6 text-gray-900">Remember me</label>
        </div>
        <div class="mt-2">
          <input v-model="user.remember" id="remember" name="remember" type="checkbox" autocomplete="remember" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?
      {{ ' ' }}
      <router-link :to="{name: 'Register'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create a free account</router-link>
    </p>
  </div>
</template>

<script setup>
import store from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const user = {
  email: '',
  password: '',
  remember: false,
}
let errorMsg = ref('');

const login = (ev) => {
  ev.preventDefault();
  store.dispatch('login', user)
    .then(res => {
      router.push({ name: 'Dashboard' })
    })
    .catch(err => {
      console.log({err})
      errorMsg.value = err.response?.data?.message;
    })
}
</script>
<style lang="">
    
</style>