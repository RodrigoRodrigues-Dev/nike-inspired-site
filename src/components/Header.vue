<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/">
        <img class="header__logo" src="@/assets/images/nike-logo.png" alt="Logo da Nike">
      </RouterLink>
      <h3 class="header__title">
        just do it
      </h3>
      <ul class="header__iconMenu">
        <li class="header__iconMenu__item">
          <img src="../assets/images/icons/User-icon.svg" alt="">
        </li>
        <li class="header__iconMenu__item">
          <RouterLink to="/Favorites">
            <img src="../assets/images/icons/Favorite-icon.svg" alt="">
          </RouterLink>
        </li>
        <li class="header__iconMenu__item">
          <RouterLink to="/Drawer">
            <img src="../assets/images/icons/Cart-icon.svg" alt="">
          </RouterLink>
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
  background-color: $color-white;
  padding: 1.5rem 0;
  z-index: 999;
  box-shadow: 0px 0.375rem 0.5rem rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 10vmin;
  }

  &__title {
    text-transform: uppercase;
    letter-spacing: 0.375rem;
    font-weight: bold;
  }

  &__iconMenu {
    display: flex;
    gap: 1rem;

    &__item {
      position: relative;

      &:hover {
        cursor: pointer;

        &::before {
          z-index: 1;
          content: '';
          position: absolute;
          background-color: $color-light-gray-2;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          top: 44%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      img {
        z-index: 2;
        position: relative;
        width: 1.5rem;
      }
    }
  }
}

/* Estilos para dispositivos móveis */
@media (max-width: 768px) {
  .header {
    &__title {
      font-size: 1rem;
      letter-spacing: 0.2rem;
    }

    &__iconMenu {
      gap: 1rem;

      &__item {
        margin-left: 0;
      }

      img {
        width: 1.3rem;
      }
    }

    &__iconMenu {
      &__item {
        &:hover {
          &::before {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .header {
    .container {
      max-width: 310px;
    }
  }
}
</style>