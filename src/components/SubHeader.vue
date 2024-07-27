<template>
    <div class="subHeader">
        <div class="container">
            <div class="subHeader__logo">
                <img src="https://static.nike.com.br/v10-408-0/images/brands/jordan.svg" alt="">
                <img src="https://static.nike.com.br/v10-408-0/images/brands/snkrs.svg" alt="">
            </div>
            <div class="subHeader__menu">
                <div class="subHeader__menu__item">Nike Journal</div>
                <div class="line-vertical"></div>
                <div class="subHeader__menu__item">Ajuda</div>
                <div class="line-vertical"></div>
                <div class="subHeader__menu__item">Junte-se a nós</div>
                <div class="line-vertical"></div>
                <div class="subHeader__menu__item">Entrar</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.subHeader {
    background-color: $color-light-background;
    width: 100%;
    padding: 0.7rem 0;
    color: $color-primary;
    font-size: 1.2rem;

    &__logo {
        img {
            margin-right: 1.5rem;
        }
    }

    &__menu {
        display: flex;
        align-items: center;
        gap: 1rem;

        &__item {
            font-size: 0.8rem;

            &:hover {
                cursor: pointer;
                color: lighten($color-primary, 25%);
            }
        }
    }

    .container {
        max-width: 1700px;
        display: flex;
        justify-content: space-between;
    }

    &__message {
        font-size: 0.8rem;
    }
}

@media (max-width: 1760px) {
    .subHeader {
        .container {
            max-width: 1600px;
        }
    }

    @media (max-width: 1660px) {
        .subHeader .container {
            max-width: 1480px;
        }
    }

    @media (max-width: 1560px) {
        .subHeader .container {
            max-width: 1280px;
        }
    }

    @media (max-width: 1280px) {
        .subHeader .container {
            max-width: 1200px;
        }
    }
}

@media (max-width: 1320px) {
    .subHeader {
        display: none;
    }
}

.line-vertical {
    height: 100%;
    width: 1px;
    background-color: $color-black;
}
</style>