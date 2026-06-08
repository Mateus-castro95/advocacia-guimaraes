<script setup lang="ts">
import { Scale, ThumbsUp, Award } from 'lucide-vue-next'
</script>

<template>
  <section 
    id="aboutDiferencial" 
    class="py-24 bg-bg-dark border-t border-border-dark relative overflow-hidden"
    style="background-image: linear-gradient(rgba(17, 17, 17, 0.80), rgba(17, 17, 17, 0.80)), url('/img/banner-topo-adv.webp'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        <!-- Title Left -->
        <div class="lg:col-span-6 flex items-start gap-4">
          <span class="w-12 h-[2px] bg-accent mt-5 shrink-0"></span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl text-content-inverse font-title font-semibold leading-normal sm:leading-relaxed">
            Nossos diferenciais
          </h2>
        </div>
        
        <!-- Description Right -->
        <div class="lg:col-span-6">
          <p class="text-slate-300 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
            Solucionamos problemas jurídicos com rapidez, presteza e eficiência. Sempre atuando com transparência e confiabilidade.
          </p>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Card 1: Nossos valores -->
        <div 
          class="group relative bg-bg-darkAlt p-8 md:p-10 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-border-dark hover:border-accent transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center overflow-hidden"
        >
          <!-- Icon Circle -->
          <div class="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            <Scale class="w-7 h-7" />
          </div>
          
          <h3 class="text-xl sm:text-2xl font-title font-semibold text-content-inverse mb-4">
            Nossos valores
          </h3>
          
          <div class="text-slate-300 font-body text-sm sm:text-base space-y-4" style="line-height: 2;">
            <p>
              Estamos focados em resolver os problemas com extrema dedicação, foco e, principalmente, muita competência!
            </p>
            <p>
              Prezamos pela Ética, Segurança, Transparência, Inovação, Responsabilidade, Comprometimento, Qualidade nos Serviços e Respeito ao Próximo.
            </p>
          </div>
        </div>

        <!-- Card 2: Nossa visão -->
        <div 
          class="group relative bg-bg-darkAlt p-8 md:p-10 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-border-dark hover:border-accent transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center overflow-hidden"
        >
          <!-- Icon Circle -->
          <div class="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            <ThumbsUp class="w-7 h-7" />
          </div>
          
          <h3 class="text-xl sm:text-2xl font-title font-semibold text-content-inverse mb-4">
            Nossa visão
          </h3>
          
          <div class="text-slate-300 font-body text-sm sm:text-base" style="line-height: 2;">
            <p>
              Ser uma organização de referência na cidade de CANOINHAS e região, reconhecida pelo profissionalismo da equipe e qualidade na prestação de serviços aos nossos clientes.
            </p>
          </div>
        </div>

        <!-- Card 3: Nossa Missão -->
        <div 
          class="group relative bg-bg-darkAlt p-8 md:p-10 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-border-dark hover:border-accent transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center overflow-hidden"
        >
          <!-- Icon Circle -->
          <div class="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            <Award class="w-7 h-7" />
          </div>
          
          <h3 class="text-xl sm:text-2xl font-title font-semibold text-content-inverse mb-4">
            Nossa Missão
          </h3>
          
          <div class="text-slate-300 font-body text-sm sm:text-base" style="line-height: 2;">
            <p>
              Ser uma empresa que proporciona aos nossos colaboradores um ambiente de trabalho estimulante e através da nossa prestação de serviço participar do sucesso de nossos clientes.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
