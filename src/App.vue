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
const link = ref("https://emanuel.ro")
const target = ref("_blank")

const clickHandler = () => {
  message.value = "Button clicked!"
}

const randomNumber = ref(null)
const updateRandomNumber = () => {
  randomNumber.value = Math.random()
}

const counter = ref(0)
const incrementCounter = () => {
  counter.value++
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
  <br>
  <a :href="link" :target="target">Visit Emanuel website</a>
  <br>
  <hr>
  <h3>Display a random number</h3>
  <button @click="updateRandomNumber">Get a random number {{ randomNumber }}</button>
  <div v-if="randomNumber">
    <div v-if="randomNumber >= 0.5">Number is bigger or equal than 0.5</div>
    <div v-else>Number is lower than 0.5</div>
  </div>
  <br>
  <div v-if="randomNumber && randomNumber >= 0.5">Number is bigger or equal than 0.5</div>
  <div v-else-if="randomNumber">Number is lower than 0.5</div>
  <br>
  <hr>
  <h3>Counter</h3>
  <button @click="counter++">Increment v1</button>
  <button @click="incrementCounter">Increment v2</button>
  <div>{{ counter }}</div>
</template>

<style>
 @import "tailwindcss";
</style>
