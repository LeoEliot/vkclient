import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import LoginPage from '../pages/Auth/LoginPage.vue'
import RegisterPage from '../pages/Auth/RegesterPage.vue'
import Profile from '../pages/Profile.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard, name: 'home',redirect: '/profile',
      children: [
        { path: '/profile', component: Profile, name: 'profile' },
        // { path: '/meters', component: Meters, name: 'meters' },
        // { path: '/payments', component: Payments, name: 'payments' },
        // { path: '/invoices', component: Invoices, name: 'invoices' },
        // { path: '/settings', component: Settings, name: 'settings' },
        { path: '/logout', redirect: '/login' },
      ]
    },
    { path: '/login', component: LoginPage, name: 'login' },
    { path: '/register', component: RegisterPage , name: 'register' },
  ],
})



export default router