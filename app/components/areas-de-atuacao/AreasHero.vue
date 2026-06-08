<script setup lang="ts">
import { 
  Calculator, 
  Home, 
  Users, 
  Scale, 
  Handshake, 
  Briefcase, 
  FileText, 
  Landmark, 
  Heart, 
  Sprout, 
  Gavel 
} from 'lucide-vue-next'
import { NuxtLink } from '#components'

const areas = [
  {
    name: 'Direito tributário',
    icon: Calculator,
    href: '/advogado-tributario-canoinhas-sc'
  },
  {
    name: 'Direito imobiliário',
    icon: Home,
    href: '/advogado-imobiliario-canoinhas-sc'
  },
  {
    name: 'Direito de família e sucessões',
    icon: Users,
    href: '/advogado-familia-e-sucessoes-canoinhas-sc'
  },
  {
    name: 'Direito civil',
    icon: Scale,
    href: '/advogado-civil-canoinhas-sc'
  },
  {
    name: 'Direito societário',
    icon: Handshake,
    href: '/advogado-societario-canoinhas-sc'
  },
  {
    name: 'Direito trabalhista',
    icon: Briefcase,
    href: '/advogado-trabalhista-canoinhas-sc'
  },
  {
    name: 'Direito previdenciário',
    icon: FileText,
    href: '/advogado-previdenciario-canoinhas-sc'
  },
  {
    name: 'Direito administrativo',
    icon: Landmark,
    href: '/advogado-administrativo-canoinhas-sc'
  },
  {
    name: 'Direito médico, odontológico e da saúde',
    icon: Heart,
    href: '/advogado-saude-canoinhas-sc'
  },
  {
    name: 'Direito ambiental',
    icon: Sprout,
    href: '/advogado-ambiental-canoinhas-sc'
  },
  {
    name: 'Direito penal',
    icon: Gavel,
    href: '/advogado-penal-canoinhas-sc'
  }
]
</script>

<template>
  <section id="areasHero" class="py-20 bg-bg-dark relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        <!-- Title Left -->
        <div class="lg:col-span-7 flex items-start gap-4">
          <span class="w-12 h-[2px] bg-accent mt-5 shrink-0"></span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl text-content-inverse font-title font-semibold leading-normal sm:leading-relaxed">
            Áreas que estamos atuando no momento
          </h1>
        </div>
        
        <!-- Description Right -->
        <div class="lg:col-span-5">
          <p class="text-slate-300 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
            Estamos prontos para analisar e desenvolver a melhor solução para seu caso. Estaremos com você até o ultimo momento.
          </p>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        
        <NuxtLink 
          v-for="area in areas"
          :key="area.name"
          :to="area.href"
          class="group relative bg-bg-darkAlt p-8 md:p-10 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-border-dark hover:border-accent transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center overflow-hidden"
        >
          <!-- Icon Circle -->
          <div class="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            <component :is="area.icon" class="w-7 h-7" />
          </div>
          
          <!-- Title -->
          <h3 class="text-lg sm:text-xl font-title font-semibold text-content-inverse group-hover:text-accent transition-colors duration-300">
            {{ area.name }}
          </h3>
        </NuxtLink>

      </div>

    </div>
  </section>
</template>
