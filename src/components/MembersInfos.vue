<template>
    <div class="members-infos">
        <h3 class="members-infos__message">
            Frete grátis e todas as compras com 10% de desconto
        </h3>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.members-infos {
    display: flex;
    justify-content: center;
    background-color: $colorMain;
    width: 100%;
    padding: 1em 0;
    color: $colorSecondary;
    margin-bottom: 1.5em;

    &__message {
        font-size: 0.8em;
    }
}
</style>