<template>
    <header class="header">
        <img class="header__logo" src="../assets/images/nike-logo.png" alt="">
        <h3 class="header__title">
            just do it
        </h3>
        <ul class="header__iconMenu">
            <li class="header__iconMenu__item">
                <img src="../assets/images/icons/User-icon.svg" alt="">
            </li>
            <li class="header__iconMenu__item">
                <img src="../assets/images/icons/Favorite-icon.svg" alt="">
            </li>
            <li class="header__iconMenu__item">
                <img src="../assets/images/icons/Cart-icon.svg" alt="">
            </li>
        </ul>
    </header>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .header {
        padding: 24px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__logo {
            width: 112px;
        }

        &__title {
            text-transform: uppercase;
            letter-spacing: 6px;
            color: $colorMain;
            font-weight: bold;
        }

        &__iconMenu {
            display: flex;

            &__item {
                margin-left: 14px;
                cursor: pointer;
            }
        }
    }
</style>