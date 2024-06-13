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
            <span class="hero__productDetails__description">O Tênis Nike Lunarlon proporciona conforto, estilo e desempenho excepcionais. Com uma parte superior respirável e amortecimento responsivo na entressola, é ideal para corredores que buscam qualidade e sofisticação.</span>
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

  // Disables text selection
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* IE 10+/Edge */
  user-select: none;         /* Standard */

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
    font-size: 6.90em;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    padding: 0.2em 0;
    font-weight: 900;

    &--white {
      margin-left: 0.05em;
      color: $colorSecondary;
    }
  }

  &__productDetails {
    position: absolute;
    bottom: 9em;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 17em;

    &__description {
      margin-bottom: 10%;
      text-align: center;
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

  &__productLabel {
    position: absolute;
    bottom: 1em;
    right: 0;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 8em;
    writing-mode: vertical-lr;
    color: transparent;

    -webkit-text-stroke: 2px $colorTertiary;
    -moz-text-stroke: 2px $colorTertiary;
  }
}

/* Estilos para dispositivos móveis pequenos */
@media (min-width: 320px) and (max-width: 480px) {
  .hero {
    height: 37em;

    &::before {
      width: 9em;
      top: 0;
    }

    &__image {
      width: 48%;
    }

    &__title {
      font-size: 3em;
      letter-spacing: 0.02em;
      padding: 0.3em 0;

      &--white {
        margin-left: 0.12em;
      }
    }

    &__productDetails {
      bottom: 3em;
      width: 9em;

      &__price {
        font-size: 1.7em;
      }

      &__button {
        @include btn(0.7em);
      }
    }

    &__productLabel {
      font-size: 5em;

      -webkit-text-stroke: 1px $colorTertiary;
      -moz-text-stroke: 1px $colorTertiary;
    }
  }
}

/* Estilos para dispositivos móveis grandes */
@media (min-width: 481px) and (max-width: 767px) {
  .hero {
    height: 38em;

    &::before {
      width: 9em;
      top: 0;
    }

    &__image {
      width: 48%;
    }

    &__title {
      font-size: 3.4em;
      letter-spacing: 0.01em;
      padding: 0.3em 0;

      &--white {
        margin-left: 0.12em;
      }
    }

    &__productDetails {
      bottom: 3em;
      width: 10em;

      &__price {
        font-size: 1.7em;
      }

      &__button {
        @include btn(0.7em);
      }
    }

    &__productLabel {
      font-size: 5em;

      -webkit-text-stroke: 1px $colorTertiary;
      -moz-text-stroke: 1px $colorTertiary;
    }
  }
}

/* Estilos para tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  .hero {
    height: 40em;

    &::before {
      width: 12em;
      top: 0;
    }

    &__image {
      width: 48%;
    }

    &__title {
      font-size: 4.5em;
      letter-spacing: 0.07em;
      padding: 0.3em 0;

      &--white {
        margin-left: 0.09em;
      }
    }

    &__productDetails {
      bottom: 3em;
      width: 15em;

      &__price {
        font-size: 2em;
      }

      &__button {
        @include btn(1em);
      }
    }

    &__productLabel {
      font-size: 5em;

      -webkit-text-stroke: 1px $colorTertiary;
      -moz-text-stroke: 1px $colorTertiary;
    }
  }
}

/* Estilos para desktops pequenos/laptops */
@media (min-width: 1025px) and (max-width: 1280px) {
  .hero {
    height: 55em;

    &::before {
      width: 17em;
      top: 0;
    }

    &__image {
      width: 48%;
    }

    &__title {
      top: 0;
      font-size: 5.4em;
      letter-spacing: 0.09em;
      padding: 0.3em 0;

      &--white {
        margin-left: 0.04em;
      }
    }

    &__productDetails {
      bottom: 8em;

      &__price {
        font-size: 2.5em;
      }
    }

    &__productLabel {
      font-size: 6em;

      -webkit-text-stroke: 1px $colorTertiary;
      -moz-text-stroke: 1px $colorTertiary;
    }
  }
}

/* Estilos para desktops médios */
@media (min-width: 1281px) and (max-width: 1440px) {
  .hero {
    height: 65em;

    &::before {
      width: 22.2em;
      top: 0;
    }

    &__title {
      top: 0;
      font-size: 8em;
      letter-spacing: 0.09em;
      padding: 0.3em 0;

      &--white {
        margin-left: 0.07em;
      }
    }

    &__productDetails {
      width: 25em;
      bottom: 15em;

      &__price {
        font-size: 2.5em;
      }
    }

    &__productLabel {
      font-size: 9em;

      -webkit-text-stroke: 2px $colorTertiary;
      -moz-text-stroke: 2px $colorTertiary;
    }
  }
}
</style>