<script setup>
import { ref, computed } from "vue";

const price = ref(50.32);
const quantity = ref(2);
const tax = ref(0.19);

const formattedPrice = computed(() => (price.value * quantity.value * (1 + tax.value)).toFixed(2) + " €");
</script>

<template>
 Price
 <input class="border" type="number" v-model="price">
 Quantity
 <input class="border" type="number" v-model="quantity">
 Tax
 <input class="border" type="number" v-model="tax">

 <p>Total Price: {{ formattedPrice }}</p>
</template>
