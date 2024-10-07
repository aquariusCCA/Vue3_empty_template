<script setup lang="ts">
import { sub } from './test';
console.log(sub);
defineProps({
/* ✓ GOOD */
msg: String,
greetingText: String
/* ✗ BAD */
// 'greeting-text': String,
});

function add() {
  return 1+1
}
let x=add()
console.log(x)
</script>

<template>
<!-- ✓ GOOD -->
<ol v-for="i in 5" :key="i">
<li>{{ i }}</li>
</ol>

  <!-- ✗ BAD -->
  <!-- <ol v-for="i in 5">
<li>item</li>
</ol> -->
</template>

<style scoped>
.logo {
height: 6em;padding: 1.5em;
will-change: filter;
transition: filter 300ms;
}

.logo:hover {
filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
