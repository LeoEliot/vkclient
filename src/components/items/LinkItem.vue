<template>
   <router-link :to="to">
    <slot></slot>
   </router-link>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
})
</script>