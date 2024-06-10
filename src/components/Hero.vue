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
            <button class="hero__productDetails__button">Indisponivel</button>
        </div>
    </div>
</template>

<style lang="scss">
        @import '../assets/styles/variaveis.scss';

        .hero {
            position: relative;
            overflow: hidden;
            height: 56.25em;
            margin-bottom: 3em;
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
                width: 21.875em;
                position: absolute;
                bottom: 0;
                background: linear-gradient(15deg, $colorGradientOne, $colorGradientTwo, $colorGradientThree);
                border-radius: 2.5em;
            }

            &__image {
                width: 50%;
                max-width: 35em;
                height: auto;
                transform: scaleX(-1) rotate(30deg);
            }

            &__title {
                position: absolute;
                top: 0;
                left: 0;
                font-size: 7.25em;
                text-transform: uppercase;
                letter-spacing: 0.03em;
                padding: 0.2em 0em;
                font-weight: 900;
                
                &--white {
                    margin-left: 0.03em;
                    color: $colorSecondary;
                }
            }

            &__productDetails {
                position: absolute;
                bottom: 9em;
            }

            &__productLabel {
                position: absolute;
                bottom: 1em;
            }

            &__productLabel {
                right: 0;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 8em;
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
                width: 17em;

                &__description {
                    margin-bottom: 10%;
                }

                &__price {
                    font-size: 3.125em;
                    font-weight: 900;
                    margin-bottom: 0.5em;
                }

                &__button {
                    @include btn(1em);
                    padding: 0.625em 1.875em;
                    border-radius: 3.125em;
                    border: none;
                    background-color: $colorMain;
                    width: 100%;
                }
            }
        }
</style>