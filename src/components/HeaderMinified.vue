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
    background-color: $colorCard;
    padding: 2em;
    margin-bottom: 1.25em;

    img {
        width: 6em;
    }
}
</style>