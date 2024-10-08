<template>
  <h1>{{ personStore.name }}</h1>
  <button @click="updateName">點我修改</button>
</template>

<script lang="ts" setup>
import { usePersonStore } from './stores/person';
import axios from 'axios';

const personStore = usePersonStore();
console.log(personStore);

function updateName() {
  personStore.name = 'jack';
}

const newData = {
  mode: 'test',
  name: 'New Item',
  value: 42
};

axios
  .post('https://api.example.com/userDetail', newData)
  .then((response) => {
    console.log('Data created:', response);
  })
  .catch((error) => {
    console.error('Error creating data:', error);
  });
</script>

<style lang="scss">
.test {
  width: 100%;
  height: 200px;
  font-size: 20px;
  background-color: skyblue;
}
</style>
