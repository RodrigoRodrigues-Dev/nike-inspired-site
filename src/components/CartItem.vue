<script setup>
const emit = defineEmits(['onClickRemove']);

defineProps({
    id: Number,
    title: String,
    price: String,
    imgURL: String,
});
</script>

<template>
    <div class="cartItem">
        <img class="cartItem__image" :src="imgURL" alt="Imagem do Produto">
        <h2 class="cartItem__title">{{ title }}</h2>
        <span class="cartItem__price">{{ price }}</span>
        <img class="cartItem__del" @click="emit('onClickRemove')" src="/src/assets/images/icons/x.svg" alt="Ícone Remover">
    </div>
</template>

<style lang="scss">
@import '/src/assets/styles/_variaveis.scss';

.cartItem {
    height: 4.5em;
    padding: 1.70em;
    margin-bottom: 1.25em;
    border-radius: 1.25em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $colorCard;
    position: relative;

    &__image {
        width: 6.3em;
    }

    &__details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 0.625em;
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
        right: 7.5em;
    }

    &__del {
        width: 1.2em;
        cursor: pointer;
    }

    /* Estilos para dispositivos móveis */
    @media (max-width: 768px) {
        height: 4em;
        padding: 1em;

        &__title {
            font-size: 0.9em;
            position: absolute;
            right: 13em;
        }

        &__image {
            width: 4em;
        }

        &__price {
            font-size: 0.9em;
            position: absolute;
            right: 5em;
        }
    }
}
</style>