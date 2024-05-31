<template>
    <div class="membersInfos">
        <h3 class="membersInfos__message">
            Frete gratis e todas as compras com 10% de desconto
        </h3>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .membersInfos {
        display: flex;
        justify-content: center;
        background-color: $colorMain;
        width: 100%;
        padding: 16px 0px;
        color: $colorSecondary;
        margin-bottom: 24px;

        &__message {
            font-size: 0.8em;
        }
    }
</style>