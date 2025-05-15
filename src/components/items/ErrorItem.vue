<template>
    <div class="error-item">
        <p>{{ error }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    error: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">
.error-item {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
    p {
        color: red;
    }
}
</style>