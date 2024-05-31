<script setup>
    const emit = defineEmits(['onClickRemove'])

    defineProps({
        id: Number,
        title: String,
        price: String,
        imgURL: String,
    })
</script>

<template>
    <div class="cartItem">
        <img class="cartItem__image" :src="imgURL" alt="">
        <h2 class="cartItem__title">{{ title }}</h2>
        <span class="cartItem__price">{{ price }}</span>
        <img class="cartItem__del" @click="emit('onClickRemove')" src="/src/assets/images/icons/x.svg">
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
    position: relative;

    &__image {
        width: 7em;
    }

    &__details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 1em;
    }

    &__title {
        font-size: 1.2em;
        margin: 0;
    }

    &__price {
        font-weight: 900;
        font-size: 1.2em;
        margin: 0;
        position: absolute;
        right: 120px;
    }

    &__del {
        width: 1.2em;
        cursor: pointer;
    }
}
</style>