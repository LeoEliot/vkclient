<template>
    <div class="dashboard">
        <Sidebar />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">

.dashboard {
    display: flex;

  main {
    flex: 1 1 0;
    padding: 3rem;

    @media (max-width: 768px) {
      padding: 6rem;
    }
  }
}
</style>