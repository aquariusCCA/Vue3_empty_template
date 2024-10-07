<template>
  <div class="text-center bg-blue-500 text-white p-6">
    <h1 class="text-2xl font-bold">Welcome to Vue 3 with Tailwind CSS</h1>
    <button class="mt-4 bg-white text-blue-500 py-2 px-4 rounded-lg">Click Me</button>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

axios
  .get('https://fakestoreapi.com/products/1')
  .then((response) => {
    console.log('Data:', response.data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
</script>
