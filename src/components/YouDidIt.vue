<script setup>
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
     v-model="message"
     @change="console.log('Text changed')" 
     @input="console.log('You have typed: ' + $event.target.value)"
     @keydown="console.log('Key pressed: ' + $event.key)"></input>
</template>