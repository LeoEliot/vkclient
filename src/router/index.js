import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import LoginPage from '../pages/Auth/LoginPage.vue'
import RegisterPage from '../pages/Auth/RegesterPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard, name: 'home' },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/register', component: RegisterPage , name: 'register' },
  ],
})



export default router