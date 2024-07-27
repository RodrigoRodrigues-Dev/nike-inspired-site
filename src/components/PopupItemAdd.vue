<script setup>
defineProps({
  imgURL: String,
  title: String,
  price: Number,
})

const formatPrice = (price) => {
  const parts = price.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${parts.join(",")},00`;
};
</script>

<template>
  <div class="popupItem">
    <h3 class="popupItem__title">
      Adicionado ao carrinho
      <img class="popupItem__title__img" src="/src/assets/images/icons/verification-symbol.svg">
    </h3>
    <div class="popupItem__container">
      <div class="popupItem__container__product">
        <img class="popupItem__container__product__img" :src="imgURL" alt="">
        <div class="popupItem__container__product__details">
          <h3 class="popupItem__container__product__details__title">{{ title }}</h3>
          <span class="popupItem__container__product__details__price">{{ formatPrice(price) }}</span>
        </div>
      </div>
      <RouterLink to="/Drawer">
        <button class="popupItem__container__btn">Ver carrinho</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/variaveis.scss';

.popupItem {
  position: fixed;
  z-index: 9999;
  top: 6.875rem;
  width: 500px;
  right: 3rem;
  height: 15.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: $color-light-background;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media (max-width: 1280px) {
    right: 1rem;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    &__img {
      margin-left: 0.5rem;
      width: 1rem;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__product {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 1.5rem 0;

      &__img {
        width: 7rem;
      }

      &__details {
        margin-left: 1rem;

        &__title {
          margin-bottom: 0.3rem;
        }

        &__price {
          color: $color-dark-gray;
          font-weight: 900;
        }
      }
    }

    &__btn {
      @include btn-dark(1rem);
      width: 22rem;
      border-radius: 1rem;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }
  }
}

@media (max-width: 520px) {
  .popupItem {
    width: 320px;
    top: 7em;
    height: 12rem;

    &__title {
      margin-top: 0rem;

      &__img {
        margin-left: 0.8rem;
        width: 0.8rem;
      }
    }

    &__container {
      &__product {
        width: 100%;
        padding: 1.5rem 0;

        &__img {
          width: 6rem;
        }

        &__details {
          margin-left: 1rem;

          &__title {
            margin-bottom: 0.3rem;
          }

          &__price {
            color: $color-dark-gray;
            font-weight: 900;
          }
        }
      }

      &__btn {
        @include btn-dark(0.9rem);
        width: 15rem;
        padding: 0.3rem;
        margin-bottom: 0rem;
      }
    }
  }
}
</style>