<template>
    <div class="membersInfos">
        <h3 class="membersInfos__message">
            Membros: Frete grátis para pedidos acima de R$ 300,00
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

        &__message {
            font-size: 12px;
        }
    }
</style>