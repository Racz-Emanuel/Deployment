import { createRouter, createWebHistory } from 'vue-router'

import Flowers from '@/pages/Flowers.vue'
import Tests from '@/pages/Tests.vue'

const routes = [
    { path: '/', component: Tests },
    { path: '/flowers', component: Flowers }
]

const router = createRouter({   
    history: createWebHistory(),
    routes,
    linkActiveClass: 'btn-primary'
})

export default router