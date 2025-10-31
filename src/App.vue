<script setup>
import YouDidIt from './components/YouDidIt.vue'
import BindLink from './components/BindLink.vue'
import RandomNumber from './components/RandomNumber.vue'
import CountYourBlessings from './components/CountYourBlessings.vue'
import BootstrapIcons from './components/BootstrapIcons.vue'
import StudentsGrades from './components/StudentsGrades.vue'

import { onMounted, onUpdated } from 'vue'
onMounted(() => {
  console.log('App mounted')
})

onUpdated(() => {
  console.log('App updated')
})

import { ref } from 'vue'
const showIcons = ref(false)

const icons = ['brightness-high', 'bell', 'cloud', 'heart', 'star'];
const icon = ref(icons[0]);

const changeIcon = () => {
 icon.value = icons[Math.floor(Math.random() * icons.length)];
};
</script>

<template>
  <YouDidIt />
  <hr>
  <BindLink />
  <hr>
  <RandomNumber />
  <hr>
  <CountYourBlessings startCount="7" />
  <CountYourBlessings :startCount="3+5" />
  <CountYourBlessings startCount="9" />
  <hr>
  <input type="checkbox" v-model="showIcons"> Show Bootstrap Icons
  <div v-if="showIcons">
    <BootstrapIcons 
      v-for="(bootstrapIcon, index) of [1,2,3]" 
      :key="index" 
      :icon="icon"
      @iconClick="changeIcon"/>
    <BootstrapIcons 
      :icon="icon"
      @iconClick="changeIcon"/>
  </div>
  <hr>
  <StudentsGrades />
</template>

<style>
 @import "bootstrap-icons";
 /* @import "tailwindcss"; */
</style>
