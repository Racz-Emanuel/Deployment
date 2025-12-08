<script setup>
import { useTask } from '@/stores/task';
const taskStore = useTask();

const addNewTask = () => {
    taskStore.addTask({
        id: Math.floor(Math.random() * 1000000),
        title: newTaskTitle.value,
        done: false,
        favorite: false
    });
    isAddingTask.value = false;
}

const newTaskTitle = ref('');

import { ref } from 'vue';
const isAddingTask = ref(false);

</script>

<template>
    <div v-if="!isAddingTask">
        <button 
           type="button" 
           class="bg-blue-500 text-white px-2 rounded ml-4"
           @click="isAddingTask = true">
           Add new task
        </button>
    </div>
    <div v-else>
        <input 
           type="text" 
           placeholder="Enter task description" 
           class="border border-gray-300 rounded px-2 py-1 ml-4"
           v-model="newTaskTitle"
        />
        <button 
           type="button" 
           class="bg-green-500 text-white px-2 rounded ml-2"
           @click="addNewTask">
           Save
        </button>
        <button 
           type="button" 
           class="bg-red-500 text-white px-2 rounded ml-2"
           @click="isAddingTask = false">
           Cancel
        </button>
    </div>
</template>