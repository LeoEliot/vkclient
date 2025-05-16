<template>
    <div class="dashboard">
        <Sidebar />
        <main>
          <Header />
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
import { RouterView } from 'vue-router'
import Header from '../components/layout/Header.vue'
</script>

<style scoped lang="scss">

.dashboard {
    display: flex;

  main {
    flex: 1 1 0;
    padding: 3rem;

    background-color: var(--light);

    @media (max-width: 768px) {
      padding: 6rem;
    }
  }
}
</style>