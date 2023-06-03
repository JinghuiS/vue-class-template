import { routes } from '@/app/pages/routes'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createGuard } from './guard'

const _router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export function setupRouter(instance: App) {
    createGuard(instance, _router)
    instance.use(_router)
}
