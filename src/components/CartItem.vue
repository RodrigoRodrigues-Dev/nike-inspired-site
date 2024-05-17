<script setup>
    defineProps({
        title: String,
        price: Number,
        img: String
    })
</script>

<template>
    <div class="cartItem">
        <img class="cartItem__image" :src="img" alt="">
        <h2>{{ title }}</h2>
        <span class="cartItem__price">{{ price }}</span>
        <img class="cartItem__del" src="/src/assets/images/icons/x.svg">
    </div>
</template>

<style lang="scss">
    @import '/src/assets/styles/_variaveis.scss';

    .cartItem {
        height: 5em;
        padding: 2em;
        margin-bottom: 2em;
        border-radius: 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: $colorCard;

        &__image {
            width: 7em;
        }

        &__price {
            font-weight: 900;
            font-size: 1.2em;
        }

        &__del {
            width: 1em;
            cursor: pointer;
        }
    }
</style>