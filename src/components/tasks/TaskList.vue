<script setup>
import TasksHeader from './TasksHeader.vue';
import TaskBody from './TaskBody.vue';
import TaskFooter from './TaskFooter.vue';
</script>

<template>
  <TasksHeader />
  <TaskBody v-for="value in [1,2,3,4,5]" />
  <TaskFooter />
</template>