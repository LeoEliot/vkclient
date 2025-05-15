<script setup>
import Sidebar from './components/Sidebar.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './store'
import LoginPage from './pages/Auth/LoginPage.vue'

const authStore = useAuthStore()

const login = () => {
  authStore.setUser({ id: 1, name: 'John Doe' })
}
</script>

<template>
 <router-view />
</template>

<style scoped>

</style>
