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
</style>