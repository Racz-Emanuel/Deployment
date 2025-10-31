<script setup>
defineProps(['icon'])
defineEmits(['iconClick'])
</script>

<template>
    <h3>Bootstrap Icons <i :class="`bi bi-${icon}`" @click="$emit('iconClick')"></i></h3>
</template>

<!-- 
<style scoped>
 @import "bootstrap-icons";
</style> 
-->
