<script setup>
import { ref, inject, watch } from 'vue';
import Header from '../components/Header.vue';
import MembersInfos from '@/components/MembersInfos.vue';
import Hero from '@/components/Hero.vue';
import Releases from '@/components/Releases.vue';
import Footer from '@/components/Footer.vue';
import PopupItemAdd from '@/components/PopupItemAdd.vue';

const { cart } = inject('cart');
const showPopup = ref(false);

watch(cart, () => {
  showPopup.value = true;
  setTimeout(() => {
    showPopup.value = false;
  }, 3500);
}, { deep: true });
</script>

<template>
  <div>
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
    <Header />
    <MembersInfos />
    <div class="container">
      <Hero />
      <Releases />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  position: fixed;
  z-index: 9999;
  opacity: 0;
}
</style>