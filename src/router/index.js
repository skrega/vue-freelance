import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'

const routes = [
  {
    path: '/',
    name: 'tasks',
    component: Tasks
  },
  {
    path: '/new',
    name: 'new',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  },
  {
    path: '/task/:id',
    name: 'task',
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
