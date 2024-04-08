<script setup>
    import { onMounted, ref } from 'vue';
    import Card from './Card.vue';
    import axios from 'axios';

    const items = ref([]);

    onMounted(async () => {
        try {
            const { data } = await axios.get('https://82063bb80a3f0270.mokky.dev/items');
            items.value = data;
        } catch(err) {
            console.log(err)
        }
    })
</script>

<template>
    <div class="releases">
        <h2 class="releases__title">Lançamentos</h2>
        <div class="releases__cards">
            <Card 
            v-for="item in items" 
            :key="item.id"
            :img="item.imgURL"
            :title="item.title"
            :price="item.price"
            :type="item.type"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .releases {
        margin-bottom: 60px;

        &__title {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 48px;
        }

        &__cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 10px;
            row-gap: 16px;
        }
    }
</style>