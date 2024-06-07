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
                <button>Ver carrinho</button>        
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .popupItem {
        position: fixed;
        z-index: 9999;
        top: 110px;
        width: 450px;
        right: 15px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1em;
        background-color: $colorCard;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        
        &__title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 1em;

            &__img {
                margin-left: 8px;
                width: 16px;
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
                padding: 24px 0px;
                
                &__img {
                    width: 7em;
                }

                &__details {
                    margin-left: 1em;

                    &__title {
                        margin-bottom: 0.3em;
                    }

                    &__price {
                        color: #333333;
                        font-weight: 900;
                    }
                }
            }

            button {
                @include btn(1em);
                width: 390px;
                border-radius: 1em;
                padding: 0.5em;
                margin-bottom: 1em;
            }
        }
    }
</style>