<script setup>
    import { onMounted, ref, reactive, watch } from 'vue';
    import axios from 'axios';
    import CartList from './ProductList.vue';

    const items = ref([]);

    const filters = reactive({
        sortBy: '',
        searchQuery: '',
        type: ''
    });

    const sortBy = ref('');
    const searchQuery = ref('');

    const onChangeSelect = event => {
        filters.sortBy = event.target.value;
    };

    const onChangeTypeSelect = event => {
        filters.type = event.target.value;
    };

    const onChangeSearchInput = event => {
        filters.searchQuery = event.target.value;
    };

    const fetchItems = async () => {
        try {
        const params = {
            sortBy: filters.sortBy,
        };

        if (filters.searchQuery) {
            params.title = `*${filters.searchQuery}*`;
        };

        if (filters.type) {
            params.type = `*${filters.type}*`;
        };

        const { data } = await axios.get(`https://82063bb80a3f0270.mokky.dev/items`, {params});
        
        items.value = data;
        } catch (err) {
        console.log(err);
        }
    };

    onMounted(async () => {
        await fetchItems();
    });

    watch(filters, fetchItems);
</script>

<template>
    <div class="releases">
        <div class="releases-container">
            <h2 class="releases__title">Lançamentos</h2>
            <input class="releases__search" placeholder="Buscar..." @input="onChangeSearchInput">
            <div class="releases__filters">
                <select class="releases__filters__select" @change="onChangeTypeSelect">
                    <option value="">Filtrar por</option>
                    <option value="*Basquete">Basquete</option>
                    <option value="*Corrida">Corrida</option>
                    <option value="*Casual">Casual</option>
                    <option value="*Treino">Treino</option>
                    <option value="*Academia">Academia</option>
                </select>
                <select class="releases__filters__select" @change="onChangeSelect">
                    <option value="">Ordenar por preço</option>
                    <option value="price">Menor para o maior</option>
                    <option value="-price">Maior para o menor</option>
                </select>
            </div>
        </div>
        <CartList :items="items"/>
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
            font-size: 40px;
            font-weight: 900;
            margin-right: 10px;
        }

        &__search {
            width: 100%;
            padding: 8px 20px;
            margin: 0 50px;
            font-size: 20px;
            background-color: $colorSearch;
            border: none;
            border-radius: 30px;

            &:hover {
                background-color: darken($colorSearch, 8%);
            }
            &:focus {
                background-color: lighten($colorSearch, 8%);  
            }
        }

        &__filters {
            display: flex;

            &__select {
                font-size: 20px;
                font-weight: bold;
                border: none;
                outline: none;
                padding: 0px 10px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>