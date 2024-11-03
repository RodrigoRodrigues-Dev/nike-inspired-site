<template>
    <div class="top-bar">
        <div class="container">
            <div class="top-bar__logo">
                <img src="https://nike-inspired-site-images.vercel.app/icons/jordan.svg" alt="logo Air Jordan">
                <img src="https://nike-inspired-site-images.vercel.app/icons/snkrs.svg" alt="logo SNKRS">
            </div>
            <div class="top-bar__menu">
                <div class="top-bar__menu__item">Nike Journal</div>
                <div class="line-vertical"></div>
                <div class="top-bar__menu__item">Ajuda</div>
                <div class="line-vertical"></div>
                <div class="top-bar__menu__item">Junte-se a nós</div>
                <div class="line-vertical"></div>
                <div class="top-bar__menu__item">Entrar</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.top-bar {
    background-color: $color-light-background;
    padding: 0.7rem 2rem;
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
        gap: 0.8rem;

        &__item {
            font-size: 0.76rem;

            &:hover {
                cursor: pointer;
                color: lighten($color-primary, 25%);
            }
        }
    }

    .container {
        max-width: 100%;
        display: flex;
        justify-content: space-between;
    }
}

.line-vertical {
    height: 60%;
    width: 1px;
    background-color: $color-black;
}

@media (max-width: 1025px) {
    .top-bar {
        display: none;
    }
}
</style>