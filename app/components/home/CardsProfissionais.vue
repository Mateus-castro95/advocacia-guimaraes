<script setup lang="ts">
const professionals = [
  {
    name: 'Gilney Fernando Guimarães',
    oab: 'OAB/SC 10.090',
    image: '/img/imagem-do-time.webp'
  },
  {
    name: 'Diogo Antônio Maiorchi Gomes',
    oab: 'OAB/SC 47.727',
    image: '/img/imagem-do-time.webp'
  }
]
</script>

<template>
  <section id="cardsProfissionais" class="py-24 bg-bg-darkAlt border-t border-border-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        <!-- Title Left -->
        <div class="lg:col-span-6 flex items-start gap-4">
          <span class="w-12 h-[2px] bg-accent mt-5 shrink-0"></span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl text-content-inverse font-title font-semibold leading-normal sm:leading-relaxed">
            Tenha uma equipe de profissionais qualificados
          </h2>
        </div>
        
        <!-- Description Right -->
        <div class="lg:col-span-6">
          <p class="text-slate-300 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
            Nossa equipe de especialistas são multidisciplinares, altamente treinados, com boa formação técnica e sempre mantendo contato próximo com todos os clientes.
          </p>
        </div>
      </div>

      <!-- Professional Cards Grid (2 columns as requested) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto pt-8">
        <div 
          v-for="prof in professionals" 
          :key="prof.name"
          class="group relative rounded-lg border border-accent/40 bg-bg-dark aspect-[4/3] shadow-lg transition-all duration-300"
        >
          <!-- Card Image Background -->
          <img 
            :src="prof.image" 
            :alt="prof.name" 
            class="w-full h-full object-cover rounded-lg opacity-90 group-hover:scale-102 transition-transform duration-700 ease-in-out"
          />

          <!-- Floating Info Card (Glassmorphic, overflowing top) -->
          <div 
            class="absolute -top-6 left-4 right-4 bg-bg-darkAlt/90 backdrop-blur-md p-4 sm:p-5 rounded-lg border border-accent/40 text-center shadow-2xl transition-all duration-300 z-20"
          >
            <h3 class="text-base sm:text-lg font-body font-semibold text-content-inverse mb-1">
              {{ prof.name }}
            </h3>
            <span class="font-body text-xs sm:text-sm text-accent tracking-wide font-medium">
              {{ prof.oab }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
