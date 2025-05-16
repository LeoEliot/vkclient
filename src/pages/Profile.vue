<template>
    <div class="container">
        <div class="profile">
            <Notifications />
            <div class="meters">
                <MeterCard v-for="meter in meters"
                 :key="meter.title"
                 :title="meter.title" 
                 :value="meter.value"
                 :unit="meter.unit"
                 :date="meter.date"
                 :status="meter.status" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Notifications from '../components/Notifications.vue'
import MeterCard from '../components/meters/MeterCard.vue'
import { ref } from 'vue'
const meters = ref([
    { title: 'Счетчик ХВС', value: 121, unit: '12720876', date: '2025-01-01', status: 'работает' },
    { title: 'Счетчик ГВС', value: 565, unit: '12033-92', date: '2025-01-01', status: 'работает' },
])
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .meters {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
        gap: 2em;
        flex-wrap: wrap;
    }
}
</style>