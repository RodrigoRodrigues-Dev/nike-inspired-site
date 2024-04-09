<script setup>
    import { onMounted, ref, watch } from 'vue';
    import Card from './Card.vue';
    import axios from 'axios';

    const formatPrice = (price) => {
      const parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return `R$ ${parts.join(",")},00`;
    }

    const items = ref([]);

    const filter = ref('');
    const searchQuery = ref('');

    const onChangeSelect = event => {
        filter.value = event.target.value
    }

    onMounted(async () => {
        try {
            const { data } = await axios.get('https://82063bb80a3f0270.mokky.dev/items');
            items.value = data;
        } catch(err) {
            console.log(err)
        }
    })

    watch(filter, async () => {
        try {
            const { data } = await axios.get(
                'https://82063bb80a3f0270.mokky.dev/items?' + filter.value
            );
            items.value = data;
        } catch(err) {
            console.log(err)
        }
    });

</script>

<template>
    <div class="releases">
        <div class="releases-container">
            <h2 class="releases__title">Lançamentos</h2>
            <div class="releases__filter">
                <select @change="onChangeSelect">
                    <option value="sortBy=name">Ordenar por</option>
                    <option value="type=*Basquete">Basquete</option>
                    <option value="type=*Corrida">Corrida</option>
                    <option value="type=*Casual">Casual</option>
                    <option value="type=*Treino">Treino</option>
                    <option value="type=*Academia">Academia</option>
                    <option value="sortBy=price">Preço - menor para o maior</option>
                    <option value="sortBy=-price">Preço - maior para o menor</option>
                </select>
            </div>
        </div>
        <div class="releases__cards">
            <Card 
            v-for="item in items" 
            :key="item.id"
            :img="item.imgURL"
            :title="item.title"
            :price="formatPrice(item.price)"
            :type="item.type"
            isFavorite=""
            />
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .releases {
        margin-bottom: 60px;

        &-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 48px;
        }

        &__title {
            font-size: 48px;
            font-weight: 900;
        }

        &__filter {
            select {
                width: 310px;
                font-size: 20px;
                font-weight: bold;
                border: none;
                outline: none;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        &__cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 10px;
            row-gap: 16px;
        }
    }
</style>