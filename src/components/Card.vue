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
      <img @click="addFavorite" class="card__images__favoriteIcon" 
           :src="isLiked ? FavoriteIconActive : FavoriteIconInactive" 
           alt="Ícone Favorito">
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
  border-radius: 0.625em;
  padding: 0.9375em;

  &__images {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 18.75em;
      background-color: $colorCard;
      border-radius: 0.625em;
      margin-bottom: 1.875em;

      &__favoriteIcon {
          position: absolute;
          top: 0;
          left: 0;
          margin: 1.875em;
          width: 1.875em;

          &:hover {
              cursor: pointer;
          }
      }

      &__image {
          width: 13em;
      }
  }

  &__description {
    display: flex;
    flex-direction: column;
    row-gap: 0.3125em;
    width: 100%;

    &__title {
      font-size: 1.25em;
    }

    &__type {
      color: $colorQuaternary;
    }
        
    &__price {
      font-size: 1.1em;
      font-weight: bold;
    }

    &__btn {
        @include btn(1em);
        border: none;
        border-radius: 1em;
        padding: 1em 0em;
        margin-top: 0.8em;
    }
  }
}
</style>