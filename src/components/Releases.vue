<script setup>
import { onMounted, ref, reactive, watch, inject } from 'vue';
import axios from 'axios';
import ProductList from './ProductList.vue';

const { addToCart, removeFromCart } = inject('cart');
const items = ref([]);

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item);
  } else {
    removeFromCart(item);
  }
};

const filters = reactive({
  sortBy: '',
  searchQuery: '',
  type: ''
});

const sortBy = ref('');
const searchQuery = ref('');

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value;
};

const onChangeTypeSelect = (event) => {
  filters.type = event.target.value;
};

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value;
};

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    };

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`;
    }

    if (filters.type) {
      params.type = `*${filters.type}*`;
    }

    const { data } = await axios.get('https://82063bb80a3f0270.mokky.dev/items', { params });

    items.value = data.map((obj) => ({
      ...obj,
      isAdded: false
    }));
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
        <ProductList :items="items" @add-to-cart="onClickAddPlus"/>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.releases {
  margin-bottom: 3.75em;

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;
  }

  &__title {
    font-size: 2.5em;
    font-weight: 900;
    margin-right: 0.625em;
  }

  &__search {
    width: 100%;
    padding: 0.5em 1.25em;
    margin: 0 3.125em;
    font-size: 1.25em;
    background-color: $colorSearch;
    border: none;
    border-radius: 1.875em;

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
      font-size: 1.25em;
      font-weight: bold;
      border: none;
      outline: none;
      padding: 0 0.625em;
      background: transparent;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

/* Estilos para dispositivos móveis médios e pequenos (telefones em modo paisagem) */
@media (min-width: 320px) and (max-width: 767px) {
  .releases {
    margin-bottom: 3em;

    &-container {
      margin-bottom: 2.5em;
      flex-direction: column;
      gap: 2em;
    }

    &__title {
      font-size: 2em;
      margin-right: 0.3em;
    }

    &__search {
      width: 350px;
      padding: 0.5em 1em;
      margin: 0 2em;
    }
  }
}

/* Estilos para tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .releases {
    &-container {
      margin-bottom: 2.5em;
      flex-direction: column;
      gap: 2em;
    }

    &__title {
      font-size: 2.3em;
    }

    &__search {
      width: 550px;
    }
  }
}

/* Estilos para desktops pequenos/laptops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .releases {
    &-container {
      margin-bottom: 2.5em;
      flex-direction: column;
      gap: 2em;
    }

    &__title {
      font-size: 2.5em;
    }

    &__search {
      width: 750px;
    }
  }
}
</style>