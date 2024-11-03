<template>
    <div class="promo-bar">
        <p class="promo-bar__message">
            Frete grátis e todas as compras com 10% de desconto
        </p>
    </div>
</template>

<style lang="scss">
.promo-bar {
    display: flex;
    justify-content: center;
    background-color: $color-primary;
    width: 100%;
    padding: 1rem 0;
    color: $color-white;

    &__message {
        font-size: 0.8rem;
    }
}
</style>