<script setup lang="ts">
import { ref } from 'vue'

type Tab = 'valores' | 'visao' | 'missao'
const activeTab = ref<Tab>('valores')

const selectTab = (tab: Tab) => {
  activeTab.value = tab
}
</script>

<template>
  <section 
    id="nossosValores" 
    class="py-24 relative overflow-hidden flex items-center min-h-[500px]"
    style="background-image: linear-gradient(rgba(17, 17, 17, 0.92), rgba(17, 17, 17, 0.92)), url('/img/banner-visoes.webp'); background-size: cover; background-position: center; background-attachment: fixed;"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        <!-- Left Side: Tabs Navigation -->
        <div class="md:col-span-4 flex flex-col space-y-6 md:space-y-8 pr-4">
          <button 
            @click="selectTab('valores')"
            class="transition-all duration-300 text-left focus:outline-none"
            :class="activeTab === 'valores' ? 'text-accent font-bold scale-105 origin-left' : 'text-white/60 hover:text-white/90'"
          >
            <span class="font-title text-2xl sm:text-3xl tracking-wide">Nossos valores</span>
          </button>
          
          <button 
            @click="selectTab('visao')"
            class="transition-all duration-300 text-left focus:outline-none"
            :class="activeTab === 'visao' ? 'text-accent font-bold scale-105 origin-left' : 'text-white/60 hover:text-white/90'"
          >
            <span class="font-title text-2xl sm:text-3xl tracking-wide">Nossa visão</span>
          </button>
          
          <button 
            @click="selectTab('missao')"
            class="transition-all duration-300 text-left focus:outline-none"
            :class="activeTab === 'missao' ? 'text-accent font-bold scale-105 origin-left' : 'text-white/60 hover:text-white/90'"
          >
            <span class="font-title text-2xl sm:text-3xl tracking-wide">Nossa Missão</span>
          </button>
        </div>

        <!-- Middle: Dynamic Indicator Line -->
        <div class="hidden md:col-span-1 md:flex justify-center h-48 relative">
          <div class="w-[3px] h-full bg-white/10 rounded-full flex flex-col">
            <!-- Segment 1: Nossos valores -->
            <div 
              class="w-full h-1/3 transition-all duration-300 rounded-t-full"
              :class="activeTab === 'valores' ? 'bg-accent shadow-[0_0_8px_rgba(201,168,106,0.5)]' : 'bg-transparent'"
            ></div>
            <!-- Segment 2: Nossa visão -->
            <div 
              class="w-full h-1/3 transition-all duration-300"
              :class="activeTab === 'visao' ? 'bg-accent shadow-[0_0_8px_rgba(201,168,106,0.5)]' : 'bg-transparent'"
            ></div>
            <!-- Segment 3: Nossa Missão -->
            <div 
              class="w-full h-1/3 transition-all duration-300 rounded-b-full"
              :class="activeTab === 'missao' ? 'bg-accent shadow-[0_0_8px_rgba(201,168,106,0.5)]' : 'bg-transparent'"
            ></div>
          </div>
        </div>

        <!-- Right Side: Content Area -->
        <div class="md:col-span-7 flex flex-col justify-center min-h-[220px]">
          <!-- Active Tab Content with fade transition -->
          <div class="transition-all duration-500 ease-in-out">
            <!-- Nossos Valores Content -->
            <div v-if="activeTab === 'valores'" class="space-y-6">
              <p class="text-slate-200 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
                Estamos focados em resolver os problemas com extrema dedicação, foco e, principalmente, muita competência!
              </p>
              <p class="text-slate-200 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
                Prezamos pela Ética, Segurança, Transparência, Inovação, Responsabilidade, Comprometimento, Qualidade nos Serviços e Respeito ao Próximo.
              </p>
            </div>

            <!-- Nossa Visão Content -->
            <div v-if="activeTab === 'visao'" class="space-y-6">
              <p class="text-slate-200 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
                Ser uma empresa que proporciona aos nossos colaboradores um ambiente de trabalho estimulante e através da nossa prestação de serviço participar do sucesso de nossos clientes.
              </p>
            </div>

            <!-- Nossa Missão Content -->
            <div v-if="activeTab === 'missao'" class="space-y-6">
              <p class="text-slate-200 font-body text-base sm:text-lg font-normal" style="line-height: 2;">
                Ser uma organização de referência na cidade de Canoinhas e região, reconhecida pelo profissionalismo da equipe e qualidade na prestação de serviços aos nossos clientes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
