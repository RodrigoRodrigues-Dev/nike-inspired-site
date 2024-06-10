<script setup>
import { inject, ref, watch, computed } from 'vue';
import HeaderMinified from '@/components/HeaderMinified.vue';
import FavoriteItem from '@/components/FavoriteItem.vue';
import PopupItemAdd from '@/components/PopupItemAdd.vue';

// Injeção dos estados necessários
const favStore = inject('fav').favoriteStore;
const { cart } = inject('cart');

const showPopup = ref(false);
const favorites = computed(() => favStore.favorites);

// Observa mudanças no carrinho para exibir o popup
watch(cart, () => {
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, 3500);
}, { deep: true });
</script>

<template>
  <HeaderMinified />
  <transition name="fade">
    <div v-if="showPopup">
      <template v-for="item in cart" :key="item.id">
        <PopupItemAdd
          :title="item.title"
          :price="item.price"
          :imgURL="item.imgURL"
        />
      </template>
    </div>
  </transition>
  <div v-if="favorites.length > 0" class="favorites--full">
    <div class="favorites">
      <h2 class="favorites__title">Favoritos</h2>
      <div class="favorites__list">
        <FavoriteItem
          v-for="item in favorites"
          :key="item.id"
          :title="item.title"
          :type="item.type"
          :price="item.price"
          :imgURL="item.img"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <div class="favorites--empty__container">
      <h1>Seu Favoritos está vazio...</h1>
      <RouterLink to="/">
        <button class="favorites--empty__container__btn">Voltar para o inicio</button>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
@import '/src/assets/styles/_variaveis.scss';

.favorites {
  max-width: 100em;
  width: 100%;
  margin: auto;

  &__title {
    margin: 1.6em 0;
    font-size: 2.2em;
    font-weight: 900;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em; 
  }

  &--empty__container {
    margin: auto;
    max-width: 100em;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__btn {
      @include btn(1em); 
      width: 33em;
      padding: 0.7em;
      border-radius: 1em; 
      margin-top: 1.7em;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  position: fixed;
  z-index: 9999;
  opacity: 0;
}
</style>