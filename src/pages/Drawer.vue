<script setup>
import HeaderMinified from '@/components/HeaderMinified.vue';
import CartItem from '@/components/CartItem.vue';
</script>

<template>
    <HeaderMinified />
    <div class="drawer-container">
        <div class="cart-container">
            <div class="cartList">
                <CartItem />
            </div>
            <div class="subtotal">
                <span class="subtotal__label">Subtotal: </span>
                <strong class="subtotal__value">R$ 599,99</strong>
            </div>
            <div class="resume">
                <h2 class="resume__title">Resumo</h2>
                <div class="resume__item">
                    <span class="resume__item-label">Valor dos produtos</span>
                    <span class="resume__item-value">R$ 799,99</span>
                </div>
                <div class="resume__item">
                    <span class="resume__item-label">Frete</span>
                    <span class="resume__item-value">Gratis</span>
                </div>
                <div class="resume__item">
                    <span class="resume__item-label">Descontos</span>
                    <span class="resume__item-value">15%</span>
                </div>
                <div class="resume__item">
                    <span class="resume__item-label">Total da compra</span>
                    <span class="resume__item-value">R$ 599,99</span>
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
</template>

<style lang="scss">
    @import '/src/assets/styles/_variaveis.scss';

    body {
        height: 100vh;
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

    .cartList {
        width: 100%;
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