<script setup>
import { inject, ref, watch } from 'vue';

const fav = inject('fav');
const { addToFavoritePlus } = fav;

const props = defineProps({
  img: String,
  title: String,
  type: String,
  price: String,
  isFavorite: Boolean,
  onClickAdd: Function,
});

// Função para recuperar o estado de isLiked do localStorage ou usar o valor padrão
const initialIsLiked = () => {
  const storedValue = localStorage.getItem(`isLiked-${props.title}`);
  return storedValue !== null ? JSON.parse(storedValue) : props.isFavorite;
};

const isLiked = ref(initialIsLiked());

// Observa mudanças no isLiked e atualiza o localStorage e sessionStorage
watch(isLiked, (newVal) => {
  localStorage.setItem(`isLiked-${props.title}`, JSON.stringify(newVal));
  sessionStorage.setItem(`isLiked-${props.title}`, JSON.stringify(newVal));
});

const addFavorite = () => {
  isLiked.value = !isLiked.value;
  addToFavoritePlus({
    img: props.img,
    title: props.title,
    type: props.type,
    price: props.price,
    isFavorite: isLiked.value
  });
};
</script>

<template>
  <div class="card">
    <div class="card__images"> 
      <img @click="addFavorite" class="card__images__favoriteIcon" :src="isLiked ? '/src/assets/images/icons/Favorite-icon-active.svg' : '/src/assets/images/icons/Favorite-icon.svg'" alt="Favorite Icon">
      <img class="card__images__image" :src="img" alt="Product Image">
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
  border-radius: 10px;
  padding: 15px;

  &__images {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 300px;
      background-color: $colorCard;
      border-radius: 10px;
      margin-bottom: 30px;

      &__favoriteIcon {
          position: absolute;
          top: 0;
          left: 0;
          margin: 30px;
          width: 30px;

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
    row-gap: 5px;
    width: 100%;

    &__title {
      font-size: 20px;
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
        padding: 1em 0px;
        margin-top: 0.8em;
    }
  }
}
</style>