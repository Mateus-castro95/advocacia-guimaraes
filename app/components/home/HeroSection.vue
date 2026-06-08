<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { ChevronRight } from 'lucide-vue-next'

const slides = [
  {
    image: '/img/banner-advocacia-2.webp',
    title: 'Advocacia digital focada no cliente',
    description: 'Nós da Guimarães Advocacia prestamos assessoria através de uma equipe treinada e qualificada.',
    buttonText: 'Falar com o advogado',
    buttonLink: 'https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0',
    isH1: true
  },
  {
    image: '/img/banner-topo-home-2.webp',
    title: 'Excelência na garantia de seus direitos.',
    description: 'Desde o primeiro atendimento até o resultado final garantimos a excelência e o cuidado individualizado para cada cliente.',
    buttonText: 'Sobre o escritório',
    buttonLink: '/sobre-nos',
    isH1: false
  }
]

const currentIndex = ref(0)
let timer: any = null

const startTimer = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 7000)
}

const goToSlide = (index: number) => {
  currentIndex.value = index
  if (timer) clearInterval(timer)
  startTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="relative w-full min-h-[90vh] bg-[#161616] overflow-hidden flex items-center">
    <!-- Imagens de fundo intercaladas com fade suave e opacidade baixa -->
    <div class="absolute inset-0 z-0">
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.image"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :style="{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: currentIndex === index ? '0.28' : '0'
        }"
      ></div>
      <!-- Gradiente Mobile: escurece topo e base, revelando imagem no centro -->
      <div 
        class="absolute inset-0 z-10 md:hidden" 
        style="background: linear-gradient(to bottom, #161616 0%, rgba(22,22,22,0.5) 30%, rgba(22,22,22,0.3) 50%, rgba(22,22,22,0.5) 70%, #161616 100%);"
      ></div>
      <!-- Gradiente Desktop: escuro à esquerda, transparente à direita -->
      <div 
        class="absolute inset-0 z-10 hidden md:block" 
        style="background: linear-gradient(to right, #161616 0%, #161616 20%, rgba(22, 22, 22, 0.6) 45%, rgba(22, 22, 22, 0.05) 75%, transparent 100%);"
      ></div>
    </div>

    <!-- Conteúdo em cima da imagem -->
    <div class="relative z-20 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-36 sm:pt-40 lg:pt-44 pb-12">
      <div class="relative min-h-[350px] w-full max-w-2xl">
        <div 
          v-for="(slide, index) in slides" 
          :key="'content-'+index"
          class="transition-all duration-1000 ease-in-out absolute inset-0 flex flex-col justify-center"
          :class="currentIndex === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'"
        >
          <component 
            :is="slide.isH1 ? 'h1' : 'h2'"
            class="text-4xl sm:text-5xl lg:text-6xl text-content-inverse font-title font-titleSemibold leading-normal mb-6 drop-shadow-md"
          >
            {{ slide.title }}
          </component>
          
          <p class="text-base sm:text-lg lg:text-xl text-content-inverse/90 font-body mb-8 drop-shadow max-w-xl" style="line-height: 2;">
            {{ slide.description }}
          </p>

          <div>
            <BaseButton 
              :href="slide.buttonLink.startsWith('http') ? slide.buttonLink : undefined" 
              :to="!slide.buttonLink.startsWith('http') ? slide.buttonLink : undefined" 
              variant="primary"
            >
              {{ slide.buttonText }}
              <ChevronRight class="w-4 h-4" />
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Efeito de transição de cor do #111111 para cima -->
    <div class="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none z-20"></div>

    <!-- Indicadores (Bolinhas/Traços) -->
    <div class="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center space-x-2">
      <button
        v-for="(_, index) in slides"
        :key="'dot-' + index"
        @click="goToSlide(index)"
        class="h-2.5 rounded-full transition-all duration-300 focus:outline-none"
        :class="currentIndex === index ? 'bg-accent w-8' : 'bg-white/40 hover:bg-white/70 w-2.5'"
        :aria-label="`Ir para o slide ${index + 1}`"
      ></button>
    </div>
  </section>
</template>
