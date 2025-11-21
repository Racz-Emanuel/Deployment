<script setup>
import { ref } from "vue"
const emit = defineEmits(['update:fullName'])
const firstName = ref("")
const lastName = ref("")

import { computed } from "vue"
const fullName = computed(() => {
    const fN = firstName.value + " " + lastName.value
    emit('update:fullName', fN)
    return fN
});
const greeting = computed(() => "Hello, " + fullName.value + "!")

const showFullName = ref(true)

</script>

<template>
 First Name
 <input class="border" type="text" v-model="firstName">
 Last Name
 <input class="border" type="text" v-model="lastName">

 <button 
   class="border bg-gray-400 px-2" 
   type="button" 
   @click=" showFullName = !showFullName "> 
    <span v-if="showFullName">Hide</span>
    <span v-else>Show</span> Full Name
 </button>

 <div v-if="showFullName">
    <p>Your Full Name: {{ fullName }}</p>
    <p>{{ greeting }}</p>

 </div>
</template>
