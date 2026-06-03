<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/img/banner-advocacia-2.webp',
  '/img/banner-topo-home-2.webp'
]

const currentIndex = ref(0)
let timer: any = null

onMounted(() => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 2000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="relative w-full min-h-[90vh] bg-[#07131B] overflow-hidden flex items-center">
    <!-- Imagens de fundo intercaladas com fade suave e opacidade baixa -->
    <div class="absolute inset-0 z-0">
      <div 
        v-for="(img, index) in images" 
        :key="img"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :style="{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: currentIndex === index ? '0.28' : '0'
        }"
      ></div>
      <!-- Gradiente Mobile: escurece topo e base, revelando imagem no centro -->
      <div 
        class="absolute inset-0 z-10 md:hidden" 
        style="background: linear-gradient(to bottom, #07131B 0%, rgba(7,19,27,0.5) 30%, rgba(7,19,27,0.3) 50%, rgba(7,19,27,0.5) 70%, #07131B 100%);"
      ></div>
      <!-- Gradiente Desktop: escuro à esquerda, transparente à direita -->
      <div 
        class="absolute inset-0 z-10 hidden md:block" 
        style="background: linear-gradient(to right, #07131B 0%, #07131B 20%, rgba(7, 19, 27, 0.6) 45%, rgba(7, 19, 27, 0.05) 75%, transparent 100%);"
      ></div>
    </div>
  </section>
</template>

