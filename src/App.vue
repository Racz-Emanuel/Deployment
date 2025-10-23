<script setup>
import { onMounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('App mounted')
})

onUpdated(() => {
  console.log('App updated')
})

import { ref } from 'vue'
const message = ref("Hello from Vue!")

const clickHandler = () => {
  message.value = "Button clicked!"
}
</script>

<template>
  <h1>You did it!</h1> 
  <button @click="clickHandler">Click me</button>
  <p>{{ message }}</p>
  <br>
  <input type="text" 
     @change="console.log('Text changed')" 
     @input="console.log('You have typed: ' + $event.target.value)"
     @keydown="console.log('Key pressed: ' + $event.key)"></input>
</template>

<style scoped></style>
