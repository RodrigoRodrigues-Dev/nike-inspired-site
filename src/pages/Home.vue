<script setup>
    import Header from '../components/Header.vue';
    import MembersInfos from '@/components/MembersInfos.vue';
</script>

<template>
    <div class="container">
        <Header />
    </div>
    <MembersInfos />
    <div class="container">
        <Hover />
    </div>
</template>

<style lang="scss">
    .container {
        max-width: 1200px;
        margin: auto;
    }
</style>