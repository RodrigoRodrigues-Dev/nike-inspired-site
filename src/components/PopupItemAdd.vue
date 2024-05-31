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
        <h3 class="popupItem__title">Adicionado ao carrinho</h3>
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
        top: 100px;
        right: 10px;
        height: 250px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1em;
        background-color: $colorCard;
        
        &__title {
            margin-top: 1em;
        }

        &__container {
            width: 25em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &__product {
                width: 350px;
                display: flex;
                align-items: center;
                padding: 10px 0px;
                
                &__img {
                    width: 8em;
                }

                &__details {
                    margin-left: 1em;

                    &__title {
                        font-size: 1em
                    }
                }
            }

            button {
                @include btn(1em);
                width: 350px;
                border-radius: 1em;
                padding: 0.5em;
                margin-bottom: 1em;
            }
        }
    }
</style>