<template>
    <div class="hero">
        <img class="hero__image" src="/src/assets/images/nike-lunarlon.png" alt="">
        <h1 class="hero__title">
            Nike 
            <br> 
            lunar<span class="hero__title--white">lon</span>
        </h1>
        <h2 class="hero__productLabel">
            just do it
        </h2>
        <div class="hero__productDetails">
            <span class="hero__productDetails__description">O Tênis Nike Lunarlon oferece conforto, estilo e desempenho excepcionais. Com sua parte superior respirável e amortecimento responsivo na entressola, é a escolha ideal para corredores que buscam qualidade e sofisticação em um só produto.</span>
            <strong class="hero__productDetails__price">R$ 599,90</strong>
            <button class="hero__productDetails__button">Adicionar ao carrinho</button>
        </div>
    </div>
</template>

<style lang="scss">
        @import '../assets/styles/variaveis.scss';

        .hero {
            position: relative;
            overflow: hidden;
            height: 900px;
            margin-bottom: 48px;
            display: flex;
            justify-content: center;
            align-items: center;

            //Disables text selection
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE 10+/Edge */
            user-select: none; /* Standard */

            &::before {
                content: '';
                height: 100%;
                width: 350px;
                position: absolute;
                bottom: 0;
                background: linear-gradient(15deg, $colorGradientOne, $colorGradientTwo, $colorGradientThree);
                border-radius: 40px;
            }

            &__image {
                width: 50%;
                max-width: 560px;
                height: auto;
                transform: scaleX(-1) rotate(30deg);
            }

            &__title {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 116px;
                text-transform: uppercase;
                letter-spacing: 4px;
                padding: 35px 0px;
                font-weight: 900;
                
                &--white {
                    margin-left: 4px;
                    color: $colorSecondary;
                }
            }

            &__productLabel,
            &__productDetails {
                position: absolute;
                bottom: 100px;
            }

            &__productLabel {
                right: 0;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 128px;
                writing-mode: vertical-lr;
                color: transparent;

                -webkit-text-stroke: 2px $colorTertiary;
                -moz-text-stroke: 2px $colorTertiary;
            }

            &__productDetails {
                left: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                width: 272px;

                &__description {
                    margin-bottom: 10%;
                }

                &__price {
                    font-size: 50px;
                    font-weight: 900;
                    margin-bottom: 20px;
                }

                &__button {
                    @include btn(15px);
                    padding: 10px 30px;
                    border-radius: 50px;
                    border: none;
                    background-color: $colorMain;
                    width: 100%;
                }
            }
        }
</style>