<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#imports'
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
import WhatsAppFloating from '~/components/layout/WhatsAppFloating.vue'

const route = useRoute()
const isHeroTransparent = computed(() => {
  return route.path === '/' || route.path === '/sobre-nos' || route.path.startsWith('/noticias')
})
</script>

<template>
  <div class="relative min-h-screen bg-bg-dark text-content-inverse flex flex-col justify-between">
    <Header />
    <main class="flex-grow" :class="isHeroTransparent ? 'pt-0' : 'pt-28'">
      <slot />
    </main>
    <Footer />
    <WhatsAppFloating />
  </div>
</template>
