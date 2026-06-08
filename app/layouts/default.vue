<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import WhatsAppFloating from '~/components/layout/WhatsAppFloating.vue'
</script>

<template>
  <div class="relative min-h-screen bg-bg-dark text-content-inverse flex flex-col justify-between">
    <Header />
    <main class="flex-grow pt-28">
      <slot />
    </main>
    <Footer />
    <WhatsAppFloating />
  </div>
</template>
