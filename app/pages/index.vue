<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import CardsAreas from '~/components/home/CardsAreas.vue'
import SeusDireitos from '~/components/home/SeusDireitos.vue'
import NossosValores from '~/components/home/NossosValores.vue'
import CardsProfissionais from '~/components/home/CardsProfissionais.vue'
import Footer from '~/components/layout/Footer.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <Header />
    <HeroSection />
    <CardsAreas />
    <SeusDireitos />
    <NossosValores />
    <CardsProfissionais />
    <Footer />
  </div>
</template>

