import { createRouter, createWebHistory } from 'vue-router'
import { Home, About, Login } from "../views";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Login },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router