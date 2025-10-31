<script setup>
const props = defineProps(['startCount'])

import { ref } from 'vue'
const counter = ref(props.startCount)
const incrementCounter = () => {
  counter.value++
}
</script>

<template>
  <h3>Counter</h3>
  <!-- {{ startCount }} -->
  <button @click="counter++">Increment v1</button>
  <button @click="incrementCounter">Increment v2</button>
  <div>{{ counter }}</div>
</template>