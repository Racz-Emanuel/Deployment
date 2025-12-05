<script setup>
import TaskCheckbox from './TaskCheckbox.vue';
import TaskActions from './TaskActions.vue';
</script>

<template>
  <div class="grid grid-cols-8 gap-2">
    <TaskCheckbox />
    <div class="col-span-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <TaskActions />
  </div>
</template>