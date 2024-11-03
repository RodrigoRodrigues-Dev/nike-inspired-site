<script setup lang="ts">
import Header from '~/components/layout/Header.vue';
import TopBar from '~/components/layout/TopBar.vue';
import PromoBar from '~/components/promotions/PromoBar.vue';
import CategoryMenu from '~/components/navigation/CategoryMenu.vue';
</script>

<template>
    <div>
        <TopBar />
        <Header />
        <CategoryMenu />
        <PromoBar />
    </div>
</template>