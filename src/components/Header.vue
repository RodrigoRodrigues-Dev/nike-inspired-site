<template>
    <header class="header">
        <div class="container">
            <img class="header__logo" src="@/assets/images/nike-logo.png" alt="Logo da Nike">
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
        </div>
    </header>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .header {
        position: sticky;
        top: 0;
        left: 0;
        background-color: #fff;
        padding: 24px 0px;
        z-index: 999;
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__logo {
            width: 112px;
        }

        &__title {
            text-transform: uppercase;
            letter-spacing: 6px;
            font-weight: bold;
        }

        &__iconMenu {
            display: flex;

            &__item {
                margin-left: 14px;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
</style>