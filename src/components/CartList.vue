<script setup>
    import { inject } from 'vue'
    import CartItem from './CartItem.vue';

    const { cart, removeFromCart } = inject('cart')

    const formatPrice = (price) => {
        const parts = price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `R$ ${parts.join(",")},00`;
    };
</script>

<template>
    <div class="cartList">
        <CartItem 
            v-for="item in cart"
            :key="item.id"
            :title="item.title"
            :price="formatPrice(item.price)"
            :imgURL="item.imgURL"
            @on-click-remove="() => removeFromCart(item)"
        />
    </div>
</template>

<style lang="scss">
    .cartList {
        width: 100%;
    }
</style>