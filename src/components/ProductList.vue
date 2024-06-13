<script setup>
import Card from './Card.vue';

defineProps({
    items: Array
});

const emit = defineEmits(['addToCart']);

const formatPrice = (price) => {
    const parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${parts.join(",")},00`;
};
</script>

<template>
    <div class="cart-item-list">
        <Card
            v-for="item in items"
            :key="item.key"
            :img="item.imgURL"
            :title="item.title"
            :type="item.type"
            :price="formatPrice(item.price)"
            :onClickAdd="() => emit('addToCart', item)"
        />
    </div>
</template>

<style lang="scss">
.cart-item-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.625em;
  row-gap: 1em;
}

/* Estilos para dispositivos móveis médios e pequenos (telefones em modo paisagem) */
@media (min-width: 320px) and (max-width: 767px) {
  .cart-item-list {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Estilos para tablets e telas médias */
@media (min-width: 768px) and (max-width: 1280px) {
  .cart-item-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>