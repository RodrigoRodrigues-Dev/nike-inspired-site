<script setup>
import { ref, inject } from 'vue';
import HeaderMinified from '@/components/HeaderMinified.vue';
import CartList from '@/components/CartList.vue';
import { RouterLink } from 'vue-router';

const { totalPrice, cart, clearCart } = inject('cart');

const compraFinalizada = ref(false);

const formatPrice = (price) => {
  const parts = price.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${parts.join(",")},00`;
};

function aplicarDesconto(valor) {
  const desconto = valor * 0.10;
  const valorComDesconto = valor - desconto;
  const valorComDescontoInteiro = Math.round(valorComDesconto);
  return formatPrice(valorComDescontoInteiro);
}

function finalizarCompra() {
  compraFinalizada.value = true;
  clearCart();
}
</script>

<template>
  <HeaderMinified />
  <div class="drawer--confirmation" v-if="compraFinalizada">
    <div class="drawer--confirmation__container">
      <div class="drawer--confirmation__container__details">
        <img class="drawer--confirmation__container__details__img"
          src="/src/assets/images/icons/verification-symbol.svg">
        <h1>Compra finalizada com sucesso!</h1>
      </div>
      <RouterLink to="/">
        <button class="drawer--confirmation__container__btn">Voltar para o início</button>
      </RouterLink>
    </div>
  </div>
  <div v-else>
    <div class="drawer--empty" v-if="cart.length < 1">
      <div class="drawer--empty__container">
        <h1>Seu carrinho está vazio...</h1>
        <RouterLink to="/">
          <button class="drawer--empty__container__btn">Voltar para o inicio</button>
        </RouterLink>
      </div>
    </div>
    <div class="drawer--full" v-if="cart.length > 0">
      <div class="drawer-container">
        <div class="cart-container">
          <div class="cartList">
            <CartList />
          </div>
          <div class="subtotal">
            <span class="subtotal__label">Subtotal: </span>
            <strong class="subtotal__value">{{ formatPrice(totalPrice) }}</strong>
          </div>
          <div class="resume">
            <h2 class="resume__title">Resumo</h2>
            <div class="resume__item">
              <span class="resume__item-label">Valor dos produtos</span>
              <span class="resume__item-value">{{ formatPrice(totalPrice) }}</span>
            </div>
            <div class="resume__item">
              <span class="resume__item-label">Frete</span>
              <span class="resume__item-value resume__item-value__frete">Gratis</span>
            </div>
            <div class="resume__item">
              <span class="resume__item-label">Descontos</span>
              <span class="resume__item-value">10%</span>
            </div>
            <div class="resume__item">
              <span class="resume__item-label">Total da compra</span>
              <span class="resume__item-value resume__item-value__total">{{ aplicarDesconto(totalPrice) }}</span>
            </div>
            <button class="cart-button" @click="finalizarCompra">Finalizar Compra</button>
          </div>
        </div>
      </div>
      <footer class="footerMin">
        <div class="footer-container">
          <ul class="footerMin__paymentMethods">
            <li class="footerMin__paymentMethods__item">
              <img src="/src/assets/images/payments-icons/mastercard.svg" alt="">
            </li>
            <li class="footerMin__paymentMethods__item">
              <img src="/src/assets/images/payments-icons/visa.svg" alt="">
            </li>
            <li class="footerMin__paymentMethods__item">
              <img src="/src/assets/images/payments-icons/amex.svg" alt="">
            </li>
            <li class="footerMin__paymentMethods__item">
              <img src="/src/assets/images/payments-icons/elo.svg" alt="">
            </li>
            <li class="footerMin__paymentMethods__item">
              <img src="/src/assets/images/payments-icons/pix.svg" alt="">
            </li>
            <li class="footerMin__paymentMethods__item">
              <img src="/src/assets/images/payments-icons/discover.svg" alt="">
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import '/src/assets/styles/_variaveis.scss';

.drawer {

  &--empty,
  &--confirmation {
    margin: auto;
    height: 75vh;
    max-width: 100rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__details {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 1.9rem;
          margin-right: 0.7rem;
        }
      }

      &__btn {
        @include btn-dark(1rem);
        width: 45rem;
        padding: 0.7rem;
        border-radius: 1rem;
        margin-top: 1.7rem;
      }
    }
  }
}

.drawer-container {
  position: relative;
  max-width: 100rem; // default for desktops
  margin: auto;

  @media (max-width: 1024px) {
    max-width: 870px;
  }

  @media (min-width: 1025px) and (max-width: 1624px) {
    max-width: 970px;
  }
}

.cart-container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 970px;
    padding: 0;
  }

  @media (max-width: 920px) {
    max-width: 780px;
  }

  @media (max-width: 820px) {
    max-width: 620px;
  }

  @media (max-width: 680px) {
    max-width: 520px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
  }
}

.subtotal {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: $color-light-background;
  padding: 1rem 3rem;
  font-weight: 900;
  border-radius: 2rem;

  &__label,
  &__value {
    font-size: 1.3rem;
    margin-left: 1rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 1rem;

    &__label,
    &__value {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    &__label,
    &__value {
      font-size: 0.9rem;
    }
  }
}

.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 3rem 0;

  &__title {
    padding: 1rem 0;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
    width: 100%;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ccc;
  }

  &__item-value {
    &__frete {
      color: green;
    }

    &__total {
      font-weight: 900;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 3rem 0;
  }
}

.cart-button {
  @include btn-dark(1rem);
  width: 70%;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 1rem;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 100%;
  }
}

.footerMin {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  &__paymentMethods {
    display: flex;
    align-items: center;

    &__item {
      margin-left: 1.5rem;

      img {
        width: 2.4rem;

        @media (max-width: 480px) {
          width: 1.4rem;
        }
      }
    }
  }
}

// Animação de fade para entrada e saída
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  position: fixed;
  z-index: 9999;
  opacity: 0;
}

// Estilos para drawer em telas menores
@media (max-width: 820px) {
  .drawer {
    &--empty,
    &--confirmation {
      max-width: 10rem;

      &__container {
        h1 {
          font-size: 1.3rem;
        }

        &__details {
          h1 {
            font-size: 1rem;
          }

          img {
            height: 1.5rem;
          }
        }

        &__btn {
          font-size: 1rem;
          width: 22rem;
          padding: 0.7rem;
        }
      }
    }
  }
}
</style>