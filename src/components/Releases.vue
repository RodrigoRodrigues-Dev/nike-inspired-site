<script setup>
    import Card from './Card.vue'; 
</script>

<template>
    <div class="releases">
        <h2 class="releases__title">Lançamentos</h2>
        <div class="releases__cards">
            <Card
                img="/src/assets/images/nike-lunarlon.png"
                title="Nike Lunarlon"
                type="Corrida"
                price="R$ 599,90"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .releases {
        margin-bottom: 60px;

        &__title {
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 48px;
        }

        &__cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 10px;
            row-gap: 16px;
        }
    }
</style>