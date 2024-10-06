<script setup lang="ts">
import { ref, shallowRef, type Ref } from 'vue'

/* ✗ BAD */
const count = ref() // Returns Ref<any> that is not type checked
count.value = '50' // Should be a type error, but it is not

const count = shallowRef()

/* ✓ GOOD */
// const count = ref<number>()
// const count = ref(0)
// const count: Ref<number | undefined> = ref()
</script>

<template>
    <!-- ✓ GOOD -->
    <!-- <ol v-for="i in 5">
        <li>{{ i }}</li>
    </ol> -->

    <!-- ✗ BAD -->
    <ol v-for="i in 5">
        <li>item</li>
    </ol>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
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
