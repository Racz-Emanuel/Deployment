import { createRouter, createWebHistory } from 'vue-router'

import Flowers from '@/pages/Flowers.vue'
import Tests from '@/pages/Tests.vue'
import Computed from '@/pages/Computed.vue'

const routes = [
    { path: '/', component: Tests },
    { path: '/flowers', component: Flowers },
    { path: '/computed', component: Computed }
]

const router = createRouter({   
    history: createWebHistory(),
    routes,
    linkActiveClass: 'btn-primary'
})

export default router