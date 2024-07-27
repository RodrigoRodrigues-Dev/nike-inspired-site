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
    <ProductList :items="items" @add-to-cart="onClickAddPlus" />
  </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.releases {
  margin: 3.75rem 0;

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 900;
    margin-right: 0.625rem;
  }

  &__search {
    width: 100%;
    padding: 0.5rem 1.25rem;
    margin: 0 3.125rem;
    font-size: 1.25rem;
    background-color: $color-search-background;
    border: none;
    border-radius: 1.875rem;

    &:hover {
      background-color: darken($color-search-background, 8%);
    }

    &:focus {
      background-color: lighten($color-search-background, 8%);
    }
  }

  &__filters {
    display: flex;

    &__select {
      font-size: 1.25rem;
      font-weight: bold;
      border: none;
      outline: none;
      padding: 0 0.625rem;
      background: transparent;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

/* Estilos para dispositivos móveis médios e pequenos (telefones em modo paisagem) */
@media (max-width: 767px) {
  .releases {
    margin-bottom: 3rem;

    &-container {
      margin-bottom: 2.5rem;
      flex-direction: column;
      gap: 2rem;
    }

    &__title {
      font-size: 1.5rem;
      margin-right: 0.3rem;
    }

    &__search {
      width: 350px;
      padding: 0.5rem 1rem;
      margin: 0 2rem;
    }
  }
}

/* Estilos para tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .releases {
    &-container {
      margin-bottom: 2.5rem;
      flex-direction: column;
      gap: 2rem;
    }

    &__title {
      font-size: 2rem;
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
      margin-bottom: 2.5rem;
      flex-direction: column;
      gap: 2rem;
    }

    &__title {
      font-size: 2rem;
    }

    &__search {
      width: 750px;
    }
  }
}
</style>