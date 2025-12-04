import { createRouter, createWebHistory } from 'vue-router'

import Flowers from '@/pages/Flowers.vue'
import Tests from '@/pages/Tests.vue'
import Computed from '@/pages/Computed.vue'
import TaskPage from '@/pages/TaskPage.vue'

const routes = [
    { path: '/', component: Tests },
    { path: '/flowers', component: Flowers },
    { path: '/computed', component: Computed },
    { path: '/tasks', component: TaskPage },
]

const router = createRouter({   
    history: createWebHistory(),
    routes,
    linkActiveClass: 'btn-primary border'
})

export default router