import { createRouter, createWebHistory } from 'vue-router'
import RefsForReactive from '../views/RefsForReactive.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: RefsForReactive
  },
  {
    path: '/refs-vs-reactive',
    name: 'refsVsReactive',
    component: () => import(/* webpackChunkName: "about" */ '../views/RefsVsReactive.vue')
  },
  {
    path: '/computed-properties',
    name: 'computedProperties',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComputedProperties.vue')
  },
  {
    path: '/watch-and-watch-effect',
    name: 'watchAndWatchEffect',
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchAndWatchEffect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
