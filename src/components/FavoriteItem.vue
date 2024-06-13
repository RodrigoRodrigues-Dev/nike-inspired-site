<script setup>
import { inject, ref } from 'vue';

const fav = inject('fav');
const cart = inject('cart');

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
  let price = formattedPrice.replace('R$ ', '').replace(',00', '');
  price = price.replace(/\./g, '').replace(',', '.');
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
@import '/src/assets/styles/_variaveis.scss';

.favoriteItem {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3em;
  background-color: $colorCard;
  padding: 3em;

  &__remove {
    position: absolute;
    top: 3em;
    right: 3em;
    width: 1em;
    cursor: pointer;
  }

  &__img {
    width: 9em;
    margin-bottom: 1em;
  }

  &__title {
    font-size: 1.2em;
  }

  &__type {
    margin: 0.5em 0em;
    font-weight: 700;
    color: rgb(112, 112, 112);
  }

  &__price {
    font-size: 1.3em;
    font-weight: 900;
  }

  &__btn {
    margin-top: 1em;
    @include btn(1em);
    width: 70%;
    border-radius: 1em;
    padding: 0.4em;
  }

  /* Estilos para tablets */
  @media (min-width: 768px) and (max-width: 1024px) {
    &__img {
      width: 7em;
    }

    &__price {
      font-size: 1.2em;
      font-weight: 900;
    }

    &__btn {
      margin-top: 1em;
      @include btn(0.8em);
      width: 95%;
      border-radius: 1em;
      padding: 0.7em;
    }
  }
}
</style>