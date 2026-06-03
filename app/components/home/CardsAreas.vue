<script setup lang="ts">
import { Briefcase, Calculator, Home } from 'lucide-vue-next'
import { NuxtLink } from '#components'

const cards = [
  {
    icon: Briefcase,
    title: 'Direito trabalhista',
    description: 'Empregador: Terceirização, Responsabilidade Solidária e Subsidiária, Poder Diretivo.',
    link: '/advogado-trabalhista-canoinhas-sc'
  },
  {
    icon: Calculator,
    title: 'Direito tributário',
    description: 'Consultoria Preventiva e Planejamento Tributário: organiza o planejamento tributário para, de forma lícita, estruturar a atividade empresarial de modo a enquadrá-la na menor carga tributária.',
    link: '/advogado-tributario-canoinhas-sc'
  },
  {
    icon: Home,
    title: 'Direito imobiliário',
    description: 'Direito imobiliário é o ramo do direito privado que regula qualquer tipo de discussão jurídica envolvendo bens imóveis, mesmo que essa relação também seja estudada...',
    link: '/advogado-imobiliario-canoinhas-sc'
  }
]
</script>

<template>
  <section id="cardsAreas" class="py-20 bg-bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="card in cards"
          :key="card.title"
          class="group relative bg-bg-darkAlt p-8 md:p-10 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-border-dark hover:border-accent transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center overflow-hidden"
        >
          <!-- Top Icon -->
          <div class="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
            <component :is="card.icon" class="w-14 h-14 stroke-[2]" />
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-title font-semibold text-content-inverse mb-3">
            {{ card.title }}
          </h3>

          <!-- Decorative Line Under Title -->
          <div class="flex items-center gap-1.5 mb-6">
            <span class="w-3 h-[2px] bg-accent"></span>
            <span class="w-8 h-[2px] bg-white/20 group-hover:w-12 transition-all duration-300"></span>
          </div>

          <!-- Description -->
          <p class="text-slate-300 font-body text-base leading-loose mb-4">
            {{ card.description }}
          </p>

          <!-- Watermark Background Icon -->
          <component
            :is="card.icon"
            class="absolute -bottom-8 -right-8 w-36 h-36 text-white opacity-[0.06] group-hover:opacity-[0.12] group-hover:scale-105 transition-all duration-300 pointer-events-none"
          />
        </div>
      </div>

      <!-- Bottom link section -->
      <div class="text-center mt-16">
        <p class="font-body text-slate-300 text-base sm:text-lg flex flex-wrap items-center justify-center gap-3">
          Você pode encontrar mais áreas que atuamos
          <NuxtLink
            to="/areas-de-atuacao"
            class="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-accent/30 text-accent font-semibold text-sm sm:text-base shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(201,168,106,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Clicando Aqui
          </NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>
