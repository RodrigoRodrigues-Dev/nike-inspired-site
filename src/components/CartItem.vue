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
    height: 4.5rem;
    padding: 1.7rem;
    margin-bottom: 1.25rem;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: $color-light-background;
    position: relative;

    &__image {
        width: 6.3rem;
    }

    &__details {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 0.625rem;
    }

    &__title {
        font-size: 1.2rem;
        margin: 0;
    }

    &__price {
        font-weight: 900;
        font-size: 1.2rem;
        margin: 0;
        position: absolute;
        right: 7.5rem;
    }

    &__del {
        width: 1.2rem;
        cursor: pointer;
    }

    /* Estilos para dispositivos móveis */
    @media (max-width: 920px) {
        height: 4rem;
        padding: 1rem;

        &__title {
            font-size: 0.9rem;
            position: absolute;
            right: 13rem;
        }

        &__image {
            width: 4rem;
        }

        &__price {
            font-size: 0.9rem;
            position: absolute;
            right: 5rem;
        }
    }

    @media (max-width: 480px) {
        height: 4rem;
        padding: 1rem;

        &__title {
            font-size: 0.7rem;
            position: absolute;
            right: 10rem;
        }

        &__image {
            width: 4rem;
        }

        &__price {
            font-size: 0.8rem;
            position: absolute;
            right: 3rem;
        }

        &__del {
            width: 0.8rem;
        }
    }
}
</style>