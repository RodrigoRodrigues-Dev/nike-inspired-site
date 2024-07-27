<script setup>
import { ref, watch, inject } from 'vue';
import { useFavoriteStore } from '@/stores/favoriteStore';

const fav = inject('fav');
const favoriteStore = fav.favoriteStore;

import FavoriteIconActive from '/src/assets/images/icons/Favorite-icon-active.svg';
import FavoriteIconInactive from '/src/assets/images/icons/Favorite-icon.svg';

const props = defineProps({
  img: String,
  title: String,
  type: String,
  price: String,
  isFavorite: Boolean,
  onClickAdd: Function,
});

const isLiked = ref(favoriteStore.isFavorite(props.img));

watch(() => props.isFavorite, (newValue) => {
  isLiked.value = newValue;
});

const addFavorite = () => {
  isLiked.value = !isLiked.value;
  favoriteStore.toggleFavorite({
    img: props.img,
    title: props.title,
    type: props.type,
    price: props.price,
  });
};
</script>

<template>
  <div class="card">
    <div class="card__images">
      <img @click="addFavorite" class="card__images__favorite-icon"
        :src="isLiked ? FavoriteIconActive : FavoriteIconInactive" alt="Ícone Favorito">
      <img class="card__images__image" :src="img" alt="Imagem do Produto">
    </div>
    <div class="card__description">
      <h2 class="card__description__title">{{ title }}</h2>
      <span class="card__description__type">{{ type }}</span>
      <strong class="card__description__price">{{ price }}</strong>
      <button class="card__description__btn" @click="onClickAdd">Adicionar ao carrinho</button>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.card {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.625rem;
  padding: 0.9375rem;

  &__images {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 18.75rem;
    background-color: $color-light-background;
    border-radius: 0.625rem;
    margin-bottom: 1.875rem;

    &__favorite-icon {
      position: absolute;
      top: 0;
      left: 0;
      margin: 1.875rem;
      width: 1.875rem;
      cursor: pointer;
    }

    &__image {
      width: 11rem;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    row-gap: 0.3125rem;
    width: 100%;

    &__title {
      font-size: 1.25rem;
    }

    &__type {
      color: $color-gray;
      font-size: 1rem;
    }

    &__price {
      font-size: 1.1rem;
      font-weight: bold;
    }

    &__btn {
      @include btn-dark(1rem);
      border-radius: 1rem;
      padding: 1rem 0;
      margin-top: 0.8rem;
    }
  }
}
</style>