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
// Importação das variáveis de estilo
@import '../assets/styles/variaveis.scss';

.header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 1.5em 0;
  z-index: 999;
  box-shadow: 0px 0.375em 0.5em rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    width: 7em;
  }

  &__title {
    text-transform: uppercase;
    letter-spacing: 0.375em;
    font-weight: bold;
  }

  &__iconMenu {
    display: flex;

    &__item {
      margin-left: 0.875em;

      &:hover {
        cursor: pointer;
      }

      img {
        width: 1.7em;
      }
    }
  }
}

/* Estilos para dispositivos móveis */
@media (max-width: 768px) {
  .header {
    &__logo {
      width: 5em;
    }

    &__title {
      letter-spacing: 0.2em;
    }

    &__iconMenu {
      gap: 1em;

      &__item {
        margin-left: 0;
      }
    }
  }
}
</style>