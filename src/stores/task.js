import { defineStore } from 'pinia'

export const useTask = defineStore('task', {
  state: () => ({
    tasks: [{ 
        title: 'Learn Vue',
        done: false,
        favorite: false
    },
    { 
        title: 'Learn Pinia', 
        done: false, 
        favorite: false 
    }]
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    toggleFavorite(index) {
      this.tasks[index].favorite = !this.tasks[index].favorite
    },
    toggleDone(index) {
      this.tasks[index].done = !this.tasks[index].done
    }
  }
})