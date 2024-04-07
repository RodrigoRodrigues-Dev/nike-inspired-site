<script setup>
    import Header from '../components/Header.vue';
    import MembersInfos from '@/components/MembersInfos.vue';
    import Hero from '@/components/Hero.vue';
    import Releases from '@/components/Releases.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header />
    <MembersInfos />
    <div class="container">
        <Hero />
        <Releases />
    </div>
    <Footer />
</template>