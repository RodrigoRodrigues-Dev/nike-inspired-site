<script setup>
    import { ref } from 'vue';

    defineProps({
        img: String,
        title: String,
        type: String,
        price: String,
        onClickAdd: Function
    })

    const isLiked = ref(false);

    const onClick = () => {
        isLiked.value = !isLiked.value;
    };
</script>

<template>
    <div class="card">
        <div class="card__images"> 
            <img @click="onClick" class="card__images__favoriteIcon" :src="isLiked ? '/src/assets/images/icons/Favorite-icon-active.svg' : '/src/assets/images/icons/Favorite-icon.svg'" alt="">
            <img class="card__images__image" :src="img" alt="">
        </div>
        <div class="card__description">
            <h2 class="card__description__title">{{ title }}</h2>
            <span class="card__description__type">{{ type }}</span>
            <strong class="card__description__price">{{ price }}</strong>
            <button class="card__description__btn" @click="onClickAdd">Adicionar ao carrinho</button>   
        </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/variaveis.scss';

    .card {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        padding: 15px;

        &__images {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 300px;
            background-color: $colorCard;
            border-radius: 10px;
            margin-bottom: 30px;

            &__favoriteIcon {
                position: absolute;
                top: 0;
                left: 0;
                margin: 30px;
                width: 30px;

                &:hover {
                    cursor: pointer;
                }
            }

            &__image {
                width: 210px;
            }
        }

        &__description {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            width: 100%;

            &__title {
                font-size: 20px;
            }

            &__type {
               color: $colorQuaternary;
            }
            
            &__price {
                font-size: 1.1em;
            }

            &__btn {
                @include btn(1em);
                border: none;
                border-radius: 1em;
                padding: 1em 0px;
                margin-top: 0.8em;
            }
        }
    }
</style>