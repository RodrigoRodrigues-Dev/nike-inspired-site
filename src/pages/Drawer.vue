<script setup>
import { ref } from 'vue';
import { inject } from 'vue';
import HeaderMinified from '@/components/HeaderMinified.vue';
import CartList from '@/components/CartList.vue';
import { RouterLink } from 'vue-router';

const { totalPrice, cart, clearCart } = inject('cart');

const formatPrice = (price) => {
    const parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${parts.join(",")}`;
};

function aplicarDesconto(valor) {
    const desconto = valor * 0.10;
    const valorComDesconto = valor - desconto;
    const valorComDescontoInteiro = Math.round(valorComDesconto);
    return formatPrice(valorComDescontoInteiro);
}

const compraFinalizada = ref(false);

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
        max-width: 1600px;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;

        &__container {
            &__details {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    height: 2.8em;
                    margin-right: 1em
                }
            }

            &__btn {
                @include btn(1em);
                width: 100%;
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
</style>