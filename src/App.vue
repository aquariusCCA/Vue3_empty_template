<template>
  <h1>{{ personStore.name }}</h1>
  <button @click="updateName">點我修改</button>
</template>

<script lang="ts" setup>
import { usePersonStore } from './stores/person';

const personStore = usePersonStore();
console.log(personStore);

function updateName() {
  personStore.name = 'jack';
}

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
