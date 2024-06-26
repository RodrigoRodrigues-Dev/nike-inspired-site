<script setup>
import { ref, inject } from 'vue';
import HeaderMinified from '@/components/HeaderMinified.vue';
import CartList from '@/components/CartList.vue';
import { RouterLink } from 'vue-router';

const { totalPrice, cart, clearCart } = inject('cart');

const compraFinalizada = ref(false);

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

const formatPrice = (price) => {
  const parts = price.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${parts.join(",")}`;
};
</script>

<template>
    <HeaderMinified />
    <div class="drawer--confirmation" v-if="compraFinalizada">
        <div class="drawer--confirmation__container">
            <div class="drawer--confirmation__container__details">
                <img class="drawer--confirmation__container__details__img" src="/src/assets/images/icons/verification-symbol.svg">
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
                    </div>
                    <button class="cart-button" @click="finalizarCompra">Finalizar Compra</button>
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
    </div>
</template>

<style lang="scss">
@import '/src/assets/styles/_variaveis.scss';

.drawer {
  &--empty, &--confirmation {
    margin: auto;
    max-width: 100em;
    height: 70vh;
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
          height: 1.9em;
          margin-right: 0.7em;
        }
      }

      &__btn {
        @include btn(1em);
        width: 45em;
        padding: 0.7em;
        border-radius: 1em;
        margin-top: 1.7em;
      }
    }
  }
}

.drawer-container {
  position: relative;
}

.cart-container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 6em 0;
}

.subtotal {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: $colorCard;
  padding: 1em 3em;
  font-weight: 900;

  &__label {
    font-size: 1.5em;
  }

  &__value {
    font-size: 1.5em;
    margin-left: 1em;
  }
}

.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  &__title {
    padding: 1em 0;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding: 1.5em;
    width: 100%;
    margin-bottom: 1em;
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
}

.cart-button {
  @include btn(1em);
  width: 70%;
  padding: 1em;
  border-radius: 1em;
  cursor: pointer;
}

.footerMin {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;

  &__paymentMethods {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    &__item {
      margin-left: 1.5em;

      img {
        width: 2.4em;
      }
    }
  }
}

// Animação de fade para entrada e saída
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  position: fixed;
  z-index: 9999;
  opacity: 0;
}

// Estilos para dispositivos móveis pequenos
@media (min-width: 320px) and (max-width: 480px) {
  .cart-container {
    max-width: 370px;
    margin: auto;
    padding: 0 0 9em 0;
  }

  .subtotal {
    width: 100%;
    padding: 1em 1em;
    border-radius: 2em;

    &__label, &__value {
      font-size: 1.2em;
    }
  }

  .resume {
    margin-top: 2em;
    width: 100%;
  }

  .drawer {
    &--empty, &--confirmation {
      max-width: 10em;

      &__container {
        &__details {
          h1 {
            font-size: 1.4em;
          }

          img {
            height: 1.5em;
          }
        }

        &__btn {
          width: 28em;
          padding: 0.7em;
        }
      }
    }
  }
}

// Estilos para dispositivos móveis grandes
@media (min-width: 481px) and (max-width: 767px) {
  .cart-container {
    max-width: 470px;
    margin: auto;
    padding: 0 0 9em 0;
  }

  .subtotal {
    width: 100%;
    padding: 1em 1em;
    border-radius: 2em;

    &__label, &__value {
      font-size: 1.2em;
    }
  }

  .resume {
    margin-top: 2em;
    width: 100%;
  }

  .drawer {
    &--empty, &--confirmation {
      max-width: 10em;

      &__container {
        &__details {
          h1 {
            font-size: 1.4em;
          }

          img {
            height: 1.5em;
          }
        }

        &__btn {
          width: 28em;
          padding: 0.7em;
        }
      }
    }
  }
}

// Estilos para tablets
@media (min-width: 768px) and (max-width: 1024px) {
  .drawer-container {
    max-width: 670px;
    margin: auto;
    padding: 0 0 9em 0;
  }

  .subtotal {
    width: 100%;
    padding: 1em 1em;
    border-radius: 2em;

    &__label, &__value {
      font-size: 1.2em;
    }
  }

  .resume {
    margin: 2em 0;
    width: 100%;
  }

  .drawer {
    &--empty, &--confirmation {
      max-width: 10em;

      &__container {
        &__details {
          h1 {
            font-size: 1.4em;
          }

          img {
            height: 1.5em;
          }
        }

        &__btn {
          width: 28em;
          padding: 0.7em;
        }
      }
    }
  }

  .cartItem {
    &__title {
      position: absolute;
      left: 13em;
      font-size: 1.1em;
    }

    &__price {
      position: absolute;
      right: 6em;
      font-size: 1em;
    }
  }
}

// Estilos para desktops
@media (min-width: 1025px) and (max-width: 1624px) {
  .drawer-container {
    max-width: 970px;
    margin: auto;
    padding: 0 0 9em 0;
  }
}

// Estilos compartilhados para .drawer em telas médias
@media (max-width: 1024px) {
  .drawer {
    &--empty, &--confirmation {
      &__container {
        &__details {
          h1 {
            font-size: 1.4em;
          }

          img {
            height: 1.5em;
          }
        }

        &__btn {
          width: 28em;
          padding: 0.7em;
        }
      }
    }
  }
}
</style>