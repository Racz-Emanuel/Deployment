<script setup>
import { ref, computed } from "vue";
const search = ref("");
const supplyers = ref([
{ fullName: "Sergiu Firulescu", totalPrice: "20.22 $" },
{ fullName: "Elisei Morosan", totalPrice: "36.51 $" }
]);

const filteredSupplyers = computed(() =>
 supplyers.value.filter(s =>
   s.fullName.toLowerCase().includes(search.value.toLowerCase())
 )
);
</script>

<template>
 <input class="border" v-model="search" placeholder="Search">
 <ul>
   <li v-for="(supplyer, i) in filteredSupplyers" :key="i">
{{ supplyer.fullName }} > {{ supplyer.totalPrice }}
   </li>
 </ul>
</template>