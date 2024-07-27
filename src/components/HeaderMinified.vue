<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="headerMin">
        <RouterLink to="/">
            <img src="/src/assets/images/nike-logo.png" alt="Nike Logo">
        </RouterLink>
    </header>
</template>

<style lang="scss">
@import '/src/assets/styles/_variaveis.scss';

.headerMin {
    background-color: $color-light-background;
    padding: 2rem;
    margin-bottom: 1.25rem;

    img {
        width: 10vmin;
    }
}
</style>