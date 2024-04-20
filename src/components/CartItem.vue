<template>
    <div class="cartItem">
        <img class="cartItem__image" src="/src/assets/images/nike-lunarlon.png" alt="">
        <h2>Nike Lunarlon</h2>
        <span class="cartItem__price">R$ 599,00</span>
        <img class="cartItem__del" src="/src/assets/images/icons/x.svg">
    </div>
</template>

<style lang="scss">
    @import '/src/assets/styles/_variaveis.scss';

    .cartItem {
        height: 5em;
        padding: 2em;
        background-color: $colorCard;
        border-radius: 2em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2em;

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