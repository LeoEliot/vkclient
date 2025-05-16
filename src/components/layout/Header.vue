<template>
    <header>
        <div class="header_logo">
            <span class="material-icons">home</span>
            <h4>Главаня</h4>
        </div>
        <div class="header_profile">
            <img class="profile_image" src="../../assets/img/test.png" alt="profile">
            <div class="profile_info">
                <h4>Виктор</h4>
                <span class="material-icons">notifications</span>
                <span class="material-icons">logout</span>
            </div>  
        </div>
    </header>
</template>

<script setup>
import DropdownMenuItem from '../items/DropdownMenuItem.vue'
</script>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--light);
    //border-bottom: 1px solid var(--grey);
    .header_logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        h4 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        .material-icons {
            font-size: 2rem;
        }
    }
    .header_profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        .profile_image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
        .profile_info {
            display: flex;
        }
    }
}
</style>