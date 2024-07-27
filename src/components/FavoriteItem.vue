<script setup>
import { inject, ref } from 'vue';

const fav = inject('fav');
const cart = inject('cart');

if (!fav || !cart) {
  console.error('Favoritos ou carrinho não estão injetados corretamente.');
}

const props = defineProps({
  id: Number,
  type: String,
  title: String,
  price: String,
  imgURL: String,
  isAdded: Boolean
});

const localIsAdded = ref(props.isAdded);

const parsePrice = (formattedPrice) => {
  let price = formattedPrice.replace('R$ ', '').replace(',', '.');
  price = price.replace(/\./g, '');
  return parseFloat(price);
};

const addToCartPlus = () => {
  if (!localIsAdded.value) {
    cart.addToCart({
      imgURL: props.imgURL,
      title: props.title,
      type: props.type,
      price: parsePrice(props.price),
    });
    localIsAdded.value = true;
  } else {
    cart.removeFromCart({
      imgURL: props.imgURL,
      title: props.title,
      type: props.type,
      price: parsePrice(props.price),
    });
    localIsAdded.value = false;
  }
};

const removeFavoriteItem = () => {
  fav.favoriteStore.removeFavorite(props.imgURL);
}
</script>

<template>
  <div class="favoriteItem">
    <img @click="removeFavoriteItem" class="favoriteItem__remove" src="/src/assets/images/icons/x.svg">
    <img class="favoriteItem__img" :src="imgURL">
    <h2 class="favoriteItem__title">{{ title }}</h2>
    <div class="favoriteItem__type">{{ type }}</div>
    <span class="favoriteItem__price">{{ price }}</span>
    <button @click="addToCartPlus" class="favoriteItem__btn">Adicionar ao carrinho</button>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variaveis.scss';

.favoriteItem {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background-color: $color-light-background;
  padding: 3rem;

  &__remove {
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 1rem;
    cursor: pointer;
  }

  &__img {
    width: 9rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.2rem;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }
  }

  &__type {
    margin: 0.5rem 0rem;
    font-weight: 700;
    color: rgb(112, 112, 112);
  }

  &__price {
    font-size: 1.3rem;
    font-weight: 900;
  }

  &__btn {
    @include btn-dark(1rem);
    margin-top: 1rem;
    width: 70%;
    border-radius: 1rem;
    padding: 0.4rem;
  }

  
  @media (max-width: 767px) {   
    &__img {
      width: 8rem;
    }

    &__type {
      font-size: 1rem
    }

    &__btn {
      @include btn-dark(1rem);
      width: 100%;
      margin-top: 1rem;
      padding: 0.7rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    &__img {
      width: 7rem;
    }

    &__price {
      font-size: 1.2rem;
      font-weight: 900;
    }

    &__btn {
      @include btn-dark(0.8rem);
      margin-top: 1rem;
      border-radius: 1rem;
      padding: 0.7rem;
    }
  }
}
</style>