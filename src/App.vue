<script setup>
import { ref, provide, computed } from 'vue';
import { useFavoriteStore } from '@/stores/favoriteStore';

// Referências reativas
const cart = ref([]);
const favoriteStore = useFavoriteStore();

// Computed para calcular o preço total do carrinho
const totalPrice = computed(() => 
  cart.value.reduce((acc, item) => acc + item.price, 0)
);

// Função para adicionar item ao carrinho
const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

// Função para remover item do carrinho
const removeFromCart = (item) => {
  const index = cart.value.indexOf(item);
  if (index > -1) {
    cart.value.splice(index, 1);
    item.isAdded = false;
  }
};

// Função para limpar o carrinho
const clearCart = () => {
  cart.value = [];
};

// Prover os estados e métodos para os componentes filhos
provide('fav', {
  favoriteStore
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