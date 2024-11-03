<template>
  <header class="header">
    <div class="container">
      <RouterLink to="/">
        <img class="header__logo" src="https://nike-inspired-site-images.vercel.app/nike-logo.png" alt="Logo da Nike">
      </RouterLink>
      <h3 class="header__title">
        just do it
      </h3>
      <ul class="header__iconMenu">
        <li class="header__iconMenu__itens">
          <icon name="ic:outline-account-circle" size="1.5rem" />
        </li>
        <li class="header__iconMenu__itens">
          <RouterLink to="/Favorites">
            <icon name="ic:baseline-favorite-border" size="1.5rem"/>
          </RouterLink>
        </li>
        <li class="header__iconMenu__itens">
          <RouterLink to="/Drawer">
            <icon name="ic:outline-shopping-bag" size="1.5rem"/>
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: $color-white;
  padding: 1.5rem 0;
  z-index: 999;
  box-shadow: 0px 0.375rem 0.5rem rgba($color-black, 0.1);

  .container {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
  }

  &__logo {
    width: 4.5rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.375rem;
  }

  &__iconMenu {
    display: flex;
    gap: 1rem;

    &__itens {
      position: relative;
      text-decoration: none;

      &:hover {
        cursor: pointer;

        &::before {
          z-index: -1;
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

      &__item {
        z-index: 2;
        position: relative;
        width: 1.5rem;
      }
    }
  }
}

@media (max-width: 630px) {
  .header {
    .container {
      padding: 0 2%;
    }

    padding: 1rem;

    &__logo {
      width: 3rem;
    }

    &__title {
      display: none;
    }

    &__iconMenu {
      &__itens {
        &__item {
          font-size: 1.2rem;
          z-index: 2;
          position: relative;
          width: 1rem;
        }
      }
    }
  }
}
</style>