import Vue from 'vue'
import VueRouter from 'vue-router'
import plans from '../views/plans.vue'
import memories from '../views/memories.vue'
import ada from '../views/ada'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'plans',
    component: plans
  },
  {
    path: '/memories',
    name: 'memories',
    component: memories
  },
  {
    path: '/ada',
    name: 'ada',
    component: ada
  },
  
  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
