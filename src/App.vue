<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
 <header>
     <nav>
       <RouterLink to="/">Home</RouterLink>
       <RouterLink to="/flowers">Flowers</RouterLink>
     </nav>
 </header>

 <RouterView />
</template>

<style>
  .btn-primary {
    background-color: yellow;
  }
</style>