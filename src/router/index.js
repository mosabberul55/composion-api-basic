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
  },
  {
    path: '/props-example',
    name: 'propsExample',
    component: () => import(/* webpackChunkName: "about" */ '../views/PropsExample.vue')
  },
  {
    path: '/life-cycle-hook',
    name: 'lifeCycleHook',
    component: () => import(/* webpackChunkName: "about" */ '../views/LifeCycleHook.vue')
  },
  {
    path: '/fetch-data-from-api',
    name: 'fetchDataFromApi',
    component: () => import(/* webpackChunkName: "about" */ '../views/FetchDataFromApi.vue')
  },
  {
    path: '/fetch-data-from-api/:id',
    name: 'fetchDataFromApiById',
    component: () => import(/* webpackChunkName: "about" */ '../views/FetchDataFromApiById.vue'),
    props: true
  },
  {
    path: '/simple-crud',
    name: 'simpleCrud',
    component: () => import(/* webpackChunkName: "about" */ '../views/SimpleCrud.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
