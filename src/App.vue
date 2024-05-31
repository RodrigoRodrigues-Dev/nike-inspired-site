<script setup>
  import { ref, provide, computed } from 'vue';

  const cart = ref([]);

  const totalPrice = computed(
    () => cart.value.reduce((acc, item) => acc + item.price, 0)
  );

  const addToCart = (item) => {
    cart.value.push(item);
    item.isAdded = true;
  };

  const removeFromCart = (item) => {
    cart.value.splice(cart.value.indexOf(item), 1);
    item.isAdded = false;
  };

  const clearCart = () => {
    cart.value = [];
  };

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