<template>
    <div class="notifications">
        <div class="notifications_header">
            <span class="material-icons">notifications</span>
            <h4>Уведомления</h4>
        </div>
        <div class="notifications_body">
            <div class="notifications_item">
               <h4>26.02.2025</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
               <button class="notifications_item_button" @click="checkNotifications" v-if="!isChecked">Посмотреть</button>
               <button class="notifications_item_button checked" @click="checkNotifications"  v-else><span class="material-icons">check</span></button>
            </div>
            <div class="notifications_item">
               <h4>26.02.2025</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
               <button class="notifications_item_button">Посмотреть</button>
            </div>
            <div class="notifications_item">
               <h4>26.02.2025</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
               <button class="notifications_item_button">Посмотреть</button>
            </div>
            <div class="notifications_item">
               <h4>26.02.2025</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
               <button class="notifications_item_button">Посмотреть</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isChecked = ref(false)
const checkNotifications = () => {
    isChecked.value = !isChecked.value
}
</script>

<style scoped lang="scss">
.notifications {
    margin-top: 2rem;
    border: 1px solid gray;
    padding: 2rem;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    box-shadow: 0 25px 10px 0 rgba(0, 0, 0, 0.1);
    gap: 1rem;
    .notifications_header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .notifications_body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .notifications_item {
        display: flex; 
        align-items: center;
        gap: 1rem;
        p {
            flex: 1;
        }
        .notifications_item_button {
            background-color: lightskyblue;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
        }
        .checked {
            background-color: lightcyan;
            text-align: center;
            .material-icons {
                font-size: 1rem;
            }
        }
    }
    
}
</style>