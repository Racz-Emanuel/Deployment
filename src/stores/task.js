import { defineStore } from 'pinia'

export const useTask = defineStore('task', {
  state: () => ({
    tasks: [{
        id: 1,
        title: 'Learn Vue',
        done: false,
        favorite: false
    },
    { 
        id: 2,
        title: 'Learn Pinia', 
        done: false, 
        favorite: false 
    }]
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    removeTask(id) {
      this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1)
    },
    toggleFavorite(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      this.tasks[index].favorite = !this.tasks[index].favorite
    },
    toggleDone(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      this.tasks[index].done = !this.tasks[index].done
    }
  }
})