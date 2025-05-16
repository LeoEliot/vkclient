<template>
    <div class="meter_card">
        <div class="meter_card_header">
            <h4>{{ title }}</h4>
        </div>
        <div class="meter_card_body">
            <div class="meter_card_body_item">
                <h4>Текущие показания: {{ value }}</h4>
                <p>Серия и номер: {{ unit }}</p>
                <p>Дата последней поверки: {{ date }}</p>
                <p>Дата следующей поверки: {{ date }}</p>
                <p>Срок поверки: {{ date }}</p>
                <p> Статус работы: {{ status }}</p>
                <div class="meter_card_body_item_buttons">
                    <button class="meter_card_body_item_button">Посмотреть</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">
.meter_card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    padding: 2rem;
    background-color: lightblue;
    box-shadow: 0 25px 10px 0 rgba(0, 0, 0, 0.1);
    .meter_card_body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        .meter_card_body_item {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .meter_card_body_item_buttons {
                display: flex;
                gap: 1rem;
                
            }
        }
    }
}
</style>