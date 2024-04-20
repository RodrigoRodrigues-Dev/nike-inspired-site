<script setup>
import HeaderMinified from '@/components/HeaderMinified.vue';
import CartItem from '@/components/CartItem.vue';
</script>

<template>
    <HeaderMinified />
    <div class="cartList-container">
        <div>
            Produtos
        </div>
        <div class="cartList">
            <CartItem />
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
</template>

<style lang="scss">
    body {
        height: 100vh;
    }

    .cartList-container {
        max-width: 1200px;
        width: 100%;
        margin: auto;
    }
    .footerMin {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;

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