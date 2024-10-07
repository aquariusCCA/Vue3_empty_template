<template>
  <!-- 展示区 -->
  <RouterView></RouterView>
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
