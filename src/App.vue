<script setup>
import { ref, provide, computed } from 'vue';

const cart = ref([]);
const fav = ref([]);

const totalPrice = computed(
  () => cart.value.reduce((acc, item) => acc + item.price, 0)
);

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const addToFavorite = (item) => {
  fav.value.push(item);
  item.isFavorite = true;
};

const addToFavoritePlus = (item) => {
  if (item.isFavorite) {
    addToFavorite(item);
  } else {
    removeFromFav(item);
  }
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

const removeFromFav = (item) => {
  fav.value.splice(cart.value.indexOf(item), 1);
  item.isFavorite = false;
};

const clearCart = () => {
  cart.value = [];
};

provide('fav', {
  fav,
  addToFavoritePlus,
  removeFromFav
});

provide('cart', {
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  totalPrice
});
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
</style>