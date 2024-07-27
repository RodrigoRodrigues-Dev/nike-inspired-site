<template>
  <div class="hero">
    <div class="hero__header">
      <h2 class="hero__header__title">Nike Air Jordan 4 "Teal"</h2>
      <span class="hero__header__subtitle">Elegância e Conforto</span>
    </div>
    <div class="hero__image-wrapper">
      <img class="" src="../assets/images/Nike_Air_Jordan_4_Teal.png" alt="">
      <h2 class="hero__image-wrapper__productLabel">
        AIR JORDAN
      </h2>
    </div>
  </div>
  <div class="hero-details">
    <div class="container">
      <h3 class="hero-details__title">
        Descrição
      </h3>
      <p class="hero-details__description">
        O NIKE AIR JORDAN 4 "TEAL" combina um tom vibrante de teal com detalhes em preto e cinza, criando um visual
        marcante. Feito com materiais de alta qualidade e tecnologia de amortecimento Air-Sole, oferece conforto
        excepcional e suporte superior. Ideal para quem busca estilo e desempenho, seja no dia a dia ou em ocasiões
        especiais.
      </p>
      <button class="hero-details__btn">Indisponível</button>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.hero {
  z-index: -2;
  height: 70vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: $color-teal;
  padding: 5rem 0;

  // Desativa a seleção de texto
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+/Edge */
  user-select: none; /* Padrão */

  &__header {
    font-size: 3vmin;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 3rem;
    color: $color-white;

    &__subtitle {
      font-size: 1rem;
    }
  }

  &__image-wrapper {
    height: 33vmin;
    width: 90vw;
    max-width: 1200px;
    position: relative;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: scaleX(1) rotate(-25deg);
    }

    &::before {
      content: '';
      z-index: -2;
      position: absolute;
      top: 40%;
      left: 50%;
      height: 33vmin;
      width: 33vmin;
      background-color: $color-soft-teal;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    &__productLabel {
      z-index: -1;
      position: absolute;
      top: 13%;
      text-transform: uppercase;
      font-weight: 900;
      font-size: 12vmin;
      color: transparent;

      -webkit-text-stroke: 2px $color-light-teal;
      -moz-text-stroke: 2px $color-light-teal;
    }
  }
}

.hero-details {
  background-color: $color-deep-teal;
  padding: 2rem;

  .container {
    color: $color-white;

    @media (min-width: 320px) and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  &__title {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__description {
    width: 75%;
    margin: 1rem 0;

    @media (min-width: 320px) and (max-width: 1024px) {
      font-size: 0.7rem;
      text-align: center;
    }
  }

  &__btn {
    @include btn-teal-light(1rem);
    border-radius: 1rem;
    padding: 0.5rem;
    width: 22rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 90vmin;

    &__header {
      font-size: 3.5vmin;

      &__subtitle {
        font-size: 0.8rem;
      }
    }

    &__image-wrapper {
      &__productLabel {
        -webkit-text-stroke: 1px $color-light-teal;
        -moz-text-stroke: 1px $color-light-teal;
      }
    }
  }

  .hero-details {
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__title {
      font-size: 1rem;
    }

    &__btn {
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
      width: 250px;
    }
  }
}
</style>