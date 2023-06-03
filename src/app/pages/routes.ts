import type { RouteRecordRaw } from 'vue-router'
import HomeView from './home/HomeView.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomeView
    }
]
